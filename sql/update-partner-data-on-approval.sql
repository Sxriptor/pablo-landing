-- =====================================================
-- UPDATE PARTNER DATA ON APPLICATION APPROVAL
-- This trigger copies application data to partners table when approved
-- Run this if you've already set up the partner system
-- =====================================================

-- Update the existing trigger function to include partner data update
CREATE OR REPLACE FUNCTION handle_application_status_change()
RETURNS TRIGGER AS $$
BEGIN
  -- If application is approved, set partner status to true and update partners table
  IF NEW.status = 'approved' AND OLD.status != 'approved' THEN
    -- Update profiles.partner to true (this will trigger partner record creation)
    UPDATE profiles
    SET partner = true
    WHERE id = NEW.user_id;

    -- Update partners table with application data
    UPDATE partners
    SET 
      phone = NEW.phone,
      address = CONCAT_WS(', ', 
        NEW.address, 
        NEW.city, 
        NEW.state, 
        NEW.postal_code,
        CASE WHEN NEW.country != 'USA' THEN NEW.country ELSE NULL END
      ),
      website = NEW.website,
      description = NEW.description,
      business_type = NEW.business_type,
      contact_person = NEW.contact_person,
      updated_at = NOW()
    WHERE user_id = NEW.user_id;

    -- Set reviewed_at timestamp
    NEW.reviewed_at = NOW();

    RAISE NOTICE '✅ Application approved for user %, partner status and data updated', NEW.user_id;
  END IF;

  -- If application is rejected, ensure reviewed_at is set
  IF NEW.status = 'rejected' AND OLD.status != 'rejected' THEN
    NEW.reviewed_at = NOW();
    RAISE NOTICE '❌ Application rejected for user %', NEW.user_id;
  END IF;

  -- If status changed to under_review
  IF NEW.status = 'under_review' AND OLD.status = 'pending' THEN
    RAISE NOTICE 'ℹ️  Application moved to under_review for user %', NEW.user_id;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Verify the trigger exists
DO $$
BEGIN
    IF EXISTS (
        SELECT 1 FROM pg_trigger 
        WHERE tgname = 'on_application_status_change'
    ) THEN
        RAISE NOTICE '✅ Trigger updated successfully!';
    ELSE
        RAISE WARNING '⚠️  Trigger does not exist. Run the full partner setup first.';
    END IF;
END $$;

-- =====================================================
-- TEST QUERY (commented out - uncomment to test)
-- =====================================================

-- To test the trigger, you can approve an application:
-- UPDATE partner_applications 
-- SET status = 'approved' 
-- WHERE email = 'test@example.com';

-- Then verify the partners table was updated:
-- SELECT phone, address, website, description, business_type, contact_person
-- FROM partners 
-- WHERE user_id = (SELECT user_id FROM partner_applications WHERE email = 'test@example.com');

-- =====================================================
-- WHAT THIS TRIGGER DOES
-- =====================================================
-- 
-- When a partner_application status changes to 'approved':
-- 1. Sets profiles.partner = true (creates partner record if not exists)
-- 2. Copies application data to partners table:
--    - phone
--    - address (combines address, city, state, postal_code, country)
--    - website
--    - description
--    - business_type
--    - contact_person
-- 3. Sets reviewed_at timestamp
-- 
-- This ensures the partners table is automatically populated
-- with the information from the approved application!

