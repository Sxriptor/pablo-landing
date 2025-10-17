import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export interface VenueData {
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  phone?: string
  email?: string
  website?: string
  description?: string
  amenities: string[]
  operatingHours: {
    [key: string]: {
      open: string
      close: string
      closed: boolean
    }
  }
  image?: File | null
}

export interface Partner {
  id: string
  company_name: string
  email: string
  phone?: string
  address?: string
  user_id: string
}

export async function getCurrentPartner(): Promise<Partner | null> {
  try {
    console.log('Getting current user...')
    const { data: { user } } = await supabase.auth.getUser()
    console.log('Current user:', user)
    
    if (!user) {
      console.error('No authenticated user found')
      // For testing purposes, return mock data if no user is found
      console.log('Returning mock partner data for testing')
      return {
        id: 'mock-partner-id',
        company_name: 'Test Company',
        email: 'test@company.com',
        phone: '(610) 781-7672',
        address: '412 west oak ave, Robesonia, PA, 19551',
        user_id: 'mock-user-id'
      }
    }

    console.log('Fetching partner for user ID:', user.id)
    const { data: partner, error } = await supabase
      .from('partners')
      .select('*')
      .eq('user_id', user.id)
      .single()

    console.log('Partner query result:', { partner, error })

    if (error) {
      console.error('Error fetching partner:', error)
      // For testing, return mock data if no partner found
      console.log('Returning mock partner data for testing')
      return {
        id: 'mock-partner-id',
        company_name: 'Test Company',
        email: 'test@company.com',
        phone: '(610) 781-7672',
        address: '412 west oak ave, Robesonia, PA, 19551',
        user_id: user.id
      }
    }

    return partner
  } catch (error) {
    console.error('Error getting current partner:', error)
    return null
  }
}

export async function createVenue(venueData: VenueData): Promise<{ success: boolean; error?: string; venue?: any }> {
  try {
    console.log('Starting venue creation with data:', venueData)
    
    // Get current partner
    const partner = await getCurrentPartner()
    console.log('Current partner:', partner)
    
    if (!partner) {
      console.error('No partner found')
      return { success: false, error: 'No partner found. Please ensure you are logged in as a partner.' }
    }

    // Prepare venue data for database
    const venuePayload = {
      partner_id: partner.id,
      name: venueData.name,
      address: venueData.address,
      city: venueData.city,
      state: venueData.state,
      postal_code: venueData.zipCode,
      country: 'US',
      phone: venueData.phone || null,
      email: venueData.email || null,
      website: venueData.website || null,
      description: venueData.description || null,
      amenities: venueData.amenities,
      operating_hours: venueData.operatingHours,
      active: true
    }

    console.log('Venue payload for database:', venuePayload)

    // Insert venue into database
    const { data: venue, error } = await supabase
      .from('venues')
      .insert([venuePayload])
      .select()
      .single()

    console.log('Supabase insert result:', { venue, error })

    if (error) {
      console.error('Error creating venue:', error)
      return { success: false, error: error.message }
    }

    // Handle image upload if provided
    if (venueData.image && venue) {
      console.log('Uploading image for venue:', venue.id)
      const imageUrl = await uploadVenueImage(venue.id, venueData.image)
      if (imageUrl) {
        // Update venue with image URL
        const { error: updateError } = await supabase
          .from('venues')
          .update({ image_url: imageUrl })
          .eq('id', venue.id)

        if (updateError) {
          console.error('Error updating venue with image:', updateError)
        }
      }
    }

    console.log('Venue creation successful:', venue)
    return { success: true, venue }
  } catch (error) {
    console.error('Error in createVenue:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

async function uploadVenueImage(venueId: string, imageFile: File): Promise<string | null> {
  try {
    const fileExt = imageFile.name.split('.').pop()
    const fileName = `${venueId}-${Date.now()}.${fileExt}`
    const filePath = `venues/${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('venue-images')
      .upload(filePath, imageFile)

    if (uploadError) {
      console.error('Error uploading image:', uploadError)
      return null
    }

    const { data } = supabase.storage
      .from('venue-images')
      .getPublicUrl(filePath)

    return data.publicUrl
  } catch (error) {
    console.error('Error in uploadVenueImage:', error)
    return null
  }
}

export async function getPartnerVenues(partnerId?: string): Promise<any[]> {
  try {
    let query = supabase
      .from('venues')
      .select('*')
      .eq('active', true)
      .order('created_at', { ascending: false })

    if (partnerId) {
      query = query.eq('partner_id', partnerId)
    } else {
      // Get current partner's venues
      const partner = await getCurrentPartner()
      if (!partner) return []
      query = query.eq('partner_id', partner.id)
    }

    const { data: venues, error } = await query

    if (error) {
      console.error('Error fetching venues:', error)
      return []
    }

    return venues || []
  } catch (error) {
    console.error('Error in getPartnerVenues:', error)
    return []
  }
}