interface GeocodeResult {
  latitude: number
  longitude: number
  displayName: string
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
    // Build a combined query string for more accurate results
    // Format: "street, city, state postalcode"
    let queryString = `${address}, ${city}, ${state}`
    if (postalCode) {
      queryString += ` ${postalCode}`
    }

    const nominatimUrl =
      `https://nominatim.openstreetmap.org/search?` +
      new URLSearchParams({
        q: queryString,
        format: 'json',
        limit: '1',
        countrycodes: country.toLowerCase()
      })

    console.log(`Geocoding address: ${queryString}`)
    console.log(`Request URL: ${nominatimUrl}`)

    const response = await fetch(nominatimUrl, {
      headers: {
        'User-Agent': 'PlayCircle/1.0 (contact@playcircleapp.com)'
      }
    })

    if (!response.ok) {
      console.error('Nominatim API error:', response.statusText)
      return null
    }

    const data = await response.json() as NominatimResponse[]

    if (!data || data.length === 0) {
      console.error(`No geocoding results found for: ${queryString}`)
      return null
    }

    const latitude = parseFloat(data[0].lat)
    const longitude = parseFloat(data[0].lon)

    console.log(`✓ Geocoded successfully!`)
    console.log(`  Coordinates: ${latitude}, ${longitude}`)
    console.log(`  Matched location: ${data[0].display_name}`)

    return {
      latitude,
      longitude,
      displayName: data[0].display_name
    }
  } catch (error) {
    console.error('Error geocoding address:', error)
    return null
  }
}
