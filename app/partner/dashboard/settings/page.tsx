'use client'

import React, { useState } from 'react'
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
  Phone,
  Mail,
  MapPin
} from 'lucide-react'

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('company')
  const [isEditing, setIsEditing] = useState(false)

  const [settings, setSettings] = useState({
    company_name: 'Elite Tennis Club',
    email: 'admin@elitetennisclub.com',
    phone: '(212) 555-0123',
    website: 'https://elitetennisclub.com',
    description: 'Premier tennis facility offering world-class courts and professional instruction for players of all levels.',
    address: '123 Elite Boulevard',
    city: 'New York',
    state: 'NY',
    zip_code: '10001',
    country: 'United States',
  })

  const tabs = [
    { id: 'company', label: 'Company Info', icon: Building2 },
    { id: 'account', label: 'Account', icon: User },
    { id: 'notifications', label: 'Notifications', icon: Bell },
    { id: 'billing', label: 'Billing', icon: CreditCard },
    { id: 'security', label: 'Security', icon: Shield },
    { id: 'integrations', label: 'Integrations', icon: Globe },
  ]

  const renderCompanyInfo = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Company Information</h2>
        <motion.button 
          onClick={() => setIsEditing(!isEditing)}
          className={`px-6 py-3 rounded-2xl flex items-center font-bold text-sm transition-all ${
            isEditing ? 'bg-neutral-600 text-white' : 'bg-[#456882] hover:bg-[#3a5670] text-white'
          }`}
        >
          <Edit className="h-4 w-4 mr-2" />
          {isEditing ? 'CANCEL' : 'EDIT'}
        </motion.button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Company Name</label>
            <input
              type="text"
              value={settings.company_name}
              disabled={!isEditing}
              className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Email</label>
            <input
              type="email"
              value={settings.email}
              disabled={!isEditing}
              className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Phone</label>
            <input
              type="tel"
              value={settings.phone}
              disabled={!isEditing}
              className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Website</label>
            <input
              type="url"
              value={settings.website}
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
              disabled={!isEditing}
              className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">City</label>
              <input
                type="text"
                value={settings.city}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-2xl text-white placeholder-gray-500 focus:outline-none transition-all disabled:opacity-50"
                style={{
                  background: 'rgba(26, 32, 53, 0.5)',
                  border: '1px solid rgba(59, 130, 246, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-400 mb-2">State</label>
              <input
                type="text"
                value={settings.state}
                disabled={!isEditing}
                className="w-full px-4 py-3 rounded-2xl text-white placeholder-gray-500 focus:outline-none transition-all disabled:opacity-50"
                style={{
                  background: 'rgba(26, 32, 53, 0.5)',
                  border: '1px solid rgba(59, 130, 246, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-400 mb-2">Description</label>
            <textarea
              value={settings.description}
              disabled={!isEditing}
              rows={4}
              className="w-full px-4 py-3 rounded-2xl bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[#456882] focus:ring-1 focus:ring-[#456882] transition-all disabled:opacity-50 resize-none"
            />
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="flex justify-end">
          <motion.button 
            className="text-white bg-[#456882] hover:bg-[#3a5670] px-8 py-3 rounded-2xl flex items-center font-bold text-sm transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Save className="h-4 w-4 mr-2" />
            SAVE CHANGES
          </motion.button>
        </div>
      )}
    </div>
  )

  const renderContent = () => {
    switch (activeTab) {
      case 'company':
        return renderCompanyInfo()
      case 'account':
        return (
          <div className="text-center py-12">
            <User className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Account Settings</h3>
            <p className="text-neutral-400">Manage your account preferences and profile</p>
          </div>
        )
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