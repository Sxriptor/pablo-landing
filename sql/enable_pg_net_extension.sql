-- =====================================================
-- ENABLE PG_NET EXTENSION FOR WEBHOOKS
-- =====================================================
-- This extension is required for the partner application webhook trigger
-- It allows PostgreSQL to make HTTP requests

-- Enable the pg_net extension (required for net.http_post)
CREATE EXTENSION IF NOT EXISTS pg_net SCHEMA extensions;

-- Grant usage on the net schema to authenticated users
GRANT USAGE ON SCHEMA net TO authenticated;
GRANT USAGE ON SCHEMA net TO service_role;

-- Verify the extension is enabled
SELECT * FROM pg_extension WHERE extname = 'pg_net';

-- Verify the net schema exists
SELECT schema_name FROM information_schema.schemata WHERE schema_name = 'net';
