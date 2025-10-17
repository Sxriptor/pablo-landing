
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
