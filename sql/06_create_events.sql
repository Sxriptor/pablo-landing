-- Events table: Partner-hosted events, classes, and clinics
-- Includes lessons, tournaments, social events, etc.

create table if not exists events (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references partners(id) on delete cascade,
  venue_id uuid not null references venues(id) on delete cascade,
  
  -- Event details
  name text not null,
  description text,
  event_type text not null check (event_type in ('lesson', 'clinic', 'tournament', 'social', 'camp', 'workshop')),
  sport text not null check (sport in ('tennis', 'pickleball', 'squash', 'racquetball', 'badminton', 'table_tennis')),
  
  -- Instructor/organizer info
  instructor_name text,
  instructor_bio text,
  instructor_credentials text,
  
  -- Scheduling
  start_date date not null,
  end_date date not null,
  start_time time not null,
  end_time time not null,
  timezone text default 'UTC',
  
  -- Recurrence for ongoing classes
  is_recurring boolean default false,
  recurrence_pattern text, -- 'weekly', 'daily', 'monthly'
  recurrence_end_date date,
  
  -- Participation and pricing
  capacity integer not null,
  current_registrations integer default 0,
  price decimal(8, 2) not null default 0,
  early_bird_price decimal(8, 2),
  early_bird_deadline timestamp with time zone,
  
  -- Registration
  registration_opens timestamp with time zone default now(),
  registration_closes timestamp with time zone,
  waitlist_enabled boolean default true,
  
  -- Requirements and details
  skill_level text check (skill_level in ('beginner', 'intermediate', 'advanced', 'all_levels')),
  age_group text check (age_group in ('kids', 'teens', 'adults', 'seniors', 'all_ages')),
  equipment_provided boolean default false,
  equipment_required text, -- What participants need to bring
  
  -- Event materials
  image_url text,
  additional_images text[],
  
  -- Status
  status text default 'scheduled' check (status in ('scheduled', 'in_progress', 'completed', 'cancelled', 'postponed')),
  cancellation_reason text,
  
  -- Timestamps
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  
  -- Constraints
  constraint events_dates_valid check (end_date >= start_date),
  constraint events_times_valid check (end_time > start_time),
  constraint events_capacity_positive check (capacity > 0),
  constraint events_registrations_valid check (current_registrations >= 0 and current_registrations <= capacity),
  constraint events_price_positive check (price >= 0),
  constraint events_early_bird_valid check (early_bird_price is null or early_bird_price >= 0)
);

-- Event registrations junction table
create table if not exists event_registrations (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references events(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  
  -- Registration details
  registered_at timestamp with time zone default now(),
  status text default 'registered' check (status in ('registered', 'confirmed', 'waitlisted', 'cancelled', 'no_show', 'completed')),
  payment_status text default 'pending' check (payment_status in ('pending', 'paid', 'refunded', 'partial_refund')),
  
  -- Pricing
  amount_paid decimal(8, 2),
  discount_applied decimal(8, 2) default 0,
  
  -- Additional info
  emergency_contact text,
  dietary_restrictions text,
  special_requests text,
  
  -- Constraints
  unique(event_id, user_id),
  constraint registrations_amount_positive check (amount_paid >= 0),
  constraint registrations_discount_positive check (discount_applied >= 0)
);

-- Indexes for performance
create index if not exists idx_events_partner_id on events(partner_id);
create index if not exists idx_events_venue_id on events(venue_id);
create index if not exists idx_events_start_date on events(start_date);
create index if not exists idx_events_sport on events(sport);
create index if not exists idx_events_event_type on events(event_type);
create index if not exists idx_events_status on events(status);

create index if not exists idx_event_registrations_event_id on event_registrations(event_id);
create index if not exists idx_event_registrations_user_id on event_registrations(user_id);

-- Triggers
create trigger update_events_updated_at
  before update on events
  for each row
  execute function update_updated_at_column();