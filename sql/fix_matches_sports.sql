-- Fix Matches Table to Support Volleyball and Basketball
-- Run this in your Supabase SQL Editor

-- Drop the existing sport check constraint
ALTER TABLE matches DROP CONSTRAINT IF EXISTS matches_sport_check;

-- Add the new constraint with volleyball and basketball included
ALTER TABLE matches ADD CONSTRAINT matches_sport_check 
  CHECK (sport IN ('tennis', 'pickleball', 'squash', 'racquetball', 'badminton', 'table_tennis', 'basketball', 'volleyball'));

-- Verify the constraint was added
SELECT 
  conname as constraint_name,
  pg_get_constraintdef(oid) as constraint_definition
FROM pg_constraint
WHERE conrelid = 'matches'::regclass
  AND conname = 'matches_sport_check';

