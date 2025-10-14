-- Partners table: Core partner company information
-- This table stores approved partner companies that can access the dashboard

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
  status text default 'pending' check (status in ('pending', 'approved', 'rejected', 'suspended')),
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

-- Trigger to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger update_partners_updated_at
  before update on partners
  for each row
  execute function update_updated_at_column();