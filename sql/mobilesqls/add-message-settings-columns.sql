-- =====================================================
-- ADD MESSAGE SETTINGS COLUMNS TO PROFILES TABLE
-- Run this in your Supabase SQL Editor
-- =====================================================

-- Add message-related settings columns to profiles table
DO $$
BEGIN
    -- Notification settings
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'sound_notifications') THEN
        ALTER TABLE profiles ADD COLUMN sound_notifications BOOLEAN DEFAULT true;
    END IF;

    -- Privacy settings
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'read_receipts') THEN
        ALTER TABLE profiles ADD COLUMN read_receipts BOOLEAN DEFAULT true;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'online_status') THEN
        ALTER TABLE profiles ADD COLUMN online_status BOOLEAN DEFAULT true;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'typing_indicators') THEN
        ALTER TABLE profiles ADD COLUMN typing_indicators BOOLEAN DEFAULT true;
    END IF;

    -- Chat feature settings
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'auto_save_media') THEN
        ALTER TABLE profiles ADD COLUMN auto_save_media BOOLEAN DEFAULT false;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'message_reactions') THEN
        ALTER TABLE profiles ADD COLUMN message_reactions BOOLEAN DEFAULT true;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'quick_actions') THEN
        ALTER TABLE profiles ADD COLUMN quick_actions BOOLEAN DEFAULT true;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'auto_delete_chats') THEN
        ALTER TABLE profiles ADD COLUMN auto_delete_chats BOOLEAN DEFAULT false;
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'friend_messages_delete_duration') THEN
        ALTER TABLE profiles ADD COLUMN friend_messages_delete_duration VARCHAR(20) DEFAULT '30days';
    END IF;

    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'profiles' AND column_name = 'game_chats_delete_duration') THEN
        ALTER TABLE profiles ADD COLUMN game_chats_delete_duration VARCHAR(20) DEFAULT '30days';
    END IF;
END $$;

-- =====================================================
-- UPDATE user_privacy_settings TABLE
-- =====================================================

-- Update user_privacy_settings table structure
DO $$
BEGIN
    -- Change allow_friend_requests column type if it exists
    IF EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'user_privacy_settings' AND column_name = 'allow_friend_requests') THEN
        -- Drop the constraint first
        ALTER TABLE user_privacy_settings DROP CONSTRAINT IF EXISTS user_privacy_settings_allow_friend_requests_check;

        -- Alter the column
        ALTER TABLE user_privacy_settings
        ALTER COLUMN allow_friend_requests TYPE TEXT;

        -- Add new constraint
        ALTER TABLE user_privacy_settings
        ADD CONSTRAINT user_privacy_settings_allow_friend_requests_check
        CHECK (allow_friend_requests IN ('everyone', 'friends_of_friends', 'no_one'));
    END IF;

    -- Add friend_request_permission as alias if needed
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'user_privacy_settings' AND column_name = 'friend_request_permission') THEN
        ALTER TABLE user_privacy_settings ADD COLUMN friend_request_permission TEXT
        CHECK (friend_request_permission IN ('everyone', 'friends_of_friends', 'no_one')) DEFAULT 'everyone';
    END IF;
END $$;

-- Set default privacy settings for existing users
INSERT INTO user_privacy_settings (user_id)
SELECT id FROM profiles
WHERE id NOT IN (SELECT user_id FROM user_privacy_settings WHERE user_id IS NOT NULL)
ON CONFLICT (user_id) DO NOTHING;

-- =====================================================
-- MIGRATION COMPLETE
-- =====================================================
