-- Create donations table
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
);

-- Create donor achievements table
CREATE TABLE IF NOT EXISTS donor_achievements (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    donor_id UUID REFERENCES donors(id),
    achievement_name VARCHAR(100),
    achievement_description TEXT,
    points_awarded INTEGER DEFAULT 0,
    unlocked_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample donations for testing (optional)
-- You can run this to add some test data
/*
INSERT INTO donations (donor_id, hospital_id, donation_date, units_donated, blood_type, status)
SELECT 
    d.id as donor_id,
    h.id as hospital_id,
    CURRENT_TIMESTAMP - INTERVAL '30 days' * random() as donation_date,
    1 as units_donated,
    d.blood_type,
    'completed' as status
FROM donors d
CROSS JOIN hospitals h
WHERE random() < 0.1  -- 10% chance for each donor-hospital combination
LIMIT 50;

-- Insert sample achievements
INSERT INTO donor_achievements (donor_id, achievement_name, achievement_description, points_awarded)
SELECT 
    d.id as donor_id,
    'First Donation' as achievement_name,
    'Completed your first blood donation' as achievement_description,
    100 as points_awarded
FROM donors d
WHERE random() < 0.5;  -- 50% of donors get this achievement
*/