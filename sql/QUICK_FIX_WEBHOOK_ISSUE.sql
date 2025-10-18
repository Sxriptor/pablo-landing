-- =====================================================
-- QUICK FIX FOR "schema net does not exist" ERROR
-- =====================================================
-- Choose ONE of the two options below:

-- =====================================================
-- OPTION 1: ENABLE PG_NET EXTENSION (RECOMMENDED)
-- =====================================================
-- This enables the webhook to send email notifications to admins
-- Run this in your Supabase SQL Editor:

CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Verify it worked:
SELECT * FROM pg_extension WHERE extname = 'pg_net';

-- =====================================================
-- OPTION 2: TEMPORARILY DISABLE THE WEBHOOK TRIGGER
-- =====================================================
-- Use this if Option 1 doesn't work or you don't need email notifications yet
-- Run this in your Supabase SQL Editor:

-- DROP TRIGGER IF EXISTS on_partner_application_submitted ON partner_applications;

-- =====================================================
-- AFTER RUNNING ONE OF THE OPTIONS ABOVE:
-- =====================================================
-- Test the partner application form again in your browser
-- The 400 error should be resolved
