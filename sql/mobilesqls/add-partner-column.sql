-- Add partner column to profiles table
-- This column tracks whether a user is a partner or not

-- Add the partner column with default value of false
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS partner BOOLEAN DEFAULT FALSE;

-- Add a comment to describe the column
COMMENT ON COLUMN profiles.partner IS 'Indicates whether the user is a registered partner';

-- Optional: Create an index for faster queries filtering by partner status
CREATE INDEX IF NOT EXISTS idx_profiles_partner ON profiles(partner);

-- Optional: View all partners (for testing/verification)
-- SELECT id, username, first_name, last_name, partner 
-- FROM profiles 
-- WHERE partner = TRUE;

