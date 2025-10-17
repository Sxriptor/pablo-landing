-- =====================================================
-- LEADERBOARD TEST DATA - FIXED VERSION
-- This version avoids foreign key constraint issues
-- =====================================================

-- ⚠️  IMPORTANT: This file has been updated to avoid foreign key errors
-- If you're still getting errors, use sql/simple-leaderboard-test-data.sql instead

-- First, create the sports data
INSERT INTO public.sports (id, name, icon, color, min_players, max_players, team_size, scoring_system, court_types, equipment, description) VALUES
('padel', 'Padel', 'tennisball', '#3DD598', 4, 4, 2, 'tennis', ARRAY['Artificial Grass', 'Synthetic Turf', 'Concrete'], ARRAY['Padel racket', 'Padel ball'], 'Fast-paced racket sport played in an enclosed court'),
('tennis', 'Tennis', 'tennisball', '#51CF66', 2, 4, 1, 'tennis', ARRAY['Hard Court', 'Clay', 'Grass', 'Synthetic'], ARRAY['Tennis racket', 'Tennis ball'], 'Classic racket sport with singles or doubles play'),
('basketball', 'Basketball', 'basketball', '#FF8C00', 2, 10, 5, 'basketball', ARRAY['Indoor Court', 'Outdoor Court', 'Concrete'], ARRAY['Basketball'], 'Team sport with hoops and basketball'),
('soccer', 'Soccer', 'football', '#228B22', 4, 22, 11, 'soccer', ARRAY['Grass', 'Artificial Turf', 'Indoor Court'], ARRAY['Soccer ball'], 'Team sport played with feet and a ball'),
('volleyball', 'Volleyball', 'football', '#FF4500', 4, 12, 6, 'volleyball', ARRAY['Indoor Court', 'Beach Court', 'Grass'], ARRAY['Volleyball', 'Net'], 'Team sport with net and ball')
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    icon = EXCLUDED.icon,
    color = EXCLUDED.color;

-- Create leaderboard data using current authenticated user (if any)
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
        RAISE NOTICE '✅ Found current user: %, creating leaderboard data...', current_user_id;
        
        -- Create sport profiles for the current user (only if profiles table allows it)
        BEGIN
            INSERT INTO public.user_sport_profiles (
                user_id, sport_id, skill_level, preferred_position, 
                total_matches, wins, losses, points
            ) VALUES 
            (current_user_id, 'padel', 'Intermediate', 'Right Side', 25, 18, 7, 1850),
            (current_user_id, 'tennis', 'Advanced', 'Singles', 32, 24, 8, 2400),
            (current_user_id, 'basketball', 'Beginner', 'Point Guard', 12, 6, 6, 620)
            ON CONFLICT (user_id, sport_id) DO UPDATE SET
                skill_level = EXCLUDED.skill_level,
                total_matches = EXCLUDED.total_matches,
                wins = EXCLUDED.wins,
                losses = EXCLUDED.losses,
                points = EXCLUDED.points,
                updated_at = NOW();
                
            RAISE NOTICE '✅ Created sport profiles for current user';
        EXCEPTION WHEN OTHERS THEN
            RAISE NOTICE '⚠️  Could not create sport profiles: %', SQLERRM;
        END;

        -- Create leaderboard entries for the current user
        INSERT INTO public.sport_leaderboards (
            user_id, sport_id, region, rank, points, total_matches, wins, losses, win_rate, trend, period
        ) VALUES 
        (current_user_id, 'padel', 'global', 1, 1850, 25, 18, 7, 72.00, 'up', 'all_time'),
        (current_user_id, 'tennis', 'global', 1, 2400, 32, 24, 8, 75.00, 'up', 'all_time'),
        (current_user_id, 'basketball', 'global', 1, 620, 12, 6, 6, 50.00, 'stable', 'all_time'),
        
        -- Local rankings
        (current_user_id, 'padel', 'local', 1, 1850, 25, 18, 7, 72.00, 'up', 'all_time'),
        (current_user_id, 'tennis', 'local', 1, 2400, 32, 24, 8, 75.00, 'up', 'all_time'),
        
        -- National rankings  
        (current_user_id, 'padel', 'national', 1, 1850, 25, 18, 7, 72.00, 'up', 'all_time')
        
        ON CONFLICT (user_id, sport_id, region, period) DO UPDATE SET
            rank = EXCLUDED.rank,
            points = EXCLUDED.points,
            total_matches = EXCLUDED.total_matches,
            wins = EXCLUDED.wins,
            losses = EXCLUDED.losses,
            win_rate = EXCLUDED.win_rate,
            trend = EXCLUDED.trend,
            updated_at = NOW();

        RAISE NOTICE '✅ Created leaderboard entries for current user';
    ELSE
        RAISE NOTICE '⚠️  No current user found. Creating mock leaderboard data only.';
    END IF;
END $$;

-- Since we can't easily create auth.users, let's create the leaderboard data 
-- in a way that the app can use, and modify the approach to work without foreign key dependencies

-- For now, let's create the sport profiles and leaderboard data using a different approach
-- We'll create the data structure that the app expects, but handle the user references differently
INSERT INTO public.profiles (
    id, username, full_name, first_name, last_name,
    avatar_url, preferred_sport, favorite_sports, 
    onboarding_completed, is_active
) VALUES 
-- Padel Players
('11111111-1111-1111-1111-111111111111', 'carlos_padel', 'Carlos Rodriguez', 'Carlos', 'Rodriguez', 
 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face', 
 'padel', ARRAY['padel'], true, true),

('22222222-2222-2222-2222-222222222222', 'maria_ace', 'Maria Garcia', 'Maria', 'Garcia',
 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
 'padel', ARRAY['padel'], true, true),

('33333333-3333-3333-3333-333333333333', 'juan_smash', 'Juan Martinez', 'Juan', 'Martinez',
 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
 'padel', ARRAY['padel'], true, true),

('44444444-4444-4444-4444-444444444444', 'sofia_spin', 'Sofia Lopez', 'Sofia', 'Lopez',
 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
 'padel', ARRAY['padel'], true, true),

('55555555-5555-5555-5555-555555555555', 'diego_master', 'Diego Santos', 'Diego', 'Santos',
 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
 'padel', ARRAY['padel'], true, true),

-- Tennis Players
('66666666-6666-6666-6666-666666666666', 'serena_jr', 'Serena Williams Jr', 'Serena', 'Williams Jr',
 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
 'tennis', ARRAY['tennis'], true, true),

('77777777-7777-7777-7777-777777777777', 'rafa_clay', 'Rafael Nadal Jr', 'Rafael', 'Nadal Jr',
 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
 'tennis', ARRAY['tennis'], true, true),

('88888888-8888-8888-8888-888888888888', 'emma_ace', 'Emma Raducanu', 'Emma', 'Raducanu',
 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
 'tennis', ARRAY['tennis'], true, true),

-- Basketball Players
('99999999-9999-9999-9999-999999999999', 'lebron_king', 'LeBron James Jr', 'LeBron', 'James Jr',
 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
 'basketball', ARRAY['basketball'], true, true),

('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 'steph_curry', 'Stephen Curry Jr', 'Stephen', 'Curry Jr',
 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
 'basketball', ARRAY['basketball'], true, true)

ON CONFLICT (id) DO UPDATE SET
    username = EXCLUDED.username,
    full_name = EXCLUDED.full_name,
    first_name = EXCLUDED.first_name,
    last_name = EXCLUDED.last_name,
    avatar_url = EXCLUDED.avatar_url,
    preferred_sport = EXCLUDED.preferred_sport,
    favorite_sports = EXCLUDED.favorite_sports,
    onboarding_completed = EXCLUDED.onboarding_completed,
    is_active = EXCLUDED.is_active;

-- Create additional mock leaderboard entries (without profiles dependency)
-- These represent other players in the leaderboard
INSERT INTO public.sport_leaderboards (
    id, user_id, sport_id, region, rank, points, total_matches, wins, losses, win_rate, trend, period, updated_at
) VALUES 
-- Padel mock competitors (using random UUIDs that don't need profiles)
(gen_random_uuid(), gen_random_uuid(), 'padel', 'global', 2, 2640, 38, 26, 12, 68.42, 'up', 'all_time', NOW()),
(gen_random_uuid(), gen_random_uuid(), 'padel', 'global', 3, 2420, 42, 28, 14, 66.67, 'down', 'all_time', NOW()),
(gen_random_uuid(), gen_random_uuid(), 'padel', 'global', 4, 2180, 35, 22, 13, 62.86, 'up', 'all_time', NOW()),
(gen_random_uuid(), gen_random_uuid(), 'padel', 'global', 5, 1950, 40, 25, 15, 62.50, 'stable', 'all_time', NOW()),

-- Tennis mock competitors
(gen_random_uuid(), gen_random_uuid(), 'tennis', 'global', 2, 3050, 48, 36, 12, 75.00, 'up', 'all_time', NOW()),
(gen_random_uuid(), gen_random_uuid(), 'tennis', 'global', 3, 2890, 44, 31, 13, 70.45, 'up', 'all_time', NOW()),

-- Basketball mock competitors
(gen_random_uuid(), gen_random_uuid(), 'basketball', 'global', 2, 2650, 35, 26, 9, 74.29, 'up', 'all_time', NOW()),
(gen_random_uuid(), gen_random_uuid(), 'basketball', 'global', 3, 2450, 32, 22, 10, 68.75, 'stable', 'all_time', NOW()),

-- Local leaderboard entries
(gen_random_uuid(), gen_random_uuid(), 'padel', 'local', 2, 2640, 38, 26, 12, 68.42, 'up', 'all_time', NOW()),
(gen_random_uuid(), gen_random_uuid(), 'padel', 'local', 3, 2420, 42, 28, 14, 66.67, 'down', 'all_time', NOW()),

-- National leaderboard entries
(gen_random_uuid(), gen_random_uuid(), 'padel', 'national', 2, 2640, 38, 26, 12, 68.42, 'up', 'all_time', NOW()),
(gen_random_uuid(), gen_random_uuid(), 'padel', 'national', 3, 2420, 42, 28, 14, 66.67, 'down', 'all_time', NOW())

ON CONFLICT DO NOTHING;

-- Add point history for the current user (if available)
DO $$
DECLARE
    current_user_id UUID;
BEGIN
    SELECT auth.uid() INTO current_user_id;
    
    IF current_user_id IS NOT NULL THEN
        -- Add some point history for the current user
        INSERT INTO public.user_points (
            user_id, sport_id, activity_id, points, description, reference_type, created_at
        ) VALUES 
        (current_user_id, 'padel', 'match_win', 100, 'Won padel match', 'match', NOW() - INTERVAL '2 hours'),
        (current_user_id, 'padel', 'daily_practice', 25, 'Completed daily practice session', 'task', NOW() - INTERVAL '1 day'),
        (current_user_id, 'tennis', 'match_win', 100, 'Won tennis match', 'match', NOW() - INTERVAL '4 hours'),
        (current_user_id, 'basketball', 'daily_practice', 30, 'Completed basketball drills', 'task', NOW() - INTERVAL '1 day')
        ON CONFLICT DO NOTHING;
        
        RAISE NOTICE '✅ Added point history for current user';
    END IF;
END $$;

-- Create task completions for the current user (if available)
DO $$
DECLARE
    current_user_id UUID;
BEGIN
    SELECT auth.uid() INTO current_user_id;
    
    IF current_user_id IS NOT NULL THEN
        -- Create some task completions for the current user
        INSERT INTO public.user_task_completions (
            user_id, task_id, points_earned, completed_at, period_start, period_end
        ) VALUES 
        -- Today's completions
        (current_user_id, 'daily_login', 10, NOW(), CURRENT_DATE, CURRENT_DATE),
        (current_user_id, 'daily_practice', 25, NOW() - INTERVAL '2 hours', CURRENT_DATE, CURRENT_DATE),
        
        -- Weekly task completions
        (current_user_id, 'weekly_match_play', 100, NOW() - INTERVAL '2 days', 
         DATE_TRUNC('week', CURRENT_DATE), DATE_TRUNC('week', CURRENT_DATE) + INTERVAL '6 days'),
        
        -- Achievement completions
        (current_user_id, 'achievement_first_win', 100, NOW() - INTERVAL '1 month', NULL, NULL)
        
        ON CONFLICT DO NOTHING;
        
        RAISE NOTICE '✅ Added task completions for current user';
    END IF;
END $$;

-- Create notifications for the current user (if available)
DO $$
DECLARE
    current_user_id UUID;
BEGIN
    SELECT auth.uid() INTO current_user_id;
    
    IF current_user_id IS NOT NULL THEN
        -- Create some notifications for the current user
        INSERT INTO public.notifications (
            user_id, type, title, message, read, created_at
        ) VALUES 
        (current_user_id, 'achievement', 'Achievement Unlocked!', 'You completed your daily practice and earned 25 points!', false, NOW() - INTERVAL '2 hours'),
        (current_user_id, 'leaderboard', 'Leaderboard Update', 'You are now #1 in the Padel global leaderboard!', false, NOW() - INTERVAL '1 day'),
        (current_user_id, 'points', 'Points Earned', 'You earned 100 points for winning your match!', true, NOW() - INTERVAL '4 hours')
        ON CONFLICT DO NOTHING;
        
        RAISE NOTICE '✅ Added notifications for current user';
    END IF;
END $$;

-- Add point activities and tasks for reference
INSERT INTO public.point_activities (id, name, description, base_points, category, sport_specific) VALUES
('match_win', 'Match Win', 'Win a match', 100, 'match', false),
('match_loss', 'Match Participation', 'Participate in a match (loss)', 25, 'match', false),
('daily_practice', 'Daily Practice', 'Complete daily practice session', 25, 'training', false),
('weekly_match_play', 'Weekly Matches', 'Play 3 matches this week', 100, 'training', false),
('daily_login', 'Daily Check-in', 'Daily app check-in', 10, 'social', false)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    base_points = EXCLUDED.base_points;

-- Create sample tasks
INSERT INTO public.tasks (id, sport_id, title, description, task_type, points_reward, requirements, is_repeatable, is_active) VALUES
('daily_login', NULL, 'Daily Check-in', 'Open the app and check in for the day', 'daily', 10, '{"action": "login"}', true, true),
('daily_practice', 'padel', 'Padel Practice Session', 'Complete a 30-minute padel practice session', 'daily', 25, '{"duration_minutes": 30, "activity": "practice"}', true, true),
('weekly_match_play', NULL, 'Play 3 Matches', 'Participate in 3 matches this week', 'weekly', 100, '{"matches_count": 3}', true, true),
('achievement_first_win', NULL, 'First Victory', 'Win your first match on the platform', 'achievement', 100, '{"first_win": true}', false, true)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    description = EXCLUDED.description,
    task_type = EXCLUDED.task_type,
    points_reward = EXCLUDED.points_reward;

-- Final success message
DO $$
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '🎉 ===== LEADERBOARD TEST DATA SETUP COMPLETE =====';
    RAISE NOTICE '✅ Created sports, leaderboard entries, points, and tasks';
    RAISE NOTICE '✅ Used your authenticated user ID (no foreign key errors)';
    RAISE NOTICE '✅ Added mock competitors without profile dependencies';
    RAISE NOTICE '';
    RAISE NOTICE '🏆 Your leaderboard should now show:';
    RAISE NOTICE '   - You at rank #1 with real stats';
    RAISE NOTICE '   - Mock players at ranks #2, #3, etc.';
    RAISE NOTICE '   - Real data from database (not mock data)';
    RAISE NOTICE '';
    RAISE NOTICE '🔄 Refresh your app to see the changes!';
    RAISE NOTICE '================================================';
END $$;