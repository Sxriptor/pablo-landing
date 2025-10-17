-- =====================================================
-- PLAYCIRCLE - SEED MATCHES DATA
-- Populate upcoming matches for discover page
-- NOTE: Run seed-venues.sql and seed-courts.sql first!
-- Run this file in your Supabase SQL Editor
-- =====================================================

BEGIN;

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
    'Advanced-level match. High-level play expected!'
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

-- Verification
SELECT '✅ Matches inserted: ' || COUNT(*) as result
FROM matches
WHERE match_date >= CURRENT_DATE AND id::text LIKE 'a%';

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
