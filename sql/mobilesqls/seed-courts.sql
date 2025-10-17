-- =====================================================
-- PLAYCIRCLE - SEED COURTS DATA
-- Populate courts at venues
-- NOTE: Run seed-venues.sql first!
-- Run this file in your Supabase SQL Editor
-- =====================================================

BEGIN;

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

COMMIT;

-- Verification
SELECT '✅ Courts inserted: ' || COUNT(*) as result
FROM courts
WHERE venue_id IN (
    '11111111-1111-1111-1111-111111111111',
    '22222222-2222-2222-2222-222222222222',
    '33333333-3333-3333-3333-333333333333',
    '44444444-4444-4444-4444-444444444444',
    '55555555-5555-5555-5555-555555555555'
);
