-- Venues table: Physical locations managed by partners
-- Each partner can have multiple venues

create table if not exists venues (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references partners(id) on delete cascade,
  name text not null,
  address text not null,
  city text not null,
  state text,
  postal_code text,
  country text default 'US',
  
  -- Contact and details
  phone text,
  email text,
  website text,
  description text,
  
  -- Media and presentation
  image_url text,
  gallery_urls text[], -- Array of image URLs
  
  -- Operational details
  operating_hours jsonb, -- Store as JSON: {"monday": {"open": "06:00", "close": "22:00"}, ...}
  amenities text[], -- parking, locker_rooms, pro_shop, restaurant, etc.
  
  -- Location data
  latitude decimal(10, 8),
  longitude decimal(11, 8),
  
  -- Status and timestamps
  active boolean default true,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  
  -- Constraints
  constraint venues_email_format check (email is null or email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  constraint venues_latitude_range check (latitude between -90 and 90),
  constraint venues_longitude_range check (longitude between -180 and 180)
);

-- Indexes for performance and location queries
create index if not exists idx_venues_partner_id on venues(partner_id);
create index if not exists idx_venues_active on venues(active);
create index if not exists idx_venues_location on venues(latitude, longitude);
create index if not exists idx_venues_city on venues(city);

-- Trigger to update updated_at timestamp
create trigger update_venues_updated_at
  before update on venues
  for each row
  execute function update_updated_at_column();