const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function createScheduledDonationsTable() {
  try {
    console.log('Creating scheduled_donations table...');
    
    await pool.query(`
      CREATE TABLE IF NOT EXISTS scheduled_donations (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        donor_id UUID REFERENCES donors(id),
        hospital_id UUID REFERENCES hospitals(id),
        scheduled_date DATE NOT NULL,
        scheduled_time VARCHAR(50) NOT NULL,
        blood_type VARCHAR(5),
        status VARCHAR(20) DEFAULT 'scheduled',
        notes TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    
    console.log('scheduled_donations table created successfully!');
    
  } catch (error) {
    console.error('Error creating table:', error);
  } finally {
    await pool.end();
  }
}

createScheduledDonationsTable();