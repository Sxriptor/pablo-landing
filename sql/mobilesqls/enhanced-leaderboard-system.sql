-- =====================================================
-- ENHANCED LEADERBOARD SYSTEM WITH POINTS, SPORTS, CLASSES & EVENTS
-- =====================================================

-- =====================================================
-- 1. SPORTS SYSTEM
-- =====================================================

-- Sports table (reference data)
CREATE TABLE IF NOT EXISTS public.sports (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    icon TEXT,
    color TEXT,
    min_players INTEGER DEFAULT 2,
    max_players INTEGER DEFAULT 4,
    team_size INTEGER DEFAULT 1,
    scoring_system TEXT,
    court_types TEXT[],
    equipment TEXT[],
    description TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- User sport profiles (skill levels per sport)
CREATE TABLE IF NOT EXISTS public.user_sport_profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    sport_id TEXT REFERENCES public.sports(id) ON DELETE CASCADE,
    skill_level TEXT CHECK (skill_level IN ('Beginner', 'Intermediate', 'Advanced', 'Expert')) DEFAULT 'Beginner',
    preferred_position TEXT,
    total_matches INTEGER DEFAULT 0,
    wins INTEGER DEFAULT 0,
    losses INTEGER DEFAULT 0,
    points INTEGER DEFAULT 0,
    rank INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    UNIQUE(user_id, sport_id)
);

-- =====================================================
-- 2. POINTS SYSTEM
-- =====================================================

-- Point activities (what actions earn points)
CREATE TABLE IF NOT EXISTS public.point_activities (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    base_points INTEGER NOT NULL,
    sport_specific BOOLEAN DEFAULT false,
    sport_id TEXT REFERENCES public.sports(id),
    category TEXT CHECK (category IN ('match', 'training', 'social', 'achievement', 'event')) DEFAULT 'match',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- User point transactions (history of all points earned/lost)
CREATE TABLE IF NOT EXISTS public.user_points (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    sport_id TEXT REFERENCES public.sports(id),
    activity_id TEXT REFERENCES public.point_activities(id),
    points INTEGER NOT NULL,
    description TEXT,
    reference_id UUID, -- Can reference match_id, event_id, etc.
    reference_type TEXT, -- 'match', 'event', 'task', etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- =====================================================
-- 3. ENHANCED LEADERBOARD SYSTEM
-- =====================================================

-- Drop existing leaderboard table and recreate with enhanced structure
DROP TABLE IF EXISTS public.leaderboard CASCADE;

CREATE TABLE IF NOT EXISTS public.sport_leaderboards (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    sport_id TEXT REFERENCES public.sports(id) ON DELETE CASCADE,
    region TEXT DEFAULT 'global',
    rank INTEGER,
    points INTEGER DEFAULT 0,
    total_matches INTEGER DEFAULT 0,
    wins INTEGER DEFAULT 0,
    losses INTEGER DEFAULT 0,
    win_rate DECIMAL(5,2) DEFAULT 0.0,
    rank_change INTEGER DEFAULT 0,
    trend TEXT CHECK (trend IN ('up', 'down', 'stable')) DEFAULT 'stable',
    period TEXT CHECK (period IN ('weekly', 'monthly', 'all_time')) DEFAULT 'all_time',
    period_start DATE,
    period_end DATE,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    UNIQUE(user_id, sport_id, region, period)
);

-- =====================================================
-- 4. CLASSES & EVENTS SYSTEM
-- =====================================================

-- Event types
CREATE TABLE IF NOT EXISTS public.event_types (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    icon TEXT,
    color TEXT,
    points_multiplier DECIMAL(3,2) DEFAULT 1.0,
    is_active BOOLEAN DEFAULT true
);

-- Classes and events that partners can host
CREATE TABLE IF NOT EXISTS public.events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    host_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    sport_id TEXT REFERENCES public.sports(id) ON DELETE CASCADE,
    event_type_id TEXT REFERENCES public.event_types(id),
    title TEXT NOT NULL,
    description TEXT,
    skill_level TEXT CHECK (skill_level IN ('All Levels', 'Beginner', 'Intermediate', 'Advanced', 'Expert')) DEFAULT 'All Levels',
    max_participants INTEGER DEFAULT 10,
    current_participants INTEGER DEFAULT 0,
    points_reward INTEGER DEFAULT 0,
    price DECIMAL(10,2) DEFAULT 0.0,
    currency TEXT DEFAULT 'USD',
    venue_id UUID REFERENCES public.venues(id),
    location TEXT,
    start_time TIMESTAMP WITH TIME ZONE NOT NULL,
    end_time TIMESTAMP WITH TIME ZONE NOT NULL,
    registration_deadline TIMESTAMP WITH TIME ZONE,
    status TEXT CHECK (status IN ('draft', 'published', 'full', 'cancelled', 'completed')) DEFAULT 'draft',
    requirements TEXT[],
    equipment_provided TEXT[],
    tags TEXT[],
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Event participants
CREATE TABLE IF NOT EXISTS public.event_participants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id UUID REFERENCES public.events(id) ON DELETE CASCADE,
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    status TEXT CHECK (status IN ('registered', 'waitlist', 'attended', 'no_show', 'cancelled')) DEFAULT 'registered',
    points_earned INTEGER DEFAULT 0,
    feedback_rating INTEGER CHECK (feedback_rating >= 1 AND feedback_rating <= 5),
    feedback_comment TEXT,
    registered_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    UNIQUE(event_id, user_id)
);

-- =====================================================
-- 5. TASKS SYSTEM
-- =====================================================

-- Sport-based tasks for earning points
CREATE TABLE IF NOT EXISTS public.tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    sport_id TEXT REFERENCES public.sports(id),
    title TEXT NOT NULL,
    description TEXT,
    task_type TEXT CHECK (task_type IN ('daily', 'weekly', 'monthly', 'achievement', 'milestone')) DEFAULT 'daily',
    points_reward INTEGER NOT NULL,
    requirements JSONB, -- Flexible requirements structure
    is_repeatable BOOLEAN DEFAULT true,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- User task completions
CREATE TABLE IF NOT EXISTS public.user_task_completions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    task_id UUID REFERENCES public.tasks(id) ON DELETE CASCADE,
    points_earned INTEGER NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    period_start DATE, -- For tracking weekly/monthly tasks
    period_end DATE
);

-- =====================================================
-- 6. SEED DATA
-- =====================================================

-- Insert sports data
INSERT INTO public.sports (id, name, icon, color, min_players, max_players, team_size, scoring_system, court_types, equipment, description) VALUES
('padel', 'Padel', 'tennisball', '#3DD598', 4, 4, 2, 'tennis', ARRAY['Artificial Grass', 'Synthetic Turf', 'Concrete'], ARRAY['Padel racket', 'Padel ball'], 'Fast-paced racket sport played in an enclosed court'),
('tennis', 'Tennis', 'tennisball', '#51CF66', 2, 4, 1, 'tennis', ARRAY['Hard Court', 'Clay', 'Grass', 'Synthetic'], ARRAY['Tennis racket', 'Tennis ball'], 'Classic racket sport with singles or doubles play'),
('pickleball', 'Pickleball', 'tennisball', '#FFD43B', 2, 4, 1, 'pickleball', ARRAY['Hard Court', 'Concrete', 'Asphalt'], ARRAY['Pickleball paddle', 'Pickleball'], 'Fast-growing paddle sport combining elements of tennis, badminton, and ping pong'),
('badminton', 'Badminton', 'tennisball', '#FF6B6B', 2, 4, 1, 'badminton', ARRAY['Indoor Court', 'Synthetic'], ARRAY['Badminton racket', 'Shuttlecock'], 'Indoor racket sport with shuttlecock'),
('squash', 'Squash', 'tennisball', '#845EC2', 2, 2, 1, 'squash', ARRAY['Indoor Court'], ARRAY['Squash racket', 'Squash ball'], 'High-intensity indoor racket sport'),
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

-- Insert point activities
INSERT INTO public.point_activities (id, name, description, base_points, category, sport_specific) VALUES
('match_win', 'Match Win', 'Win a match', 100, 'match', false),
('match_loss', 'Match Participation', 'Participate in a match (loss)', 25, 'match', false),
('tournament_win', 'Tournament Victory', 'Win a tournament', 500, 'achievement', false),
('event_attendance', 'Event Attendance', 'Attend a class or event', 50, 'event', false),
('daily_practice', 'Daily Practice', 'Complete daily practice session', 20, 'training', false),
('friend_referral', 'Friend Referral', 'Refer a friend who joins', 200, 'social', false),
('profile_complete', 'Complete Profile', 'Complete your profile', 100, 'achievement', false),
('first_match', 'First Match', 'Play your first match', 150, 'achievement', false),
('streak_5', '5-Game Win Streak', 'Win 5 games in a row', 250, 'achievement', false),
('streak_10', '10-Game Win Streak', 'Win 10 games in a row', 500, 'achievement', false)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    base_points = EXCLUDED.base_points,
    category = EXCLUDED.category,
    sport_specific = EXCLUDED.sport_specific;

-- Insert event types
INSERT INTO public.event_types (id, name, description, icon, color, points_multiplier) VALUES
('class', 'Training Class', 'Skill development classes', 'school', '#4CAF50', 1.5),
('workshop', 'Workshop', 'Technique workshops', 'construct', '#FF9800', 1.3),
('tournament', 'Tournament', 'Competitive tournaments', 'trophy', '#F44336', 2.0),
('social', 'Social Event', 'Community social events', 'people', '#9C27B0', 1.0),
('clinic', 'Clinic', 'Professional coaching clinics', 'fitness', '#2196F3', 1.8)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    description = EXCLUDED.description,
    icon = EXCLUDED.icon,
    color = EXCLUDED.color,
    points_multiplier = EXCLUDED.points_multiplier;

-- =====================================================
-- 7. FUNCTIONS & TRIGGERS
-- =====================================================

-- Function to update user points and leaderboard
CREATE OR REPLACE FUNCTION update_user_points_and_leaderboard()
RETURNS TRIGGER AS $$
BEGIN
    -- Update user sport profile points
    UPDATE public.user_sport_profiles 
    SET points = points + NEW.points,
        updated_at = NOW()
    WHERE user_id = NEW.user_id 
    AND sport_id = NEW.sport_id;
    
    -- Update sport leaderboard
    INSERT INTO public.sport_leaderboards (user_id, sport_id, points, updated_at)
    VALUES (NEW.user_id, NEW.sport_id, NEW.points, NOW())
    ON CONFLICT (user_id, sport_id, region, period)
    DO UPDATE SET 
        points = sport_leaderboards.points + NEW.points,
        updated_at = NOW();
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for point updates
DROP TRIGGER IF EXISTS trigger_update_leaderboard ON public.user_points;
CREATE TRIGGER trigger_update_leaderboard
    AFTER INSERT ON public.user_points
    FOR EACH ROW
    EXECUTE FUNCTION update_user_points_and_leaderboard();

-- Function to recalculate leaderboard rankings
CREATE OR REPLACE FUNCTION recalculate_sport_rankings(p_sport_id TEXT DEFAULT NULL, p_region TEXT DEFAULT 'global')
RETURNS void AS $$
BEGIN
    -- Update rankings for specific sport or all sports
    WITH ranked_users AS (
        SELECT 
            user_id,
            sport_id,
            region,
            period,
            points,
            ROW_NUMBER() OVER (
                PARTITION BY sport_id, region, period 
                ORDER BY points DESC, updated_at ASC
            ) as new_rank
        FROM public.sport_leaderboards
        WHERE (p_sport_id IS NULL OR sport_id = p_sport_id)
        AND region = p_region
    )
    UPDATE public.sport_leaderboards sl
    SET rank = ru.new_rank,
        updated_at = NOW()
    FROM ranked_users ru
    WHERE sl.user_id = ru.user_id
    AND sl.sport_id = ru.sport_id
    AND sl.region = ru.region
    AND sl.period = ru.period;
END;
$$ LANGUAGE plpgsql;

-- =====================================================
-- 8. INDEXES FOR PERFORMANCE
-- =====================================================

-- Sports indexes
CREATE INDEX IF NOT EXISTS idx_sports_active ON public.sports(is_active);

-- User sport profiles indexes
CREATE INDEX IF NOT EXISTS idx_user_sport_profiles_user_sport ON public.user_sport_profiles(user_id, sport_id);
CREATE INDEX IF NOT EXISTS idx_user_sport_profiles_points ON public.user_sport_profiles(sport_id, points DESC);

-- Point activities indexes
CREATE INDEX IF NOT EXISTS idx_point_activities_category ON public.point_activities(category);
CREATE INDEX IF NOT EXISTS idx_point_activities_sport ON public.point_activities(sport_id);

-- User points indexes
CREATE INDEX IF NOT EXISTS idx_user_points_user_sport ON public.user_points(user_id, sport_id);
CREATE INDEX IF NOT EXISTS idx_user_points_activity ON public.user_points(activity_id);
CREATE INDEX IF NOT EXISTS idx_user_points_created_at ON public.user_points(created_at DESC);

-- Sport leaderboards indexes
CREATE INDEX IF NOT EXISTS idx_sport_leaderboards_sport_region ON public.sport_leaderboards(sport_id, region, period);
CREATE INDEX IF NOT EXISTS idx_sport_leaderboards_rank ON public.sport_leaderboards(sport_id, region, period, rank);
CREATE INDEX IF NOT EXISTS idx_sport_leaderboards_points ON public.sport_leaderboards(sport_id, region, period, points DESC);

-- Events indexes
CREATE INDEX IF NOT EXISTS idx_events_sport_status ON public.events(sport_id, status);
CREATE INDEX IF NOT EXISTS idx_events_host ON public.events(host_id);
CREATE INDEX IF NOT EXISTS idx_events_start_time ON public.events(start_time);

-- Event participants indexes
CREATE INDEX IF NOT EXISTS idx_event_participants_event ON public.event_participants(event_id);
CREATE INDEX IF NOT EXISTS idx_event_participants_user ON public.event_participants(user_id);

-- Tasks indexes
CREATE INDEX IF NOT EXISTS idx_tasks_sport_type ON public.tasks(sport_id, task_type);
CREATE INDEX IF NOT EXISTS idx_tasks_active ON public.tasks(is_active);

-- User task completions indexes
CREATE INDEX IF NOT EXISTS idx_user_task_completions_user ON public.user_task_completions(user_id);
CREATE INDEX IF NOT EXISTS idx_user_task_completions_task ON public.user_task_completions(task_id);

-- =====================================================
-- 9. ROW LEVEL SECURITY
-- =====================================================

-- Enable RLS on all tables
ALTER TABLE public.sports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_sport_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.point_activities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_points ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sport_leaderboards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_participants ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_task_completions ENABLE ROW LEVEL SECURITY;

-- Sports policies (public read)
CREATE POLICY "Sports are viewable by everyone" ON public.sports FOR SELECT USING (true);

-- User sport profiles policies
CREATE POLICY "Users can view all sport profiles" ON public.user_sport_profiles FOR SELECT USING (true);
CREATE POLICY "Users can manage own sport profiles" ON public.user_sport_profiles FOR ALL USING (auth.uid() = user_id);

-- Point activities policies (public read)
CREATE POLICY "Point activities are viewable by everyone" ON public.point_activities FOR SELECT USING (true);

-- User points policies
CREATE POLICY "Users can view all points" ON public.user_points FOR SELECT USING (true);
CREATE POLICY "Users can insert own points" ON public.user_points FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Sport leaderboards policies
CREATE POLICY "Leaderboards are viewable by everyone" ON public.sport_leaderboards FOR SELECT USING (true);
CREATE POLICY "System can manage leaderboards" ON public.sport_leaderboards FOR ALL USING (true);

-- Event types policies (public read)
CREATE POLICY "Event types are viewable by everyone" ON public.event_types FOR SELECT USING (true);

-- Events policies
CREATE POLICY "Events are viewable by everyone" ON public.events FOR SELECT USING (true);
CREATE POLICY "Partners can manage own events" ON public.events FOR ALL USING (
    auth.uid() = host_id OR 
    EXISTS (SELECT 1 FROM public.profiles WHERE id = auth.uid() AND partner = true)
);

-- Event participants policies
CREATE POLICY "Event participants are viewable by everyone" ON public.event_participants FOR SELECT USING (true);
CREATE POLICY "Users can manage own event participation" ON public.event_participants FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Event hosts can manage participants" ON public.event_participants FOR ALL USING (
    EXISTS (SELECT 1 FROM public.events WHERE id = event_id AND host_id = auth.uid())
);

-- Tasks policies
CREATE POLICY "Tasks are viewable by everyone" ON public.tasks FOR SELECT USING (true);

-- User task completions policies
CREATE POLICY "Users can view all task completions" ON public.user_task_completions FOR SELECT USING (true);
CREATE POLICY "Users can manage own task completions" ON public.user_task_completions FOR ALL USING (auth.uid() = user_id);