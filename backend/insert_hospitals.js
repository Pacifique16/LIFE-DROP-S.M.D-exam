const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function insertHospitals() {
  try {
    const hospitals = [
      { name: 'Kigali Central Hospital', license: 'KCH-001', address: 'KN 4 Ave, Kigali', contact: 'Dr. Jean Uwimana', phone: '+250788123456' },
      { name: 'University Teaching Hospital', license: 'UTH-002', address: 'KG 106 St, Butare', contact: 'Dr. Marie Mukamana', phone: '+250788234567' },
      { name: 'King Faisal Hospital', license: 'KFH-003', address: 'KG 544 St, Kigali', contact: 'Dr. Ahmed Hassan', phone: '+250788345678' },
      { name: 'Rwanda Military Hospital', license: 'RMH-004', address: 'KG 256 St, Kigali', contact: 'Dr. Paul Kagame', phone: '+250788456789' },
      { name: 'Butaro Hospital', license: 'BTH-005', address: 'Butaro, Northern Province', contact: 'Dr. Agnes Binagwaho', phone: '+250788567890' },
      { name: 'Kibagabaga Hospital', license: 'KBH-006', address: 'Kibagabaga, Kigali', contact: 'Dr. Vincent Mutabazi', phone: '+250788678901' },
      { name: 'Nyagatare Hospital', license: 'NYH-007', address: 'Nyagatare, Eastern Province', contact: 'Dr. Grace Uwimana', phone: '+250788789012' },
      { name: 'Ruhengeri Hospital', license: 'RUH-008', address: 'Ruhengeri, Northern Province', contact: 'Dr. Claude Mambo', phone: '+250788890123' },
      { name: 'Gitwe Hospital', license: 'GTH-009', address: 'Gitwe, Southern Province', contact: 'Dr. Immaculee Mukeshimana', phone: '+250788901234' },
      { name: 'Kabutare Hospital', license: 'KAH-010', address: 'Kabutare, Southern Province', contact: 'Dr. Emmanuel Rudasingwa', phone: '+250789012345' },
      { name: 'Nemba Hospital', license: 'NMH-011', address: 'Nemba, Southern Province', contact: 'Dr. Josephine Uwimana', phone: '+250789123456' },
      { name: 'Rwinkwavu Hospital', license: 'RWH-012', address: 'Rwinkwavu, Eastern Province', contact: 'Dr. Peter Drobac', phone: '+250789234567' },
      { name: 'Kirehe Hospital', license: 'KRH-013', address: 'Kirehe, Eastern Province', contact: 'Dr. Fidele Ngabo', phone: '+250789345678' },
      { name: 'Masaka Hospital', license: 'MSH-014', address: 'Masaka, Southern Province', contact: 'Dr. Diane Gashumba', phone: '+250789456789' }
    ];

    for (const hospital of hospitals) {
      await pool.query(`
        INSERT INTO hospitals (hospital_name, license_number, facility_type, address, contact_person, phone, country)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `, [hospital.name, hospital.license, 'General Hospital', hospital.address, hospital.contact, hospital.phone, 'Rwanda']);
    }

    console.log('14 hospitals inserted successfully!');
  } catch (error) {
    console.error('Error inserting hospitals:', error);
  } finally {
    await pool.end();
  }
}

insertHospitals();