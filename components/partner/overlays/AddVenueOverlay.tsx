'use client'

import { useState, useEffect } from 'react'
import { Building2, MapPin, Upload, X, Home } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'


interface AddVenueOverlayProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (venueData: any) => void
}

export function AddVenueOverlay({ isOpen, onClose, onSubmit }: AddVenueOverlayProps) {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    website: '',
    description: '',
    amenities: [] as string[],
    operatingHours: {
      monday: { open: '06:00', close: '22:00', closed: false },
      tuesday: { open: '06:00', close: '22:00', closed: false },
      wednesday: { open: '06:00', close: '22:00', closed: false },
      thursday: { open: '06:00', close: '22:00', closed: false },
      friday: { open: '06:00', close: '22:00', closed: false },
      saturday: { open: '08:00', close: '20:00', closed: false },
      sunday: { open: '08:00', close: '20:00', closed: false },
    }
  })

  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [partnerData, setPartnerData] = useState<any>(null)

  // US States list with abbreviations
  const usStates = [
    { code: 'AL', name: 'Alabama' },
    { code: 'AK', name: 'Alaska' },
    { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' },
    { code: 'CA', name: 'California' },
    { code: 'CO', name: 'Colorado' },
    { code: 'CT', name: 'Connecticut' },
    { code: 'DE', name: 'Delaware' },
    { code: 'FL', name: 'Florida' },
    { code: 'GA', name: 'Georgia' },
    { code: 'HI', name: 'Hawaii' },
    { code: 'ID', name: 'Idaho' },
    { code: 'IL', name: 'Illinois' },
    { code: 'IN', name: 'Indiana' },
    { code: 'IA', name: 'Iowa' },
    { code: 'KS', name: 'Kansas' },
    { code: 'KY', name: 'Kentucky' },
    { code: 'LA', name: 'Louisiana' },
    { code: 'ME', name: 'Maine' },
    { code: 'MD', name: 'Maryland' },
    { code: 'MA', name: 'Massachusetts' },
    { code: 'MI', name: 'Michigan' },
    { code: 'MN', name: 'Minnesota' },
    { code: 'MS', name: 'Mississippi' },
    { code: 'MO', name: 'Missouri' },
    { code: 'MT', name: 'Montana' },
    { code: 'NE', name: 'Nebraska' },
    { code: 'NV', name: 'Nevada' },
    { code: 'NH', name: 'New Hampshire' },
    { code: 'NJ', name: 'New Jersey' },
    { code: 'NM', name: 'New Mexico' },
    { code: 'NY', name: 'New York' },
    { code: 'NC', name: 'North Carolina' },
    { code: 'ND', name: 'North Dakota' },
    { code: 'OH', name: 'Ohio' },
    { code: 'OK', name: 'Oklahoma' },
    { code: 'OR', name: 'Oregon' },
    { code: 'PA', name: 'Pennsylvania' },
    { code: 'RI', name: 'Rhode Island' },
    { code: 'SC', name: 'South Carolina' },
    { code: 'SD', name: 'South Dakota' },
    { code: 'TN', name: 'Tennessee' },
    { code: 'TX', name: 'Texas' },
    { code: 'UT', name: 'Utah' },
    { code: 'VT', name: 'Vermont' },
    { code: 'VA', name: 'Virginia' },
    { code: 'WA', name: 'Washington' },
    { code: 'WV', name: 'West Virginia' },
    { code: 'WI', name: 'Wisconsin' },
    { code: 'WY', name: 'Wyoming' }
  ]

  // Mock function to get partner data - replace with actual API call
  const fetchPartnerData = async () => {
    // This would be replaced with actual Supabase query
    const mockPartnerData = {
      address: '123 Business Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105'
    }
    setPartnerData(mockPartnerData)
  }

  useEffect(() => {
    if (isOpen) {
      fetchPartnerData()
    }
  }, [isOpen])

  const usePartnerAddress = () => {
    if (partnerData) {
      setFormData(prev => ({
        ...prev,
        address: partnerData.address,
        city: partnerData.city,
        state: partnerData.state,
        zipCode: partnerData.zipCode
      }))
    }
  }

  const amenityOptions = [
    'Parking', 'Restrooms', 'Locker Rooms', 'Pro Shop', 'Cafe/Restaurant',
    'Equipment Rental', 'Lighting', 'Air Conditioning', 'WiFi', 'Seating Area'
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleAmenityToggle = (amenity: string) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ ...formData, image: selectedImage })
    onClose()
    // Reset form
    setFormData({
      name: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phone: '',
      email: '',
      website: '',
      description: '',
      amenities: [],
      operatingHours: {
        monday: { open: '06:00', close: '22:00', closed: false },
        tuesday: { open: '06:00', close: '22:00', closed: false },
        wednesday: { open: '06:00', close: '22:00', closed: false },
        thursday: { open: '06:00', close: '22:00', closed: false },
        friday: { open: '06:00', close: '22:00', closed: false },
        saturday: { open: '08:00', close: '20:00', closed: false },
        sunday: { open: '08:00', close: '20:00', closed: false },
      }
    })
    setSelectedImage(null)
    setImagePreview(null)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="!max-w-6xl max-h-[90vh] overflow-y-auto w-[95vw]"
        style={{
          background: 'rgba(5, 10, 15, 0.95)',
          border: '1px solid rgba(69, 104, 130, 0.3)',
          backdropFilter: 'blur(20px)'
        }}
        showCloseButton={false}
      >
        <DialogHeader className="relative">
          <button
            onClick={onClose}
            className="absolute right-0 top-0 p-2 text-gray-400 hover:text-white transition-colors rounded-lg"
          >
            <X className="h-5 w-5" />
          </button>
          <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3">
            <div className="p-2 rounded-xl" style={{ background: 'rgba(69, 104, 130, 0.2)' }}>
              <Building2 className="h-6 w-6" style={{ color: '#456882' }} />
            </div>
            Add New Venue
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            Create a new venue to start hosting matches and events
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Venue Name *
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter venue name"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder-gray-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <Input
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                  className="bg-white/5 border-white/10 text-white placeholder-gray-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Street Address *
              </label>
              <div className="flex gap-2">
                <Input
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="123 Sports Avenue"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder-gray-500 flex-1"
                />
                <Button
                  type="button"
                  onClick={usePartnerAddress}
                  variant="outline"
                  className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white whitespace-nowrap"
                  disabled={!partnerData}
                >
                  <Home className="h-4 w-4 mr-2" />
                  Use Your Address
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  City *
                </label>
                <Input
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="City"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder-gray-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  State *
                </label>
                <select
                  value={formData.state}
                  onChange={(e) => handleInputChange('state', e.target.value)}
                  required
                  className="w-full h-9 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select state...</option>
                  {usStates.map((state) => (
                    <option key={state.code} value={state.code} className="bg-gray-800">
                      {state.code} - {state.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  ZIP Code *
                </label>
                <Input
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  placeholder="12345"
                  required
                  className="bg-white/5 border-white/10 text-white placeholder-gray-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="venue@example.com"
                  className="bg-white/5 border-white/10 text-white placeholder-gray-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Website
                </label>
                <Input
                  value={formData.website}
                  onChange={(e) => handleInputChange('website', e.target.value)}
                  placeholder="https://venue-website.com"
                  className="bg-white/5 border-white/10 text-white placeholder-gray-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe your venue, facilities, and what makes it special..."
                rows={3}
                className="bg-white/5 border-white/10 text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Venue Image */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Venue Image</h3>
            
            <div className="border-2 border-dashed border-white/20 rounded-xl p-6">
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Venue preview"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedImage(null)
                      setImagePreview(null)
                    }}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ) : (
                <div className="text-center">
                  <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-300 mb-2">Upload venue image</p>
                  <p className="text-sm text-gray-500 mb-4">PNG, JPG up to 10MB</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="venue-image"
                  />
                  <label
                    htmlFor="venue-image"
                    className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white cursor-pointer transition-all hover:scale-105"
                    style={{
                      background: '#456882',
                      boxShadow: '0 4px 12px rgba(69, 104, 130, 0.3)'
                    }}
                  >
                    Choose File
                  </label>
                </div>
              )}
            </div>
          </div>

          {/* Amenities */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Amenities</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {amenityOptions.map((amenity) => (
                <button
                  key={amenity}
                  type="button"
                  onClick={() => handleAmenityToggle(amenity)}
                  className={`p-3 rounded-xl text-sm font-medium transition-all ${
                    formData.amenities.includes(amenity)
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                  style={{
                    background: formData.amenities.includes(amenity)
                      ? '#456882'
                      : 'rgba(69, 104, 130, 0.1)',
                    border: `1px solid ${formData.amenities.includes(amenity)
                      ? '#456882'
                      : 'rgba(69, 104, 130, 0.2)'}`
                  }}
                >
                  {amenity}
                </button>
              ))}
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-4 pt-6 border-t border-white/10">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="bg-white/5 border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="text-white"
              style={{
                background: '#456882',
                boxShadow: '0 4px 12px rgba(69, 104, 130, 0.3)'
              }}
            >
              Create Venue
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}