-- Row Level Security (RLS) Policies
-- Ensures partners can only access and modify their own data

-- Enable RLS on all partner-related tables
alter table partners enable row level security;
alter table partner_applications enable row level security;
alter table venues enable row level security;
alter table courts enable row level security;
alter table matches enable row level security;
alter table match_participants enable row level security;
alter table events enable row level security;
alter table event_registrations enable row level security;

-- Partners table policies
create policy "Partners can view their own profile"
  on partners for select
  using (auth.uid() = user_id);

create policy "Partners can update their own profile"
  on partners for update
  using (auth.uid() = user_id);

-- Partner applications policies (for admin review)
create policy "Users can view their own applications"
  on partner_applications for select
  using (true); -- Applications can be viewed by anyone for now

create policy "Users can create applications"
  on partner_applications for insert
  with check (true);

-- Venues table policies
create policy "Partners can manage their own venues"
  on venues for all
  using (partner_id in (
    select id from partners 
    where user_id = auth.uid() and status = 'approved'
  ));

create policy "Public can view active venues"
  on venues for select
  using (active = true);

-- Courts table policies
create policy "Partners can manage courts in their venues"
  on courts for all
  using (venue_id in (
    select v.id from venues v
    join partners p on v.partner_id = p.id
    where p.user_id = auth.uid() and p.status = 'approved'
  ));

create policy "Public can view available courts"
  on courts for select
  using (available = true and not maintenance_mode);

-- Matches table policies
create policy "Partners can manage their own matches"
  on matches for all
  using (partner_id in (
    select id from partners 
    where user_id = auth.uid() and status = 'approved'
  ));

create policy "Users can view public matches"
  on matches for select
  using (status in ('scheduled', 'in_progress'));

-- Match participants policies
create policy "Users can view match participants"
  on match_participants for select
  using (true);

create policy "Users can join matches"
  on match_participants for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own participation"
  on match_participants for update
  using (auth.uid() = user_id);

-- Events table policies
create policy "Partners can manage their own events"
  on events for all
  using (partner_id in (
    select id from partners 
    where user_id = auth.uid() and status = 'approved'
  ));

create policy "Users can view public events"
  on events for select
  using (status in ('scheduled', 'in_progress'));

-- Event registrations policies
create policy "Users can view event registrations"
  on event_registrations for select
  using (true);

create policy "Users can register for events"
  on event_registrations for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own registrations"
  on event_registrations for update
  using (auth.uid() = user_id);

-- Additional policies for partner dashboard analytics
create policy "Partners can view their venue analytics"
  on venues for select
  using (partner_id in (
    select id from partners 
    where user_id = auth.uid() and status = 'approved'
  ));

-- Function to check if user is an approved partner
create or replace function is_approved_partner()
returns boolean as $$
begin
  return exists (
    select 1 from partners 
    where user_id = auth.uid() 
    and status = 'approved'
  );
end;
$$ language plpgsql security definer;

-- Function to get partner_id for current user
create or replace function get_current_partner_id()
returns uuid as $$
begin
  return (
    select id from partners 
    where user_id = auth.uid() 
    and status = 'approved'
    limit 1
  );
end;
$$ language plpgsql security definer;