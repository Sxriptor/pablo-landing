import { createClient } from '@supabase/supabase-js'
import { getCurrentPartner } from './venues'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface CourtData {
  name: string
  venueId: string
  sport: string
  surface: string
  indoor: boolean
  lighting: boolean
  description?: string
  hourlyRate?: string
  peakHourRate?: string
  availability: {
    [key: string]: {
      available: boolean
      openTime: string
      closeTime: string
    }
  }
}

export async function createCourt(courtData: CourtData): Promise<{ success: boolean; error?: string; court?: any }> {
  try {
    console.log('Starting court creation with data:', courtData)
    
    // Get current partner
    const partner = await getCurrentPartner()
    console.log('Current partner:', partner)
    
    if (!partner) {
      console.error('No partner found')
      return { success: false, error: 'No partner found. Please ensure you are logged in as a partner.' }
    }

    // Verify that the venue belongs to the current partner
    const { data: venue, error: venueError } = await supabase
      .from('venues')
      .select('id, partner_id')
      .eq('id', courtData.venueId)
      .eq('partner_id', partner.id)
      .single()

    if (venueError || !venue) {
      console.error('Venue not found or not owned by partner:', venueError)
      return { success: false, error: 'Venue not found or you do not have permission to add courts to this venue.' }
    }

    // Convert availability schedule to the format expected by the database
    const availableHours: { [key: string]: { start: string; end: string }[] } = {}
    
    Object.entries(courtData.availability).forEach(([day, schedule]) => {
      if (schedule.available) {
        availableHours[day] = [{
          start: schedule.openTime,
          end: schedule.closeTime
        }]
      }
    })

    // Prepare court data for database
    const courtPayload = {
      venue_id: courtData.venueId,
      name: courtData.name,
      sport_type: courtData.sport,
      surface_type: courtData.surface,
      indoor: courtData.indoor,
      lighting: courtData.lighting,
      hourly_rate: courtData.hourlyRate ? parseFloat(courtData.hourlyRate) : null,
      peak_rate: courtData.peakHourRate ? parseFloat(courtData.peakHourRate) : null,
      available_hours: availableHours,
      available: true,
      maintenance_mode: false
    }

    console.log('Court payload for database:', courtPayload)

    // Insert court into database
    const { data: court, error } = await supabase
      .from('courts')
      .insert([courtPayload])
      .select()
      .single()

    console.log('Supabase insert result:', { court, error })

    if (error) {
      console.error('Error creating court:', error)
      return { success: false, error: error.message }
    }

    console.log('Court creation successful:', court)
    return { success: true, court }
  } catch (error) {
    console.error('Error in createCourt:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

export async function getPartnerCourts(partnerId?: string): Promise<any[]> {
  try {
    let query = supabase
      .from('courts')
      .select(`
        *,
        venues!inner (
          id,
          name,
          partner_id
        )
      `)
      .order('created_at', { ascending: false })

    if (partnerId) {
      query = query.eq('venues.partner_id', partnerId)
    } else {
      // Get current partner's courts
      const partner = await getCurrentPartner()
      if (!partner) return []
      query = query.eq('venues.partner_id', partner.id)
    }

    const { data: courts, error } = await query

    if (error) {
      console.error('Error fetching courts:', error)
      return []
    }

    return courts || []
  } catch (error) {
    console.error('Error in getPartnerCourts:', error)
    return []
  }
}

export async function updateCourt(courtId: string, courtData: CourtData): Promise<{ success: boolean; error?: string; court?: any }> {
  try {
    console.log('Starting court update with data:', courtData)
    
    // Get current partner
    const partner = await getCurrentPartner()
    console.log('Current partner:', partner)
    
    if (!partner) {
      console.error('No partner found')
      return { success: false, error: 'No partner found. Please ensure you are logged in as a partner.' }
    }

    // Convert availability schedule to the format expected by the database
    const availableHours: { [key: string]: { start: string; end: string }[] } = {}
    
    Object.entries(courtData.availability).forEach(([day, schedule]) => {
      if (schedule.available) {
        availableHours[day] = [{
          start: schedule.openTime,
          end: schedule.closeTime
        }]
      }
    })

    // Prepare court data for database
    const courtPayload = {
      venue_id: courtData.venueId,
      name: courtData.name,
      sport_type: courtData.sport,
      surface_type: courtData.surface,
      indoor: courtData.indoor,
      lighting: courtData.lighting,
      hourly_rate: courtData.hourlyRate ? parseFloat(courtData.hourlyRate) : null,
      peak_rate: courtData.peakHourRate ? parseFloat(courtData.peakHourRate) : null,
      available_hours: availableHours,
      updated_at: new Date().toISOString()
    }

    console.log('Court update payload:', courtPayload)

    // Update court in database - ensure it belongs to the partner's venue
    const { data: court, error } = await supabase
      .from('courts')
      .update(courtPayload)
      .eq('id', courtId)
      .eq('venue_id', courtData.venueId)
      .select(`
        *,
        venues!inner (
          id,
          name,
          partner_id
        )
      `)
      .single()

    console.log('Supabase update result:', { court, error })

    if (error) {
      console.error('Error updating court:', error)
      return { success: false, error: error.message }
    }

    // Verify the court belongs to the partner
    if (court.venues.partner_id !== partner.id) {
      console.error('Court does not belong to partner')
      return { success: false, error: 'You do not have permission to update this court.' }
    }

    console.log('Court update successful:', court)
    return { success: true, court }
  } catch (error) {
    console.error('Error in updateCourt:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

export async function deleteCourt(courtId: string): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('Deleting court:', courtId)
    
    // Get current partner
    const partner = await getCurrentPartner()
    
    if (!partner) {
      console.error('No partner found')
      return { success: false, error: 'No partner found. Please ensure you are logged in as a partner.' }
    }

    // Delete court from database - RLS will ensure only partner's courts can be deleted
    const { error } = await supabase
      .from('courts')
      .delete()
      .eq('id', courtId)

    console.log('Supabase delete result:', { error })

    if (error) {
      console.error('Error deleting court:', error)
      return { success: false, error: error.message }
    }

    console.log('Court deletion successful')
    return { success: true }
  } catch (error) {
    console.error('Error in deleteCourt:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

export async function toggleCourtStatus(courtId: string): Promise<{ success: boolean; error?: string; court?: any }> {
  try {
    console.log('Toggling court status for:', courtId)
    
    // Get current partner
    const partner = await getCurrentPartner()
    
    if (!partner) {
      console.error('No partner found')
      return { success: false, error: 'No partner found. Please ensure you are logged in as a partner.' }
    }

    // First get the current court to check its status
    const { data: currentCourt, error: fetchError } = await supabase
      .from('courts')
      .select(`
        available,
        venues!inner (
          partner_id
        )
      `)
      .eq('id', courtId)
      .single()

    if (fetchError) {
      console.error('Error fetching current court:', fetchError)
      return { success: false, error: fetchError.message }
    }

    // Verify the court belongs to the partner
    if (currentCourt.venues.partner_id !== partner.id) {
      console.error('Court does not belong to partner')
      return { success: false, error: 'You do not have permission to update this court.' }
    }

    // Toggle the available status
    const newStatus = !currentCourt.available
    console.log('Toggling from', currentCourt.available, 'to', newStatus)

    // Update court status
    const { data: court, error } = await supabase
      .from('courts')
      .update({ 
        available: newStatus,
        updated_at: new Date().toISOString()
      })
      .eq('id', courtId)
      .select()
      .single()

    console.log('Supabase toggle result:', { court, error })

    if (error) {
      console.error('Error toggling court status:', error)
      return { success: false, error: error.message }
    }

    console.log('Court status toggle successful:', court)
    return { success: true, court }
  } catch (error) {
    console.error('Error in toggleCourtStatus:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}