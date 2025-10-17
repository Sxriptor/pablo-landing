-- =====================================================
-- COMPLETE PARTNER SYSTEM SETUP
-- This script sets up the entire partner management system
-- Can be run multiple times safely (idempotent)
-- =====================================================

-- =====================================================
-- 1. ADD PARTNER COLUMN TO PROFILES TABLE
-- =====================================================

-- Add the partner column with default value of false
alter table profiles
add column if not exists partner boolean default false;

-- Add a comment to describe the column
comment on column profiles.partner is 'Indicates whether the user is a registered partner';

-- Create an index for faster queries filtering by partner status
create index if not exists idx_profiles_partner on profiles(partner);

-- =====================================================
-- 2. CREATE PARTNERS TABLE
-- =====================================================

create table if not exists partners (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  email text unique not null,
  phone text,
  address text,
  logo_url text,
  website text,
  description text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  status text default 'approved' check (status in ('pending', 'approved', 'rejected', 'suspended')),
  activation_code text,
  user_id uuid references auth.users(id) on delete cascade,

  -- Additional business info
  business_type text, -- 'venue', 'club', 'academy', 'other'
  contact_person text,
  tax_id text,

  -- Constraints
  constraint partners_email_format check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Indexes for performance
create index if not exists idx_partners_user_id on partners(user_id);
create index if not exists idx_partners_status on partners(status);
create index if not exists idx_partners_email on partners(email);

-- =====================================================
-- 3. TRIGGERS
-- =====================================================

-- Function to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Trigger for updated_at on partners table
drop trigger if exists update_partners_updated_at on partners;
create trigger update_partners_updated_at
  before update on partners
  for each row
  execute function update_updated_at_column();

-- =====================================================
-- 4. RLS POLICIES
-- =====================================================

-- Enable RLS on partners table
alter table partners enable row level security;

-- Drop existing policies if they exist
drop policy if exists "Partners can view own record" on partners;
drop policy if exists "Partners can update own record" on partners;
drop policy if exists "Service role has full access" on partners;

-- Policy: Partners can view their own record
create policy "Partners can view own record"
  on partners
  for select
  using (auth.uid() = user_id);

-- Policy: Partners can update their own record
create policy "Partners can update own record"
  on partners
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Policy: Service role has full access (for admin operations)
create policy "Service role has full access"
  on partners
  for all
  using (auth.jwt() ->> 'role' = 'service_role');

-- =====================================================
-- 5. AUTOMATIC PARTNER RECORD MANAGEMENT
-- =====================================================

-- Function to automatically create/delete partner record when profiles.partner changes
create or replace function handle_partner_status_change()
returns trigger as $$
declare
  partner_exists boolean;
  user_email text;
  user_metadata jsonb;
  company_name_value text;
begin
  -- Check if partner record exists
  select exists(
    select 1 from partners where user_id = new.id
  ) into partner_exists;

  -- Get user email and metadata from auth.users
  select
    email,
    raw_user_meta_data
  into
    user_email,
    user_metadata
  from auth.users
  where id = new.id;

  -- Extract company name from metadata or use full_name as fallback
  company_name_value := coalesce(
    user_metadata->>'company_name',
    new.full_name,
    'Unknown Company'
  );

  -- If partner column changed to true and no partner record exists, create one
  if new.partner = true and (old.partner = false or old.partner is null) and not partner_exists then
    insert into partners (
      user_id,
      email,
      company_name,
      contact_person,
      status
    ) values (
      new.id,
      user_email,
      company_name_value,
      new.full_name,
      'approved' -- Auto-approve partners created through this method
    );

    raise notice 'Partner record created for user %', new.id;
  end if;

  -- If partner column changed to false, delete partner record
  if new.partner = false and old.partner = true and partner_exists then
    delete from partners where user_id = new.id;

    raise notice 'Partner record deleted for user %', new.id;
  end if;

  return new;
end;
$$ language plpgsql security definer;

-- Trigger to execute the function when profiles.partner changes
drop trigger if exists on_partner_status_change on profiles;
create trigger on_partner_status_change
  after update of partner on profiles
  for each row
  when (old.partner is distinct from new.partner)
  execute function handle_partner_status_change();

-- =====================================================
-- 6. HELPER FUNCTIONS
-- =====================================================

-- Function to get partner info for a user
create or replace function get_partner_info(p_user_id uuid)
returns table (
  id uuid,
  company_name text,
  email text,
  phone text,
  status text,
  created_at timestamp with time zone
) as $$
begin
  return query
  select
    p.id,
    p.company_name,
    p.email,
    p.phone,
    p.status,
    p.created_at
  from partners p
  where p.user_id = p_user_id;
end;
$$ language plpgsql security definer;

-- =====================================================
-- 7. COMMENTS
-- =====================================================

comment on table partners is 'Stores partner company information. Records are automatically created/deleted based on profiles.partner column';
comment on column partners.user_id is 'Links to auth.users - automatically managed by trigger';
comment on column partners.status is 'Partner approval status: pending, approved, rejected, or suspended';
comment on function handle_partner_status_change() is 'Automatically creates partner record when profiles.partner = true, deletes when false';

-- =====================================================
-- SETUP COMPLETE!
-- =====================================================
--
-- The partner system is now fully configured:
-- ✅ profiles.partner column added
-- ✅ partners table created with all fields
-- ✅ RLS policies enabled for security
-- ✅ Automatic record management via triggers
-- ✅ Helper functions for querying partner data
--
-- To test:
-- 1. Update a user's partner status: UPDATE profiles SET partner = true WHERE id = 'user-id';
-- 2. Check partner record was created: SELECT * FROM partners WHERE user_id = 'user-id';
-- 3. Set back to false: UPDATE profiles SET partner = false WHERE id = 'user-id';
-- 4. Verify record was deleted: SELECT * FROM partners WHERE user_id = 'user-id';
--
