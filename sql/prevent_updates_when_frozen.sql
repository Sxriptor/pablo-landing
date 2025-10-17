-- =====================================================
-- PREVENT UPDATES WHEN ACCOUNT IS FROZEN
-- This trigger prevents users from updating any data when their account is frozen
-- =====================================================

-- Drop existing function and triggers if they exist
DROP TRIGGER IF EXISTS prevent_frozen_profile_updates ON profiles;
DROP TRIGGER IF EXISTS prevent_frozen_partner_updates ON partners;
DROP FUNCTION IF EXISTS check_account_frozen();

-- Create function to check if account is frozen
CREATE OR REPLACE FUNCTION check_account_frozen()
RETURNS TRIGGER AS $$
DECLARE
    user_frozen BOOLEAN;
    user_id_to_check UUID;
BEGIN
    -- Determine which user_id to check based on the table
    IF TG_TABLE_NAME = 'profiles' THEN
        user_id_to_check := NEW.id;
    ELSIF TG_TABLE_NAME = 'partners' THEN
        user_id_to_check := NEW.user_id;
    ELSE
        -- For other tables, you can add more conditions
        RETURN NEW;
    END IF;

    -- Get the frozen status for this user
    SELECT is_frozen INTO user_frozen
    FROM profiles
    WHERE id = user_id_to_check;

    -- If account is frozen
    IF user_frozen = TRUE THEN
        -- Special case: Allow unfreezing the account itself
        IF TG_TABLE_NAME = 'profiles' AND OLD.is_frozen = TRUE AND NEW.is_frozen = FALSE THEN
            -- Allow the unfreeze operation
            RETURN NEW;
        END IF;

        -- Special case: Allow updating frozen_at when unfreezing
        IF TG_TABLE_NAME = 'profiles' AND NEW.is_frozen = FALSE THEN
            RETURN NEW;
        END IF;

        -- Block all other updates
        RAISE EXCEPTION 'Cannot update data while account is frozen. Please unfreeze your account first.';
    END IF;

    -- If not frozen, allow the update
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Add trigger to profiles table
CREATE TRIGGER prevent_frozen_profile_updates
    BEFORE UPDATE ON profiles
    FOR EACH ROW
    WHEN (OLD.* IS DISTINCT FROM NEW.*)
    EXECUTE FUNCTION check_account_frozen();

-- Add trigger to partners table
CREATE TRIGGER prevent_frozen_partner_updates
    BEFORE UPDATE ON partners
    FOR EACH ROW
    WHEN (OLD.* IS DISTINCT FROM NEW.*)
    EXECUTE FUNCTION check_account_frozen();

-- Add comment
COMMENT ON FUNCTION check_account_frozen() IS 'Prevents updates to user data when account is frozen, except for unfreezing the account itself';

-- =====================================================
-- OPTIONAL: Add triggers to other tables as needed
-- =====================================================

-- Example for venues table (uncomment if needed)
-- DROP TRIGGER IF EXISTS prevent_frozen_venue_updates ON venues;
-- CREATE TRIGGER prevent_frozen_venue_updates
--     BEFORE UPDATE ON venues
--     FOR EACH ROW
--     WHEN (OLD.* IS DISTINCT FROM NEW.*)
--     EXECUTE FUNCTION check_account_frozen();

-- Example for courts table (uncomment if needed)
-- DROP TRIGGER IF EXISTS prevent_frozen_court_updates ON courts;
-- CREATE TRIGGER prevent_frozen_court_updates
--     BEFORE UPDATE ON courts
--     FOR EACH ROW
--     WHEN (OLD.* IS DISTINCT FROM NEW.*)
--     EXECUTE FUNCTION check_account_frozen();

-- Example for matches table (uncomment if needed)
-- DROP TRIGGER IF EXISTS prevent_frozen_match_updates ON matches;
-- CREATE TRIGGER prevent_frozen_match_updates
--     BEFORE UPDATE ON matches
--     FOR EACH ROW
--     WHEN (OLD.* IS DISTINCT FROM NEW.*)
--     EXECUTE FUNCTION check_account_frozen();

-- Example for events table (uncomment if needed)
-- DROP TRIGGER IF EXISTS prevent_frozen_event_updates ON events;
-- CREATE TRIGGER prevent_frozen_event_updates
--     BEFORE UPDATE ON events
--     FOR EACH ROW
--     WHEN (OLD.* IS DISTINCT FROM NEW.*)
--     EXECUTE FUNCTION check_account_frozen();

-- Example for classes table (uncomment if needed)
-- DROP TRIGGER IF EXISTS prevent_frozen_class_updates ON classes;
-- CREATE TRIGGER prevent_frozen_class_updates
--     BEFORE UPDATE ON classes
--     FOR EACH ROW
--     WHEN (OLD.* IS DISTINCT FROM NEW.*)
--     EXECUTE FUNCTION check_account_frozen();

