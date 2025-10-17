-- =====================================================
-- PARTNER APPLICATIONS TABLE
-- Stores initial partner registration requests
-- This table handles the application process before partners are approved
-- =====================================================

create table if not exists partner_applications (
  id uuid primary key default gen_random_uuid(),

  -- User reference (links to auth.users)
  user_id uuid references auth.users(id) on delete cascade,

  -- Company information
  company_name text not null,
  email text not null,
  phone text,
  contact_person text not null,
  business_type text not null check (business_type in ('venue', 'club', 'academy', 'other')),
  description text not null,
  website text,
  address text,
  city text,
  state text,
  postal_code text,
  country text default 'USA',

  -- Business details
  years_in_business integer,
  number_of_courts integer,
  sports_offered text[], -- Array of sports: tennis, pickleball, squash, padel, etc.
  estimated_monthly_bookings integer,
  current_booking_system text,

  -- Status and workflow
  status text default 'pending' check (status in ('pending', 'approved', 'rejected', 'under_review')),
  submitted_at timestamp with time zone default now(),
  reviewed_at timestamp with time zone,
  reviewed_by uuid references auth.users(id),
  rejection_reason text,
  admin_notes text,

  -- Additional documents/info
  business_license_url text,
  insurance_certificate_url text,

  -- Timestamps
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),

  -- Constraints
  constraint applications_email_format check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  constraint applications_years_positive check (years_in_business >= 0),
  constraint applications_courts_positive check (number_of_courts > 0),
  constraint applications_one_per_user unique (user_id)
);

-- Indexes for performance
create index if not exists idx_applications_user_id on partner_applications(user_id);
create index if not exists idx_applications_status on partner_applications(status);
create index if not exists idx_applications_submitted_at on partner_applications(submitted_at);
create index if not exists idx_applications_email on partner_applications(email);

-- =====================================================
-- TRIGGERS
-- =====================================================

-- Trigger for updated_at timestamp
drop trigger if exists update_applications_updated_at on partner_applications;
create trigger update_applications_updated_at
  before update on partner_applications
  for each row
  execute function update_updated_at_column();

-- =====================================================
-- RLS POLICIES
-- =====================================================

-- Enable RLS on partner_applications table
alter table partner_applications enable row level security;

-- Drop existing policies if they exist
drop policy if exists "Users can view own application" on partner_applications;
drop policy if exists "Users can create own application" on partner_applications;
drop policy if exists "Users can update own pending application" on partner_applications;
drop policy if exists "Admins can view all applications" on partner_applications;
drop policy if exists "Admins can update all applications" on partner_applications;

-- Policy: Users can view their own application
create policy "Users can view own application"
  on partner_applications
  for select
  using (auth.uid() = user_id);

-- Policy: Users can create their own application
create policy "Users can create own application"
  on partner_applications
  for insert
  with check (auth.uid() = user_id);

-- Policy: Users can update their own application only if status is pending
create policy "Users can update own pending application"
  on partner_applications
  for update
  using (auth.uid() = user_id and status = 'pending')
  with check (auth.uid() = user_id and status = 'pending');

-- Policy: Admins/partners can view all applications (assuming partners table has admin flag or use service role)
create policy "Admins can view all applications"
  on partner_applications
  for select
  using (
    exists (
      select 1 from partners
      where user_id = auth.uid()
      and status = 'approved'
    )
  );

-- Policy: Admins can update all applications
create policy "Admins can update all applications"
  on partner_applications
  for update
  using (
    exists (
      select 1 from partners
      where user_id = auth.uid()
      and status = 'approved'
    )
  );

-- =====================================================
-- AUTOMATIC APPLICATION APPROVAL TRIGGER
-- =====================================================

-- Function to handle application approval/rejection
create or replace function handle_application_status_change()
returns trigger as $$
begin
  -- If application is approved, set partner status to true
  if new.status = 'approved' and old.status != 'approved' then
    -- Update profiles.partner to true (this will trigger partner record creation)
    update profiles
    set partner = true
    where id = new.user_id;

    -- Set reviewed_at timestamp
    new.reviewed_at = now();

    raise notice 'Application approved for user %, partner status updated', new.user_id;
  end if;

  -- If application is rejected, ensure reviewed_at is set
  if new.status = 'rejected' and old.status != 'rejected' then
    new.reviewed_at = now();

    raise notice 'Application rejected for user %', new.user_id;
  end if;

  -- If status changed to under_review
  if new.status = 'under_review' and old.status = 'pending' then
    raise notice 'Application moved to under_review for user %', new.user_id;
  end if;

  return new;
end;
$$ language plpgsql security definer;

-- Trigger to execute when application status changes
drop trigger if exists on_application_status_change on partner_applications;
create trigger on_application_status_change
  before update of status on partner_applications
  for each row
  when (old.status is distinct from new.status)
  execute function handle_application_status_change();

-- =====================================================
-- HELPER FUNCTIONS
-- =====================================================

-- Function to get pending applications count (for admin dashboard)
create or replace function get_pending_applications_count()
returns bigint as $$
begin
  return (select count(*) from partner_applications where status = 'pending');
end;
$$ language plpgsql security definer;

-- Function to get user's application status
create or replace function get_my_application_status(p_user_id uuid)
returns table (
  id uuid,
  company_name text,
  status text,
  submitted_at timestamp with time zone,
  reviewed_at timestamp with time zone,
  rejection_reason text
) as $$
begin
  return query
  select
    pa.id,
    pa.company_name,
    pa.status,
    pa.submitted_at,
    pa.reviewed_at,
    pa.rejection_reason
  from partner_applications pa
  where pa.user_id = p_user_id;
end;
$$ language plpgsql security definer;

-- Function to approve application (for admins)
create or replace function approve_application(
  p_application_id uuid,
  p_admin_user_id uuid
)
returns boolean as $$
begin
  update partner_applications
  set
    status = 'approved',
    reviewed_by = p_admin_user_id,
    reviewed_at = now()
  where id = p_application_id
  and status in ('pending', 'under_review');

  return found;
end;
$$ language plpgsql security definer;

-- Function to reject application (for admins)
create or replace function reject_application(
  p_application_id uuid,
  p_admin_user_id uuid,
  p_rejection_reason text
)
returns boolean as $$
begin
  update partner_applications
  set
    status = 'rejected',
    reviewed_by = p_admin_user_id,
    reviewed_at = now(),
    rejection_reason = p_rejection_reason
  where id = p_application_id
  and status in ('pending', 'under_review');

  return found;
end;
$$ language plpgsql security definer;

-- =====================================================
-- COMMENTS
-- =====================================================

comment on table partner_applications is 'Stores partner application requests. Approved applications automatically set profiles.partner = true';
comment on column partner_applications.user_id is 'Links to auth.users - the user submitting the application';
comment on column partner_applications.status is 'Application status: pending, under_review, approved, or rejected';
comment on function handle_application_status_change() is 'Automatically updates partner status when application is approved';
comment on function approve_application(uuid, uuid) is 'Approve a partner application and set profiles.partner = true';
comment on function reject_application(uuid, uuid, text) is 'Reject a partner application with reason';

-- =====================================================
-- SETUP COMPLETE!
-- =====================================================
--
-- The partner applications system is now fully configured:
-- ✅ partner_applications table created with all fields
-- ✅ RLS policies for users and admins
-- ✅ Automatic partner status update on approval
-- ✅ Helper functions for application management
--
-- Workflow:
-- 1. User submits application → Creates row in partner_applications
-- 2. Admin reviews → Sets status to 'under_review'
-- 3. Admin approves → Status = 'approved', profiles.partner = true, partner record auto-created
-- 4. Admin rejects → Status = 'rejected', rejection_reason provided
--