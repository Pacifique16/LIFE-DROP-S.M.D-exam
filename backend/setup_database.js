const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function setupDatabase() {
  try {
    console.log('Setting up database tables...');
    
    // Create donations table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS donations (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          donor_id UUID REFERENCES donors(id),
          hospital_id UUID REFERENCES hospitals(id),
          donation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          units_donated INTEGER DEFAULT 1,
          blood_type VARCHAR(5),
          status VARCHAR(20) DEFAULT 'completed',
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Create donor achievements table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS donor_achievements (
          id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
          donor_id UUID REFERENCES donors(id),
          achievement_name VARCHAR(100),
          achievement_description TEXT,
          points_awarded INTEGER DEFAULT 0,
          unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    console.log('Database tables created successfully!');
    console.log('You can now add sample data by running the commented SQL in setup_stats_tables.sql');
    
  } catch (error) {
    console.error('Error setting up database:', error);
  } finally {
    await pool.end();
  }
}

setupDatabase();