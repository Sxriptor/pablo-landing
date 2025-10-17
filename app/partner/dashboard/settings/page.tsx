'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  User,
  Bell,
  CreditCard,
  Shield,
  Globe,
  Save,
  Edit,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('company')
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [partnerId, setPartnerId] = useState<string | null>(null)

  const [settings, setSettings] = useState({
    company_name: '',
    email: '',
    phone: '',
    website: '',
    description: '',
    address: '',
  })

  // Store original settings for cancel functionality
  const [originalSettings, setOriginalSettings] = useState({
    company_name: '',
    email: '',
    phone: '',
    website: '',
    description: '',
    address: '',
  })

  // Account/Profile settings
  const [accountSettings, setAccountSettings] = useState({
    username: '',
    full_name: '',
    first_name: '',
    last_name: '',
    phone: '',
    bio: '',
    location: '',
  })

  // Store original account settings for cancel functionality
  const [originalAccountSettings, setOriginalAccountSettings] = useState({
    username: '',
    full_name: '',
    first_name: '',
    last_name: '',
    phone: '',
    bio: '',
    location: '',
  })

  const [profileId, setProfileId] = useState<string | null>(null)

  // Reset editing mode when switching tabs
  useEffect(() => {
    setIsEditing(false)
    setMessage(null)
  }, [activeTab])

  // Fetch partner and profile data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        
        // Get current user session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession()
        
        if (sessionError || !session) {
          setMessage({ type: 'error', text: 'Not authenticated' })
          return
        }

        // Fetch partner data
        const { data: partnerData, error: partnerError } = await supabase
          .from('partners')
          .select('*')
          .eq('user_id', session.user.id)
          .single()

        if (partnerError) {
          console.error('Error fetching partner:', partnerError)
          setMessage({ type: 'error', text: 'Failed to load partner data' })
        } else if (partnerData) {
          setPartnerId(partnerData.id)
          const fetchedSettings = {
            company_name: partnerData.company_name || '',
            email: partnerData.email || '',
            phone: partnerData.phone || '',
            website: partnerData.website || '',
            description: partnerData.description || '',
            address: partnerData.address || '',
          }
          setSettings(fetchedSettings)
          setOriginalSettings(fetchedSettings)
        }

        // Fetch profile data
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single()

        if (profileError) {
          console.error('Error fetching profile:', profileError)
        } else if (profileData) {
          setProfileId(profileData.id)
          const fetchedAccountSettings = {
            username: profileData.username || '',
            full_name: profileData.full_name || '',
            first_name: profileData.first_name || '',
            last_name: profileData.last_name || '',
            phone: profileData.phone || '',
            bio: profileData.bio || '',
            location: profileData.location || '',
          }
          setAccountSettings(fetchedAccountSettings)
          setOriginalAccountSettings(fetchedAccountSettings)
        }
      } catch (error) {
        console.error('Error:', error)
        setMessage({ type: 'error', text: 'An unexpected error occurred' })
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Handle field changes
  const handleFieldChange = (field: string, value: string) => {
    setSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Handle account field changes
  const handleAccountFieldChange = (field: string, value: string) => {
    setAccountSettings(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Save changes to database
  const handleSaveChanges = async () => {
    if (!partnerId) {
      setMessage({ type: 'error', text: 'Partner ID not found' })
      return
    }

    try {
      setSaving(true)
      setMessage(null)

      const { error } = await supabase
        .from('partners')
        .update({
          company_name: settings.company_name,
          email: settings.email,
          phone: settings.phone,
          website: settings.website,
          description: settings.description,
          address: settings.address,
        })
        .eq('id', partnerId)

      if (error) {
        console.error('Error updating partner:', error)
        setMessage({ type: 'error', text: 'Failed to save changes' })
        return
      }

      // Update original settings to current settings after successful save
      setOriginalSettings(settings)
      setMessage({ type: 'success', text: 'Changes saved successfully!' })
      setIsEditing(false)
      
      // Clear success message after 3 seconds
      setTimeout(() => setMessage(null), 3000)
    } catch (error) {
      console.error('Error:', error)
      setMessage({ type: 'error', text: 'An unexpected error occurred' })
    } finally {
      setSaving(false)
    }
  }

  // Save account changes to database
  const handleSaveAccountChanges = async () => {
    if (!profileId) {
      setMessage({ type: 'error', text: 'Profile ID not found' })
      return
    }

    try {
      setSaving(true)
      setMessage(null)

      const { error } = await supabase
        .from('profiles')
        .update({
          username: accountSettings.username,
          full_name: accountSettings.full_name,
          first_name: accountSettings.first_name,
          last_name: accountSettings.last_name,
          phone: accountSettings.phone,
          bio: accountSettings.bio,
          location: accountSettings.location,
        })
        .eq('id', profileId)

      if (error) {
        console.error('Error updating profile:', error)
        setMessage({ type: 'error', text: 'Failed to save changes' })
        return
      }

      // Update original account settings to current settings after successful save
      setOriginalAccountSettings(accountSettings)
      setMessage({ type: 'success', text: 'Account updated successfully!' })
      setIsEditing(false)
      
      // Clear success message after 3 seconds
      setTimeout(() => setMessage(null), 3000)
    } catch (error) {
      console.error('Error:', error)
      setMessage({ type: 'error', text: 'An unexpected error occurred' })
    } finally {
      setSaving(false)
    }
  }

  const tabs = [
    { id: 'company', label: 'Company Info', icon: Building2 },
    { id: 'account', label: 'Account', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'integrations', label: 'Integrations', icon: Globe },
  ]

  const renderCompanyInfo = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-[#456882]" />
        </div>
      )
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Company Information</h2>
          <motion.button 
            onClick={() => {
              if (isEditing) {
                // Revert to original settings
                setSettings(originalSettings)
                setIsEditing(false)
                setMessage(null)
              } else {
                setIsEditing(true)
              }
            }}
            className={`px-6 py-3 rounded-2xl flex items-center font-bold text-sm transition-all ${
              isEditing ? 'bg-neutral-600 text-white' : 'bg-[#456882] hover:bg-[#3a5670] text-white'
            }`}
          >
            <Edit className="h-4 w-4 mr-2" />
            {isEditing ? 'CANCEL' : 'EDIT'}
          </motion.button>
        </div>

        {/* Success/Error Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-2 p-4 rounded-2xl ${
              message.type === 'success' 
                ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}
          >
            {message.type === 'success' ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <span className="font-medium">{message.text}</span>
          </motion.div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Company Name</label>
              <input
                type="text"
                value={settings.company_name}
                onChange={(e) => handleFieldChange('company_name', e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) => handleFieldChange('email', e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Phone</label>
              <input
                type="tel"
                value={settings.phone}
                onChange={(e) => handleFieldChange('phone', e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Website</label>
              <input
                type="url"
                value={settings.website}
                onChange={(e) => handleFieldChange('website', e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Address</label>
              <input
                type="text"
                value={settings.address}
                onChange={(e) => handleFieldChange('address', e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Description</label>
              <textarea
                value={settings.description}
                onChange={(e) => handleFieldChange('description', e.target.value)}
                disabled={!isEditing}
                rows={8}
                className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50 resize-none"
              />
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end">
            <motion.button 
              onClick={handleSaveChanges}
              disabled={saving}
              className="text-white bg-[#456882] hover:bg-[#3a5670] disabled:bg-neutral-600 disabled:cursor-not-allowed px-8 py-3 rounded-2xl flex items-center font-bold text-sm transition-colors"
              whileHover={!saving ? { scale: 1.05 } : {}}
              whileTap={!saving ? { scale: 0.95 } : {}}
            >
              {saving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  SAVING...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  SAVE CHANGES
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>
    )
  }

  const renderAccountInfo = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-[#456882]" />
        </div>
      )
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Account Settings</h2>
          <motion.button 
            onClick={() => {
              if (isEditing) {
                // Revert to original account settings
                setAccountSettings(originalAccountSettings)
                setIsEditing(false)
                setMessage(null)
              } else {
                setIsEditing(true)
              }
            }}
            className={`px-6 py-3 rounded-2xl flex items-center font-bold text-sm transition-all ${
              isEditing ? 'bg-neutral-600 text-white' : 'bg-[#456882] hover:bg-[#3a5670] text-white'
            }`}
          >
            <Edit className="h-4 w-4 mr-2" />
            {isEditing ? 'CANCEL' : 'EDIT'}
          </motion.button>
        </div>

        {/* Success/Error Message */}
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-center gap-2 p-4 rounded-2xl ${
              message.type === 'success' 
                ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                : 'bg-red-500/10 border border-red-500/20 text-red-400'
            }`}
          >
            {message.type === 'success' ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <span className="font-medium">{message.text}</span>
          </motion.div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Username</label>
              <input
                type="text"
                value={accountSettings.username}
                onChange={(e) => handleAccountFieldChange('username', e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Full Name</label>
              <input
                type="text"
                value={accountSettings.full_name}
                onChange={(e) => handleAccountFieldChange('full_name', e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">First Name</label>
                <input
                  type="text"
                  value={accountSettings.first_name}
                  onChange={(e) => handleAccountFieldChange('first_name', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-400 mb-2">Last Name</label>
                <input
                  type="text"
                  value={accountSettings.last_name}
                  onChange={(e) => handleAccountFieldChange('last_name', e.target.value)}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Phone</label>
              <input
                type="tel"
                value={accountSettings.phone}
                onChange={(e) => handleAccountFieldChange('phone', e.target.value)}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Location</label>
              <input
                type="text"
                value={accountSettings.location}
                onChange={(e) => handleAccountFieldChange('location', e.target.value)}
                disabled={!isEditing}
                placeholder="City, State, Country"
                className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">Bio</label>
              <textarea
                value={accountSettings.bio}
                onChange={(e) => handleAccountFieldChange('bio', e.target.value)}
                disabled={!isEditing}
                rows={8}
                placeholder="Tell us about yourself..."
                className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50 resize-none"
              />
            </div>
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end">
            <motion.button 
              onClick={handleSaveAccountChanges}
              disabled={saving}
              className="text-white bg-[#456882] hover:bg-[#3a5670] disabled:bg-neutral-600 disabled:cursor-not-allowed px-8 py-3 rounded-2xl flex items-center font-bold text-sm transition-colors"
              whileHover={!saving ? { scale: 1.05 } : {}}
              whileTap={!saving ? { scale: 0.95 } : {}}
            >
              {saving ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  SAVING...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  SAVE CHANGES
                </>
              )}
            </motion.button>
          </div>
        )}
      </div>
    )
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'company':
        return renderCompanyInfo()
      case 'account':
        return renderAccountInfo()
      case 'notifications':
        return (
          <div className="text-center py-12">
            <Bell className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Notification Settings</h3>
            <p className="text-neutral-400">Configure how you receive notifications</p>
          </div>
        )
      case 'billing':
        return (
          <div className="text-center py-12">
            <CreditCard className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Billing & Payments</h3>
            <p className="text-neutral-400">Manage your subscription and payment methods</p>
          </div>
        )
      case 'security':
        return (
          <div className="text-center py-12">
            <Shield className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Security Settings</h3>
            <p className="text-neutral-400">Manage passwords and security preferences</p>
          </div>
        )
      case 'integrations':
        return (
          <div className="text-center py-12">
            <Globe className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Integrations</h3>
            <p className="text-neutral-400">Connect with third-party services and APIs</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>
        <p className="text-neutral-400">Manage your account and business preferences</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div 
            className="rounded-3xl p-6 bg-neutral-900/90 border border-neutral-800"
          >
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                const isActive = activeTab === tab.id
                
                return (
                  <motion.button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 text-sm font-semibold rounded-2xl transition-all ${
                      isActive
                        ? 'text-white bg-[#456882]'
                        : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                    }`}
                    whileHover={!isActive ? { x: 4 } : {}}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : 'bg-transparent'}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="ml-3">{tab.label}</span>
                  </motion.button>
                )
              })}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div 
            className="rounded-3xl p-8 bg-neutral-900/90 border border-neutral-800"
          >
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}