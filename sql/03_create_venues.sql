-- Venues table: Physical locations managed by partners
-- Each partner can have multiple venues

-- First ensure partners table exists
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

-- Create partners indexes if they don't exist
create index if not exists idx_partners_user_id on partners(user_id);
create index if not exists idx_partners_status on partners(status);
create index if not exists idx_partners_email on partners(email);

-- Now create venues table
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
--
 =====================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- Enable RLS on partners table
alter table partners enable row level security;

-- Enable RLS on venues table
alter table venues enable row level security;

-- =====================================================
-- PARTNERS TABLE POLICIES
-- =====================================================

-- Drop existing policies if they exist
drop policy if exists "Partners can view own record" on partners;
drop policy if exists "Partners can update own record" on partners;
drop policy if exists "Service role has full access to partners" on partners;

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

-- Policy: Partners can insert their own record
create policy "Partners can insert own record"
  on partners
  for insert
  with check (auth.uid() = user_id);

-- Policy: Service role has full access (for admin operations)
create policy "Service role has full access to partners"
  on partners
  for all
  using (auth.jwt() ->> 'role' = 'service_role');

-- =====================================================
-- VENUES TABLE POLICIES
-- =====================================================

-- Drop existing policies if they exist
drop policy if exists "Anyone can view venues" on venues;
drop policy if exists "Partners can manage own venues" on venues;

-- Policy: Anyone (including anonymous) can view venues
create policy "Anyone can view venues"
  on venues
  for select
  using (true);

-- Policy: Only authenticated partners can create venues for themselves
create policy "Partners can create own venues"
  on venues
  for insert
  with check (
    auth.role() = 'authenticated' 
    and exists (
      select 1 from partners p 
      where p.id = partner_id 
      and p.user_id = auth.uid()
    )
  );

-- Policy: Partners can update their own venues
create policy "Partners can update own venues"
  on venues
  for update
  using (
    auth.role() = 'authenticated' 
    and exists (
      select 1 from partners p 
      where p.id = partner_id 
      and p.user_id = auth.uid()
    )
  )
  with check (
    auth.role() = 'authenticated' 
    and exists (
      select 1 from partners p 
      where p.id = partner_id 
      and p.user_id = auth.uid()
    )
  );

-- Policy: Partners can delete their own venues
create policy "Partners can delete own venues"
  on venues
  for delete
  using (
    auth.role() = 'authenticated' 
    and exists (
      select 1 from partners p 
      where p.id = partner_id 
      and p.user_id = auth.uid()
    )
  );

-- =====================================================
-- COMMENTS
-- =====================================================

comment on table partners is 'Stores partner company information with RLS enabled';
comment on table venues is 'Stores venue information - viewable by all, manageable only by owning partners';
comment on policy "Anyone can view venues" on venues is 'Allows anonymous and authenticated users to view all venues';
comment on policy "Partners can create own venues" on venues is 'Only authenticated partners can create venues for their own company';
comment on policy "Partners can update own venues" on venues is 'Partners can only update venues they own';
comment on policy "Partners can delete own venues" on venues is 'Partners can only delete venues they own';
-
- =====================================================
-- STORAGE BUCKET FOR VENUE IMAGES
-- =====================================================

-- Create storage bucket for venue images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('venue-images', 'venue-images', true, 10485760, ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/webp'])
ON CONFLICT (id) DO NOTHING;

-- Storage policies for venue images
DROP POLICY IF EXISTS "Venue images are publicly accessible" ON storage.objects;
CREATE POLICY "Venue images are publicly accessible"
    ON storage.objects FOR SELECT
    USING (bucket_id = 'venue-images');

DROP POLICY IF EXISTS "Partners can upload venue images" ON storage.objects;
CREATE POLICY "Partners can upload venue images"
    ON storage.objects FOR INSERT
    WITH CHECK (
        bucket_id = 'venue-images' AND
        auth.role() = 'authenticated' AND
        EXISTS (
            SELECT 1 FROM partners p 
            WHERE p.user_id = auth.uid()
        )
    );

DROP POLICY IF EXISTS "Partners can update venue images" ON storage.objects;
CREATE POLICY "Partners can update venue images"
    ON storage.objects FOR UPDATE
    USING (
        bucket_id = 'venue-images' AND
        auth.role() = 'authenticated' AND
        EXISTS (
            SELECT 1 FROM partners p 
            WHERE p.user_id = auth.uid()
        )
    );

DROP POLICY IF EXISTS "Partners can delete venue images" ON storage.objects;
CREATE POLICY "Partners can delete venue images"
    ON storage.objects FOR DELETE
    USING (
        bucket_id = 'venue-images' AND
        auth.role() = 'authenticated' AND
        EXISTS (
            SELECT 1 FROM partners p 
            WHERE p.user_id = auth.uid()
        )
    );