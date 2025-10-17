-- =====================================================
-- ADD NOTIFICATIONS COLUMN TO CHAT_MEMBERS
-- =====================================================
-- This allows each user to enable/disable notifications
-- for individual chats independently
-- =====================================================

-- Add notifications_enabled column to chat_members table
ALTER TABLE chat_members
ADD COLUMN IF NOT EXISTS notifications_enabled BOOLEAN DEFAULT true;

-- Add comment to document the column
COMMENT ON COLUMN chat_members.notifications_enabled IS 
'Controls whether the user receives notifications for this specific chat. Each user can enable/disable notifications independently.';

-- Create index for faster queries when checking notification status
CREATE INDEX IF NOT EXISTS idx_chat_members_notifications 
ON chat_members(user_id, notifications_enabled) 
WHERE notifications_enabled = true;

-- Verification query
SELECT 
    'notifications_enabled column added successfully!' as status,
    column_name,
    data_type,
    column_default,
    is_nullable
FROM information_schema.columns
WHERE table_name = 'chat_members' 
AND column_name = 'notifications_enabled';

