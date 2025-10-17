'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { supabase } from '@/lib/supabase'

export default function PartnerEntryPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [companyName, setCompanyName] = useState('')
  const [fullName, setFullName] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Application overlay states
  const [showApplicationOverlay, setShowApplicationOverlay] = useState(false)
  const [showApplicationForm, setShowApplicationForm] = useState(false)
  const [applicationStatus, setApplicationStatus] = useState<'none' | 'pending' | 'under_review' | 'rejected'>('none')
  const [rejectionReason, setRejectionReason] = useState('')
  const [currentUserId, setCurrentUserId] = useState<string | null>(null)

  // Application form fields
  const [appPhone, setAppPhone] = useState('')
  const [appWebsite, setAppWebsite] = useState('')
  const [appAddress, setAppAddress] = useState('')
  const [appCity, setAppCity] = useState('')
  const [appState, setAppState] = useState('')
  const [appPostalCode, setAppPostalCode] = useState('')
  const [appBusinessType, setAppBusinessType] = useState<'venue' | 'club' | 'academy' | 'other'>('venue')
  const [appDescription, setAppDescription] = useState('')
  const [appYearsInBusiness, setAppYearsInBusiness] = useState('')
  const [appNumberOfCourts, setAppNumberOfCourts] = useState('')

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Sign in with Supabase
      const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (authError) {
        setError(authError.message)
        setLoading(false)
        return
      }

      if (!authData.user) {
        setError('Failed to sign in. Please try again.')
        setLoading(false)
        return
      }

      // Store user ID and email for application form
      setCurrentUserId(authData.user.id)
      setEmail(email)

      // Check if user is a partner
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('partner, full_name')
        .eq('id', authData.user.id)
        .single()

      if (profileError) {
        setError('Failed to verify partner status: ' + profileError.message)
        await supabase.auth.signOut()
        setLoading(false)
        return
      }

      // If already a partner, allow access
      if (profileData && profileData.partner) {
        window.location.href = '/partner/dashboard'
        return
      }

      // Set full name from profile if available
      if (profileData?.full_name) {
        setFullName(profileData.full_name)
      }

      // Check if user has an application
      const { data: applicationData, error: applicationError } = await supabase
        .from('partner_applications')
        .select('status,rejection_reason,company_name')
        .eq('user_id', authData.user.id)
        .maybeSingle()

      if (applicationError) {
        console.error('Application query error:', applicationError)
        setError('Failed to check application status: ' + applicationError.message)
        await supabase.auth.signOut()
        setLoading(false)
        return
      }

      // If no application exists, show overlay to create one
      if (!applicationData) {
        setApplicationStatus('none')
        setShowApplicationOverlay(true)
        setLoading(false)
        return
      }

      // Set company name from application if available
      if (applicationData.company_name) {
        setCompanyName(applicationData.company_name)
      }

      // Check application status and show appropriate overlay
      if (applicationData.status === 'pending') {
        setApplicationStatus('pending')
        setShowApplicationOverlay(true)
        setLoading(false)
        return
      }

      if (applicationData.status === 'under_review') {
        setApplicationStatus('under_review')
        setShowApplicationOverlay(true)
        setLoading(false)
        return
      }

      if (applicationData.status === 'rejected') {
        setApplicationStatus('rejected')
        setRejectionReason(applicationData.rejection_reason || 'Not specified')
        setShowApplicationOverlay(true)
        setLoading(false)
        return
      }

      // If status is approved but partner column is still false, there might be an issue
      if (applicationData.status === 'approved') {
        setError('Your application was approved but there was an issue setting up your partner account. Please contact support.')
        await supabase.auth.signOut()
        setLoading(false)
        return
      }

      // Unknown status
      setError('Unknown application status. Please contact support.')
      await supabase.auth.signOut()
      setLoading(false)
    } catch (err: any) {
      setError(err.message || 'An error occurred during sign in')
      setLoading(false)
    }
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validate password match
    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    try {
      // Sign up with Supabase Auth
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            company_name: companyName,
          }
        }
      })

      if (authError) {
        setError(authError.message)
        setLoading(false)
        return
      }

      if (!authData.user) {
        setError('Failed to create account. Please try again.')
        setLoading(false)
        return
      }

      // Wait a moment for the profile to be created by the auth trigger
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Update profile with full name (but keep partner = false for now)
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          full_name: fullName,
        })
        .eq('id', authData.user.id)

      if (profileError) {
        setError('Failed to update profile: ' + profileError.message)
        setLoading(false)
        return
      }

      // Create partner application record
      const { error: applicationError } = await supabase
        .from('partner_applications')
        .insert({
          user_id: authData.user.id,
          email: email,
          company_name: companyName,
          contact_person: fullName,
          description: 'Application submitted through partner signup',
          business_type: 'venue', // Default, can be updated later
          status: 'pending'
        })

      if (applicationError) {
        setError('Failed to create application: ' + applicationError.message)
        setLoading(false)
        return
      }

      // Success - show message
      setError('')
      alert('Account created successfully! Your partner application is pending review. You can check your application status by signing in.')

      // Switch to sign in view
      switchToSignIn()

    } catch (err: any) {
      setError(err.message || 'An error occurred during sign up')
      setLoading(false)
    }
  }

  const switchToSignUp = () => {
    setIsSignUp(true)
    setError('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setCompanyName('')
    setFullName('')
  }

  const switchToSignIn = () => {
    setIsSignUp(false)
    setError('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setCompanyName('')
    setFullName('')
  }

  // Handle creating application row when user clicks "Fill Out Application"
  const handleCreateApplication = async () => {
    if (!currentUserId) return

    setLoading(true)
    try {
      // Create basic application row
      const { error: createError } = await supabase
        .from('partner_applications')
        .insert({
          user_id: currentUserId,
          email: email,
          company_name: companyName || fullName || 'To Be Provided',
          contact_person: fullName || 'To Be Provided',
          description: 'Application in progress',
          business_type: 'venue',
          status: 'pending'
        })

      if (createError) {
        setError('Failed to create application: ' + createError.message)
        setLoading(false)
        return
      }

      // Show the application form
      setShowApplicationForm(true)
      setLoading(false)
    } catch (err: any) {
      setError(err.message || 'An error occurred')
      setLoading(false)
    }
  }

  // Handle submitting the application form
  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!currentUserId) return

    setLoading(true)
    try {
      // Update the application with full details
      const { error: updateError } = await supabase
        .from('partner_applications')
        .update({
          company_name: companyName,
          phone: appPhone,
          website: appWebsite,
          address: appAddress,
          city: appCity,
          state: appState,
          postal_code: appPostalCode,
          business_type: appBusinessType,
          description: appDescription,
          years_in_business: appYearsInBusiness ? parseInt(appYearsInBusiness) : null,
          number_of_courts: appNumberOfCourts ? parseInt(appNumberOfCourts) : null,
        })
        .eq('user_id', currentUserId)

      if (updateError) {
        setError('Failed to update application: ' + updateError.message)
        setLoading(false)
        return
      }

      // Close overlay and sign out
      setShowApplicationForm(false)
      setShowApplicationOverlay(false)
      await supabase.auth.signOut()
      alert('Application submitted successfully! We will review your application and notify you once it has been processed.')
      setLoading(false)
    } catch (err: any) {
      setError(err.message || 'An error occurred')
      setLoading(false)
    }
  }

  // Handle closing overlay (sign out user)
  const handleCloseOverlay = async () => {
    setShowApplicationOverlay(false)
    setShowApplicationForm(false)
    await supabase.auth.signOut()
  }

  return (
    <>
      {/* Application Status Overlay */}
      {showApplicationOverlay && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-slate-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {!showApplicationForm ? (
              // Status Display
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold text-white">
                  {applicationStatus === 'none' && 'Partner Application Required'}
                  {applicationStatus === 'pending' && 'Application Pending'}
                  {applicationStatus === 'under_review' && 'Application Under Review'}
                  {applicationStatus === 'rejected' && 'Application Rejected'}
                </h2>

                <p className="text-slate-300 text-lg">
                  {applicationStatus === 'none' && 'To access the partner dashboard, you need to submit a partner application. Click the button below to fill out the application form.'}
                  {applicationStatus === 'pending' && 'Your partner application is currently pending review. Our team will review your submission and get back to you soon.'}
                  {applicationStatus === 'under_review' && 'Your application is currently being reviewed by our team. We will notify you of our decision soon.'}
                  {applicationStatus === 'rejected' && `Your application was rejected. Reason: ${rejectionReason}. Please contact support for more information.`}
                </p>

                <div className="flex gap-4 justify-center">
                  {applicationStatus === 'none' && (
                    <button
                      onClick={handleCreateApplication}
                      disabled={loading}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors disabled:opacity-50"
                    >
                      {loading ? 'Creating...' : 'Fill Out Application'}
                    </button>
                  )}
                  <button
                    onClick={handleCloseOverlay}
                    className="bg-slate-700 hover:bg-slate-600 text-white font-medium px-8 py-3 rounded-lg transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              // Application Form
              <form onSubmit={handleSubmitApplication} className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6">Partner Application Form</h2>

                {error && (
                  <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Company Name*</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Contact Person*</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Phone</label>
                    <input
                      type="tel"
                      value={appPhone}
                      onChange={(e) => setAppPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Website</label>
                    <input
                      type="url"
                      value={appWebsite}
                      onChange={(e) => setAppWebsite(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Business Type*</label>
                    <select
                      value={appBusinessType}
                      onChange={(e) => setAppBusinessType(e.target.value as any)}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                    >
                      <option value="venue">Venue</option>
                      <option value="club">Club</option>
                      <option value="academy">Academy</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Years in Business</label>
                    <input
                      type="number"
                      value={appYearsInBusiness}
                      onChange={(e) => setAppYearsInBusiness(e.target.value)}
                      min="0"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-medium text-white">Number of Courts*</label>
                    <input
                      type="number"
                      value={appNumberOfCourts}
                      onChange={(e) => setAppNumberOfCourts(e.target.value)}
                      required
                      min="1"
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-medium text-white">Address</label>
                    <input
                      type="text"
                      value={appAddress}
                      onChange={(e) => setAppAddress(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">City</label>
                    <input
                      type="text"
                      value={appCity}
                      onChange={(e) => setAppCity(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">State</label>
                    <input
                      type="text"
                      value={appState}
                      onChange={(e) => setAppState(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-white">Postal Code</label>
                    <input
                      type="text"
                      value={appPostalCode}
                      onChange={(e) => setAppPostalCode(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-sm font-medium text-white">Description*</label>
                    <textarea
                      value={appDescription}
                      onChange={(e) => setAppDescription(e.target.value)}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white"
                      placeholder="Tell us about your business..."
                    />
                  </div>
                </div>

                <div className="flex gap-4 justify-end">
                  <button
                    type="button"
                    onClick={handleCloseOverlay}
                    className="bg-slate-700 hover:bg-slate-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors disabled:opacity-50"
                  >
                    {loading ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}

    <div className="min-h-screen flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        {/* Background Image and Overlay Container - locked together */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            opacity: { duration: 0.8 },
            scale: { duration: 1.2 }
          }}
        >
          {/* Background Image */}
          <Image
            src="/soccer-field-aerial-view-night.jpg"
            alt="Soccer field aerial view"
            fill
            className="object-cover"
            priority
          />
          
          {/* Gradient Overlay - locked to image */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-purple-900/90 to-blue-900/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.3,
              ease: "easeOut"
            }}
          />
        </motion.div>
        
        {/* Centered Content */}
        <div className="relative z-20 flex items-center justify-center w-full h-full p-12">
          <motion.div
            className="text-center text-white space-y-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Logo */}
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -3, -5, -3, 0, 3, 5, 3, 0],
                rotate: [0, 1, 0, -1, 0, 1, 0, -1, 0]
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                scale: { duration: 0.8, delay: 0.6 },
                y: { duration: 20, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ 
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
            >
              <Image
                src="/logo.png"
                alt="PlayCircle Logo"
                width={120}
                height={120}
                className="drop-shadow-2xl"
              />
            </motion.div>
            
            {/* Main Title with Advanced Styling */}
            <motion.div
              className="space-y-4"
              style={{ 
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                transform: 'translate3d(0,0,0)'
              }}
              animate={{ 
                x: [0, -2, -3, -2, 0, 2, 3, 2, 0],
                y: [0, 2, 0, -2, -3, -2, 0, 2, 0]
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <h1 className="text-6xl lg:text-7xl font-black leading-none tracking-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">
                  PLAYCIRCLE
                </span>
                <span className="block text-4xl lg:text-5xl font-light mt-2 text-white/90 tracking-wider">
                  PARTNER DASHBOARD
                </span>
              </h1>
            </motion.div>
            
            {/* Subtitle with Enhanced Typography */}
            <motion.div 
              className="space-y-3"
              style={{ 
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
              animate={{ 
                x: [0, 1.5, 2, 1.5, 0, -1.5, -2, -1.5, 0],
                y: [0, -1, 0, 1, 1.5, 1, 0, -1, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
              <p className="text-xl lg:text-2xl font-light text-white/90 leading-relaxed mx-auto max-w-lg">
                Manage your venues, events, and connect with players in your community
              </p>
              <div className="flex items-center justify-center space-x-2 text-white/70">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                <span className="text-sm font-medium tracking-widest uppercase">
                  Professional Dashboard
                </span>
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-slate-900 p-8 relative">
        {/* Back Arrow Button */}
        <motion.button
          onClick={() => window.location.href = '/partners'}
          className="absolute top-8 left-8 text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ x: -4 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          <span className="text-sm font-medium">Back</span>
        </motion.button>

        <div className="w-full max-w-md space-y-8">
          {/* Welcome Message */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.h2
              className="text-3xl font-bold text-white mb-2"
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
              animate={{
                x: [0, 1, 1.5, 1, 0, -1, -1.5, -1, 0],
                y: [0, -1, 0, 1, 1, 1, 0, -1, 0]
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {isSignUp ? 'Create Your Account' : 'Nice to see you!'}
            </motion.h2>
            <motion.p
              className="text-slate-400"
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
              animate={{
                x: [0, -1, -1.5, -1, 0, 1, 1.5, 1, 0],
                y: [0, 1, 0, -1, -1, -1, 0, 1, 0]
              }}
              transition={{
                duration: 16,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {isSignUp ? 'Join PlayCircle as a partner' : 'Enter your email and password to sign in'}
            </motion.p>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={isSignUp ? handleSignUp : handleSignIn}
            className="space-y-6"
            key={isSignUp ? 'signup' : 'signin'}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          >
            {error && (
              <motion.div
                className="p-4 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.div>
            )}

            {isSignUp && (
              <>
                <motion.div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-medium text-white">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Your full name"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                  />
                </motion.div>

                <motion.div className="space-y-2">
                  <label htmlFor="companyName" className="block text-sm font-medium text-white">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Your company name"
                    required
                    disabled={loading}
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                  />
                </motion.div>
              </>
            )}

            <motion.div
              className="space-y-2"
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
              animate={{
                x: [0, 0.5, 1, 0.5, 0, -0.5, -1, -0.5, 0],
                y: [0, -0.5, 0, 0.5, 0.5, 0.5, 0, -0.5, 0]
              }}
              transition={{
                duration: 13,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
              />
            </motion.div>

            <motion.div
              className="space-y-2"
              style={{
                willChange: 'transform',
                backfaceVisibility: 'hidden'
              }}
              animate={{
                x: [0, -0.5, -1, -0.5, 0, 0.5, 1, 0.5, 0],
                y: [0, 0.5, 0, -0.5, -0.5, -0.5, 0, 0.5, 0]
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                required
                disabled={loading}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
              />
            </motion.div>

            {isSignUp && (
              <motion.div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors disabled:opacity-50"
                />
              </motion.div>
            )}

            {!isSignUp && (
              <motion.div
                className="flex items-center"
                style={{
                  willChange: 'transform',
                  backfaceVisibility: 'hidden'
                }}
                animate={{
                  x: [0, 1, 1.5, 1, 0, -1, -1.5, -1, 0],
                  y: [0, -0.5, 0, 0.5, 0.5, 0.5, 0, -0.5, 0]
                }}
                transition={{
                  duration: 17,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <input
                  id="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-700 rounded bg-slate-800"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-slate-300">
                  Remember me
                </label>
              </motion.div>
            )}

            <motion.button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50"
              disabled={loading}
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
              transition={{ duration: 0.2 }}
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  {isSignUp ? 'Creating Account...' : 'Signing In...'}
                </>
              ) : (
                isSignUp ? 'CREATE ACCOUNT' : 'SIGN IN'
              )}
            </motion.button>
          </motion.form>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          >
            <motion.p
              className="text-sm text-slate-400"
              animate={{
                x: [0, 0.5, 1, 0.5, 0, -0.5, -1, -0.5, 0],
                y: [0, -0.5, 0, 0.5, 0.5, 0.5, 0, -0.5, 0]
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {isSignUp ? (
                <>
                  Already have an account?{' '}
                  <button
                    onClick={switchToSignIn}
                    className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Sign In
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{' '}
                  <button
                    onClick={switchToSignUp}
                    className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Sign Up
                  </button>
                </>
              )}
            </motion.p>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="text-center text-xs text-slate-500 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{ 
              willChange: 'transform',
              backfaceVisibility: 'hidden'
            }}
          >
            <motion.p
              animate={{ 
                x: [0, -0.5, -1, -0.5, 0, 0.5, 1, 0.5, 0],
                y: [0, 0.5, 0, -0.5, -0.5, -0.5, 0, 0.5, 0]
              }}
              transition={{
                duration: 19,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              © 2025 • Made with ❤️ by PlayCircle • Digitxl Link
            </motion.p>
          </motion.div>

        </div>
      </div>
    </div>
    </>
  )
}