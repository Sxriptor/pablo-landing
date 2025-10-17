-- =====================================================
-- SAMPLE TASKS DATA FOR POINT SYSTEM
-- =====================================================

-- Insert sample tasks for different sports and categories
INSERT INTO public.tasks (id, sport_id, title, description, task_type, points_reward, requirements, is_repeatable, is_active) VALUES

-- Daily Tasks (General)
('a0000001-0000-0000-0000-000000000001', NULL, 'Daily Check-in', 'Open the app and check in for the day', 'daily', 10, '{"action": "login"}', true, true),
('a0000002-0000-0000-0000-000000000002', NULL, 'Update Your Profile', 'Add or update information in your profile', 'daily', 15, '{"action": "profile_update"}', true, true),
('a0000003-0000-0000-0000-000000000003', NULL, 'Message a Friend', 'Send a message to a friend on the platform', 'daily', 20, '{"action": "send_message"}', true, true),

-- Daily Tasks (Sport-specific)
('b0000001-0000-0000-0000-000000000001', 'padel', 'Padel Practice Session', 'Complete a 30-minute padel practice session', 'daily', 25, '{"duration_minutes": 30, "activity": "practice"}', true, true),
('b0000002-0000-0000-0000-000000000002', 'tennis', 'Tennis Skill Drills', 'Practice tennis serves and volleys for 20 minutes', 'daily', 25, '{"duration_minutes": 20, "activity": "drills"}', true, true),
('b0000003-0000-0000-0000-000000000003', 'basketball', 'Basketball Shooting Practice', 'Make 50 successful shots in practice', 'daily', 30, '{"shots_made": 50}', true, true),

-- Weekly Tasks
('c0000001-0000-0000-0000-000000000001', NULL, 'Play 3 Matches', 'Participate in 3 matches this week', 'weekly', 100, '{"matches_count": 3}', true, true),
('c0000002-0000-0000-0000-000000000002', NULL, 'Play Against New Opponent', 'Play a match against someone you haven''t played before', 'weekly', 75, '{"new_opponent": true}', true, true),
('c0000003-0000-0000-0000-000000000003', NULL, 'Visit New Venue', 'Play at a venue you haven''t been to before', 'weekly', 50, '{"new_venue": true}', true, true),

-- Monthly Tasks
('d0000001-0000-0000-0000-000000000001', NULL, 'Join a Tournament', 'Participate in any tournament this month', 'monthly', 200, '{"tournament_participation": true}', true, true),
('d0000002-0000-0000-0000-000000000002', NULL, 'Skill Level Progress', 'Show improvement in your skill rating', 'monthly', 150, '{"skill_improvement": true}', true, true),
('d0000003-0000-0000-0000-000000000003', NULL, 'Attend 2 Social Events', 'Participate in 2 social events or classes', 'monthly', 100, '{"events_count": 2}', true, true),

-- Achievement Tasks (One-time)
('e0000001-0000-0000-0000-000000000001', NULL, 'First Victory', 'Win your first match on the platform', 'achievement', 100, '{"first_win": true}', false, true),
('e0000002-0000-0000-0000-000000000002', NULL, '10 Victories', 'Achieve 10 match victories', 'achievement', 250, '{"total_wins": 10}', false, true),
('e0000003-0000-0000-0000-000000000003', NULL, '50 Victories', 'Achieve 50 match victories', 'achievement', 500, '{"total_wins": 50}', false, true),
('e0000004-0000-0000-0000-000000000004', NULL, '100 Victories', 'Achieve 100 match victories', 'achievement', 1000, '{"total_wins": 100}', false, true),

('e0000005-0000-0000-0000-000000000005', NULL, '5-Win Streak', 'Win 5 matches in a row', 'achievement', 200, '{"win_streak": 5}', false, true),
('e0000006-0000-0000-0000-000000000006', NULL, '10-Win Streak', 'Win 10 matches in a row', 'achievement', 500, '{"win_streak": 10}', false, true),

('e0000007-0000-0000-0000-000000000007', NULL, 'Social Butterfly', 'Add 10 friends to your network', 'achievement', 150, '{"friends_count": 10}', false, true),
('e0000008-0000-0000-0000-000000000008', NULL, 'Venue Explorer', 'Play at 5 different venues', 'achievement', 200, '{"venues_count": 5}', false, true),

-- Sport-specific achievements
('f0000001-0000-0000-0000-000000000001', 'padel', 'Padel Specialist', 'Play 25 padel matches', 'achievement', 300, '{"sport_matches": 25, "sport": "padel"}', false, true),
('f0000002-0000-0000-0000-000000000002', 'tennis', 'Tennis Ace', 'Play 25 tennis matches', 'achievement', 300, '{"sport_matches": 25, "sport": "tennis"}', false, true),
('f0000003-0000-0000-0000-000000000003', 'basketball', 'Basketball Star', 'Play 25 basketball games', 'achievement', 300, '{"sport_matches": 25, "sport": "basketball"}', false, true),

-- Milestone Tasks
('10000001-0000-0000-0000-000000000001', NULL, '100 Matches Played', 'Participate in 100 total matches', 'milestone', 1000, '{"total_matches": 100}', false, true),
('10000002-0000-0000-0000-000000000002', NULL, '500 Matches Played', 'Participate in 500 total matches', 'milestone', 2500, '{"total_matches": 500}', false, true),
('10000003-0000-0000-0000-000000000003', NULL, '1000 Matches Played', 'Participate in 1000 total matches', 'milestone', 5000, '{"total_matches": 1000}', false, true),

('10000004-0000-0000-0000-000000000004', NULL, 'Top 10 Player', 'Reach top 10 in any sport leaderboard', 'milestone', 1500, '{"leaderboard_rank": 10}', false, true),
('10000005-0000-0000-0000-000000000005', NULL, 'Top 3 Player', 'Reach top 3 in any sport leaderboard', 'milestone', 3000, '{"leaderboard_rank": 3}', false, true),
('10000006-0000-0000-0000-000000000006', NULL, 'Champion', 'Reach #1 in any sport leaderboard', 'milestone', 5000, '{"leaderboard_rank": 1}', false, true)

ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    task_type = EXCLUDED.task_type,
    points_reward = EXCLUDED.points_reward,
    requirements = EXCLUDED.requirements,
    is_repeatable = EXCLUDED.is_repeatable,
    is_active = EXCLUDED.is_active;

-- =====================================================
-- SAMPLE EVENTS DATA
-- =====================================================

-- Insert sample events for the next few weeks
INSERT INTO public.events (
    id, host_id, sport_id, event_type_id, title, description, 
    skill_level, max_participants, points_reward, price, 
    start_time, end_time, status, location
) VALUES 

-- This week's events
(
    '11111111-1111-1111-1111-111111111111',
    '11111111-1111-1111-1111-111111111111', -- Sample host ID
    'padel',
    'class',
    'Beginner Padel Fundamentals',
    'Learn the basics of padel including grip, stance, and basic shots. Perfect for newcomers to the sport.',
    'Beginner',
    8,
    75,
    25.00,
    (NOW() + INTERVAL '2 days')::timestamp,
    (NOW() + INTERVAL '2 days' + INTERVAL '2 hours')::timestamp,
    'published',
    'Downtown Sports Center'
),

(
    '22222222-2222-2222-2222-222222222222',
    '11111111-1111-1111-1111-111111111111',
    'tennis',
    'workshop',
    'Advanced Tennis Serve Workshop',
    'Master your serve technique with professional coaching. Focus on power, accuracy, and consistency.',
    'Advanced',
    6,
    100,
    40.00,
    (NOW() + INTERVAL '4 days')::timestamp,
    (NOW() + INTERVAL '4 days' + INTERVAL '1.5 hours')::timestamp,
    'published',
    'Elite Tennis Academy'
),

(
    '33333333-3333-3333-3333-333333333333',
    '11111111-1111-1111-1111-111111111111',
    'padel',
    'tournament',
    'Weekend Padel Tournament',
    'Competitive tournament for intermediate and advanced players. Prizes for top 3 finishers.',
    'Intermediate',
    16,
    200,
    50.00,
    (NOW() + INTERVAL '6 days')::timestamp,
    (NOW() + INTERVAL '6 days' + INTERVAL '6 hours')::timestamp,
    'published',
    'City Sports Complex'
),

-- Next week's events
(
    '44444444-4444-4444-4444-444444444444',
    '11111111-1111-1111-1111-111111111111',
    'basketball',
    'clinic',
    'Basketball Skills Clinic',
    'Improve your shooting, dribbling, and defensive skills with professional coaching.',
    'All Levels',
    12,
    80,
    30.00,
    (NOW() + INTERVAL '9 days')::timestamp,
    (NOW() + INTERVAL '9 days' + INTERVAL '2 hours')::timestamp,
    'published',
    'Community Basketball Court'
),

(
    '55555555-5555-5555-5555-555555555555',
    '11111111-1111-1111-1111-111111111111',
    'tennis',
    'social',
    'Tennis Social Mixer',
    'Meet other tennis players in a fun, relaxed environment. Includes light refreshments and mini-matches.',
    'All Levels',
    20,
    50,
    15.00,
    (NOW() + INTERVAL '12 days')::timestamp,
    (NOW() + INTERVAL '12 days' + INTERVAL '3 hours')::timestamp,
    'published',
    'Riverside Tennis Club'
)

ON CONFLICT (id) DO NOTHING;

-- =====================================================
-- HELPER FUNCTIONS FOR TASK COMPLETION
-- =====================================================

-- Function to check and award achievement tasks
CREATE OR REPLACE FUNCTION check_achievement_tasks(p_user_id UUID, p_sport_id TEXT DEFAULT NULL)
RETURNS void AS $$
DECLARE
    user_stats RECORD;
    task_record RECORD;
BEGIN
    -- Get user statistics
    SELECT 
        COALESCE(SUM(usp.total_matches), 0) as total_matches,
        COALESCE(SUM(usp.wins), 0) as total_wins,
        COUNT(DISTINCT f.friend_id) as friends_count
    INTO user_stats
    FROM public.profiles p
    LEFT JOIN public.user_sport_profiles usp ON p.id = usp.user_id
    LEFT JOIN public.friendships f ON p.id = f.user_id AND f.status = 'accepted'
    WHERE p.id = p_user_id;

    -- Check achievement tasks
    FOR task_record IN 
        SELECT * FROM public.tasks 
        WHERE task_type = 'achievement' 
        AND is_active = true
        AND (sport_id IS NULL OR sport_id = p_sport_id)
        AND id NOT IN (
            SELECT task_id FROM public.user_task_completions 
            WHERE user_id = p_user_id
        )
    LOOP
        -- Check if user meets requirements
        IF (task_record.requirements->>'total_wins')::int <= user_stats.total_wins
        OR (task_record.requirements->>'total_matches')::int <= user_stats.total_matches
        OR (task_record.requirements->>'friends_count')::int <= user_stats.friends_count
        THEN
            -- Award the achievement
            INSERT INTO public.user_task_completions (user_id, task_id, points_earned)
            VALUES (p_user_id, task_record.id, task_record.points_reward);
            
            -- Award points
            INSERT INTO public.user_points (user_id, sport_id, activity_id, points, description, reference_id, reference_type)
            VALUES (p_user_id, p_sport_id, 'achievement', task_record.points_reward, 
                   'Achievement: ' || task_record.title, task_record.id, 'task');
        END IF;
    END LOOP;
END;
$$ LANGUAGE plpgsql;

-- Function to increment event participants
CREATE OR REPLACE FUNCTION increment_event_participants(event_id UUID)
RETURNS void AS $$
BEGIN
    UPDATE public.events 
    SET current_participants = current_participants + 1
    WHERE id = event_id;
END;
$$ LANGUAGE plpgsql;

-- Function to decrement event participants
CREATE OR REPLACE FUNCTION decrement_event_participants(event_id UUID)
RETURNS void AS $$
BEGIN
    UPDATE public.events 
    SET current_participants = GREATEST(current_participants - 1, 0)
    WHERE id = event_id;
END;
$$ LANGUAGE plpgsql;