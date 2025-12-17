const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.use(cors());
app.use(express.json());

// Get donor by ID
app.get('/donor/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM donors WHERE id = $1', [req.params.id]);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update donor profile
app.put('/donor/:id', async (req, res) => {
  try {
    const { name, email, phone, age, blood_type, address } = req.body;
    const result = await pool.query(
      'UPDATE donors SET name = $1, email = $2, phone = $3, age = $4, blood_type = $5, address = $6, updated_at = CURRENT_TIMESTAMP WHERE id = $7 RETURNING *',
      [name, email, phone, age, blood_type, address, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get donor stats
app.get('/donor/:id/stats', async (req, res) => {
  try {
    const donations = await pool.query('SELECT COUNT(*) as count FROM donations WHERE donor_id = $1', [req.params.id]);
    const achievements = await pool.query('SELECT COUNT(*) as count FROM donor_achievements WHERE donor_id = $1', [req.params.id]);
    const points = await pool.query('SELECT COALESCE(SUM(points_awarded), 0) as total FROM donor_achievements WHERE donor_id = $1', [req.params.id]);
    
    res.json({
      totalDonations: parseInt(donations.rows[0].count),
      achievements: parseInt(achievements.rows[0].count),
      livesImpacted: parseInt(donations.rows[0].count) * 3,
      rewardPoints: parseInt(points.rows[0].total)
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get hospitals
app.get('/hospitals', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, name, location FROM hospitals ORDER BY name');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Schedule donation
app.post('/donation', async (req, res) => {
  try {
    console.log('Schedule donation request:', req.body);
    const { donor_id, hospital_id, scheduled_date, scheduled_time, blood_type } = req.body;
    const result = await pool.query(
      'INSERT INTO scheduled_donations (donor_id, hospital_id, scheduled_date, scheduled_time, blood_type, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [donor_id, hospital_id, scheduled_date, scheduled_time, blood_type, 'scheduled']
    );
    console.log('Donation scheduled:', result.rows[0]);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Schedule donation error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get scheduled donations
app.get('/donor/:id/scheduled', async (req, res) => {
  try {
    console.log('Get scheduled donations for donor:', req.params.id);
    const result = await pool.query(
      'SELECT sd.*, h.name as hospital_name, h.location FROM scheduled_donations sd JOIN hospitals h ON sd.hospital_id = h.id WHERE sd.donor_id = $1 ORDER BY sd.scheduled_date, sd.scheduled_time',
      [req.params.id]
    );
    console.log('Found scheduled donations:', result.rows);
    res.json(result.rows);
  } catch (error) {
    console.error('Get scheduled donations error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Get achievements
app.get('/donor/:id/achievements', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM donor_achievements WHERE donor_id = $1 ORDER BY unlocked_at DESC',
      [req.params.id]
    );
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await pool.query('SELECT * FROM donors WHERE email = $1', [email]);
    const user = result.rows[0];
    
    if (user && user.password === password) {
      res.json({ success: true, user });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Register
app.post('/register', async (req, res) => {
  try {
    const { name, email, password, phone, age, blood_type, address } = req.body;
    const result = await pool.query(
      'INSERT INTO donors (name, email, password, phone, age, blood_type, address) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [name, email, password, phone, age, blood_type, address]
    );
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5003, () => {
  console.log('Database proxy running on port 5003');
});