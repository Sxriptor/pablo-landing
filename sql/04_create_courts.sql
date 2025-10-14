-- Courts table: Individual courts within venues
-- Each venue can have multiple courts for different sports

create table if not exists courts (
  id uuid primary key default gen_random_uuid(),
  venue_id uuid not null references venues(id) on delete cascade,
  name text not null, -- "Court 1", "Center Court", etc.
  
  -- Court specifications
  sport_type text not null check (sport_type in ('tennis', 'pickleball', 'squash', 'racquetball', 'badminton', 'table_tennis')),
  surface_type text check (surface_type in ('hard', 'clay', 'grass', 'indoor_hard', 'synthetic', 'wood')),
  indoor boolean default false,
  
  -- Court features
  lighting boolean default true,
  net_provided boolean default true,
  equipment_rental boolean default false,
  
  -- Availability and pricing
  available boolean default true,
  hourly_rate decimal(8, 2), -- Price per hour
  peak_rate decimal(8, 2), -- Peak hours rate
  
  -- Scheduling
  available_hours jsonb, -- Store as JSON: {"monday": [{"start": "06:00", "end": "22:00"}], ...}
  advance_booking_days integer default 30, -- How many days in advance can be booked
  min_booking_duration integer default 60, -- Minimum booking duration in minutes
  max_booking_duration integer default 180, -- Maximum booking duration in minutes
  
  -- Physical details
  length_meters decimal(5, 2),
  width_meters decimal(5, 2),
  height_meters decimal(5, 2),
  
  -- Status and timestamps
  maintenance_mode boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  
  -- Constraints
  constraint courts_rates_positive check (hourly_rate is null or hourly_rate >= 0),
  constraint courts_peak_rate_positive check (peak_rate is null or peak_rate >= 0),
  constraint courts_dimensions_positive check (
    (length_meters is null or length_meters > 0) and
    (width_meters is null or width_meters > 0) and
    (height_meters is null or height_meters > 0)
  ),
  constraint courts_booking_duration_valid check (
    min_booking_duration > 0 and 
    max_booking_duration > min_booking_duration
  )
);

-- Indexes for performance
create index if not exists idx_courts_venue_id on courts(venue_id);
create index if not exists idx_courts_sport_type on courts(sport_type);
create index if not exists idx_courts_available on courts(available);
create index if not exists idx_courts_indoor on courts(indoor);

-- Trigger to update updated_at timestamp
create trigger update_courts_updated_at
  before update on courts
  for each row
  execute function update_updated_at_column();