interface GeocodeResult {
  latitude: number
  longitude: number
}

interface NominatimResponse {
  lat: string
  lon: string
  display_name: string
}

/**
 * Geocodes a full address using Nominatim API
 * Returns latitude and longitude coordinates
 */
export async function geocodeAddress(
  address: string,
  city: string,
  state: string,
  postalCode?: string,
  country: string = 'US'
): Promise<GeocodeResult | null> {
  try {
    // Build the search query with all address components
    const searchParams: Record<string, string> = {
      street: address,
      city,
      state,
      country,
      format: 'json',
      limit: '1'
    }

    if (postalCode) {
      searchParams.postalcode = postalCode
    }

    const nominatimUrl =
      `https://nominatim.openstreetmap.org/search?` +
      new URLSearchParams(searchParams)

    console.log(`Geocoding address: ${address}, ${city}, ${state} ${postalCode || ''}`)

    const response = await fetch(nominatimUrl, {
      headers: {
        'User-Agent': 'PlayCircle/1.0 (contact@playcircle.com)'
      }
    })

    if (!response.ok) {
      console.error('Nominatim API error:', response.statusText)
      return null
    }

    const data = await response.json() as NominatimResponse[]

    if (!data || data.length === 0) {
      console.error(`No geocoding results found for address: ${address}, ${city}, ${state}`)
      return null
    }

    const latitude = parseFloat(data[0].lat)
    const longitude = parseFloat(data[0].lon)

    console.log(`✓ Geocoded to: ${latitude}, ${longitude}`)
    console.log(`  Full location: ${data[0].display_name}`)

    return {
      latitude,
      longitude
    }
  } catch (error) {
    console.error('Error geocoding address:', error)
    return null
  }
}
