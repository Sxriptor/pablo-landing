import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env.local file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          username: string
          full_name: string | null
          partner: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          full_name?: string | null
          partner?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          full_name?: string | null
          partner?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      partner_applications: {
        Row: {
          id: string
          user_id: string | null
          company_name: string
          email: string
          phone: string | null
          contact_person: string
          business_type: 'venue' | 'club' | 'academy' | 'other'
          description: string
          website: string | null
          address: string | null
          city: string | null
          state: string | null
          postal_code: string | null
          country: string
          years_in_business: number | null
          number_of_courts: number | null
          sports_offered: string[] | null
          estimated_monthly_bookings: number | null
          current_booking_system: string | null
          status: 'pending' | 'approved' | 'rejected' | 'under_review'
          submitted_at: string
          reviewed_at: string | null
          reviewed_by: string | null
          rejection_reason: string | null
          admin_notes: string | null
          business_license_url: string | null
          insurance_certificate_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          company_name: string
          email: string
          phone?: string | null
          contact_person: string
          business_type: 'venue' | 'club' | 'academy' | 'other'
          description: string
          website?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          postal_code?: string | null
          country?: string
          years_in_business?: number | null
          number_of_courts?: number | null
          sports_offered?: string[] | null
          estimated_monthly_bookings?: number | null
          current_booking_system?: string | null
          status?: 'pending' | 'approved' | 'rejected' | 'under_review'
          submitted_at?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          rejection_reason?: string | null
          admin_notes?: string | null
          business_license_url?: string | null
          insurance_certificate_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          company_name?: string
          email?: string
          phone?: string | null
          contact_person?: string
          business_type?: 'venue' | 'club' | 'academy' | 'other'
          description?: string
          website?: string | null
          address?: string | null
          city?: string | null
          state?: string | null
          postal_code?: string | null
          country?: string
          years_in_business?: number | null
          number_of_courts?: number | null
          sports_offered?: string[] | null
          estimated_monthly_bookings?: number | null
          current_booking_system?: string | null
          status?: 'pending' | 'approved' | 'rejected' | 'under_review'
          submitted_at?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          rejection_reason?: string | null
          admin_notes?: string | null
          business_license_url?: string | null
          insurance_certificate_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      partners: {
        Row: {
          id: string
          company_name: string
          email: string
          phone: string | null
          address: string | null
          logo_url: string | null
          website: string | null
          description: string | null
          status: 'pending' | 'approved' | 'rejected' | 'suspended'
          user_id: string
          created_at: string
          updated_at: string
          notifications_enabled: boolean
          email_notifications: boolean
          sms_notifications: boolean
          court_notifications: boolean
          class_notifications: boolean
          event_notifications: boolean
          match_notifications: boolean
          venue_notifications: boolean
        }
        Insert: {
          id?: string
          company_name: string
          email: string
          phone?: string | null
          address?: string | null
          logo_url?: string | null
          website?: string | null
          description?: string | null
          status?: 'pending' | 'approved' | 'rejected' | 'suspended'
          user_id: string
          created_at?: string
          updated_at?: string
          notifications_enabled?: boolean
          email_notifications?: boolean
          sms_notifications?: boolean
          court_notifications?: boolean
          class_notifications?: boolean
          event_notifications?: boolean
          match_notifications?: boolean
          venue_notifications?: boolean
        }
        Update: {
          id?: string
          company_name?: string
          email?: string
          phone?: string | null
          address?: string | null
          logo_url?: string | null
          website?: string | null
          description?: string | null
          status?: 'pending' | 'approved' | 'rejected' | 'suspended'
          user_id?: string
          created_at?: string
          updated_at?: string
          notifications_enabled?: boolean
          email_notifications?: boolean
          sms_notifications?: boolean
          court_notifications?: boolean
          class_notifications?: boolean
          event_notifications?: boolean
          match_notifications?: boolean
          venue_notifications?: boolean
        }
      }
      venues: {
        Row: {
          id: string
          partner_id: string
          name: string
          address: string
          city: string
          state: string | null
          postal_code: string | null
          country: string
          phone: string | null
          email: string | null
          website: string | null
          description: string | null
          image_url: string | null
          gallery_urls: string[] | null
          operating_hours: any | null
          amenities: string[] | null
          latitude: number | null
          longitude: number | null
          active: boolean
          created_at: string
          updated_at: string
        }
      }
      courts: {
        Row: {
          id: string
          venue_id: string
          name: string
          sport_type: string
          surface_type: string | null
          indoor: boolean
          lighting: boolean
          net_provided: boolean
          equipment_rental: boolean
          available: boolean
          hourly_rate: number | null
          peak_rate: number | null
          available_hours: any | null
          advance_booking_days: number
          min_booking_duration: number
          max_booking_duration: number
          length_meters: number | null
          width_meters: number | null
          height_meters: number | null
          maintenance_mode: boolean
          created_at: string
          updated_at: string
        }
      }
      matches: {
        Row: {
          id: string
          partner_id: string
          venue_id: string
          court_id: string | null
          title: string
          description: string | null
          sport: string
          scheduled_date: string
          start_time: string
          end_time: string
          timezone: string
          match_type: string
          skill_level: string | null
          max_players: number
          current_players: number
          registration_deadline: string | null
          entry_fee: number
          court_fee_included: boolean
          equipment_provided: boolean
          status: string
          winner_ids: string[] | null
          final_score: string | null
          match_notes: string | null
          created_at: string
          updated_at: string
        }
      }
      events: {
        Row: {
          id: string
          partner_id: string
          venue_id: string
          name: string
          description: string | null
          event_type: string
          sport: string
          instructor_name: string | null
          instructor_bio: string | null
          instructor_credentials: string | null
          start_date: string
          end_date: string
          start_time: string
          end_time: string
          timezone: string
          is_recurring: boolean
          recurrence_pattern: string | null
          recurrence_end_date: string | null
          capacity: number
          current_registrations: number
          price: number
          early_bird_price: number | null
          early_bird_deadline: string | null
          registration_opens: string
          registration_closes: string | null
          waitlist_enabled: boolean
          skill_level: string | null
          age_group: string | null
          equipment_provided: boolean
          equipment_required: string | null
          image_url: string | null
          additional_images: string[] | null
          status: string
          cancellation_reason: string | null
          created_at: string
          updated_at: string
        }
      }
    }
  }
}