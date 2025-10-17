-- Matches table: Partner-created matches and games
-- Only partners and developers can create matches

create table if not exists matches (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references partners(id) on delete cascade,
  venue_id uuid not null references venues(id) on delete cascade,
  court_id uuid references courts(id) on delete set null,
  
  -- Match details
  title text not null,
  description text,
  sport text not null check (sport in ('tennis', 'pickleball', 'squash', 'racquetball', 'badminton', 'table_tennis')),
  
  -- Scheduling
  scheduled_date date not null,
  start_time time not null,
  end_time time not null,
  timezone text default 'UTC',
  
  -- Match configuration
  match_type text not null check (match_type in ('singles', 'doubles', 'mixed_doubles', 'tournament', 'lesson', 'clinic')),
  skill_level text check (skill_level in ('beginner', 'intermediate', 'advanced', 'open')),
  access_type text not null default 'reserve' check (access_type in ('open', 'reserve')),
  
  -- Participation
  max_players integer not null default 4,
  current_players integer default 0,
  registration_deadline timestamp with time zone,
  
  -- Pricing
  entry_fee decimal(8, 2) default 0,
  court_fee_included boolean default true,
  equipment_provided boolean default false,
  
  -- Match status
  status text default 'scheduled' check (status in ('scheduled', 'in_progress', 'completed', 'cancelled', 'postponed')),
  
  -- Results (filled after match completion)
  winner_ids uuid[],
  final_score text,
  match_notes text,
  
  -- Timestamps
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  
  -- Constraints
  constraint matches_time_valid check (end_time > start_time),
  constraint matches_players_positive check (max_players > 0 and current_players >= 0),
  constraint matches_current_not_exceed_max check (current_players <= max_players),
  constraint matches_entry_fee_positive check (entry_fee >= 0),
  constraint matches_future_date check (
    scheduled_date >= current_date or 
    (scheduled_date = current_date and start_time >= current_time)
  )
);

-- Match participants junction table
create table if not exists match_participants (
  id uuid primary key default gen_random_uuid(),
  match_id uuid not null references matches(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  
  -- Participation details
  joined_at timestamp with time zone default now(),
  status text default 'registered' check (status in ('registered', 'confirmed', 'no_show', 'cancelled')),
  payment_status text default 'pending' check (payment_status in ('pending', 'paid', 'refunded', 'waived')),
  
  -- Performance tracking
  rating_before decimal(3, 1),
  rating_after decimal(3, 1),
  
  -- Constraints
  unique(match_id, user_id)
);

-- Indexes for performance
create index if not exists idx_matches_partner_id on matches(partner_id);
create index if not exists idx_matches_venue_id on matches(venue_id);
create index if not exists idx_matches_court_id on matches(court_id);
create index if not exists idx_matches_date on matches(scheduled_date);
create index if not exists idx_matches_sport on matches(sport);
create index if not exists idx_matches_status on matches(status);

create index if not exists idx_match_participants_match_id on match_participants(match_id);
create index if not exists idx_match_participants_user_id on match_participants(user_id);

-- Add missing columns to existing matches table
DO $$
BEGIN
    -- Add access_type column if it doesn't exist
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'matches' AND column_name = 'access_type') THEN
        ALTER TABLE matches ADD COLUMN access_type text NOT NULL DEFAULT 'reserve' CHECK (access_type IN ('open', 'reserve'));
    END IF;
END $$;

-- Triggers
create trigger update_matches_updated_at
  before update on matches
  for each row
  execute function update_updated_at_column();

-- =====================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- Enable RLS on matches table
alter table matches enable row level security;

-- Enable RLS on match_participants table
alter table match_participants enable row level security;

-- =====================================================
-- MATCHES TABLE POLICIES
-- =====================================================

-- Drop existing policies if they exist
drop policy if exists "Anyone can view matches" on matches;
drop policy if exists "Partners can create matches" on matches;
drop policy if exists "Partners can update own matches" on matches;
drop policy if exists "Partners can delete own matches" on matches;

-- Policy: Anyone (including anonymous) can view matches
create policy "Anyone can view matches"
  on matches
  for select
  using (true);

-- Policy: Only authenticated partners can create matches
create policy "Partners can create matches"
  on matches
  for insert
  with check (
    auth.role() = 'authenticated' 
    and exists (
      select 1 from partners p 
      where p.id = partner_id 
      and p.user_id = auth.uid()
    )
  );

-- Policy: Partners can update their own matches
create policy "Partners can update own matches"
  on matches
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

-- Policy: Partners can delete their own matches
create policy "Partners can delete own matches"
  on matches
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
-- MATCH_PARTICIPANTS TABLE POLICIES
-- =====================================================

-- Drop existing policies if they exist
drop policy if exists "Anyone can view match participants" on match_participants;
drop policy if exists "Authenticated users can join matches" on match_participants;
drop policy if exists "Users can manage own participation" on match_participants;
drop policy if exists "Partners can manage participants in own matches" on match_participants;

-- Policy: Anyone can view match participants
create policy "Anyone can view match participants"
  on match_participants
  for select
  using (true);

-- Policy: Authenticated users can join matches
create policy "Authenticated users can join matches"
  on match_participants
  for insert
  with check (
    auth.role() = 'authenticated' 
    and auth.uid() = user_id
  );

-- Policy: Users can manage their own participation (update/delete)
create policy "Users can manage own participation"
  on match_participants
  for all
  using (
    auth.role() = 'authenticated' 
    and auth.uid() = user_id
  )
  with check (
    auth.role() = 'authenticated' 
    and auth.uid() = user_id
  );

-- Policy: Partners can manage participants in their own matches
create policy "Partners can manage participants in own matches"
  on match_participants
  for all
  using (
    auth.role() = 'authenticated' 
    and exists (
      select 1 from matches m
      join partners p on p.id = m.partner_id
      where m.id = match_id 
      and p.user_id = auth.uid()
    )
  )
  with check (
    auth.role() = 'authenticated' 
    and exists (
      select 1 from matches m
      join partners p on p.id = m.partner_id
      where m.id = match_id 
      and p.user_id = auth.uid()
    )
  );

-- =====================================================
-- COMMENTS
-- =====================================================

comment on table matches is 'Stores match information - viewable by all, manageable only by owning partners';
comment on table match_participants is 'Stores match participation - viewable by all, users can manage own participation, partners can manage participants in their matches';
comment on policy "Anyone can view matches" on matches is 'Allows anonymous and authenticated users to view all matches';
comment on policy "Partners can create matches" on matches is 'Only authenticated partners can create matches for their venues';
comment on policy "Partners can update own matches" on matches is 'Partners can only update matches they created';
comment on policy "Partners can delete own matches" on matches is 'Partners can only delete matches they created';