'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { supabase } from '../../../lib/supabase'
import { Loader2, Save, AlertCircle, CheckCircle } from 'lucide-react'
import type { Partner } from '../../../lib/types'

export default function SettingsPage() {
  const [partner, setPartner] = useState<Partner | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  const [formData, setFormData] = useState({
    company_name: '',
    email: '',
    phone: '',
    address: '',
    website: '',
    description: '',
  })

  useEffect(() => {
    fetchPartnerData()
  }, [])

  const fetchPartnerData = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return

      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .eq('user_id', session.user.id)
        .single()

      if (error) throw error

      setPartner(data)
      setFormData({
        company_name: data.company_name || '',
        email: data.email || '',
        phone: data.phone || '',
        address: data.address || '',
        website: data.website || '',
        description: data.description || '',
      })
    } catch (error) {
      console.error('Error fetching partner data:', error)
      setMessage({ type: 'error', text: 'Failed to load partner data' })
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSave = async () => {
    if (!partner) return

    setSaving(true)
    setMessage(null)

    try {
      const { error } = await supabase
        .from('partners')
        .update(formData)
        .eq('id', partner.id)

      if (error) throw error

      setMessage({ type: 'success', text: 'Settings saved successfully!' })
      await fetchPartnerData() // Refresh data
    } catch (error) {
      console.error('Error saving settings:', error)
      setMessage({ type: 'error', text: 'Failed to save settings. Please try again.' })
    } finally {
      setSaving(false)
    }
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    window.location.href = '/login'
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your partner account and preferences
        </p>
      </div>

      {/* Status Alert */}
      {partner && (
        <Alert className={
          partner.status === 'approved' ? 'border-green-200 bg-green-50' :
          partner.status === 'pending' ? 'border-yellow-200 bg-yellow-50' :
          'border-red-200 bg-red-50'
        }>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Your partner status is <strong>{partner.status}</strong>.
            {partner.status === 'pending' && ' Your application is under review.'}
            {partner.status === 'rejected' && ' Please contact support for more information.'}
            {partner.status === 'approved' && ' You have full access to all partner features.'}
          </AlertDescription>
        </Alert>
      )}

      {/* Success/Error Messages */}
      {message && (
        <Alert variant={message.type === 'error' ? 'destructive' : 'default'}>
          {message.type === 'success' ? (
            <CheckCircle className="h-4 w-4" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          <AlertDescription>{message.text}</AlertDescription>
        </Alert>
      )}

      {/* Company Information */}
      <Card>
        <CardHeader>
          <CardTitle>Company Information</CardTitle>
          <CardDescription>
            Update your company details and contact information
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="company_name">Company Name</Label>
              <Input
                id="company_name"
                value={formData.company_name}
                onChange={(e) => handleInputChange('company_name', e.target.value)}
                placeholder="Your Company Name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="contact@company.com"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                value={formData.website}
                onChange={(e) => handleInputChange('website', e.target.value)}
                placeholder="https://www.company.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="123 Main St, City, State 12345"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Tell us about your company and facilities..."
              rows={4}
            />
          </div>

          <Button onClick={handleSave} disabled={saving}>
            {saving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </CardContent>
      </Card>

      {/* Account Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
          <CardDescription>
            Manage your account settings and access
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Sign Out</h4>
              <p className="text-sm text-muted-foreground">
                Sign out of your partner dashboard
              </p>
            </div>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Support</h4>
              <p className="text-sm text-muted-foreground">
                Need help? Contact our partner support team
              </p>
            </div>
            <Button variant="outline">
              Contact Support
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}