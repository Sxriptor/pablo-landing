// Core partner dashboard types

export interface Partner {
  id: string
  company_name: string
  email: string
  phone?: string
  address?: string
  logo_url?: string
  website?: string
  description?: string
  status: 'pending' | 'approved' | 'rejected' | 'suspended'
  user_id: string
  created_at: string
  updated_at: string
}

export interface Venue {
  id: string
  partner_id: string
  name: string
  address: string
  city: string
  state?: string
  postal_code?: string
  country: string
  phone?: string
  email?: string
  website?: string
  description?: string
  image_url?: string
  gallery_urls?: string[]
  operating_hours?: Record<string, { open: string; close: string }>
  amenities?: string[]
  latitude?: number
  longitude?: number
  active: boolean
  created_at: string
  updated_at: string
}

export interface Court {
  id: string
  venue_id: string
  name: string
  sport_type: 'tennis' | 'pickleball' | 'squash' | 'racquetball' | 'badminton' | 'table_tennis'
  surface_type?: 'hard' | 'clay' | 'grass' | 'indoor_hard' | 'synthetic' | 'wood'
  indoor: boolean
  lighting: boolean
  net_provided: boolean
  equipment_rental: boolean
  available: boolean
  hourly_rate?: number
  peak_rate?: number
  available_hours?: Record<string, Array<{ start: string; end: string }>>
  advance_booking_days: number
  min_booking_duration: number
  max_booking_duration: number
  length_meters?: number
  width_meters?: number
  height_meters?: number
  maintenance_mode: boolean
  created_at: string
  updated_at: string
}

export interface Match {
  id: string
  partner_id: string
  venue_id: string
  court_id?: string
  title: string
  description?: string
  sport: string
  scheduled_date: string
  start_time: string
  end_time: string
  timezone: string
  match_type: 'singles' | 'doubles' | 'mixed_doubles' | 'tournament' | 'lesson' | 'clinic'
  skill_level?: 'beginner' | 'intermediate' | 'advanced' | 'open'
  max_players: number
  current_players: number
  registration_deadline?: string
  entry_fee: number
  court_fee_included: boolean
  equipment_provided: boolean
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled' | 'postponed'
  winner_ids?: string[]
  final_score?: string
  match_notes?: string
  created_at: string
  updated_at: string
}

export interface Event {
  id: string
  partner_id: string
  venue_id: string
  name: string
  description?: string
  event_type: 'lesson' | 'clinic' | 'tournament' | 'social' | 'camp' | 'workshop'
  sport: string
  instructor_name?: string
  instructor_bio?: string
  instructor_credentials?: string
  start_date: string
  end_date: string
  start_time: string
  end_time: string
  timezone: string
  is_recurring: boolean
  recurrence_pattern?: string
  recurrence_end_date?: string
  capacity: number
  current_registrations: number
  price: number
  early_bird_price?: number
  early_bird_deadline?: string
  registration_opens: string
  registration_closes?: string
  waitlist_enabled: boolean
  skill_level?: 'beginner' | 'intermediate' | 'advanced' | 'all_levels'
  age_group?: 'kids' | 'teens' | 'adults' | 'seniors' | 'all_ages'
  equipment_provided: boolean
  equipment_required?: string
  image_url?: string
  additional_images?: string[]
  status: 'scheduled' | 'in_progress' | 'completed' | 'cancelled' | 'postponed'
  cancellation_reason?: string
  created_at: string
  updated_at: string
}

export interface DashboardStats {
  totalVenues: number
  totalCourts: number
  totalMatches: number
  totalEvents: number
  activeMatches: number
  upcomingEvents: number
  monthlyRevenue: number
  totalParticipants: number
}

export interface ChartData {
  name: string
  value: number
  date?: string
}