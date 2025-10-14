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

-- Triggers
create trigger update_matches_updated_at
  before update on matches
  for each row
  execute function update_updated_at_column();