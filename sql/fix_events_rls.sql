-- Fix Events RLS Policies
-- Run this in your Supabase SQL Editor

-- First, drop existing policies
DROP POLICY IF EXISTS "Allow authenticated partners to insert events" ON events;
DROP POLICY IF EXISTS "Allow authenticated partners to update their events" ON events;
DROP POLICY IF EXISTS "Allow authenticated partners to delete their events" ON events;
DROP POLICY IF EXISTS "Allow anonymous read access to events" ON events;

-- Recreate the SELECT policy (anon can read all events)
CREATE POLICY "Allow anonymous read access to events"
  ON events
  FOR SELECT
  TO public
  USING (true);

-- Simple INSERT policy - just verify the partner_id belongs to the user
CREATE POLICY "Allow authenticated partners to insert events"
  ON events
  FOR INSERT
  TO public
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM partners p
      WHERE p.user_id = auth.uid()
        AND p.id = partner_id
    )
  );

-- Simple UPDATE policy
CREATE POLICY "Allow authenticated partners to update their events"
  ON events
  FOR UPDATE
  TO public
  USING (
    EXISTS (
      SELECT 1
      FROM partners p
      WHERE p.user_id = auth.uid()
        AND p.id = events.partner_id
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1
      FROM partners p
      WHERE p.user_id = auth.uid()
        AND p.id = partner_id
    )
  );

-- Simple DELETE policy
CREATE POLICY "Allow authenticated partners to delete their events"
  ON events
  FOR DELETE
  TO public
  USING (
    EXISTS (
      SELECT 1
      FROM partners p
      WHERE p.user_id = auth.uid()
        AND p.id = events.partner_id
    )
  );
