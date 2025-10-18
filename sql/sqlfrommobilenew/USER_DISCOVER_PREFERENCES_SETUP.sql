-- =====================================================
-- USER DISCOVER PREFERENCES - COMPLETE SETUP
-- Copy and paste this entire file into Supabase SQL Editor
-- =====================================================

-- Step 1: Create user_discover_preferences table
CREATE TABLE IF NOT EXISTS user_discover_preferences (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  
  -- Preferred Time (array of selected time periods)
  preferred_times TEXT[] DEFAULT '{}',
  
  -- Distance Away (in miles)
  distance_range INTEGER DEFAULT 15 CHECK (distance_range >= 5 AND distance_range <= 100),
  
  -- Match Type (array of selected match types)
  match_types TEXT[] DEFAULT '{}',
  
  -- Skill Level (array of selected skill levels)
  skill_levels TEXT[] DEFAULT '{}',
  
  -- Sort By preference
  sort_by TEXT DEFAULT 'nearest' CHECK (sort_by IN ('nearest', 'earliest', 'price-low', 'price-high')),
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  
  -- Ensure one preference record per user
  UNIQUE(user_id)
);

-- Add constraints for valid values
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.check_constraints 
    WHERE constraint_name = 'valid_preferred_times'
  ) THEN
    ALTER TABLE user_discover_preferences 
    ADD CONSTRAINT valid_preferred_times 
    CHECK (preferred_times <@ ARRAY['Morning', 'Afternoon', 'Evening', 'Night']);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.check_constraints 
    WHERE constraint_name = 'valid_match_types'
  ) THEN
    ALTER TABLE user_discover_preferences 
    ADD CONSTRAINT valid_match_types 
    CHECK (match_types <@ ARRAY['open', 'reserved']);
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.check_constraints 
    WHERE constraint_name = 'valid_skill_levels'
  ) THEN
    ALTER TABLE user_discover_preferences 
    ADD CONSTRAINT valid_skill_levels 
    CHECK (skill_levels <@ ARRAY['Beginner', 'Intermediate', 'Advanced', 'Expert']);
  END IF;
END $$;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_user_discover_preferences_user_id ON user_discover_preferences(user_id);
CREATE INDEX IF NOT EXISTS idx_user_discover_preferences_updated_at ON user_discover_preferences(updated_at);

-- Add RLS (Row Level Security) policies
ALTER TABLE user_discover_preferences ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view own discover preferences" ON user_discover_preferences;
DROP POLICY IF EXISTS "Users can insert own discover preferences" ON user_discover_preferences;
DROP POLICY IF EXISTS "Users can update own discover preferences" ON user_discover_preferences;
DROP POLICY IF EXISTS "Users can delete own discover preferences" ON user_discover_preferences;

-- Create RLS policies
CREATE POLICY "Users can view own discover preferences" ON user_discover_preferences
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own discover preferences" ON user_discover_preferences
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own discover preferences" ON user_discover_preferences
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own discover preferences" ON user_discover_preferences
  FOR DELETE USING (auth.uid() = user_id);

-- Create function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_user_discover_preferences_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS update_user_discover_preferences_updated_at ON user_discover_preferences;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_user_discover_preferences_updated_at
  BEFORE UPDATE ON user_discover_preferences
  FOR EACH ROW
  EXECUTE FUNCTION update_user_discover_preferences_updated_at();

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS auto_create_user_discover_preferences_trigger ON profiles;

-- Create trigger to auto-create preferences when a new profile is created
CREATE TRIGGER auto_create_user_discover_preferences_trigger
  AFTER INSERT ON profiles
  FOR EACH ROW
  EXECUTE FUNCTION auto_create_user_discover_preferences();

-- Step 2: Create helper functions

-- Function to get user discover preferences with defaults
CREATE OR REPLACE FUNCTION get_user_discover_preferences(p_user_id UUID)
RETURNS TABLE (
  preferred_times TEXT[],
  distance_range INTEGER,
  match_types TEXT[],
  skill_levels TEXT[],
  sort_by TEXT
) AS $$
BEGIN
  RETURN QUERY
  SELECT 
    COALESCE(udp.preferred_times, '{}'),
    COALESCE(udp.distance_range, 15),
    COALESCE(udp.match_types, '{}'),
    COALESCE(udp.skill_levels, '{}'),
    COALESCE(udp.sort_by, 'nearest')
  FROM user_discover_preferences udp
  WHERE udp.user_id = p_user_id
  
  UNION ALL
  
  -- Return defaults if no preferences exist
  SELECT 
    '{}'::TEXT[],
    15,
    '{}'::TEXT[],
    '{}'::TEXT[],
    'nearest'::TEXT
  WHERE NOT EXISTS (
    SELECT 1 FROM user_discover_preferences WHERE user_id = p_user_id
  )
  LIMIT 1;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to upsert user discover preferences
CREATE OR REPLACE FUNCTION upsert_user_discover_preferences(
  p_user_id UUID,
  p_preferred_times TEXT[] DEFAULT NULL,
  p_distance_range INTEGER DEFAULT NULL,
  p_match_types TEXT[] DEFAULT NULL,
  p_skill_levels TEXT[] DEFAULT NULL,
  p_sort_by TEXT DEFAULT NULL
)
RETURNS UUID AS $$
DECLARE
  result_id UUID;
BEGIN
  -- Validate inputs
  IF p_distance_range IS NOT NULL AND (p_distance_range < 5 OR p_distance_range > 100) THEN
    RAISE EXCEPTION 'Distance range must be between 5 and 100 miles';
  END IF;
  
  IF p_sort_by IS NOT NULL AND p_sort_by NOT IN ('nearest', 'earliest', 'price-low', 'price-high') THEN
    RAISE EXCEPTION 'Invalid sort_by value. Must be one of: nearest, earliest, price-low, price-high';
  END IF;
  
  -- Upsert preferences
  INSERT INTO user_discover_preferences (
    user_id,
    preferred_times,
    distance_range,
    match_types,
    skill_levels,
    sort_by
  )
  VALUES (
    p_user_id,
    COALESCE(p_preferred_times, '{}'),
    COALESCE(p_distance_range, 15),
    COALESCE(p_match_types, '{}'),
    COALESCE(p_skill_levels, '{}'),
    COALESCE(p_sort_by, 'nearest')
  )
  ON CONFLICT (user_id) DO UPDATE SET
    preferred_times = COALESCE(p_preferred_times, user_discover_preferences.preferred_times),
    distance_range = COALESCE(p_distance_range, user_discover_preferences.distance_range),
    match_types = COALESCE(p_match_types, user_discover_preferences.match_types),
    skill_levels = COALESCE(p_skill_levels, user_discover_preferences.skill_levels),
    sort_by = COALESCE(p_sort_by, user_discover_preferences.sort_by),
    updated_at = NOW()
  RETURNING id INTO result_id;
  
  RETURN result_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to clear all user discover preferences (reset to defaults)
CREATE OR REPLACE FUNCTION clear_user_discover_preferences(p_user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  UPDATE user_discover_preferences 
  SET 
    preferred_times = '{}',
    distance_range = 15,
    match_types = '{}',
    skill_levels = '{}',
    sort_by = 'nearest',
    updated_at = NOW()
  WHERE user_id = p_user_id;
  
  -- If no record exists, create one with defaults
  IF NOT FOUND THEN
    INSERT INTO user_discover_preferences (
      user_id,
      preferred_times,
      distance_range,
      match_types,
      skill_levels,
      sort_by
    )
    VALUES (
      p_user_id,
      '{}',
      15,
      '{}',
      '{}',
      'nearest'
    );
  END IF;
  
  RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to delete user discover preferences
CREATE OR REPLACE FUNCTION delete_user_discover_preferences(p_user_id UUID)
RETURNS BOOLEAN AS $$
BEGIN
  DELETE FROM user_discover_preferences WHERE user_id = p_user_id;
  RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to create default preferences for existing users who don't have them
CREATE OR REPLACE FUNCTION create_default_preferences_for_existing_users()
RETURNS INTEGER AS $$
DECLARE
  users_updated INTEGER := 0;
  user_record RECORD;
BEGIN
  -- Insert default preferences for all users who don't have them yet
  FOR user_record IN 
    SELECT p.id 
    FROM profiles p 
    LEFT JOIN user_discover_preferences udp ON p.id = udp.user_id 
    WHERE udp.user_id IS NULL
  LOOP
    INSERT INTO user_discover_preferences (
      user_id,
      preferred_times,
      distance_range,
      match_types,
      skill_levels,
      sort_by
    )
    VALUES (
      user_record.id,
      '{}',
      15,
      '{}',
      '{}',
      'nearest'
    );
    
    users_updated := users_updated + 1;
  END LOOP;
  
  RETURN users_updated;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to auto-create preferences when a new user profile is created
CREATE OR REPLACE FUNCTION auto_create_user_discover_preferences()
RETURNS TRIGGER AS $$
BEGIN
  -- Create default discover preferences for the new user
  INSERT INTO user_discover_preferences (
    user_id,
    preferred_times,
    distance_range,
    match_types,
    skill_levels,
    sort_by
  )
  VALUES (
    NEW.id,
    '{}',
    15,
    '{}',
    '{}',
    'nearest'
  );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Step 3: Grant permissions to authenticated users
GRANT SELECT, INSERT, UPDATE, DELETE ON user_discover_preferences TO authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;

GRANT EXECUTE ON FUNCTION get_user_discover_preferences(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION upsert_user_discover_preferences(UUID, TEXT[], INTEGER, TEXT[], TEXT[], TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION clear_user_discover_preferences(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION delete_user_discover_preferences(UUID) TO authenticated;
GRANT EXECUTE ON FUNCTION create_default_preferences_for_existing_users() TO authenticated;

-- Step 4: Add helpful comments
COMMENT ON TABLE user_discover_preferences IS 'Stores user preferences for discover page filters';
COMMENT ON COLUMN user_discover_preferences.preferred_times IS 'Array of preferred time periods: Morning, Afternoon, Evening, Night';
COMMENT ON COLUMN user_discover_preferences.distance_range IS 'Maximum distance in miles (5-100)';
COMMENT ON COLUMN user_discover_preferences.match_types IS 'Array of preferred match types: open, reserved';
COMMENT ON COLUMN user_discover_preferences.skill_levels IS 'Array of preferred skill levels: Beginner, Intermediate, Advanced, Expert';
COMMENT ON COLUMN user_discover_preferences.sort_by IS 'Default sort preference: nearest, earliest, price-low, price-high';

COMMENT ON FUNCTION get_user_discover_preferences(UUID) IS 'Get user discover preferences with defaults if none exist';
COMMENT ON FUNCTION upsert_user_discover_preferences(UUID, TEXT[], INTEGER, TEXT[], TEXT[], TEXT) IS 'Insert or update user discover preferences';
COMMENT ON FUNCTION clear_user_discover_preferences(UUID) IS 'Reset user discover preferences to defaults';
COMMENT ON FUNCTION delete_user_discover_preferences(UUID) IS 'Delete user discover preferences record';
COMMENT ON FUNCTION create_default_preferences_for_existing_users() IS 'Create default preferences for all existing users who do not have them';
COMMENT ON FUNCTION auto_create_user_discover_preferences() IS 'Trigger function to auto-create default preferences for new users';

-- Step 5: Create preferences for existing users
DO $$
DECLARE
  users_updated INTEGER;
BEGIN
  SELECT create_default_preferences_for_existing_users() INTO users_updated;
  RAISE NOTICE 'Created default preferences for % existing users', users_updated;
END $$;

-- Step 6: Verification
DO $$
BEGIN
  RAISE NOTICE '=== User Discover Preferences Setup Complete! ===';
  RAISE NOTICE 'Table created: user_discover_preferences';
  RAISE NOTICE 'Functions created: get_user_discover_preferences, upsert_user_discover_preferences, clear_user_discover_preferences, delete_user_discover_preferences, create_default_preferences_for_existing_users';
  RAISE NOTICE 'Auto-creation trigger enabled for new users';
  RAISE NOTICE 'RLS policies enabled for security';
  RAISE NOTICE 'Ready to use!';
END $$;

-- Example usage queries (commented out):
/*
-- Get user preferences (returns defaults if none exist)
SELECT * FROM get_user_discover_preferences('your-user-id-here');

-- Save user preferences
SELECT upsert_user_discover_preferences(
  'your-user-id-here',
  ARRAY['Morning', 'Evening'],  -- preferred_times
  50,                           -- distance_range
  ARRAY['open'],               -- match_types
  ARRAY['Intermediate', 'Advanced'], -- skill_levels
  'nearest'                    -- sort_by
);

-- Clear all preferences (reset to defaults)
SELECT clear_user_discover_preferences('your-user-id-here');

-- Delete preferences record
SELECT delete_user_discover_preferences('your-user-id-here');

-- Create preferences for existing users (run once)
SELECT create_default_preferences_for_existing_users();

-- Check how many users have preferences
SELECT 
  (SELECT COUNT(*) FROM profiles) as total_users,
  (SELECT COUNT(*) FROM user_discover_preferences) as users_with_preferences;
*/