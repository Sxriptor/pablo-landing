-- =====================================================
-- ADD ACCOUNT FREEZE FUNCTIONALITY TO PROFILES
-- =====================================================

-- Add is_frozen column to profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS is_frozen BOOLEAN DEFAULT false;

-- Add a comment to describe the column
COMMENT ON COLUMN profiles.is_frozen IS 'Indicates whether the account has been frozen by the user. Frozen accounts cannot be edited or updated.';

-- Create an index for faster queries filtering by frozen status
CREATE INDEX IF NOT EXISTS idx_profiles_is_frozen ON profiles(is_frozen);

-- Optional: Add a frozen_at timestamp to track when account was frozen
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS frozen_at TIMESTAMP WITH TIME ZONE;

COMMENT ON COLUMN profiles.frozen_at IS 'Timestamp when the account was frozen';

