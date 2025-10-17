# Partner Dashboard Overlay Integration Guide

## Overview
Four comprehensive overlay components have been created for the partner dashboard:

1. **AddVenueOverlay** - Create new venue locations
2. **AddCourtOverlay** - Add courts to existing venues  
3. **CreateEventOverlay** - Organize tournaments and competitions
4. **CreateClassOverlay** - Set up lessons and training programs

## Quick Integration

### 1. Import the Overlays
```tsx
import {
  AddVenueOverlay,
  AddCourtOverlay,
  CreateEventOverlay,
  CreateClassOverlay
} from '@/components/partner/overlays'
```

### 2. Add State Management
```tsx
const [activeOverlay, setActiveOverlay] = useState<string | null>(null)
```

### 3. Add Trigger Buttons
```tsx
// Example: Add to your dashboard toolbar or action buttons
<Button onClick={() => setActiveOverlay('venue')}>
  <Building2 className="h-4 w-4 mr-2" />
  Add Venue
</Button>

<Button onClick={() => setActiveOverlay('court')}>
  <MapPin className="h-4 w-4 mr-2" />
  Add Court
</Button>

<Button onClick={() => setActiveOverlay('event')}>
  <Trophy className="h-4 w-4 mr-2" />
  Create Event
</Button>

<Button onClick={() => setActiveOverlay('class')}>
  <GraduationCap className="h-4 w-4 mr-2" />
  Create Class
</Button>
```

### 4. Add the Overlay Components
```tsx
{/* Add these to your component JSX */}
<AddVenueOverlay
  isOpen={activeOverlay === 'venue'}
  onClose={() => setActiveOverlay(null)}
  onSubmit={handleVenueSubmit}
/>

<AddCourtOverlay
  isOpen={activeOverlay === 'court'}
  onClose={() => setActiveOverlay(null)}
  onSubmit={handleCourtSubmit}
  venues={venues} // Pass your venues data
/>

<CreateEventOverlay
  isOpen={activeOverlay === 'event'}
  onClose={() => setActiveOverlay(null)}
  onSubmit={handleEventSubmit}
  venues={venues}
  courts={courts} // Pass your courts data
/>

<CreateClassOverlay
  isOpen={activeOverlay === 'class'}
  onClose={() => setActiveOverlay(null)}
  onSubmit={handleClassSubmit}
  venues={venues}
  courts={courts}
/>
```

### 5. Handle Form Submissions
```tsx
const handleVenueSubmit = async (venueData: any) => {
  try {
    // Send to your API
    const response = await fetch('/api/venues', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(venueData)
    })
    
    if (response.ok) {
      // Refresh venues list
      // Show success message
      toast.success('Venue created successfully!')
    }
  } catch (error) {
    toast.error('Failed to create venue')
  }
}

// Similar handlers for court, event, and class submissions
```

## Component Features

### AddVenueOverlay
- **Fields**: Name, address, contact info, amenities, operating hours
- **Features**: Image upload, amenity selection, address validation
- **Validation**: Required fields marked with *

### AddCourtOverlay  
- **Fields**: Name, venue selection, sport type, surface, pricing, availability
- **Features**: Court features (indoor/lighting), weekly schedule, dynamic venue filtering
- **Validation**: Venue selection required, time validation

### CreateEventOverlay
- **Fields**: Event details, venue/court selection, schedule, participants, pricing
- **Features**: Multi-court selection, skill level filtering, requirement toggles
- **Validation**: Date/time validation, participant limits

### CreateClassOverlay
- **Fields**: Class details, instructor info, schedule, capacity, curriculum
- **Features**: Recurring schedule options, package pricing, equipment settings
- **Validation**: Schedule conflicts, capacity limits

## Styling Notes

All overlays use the existing design system:
- **Colors**: Primary color `#456882` with opacity variations
- **Background**: Dark theme with blur effects
- **Typography**: Consistent with dashboard fonts
- **Spacing**: Standard padding and margins
- **Animations**: Smooth transitions and hover effects

## Data Structure Examples

### Venue Data
```typescript
{
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
  image?: File
  operatingHours: {
    [day: string]: {
      open: string
      close: string
      closed: boolean
    }
  }
}
```

### Court Data
```typescript
{
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
    [day: string]: {
      available: boolean
      openTime: string
      closeTime: string
    }
  }
}
```

## Demo Component

A complete demo component is available at `components/partner/OverlayDemo.tsx` showing:
- All four overlays in action
- Mock data integration
- Console logging of form submissions
- Usage instructions and integration tips

## Next Steps

1. **Backend Integration**: Connect form submissions to your API endpoints
2. **Data Validation**: Add server-side validation for all form fields  
3. **Error Handling**: Implement proper error states and user feedback
4. **Loading States**: Add loading indicators during form submission
5. **Success Feedback**: Show confirmation messages and update UI state
6. **Permissions**: Add role-based access control for different overlay types

## Customization

Each overlay can be customized by:
- Modifying field requirements and validation rules
- Adding/removing form fields as needed
- Adjusting styling to match your brand
- Extending with additional features like file uploads or integrations