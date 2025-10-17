-- =====================================================
-- ADD NOTIFICATION PREFERENCES TO PARTNERS TABLE
-- This script adds notification settings columns to partners table
-- Can be run multiple times safely (idempotent)
-- =====================================================

-- Add notification preference columns to partners table
ALTER TABLE partners
ADD COLUMN IF NOT EXISTS notifications_enabled BOOLEAN DEFAULT true;

ALTER TABLE partners
ADD COLUMN IF NOT EXISTS email_notifications BOOLEAN DEFAULT true;

ALTER TABLE partners
ADD COLUMN IF NOT EXISTS sms_notifications BOOLEAN DEFAULT true;

ALTER TABLE partners
ADD COLUMN IF NOT EXISTS court_notifications BOOLEAN DEFAULT true;

ALTER TABLE partners
ADD COLUMN IF NOT EXISTS class_notifications BOOLEAN DEFAULT true;

ALTER TABLE partners
ADD COLUMN IF NOT EXISTS event_notifications BOOLEAN DEFAULT true;

ALTER TABLE partners
ADD COLUMN IF NOT EXISTS match_notifications BOOLEAN DEFAULT true;

ALTER TABLE partners
ADD COLUMN IF NOT EXISTS venue_notifications BOOLEAN DEFAULT true;

-- Add comments to describe the columns
COMMENT ON COLUMN partners.notifications_enabled IS 'Master switch for all notifications';
COMMENT ON COLUMN partners.email_notifications IS 'Enable/disable email notifications';
COMMENT ON COLUMN partners.sms_notifications IS 'Enable/disable SMS notifications';
COMMENT ON COLUMN partners.court_notifications IS 'Enable/disable court-related notifications';
COMMENT ON COLUMN partners.class_notifications IS 'Enable/disable class-related notifications';
COMMENT ON COLUMN partners.event_notifications IS 'Enable/disable event-related notifications';
COMMENT ON COLUMN partners.match_notifications IS 'Enable/disable match-related notifications';
COMMENT ON COLUMN partners.venue_notifications IS 'Enable/disable venue-related notifications';

-- Create an index for faster queries filtering by notification preferences
CREATE INDEX IF NOT EXISTS idx_partners_notifications_enabled ON partners(notifications_enabled);
CREATE INDEX IF NOT EXISTS idx_partners_email_notifications ON partners(email_notifications);

-- Update existing records to have notifications enabled by default
UPDATE partners
SET 
  notifications_enabled = COALESCE(notifications_enabled, true),
  email_notifications = COALESCE(email_notifications, true),
  sms_notifications = COALESCE(sms_notifications, true),
  court_notifications = COALESCE(court_notifications, true),
  class_notifications = COALESCE(class_notifications, true),
  event_notifications = COALESCE(event_notifications, true),
  match_notifications = COALESCE(match_notifications, true),
  venue_notifications = COALESCE(venue_notifications, true)
WHERE 
  notifications_enabled IS NULL 
  OR email_notifications IS NULL 
  OR sms_notifications IS NULL
  OR court_notifications IS NULL
  OR class_notifications IS NULL
  OR event_notifications IS NULL
  OR match_notifications IS NULL
  OR venue_notifications IS NULL;

