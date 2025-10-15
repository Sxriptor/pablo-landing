'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  MapPin, 
  Trophy, 
  Calendar, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Activity,
  Bell,
  Search,
  Settings,
  LogOut,
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
  Plus,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal
} from 'lucide-react'

export default function PartnerDemoPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [currentPage, setCurrentPage] = useState('dashboard')
  const [selectedVenue, setSelectedVenue] = useState<any>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [selectedCourt, setSelectedCourt] = useState<any>(null)
  const [isEditingCourt, setIsEditingCourt] = useState(false)
  const [showAddCourtModal, setShowAddCourtModal] = useState(false)
  const [showAddVenueModal, setShowAddVenueModal] = useState(false)
  const [showAddMatchModal, setShowAddMatchModal] = useState(false)
  const [selectedMatch, setSelectedMatch] = useState<any>(null)
  const [isEditingMatch, setIsEditingMatch] = useState(false)
  const [showAddEventModal, setShowAddEventModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<any>(null)
  const [isEditingEvent, setIsEditingEvent] = useState(false)
  const [showAddClassModal, setShowAddClassModal] = useState(false)
  const [classes, setClasses] = useState([
    {
      id: 1,
      title: 'Beginner Tennis Fundamentals',
      description: 'Learn the basics of tennis including proper grip, stance, and basic strokes.',
      instructor: 'Sarah Johnson',
      date: '2024-12-15',
      time: '10:00',
      duration: 90,
      capacity: 8,
      enrolled: 6,
      price: 45,
      venue: 'Downtown Tennis Center',
      court: 'Court 1',
      status: 'upcoming',
      skill_level: 'beginner',
      sport: 'Tennis'
    },
    {
      id: 2,
      title: 'Advanced Pickleball Strategy',
      description: 'Master advanced techniques and strategic play for competitive pickleball.',
      instructor: 'Mike Chen',
      date: '2024-12-16',
      time: '14:00',
      duration: 120,
      capacity: 6,
      enrolled: 4,
      price: 60,
      venue: 'Riverside Courts',
      court: 'Court 3',
      status: 'upcoming',
      skill_level: 'advanced',
      sport: 'Pickleball'
    },
    {
      id: 3,
      title: 'Youth Tennis Camp',
      description: 'Fun and engaging tennis lessons for kids aged 8-14.',
      instructor: 'Emma Davis',
      date: '2024-12-14',
      time: '09:00',
      duration: 60,
      capacity: 12,
      enrolled: 12,
      price: 30,
      venue: 'Community Sports Center',
      court: 'Court 2',
      status: 'completed',
      skill_level: 'all',
      sport: 'Tennis'
    },
    {
      id: 4,
      title: 'Squash Fitness Bootcamp',
      description: 'High-intensity squash training focused on fitness and conditioning.',
      instructor: 'David Wilson',
      date: '2024-12-17',
      time: '18:00',
      duration: 75,
      capacity: 10,
      enrolled: 8,
      price: 50,
      venue: 'Elite Squash Club',
      court: 'Court 1',
      status: 'upcoming',
      skill_level: 'intermediate',
      sport: 'Squash'
    },
    {
      id: 5,
      title: 'Mixed Doubles Strategy',
      description: 'Learn effective strategies and communication for mixed doubles play.',
      instructor: 'Lisa & Tom Rodriguez',
      date: '2024-12-18',
      time: '16:00',
      duration: 90,
      capacity: 8,
      enrolled: 2,
      price: 55,
      venue: 'Premier Tennis Academy',
      court: 'Court 4',
      status: 'upcoming',
      skill_level: 'intermediate',
      sport: 'Tennis'
    }
  ])
  
  const [settingsActiveTab, setSettingsActiveTab] = useState('company')
  const [settingsIsEditing, setSettingsIsEditing] = useState(false)
  const [partnerSettings, setPartnerSettings] = useState({
    // Company Information
    company_name: 'Elite Tennis Club',
    email: 'admin@elitetennisclub.com',
    phone: '(212) 555-0123',
    website: 'https://elitetennisclub.com',
    description: 'Premier tennis facility offering world-class courts and professional instruction for players of all levels.',
    
    // Address
    address: '123 Elite Boulevard',
    city: 'New York',
    state: 'NY',
    zip_code: '10001',
    country: 'United States',
    
    // Business Settings
    business_hours: {
      monday: { open: '06:00', close: '22:00', closed: false },
      tuesday: { open: '06:00', close: '22:00', closed: false },
      wednesday: { open: '06:00', close: '22:00', closed: false },
      thursday: { open: '06:00', close: '22:00', closed: false },
      friday: { open: '06:00', close: '22:00', closed: false },
      saturday: { open: '07:00', close: '21:00', closed: false },
      sunday: { open: '08:00', close: '20:00', closed: false }
    },
    
    // Notification Preferences
    notifications: {
      email_bookings: true,
      email_cancellations: true,
      email_payments: true,
      email_reviews: true,
      sms_bookings: false,
      sms_cancellations: true,
      sms_payments: false,
      push_notifications: true
    },
    
    // Payment Settings
    payment_settings: {
      stripe_connected: true,
      auto_payout: true,
      payout_schedule: 'weekly',
      currency: 'USD',
      tax_rate: 8.25
    },
    
    // Booking Settings
    booking_settings: {
      advance_booking_days: 30,
      cancellation_hours: 24,
      auto_confirm: true,
      require_payment: true,
      allow_waitlist: true,
      max_players_per_booking: 4,
      minimum_booking_duration: 60,
      maximum_booking_duration: 180,
      allow_back_to_back: true,
      buffer_time_minutes: 15,
      allow_same_day_booking: true,
      require_phone_verification: false
    },
    
    // Pricing Settings
    pricing_settings: {
      peak_hours_start: '17:00',
      peak_hours_end: '21:00',
      weekend_premium: 20,
      holiday_premium: 30,
      member_discount: 15,
      group_discount_threshold: 4,
      group_discount_percentage: 10,
      seasonal_pricing: false,
      dynamic_pricing: false,
      late_cancellation_fee: 25,
      no_show_fee: 50
    },
    
    // Staff Management
    staff_settings: {
      allow_staff_booking: true,
      staff_discount: 50,
      require_manager_approval: false,
      staff_can_override_rules: false,
      staff_access_hours: 'business_hours',
      emergency_contact: '(212) 555-0199'
    },
    
    // Integration Settings
    integrations: {
      google_calendar: false,
      outlook_calendar: false,
      quickbooks: false,
      mailchimp: false,
      zapier: false,
      slack_notifications: false,
      website_widget: true,
      api_access: false
    },
    
    // Customer Management
    customer_settings: {
      require_membership: false,
      allow_guest_booking: true,
      require_waiver: true,
      waiver_renewal_days: 365,
      loyalty_program: true,
      referral_program: true,
      review_reminders: true,
      birthday_promotions: true
    },
    
    // Facility Settings
    facility_settings: {
      equipment_rental: true,
      locker_rental: true,
      pro_shop: false,
      food_beverage: false,
      parking_available: true,
      wifi_available: true,
      air_conditioning: true,
      shower_facilities: true,
      accessibility_compliant: true
    }
  })
  
  const [tempSettings, setTempSettings] = useState(partnerSettings)

  // Update tempSettings when partnerSettings changes
  React.useEffect(() => {
    setTempSettings(partnerSettings)
  }, [partnerSettings])
  const [newCourt, setNewCourt] = useState({
    name: '',
    venue_id: '',
    sport_type: 'tennis',
    surface_type: 'hard',
    indoor: false,
    lighting: true,
    net_provided: true,
    equipment_rental: false,
    hourly_rate: 40,
    peak_rate: 55,
    length_meters: 23.77,
    width_meters: 10.97,
    height_meters: ''
  })
  const [newMatch, setNewMatch] = useState({
    title: '',
    description: '',
    sport: 'tennis',
    scheduled_date: '',
    start_time: '',
    end_time: '',
    venue_id: '',
    court_id: '',
    match_type: 'singles',
    skill_level: 'intermediate',
    max_players: 4,
    entry_fee: 0,
    registration_deadline: '',
    court_fee_included: true,
    equipment_provided: false,
    prize_pool: 0
  })

  const mockEvents = [
    {
      id: 1,
      name: 'Tennis Fundamentals Workshop',
      description: 'Learn the basics of tennis including proper grip, stance, and swing techniques',
      event_type: 'workshop',
      sport: 'tennis',
      instructor_name: 'Sarah Johnson',
      instructor_bio: 'Former professional tennis player with 15 years of coaching experience',
      instructor_credentials: 'USPTA Certified Professional, Former WTA Player',
      start_date: '2024-12-21',
      end_date: '2024-12-21',
      start_time: '10:00',
      end_time: '12:00',
      timezone: 'EST',
      is_recurring: false,
      capacity: 12,
      current_registrations: 8,
      price: 75,
      early_bird_price: 65,
      early_bird_deadline: '2024-12-19T23:59',
      registration_opens: '2024-11-01T00:00',
      registration_closes: '2024-12-20T18:00',
      waitlist_enabled: true,
      skill_level: 'beginner',
      age_group: 'adults',
      equipment_provided: true,
      equipment_required: 'Tennis shoes, comfortable athletic wear',
      venue_name: 'Downtown Tennis Center',
      venue_id: 1,
      image_url: '/tennis-workshop.jpg',
      status: 'scheduled',
      created_at: '2024-11-01'
    },
    {
      id: 2,
      name: 'Advanced Pickleball Clinic',
      description: 'Master advanced pickleball strategies, shot placement, and competitive play techniques',
      event_type: 'clinic',
      sport: 'pickleball',
      instructor_name: 'Mike Rodriguez',
      instructor_bio: 'National pickleball champion and certified instructor',
      instructor_credentials: 'USAPA Certified Instructor, 3x National Champion',
      start_date: '2024-12-23',
      end_date: '2024-12-23',
      start_time: '14:00',
      end_time: '16:30',
      timezone: 'EST',
      is_recurring: false,
      capacity: 16,
      current_registrations: 14,
      price: 95,
      early_bird_price: null,
      early_bird_deadline: null,
      registration_opens: '2024-11-15T00:00',
      registration_closes: '2024-12-22T12:00',
      waitlist_enabled: true,
      skill_level: 'advanced',
      age_group: 'adults',
      equipment_provided: false,
      equipment_required: 'Pickleball paddle, indoor court shoes',
      venue_name: 'Riverside Courts',
      venue_id: 2,
      image_url: '/pickleball-clinic.jpg',
      status: 'scheduled',
      created_at: '2024-11-15'
    },
    {
      id: 3,
      name: 'Junior Tennis Summer Camp',
      description: 'Week-long tennis camp for kids featuring skill development, games, and fun activities',
      event_type: 'camp',
      sport: 'tennis',
      instructor_name: 'Coach Emma Wilson',
      instructor_bio: 'Youth tennis specialist with expertise in child development through sports',
      instructor_credentials: 'PTR Certified Youth Instructor, Child Development Specialist',
      start_date: '2024-12-26',
      end_date: '2024-12-30',
      start_time: '09:00',
      end_time: '15:00',
      timezone: 'EST',
      is_recurring: false,
      capacity: 20,
      current_registrations: 18,
      price: 350,
      early_bird_price: 300,
      early_bird_deadline: '2024-12-01T23:59',
      registration_opens: '2024-10-01T00:00',
      registration_closes: '2024-12-20T17:00',
      waitlist_enabled: true,
      skill_level: 'all_levels',
      age_group: 'kids',
      equipment_provided: true,
      equipment_required: 'Lunch, water bottle, sunscreen',
      venue_name: 'Elite Training Facility',
      venue_id: 3,
      image_url: '/tennis-camp.jpg',
      status: 'scheduled',
      created_at: '2024-10-01'
    },
    {
      id: 4,
      name: 'Monthly Tennis Social',
      description: 'Casual tennis social for players of all levels. Meet new players and enjoy friendly games',
      event_type: 'social',
      sport: 'tennis',
      instructor_name: null,
      instructor_bio: null,
      instructor_credentials: null,
      start_date: '2024-12-28',
      end_date: '2024-12-28',
      start_time: '18:00',
      end_time: '21:00',
      timezone: 'EST',
      is_recurring: true,
      recurrence_pattern: 'monthly',
      recurrence_end_date: '2025-06-28',
      capacity: 24,
      current_registrations: 16,
      price: 25,
      early_bird_price: null,
      early_bird_deadline: null,
      registration_opens: '2024-12-01T00:00',
      registration_closes: '2024-12-28T15:00',
      waitlist_enabled: false,
      skill_level: 'all_levels',
      age_group: 'adults',
      equipment_provided: false,
      equipment_required: 'Tennis racquet, tennis balls',
      venue_name: 'Central Park Tennis Club',
      venue_id: 4,
      image_url: '/tennis-social.jpg',
      status: 'scheduled',
      created_at: '2024-11-20'
    },
    {
      id: 5,
      name: 'Squash Tournament - Winter Championship',
      description: 'Annual winter squash tournament featuring multiple divisions and skill levels',
      event_type: 'tournament',
      sport: 'squash',
      instructor_name: 'Tournament Director: Alex Chen',
      instructor_bio: 'Professional squash player and tournament organizer',
      instructor_credentials: 'PSA Professional, Tournament Director Certification',
      start_date: '2025-01-05',
      end_date: '2025-01-07',
      start_time: '08:00',
      end_time: '18:00',
      timezone: 'EST',
      is_recurring: false,
      capacity: 32,
      current_registrations: 28,
      price: 125,
      early_bird_price: 100,
      early_bird_deadline: '2024-12-15T23:59',
      registration_opens: '2024-11-01T00:00',
      registration_closes: '2025-01-03T17:00',
      waitlist_enabled: true,
      skill_level: 'intermediate',
      age_group: 'adults',
      equipment_provided: false,
      equipment_required: 'Squash racquet, eye protection, non-marking shoes',
      venue_name: 'Central Park Tennis Club',
      venue_id: 4,
      image_url: '/squash-tournament.jpg',
      status: 'scheduled',
      created_at: '2024-11-01'
    },
    {
      id: 6,
      name: 'Ladies Tennis Lesson Series',
      description: 'Weekly tennis lessons designed specifically for women looking to improve their game',
      event_type: 'lesson',
      sport: 'tennis',
      instructor_name: 'Maria Santos',
      instructor_bio: 'Former collegiate tennis player specializing in women\'s tennis instruction',
      instructor_credentials: 'USPTA Certified, Former Division I Player',
      start_date: '2024-12-16',
      end_date: '2024-12-16',
      start_time: '11:00',
      end_time: '12:30',
      timezone: 'EST',
      is_recurring: true,
      recurrence_pattern: 'weekly',
      recurrence_end_date: '2025-03-17',
      capacity: 8,
      current_registrations: 6,
      price: 45,
      early_bird_price: null,
      early_bird_deadline: null,
      registration_opens: '2024-11-01T00:00',
      registration_closes: null,
      waitlist_enabled: true,
      skill_level: 'intermediate',
      age_group: 'adults',
      equipment_provided: false,
      equipment_required: 'Tennis racquet, water bottle',
      venue_name: 'Downtown Tennis Center',
      venue_id: 1,
      image_url: '/ladies-tennis.jpg',
      status: 'in_progress',
      created_at: '2024-11-01'
    }
  ]

  const [newEvent, setNewEvent] = useState({
    name: '',
    description: '',
    event_type: 'lesson',
    sport: 'tennis',
    instructor_name: '',
    instructor_bio: '',
    instructor_credentials: '',
    start_date: '',
    end_date: '',
    start_time: '',
    end_time: '',
    venue_id: '',
    is_recurring: false,
    recurrence_pattern: '',
    recurrence_end_date: '',
    capacity: 8,
    price: 50,
    early_bird_price: '',
    early_bird_deadline: '',
    registration_closes: '',
    skill_level: 'all_levels',
    age_group: 'adults',
    equipment_provided: false,
    equipment_required: '',
    waitlist_enabled: true
  })

  const [newClass, setNewClass] = useState({
    title: '',
    description: '',
    instructor: '',
    date: '',
    time: '',
    duration: 90,
    capacity: 8,
    price: 45,
    venue: '',
    court: '',
    skill_level: 'beginner',
    sport: 'Tennis'
  })

  // Mock data
  const mockPartner = {
    company_name: 'Elite Tennis Club',
    email: 'admin@elitetennisclub.com',
    status: 'approved'
  }

  const mockStats = {
    totalVenues: 5,
    totalCourts: 40,
    totalMatches: 45,
    totalEvents: 8,
    activeMatches: 12,
    upcomingEvents: 5,
    monthlyRevenue: 69000,
    totalParticipants: 744
  }

  const mockVenues = [
    { 
      id: 1, 
      name: 'Downtown Tennis Center', 
      city: 'New York', 
      address: '123 Main St, Manhattan, NY 10001', 
      active: true, 
      created_at: '2024-01-15',
      courts: 8,
      phone: '(212) 555-0123',
      email: 'info@downtowntennis.com',
      rating: 4.8,
      amenities: ['Parking', 'Pro Shop', 'Locker Rooms', 'Café'],
      revenue: '$12,450',
      bookings: 156
    },
    { 
      id: 2, 
      name: 'Riverside Courts', 
      city: 'Brooklyn', 
      address: '456 River Ave, Brooklyn, NY 11201', 
      active: true, 
      created_at: '2024-02-20',
      courts: 6,
      phone: '(718) 555-0456',
      email: 'contact@riversidecourts.com',
      rating: 4.6,
      amenities: ['Parking', 'Locker Rooms', 'Equipment Rental'],
      revenue: '$8,920',
      bookings: 98
    },
    { 
      id: 3, 
      name: 'Elite Training Facility', 
      city: 'Manhattan', 
      address: '789 Elite Blvd, Manhattan, NY 10022', 
      active: false, 
      created_at: '2024-03-10',
      courts: 12,
      phone: '(212) 555-0789',
      email: 'admin@elitetraining.com',
      rating: 4.9,
      amenities: ['Parking', 'Pro Shop', 'Locker Rooms', 'Café', 'Fitness Center', 'Spa'],
      revenue: '$18,750',
      bookings: 234
    },
    { 
      id: 4, 
      name: 'Central Park Tennis Club', 
      city: 'Manhattan', 
      address: '321 Park Ave, Manhattan, NY 10010', 
      active: true, 
      created_at: '2024-01-08',
      courts: 10,
      phone: '(212) 555-0321',
      email: 'info@cptennis.com',
      rating: 4.7,
      amenities: ['Valet Parking', 'Pro Shop', 'Premium Locker Rooms', 'Restaurant', 'Event Space'],
      revenue: '$22,100',
      bookings: 189
    },
    { 
      id: 5, 
      name: 'Brooklyn Heights Racquet', 
      city: 'Brooklyn', 
      address: '654 Heights St, Brooklyn, NY 11201', 
      active: true, 
      created_at: '2024-02-14',
      courts: 4,
      phone: '(718) 555-0654',
      email: 'hello@bhracquet.com',
      rating: 4.4,
      amenities: ['Street Parking', 'Locker Rooms', 'Equipment Rental'],
      revenue: '$6,780',
      bookings: 67
    }
  ]

  const mockMatches = [
    { 
      id: 1, 
      title: 'Singles Tournament', 
      description: 'Competitive singles tournament for intermediate to advanced players',
      sport: 'tennis', 
      scheduled_date: '2024-12-20', 
      start_time: '10:00', 
      end_time: '12:00', 
      current_players: 8, 
      max_players: 16, 
      entry_fee: 25, 
      status: 'scheduled',
      venue_name: 'Downtown Tennis Center',
      venue_id: 1,
      court_name: 'Center Court',
      court_id: 1,
      match_type: 'singles',
      skill_level: 'intermediate',
      registration_deadline: '2024-12-19T18:00',
      court_fee_included: true,
      equipment_provided: false,
      prize_pool: 500,
      organizer: 'Elite Tennis Club',
      created_at: '2024-11-15'
    },
    { 
      id: 2, 
      title: 'Doubles League Match', 
      description: 'Weekly doubles league - Division A championship match',
      sport: 'tennis', 
      scheduled_date: '2024-12-22', 
      start_time: '14:00', 
      end_time: '16:00', 
      current_players: 12, 
      max_players: 16, 
      entry_fee: 35, 
      status: 'scheduled',
      venue_name: 'Riverside Courts',
      venue_id: 2,
      court_name: 'Court 1',
      court_id: 2,
      match_type: 'doubles',
      skill_level: 'advanced',
      registration_deadline: '2024-12-21T12:00',
      court_fee_included: true,
      equipment_provided: true,
      prize_pool: 800,
      organizer: 'Elite Tennis Club',
      created_at: '2024-11-20'
    },
    { 
      id: 3, 
      title: 'Pro Exhibition Match', 
      description: 'Special exhibition featuring local tennis professionals',
      sport: 'tennis', 
      scheduled_date: '2024-12-18', 
      start_time: '19:00', 
      end_time: '21:00', 
      current_players: 4, 
      max_players: 4, 
      entry_fee: 0, 
      status: 'completed',
      venue_name: 'Elite Training Facility',
      venue_id: 3,
      court_name: 'Premium Court',
      court_id: 5,
      match_type: 'exhibition',
      skill_level: 'professional',
      registration_deadline: '2024-12-17T15:00',
      court_fee_included: true,
      equipment_provided: true,
      prize_pool: 0,
      organizer: 'Elite Tennis Club',
      created_at: '2024-11-01'
    },
    { 
      id: 4, 
      title: 'Pickleball Social', 
      description: 'Fun social pickleball games for all skill levels',
      sport: 'pickleball', 
      scheduled_date: '2024-12-21', 
      start_time: '16:00', 
      end_time: '18:00', 
      current_players: 6, 
      max_players: 12, 
      entry_fee: 15, 
      status: 'scheduled',
      venue_name: 'Riverside Courts',
      venue_id: 2,
      court_name: 'Pickleball Court A',
      court_id: 3,
      match_type: 'social',
      skill_level: 'beginner',
      registration_deadline: '2024-12-21T14:00',
      court_fee_included: true,
      equipment_provided: true,
      prize_pool: 0,
      organizer: 'Elite Tennis Club',
      created_at: '2024-11-25'
    },
    { 
      id: 5, 
      title: 'Junior Tennis Clinic', 
      description: 'Tennis coaching session for junior players aged 8-16',
      sport: 'tennis', 
      scheduled_date: '2024-12-23', 
      start_time: '09:00', 
      end_time: '11:00', 
      current_players: 10, 
      max_players: 12, 
      entry_fee: 40, 
      status: 'scheduled',
      venue_name: 'Central Park Tennis Club',
      venue_id: 4,
      court_name: 'Court 2',
      court_id: 2,
      match_type: 'clinic',
      skill_level: 'beginner',
      registration_deadline: '2024-12-22T17:00',
      court_fee_included: true,
      equipment_provided: true,
      prize_pool: 0,
      organizer: 'Elite Tennis Club',
      created_at: '2024-11-18'
    },
    { 
      id: 6, 
      title: 'Mixed Doubles Championship', 
      description: 'Annual mixed doubles championship - final round',
      sport: 'tennis', 
      scheduled_date: '2024-12-15', 
      start_time: '15:00', 
      end_time: '17:00', 
      current_players: 8, 
      max_players: 8, 
      entry_fee: 50, 
      status: 'completed',
      venue_name: 'Elite Training Facility',
      venue_id: 3,
      court_name: 'Center Court',
      court_id: 1,
      match_type: 'mixed_doubles',
      skill_level: 'advanced',
      registration_deadline: '2024-12-14T12:00',
      court_fee_included: true,
      equipment_provided: false,
      prize_pool: 1200,
      organizer: 'Elite Tennis Club',
      created_at: '2024-10-15'
    }
  ]

  const mockCourts = [
    {
      id: 1,
      name: 'Center Court',
      venue_name: 'Downtown Tennis Center',
      venue_id: 1,
      sport_type: 'tennis',
      surface_type: 'hard',
      indoor: false,
      lighting: true,
      net_provided: true,
      equipment_rental: true,
      available: true,
      hourly_rate: 45,
      peak_rate: 65,
      maintenance_mode: false,
      length_meters: 23.77,
      width_meters: 10.97,
      height_meters: null,
      utilization: 85,
      bookings_today: 8,
      revenue_month: 2850,
      last_maintenance: '2024-11-15',
      condition: 'excellent'
    },
    {
      id: 2,
      name: 'Court 1',
      venue_name: 'Downtown Tennis Center',
      venue_id: 1,
      sport_type: 'tennis',
      surface_type: 'hard',
      indoor: true,
      lighting: true,
      net_provided: true,
      equipment_rental: false,
      available: true,
      hourly_rate: 40,
      peak_rate: 55,
      maintenance_mode: false,
      length_meters: 23.77,
      width_meters: 10.97,
      height_meters: 7.0,
      utilization: 72,
      bookings_today: 6,
      revenue_month: 2240,
      last_maintenance: '2024-11-10',
      condition: 'good'
    },
    {
      id: 3,
      name: 'Pickleball Court A',
      venue_name: 'Riverside Courts',
      venue_id: 2,
      sport_type: 'pickleball',
      surface_type: 'synthetic',
      indoor: false,
      lighting: true,
      net_provided: true,
      equipment_rental: true,
      available: true,
      hourly_rate: 25,
      peak_rate: 35,
      maintenance_mode: false,
      length_meters: 20.12,
      width_meters: 6.10,
      height_meters: null,
      utilization: 90,
      bookings_today: 12,
      revenue_month: 1680,
      last_maintenance: '2024-11-20',
      condition: 'excellent'
    },
    {
      id: 4,
      name: 'Court 2',
      venue_name: 'Downtown Tennis Center',
      venue_id: 1,
      sport_type: 'tennis',
      surface_type: 'clay',
      indoor: false,
      lighting: true,
      net_provided: true,
      equipment_rental: true,
      available: false,
      hourly_rate: 50,
      peak_rate: 70,
      maintenance_mode: true,
      length_meters: 23.77,
      width_meters: 10.97,
      height_meters: null,
      utilization: 0,
      bookings_today: 0,
      revenue_month: 1950,
      last_maintenance: '2024-12-01',
      condition: 'maintenance'
    },
    {
      id: 5,
      name: 'Premium Court',
      venue_name: 'Elite Training Facility',
      venue_id: 3,
      sport_type: 'tennis',
      surface_type: 'hard',
      indoor: true,
      lighting: true,
      net_provided: true,
      equipment_rental: true,
      available: true,
      hourly_rate: 75,
      peak_rate: 95,
      maintenance_mode: false,
      length_meters: 23.77,
      width_meters: 10.97,
      height_meters: 8.5,
      utilization: 95,
      bookings_today: 10,
      revenue_month: 4750,
      last_maintenance: '2024-11-25',
      condition: 'excellent'
    },
    {
      id: 6,
      name: 'Squash Court 1',
      venue_name: 'Central Park Tennis Club',
      venue_id: 4,
      sport_type: 'squash',
      surface_type: 'wood',
      indoor: true,
      lighting: true,
      net_provided: false,
      equipment_rental: true,
      available: true,
      hourly_rate: 35,
      peak_rate: 50,
      maintenance_mode: false,
      length_meters: 9.75,
      width_meters: 6.40,
      height_meters: 5.64,
      utilization: 68,
      bookings_today: 5,
      revenue_month: 1890,
      last_maintenance: '2024-11-18',
      condition: 'good'
    }
  ]

  const navigation = [
    { name: 'Dashboard', href: 'dashboard', icon: LayoutDashboard },
    { name: 'Venues', href: 'venues', icon: Building2 },
    { name: 'Courts', href: 'courts', icon: MapPin },
    { name: 'Matches', href: 'matches', icon: Trophy },
    { name: 'Events', href: 'events', icon: Calendar },
    { name: 'Classes', href: 'classes', icon: Users },
    { name: 'Settings', href: 'settings', icon: Settings },
  ]

  const StatCard = ({ title, value, description, icon: Icon, trend }: any) => (
    <motion.div
      className="rounded-3xl p-6 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
        border: '1px solid rgba(59, 130, 246, 0.1)',
        backdropFilter: 'blur(20px)'
      }}
      whileHover={{ 
        y: -4,
        scale: 1.02
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full" style={{
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
        filter: 'blur(30px)'
      }} />
      
      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-400 mb-2">{title}</p>
            <p className="text-4xl font-bold text-white">{value}</p>
          </div>
          {Icon && (
            <div className="p-3 rounded-2xl" style={{
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)'
            }}>
              <Icon className="h-6 w-6 text-blue-400" />
            </div>
          )}
        </div>
        {description && <p className="text-xs text-gray-500 mb-3">{description}</p>}
        {trend && (
          <div className="flex items-center space-x-2">
            <div className={`flex items-center space-x-1 px-2.5 py-1 rounded-lg text-xs font-bold ${
              trend.isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
            }`}>
              <svg className={`w-3 h-3 ${trend.isPositive ? 'rotate-0' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span>{trend.isPositive ? '+' : ''}{trend.value}%</span>
            </div>
            <span className="text-xs text-gray-500">{trend.label}</span>
          </div>
        )}
      </div>
    </motion.div>
  )

  const TableRow = ({ data, columns, actions }: any) => (
    <tr className="hover:bg-white/5 transition-colors" style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.05)' }}>
      {columns.map((col: any, idx: number) => (
        <td key={idx} className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-300">
          {col.render ? col.render(data[col.key], data) : data[col.key]}
        </td>
      ))}
      {actions && (
        <td className="px-8 py-5 whitespace-nowrap text-right text-sm font-medium">
          <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </td>
      )}
    </tr>
  )

  const renderDashboard = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening with your venues.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Venues"
          value={mockStats.totalVenues}
          description="Active venues"
          icon={Building2}
          trend={{ value: 12, label: 'from last month', isPositive: true }}
        />
        <StatCard
          title="Total Courts"
          value={mockStats.totalCourts}
          description="Available courts"
          icon={MapPin}
          trend={{ value: 8, label: 'from last month', isPositive: true }}
        />
        <StatCard
          title="Active Matches"
          value={mockStats.activeMatches}
          description="Scheduled matches"
          icon={Trophy}
          trend={{ value: 15, label: 'from last week', isPositive: true }}
        />
        <StatCard
          title="Upcoming Events"
          value={mockStats.upcomingEvents}
          description="Events this month"
          icon={Calendar}
          trend={{ value: 5, label: 'from last month', isPositive: true }}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Participants"
          value={mockStats.totalParticipants}
          description="Across all matches"
          icon={Users}
        />
        <StatCard
          title="Monthly Revenue"
          value={`$${mockStats.monthlyRevenue.toLocaleString()}`}
          description="This month"
          icon={DollarSign}
          trend={{ value: 23, label: 'from last month', isPositive: true }}
        />
        <StatCard
          title="Court Utilization"
          value="78%"
          description="Average this month"
          icon={Activity}
          trend={{ value: 3, label: 'from last month', isPositive: true }}
        />
        <StatCard
          title="Growth Rate"
          value="12.5%"
          description="Monthly growth"
          icon={TrendingUp}
          trend={{ value: 2, label: 'from last month', isPositive: true }}
        />
      </div>

      <div className="rounded-3xl overflow-hidden" style={{
        background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
        border: '1px solid rgba(59, 130, 246, 0.1)',
        backdropFilter: 'blur(20px)'
      }}>
        <div className="px-8 py-6" style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
          <h3 className="text-xl font-bold text-white">Recent Matches</h3>
          <p className="text-sm text-gray-400 mt-1">Latest matches at your venues</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Match</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Sport</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Players</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockMatches.map((match) => (
                <TableRow
                  key={match.id}
                  data={{
                    title: match.title,
                    sport: match.sport,
                    date: new Date(match.scheduled_date).toLocaleDateString(),
                    players: `${match.current_players}/${match.max_players}`,
                    status: match.status
                  }}
                  columns={[
                    { key: 'title' },
                    { key: 'sport' },
                    { key: 'date' },
                    { key: 'players' },
                    { 
                      key: 'status', 
                      render: (value: string) => (
                        <span className={`px-4 py-2 rounded-xl text-xs font-bold uppercase ${
                          value === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                          value === 'completed' ? 'bg-green-500/20 text-green-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {value}
                        </span>
                      )
                    }
                  ]}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderVenueDetail = () => {
    if (!selectedVenue) return null

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSelectedVenue(null)}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white">{selectedVenue.name}</h1>
              <p className="text-gray-400">Venue Details & Management</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <motion.button 
              onClick={() => setIsEditing(!isEditing)}
              className={`px-6 py-3 rounded-2xl flex items-center font-bold text-sm transition-all ${
                isEditing ? 'bg-gray-600 text-white' : 'text-white'
              }`}
              style={!isEditing ? {
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)'
              } : {}}
            >
              <Edit className="h-4 w-4 mr-2" />
              {isEditing ? 'CANCEL' : 'EDIT VENUE'}
            </motion.button>
            {isEditing && (
              <motion.button 
                className="text-white px-6 py-3 rounded-2xl flex items-center font-bold text-sm"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)'
                }}
              >
                SAVE CHANGES
              </motion.button>
            )}
          </div>
        </div>

        {/* Venue Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl p-6 relative overflow-hidden" style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-lg" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              }}>
                {selectedVenue.name.split(' ').map((word: string) => word[0]).join('').slice(0, 2)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{selectedVenue.name}</h3>
                <p className="text-gray-400">{selectedVenue.courts} Courts Available</p>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < Math.floor(selectedVenue.rating) ? 'fill-current' : 'fill-gray-600'}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold">{selectedVenue.rating}</span>
              <span className="text-gray-400">({selectedVenue.bookings} reviews)</span>
            </div>
          </div>

          <div className="rounded-3xl p-6" style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-white">Revenue</h4>
              <TrendingUp className="h-6 w-6 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">{selectedVenue.revenue}</div>
            <p className="text-gray-400 text-sm">This month</p>
            <div className="mt-4 flex items-center space-x-2">
              <div className="flex items-center space-x-1 px-2 py-1 rounded-lg text-xs font-bold bg-green-500/20 text-green-400">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>+12%</span>
              </div>
              <span className="text-xs text-gray-500">from last month</span>
            </div>
          </div>

          <div className="rounded-3xl p-6" style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-white">Bookings</h4>
              <Calendar className="h-6 w-6 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{selectedVenue.bookings}</div>
            <p className="text-gray-400 text-sm">This month</p>
            <div className="mt-4">
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-1">78% capacity</p>
            </div>
          </div>
        </div>

        {/* Venue Information Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div className="rounded-3xl p-8" style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <h3 className="text-xl font-bold text-white mb-6">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Venue Name</label>
                <input
                  type="text"
                  value={selectedVenue.name}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={selectedVenue.phone}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={selectedVenue.email}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Address</label>
                <input
                  type="text"
                  value={selectedVenue.address}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Number of Courts</label>
                <input
                  type="number"
                  value={selectedVenue.courts}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Amenities & Features */}
          <div className="rounded-3xl p-8" style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <h3 className="text-xl font-bold text-white mb-6">Amenities & Features</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-3">Available Amenities</label>
                <div className="grid grid-cols-2 gap-3">
                  {['Parking', 'Pro Shop', 'Locker Rooms', 'Café', 'Fitness Center', 'Spa', 'Equipment Rental', 'Event Space'].map((amenity) => (
                    <label key={amenity} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={selectedVenue.amenities.includes(amenity)}
                        disabled={!isEditing}
                        className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2 disabled:opacity-50"
                      />
                      <span className="text-sm text-gray-300">{amenity}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Status</label>
                <select
                  value={selectedVenue.active ? 'active' : 'inactive'}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Operating Hours */}
        <div className="rounded-3xl p-8" style={{
          background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.1)',
          backdropFilter: 'blur(20px)'
        }}>
          <h3 className="text-xl font-bold text-white mb-6">Operating Hours</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <div key={day} className="space-y-2">
                <label className="block text-sm font-semibold text-gray-400">{day}</label>
                <div className="flex space-x-2">
                  <input
                    type="time"
                    defaultValue="06:00"
                    disabled={!isEditing}
                    className="flex-1 px-3 py-2 rounded-lg text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 text-sm disabled:opacity-50"
                  />
                  <input
                    type="time"
                    defaultValue="22:00"
                    disabled={!isEditing}
                    className="flex-1 px-3 py-2 rounded-lg text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 text-sm disabled:opacity-50"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const renderVenues = () => {
    if (selectedVenue) {
      return renderVenueDetail()
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Venues</h1>
            <p className="text-gray-400">Manage your venue locations and details</p>
          </div>
        <motion.button 
          onClick={() => setShowAddVenueModal(true)}
          className="text-white px-8 py-3.5 rounded-2xl flex items-center font-bold text-sm transition-all"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)'
          }}
          whileHover={{ 
            scale: 1.02, 
            y: -2,
            boxShadow: '0 12px 32px rgba(102, 126, 234, 0.5)'
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Plus className="h-5 w-5 mr-2" />
          ADD VENUE
        </motion.button>
      </div>

      <div className="rounded-3xl overflow-hidden" style={{
        background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
        border: '1px solid rgba(59, 130, 246, 0.1)',
        backdropFilter: 'blur(20px)'
      }}>
        <div className="px-8 py-6" style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
          <h3 className="text-xl font-bold text-white">Your Venues</h3>
          <p className="text-sm text-gray-400 mt-1">All venues under your management</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Venue</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Location</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Rating</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Revenue</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Amenities</th>
                <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-8 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {mockVenues.map((venue) => (
                <tr key={venue.id} className="hover:bg-white/5 transition-colors cursor-pointer" style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.05)' }} onClick={() => setSelectedVenue(venue)}>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm" style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      }}>
                        {venue.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{venue.name}</div>
                        <div className="text-xs text-gray-400">{venue.courts} courts • {venue.phone}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-300">{venue.city}</div>
                      <div className="text-xs text-gray-500">{venue.address}</div>
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="flex items-center space-x-1">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className={`w-3 h-3 ${i < Math.floor(venue.rating) ? 'fill-current' : 'fill-gray-600'}`} viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs text-gray-400 ml-1">{venue.rating}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{venue.bookings} bookings</div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-bold text-green-400">{venue.revenue}</div>
                      <div className="text-xs text-gray-500">this month</div>
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <div className="flex flex-wrap gap-1">
                      {venue.amenities.slice(0, 2).map((amenity, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-lg">
                          {amenity}
                        </span>
                      ))}
                      {venue.amenities.length > 2 && (
                        <span className="px-2 py-1 bg-gray-500/10 text-gray-400 text-xs rounded-lg">
                          +{venue.amenities.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap">
                    <span className={`px-4 py-2 rounded-xl text-xs font-bold uppercase ${
                      venue.active ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                    }`}>
                      {venue.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-8 py-6 whitespace-nowrap text-right">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

  const renderCourtDetail = () => {
    if (!selectedCourt) return null

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setSelectedCourt(null)}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-white">{selectedCourt.name}</h1>
              <p className="text-gray-400">{selectedCourt.venue_name} • Court Management</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <motion.button 
              onClick={() => setIsEditingCourt(!isEditingCourt)}
              className={`px-6 py-3 rounded-2xl flex items-center font-bold text-sm transition-all ${
                isEditingCourt ? 'bg-gray-600 text-white' : 'text-white'
              }`}
              style={!isEditingCourt ? {
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)'
              } : {}}
            >
              <Edit className="h-4 w-4 mr-2" />
              {isEditingCourt ? 'CANCEL' : 'EDIT COURT'}
            </motion.button>
            {isEditingCourt && (
              <motion.button 
                className="text-white px-6 py-3 rounded-2xl flex items-center font-bold text-sm"
                style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)'
                }}
              >
                SAVE CHANGES
              </motion.button>
            )}
          </div>
        </div>

        {/* Court Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-3xl p-6" style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-white">Utilization</h4>
              <Activity className="h-6 w-6 text-blue-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{selectedCourt.utilization}%</div>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${selectedCourt.utilization}%` }}></div>
            </div>
            <p className="text-gray-400 text-sm">This month</p>
          </div>

          <div className="rounded-3xl p-6" style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-white">Revenue</h4>
              <DollarSign className="h-6 w-6 text-green-400" />
            </div>
            <div className="text-3xl font-bold text-green-400 mb-2">${selectedCourt.revenue_month}</div>
            <p className="text-gray-400 text-sm">This month</p>
          </div>

          <div className="rounded-3xl p-6" style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-white">Today</h4>
              <Calendar className="h-6 w-6 text-purple-400" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">{selectedCourt.bookings_today}</div>
            <p className="text-gray-400 text-sm">Bookings today</p>
          </div>

          <div className="rounded-3xl p-6" style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-bold text-white">Condition</h4>
              <Settings className="h-6 w-6 text-yellow-400" />
            </div>
            <div className={`text-2xl font-bold mb-2 ${
              selectedCourt.condition === 'excellent' ? 'text-green-400' :
              selectedCourt.condition === 'good' ? 'text-blue-400' :
              selectedCourt.condition === 'maintenance' ? 'text-red-400' : 'text-gray-400'
            }`}>
              {selectedCourt.condition.charAt(0).toUpperCase() + selectedCourt.condition.slice(1)}
            </div>
            <p className="text-gray-400 text-sm">Current status</p>
          </div>
        </div>

        {/* Court Configuration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Basic Settings */}
          <div className="rounded-3xl p-8" style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <h3 className="text-xl font-bold text-white mb-6">Basic Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Court Name</label>
                <input
                  type="text"
                  value={selectedCourt.name}
                  disabled={!isEditingCourt}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Sport Type</label>
                  <select
                    value={selectedCourt.sport_type}
                    disabled={!isEditingCourt}
                    className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                  >
                    <option value="tennis">Tennis</option>
                    <option value="pickleball">Pickleball</option>
                    <option value="squash">Squash</option>
                    <option value="badminton">Badminton</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Surface Type</label>
                  <select
                    value={selectedCourt.surface_type}
                    disabled={!isEditingCourt}
                    className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                  >
                    <option value="hard">Hard Court</option>
                    <option value="clay">Clay</option>
                    <option value="grass">Grass</option>
                    <option value="synthetic">Synthetic</option>
                    <option value="wood">Wood</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Hourly Rate ($)</label>
                  <input
                    type="number"
                    value={selectedCourt.hourly_rate}
                    disabled={!isEditingCourt}
                    className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Peak Rate ($)</label>
                  <input
                    type="number"
                    value={selectedCourt.peak_rate}
                    disabled={!isEditingCourt}
                    className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Features & Amenities */}
          <div className="rounded-3xl p-8" style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            backdropFilter: 'blur(20px)'
          }}>
            <h3 className="text-xl font-bold text-white mb-6">Features & Amenities</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedCourt.indoor}
                    disabled={!isEditingCourt}
                    className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2 disabled:opacity-50"
                  />
                  <span className="text-sm text-gray-300">Indoor Court</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedCourt.lighting}
                    disabled={!isEditingCourt}
                    className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2 disabled:opacity-50"
                  />
                  <span className="text-sm text-gray-300">Lighting</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedCourt.net_provided}
                    disabled={!isEditingCourt}
                    className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2 disabled:opacity-50"
                  />
                  <span className="text-sm text-gray-300">Net Provided</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={selectedCourt.equipment_rental}
                    disabled={!isEditingCourt}
                    className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2 disabled:opacity-50"
                  />
                  <span className="text-sm text-gray-300">Equipment Rental</span>
                </label>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Status</label>
                  <select
                    value={selectedCourt.available ? 'available' : 'unavailable'}
                    disabled={!isEditingCourt}
                    className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                  >
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-400 mb-2">Maintenance</label>
                  <select
                    value={selectedCourt.maintenance_mode ? 'maintenance' : 'operational'}
                    disabled={!isEditingCourt}
                    className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                  >
                    <option value="operational">Operational</option>
                    <option value="maintenance">Maintenance Mode</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Court Dimensions */}
        <div className="rounded-3xl p-8" style={{
          background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.1)',
          backdropFilter: 'blur(20px)'
        }}>
          <h3 className="text-xl font-bold text-white mb-6">Court Dimensions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">Length (meters)</label>
              <input
                type="number"
                step="0.01"
                value={selectedCourt.length_meters}
                disabled={!isEditingCourt}
                className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">Width (meters)</label>
              <input
                type="number"
                step="0.01"
                value={selectedCourt.width_meters}
                disabled={!isEditingCourt}
                className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">Height (meters)</label>
              <input
                type="number"
                step="0.01"
                value={selectedCourt.height_meters || ''}
                placeholder="N/A for outdoor"
                disabled={!isEditingCourt}
                className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderCourts = () => {
    if (selectedCourt) {
      return renderCourtDetail()
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Courts</h1>
            <p className="text-gray-400">Manage courts across all your venues</p>
          </div>
          <motion.button 
            onClick={() => setShowAddCourtModal(true)}
            className="text-white px-8 py-3.5 rounded-2xl flex items-center font-bold text-sm transition-all"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)'
            }}
            whileHover={{ 
              scale: 1.02, 
              y: -2,
              boxShadow: '0 12px 32px rgba(102, 126, 234, 0.5)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="h-5 w-5 mr-2" />
            ADD COURT
          </motion.button>
        </div>

        {/* Court Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Courts"
            value={mockCourts.length}
            description="Across all venues"
            icon={MapPin}
            trend={{ value: 8, label: 'from last month', isPositive: true }}
          />
          <StatCard
            title="Available Courts"
            value={mockCourts.filter(c => c.available && !c.maintenance_mode).length}
            description="Ready for booking"
            icon={Activity}
          />
          <StatCard
            title="Average Utilization"
            value="78%"
            description="This month"
            icon={TrendingUp}
            trend={{ value: 5, label: 'from last month', isPositive: true }}
          />
          <StatCard
            title="Monthly Revenue"
            value={`$${mockCourts.reduce((sum, court) => sum + court.revenue_month, 0).toLocaleString()}`}
            description="All courts combined"
            icon={DollarSign}
            trend={{ value: 12, label: 'from last month', isPositive: true }}
          />
        </div>

        {/* Courts Table */}
        <div className="rounded-3xl overflow-hidden" style={{
          background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.1)',
          backdropFilter: 'blur(20px)'
        }}>
          <div className="px-8 py-6" style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
            <h3 className="text-xl font-bold text-white">All Courts</h3>
            <p className="text-sm text-gray-400 mt-1">Manage courts across all your venues</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Court</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Venue</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Sport</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Rate</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Utilization</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Revenue</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-8 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockCourts.map((court) => (
                  <tr key={court.id} className="hover:bg-white/5 transition-colors cursor-pointer" style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.05)' }} onClick={() => setSelectedCourt(court)}>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm" style={{
                          background: court.sport_type === 'tennis' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' :
                                    court.sport_type === 'pickleball' ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' :
                                    court.sport_type === 'squash' ? 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' :
                                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        }}>
                          {court.sport_type === 'tennis' ? 'T' : 
                           court.sport_type === 'pickleball' ? 'P' :
                           court.sport_type === 'squash' ? 'S' : 'C'}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{court.name}</div>
                          <div className="text-xs text-gray-400">{court.surface_type} • {court.indoor ? 'Indoor' : 'Outdoor'}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-300">{court.venue_name}</div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase ${
                        court.sport_type === 'tennis' ? 'bg-green-500/20 text-green-400' :
                        court.sport_type === 'pickleball' ? 'bg-orange-500/20 text-orange-400' :
                        court.sport_type === 'squash' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {court.sport_type}
                      </span>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-bold text-white">${court.hourly_rate}/hr</div>
                        <div className="text-xs text-gray-400">Peak: ${court.peak_rate}/hr</div>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-700 rounded-full h-2">
                          <div className={`h-2 rounded-full ${
                            court.utilization >= 80 ? 'bg-green-500' :
                            court.utilization >= 60 ? 'bg-yellow-500' :
                            'bg-red-500'
                          }`} style={{ width: `${court.utilization}%` }}></div>
                        </div>
                        <span className="text-sm font-medium text-white">{court.utilization}%</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-bold text-green-400">${court.revenue_month}</div>
                        <div className="text-xs text-gray-400">this month</div>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <span className={`px-4 py-2 rounded-xl text-xs font-bold uppercase ${
                        court.maintenance_mode ? 'bg-red-500/20 text-red-400' :
                        court.available ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'
                      }`}>
                        {court.maintenance_mode ? 'Maintenance' : court.available ? 'Available' : 'Unavailable'}
                      </span>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap text-right">
                      <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  const AddCourtModal = () => {
    if (!showAddCourtModal) return null

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      // In a real app, this would make an API call
      console.log('Adding new court:', newCourt)
      setShowAddCourtModal(false)
      // Reset form
      setNewCourt({
        name: '',
        venue_id: '',
        sport_type: 'tennis',
        surface_type: 'hard',
        indoor: false,
        lighting: true,
        net_provided: true,
        equipment_rental: false,
        hourly_rate: 40,
        peak_rate: 55,
        length_meters: 23.77,
        width_meters: 10.97,
        height_meters: ''
      })
    }

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowAddCourtModal(false)}
        />
        
        {/* Modal */}
        <motion.div
          className="relative w-full max-w-4xl mx-4 rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.95) 0%, rgba(15, 21, 53, 0.95) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
          }}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="px-8 py-6" style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Add New Court</h2>
                <p className="text-gray-400 mt-1">Create a new court for your venue</p>
              </div>
              <button
                onClick={() => setShowAddCourtModal(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Basic Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Court Name *</label>
                <input
                  type="text"
                  required
                  value={newCourt.name}
                  onChange={(e) => setNewCourt({...newCourt, name: e.target.value})}
                  placeholder="e.g., Center Court, Court 1"
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Venue *</label>
                <select
                  required
                  value={newCourt.venue_id}
                  onChange={(e) => setNewCourt({...newCourt, venue_id: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="">Select a venue</option>
                  {mockVenues.map((venue) => (
                    <option key={venue.id} value={venue.id}>{venue.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Sport Type *</label>
                <select
                  value={newCourt.sport_type}
                  onChange={(e) => setNewCourt({...newCourt, sport_type: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="tennis">Tennis</option>
                  <option value="pickleball">Pickleball</option>
                  <option value="squash">Squash</option>
                  <option value="badminton">Badminton</option>
                  <option value="racquetball">Racquetball</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Surface Type *</label>
                <select
                  value={newCourt.surface_type}
                  onChange={(e) => setNewCourt({...newCourt, surface_type: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="hard">Hard Court</option>
                  <option value="clay">Clay</option>
                  <option value="grass">Grass</option>
                  <option value="synthetic">Synthetic</option>
                  <option value="wood">Wood</option>
                </select>
              </div>
            </div>

            {/* Pricing */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Hourly Rate ($) *</label>
                <input
                  type="number"
                  required
                  min="0"
                  step="5"
                  value={newCourt.hourly_rate}
                  onChange={(e) => setNewCourt({...newCourt, hourly_rate: parseInt(e.target.value)})}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Peak Rate ($) *</label>
                <input
                  type="number"
                  required
                  min="0"
                  step="5"
                  value={newCourt.peak_rate}
                  onChange={(e) => setNewCourt({...newCourt, peak_rate: parseInt(e.target.value)})}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
            </div>

            {/* Features */}
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-3">Court Features</label>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={newCourt.indoor}
                    onChange={(e) => setNewCourt({...newCourt, indoor: e.target.checked})}
                    className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">Indoor Court</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={newCourt.lighting}
                    onChange={(e) => setNewCourt({...newCourt, lighting: e.target.checked})}
                    className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">Lighting</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={newCourt.net_provided}
                    onChange={(e) => setNewCourt({...newCourt, net_provided: e.target.checked})}
                    className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">Net Provided</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={newCourt.equipment_rental}
                    onChange={(e) => setNewCourt({...newCourt, equipment_rental: e.target.checked})}
                    className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">Equipment Rental</span>
                </label>
              </div>
            </div>

            {/* Dimensions */}
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-3">Court Dimensions (meters)</label>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Length</label>
                  <input
                    type="number"
                    step="0.01"
                    value={newCourt.length_meters}
                    onChange={(e) => setNewCourt({...newCourt, length_meters: parseFloat(e.target.value)})}
                    className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Width</label>
                  <input
                    type="number"
                    step="0.01"
                    value={newCourt.width_meters}
                    onChange={(e) => setNewCourt({...newCourt, width_meters: parseFloat(e.target.value)})}
                    className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Height (optional)</label>
                  <input
                    type="number"
                    step="0.01"
                    value={newCourt.height_meters}
                    onChange={(e) => setNewCourt({...newCourt, height_meters: e.target.value})}
                    placeholder="For indoor courts"
                    className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6" style={{ borderTop: '1px solid rgba(59, 130, 246, 0.1)' }}>
              <button
                type="button"
                onClick={() => setShowAddCourtModal(false)}
                className="px-6 py-3 rounded-2xl text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <motion.button
                type="submit"
                className="text-white px-8 py-3 rounded-2xl flex items-center font-bold text-sm"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)'
                }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 12px 32px rgba(102, 126, 234, 0.5)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Plus className="h-4 w-4 mr-2" />
                CREATE COURT
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    )
  }

  const AddMatchModal = () => {
    if (!showAddMatchModal) return null

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      console.log('Adding new match:', newMatch)
      setShowAddMatchModal(false)
      // Reset form
      setNewMatch({
        title: '',
        description: '',
        sport: 'tennis',
        scheduled_date: '',
        start_time: '',
        end_time: '',
        venue_id: '',
        court_id: '',
        match_type: 'singles',
        skill_level: 'intermediate',
        max_players: 4,
        entry_fee: 0,
        registration_deadline: '',
        court_fee_included: true,
        equipment_provided: false,
        prize_pool: 0
      })
    }

    const availableCourts = mockCourts.filter(court => 
      newMatch.venue_id ? court.venue_id.toString() === newMatch.venue_id : true
    )

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowAddMatchModal(false)}
        />
        
        <motion.div
          className="relative w-full max-w-4xl mx-4 rounded-3xl overflow-hidden max-h-[90vh]"
          style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.95) 0%, rgba(15, 21, 53, 0.95) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
          }}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-8 py-6" style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Schedule New Match</h2>
                <p className="text-gray-400 mt-1">Create a new match or tournament</p>
              </div>
              <button
                onClick={() => setShowAddMatchModal(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Match Title *</label>
                <input
                  type="text"
                  required
                  value={newMatch.title}
                  onChange={(e) => setNewMatch({...newMatch, title: e.target.value})}
                  placeholder="e.g., Singles Tournament, Doubles League"
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Description</label>
                <textarea
                  value={newMatch.description}
                  onChange={(e) => setNewMatch({...newMatch, description: e.target.value})}
                  placeholder="Describe the match, rules, or special requirements..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                />
              </div>
            </div>

            {/* Match Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Sport *</label>
                <select
                  value={newMatch.sport}
                  onChange={(e) => setNewMatch({...newMatch, sport: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="tennis">Tennis</option>
                  <option value="pickleball">Pickleball</option>
                  <option value="squash">Squash</option>
                  <option value="badminton">Badminton</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Match Type *</label>
                <select
                  value={newMatch.match_type}
                  onChange={(e) => setNewMatch({...newMatch, match_type: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="singles">Singles</option>
                  <option value="doubles">Doubles</option>
                  <option value="mixed_doubles">Mixed Doubles</option>
                  <option value="tournament">Tournament</option>
                  <option value="clinic">Clinic</option>
                  <option value="social">Social Play</option>
                  <option value="exhibition">Exhibition</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Skill Level *</label>
                <select
                  value={newMatch.skill_level}
                  onChange={(e) => setNewMatch({...newMatch, skill_level: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="professional">Professional</option>
                  <option value="open">Open (All Levels)</option>
                </select>
              </div>
            </div>

            {/* Venue & Court Selection */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Venue *</label>
                <select
                  required
                  value={newMatch.venue_id}
                  onChange={(e) => setNewMatch({...newMatch, venue_id: e.target.value, court_id: ''})}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="">Select a venue</option>
                  {mockVenues.map((venue) => (
                    <option key={venue.id} value={venue.id}>{venue.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Court</label>
                <select
                  value={newMatch.court_id}
                  onChange={(e) => setNewMatch({...newMatch, court_id: e.target.value})}
                  disabled={!newMatch.venue_id}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all disabled:opacity-50"
                >
                  <option value="">Any available court</option>
                  {availableCourts.map((court) => (
                    <option key={court.id} value={court.id}>{court.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Date *</label>
                <input
                  type="date"
                  required
                  value={newMatch.scheduled_date}
                  onChange={(e) => setNewMatch({...newMatch, scheduled_date: e.target.value})}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Start Time *</label>
                <input
                  type="time"
                  required
                  value={newMatch.start_time}
                  onChange={(e) => setNewMatch({...newMatch, start_time: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">End Time *</label>
                <input
                  type="time"
                  required
                  value={newMatch.end_time}
                  onChange={(e) => setNewMatch({...newMatch, end_time: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
            </div>

            {/* Registration & Pricing */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Max Players *</label>
                <input
                  type="number"
                  required
                  min="2"
                  max="32"
                  value={newMatch.max_players}
                  onChange={(e) => setNewMatch({...newMatch, max_players: parseInt(e.target.value)})}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Entry Fee ($)</label>
                <input
                  type="number"
                  min="0"
                  step="5"
                  value={newMatch.entry_fee}
                  onChange={(e) => setNewMatch({...newMatch, entry_fee: parseInt(e.target.value)})}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-400 mb-2">Prize Pool ($)</label>
                <input
                  type="number"
                  min="0"
                  step="50"
                  value={newMatch.prize_pool}
                  onChange={(e) => setNewMatch({...newMatch, prize_pool: parseInt(e.target.value)})}
                  className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                />
              </div>
            </div>

            {/* Registration Deadline */}
            <div>
              <label className="block text-sm font-semibold text-gray-400 mb-2">Registration Deadline</label>
              <input
                type="datetime-local"
                value={newMatch.registration_deadline}
                onChange={(e) => setNewMatch({...newMatch, registration_deadline: e.target.value})}
                className="w-full px-4 py-3 rounded-xl text-white bg-gray-700/50 border border-gray-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
            </div>

            {/* Additional Options */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-400 mb-3">Additional Options</label>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={newMatch.court_fee_included}
                    onChange={(e) => setNewMatch({...newMatch, court_fee_included: e.target.checked})}
                    className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">Court fee included in entry fee</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={newMatch.equipment_provided}
                    onChange={(e) => setNewMatch({...newMatch, equipment_provided: e.target.checked})}
                    className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-sm text-gray-300">Equipment provided</span>
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6" style={{ borderTop: '1px solid rgba(59, 130, 246, 0.1)' }}>
              <button
                type="button"
                onClick={() => setShowAddMatchModal(false)}
                className="px-6 py-3 rounded-2xl text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <motion.button
                type="submit"
                className="text-white px-8 py-3 rounded-2xl flex items-center font-bold text-sm"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)'
                }}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 12px 32px rgba(102, 126, 234, 0.5)'
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Trophy className="h-4 w-4 mr-2" />
                SCHEDULE MATCH
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    )
  }

  const renderMatches = () => {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Matches</h1>
            <p className="text-gray-400">Create and manage matches at your venues</p>
          </div>
          <motion.button 
            onClick={() => setShowAddMatchModal(true)}
            className="text-white px-8 py-3.5 rounded-2xl flex items-center font-bold text-sm transition-all"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)'
            }}
            whileHover={{ 
              scale: 1.02, 
              y: -2,
              boxShadow: '0 12px 32px rgba(102, 126, 234, 0.5)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="h-5 w-5 mr-2" />
            SCHEDULE MATCH
          </motion.button>
        </div>

        {/* Match Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Matches"
            value={mockMatches.length}
            description="All time"
            icon={Trophy}
            trend={{ value: 15, label: 'from last month', isPositive: true }}
          />
          <StatCard
            title="Scheduled Matches"
            value={mockMatches.filter(m => m.status === 'scheduled').length}
            description="Upcoming"
            icon={Calendar}
          />
          <StatCard
            title="Total Participants"
            value={mockMatches.reduce((sum, match) => sum + match.current_players, 0)}
            description="Registered players"
            icon={Users}
            trend={{ value: 8, label: 'from last month', isPositive: true }}
          />
          <StatCard
            title="Revenue Generated"
            value={`$${mockMatches.reduce((sum, match) => sum + (match.entry_fee * match.current_players), 0).toLocaleString()}`}
            description="From entry fees"
            icon={DollarSign}
            trend={{ value: 22, label: 'from last month', isPositive: true }}
          />
        </div>

        {/* Matches Table */}
        <div className="rounded-3xl overflow-hidden" style={{
          background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.1)',
          backdropFilter: 'blur(20px)'
        }}>
          <div className="px-8 py-6" style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
            <h3 className="text-xl font-bold text-white">All Matches</h3>
            <p className="text-sm text-gray-400 mt-1">Manage matches and tournaments</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Match</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Venue</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Date & Time</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Players</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Entry Fee</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-8 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockMatches.map((match) => (
                  <tr key={match.id} className="hover:bg-white/5 transition-colors cursor-pointer" style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.05)' }}>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm" style={{
                          background: match.sport === 'tennis' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' :
                                    match.sport === 'pickleball' ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' :
                                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        }}>
                          <Trophy className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{match.title}</div>
                          <div className="text-xs text-gray-400">{match.match_type} • {match.skill_level}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-300">{match.venue_name}</div>
                        <div className="text-xs text-gray-400">{match.court_name}</div>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-white">{new Date(match.scheduled_date).toLocaleDateString()}</div>
                        <div className="text-xs text-gray-400">{match.start_time} - {match.end_time}</div>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(match.current_players / match.max_players) * 100}%` }}></div>
                        </div>
                        <span className="text-sm font-medium text-white">{match.current_players}/{match.max_players}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-bold text-white">${match.entry_fee}</div>
                        {match.prize_pool > 0 && (
                          <div className="text-xs text-green-400">Prize: ${match.prize_pool}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <span className={`px-4 py-2 rounded-xl text-xs font-bold uppercase ${
                        match.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                        match.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        match.status === 'in_progress' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {match.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap text-right">
                      <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  const renderEvents = () => {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Events</h1>
            <p className="text-gray-400">Create and manage events at your venues</p>
          </div>
          <motion.button 
            onClick={() => setShowAddEventModal(true)}
            className="text-white px-8 py-3.5 rounded-2xl flex items-center font-bold text-sm transition-all"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)'
            }}
            whileHover={{ 
              scale: 1.02, 
              y: -2,
              boxShadow: '0 12px 32px rgba(102, 126, 234, 0.5)'
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="h-5 w-5 mr-2" />
            CREATE EVENT
          </motion.button>
        </div>

        {/* Event Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Events"
            value={mockEvents.length}
            description="All time"
            icon={Calendar}
            trend={{ value: 20, label: 'from last month', isPositive: true }}
          />
          <StatCard
            title="Scheduled Events"
            value={mockEvents.filter(e => e.status === 'scheduled').length}
            description="Upcoming"
            icon={Calendar}
          />
          <StatCard
            title="Total Registrations"
            value={mockEvents.reduce((sum, event) => sum + event.current_registrations, 0)}
            description="Registered participants"
            icon={Users}
            trend={{ value: 12, label: 'from last month', isPositive: true }}
          />
          <StatCard
            title="Revenue Generated"
            value={`$${mockEvents.reduce((sum, event) => sum + (event.price * event.current_registrations), 0).toLocaleString()}`}
            description="From event fees"
            icon={DollarSign}
            trend={{ value: 18, label: 'from last month', isPositive: true }}
          />
        </div>

        {/* Events Table */}
        <div className="rounded-3xl overflow-hidden" style={{
          background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
          border: '1px solid rgba(59, 130, 246, 0.1)',
          backdropFilter: 'blur(20px)'
        }}>
          <div className="px-8 py-6" style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
            <h3 className="text-xl font-bold text-white">All Events</h3>
            <p className="text-sm text-gray-400 mt-1">Manage workshops, clinics, and tournaments</p>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Event</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Venue</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Date & Time</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Registrations</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Price</th>
                  <th className="px-8 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-8 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mockEvents.map((event) => (
                  <tr key={event.id} className="hover:bg-white/5 transition-colors cursor-pointer" style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.05)' }}>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-sm" style={{
                          background: event.event_type === 'workshop' ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' :
                                    event.event_type === 'clinic' ? 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' :
                                    event.event_type === 'tournament' ? 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)' :
                                    event.event_type === 'camp' ? 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)' :
                                    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                        }}>
                          <Calendar className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">{event.name}</div>
                          <div className="text-xs text-gray-400">{event.event_type} • {event.skill_level}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-300">{event.venue_name}</div>
                        <div className="text-xs text-gray-400">{event.sport}</div>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-white">{new Date(event.start_date).toLocaleDateString()}</div>
                        <div className="text-xs text-gray-400">{event.start_time} - {event.end_time}</div>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-700 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(event.current_registrations / event.capacity) * 100}%` }}></div>
                        </div>
                        <span className="text-sm font-medium text-white">{event.current_registrations}/{event.capacity}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-bold text-white">${event.price}</div>
                        {event.early_bird_price && (
                          <div className="text-xs text-green-400">Early: ${event.early_bird_price}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <span className={`px-4 py-2 rounded-xl text-xs font-bold uppercase ${
                        event.status === 'scheduled' ? 'bg-blue-500/20 text-blue-400' :
                        event.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        event.status === 'in_progress' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {event.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap text-right">
                      <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  const renderClasses = () => {
    const upcomingClasses = classes.filter(c => c.status === 'upcoming')
    const totalRevenue = classes.reduce((sum, c) => sum + (c.price * c.enrolled), 0)
    const totalEnrolled = classes.reduce((sum, c) => sum + c.enrolled, 0)
    const totalCapacity = classes.reduce((sum, c) => sum + c.capacity, 0)

    const getStatusColor = (status: string) => {
      switch (status) {
        case 'upcoming':
          return 'bg-blue-500/20 text-blue-400'
        case 'ongoing':
          return 'bg-green-500/20 text-green-400'
        case 'completed':
          return 'bg-gray-500/20 text-gray-400'
        case 'cancelled':
          return 'bg-red-500/20 text-red-400'
        default:
          return 'bg-gray-500/20 text-gray-400'
      }
    }

    const getSkillLevelColor = (level: string) => {
      switch (level) {
        case 'beginner':
          return 'bg-green-500/20 text-green-400'
        case 'intermediate':
          return 'bg-yellow-500/20 text-yellow-400'
        case 'advanced':
          return 'bg-red-500/20 text-red-400'
        case 'all':
          return 'bg-purple-500/20 text-purple-400'
        default:
          return 'bg-gray-500/20 text-gray-400'
      }
    }

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Classes</h1>
            <p className="text-gray-400">Host and manage your sports classes and training sessions</p>
          </div>
          <motion.button
            onClick={() => setShowAddClassModal(true)}
            className="px-6 py-3 rounded-2xl font-medium text-white flex items-center space-x-2"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus className="h-5 w-5" />
            <span>Create Class</span>
          </motion.button>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Classes"
            value={classes.length}
            description={`${upcomingClasses.length} upcoming`}
            icon={Calendar}
          />
          <StatCard
            title="Total Students"
            value={totalEnrolled}
            description="Across all classes"
            icon={Users}
          />
          <StatCard
            title="Revenue"
            value={`$${totalRevenue.toLocaleString()}`}
            description="From all classes"
            icon={DollarSign}
          />
          <StatCard
            title="Avg. Capacity"
            value={`${Math.round((totalEnrolled / totalCapacity) * 100)}%`}
            description="Utilization rate"
            icon={Activity}
          />
        </div>

        {/* Classes List */}
        <div className="space-y-4">
          {classes.map((classItem) => (
            <motion.div
              key={classItem.id}
              className="rounded-3xl p-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.1)',
                backdropFilter: 'blur(20px)'
              }}
              whileHover={{ y: -2, scale: 1.01 }}
            >
              {/* Gradient overlay */}
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full" style={{
                background: 'radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)',
                filter: 'blur(30px)'
              }} />
              
              <div className="relative">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-bold text-white">{classItem.title}</h3>
                      <span className={`px-3 py-1 rounded-xl text-xs font-bold uppercase ${getStatusColor(classItem.status)}`}>
                        {classItem.status}
                      </span>
                      <span className={`px-3 py-1 rounded-xl text-xs font-bold uppercase ${getSkillLevelColor(classItem.skill_level)}`}>
                        {classItem.skill_level}
                      </span>
                    </div>
                    <p className="text-gray-400">{classItem.description}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-300">Instructor: {classItem.instructor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-300">{new Date(classItem.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-300">{classItem.time} ({classItem.duration}min)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-300">{classItem.venue}</span>
                  </div>
                </div>

                {/* Progress and Price */}
                <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid rgba(59, 130, 246, 0.1)' }}>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-400">
                      {classItem.enrolled}/{classItem.capacity} enrolled
                    </span>
                    <div className="w-32 bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all"
                        style={{
                          width: `${(classItem.enrolled / classItem.capacity) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white">
                    ${classItem.price}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  const AddClassModal = () => {
    if (!showAddClassModal) return null

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      
      // Create new class object
      const newClassItem = {
        id: classes.length + 1,
        title: newClass.title,
        description: newClass.description,
        instructor: newClass.instructor,
        date: newClass.date,
        time: newClass.time,
        duration: newClass.duration,
        capacity: newClass.capacity,
        enrolled: 0, // New classes start with 0 enrolled
        price: newClass.price,
        venue: newClass.venue,
        court: newClass.court || 'TBD',
        status: 'upcoming' as const,
        skill_level: newClass.skill_level,
        sport: newClass.sport
      }
      
      // Add to classes list
      setClasses([...classes, newClassItem])
      
      // Close modal and reset form
      setShowAddClassModal(false)
      setNewClass({
        title: '',
        description: '',
        instructor: '',
        date: '',
        time: '',
        duration: 90,
        capacity: 8,
        price: 45,
        venue: '',
        court: '',
        skill_level: 'beginner',
        sport: 'Tennis'
      })
      
      console.log('New class added:', newClassItem)
    }

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setShowAddClassModal(false)}
        />
        
        <motion.div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.95) 0%, rgba(15, 21, 53, 0.95) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            backdropFilter: 'blur(20px)'
          }}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Create New Class</h2>
              <p className="text-gray-400 mt-1">Set up a new sports class for your students</p>
            </div>
            <button
              onClick={() => setShowAddClassModal(false)}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Class Title *
                </label>
                <input
                  type="text"
                  required
                  value={newClass.title}
                  onChange={(e) => setNewClass({ ...newClass, title: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  style={{ background: 'rgba(15, 21, 53, 0.8)' }}
                  placeholder="e.g., Beginner Tennis Fundamentals"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Instructor *
                </label>
                <input
                  type="text"
                  required
                  value={newClass.instructor}
                  onChange={(e) => setNewClass({ ...newClass, instructor: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  style={{ background: 'rgba(15, 21, 53, 0.8)' }}
                  placeholder="Instructor name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={newClass.description}
                onChange={(e) => setNewClass({ ...newClass, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                style={{ background: 'rgba(15, 21, 53, 0.8)' }}
                placeholder="Describe what students will learn in this class..."
              />
            </div>

            {/* Sport and Skill Level */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Sport *
                </label>
                <select
                  required
                  value={newClass.sport}
                  onChange={(e) => setNewClass({ ...newClass, sport: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  style={{ background: 'rgba(15, 21, 53, 0.8)' }}
                >
                  <option value="Tennis">Tennis</option>
                  <option value="Pickleball">Pickleball</option>
                  <option value="Squash">Squash</option>
                  <option value="Badminton">Badminton</option>
                  <option value="Table Tennis">Table Tennis</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Skill Level *
                </label>
                <select
                  required
                  value={newClass.skill_level}
                  onChange={(e) => setNewClass({ ...newClass, skill_level: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  style={{ background: 'rgba(15, 21, 53, 0.8)' }}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                  <option value="all">All Levels</option>
                </select>
              </div>
            </div>

            {/* Schedule */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Date *
                </label>
                <input
                  type="date"
                  required
                  value={newClass.date}
                  onChange={(e) => setNewClass({ ...newClass, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  style={{ background: 'rgba(15, 21, 53, 0.8)' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Time *
                </label>
                <input
                  type="time"
                  required
                  value={newClass.time}
                  onChange={(e) => setNewClass({ ...newClass, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  style={{ background: 'rgba(15, 21, 53, 0.8)' }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Duration (minutes) *
                </label>
                <input
                  type="number"
                  required
                  min="30"
                  max="240"
                  value={newClass.duration}
                  onChange={(e) => setNewClass({ ...newClass, duration: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  style={{ background: 'rgba(15, 21, 53, 0.8)' }}
                  placeholder="90"
                />
              </div>
            </div>

            {/* Venue and Capacity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Venue *
                </label>
                <select
                  required
                  value={newClass.venue}
                  onChange={(e) => setNewClass({ ...newClass, venue: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  style={{ background: 'rgba(15, 21, 53, 0.8)' }}
                >
                  <option value="">Select venue</option>
                  <option value="Downtown Tennis Center">Downtown Tennis Center</option>
                  <option value="Riverside Courts">Riverside Courts</option>
                  <option value="Elite Training Facility">Elite Training Facility</option>
                  <option value="Central Park Tennis Club">Central Park Tennis Club</option>
                  <option value="Brooklyn Heights Racquet">Brooklyn Heights Racquet</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Court
                </label>
                <select
                  value={newClass.court}
                  onChange={(e) => setNewClass({ ...newClass, court: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  style={{ background: 'rgba(15, 21, 53, 0.8)' }}
                >
                  <option value="">Select court</option>
                  <option value="Court 1">Court 1</option>
                  <option value="Court 2">Court 2</option>
                  <option value="Court 3">Court 3</option>
                  <option value="Center Court">Center Court</option>
                  <option value="Premium Court">Premium Court</option>
                </select>
              </div>
            </div>

            {/* Capacity and Price */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Max Capacity *
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  max="20"
                  value={newClass.capacity}
                  onChange={(e) => setNewClass({ ...newClass, capacity: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  style={{ background: 'rgba(15, 21, 53, 0.8)' }}
                  placeholder="8"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Price ($) *
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={newClass.price}
                  onChange={(e) => setNewClass({ ...newClass, price: parseFloat(e.target.value) })}
                  className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  style={{ background: 'rgba(15, 21, 53, 0.8)' }}
                  placeholder="45"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6">
              <button
                type="button"
                onClick={() => setShowAddClassModal(false)}
                className="px-6 py-3 rounded-2xl text-gray-300 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <motion.button
                type="submit"
                className="px-8 py-3 rounded-2xl text-white font-medium"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Class
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    )
  }

  const renderSettings = () => {
    const handleSave = () => {
      setPartnerSettings(tempSettings)
      setSettingsIsEditing(false)
      console.log('Settings saved:', tempSettings)
    }

    const handleCancel = () => {
      setTempSettings(partnerSettings)
      setSettingsIsEditing(false)
    }

    const tabs = [
      { id: 'company', name: 'Company Info', icon: Building2 },
      { id: 'business', name: 'Business Hours', icon: Calendar },
      { id: 'pricing', name: 'Pricing & Rates', icon: DollarSign },
      { id: 'bookings', name: 'Booking Rules', icon: Trophy },
      { id: 'staff', name: 'Staff & Access', icon: Users },
      { id: 'notifications', name: 'Notifications', icon: Bell },
      { id: 'payments', name: 'Payments', icon: DollarSign },
      { id: 'integrations', name: 'Integrations', icon: Settings },
    ]

    const renderCompanyInfo = () => (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Company Name *
            </label>
            <input
              type="text"
              disabled={!settingsIsEditing}
              value={tempSettings.company_name}
              onChange={(e) => setTempSettings({ ...tempSettings, company_name: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              disabled={!settingsIsEditing}
              value={tempSettings.email}
              onChange={(e) => setTempSettings({ ...tempSettings, email: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              disabled={!settingsIsEditing}
              value={tempSettings.phone}
              onChange={(e) => setTempSettings({ ...tempSettings, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Website
            </label>
            <input
              type="url"
              disabled={!settingsIsEditing}
              value={tempSettings.website}
              onChange={(e) => setTempSettings({ ...tempSettings, website: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Description
          </label>
          <textarea
            disabled={!settingsIsEditing}
            value={tempSettings.description}
            onChange={(e) => setTempSettings({ ...tempSettings, description: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            placeholder="Describe your business..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Address
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={tempSettings.address}
              onChange={(e) => setTempSettings({ ...tempSettings, address: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              City
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={tempSettings.city}
              onChange={(e) => setTempSettings({ ...tempSettings, city: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              State
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={tempSettings.state}
              onChange={(e) => setTempSettings({ ...tempSettings, state: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              ZIP Code
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={tempSettings.zip_code}
              onChange={(e) => setTempSettings({ ...tempSettings, zip_code: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Country
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={tempSettings.country}
              onChange={(e) => setTempSettings({ ...tempSettings, country: e.target.value })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
        </div>
      </div>
    )

    const renderBusinessHours = () => (
      <div className="space-y-6">
        <div className="text-sm text-gray-400 mb-4">
          Set your operating hours for each day of the week
        </div>
        {Object.entries(tempSettings.business_hours).map(([day, hours]) => (
          <div key={day} className="flex items-center justify-between p-4 rounded-xl border border-gray-600" style={{ background: 'rgba(15, 21, 53, 0.8)' }}>
            <div className="flex items-center space-x-4">
              <div className="w-24">
                <span className="text-white font-medium capitalize">{day}</span>
              </div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  disabled={!settingsIsEditing}
                  checked={!hours.closed}
                  onChange={(e) => {
                    const newHours = { ...tempSettings.business_hours }
                    newHours[day as keyof typeof newHours].closed = !e.target.checked
                    setTempSettings({ ...tempSettings, business_hours: newHours })
                  }}
                  className="rounded text-blue-500 focus:ring-blue-500 disabled:opacity-50"
                />
                <span className="text-gray-300 text-sm">Open</span>
              </label>
            </div>
            {!hours.closed && (
              <div className="flex items-center space-x-4">
                <div>
                  <input
                    type="time"
                    disabled={!settingsIsEditing}
                    value={hours.open}
                    onChange={(e) => {
                      const newHours = { ...tempSettings.business_hours }
                      newHours[day as keyof typeof newHours].open = e.target.value
                      setTempSettings({ ...tempSettings, business_hours: newHours })
                    }}
                    className="px-3 py-2 rounded-lg text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: 'rgba(15, 21, 53, 0.8)' }}
                  />
                </div>
                <span className="text-gray-400">to</span>
                <div>
                  <input
                    type="time"
                    disabled={!settingsIsEditing}
                    value={hours.close}
                    onChange={(e) => {
                      const newHours = { ...tempSettings.business_hours }
                      newHours[day as keyof typeof newHours].close = e.target.value
                      setTempSettings({ ...tempSettings, business_hours: newHours })
                    }}
                    className="px-3 py-2 rounded-lg text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ background: 'rgba(15, 21, 53, 0.8)' }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    )

    const renderNotifications = () => (
      <div className="space-y-6">
        <div className="text-sm text-gray-400 mb-4">
          Choose how you want to be notified about important events
        </div>
        
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-white">Email Notifications</h4>
          {[
            { key: 'email_bookings', label: 'New Bookings', description: 'Get notified when someone books a court' },
            { key: 'email_cancellations', label: 'Cancellations', description: 'Get notified when bookings are cancelled' },
            { key: 'email_payments', label: 'Payments', description: 'Get notified about payment confirmations' },
            { key: 'email_reviews', label: 'Reviews', description: 'Get notified when customers leave reviews' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 rounded-xl border border-gray-600" style={{ background: 'rgba(15, 21, 53, 0.8)' }}>
              <div>
                <div className="text-white font-medium">{item.label}</div>
                <div className="text-gray-400 text-sm">{item.description}</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  disabled={!isEditing}
                  checked={tempSettings.notifications[item.key as keyof typeof tempSettings.notifications]}
                  onChange={(e) => {
                    const newNotifications = { ...tempSettings.notifications }
                    newNotifications[item.key as keyof typeof newNotifications] = e.target.checked
                    setTempSettings({ ...tempSettings, notifications: newNotifications })
                  }}
                  className="sr-only"
                />
                <div className={`w-11 h-6 rounded-full transition-colors ${tempSettings.notifications[item.key as keyof typeof tempSettings.notifications] ? 'bg-blue-500' : 'bg-gray-600'} ${!isEditing ? 'opacity-50' : ''}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${tempSettings.notifications[item.key as keyof typeof tempSettings.notifications] ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`} />
                </div>
              </label>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <h4 className="text-lg font-medium text-white">SMS Notifications</h4>
          {[
            { key: 'sms_bookings', label: 'New Bookings', description: 'Get SMS alerts for new bookings' },
            { key: 'sms_cancellations', label: 'Cancellations', description: 'Get SMS alerts for cancellations' },
            { key: 'sms_payments', label: 'Payments', description: 'Get SMS alerts for payments' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 rounded-xl border border-gray-600" style={{ background: 'rgba(15, 21, 53, 0.8)' }}>
              <div>
                <div className="text-white font-medium">{item.label}</div>
                <div className="text-gray-400 text-sm">{item.description}</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  disabled={!isEditing}
                  checked={tempSettings.notifications[item.key as keyof typeof tempSettings.notifications]}
                  onChange={(e) => {
                    const newNotifications = { ...tempSettings.notifications }
                    newNotifications[item.key as keyof typeof newNotifications] = e.target.checked
                    setTempSettings({ ...tempSettings, notifications: newNotifications })
                  }}
                  className="sr-only"
                />
                <div className={`w-11 h-6 rounded-full transition-colors ${tempSettings.notifications[item.key as keyof typeof tempSettings.notifications] ? 'bg-blue-500' : 'bg-gray-600'} ${!isEditing ? 'opacity-50' : ''}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${tempSettings.notifications[item.key as keyof typeof tempSettings.notifications] ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`} />
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    )

    const renderPayments = () => (
      <div className="space-y-6">
        <div className="text-sm text-gray-400 mb-4">
          Manage your payment processing and payout settings
        </div>

        <div className="p-6 rounded-xl border border-gray-600" style={{ background: 'rgba(15, 21, 53, 0.8)' }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-lg font-medium text-white">Stripe Integration</h4>
              <p className="text-gray-400 text-sm">Process payments securely with Stripe</p>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-bold ${tempSettings.payment_settings.stripe_connected ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
              {tempSettings.payment_settings.stripe_connected ? 'Connected' : 'Not Connected'}
            </div>
          </div>
          {!tempSettings.payment_settings.stripe_connected && (
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Connect Stripe Account
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Payout Schedule
            </label>
            <select
              disabled={!isEditing}
              value={tempSettings.payment_settings.payout_schedule}
              onChange={(e) => setTempSettings({ 
                ...tempSettings, 
                payment_settings: { ...tempSettings.payment_settings, payout_schedule: e.target.value }
              })}
              className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Currency
            </label>
            <select
              disabled={!isEditing}
              value={tempSettings.payment_settings.currency}
              onChange={(e) => setTempSettings({ 
                ...tempSettings, 
                payment_settings: { ...tempSettings.payment_settings, currency: e.target.value }
              })}
              className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            >
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="CAD">CAD - Canadian Dollar</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Tax Rate (%)
          </label>
          <input
            type="number"
            disabled={!isEditing}
            step="0.01"
            min="0"
            max="100"
            value={tempSettings.payment_settings.tax_rate}
            onChange={(e) => setTempSettings({ 
              ...tempSettings, 
              payment_settings: { ...tempSettings.payment_settings, tax_rate: parseFloat(e.target.value) }
            })}
            className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            placeholder="8.25"
          />
        </div>

        <div className="flex items-center justify-between p-4 rounded-xl border border-gray-600" style={{ background: 'rgba(15, 21, 53, 0.8)' }}>
          <div>
            <div className="text-white font-medium">Automatic Payouts</div>
            <div className="text-gray-400 text-sm">Automatically transfer earnings to your bank account</div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              disabled={!isEditing}
              checked={tempSettings.payment_settings.auto_payout}
              onChange={(e) => setTempSettings({ 
                ...tempSettings, 
                payment_settings: { ...tempSettings.payment_settings, auto_payout: e.target.checked }
              })}
              className="sr-only"
            />
            <div className={`w-11 h-6 rounded-full transition-colors ${tempSettings.payment_settings.auto_payout ? 'bg-blue-500' : 'bg-gray-600'} ${!isEditing ? 'opacity-50' : ''}`}>
              <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${tempSettings.payment_settings.auto_payout ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`} />
            </div>
          </label>
        </div>
      </div>
    )

    const renderBookings = () => (
      <div className="space-y-6">
        <div className="text-sm text-gray-400 mb-4">
          Configure booking rules and policies for your venues
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Advance Booking (Days)
            </label>
            <input
              type="number"
              disabled={!settingsIsEditing}
              min="1"
              max="365"
              value={tempSettings.booking_settings.advance_booking_days}
              onChange={(e) => setTempSettings({ 
                ...tempSettings, 
                booking_settings: { ...tempSettings.booking_settings, advance_booking_days: parseInt(e.target.value) }
              })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Cancellation Notice (Hours)
            </label>
            <input
              type="number"
              disabled={!settingsIsEditing}
              min="1"
              max="168"
              value={tempSettings.booking_settings.cancellation_hours}
              onChange={(e) => setTempSettings({ 
                ...tempSettings, 
                booking_settings: { ...tempSettings.booking_settings, cancellation_hours: parseInt(e.target.value) }
              })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Min Booking Duration (Minutes)
            </label>
            <input
              type="number"
              disabled={!settingsIsEditing}
              min="30"
              max="240"
              step="30"
              value={tempSettings.booking_settings.minimum_booking_duration}
              onChange={(e) => setTempSettings({ 
                ...tempSettings, 
                booking_settings: { ...tempSettings.booking_settings, minimum_booking_duration: parseInt(e.target.value) }
              })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Max Booking Duration (Minutes)
            </label>
            <input
              type="number"
              disabled={!settingsIsEditing}
              min="60"
              max="480"
              step="30"
              value={tempSettings.booking_settings.maximum_booking_duration}
              onChange={(e) => setTempSettings({ 
                ...tempSettings, 
                booking_settings: { ...tempSettings.booking_settings, maximum_booking_duration: parseInt(e.target.value) }
              })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Buffer Time (Minutes)
            </label>
            <input
              type="number"
              disabled={!settingsIsEditing}
              min="0"
              max="60"
              step="5"
              value={tempSettings.booking_settings.buffer_time_minutes}
              onChange={(e) => setTempSettings({ 
                ...tempSettings, 
                booking_settings: { ...tempSettings.booking_settings, buffer_time_minutes: parseInt(e.target.value) }
              })}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Max Players Per Booking
          </label>
          <input
            type="number"
            disabled={!settingsIsEditing}
            min="1"
            max="20"
            value={tempSettings.booking_settings.max_players_per_booking}
            onChange={(e) => setTempSettings({ 
              ...tempSettings, 
              booking_settings: { ...tempSettings.booking_settings, max_players_per_booking: parseInt(e.target.value) }
            })}
            className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: 'rgba(15, 21, 53, 0.8)' }}
          />
        </div>

        <div className="space-y-4">
          {[
            { key: 'auto_confirm', label: 'Auto-Confirm Bookings', description: 'Automatically confirm bookings without manual approval' },
            { key: 'require_payment', label: 'Require Payment', description: 'Require payment at the time of booking' },
            { key: 'allow_waitlist', label: 'Allow Waitlist', description: 'Allow customers to join a waitlist for fully booked slots' },
            { key: 'allow_back_to_back', label: 'Allow Back-to-Back Bookings', description: 'Allow consecutive bookings by the same customer' },
            { key: 'allow_same_day_booking', label: 'Same Day Booking', description: 'Allow bookings on the same day' },
            { key: 'require_phone_verification', label: 'Phone Verification', description: 'Require phone number verification for new customers' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 rounded-xl border border-gray-600" style={{ background: 'rgba(15, 21, 53, 0.8)' }}>
              <div>
                <div className="text-white font-medium">{item.label}</div>
                <div className="text-gray-400 text-sm">{item.description}</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  disabled={!isEditing}
                  checked={tempSettings.booking_settings[item.key as keyof typeof tempSettings.booking_settings] as boolean}
                  onChange={(e) => {
                    const newBookingSettings = { ...tempSettings.booking_settings }
                    ;(newBookingSettings[item.key as keyof typeof newBookingSettings] as boolean) = e.target.checked
                    setTempSettings({ ...tempSettings, booking_settings: newBookingSettings })
                  }}
                  className="sr-only"
                />
                <div className={`w-11 h-6 rounded-full transition-colors ${tempSettings.booking_settings[item.key as keyof typeof tempSettings.booking_settings] ? 'bg-blue-500' : 'bg-gray-600'} ${!isEditing ? 'opacity-50' : ''}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${tempSettings.booking_settings[item.key as keyof typeof tempSettings.booking_settings] ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`} />
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    )

    const renderPricing = () => (
      <div className="space-y-6">
        <div className="text-sm text-gray-400 mb-4">
          Configure pricing rules, peak hours, and special rates
        </div>

        {/* Peak Hours */}
        <div className="p-6 rounded-xl border border-gray-600" style={{ background: 'rgba(15, 21, 53, 0.8)' }}>
          <h4 className="text-lg font-medium text-white mb-4">Peak Hours Pricing</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Peak Hours Start
              </label>
              <input
                type="time"
                disabled={!settingsIsEditing}
                value={tempSettings.pricing_settings.peak_hours_start}
                onChange={(e) => setTempSettings({ 
                  ...tempSettings, 
                  pricing_settings: { ...tempSettings.pricing_settings, peak_hours_start: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'rgba(15, 21, 53, 0.8)' }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Peak Hours End
              </label>
              <input
                type="time"
                disabled={!settingsIsEditing}
                value={tempSettings.pricing_settings.peak_hours_end}
                onChange={(e) => setTempSettings({ 
                  ...tempSettings, 
                  pricing_settings: { ...tempSettings.pricing_settings, peak_hours_end: e.target.value }
                })}
                className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: 'rgba(15, 21, 53, 0.8)' }}
              />
            </div>
          </div>
        </div>

        {/* Premium Rates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Weekend Premium (%)
            </label>
            <input
              type="number"
              disabled={!settingsIsEditing}
              min="0"
              max="100"
              value={tempSettings.pricing_settings.weekend_premium}
              onChange={(e) => setTempSettings({ 
                ...tempSettings, 
                pricing_settings: { ...tempSettings.pricing_settings, weekend_premium: parseInt(e.target.value) }
              })}
              className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Holiday Premium (%)
            </label>
            <input
              type="number"
              disabled={!settingsIsEditing}
              min="0"
              max="100"
              value={tempSettings.pricing_settings.holiday_premium}
              onChange={(e) => setTempSettings({ 
                ...tempSettings, 
                pricing_settings: { ...tempSettings.pricing_settings, holiday_premium: parseInt(e.target.value) }
              })}
              className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
        </div>

        {/* Discounts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Member Discount (%)
            </label>
            <input
              type="number"
              disabled={!settingsIsEditing}
              min="0"
              max="50"
              value={tempSettings.pricing_settings.member_discount}
              onChange={(e) => setTempSettings({ 
                ...tempSettings, 
                pricing_settings: { ...tempSettings.pricing_settings, member_discount: parseInt(e.target.value) }
              })}
              className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Group Discount (%)
            </label>
            <input
              type="number"
              disabled={!settingsIsEditing}
              min="0"
              max="30"
              value={tempSettings.pricing_settings.group_discount_percentage}
              onChange={(e) => setTempSettings({ 
                ...tempSettings, 
                pricing_settings: { ...tempSettings.pricing_settings, group_discount_percentage: parseInt(e.target.value) }
              })}
              className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
        </div>

        {/* Fees */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Late Cancellation Fee ($)
            </label>
            <input
              type="number"
              disabled={!settingsIsEditing}
              min="0"
              value={tempSettings.pricing_settings.late_cancellation_fee}
              onChange={(e) => setTempSettings({ 
                ...tempSettings, 
                pricing_settings: { ...tempSettings.pricing_settings, late_cancellation_fee: parseInt(e.target.value) }
              })}
              className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              No-Show Fee ($)
            </label>
            <input
              type="number"
              disabled={!settingsIsEditing}
              min="0"
              value={tempSettings.pricing_settings.no_show_fee}
              onChange={(e) => setTempSettings({ 
                ...tempSettings, 
                pricing_settings: { ...tempSettings.pricing_settings, no_show_fee: parseInt(e.target.value) }
              })}
              className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            />
          </div>
        </div>

        {/* Advanced Pricing Options */}
        <div className="space-y-4">
          {[
            { key: 'seasonal_pricing', label: 'Seasonal Pricing', description: 'Adjust prices based on seasons' },
            { key: 'dynamic_pricing', label: 'Dynamic Pricing', description: 'Automatically adjust prices based on demand' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 rounded-xl border border-gray-600" style={{ background: 'rgba(15, 21, 53, 0.8)' }}>
              <div>
                <div className="text-white font-medium">{item.label}</div>
                <div className="text-gray-400 text-sm">{item.description}</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  disabled={!settingsIsEditing}
                  checked={tempSettings.pricing_settings[item.key as keyof typeof tempSettings.pricing_settings] as boolean}
                  onChange={(e) => {
                    const newPricingSettings = { ...tempSettings.pricing_settings }
                    ;(newPricingSettings[item.key as keyof typeof newPricingSettings] as boolean) = e.target.checked
                    setTempSettings({ ...tempSettings, pricing_settings: newPricingSettings })
                  }}
                  className="sr-only"
                />
                <div className={`w-11 h-6 rounded-full transition-colors ${tempSettings.pricing_settings[item.key as keyof typeof tempSettings.pricing_settings] ? 'bg-blue-500' : 'bg-gray-600'} ${!settingsIsEditing ? 'opacity-50' : ''}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${tempSettings.pricing_settings[item.key as keyof typeof tempSettings.pricing_settings] ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`} />
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    )

    const renderStaff = () => (
      <div className="space-y-6">
        <div className="text-sm text-gray-400 mb-4">
          Manage staff access, permissions, and emergency contacts
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Emergency Contact Number
          </label>
          <input
            type="tel"
            disabled={!settingsIsEditing}
            value={tempSettings.staff_settings.emergency_contact}
            onChange={(e) => setTempSettings({ 
              ...tempSettings, 
              staff_settings: { ...tempSettings.staff_settings, emergency_contact: e.target.value }
            })}
            className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: 'rgba(15, 21, 53, 0.8)' }}
            placeholder="(555) 123-4567"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Staff Discount (%)
          </label>
          <input
            type="number"
            disabled={!settingsIsEditing}
            min="0"
            max="100"
            value={tempSettings.staff_settings.staff_discount}
            onChange={(e) => setTempSettings({ 
              ...tempSettings, 
              staff_settings: { ...tempSettings.staff_settings, staff_discount: parseInt(e.target.value) }
            })}
            className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: 'rgba(15, 21, 53, 0.8)' }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Staff Access Hours
          </label>
          <select
            disabled={!settingsIsEditing}
            value={tempSettings.staff_settings.staff_access_hours}
            onChange={(e) => setTempSettings({ 
              ...tempSettings, 
              staff_settings: { ...tempSettings.staff_settings, staff_access_hours: e.target.value }
            })}
            className="w-full px-4 py-3 rounded-xl text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ background: 'rgba(15, 21, 53, 0.8)' }}
          >
            <option value="24_7">24/7 Access</option>
            <option value="business_hours">Business Hours Only</option>
            <option value="extended_hours">Extended Hours (6 AM - 11 PM)</option>
          </select>
        </div>

        <div className="space-y-4">
          {[
            { key: 'allow_staff_booking', label: 'Allow Staff Booking', description: 'Staff can make bookings for customers' },
            { key: 'require_manager_approval', label: 'Require Manager Approval', description: 'Manager must approve staff actions' },
            { key: 'staff_can_override_rules', label: 'Staff Can Override Rules', description: 'Staff can bypass booking restrictions' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-4 rounded-xl border border-gray-600" style={{ background: 'rgba(15, 21, 53, 0.8)' }}>
              <div>
                <div className="text-white font-medium">{item.label}</div>
                <div className="text-gray-400 text-sm">{item.description}</div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  disabled={!settingsIsEditing}
                  checked={tempSettings.staff_settings[item.key as keyof typeof tempSettings.staff_settings] as boolean}
                  onChange={(e) => {
                    const newStaffSettings = { ...tempSettings.staff_settings }
                    ;(newStaffSettings[item.key as keyof typeof newStaffSettings] as boolean) = e.target.checked
                    setTempSettings({ ...tempSettings, staff_settings: newStaffSettings })
                  }}
                  className="sr-only"
                />
                <div className={`w-11 h-6 rounded-full transition-colors ${tempSettings.staff_settings[item.key as keyof typeof tempSettings.staff_settings] ? 'bg-blue-500' : 'bg-gray-600'} ${!settingsIsEditing ? 'opacity-50' : ''}`}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${tempSettings.staff_settings[item.key as keyof typeof tempSettings.staff_settings] ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`} />
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>
    )

    const renderIntegrations = () => (
      <div className="space-y-6">
        <div className="text-sm text-gray-400 mb-4">
          Connect with third-party services to streamline your operations
        </div>

        <div className="grid gap-4">
          {[
            { key: 'google_calendar', label: 'Google Calendar', description: 'Sync bookings with Google Calendar', icon: '📅' },
            { key: 'outlook_calendar', label: 'Outlook Calendar', description: 'Sync bookings with Outlook Calendar', icon: '📅' },
            { key: 'quickbooks', label: 'QuickBooks', description: 'Sync financial data with QuickBooks', icon: '💰' },
            { key: 'mailchimp', label: 'Mailchimp', description: 'Email marketing automation', icon: '📧' },
            { key: 'zapier', label: 'Zapier', description: 'Connect with 1000+ apps', icon: '⚡' },
            { key: 'slack_notifications', label: 'Slack Notifications', description: 'Get booking alerts in Slack', icon: '💬' },
            { key: 'website_widget', label: 'Website Booking Widget', description: 'Embed booking widget on your website', icon: '🌐' },
            { key: 'api_access', label: 'API Access', description: 'Custom integrations via API', icon: '🔧' }
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between p-6 rounded-xl border border-gray-600" style={{ background: 'rgba(15, 21, 53, 0.8)' }}>
              <div className="flex items-center space-x-4">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <div className="text-white font-medium">{item.label}</div>
                  <div className="text-gray-400 text-sm">{item.description}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                {tempSettings.integrations[item.key as keyof typeof tempSettings.integrations] && (
                  <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                    Configure
                  </button>
                )}
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    disabled={!settingsIsEditing}
                    checked={tempSettings.integrations[item.key as keyof typeof tempSettings.integrations] as boolean}
                    onChange={(e) => {
                      const newIntegrations = { ...tempSettings.integrations }
                      ;(newIntegrations[item.key as keyof typeof newIntegrations] as boolean) = e.target.checked
                      setTempSettings({ ...tempSettings, integrations: newIntegrations })
                    }}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors ${tempSettings.integrations[item.key as keyof typeof tempSettings.integrations] ? 'bg-blue-500' : 'bg-gray-600'} ${!settingsIsEditing ? 'opacity-50' : ''}`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${tempSettings.integrations[item.key as keyof typeof tempSettings.integrations] ? 'translate-x-5' : 'translate-x-0.5'} mt-0.5`} />
                  </div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    )

    const renderTabContent = () => {
      switch (settingsActiveTab) {
        case 'company':
          return renderCompanyInfo()
        case 'business':
          return renderBusinessHours()
        case 'pricing':
          return renderPricing()
        case 'bookings':
          return renderBookings()
        case 'staff':
          return renderStaff()
        case 'notifications':
          return renderNotifications()
        case 'payments':
          return renderPayments()
        case 'integrations':
          return renderIntegrations()
        default:
          return renderCompanyInfo()
      }
    }

    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Settings</h1>
            <p className="text-gray-400">Manage your account and business preferences</p>
          </div>
          <div className="flex space-x-3">
            {settingsIsEditing ? (
              <>
                <motion.button
                  onClick={handleCancel}
                  className="px-6 py-3 rounded-2xl text-gray-300 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  onClick={handleSave}
                  className="px-6 py-3 rounded-2xl text-white font-medium"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Save Changes
                </motion.button>
              </>
            ) : (
              <motion.button
                onClick={() => setSettingsIsEditing(true)}
                className="px-6 py-3 rounded-2xl text-white font-medium flex items-center space-x-2"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Edit className="h-5 w-5" />
                <span>Edit Settings</span>
              </motion.button>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 rounded-2xl p-1" style={{ background: 'rgba(15, 21, 53, 0.8)' }}>
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setSettingsActiveTab(tab.id)}
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all ${
                  settingsActiveTab === tab.id
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                style={{
                  background: settingsActiveTab === tab.id 
                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    : 'transparent'
                }}
              >
                <Icon className="h-5 w-5" />
                <span className="hidden sm:block">{tab.name}</span>
              </button>
            )
          })}
        </div>

        {/* Content */}
        <motion.div
          key={settingsActiveTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl p-8"
          style={{
            background: 'linear-gradient(135deg, rgba(26, 32, 53, 0.8) 0%, rgba(15, 21, 53, 0.8) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.1)',
            backdropFilter: 'blur(20px)'
          }}
        >
          {renderTabContent()}
        </motion.div>
      </div>
    )
  }

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return renderDashboard()
      case 'venues':
        return renderVenues()
      case 'courts':
        return renderCourts()
      case 'matches':
        return renderMatches()
      case 'events':
        return renderEvents()
      case 'classes':
        return renderClasses()
      case 'settings':
        return renderSettings()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className="min-h-screen" style={{ 
      background: 'linear-gradient(135deg, #0f1535 0%, #1a1f3a 50%, #0a0e27 100%)'
    }}>
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl" style={{
        background: 'rgba(15, 21, 53, 0.8)',
        borderBottom: '1px solid rgba(59, 130, 246, 0.1)'
      }}>
        <div className="flex h-20 items-center justify-between px-8">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="text-xl font-bold tracking-wider" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                PLAYCIRCLE
              </div>
              <span className="px-3 py-1 text-xs font-semibold rounded-lg" style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2) 0%, rgba(118, 75, 162, 0.2) 100%)',
                color: '#a78bfa',
                border: '1px solid rgba(167, 139, 250, 0.2)'
              }}>
                PARTNER
              </span>
            </div>
          </div>

          <div className="flex-1 max-w-xl mx-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                placeholder="Type here..."
                className="w-full pl-12 pr-4 py-3 rounded-2xl text-white placeholder-gray-500 focus:outline-none transition-all"
                style={{
                  background: 'rgba(26, 32, 53, 0.5)',
                  border: '1px solid rgba(59, 130, 246, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-blue-500" />
            </button>
            
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Settings className="h-5 w-5" />
            </button>

            <div className="flex items-center space-x-3 pl-6" style={{ borderLeft: '1px solid rgba(59, 130, 246, 0.1)' }}>
              <div className="h-10 w-10 rounded-xl flex items-center justify-center text-white text-sm font-bold" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
              }}>
                {mockPartner.company_name.split(' ').map(word => word[0]).join('').slice(0, 2)}
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-semibold text-white">{mockPartner.company_name}</p>
                <p className="text-xs text-gray-400">{mockPartner.email}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarCollapsed ? 'w-24' : 'w-80'} transition-all duration-300 relative`} style={{
          background: 'rgba(15, 21, 53, 0.6)',
          backdropFilter: 'blur(20px)',
          borderRight: '1px solid rgba(59, 130, 246, 0.1)'
        }}>
          <div className="flex h-20 items-center justify-end px-6" style={{ borderBottom: '1px solid rgba(59, 130, 246, 0.1)' }}>
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg"
            >
              {sidebarCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>
          </div>

          {!sidebarCollapsed && (
            <div className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Account Pages
            </div>
          )}

          <nav className="flex-1 px-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon
              const isActive = currentPage === item.href
              
              return (
                <motion.button
                  key={item.name}
                  onClick={() => setCurrentPage(item.href)}
                  className={`w-full flex items-center px-4 py-3.5 text-sm font-semibold rounded-2xl transition-all ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  style={isActive ? {
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)'
                  } : {}}
                  whileHover={!isActive ? { x: 4 } : {}}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : 'bg-transparent'}`}>
                    <Icon className="h-4 w-4 flex-shrink-0" />
                  </div>
                  {!sidebarCollapsed && (
                    <span className="ml-3">{item.name}</span>
                  )}
                </motion.button>
              )
            })}
          </nav>


        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </main>
      </div>



      {/* Modals */}
      <AddCourtModal />
      <AddMatchModal />
      <AddClassModal />
    </div>
  )
}