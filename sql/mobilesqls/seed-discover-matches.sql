-- =====================================================
-- PLAYCIRCLE - SEED DATA FOR DISCOVER PAGE
-- Simple seed data matching the actual table structure
-- Run this file in your Supabase SQL Editor
-- =====================================================

BEGIN;

-- =====================================================
-- 1. SEED VENUES
-- =====================================================

INSERT INTO venues (
    id,
    name,
    address,
    city,
    state,
    country,
    postal_code,
    latitude,
    longitude,
    venue_type,
    is_indoor,
    number_of_courts,
    has_lockers,
    has_showers,
    has_parking,
    has_pro_shop,
    has_restaurant,
    has_lighting,
    phone,
    email,
    website,
    image_url,
    rating,
    total_reviews,
    base_price_per_hour,
    is_active,
    opening_time,
    closing_time
) VALUES
-- Venue 1: Downtown Padel Club
(
    '11111111-1111-1111-1111-111111111111',
    'Downtown Padel Club',
    '123 Main Street',
    'Los Angeles',
    'CA',
    'USA',
    '90001',
    34.0522,
    -118.2437,
    'Sports Club',
    true,
    6,
    true,
    true,
    true,
    true,
    true,
    true,
    '+1-555-0101',
    'info@downtownpadel.com',
    'https://downtownpadel.com',
    'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=600&fit=crop',
    4.7,
    328,
    25.00,
    true,
    '06:00:00',
    '23:00:00'
),
-- Venue 2: Sunset Sports Center
(
    '22222222-2222-2222-2222-222222222222',
    'Sunset Sports Center',
    '456 Beach Avenue',
    'Santa Monica',
    'CA',
    'USA',
    '90401',
    34.0195,
    -118.4912,
    'Recreation Center',
    false,
    4,
    true,
    true,
    true,
    false,
    false,
    true,
    '+1-555-0202',
    'info@sunsetsports.com',
    'https://sunsetsports.com',
    'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=800&h=600&fit=crop',
    4.5,
    214,
    20.00,
    true,
    '07:00:00',
    '21:00:00'
),
-- Venue 3: Elite Padel Academy
(
    '33333333-3333-3333-3333-333333333333',
    'Elite Padel Academy',
    '789 Sports Way',
    'Beverly Hills',
    'CA',
    'USA',
    '90210',
    34.0736,
    -118.4004,
    'Sports Club',
    true,
    8,
    true,
    true,
    true,
    true,
    true,
    true,
    '+1-555-0303',
    'academy@elitepadel.com',
    'https://elitepadel.com',
    'https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=800&h=600&fit=crop',
    4.9,
    567,
    35.00,
    true,
    '05:00:00',
    '23:00:00'
),
-- Venue 4: Riverside Courts
(
    '44444444-4444-4444-4444-444444444444',
    'Riverside Courts',
    '321 River Drive',
    'Long Beach',
    'CA',
    'USA',
    '90802',
    33.7701,
    -118.1937,
    'Court Complex',
    false,
    5,
    true,
    true,
    true,
    false,
    true,
    true,
    '+1-555-0404',
    'info@riversidecourts.com',
    'https://riversidecourts.com',
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    4.6,
    189,
    22.00,
    true,
    '06:00:00',
    '22:00:00'
),
-- Venue 5: Metro Tennis & Padel Club
(
    '55555555-5555-5555-5555-555555555555',
    'Metro Tennis & Padel Club',
    '555 Park Boulevard',
    'Pasadena',
    'CA',
    'USA',
    '91101',
    34.1478,
    -118.1445,
    'Sports Club',
    true,
    7,
    true,
    true,
    true,
    true,
    false,
    true,
    '+1-555-0505',
    'info@metrotennis.com',
    'https://metrotennis.com',
    'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=800&h=600&fit=crop',
    4.8,
    412,
    28.00,
    true,
    '06:00:00',
    '22:00:00'
)
ON CONFLICT (id) DO NOTHING;

-- =====================================================
-- 2. SEED COURTS
-- =====================================================

INSERT INTO courts (
    id,
    venue_id,
    name,
    sport_id,
    surface_type,
    is_indoor,
    court_number,
    capacity,
    equipment_included,
    special_features,
    is_active,
    rating,
    total_reviews
) VALUES
-- Downtown Padel Club Courts
('c1111111-1111-1111-1111-111111111111', '11111111-1111-1111-1111-111111111111', 'Court 1', 'padel', 'Artificial Turf', true, 1, 4, '["Balls", "Paddles"]', '{"lighting": "LED"}', true, 4.8, 52),
('c1111111-1111-1111-1111-111111111112', '11111111-1111-1111-1111-111111111111', 'Court 2', 'padel', 'Artificial Turf', true, 2, 4, '["Balls", "Paddles"]', '{"lighting": "LED"}', true, 4.7, 48),
('c1111111-1111-1111-1111-111111111113', '11111111-1111-1111-1111-111111111111', 'Court 3', 'padel', 'Artificial Turf', true, 3, 4, '["Balls", "Paddles"]', '{"lighting": "LED", "premium": true}', true, 4.9, 67),

-- Sunset Sports Center Courts
('c2222222-2222-2222-2222-222222222221', '22222222-2222-2222-2222-222222222222', 'Beach Court 1', 'padel', 'Synthetic Grass', false, 1, 4, '["Balls"]', '{"ocean_view": true}', true, 4.5, 34),
('c2222222-2222-2222-2222-222222222222', '22222222-2222-2222-2222-222222222222', 'Beach Court 2', 'padel', 'Synthetic Grass', false, 2, 4, '["Balls"]', '{"ocean_view": true}', true, 4.6, 29),

-- Elite Padel Academy Courts
('c3333333-3333-3333-3333-333333333331', '33333333-3333-3333-3333-333333333333', 'Championship Court', 'padel', 'Professional Turf', true, 1, 4, '["Professional Balls"]', '{"lighting": "Professional", "spectator_seating": 200}', true, 5.0, 89),
('c3333333-3333-3333-3333-333333333332', '33333333-3333-3333-3333-333333333333', 'Academy Court 1', 'padel', 'Professional Turf', true, 2, 4, '["Professional Balls"]', '{"lighting": "Professional", "video": true}', true, 4.9, 76),
('c3333333-3333-3333-3333-333333333333', '33333333-3333-3333-3333-333333333333', 'Academy Court 2', 'padel', 'Professional Turf', true, 3, 4, '["Professional Balls"]', '{"lighting": "Professional"}', true, 4.8, 71),

-- Riverside Courts
('c4444444-4444-4444-4444-444444444441', '44444444-4444-4444-4444-444444444444', 'Riverside Padel 1', 'padel', 'Artificial Turf', false, 1, 4, '["Balls"]', '{"river_view": true}', true, 4.7, 41),
('c4444444-4444-4444-4444-444444444442', '44444444-4444-4444-4444-444444444444', 'Riverside Padel 2', 'padel', 'Artificial Turf', true, 2, 4, '["Balls"]', '{"lighting": "LED"}', true, 4.6, 38),

-- Metro Tennis & Padel Club Courts
('c5555555-5555-5555-5555-555555555551', '55555555-5555-5555-5555-555555555555', 'Metro Padel 1', 'padel', 'Premium Turf', true, 1, 4, '["Balls", "Paddles"]', '{"lighting": "Premium LED"}', true, 4.8, 54),
('c5555555-5555-5555-5555-555555555552', '55555555-5555-5555-5555-555555555555', 'Metro Padel 2', 'padel', 'Premium Turf', true, 2, 4, '["Balls", "Paddles"]', '{"lighting": "Premium LED"}', true, 4.7, 49)
ON CONFLICT (id) DO NOTHING;

-- =====================================================
-- 3. SEED MATCHES
-- =====================================================

INSERT INTO matches (
    id,
    court_id,
    sport_id,
    match_date,
    match_time,
    duration_minutes,
    match_type,
    skill_level,
    max_players,
    current_players,
    total_cost,
    price_per_player,
    status,
    description
) VALUES
-- Today's matches
(
    'a1111111-1111-1111-1111-111111111111',
    'c1111111-1111-1111-1111-111111111111',
    'padel',
    CURRENT_DATE,
    '18:00:00',
    90,
    'competitive',
    'Intermediate',
    4,
    2,
    40.00,
    10.00,
    'open',
    'Competitive doubles match. Looking for intermediate players!'
),
(
    'a1111111-1111-1111-1111-111111111112',
    'c1111111-1111-1111-1111-111111111113',
    'padel',
    CURRENT_DATE,
    '20:00:00',
    60,
    'casual',
    'Beginner',
    4,
    1,
    32.00,
    8.00,
    'open',
    'Evening casual game for beginners. Come learn and have fun!'
),

-- Tomorrow
(
    'a2222222-2222-2222-2222-222222222221',
    'c2222222-2222-2222-2222-222222222221',
    'padel',
    CURRENT_DATE + 1,
    '10:00:00',
    60,
    'casual',
    'Beginner',
    4,
    3,
    35.00,
    8.75,
    'open',
    'Morning beach padel! Beautiful ocean views.'
),
(
    'a2222222-2222-2222-2222-222222222222',
    'c3333333-3333-3333-3333-333333333332',
    'padel',
    CURRENT_DATE + 1,
    '19:00:00',
    90,
    'competitive',
    'Advanced',
    4,
    2,
    60.00,
    15.00,
    'open',
    'Advanced competitive match at Elite Academy.'
),

-- Day after tomorrow
(
    'a3333333-3333-3333-3333-333333333331',
    'c3333333-3333-3333-3333-333333333331',
    'padel',
    CURRENT_DATE + 2,
    '14:30:00',
    90,
    'competitive',
    'Advanced',
    4,
    1,
    50.00,
    12.50,
    'open',
    'Championship court match. Tournament-level players welcome!'
),
(
    'a4444444-4444-4444-4444-444444444441',
    'c4444444-4444-4444-4444-444444444441',
    'padel',
    CURRENT_DATE + 2,
    '16:00:00',
    90,
    'casual',
    'Intermediate',
    4,
    2,
    44.00,
    11.00,
    'open',
    'Riverside casual match with beautiful views.'
),

-- 3 days from now
(
    'a5555555-5555-5555-5555-555555555551',
    'c5555555-5555-5555-5555-555555555551',
    'padel',
    CURRENT_DATE + 3,
    '18:30:00',
    60,
    'competitive',
    'Intermediate',
    4,
    2,
    40.00,
    10.00,
    'open',
    'Evening competitive doubles at Metro Club.'
),
(
    'a1111111-1111-1111-1111-111111111113',
    'c1111111-1111-1111-1111-111111111112',
    'padel',
    CURRENT_DATE + 3,
    '12:00:00',
    90,
    'casual',
    'Mixed',
    4,
    1,
    36.00,
    9.00,
    'open',
    'Lunchtime padel. All skill levels welcome!'
),

-- 4 days from now
(
    'a2222222-2222-2222-2222-222222222223',
    'c2222222-2222-2222-2222-222222222222',
    'padel',
    CURRENT_DATE + 4,
    '09:00:00',
    90,
    'casual',
    'Beginner',
    4,
    2,
    32.00,
    8.00,
    'open',
    'Morning beach padel for beginners.'
),
(
    'a3333333-3333-3333-3333-333333333332',
    'c3333333-3333-3333-3333-333333333333',
    'padel',
    CURRENT_DATE + 4,
    '17:00:00',
    90,
    'competitive',
    'Advanced',
    4,
    2,
    80.00,
    20.00,
    'open',
    'Advanced-level match. Pro-level play expected!'
),

-- 5 days from now (weekend)
(
    'a4444444-4444-4444-4444-444444444442',
    'c4444444-4444-4444-4444-444444444442',
    'padel',
    CURRENT_DATE + 5,
    '10:00:00',
    90,
    'casual',
    'Mixed',
    4,
    3,
    40.00,
    10.00,
    'open',
    'Weekend social padel. Mixed skill levels!'
),
(
    'a5555555-5555-5555-5555-555555555552',
    'c5555555-5555-5555-5555-555555555552',
    'padel',
    CURRENT_DATE + 5,
    '11:00:00',
    60,
    'casual',
    'Intermediate',
    4,
    2,
    36.00,
    9.00,
    'open',
    'Late morning weekend session.'
),
(
    'a1111111-1111-1111-1111-111111111114',
    'c1111111-1111-1111-1111-111111111113',
    'padel',
    CURRENT_DATE + 5,
    '15:00:00',
    90,
    'competitive',
    'Advanced',
    4,
    1,
    56.00,
    14.00,
    'open',
    'Weekend competitive match on premium court.'
),

-- 6 days from now
(
    'a2222222-2222-2222-2222-222222222224',
    'c2222222-2222-2222-2222-222222222221',
    'padel',
    CURRENT_DATE + 6,
    '08:00:00',
    90,
    'casual',
    'Mixed',
    4,
    2,
    35.00,
    8.75,
    'open',
    'Early morning beach padel. Beautiful sunrise views!'
),
(
    'a3333333-3333-3333-3333-333333333333',
    'c3333333-3333-3333-3333-333333333331',
    'padel',
    CURRENT_DATE + 6,
    '13:00:00',
    120,
    'tournament',
    'Mixed',
    8,
    4,
    160.00,
    20.00,
    'open',
    'Weekend mini-tournament! Round-robin format, prizes!'
),
(
    'a4444444-4444-4444-4444-444444444443',
    'c4444444-4444-4444-4444-444444444441',
    'padel',
    CURRENT_DATE + 6,
    '16:30:00',
    60,
    'casual',
    'Intermediate',
    4,
    1,
    40.00,
    10.00,
    'open',
    'Afternoon riverside session. Great weather!'
),

-- 7 days from now
(
    'a5555555-5555-5555-5555-555555555553',
    'c5555555-5555-5555-5555-555555555551',
    'padel',
    CURRENT_DATE + 7,
    '18:00:00',
    90,
    'competitive',
    'Intermediate',
    4,
    3,
    48.00,
    12.00,
    'open',
    'After-work competitive doubles. One spot left!'
),
(
    'a1111111-1111-1111-1111-111111111115',
    'c1111111-1111-1111-1111-111111111111',
    'padel',
    CURRENT_DATE + 7,
    '19:30:00',
    60,
    'casual',
    'Beginner',
    4,
    2,
    32.00,
    8.00,
    'open',
    'Evening beginner-friendly match.'
)
ON CONFLICT (id) DO NOTHING;

COMMIT;

-- =====================================================
-- VERIFICATION
-- =====================================================

SELECT
    '✅ Venues: ' || COUNT(*) as result
FROM venues
WHERE id LIKE '11111111%' OR id LIKE '22222222%' OR id LIKE '33333333%' OR id LIKE '44444444%' OR id LIKE '55555555%'

UNION ALL

SELECT
    '✅ Courts: ' || COUNT(*) as result
FROM courts
WHERE venue_id LIKE '11111111%' OR venue_id LIKE '22222222%' OR venue_id LIKE '33333333%' OR venue_id LIKE '44444444%' OR venue_id LIKE '55555555%'

UNION ALL

SELECT
    '✅ Matches: ' || COUNT(*) as result
FROM matches
WHERE match_date >= CURRENT_DATE AND id LIKE 'a%';

-- Preview matches
SELECT
    v.name as venue,
    c.name as court,
    m.match_date,
    m.match_time,
    m.match_type,
    m.skill_level,
    m.current_players || '/' || m.max_players as players,
    '$' || m.price_per_player as price
FROM matches m
JOIN courts c ON m.court_id = c.id
JOIN venues v ON c.venue_id = v.id
WHERE m.match_date >= CURRENT_DATE
ORDER BY m.match_date, m.match_time
LIMIT 10;
