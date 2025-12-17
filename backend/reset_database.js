const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function resetDatabase() {
  try {
    console.log('Dropping all tables...');
    
    // Drop tables in correct order (considering foreign keys)
    await pool.query('DROP TABLE IF EXISTS donor_achievements CASCADE');
    await pool.query('DROP TABLE IF EXISTS donations CASCADE');
    await pool.query('DROP TABLE IF EXISTS hospitals CASCADE');
    await pool.query('DROP TABLE IF EXISTS donors CASCADE');
    
    console.log('Creating new tables...');
    
    // Create donors table
    await pool.query(`
      CREATE TABLE donors (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        phone VARCHAR(20),
        age INTEGER,
        blood_type VARCHAR(5),
        address TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Create hospitals table
    await pool.query(`
      CREATE TABLE hospitals (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        name VARCHAR(255) NOT NULL,
        location TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    // Create donations table
    await pool.query(`
      CREATE TABLE donations (
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
      CREATE TABLE donor_achievements (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        donor_id UUID REFERENCES donors(id),
        achievement_name VARCHAR(100),
        achievement_description TEXT,
        points_awarded INTEGER DEFAULT 0,
        unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    console.log('Tables created successfully!');
    
    // Insert sample hospitals
    console.log('Inserting sample hospitals...');
    const hospitals = [
      ['Kigali Central Hospital', 'KN 4 Ave, Kigali'],
      ['University Teaching Hospital', 'KG 106 St, Butare'],
      ['King Faisal Hospital', 'KG 544 St, Kigali'],
      ['Rwanda Military Hospital', 'KG 256 St, Kigali'],
      ['Kibagabaga Hospital', 'KG 15 Ave, Kigali']
    ];
    
    for (const [name, location] of hospitals) {
      await pool.query(
        'INSERT INTO hospitals (name, location) VALUES ($1, $2)',
        [name, location]
      );
    }
    
    // Insert sample donor
    console.log('Inserting sample donor...');
    await pool.query(`
      INSERT INTO donors (name, email, password, phone, age, blood_type, address) 
      VALUES ('John Doe', 'john@example.com', 'password123', '+250788123456', 25, 'O+', 'Kigali, Rwanda')
    `);
    
    console.log('Database reset complete!');
    
  } catch (error) {
    console.error('Error resetting database:', error);
  } finally {
    await pool.end();
  }
}

resetDatabase();