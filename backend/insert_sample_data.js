const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function insertSampleData() {
  try {
    console.log('Inserting sample data...');
    
    // Insert 50 donors
    console.log('Inserting donors...');
    const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
    const firstNames = ['John', 'Jane', 'Mike', 'Sarah', 'David', 'Emma', 'Chris', 'Lisa', 'Tom', 'Anna'];
    const lastNames = ['Smith', 'Johnson', 'Brown', 'Davis', 'Wilson', 'Miller', 'Taylor', 'Anderson', 'Thomas', 'Jackson'];
    
    for (let i = 1; i <= 50; i++) {
      const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
      const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const bloodType = bloodTypes[Math.floor(Math.random() * bloodTypes.length)];
      const age = Math.floor(Math.random() * 40) + 18; // 18-58 years
      
      await pool.query(`
        INSERT INTO donors (name, email, password, phone, age, blood_type, address) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `, [
        `${firstName} ${lastName}`,
        `${firstName.toLowerCase()}${i}@example.com`,
        'password123',
        `+25078812${String(i).padStart(4, '0')}`,
        age,
        bloodType,
        'Kigali, Rwanda'
      ]);
    }
    
    // Insert 50 hospitals
    console.log('Inserting hospitals...');
    const hospitalNames = [
      'Central Hospital', 'General Hospital', 'Medical Center', 'Health Center', 'District Hospital',
      'Regional Hospital', 'University Hospital', 'Community Hospital', 'Private Clinic', 'Specialty Center'
    ];
    const locations = [
      'Kigali', 'Butare', 'Gisenyi', 'Ruhengeri', 'Byumba', 'Kibungo', 'Cyangugu', 'Gitarama', 'Rwamagana', 'Nyagatare'
    ];
    
    for (let i = 1; i <= 50; i++) {
      const baseName = hospitalNames[Math.floor(Math.random() * hospitalNames.length)];
      const location = locations[Math.floor(Math.random() * locations.length)];
      
      await pool.query(`
        INSERT INTO hospitals (name, location) 
        VALUES ($1, $2)
      `, [
        `${location} ${baseName} ${i}`,
        `${location}, Rwanda`
      ]);
    }
    
    // Get donor and hospital IDs for foreign keys
    const donors = await pool.query('SELECT id FROM donors');
    const hospitals = await pool.query('SELECT id FROM hospitals');
    
    // Insert 50 donations
    console.log('Inserting donations...');
    const statuses = ['completed', 'scheduled', 'in-progress'];
    
    for (let i = 1; i <= 50; i++) {
      const donorId = donors.rows[Math.floor(Math.random() * donors.rows.length)].id;
      const hospitalId = hospitals.rows[Math.floor(Math.random() * hospitals.rows.length)].id;
      const bloodType = bloodTypes[Math.floor(Math.random() * bloodTypes.length)];
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      const daysAgo = Math.floor(Math.random() * 365);
      const donationDate = new Date();
      donationDate.setDate(donationDate.getDate() - daysAgo);
      
      await pool.query(`
        INSERT INTO donations (donor_id, hospital_id, donation_date, units_donated, blood_type, status) 
        VALUES ($1, $2, $3, $4, $5, $6)
      `, [
        donorId,
        hospitalId,
        donationDate,
        Math.floor(Math.random() * 3) + 1, // 1-3 units
        bloodType,
        status
      ]);
    }
    
    // Insert 50 achievements
    console.log('Inserting achievements...');
    const achievementNames = [
      'First Donation', 'Regular Donor', 'Life Saver', 'Hero Badge', 'Community Champion',
      '5 Donations', '10 Donations', '25 Donations', 'Monthly Donor', 'Emergency Responder'
    ];
    const descriptions = [
      'Completed first blood donation', 'Donated blood regularly', 'Saved multiple lives',
      'Heroic contribution to community', 'Champion of blood donation', 'Milestone achievement',
      'Dedicated donor', 'Exceptional service', 'Consistent contributor', 'Emergency response hero'
    ];
    
    for (let i = 1; i <= 50; i++) {
      const donorId = donors.rows[Math.floor(Math.random() * donors.rows.length)].id;
      const achievementName = achievementNames[Math.floor(Math.random() * achievementNames.length)];
      const description = descriptions[Math.floor(Math.random() * descriptions.length)];
      const points = Math.floor(Math.random() * 500) + 50; // 50-550 points
      const daysAgo = Math.floor(Math.random() * 180);
      const unlockedDate = new Date();
      unlockedDate.setDate(unlockedDate.getDate() - daysAgo);
      
      await pool.query(`
        INSERT INTO donor_achievements (donor_id, achievement_name, achievement_description, points_awarded, unlocked_at) 
        VALUES ($1, $2, $3, $4, $5)
      `, [
        donorId,
        achievementName,
        description,
        points,
        unlockedDate
      ]);
    }
    
    console.log('Sample data inserted successfully!');
    console.log('- 50 donors');
    console.log('- 50 hospitals');
    console.log('- 50 donations');
    console.log('- 50 achievements');
    
  } catch (error) {
    console.error('Error inserting sample data:', error);
  } finally {
    await pool.end();
  }
}

insertSampleData();