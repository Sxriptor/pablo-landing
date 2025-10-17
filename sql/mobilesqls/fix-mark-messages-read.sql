-- Fix for missing mark_messages_read function
-- Run this in your Supabase SQL Editor

CREATE OR REPLACE FUNCTION mark_messages_read(p_chat_id UUID, p_user_id UUID)
RETURNS void AS $$
BEGIN
  -- Update the user's last_read_at and reset unread count
  UPDATE chat_members 
  SET last_read_at = NOW(),
      unread_count = 0
  WHERE chat_id = p_chat_id AND user_id = p_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION mark_messages_read(UUID, UUID) TO authenticated;