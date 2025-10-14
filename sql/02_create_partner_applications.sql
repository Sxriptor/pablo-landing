-- Partner applications table: Stores initial partner registration requests
-- This table handles the application process before partners are approved

create table if not exists partner_applications (
  id uuid primary key default gen_random_uuid(),
  company_name text not null,
  email text not null,
  phone text,
  contact_person text not null,
  business_type text not null check (business_type in ('venue', 'club', 'academy', 'other')),
  description text not null,
  website text,
  address text,
  
  -- Application specific fields
  years_in_business integer,
  number_of_courts integer,
  sports_offered text[], -- Array of sports: tennis, pickleball, squash, etc.
  
  -- Status and timestamps
  status text default 'pending' check (status in ('pending', 'approved', 'rejected', 'under_review')),
  submitted_at timestamp with time zone default now(),
  reviewed_at timestamp with time zone,
  reviewed_by uuid references auth.users(id),
  rejection_reason text,
  
  -- Additional documents/info
  business_license_url text,
  insurance_certificate_url text,
  
  -- Constraints
  constraint applications_email_format check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  constraint applications_years_positive check (years_in_business >= 0),
  constraint applications_courts_positive check (number_of_courts > 0)
);

-- Indexes for performance
create index if not exists idx_applications_status on partner_applications(status);
create index if not exists idx_applications_submitted_at on partner_applications(submitted_at);
create index if not exists idx_applications_email on partner_applications(email);