-- =====================================================
-- ADD NOTIFICATION PREFERENCES
-- Adds specific notification toggles for venues, courts, and games
-- =====================================================

-- Add notification preference columns to user_preferences table
DO $$
BEGIN
    -- Notify when new venues are added
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'user_preferences' AND column_name = 'notify_venue_added') THEN
        ALTER TABLE public.user_preferences ADD COLUMN notify_venue_added BOOLEAN DEFAULT true;
    END IF;

    -- Notify when new courts are added
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'user_preferences' AND column_name = 'notify_court_added') THEN
        ALTER TABLE public.user_preferences ADD COLUMN notify_court_added BOOLEAN DEFAULT true;
    END IF;

    -- Notify when new games/matches are available
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'user_preferences' AND column_name = 'notify_available_games') THEN
        ALTER TABLE public.user_preferences ADD COLUMN notify_available_games BOOLEAN DEFAULT true;
    END IF;
END $$;

-- Update the updated_at trigger if it exists
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Ensure trigger exists
DROP TRIGGER IF EXISTS update_user_preferences_updated_at ON public.user_preferences;
CREATE TRIGGER update_user_preferences_updated_at
    BEFORE UPDATE ON public.user_preferences
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Comment the columns
COMMENT ON COLUMN public.user_preferences.notify_venue_added IS 'Enable notifications when new venues are added';
COMMENT ON COLUMN public.user_preferences.notify_court_added IS 'Enable notifications when new courts are added';
COMMENT ON COLUMN public.user_preferences.notify_available_games IS 'Enable notifications when new games/matches are available';
