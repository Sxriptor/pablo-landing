-- Fix partner_applications table constraints to allow incomplete applications
-- The issue: number_of_courts has a CHECK constraint that prevents null values
-- This fails when creating an initial application row before the form is filled

-- Drop the problematic constraint
ALTER TABLE partner_applications
DROP CONSTRAINT IF EXISTS applications_courts_positive;

-- Add it back but allow null values (only check if value is provided)
ALTER TABLE partner_applications
ADD CONSTRAINT applications_courts_positive
CHECK (number_of_courts IS NULL OR number_of_courts > 0);

-- Also fix the years_in_business constraint to allow null
ALTER TABLE partner_applications
DROP CONSTRAINT IF EXISTS applications_years_positive;

ALTER TABLE partner_applications
ADD CONSTRAINT applications_years_positive
CHECK (years_in_business IS NULL OR years_in_business >= 0);

-- Verify the constraints
SELECT
    con.conname AS constraint_name,
    pg_get_constraintdef(con.oid) AS constraint_definition
FROM pg_constraint con
INNER JOIN pg_class rel ON rel.oid = con.conrelid
WHERE rel.relname = 'partner_applications'
AND con.contype = 'c';
