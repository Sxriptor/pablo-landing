-- =====================================================
-- SIMPLE TABLE LIST - FAST VERSION
-- =====================================================

-- 1. Show all tables (fast)
SELECT tablename 
FROM pg_tables 
WHERE schemaname = 'public'
ORDER BY tablename;