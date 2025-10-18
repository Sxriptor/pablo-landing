-- Check current RLS policies on partner_applications
SELECT
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd,
    qual,
    with_check
FROM pg_policies
WHERE tablename = 'partner_applications'
ORDER BY policyname;

-- Drop all existing policies to clean up
DROP POLICY IF EXISTS "Users can view their own applications" ON partner_applications;
DROP POLICY IF EXISTS "Users can create applications" ON partner_applications;
DROP POLICY IF EXISTS "Users can view own application" ON partner_applications;
DROP POLICY IF EXISTS "Users can create own application" ON partner_applications;
DROP POLICY IF EXISTS "Users can update own pending application" ON partner_applications;
DROP POLICY IF EXISTS "Admins can view all applications" ON partner_applications;
DROP POLICY IF EXISTS "Admins can update all applications" ON partner_applications;

-- Create clean, working policies
-- Policy: Users can view their own application
CREATE POLICY "Users can view own application"
  ON partner_applications
  FOR SELECT
  USING (auth.uid() = user_id);

-- Policy: Users can create their own application
CREATE POLICY "Users can create own application"
  ON partner_applications
  FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Policy: Users can update their own application only if status is pending
CREATE POLICY "Users can update own pending application"
  ON partner_applications
  FOR UPDATE
  USING (auth.uid() = user_id AND status = 'pending')
  WITH CHECK (auth.uid() = user_id AND status = 'pending');

-- Policy: Admins/partners can view all applications
CREATE POLICY "Admins can view all applications"
  ON partner_applications
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM partners
      WHERE user_id = auth.uid()
      AND status = 'approved'
    )
  );

-- Policy: Admins can update all applications
CREATE POLICY "Admins can update all applications"
  ON partner_applications
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM partners
      WHERE user_id = auth.uid()
      AND status = 'approved'
    )
  );

-- Verify the new policies
SELECT
    policyname,
    cmd,
    CASE
        WHEN qual IS NOT NULL THEN 'USING: ' || qual
        ELSE 'No USING clause'
    END as using_clause,
    CASE
        WHEN with_check IS NOT NULL THEN 'WITH CHECK: ' || with_check
        ELSE 'No WITH CHECK clause'
    END as with_check_clause
FROM pg_policies
WHERE tablename = 'partner_applications'
ORDER BY policyname;
