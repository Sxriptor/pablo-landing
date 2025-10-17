-- =====================================================
-- SIMPLE LEADERBOARD TEST DATA
-- This creates test data without foreign key constraint issues
-- =====================================================

-- First, let's create the basic sports data
INSERT INTO public.sports (id, name, icon, color, min_players, max_players, team_size, scoring_system, court_types, equipment, description) VALUES
('padel', 'Padel', 'tennisball', '#3DD598', 4, 4, 2, 'tennis', ARRAY['Artificial Grass', 'Synthetic Turf', 'Concrete'], ARRAY['Padel racket', 'Padel ball'], 'Fast-paced racket sport played in an enclosed court'),
('tennis', 'Tennis', 'tennisball', '#51CF66', 2, 4, 1, 'tennis', ARRAY['Hard Court', 'Clay', 'Grass', 'Synthetic'], ARRAY['Tennis racket', 'Tennis ball'], 'Classic racket sport with singles or doubles play'),
('basketball', 'Basketball', 'basketball', '#FF8C00', 2, 10, 5, 'basketball', ARRAY['Indoor Court', 'Outdoor Court', 'Concrete'], ARRAY['Basketball'], 'Team sport with hoops and basketball'),
('soccer', 'Soccer', 'football', '#228B22', 4, 22, 11, 'soccer', ARRAY['Grass', 'Artificial Turf', 'Indoor Court'], ARRAY['Soccer ball'], 'Team sport played with feet and a ball'),
('volleyball', 'Volleyball', 'football', '#FF4500', 4, 12, 6, 'volleyball', ARRAY['Indoor Court', 'Beach Court', 'Grass'], ARRAY['Volleyball', 'Net'], 'Team sport with net and ball')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    icon = EXCLUDED.icon,
    color = EXCLUDED.color,
    min_players = EXCLUDED.min_players,
    max_players = EXCLUDED.max_players,
    team_size = EXCLUDED.team_size,
    scoring_system = EXCLUDED.scoring_system,
    court_types = EXCLUDED.court_types,
    equipment = EXCLUDED.equipment,
    description = EXCLUDED.description;

-- Create mock leaderboard data that doesn't depend on profiles table
-- This approach creates leaderboard entries with mock user data

-- Method 1: Get the current user's ID and create leaderboard data for them
DO $$
DECLARE
    current_user_id UUID;
    user_exists BOOLEAN := FALSE;
BEGIN
    -- Try to get the current authenticated user
    SELECT auth.uid() INTO current_user_id;
    
    -- Check if we have a current user
    IF current_user_id IS NOT NULL THEN
        user_exists := TRUE;
        RAISE NOTICE 'Found current user: %', current_user_id;
        
        -- Create sport profiles for the current user
        INSERT INTO public.user_sport_profiles (
            user_id, sport_id, skill_level, preferred_position, 
            total_matches, wins, losses, points
        ) VALUES 
        (current_user_id, 'padel', 'Intermediate', 'Right Side', 15, 9, 6, 850),
        (current_user_id, 'tennis', 'Advanced', 'Singles', 22, 16, 6, 1200),
        (current_user_id, 'basketball', 'Beginner', 'Point Guard', 8, 3, 5, 320)
        ON CONFLICT (user_id, sport_id) DO UPDATE SET
            skill_level = EXCLUDED.skill_level,
            preferred_position = EXCLUDED.preferred_position,
            total_matches = EXCLUDED.total_matches,
            wins = EXCLUDED.wins,
            losses = EXCLUDED.losses,
            points = EXCLUDED.points,
            updated_at = NOW();

        -- Create leaderboard entries for the current user
        INSERT INTO public.sport_leaderboards (
            user_id, sport_id, region, rank, points, total_matches, wins, losses, win_rate, trend, period
        ) VALUES 
        (current_user_id, 'padel', 'global', 1, 850, 15, 9, 6, 60.00, 'up', 'all_time'),
        (current_user_id, 'tennis', 'global', 1, 1200, 22, 16, 6, 72.73, 'up', 'all_time'),
        (current_user_id, 'basketball', 'global', 1, 320, 8, 3, 5, 37.50, 'stable', 'all_time'),
        
        -- Local rankings
        (current_user_id, 'padel', 'local', 1, 850, 15, 9, 6, 60.00, 'up', 'all_time'),
        (current_user_id, 'tennis', 'local', 1, 1200, 22, 16, 6, 72.73, 'up', 'all_time'),
        
        -- National rankings  
        (current_user_id, 'padel', 'national', 1, 850, 15, 9, 6, 60.00, 'up', 'all_time')
        
        ON CONFLICT (user_id, sport_id, region, period) DO UPDATE SET
            rank = EXCLUDED.rank,
            points = EXCLUDED.points,
            total_matches = EXCLUDED.total_matches,
            wins = EXCLUDED.wins,
            losses = EXCLUDED.losses,
            win_rate = EXCLUDED.win_rate,
            trend = EXCLUDED.trend,
            updated_at = NOW();

        -- Add some point history for the current user
        INSERT INTO public.user_points (
            user_id, sport_id, activity_id, points, description, reference_type, created_at
        ) VALUES 
        (current_user_id, 'padel', 'match_win', 100, 'Won padel match', 'match', NOW() - INTERVAL '2 hours'),
        (current_user_id, 'padel', 'daily_practice', 25, 'Completed daily practice session', 'task', NOW() - INTERVAL '1 day'),
        (current_user_id, 'tennis', 'match_win', 100, 'Won tennis match', 'match', NOW() - INTERVAL '4 hours'),
        (current_user_id, 'basketball', 'daily_practice', 30, 'Completed basketball drills', 'task', NOW() - INTERVAL '1 day')
        ON CONFLICT DO NOTHING;

        -- Create some task completions
        INSERT INTO public.user_task_completions (
            user_id, task_id, points_earned, completed_at, period_start, period_end
        ) VALUES 
        (current_user_id, 'daily_login', 10, NOW(), CURRENT_DATE, CURRENT_DATE),
        (current_user_id, 'daily_practice', 25, NOW() - INTERVAL '2 hours', CURRENT_DATE, CURRENT_DATE),
        (current_user_id, 'weekly_match_play', 100, NOW() - INTERVAL '1 day', 
         DATE_TRUNC('week', CURRENT_DATE), DATE_TRUNC('week', CURRENT_DATE) + INTERVAL '6 days')
        ON CONFLICT DO NOTHING;

        -- Create notifications for the current user
        INSERT INTO public.notifications (
            user_id, type, title, message, read, created_at
        ) VALUES 
        (current_user_id, 'achievement', 'Achievement Unlocked!', 'You completed your daily practice and earned 25 points!', false, NOW() - INTERVAL '2 hours'),
        (current_user_id, 'leaderboard', 'Leaderboard Update', 'You are now #1 in the Padel global leaderboard!', false, NOW() - INTERVAL '1 day'),
        (current_user_id, 'points', 'Points Earned', 'You earned 100 points for winning your match!', true, NOW() - INTERVAL '4 hours')
        ON CONFLICT DO NOTHING;

    ELSE
        RAISE NOTICE 'No current user found. Leaderboard will use mock data from the app.';
    END IF;
END $$;

-- Create some additional mock leaderboard entries (these won't have profile links but will show in leaderboard)
-- These are created as "ghost" entries that represent other players

INSERT INTO public.sport_leaderboards (
    id, user_id, sport_id, region, rank, points, total_matches, wins, losses, win_rate, trend, period, updated_at
) VALUES 
-- Padel mock players (using generated UUIDs that don't need to exist in profiles)
(gen_random_uuid(), gen_random_uuid(), 'padel', 'global', 2, 2640, 38, 26, 12, 68.42, 'up', 'all_time', NOW()),
(gen_random_uuid(), gen_random_uuid(), 'padel', 'global', 3, 2420, 42, 28, 14, 66.67, 'down', 'all_time', NOW()),
(gen_random_uuid(), gen_random_uuid(), 'padel', 'global', 4, 2180, 35, 22, 13, 62.86, 'up', 'all_time', NOW()),
(gen_random_uuid(), gen_random_uuid(), 'padel', 'global', 5, 1950, 40, 25, 15, 62.50, 'stable', 'all_time', NOW()),

-- Tennis mock players
(gen_random_uuid(), gen_random_uuid(), 'tennis', 'global', 2, 3050, 48, 36, 12, 75.00, 'up', 'all_time', NOW()),
(gen_random_uuid(), gen_random_uuid(), 'tennis', 'global', 3, 2890, 44, 31, 13, 70.45, 'up', 'all_time', NOW()),

-- Basketball mock players
(gen_random_uuid(), gen_random_uuid(), 'basketball', 'global', 2, 2650, 35, 26, 9, 74.29, 'up', 'all_time', NOW()),
(gen_random_uuid(), gen_random_uuid(), 'basketball', 'global', 3, 2450, 32, 22, 10, 68.75, 'stable', 'all_time', NOW())

ON CONFLICT DO NOTHING;

-- Insert point activities for reference
INSERT INTO public.point_activities (id, name, description, base_points, category, sport_specific) VALUES
('match_win', 'Match Win', 'Win a match', 100, 'match', false),
('match_loss', 'Match Participation', 'Participate in a match (loss)', 25, 'match', false),
('daily_practice', 'Daily Practice', 'Complete daily practice session', 25, 'training', false),
('weekly_match_play', 'Weekly Matches', 'Play 3 matches this week', 100, 'training', false),
('daily_login', 'Daily Check-in', 'Daily app check-in', 10, 'social', false)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    base_points = EXCLUDED.base_points,
    category = EXCLUDED.category,
    sport_specific = EXCLUDED.sport_specific;

-- Create some sample tasks
INSERT INTO public.tasks (id, sport_id, title, description, task_type, points_reward, requirements, is_repeatable, is_active) VALUES
('daily_login', NULL, 'Daily Check-in', 'Open the app and check in for the day', 'daily', 10, '{"action": "login"}', true, true),
('daily_practice', 'padel', 'Padel Practice Session', 'Complete a 30-minute padel practice session', 'daily', 25, '{"duration_minutes": 30, "activity": "practice"}', true, true),
('weekly_match_play', NULL, 'Play 3 Matches', 'Participate in 3 matches this week', 'weekly', 100, '{"matches_count": 3}', true, true),
('achievement_first_win', NULL, 'First Victory', 'Win your first match on the platform', 'achievement', 100, '{"first_win": true}', false, true)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    task_type = EXCLUDED.task_type,
    points_reward = EXCLUDED.points_reward,
    requirements = EXCLUDED.requirements,
    is_repeatable = EXCLUDED.is_repeatable,
    is_active = EXCLUDED.is_active;

-- Success message
DO $$
BEGIN
    RAISE NOTICE '✅ Leaderboard test data created successfully!';
    RAISE NOTICE '📊 Created sports, leaderboard entries, points, and tasks';
    RAISE NOTICE '🏆 Your leaderboard should now show real data from the database';
    RAISE NOTICE '💡 If you see your user at rank #1, the integration is working!';
END $$;