'use client'

import { useState } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function PartnerRegistrationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    venueName: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [step, setStep] = useState(1) // 1: Personal Info, 2: Venue Info, 3: Account Setup
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleNextStep = () => {
    setError('')
    
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email) {
        setError('Please fill in all personal information fields.')
        return
      }
      setStep(2)
    } else if (step === 2) {
      if (!formData.venueName || !formData.address || !formData.city) {
        setError('Please fill in all venue information fields.')
        return
      }
      setStep(3)
    }
  }

  const handlePrevStep = () => {
    setError('')
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long.')
      setLoading(false)
      return
    }

    // Simulate registration
    setTimeout(() => {
      // Redirect to partner dashboard demo
      window.open('/partner-demo', '_blank')
      setLoading(false)
    }, 2000)
  }

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white mb-1">
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="John"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white mb-1">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Doe"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="john@venue.com"
                required
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-white mb-1">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="(555) 123-4567"
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
              />
            </div>
          </motion.div>
        )
      
      case 2:
        return (
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <label htmlFor="venueName" className="block text-sm font-medium text-white mb-1">
                Venue Name
              </label>
              <input
                id="venueName"
                name="venueName"
                type="text"
                value={formData.venueName}
                onChange={handleInputChange}
                placeholder="Elite Sports Complex"
                required
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-white mb-1">
                Street Address
              </label>
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="123 Sports Ave"
                required
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-white mb-1">
                  City
                </label>
                <input
                  id="city"
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="New York"
                  required
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-white mb-1">
                  State
                </label>
                <input
                  id="state"
                  name="state"
                  type="text"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="NY"
                  className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-white mb-1">
                ZIP Code
              </label>
              <input
                id="zipCode"
                name="zipCode"
                type="text"
                value={formData.zipCode}
                onChange={handleInputChange}
                placeholder="10001"
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
              />
            </div>
          </motion.div>
        )
      
      case 3:
        return (
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Create a secure password"
                required
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-white mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                required
                className="w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-sm"
              />
            </div>
            <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
              <h4 className="text-white font-medium mb-2">Account Summary</h4>
              <div className="text-sm text-slate-300 space-y-1">
                <p><span className="text-slate-400">Name:</span> {formData.firstName} {formData.lastName}</p>
                <p><span className="text-slate-400">Email:</span> {formData.email}</p>
                <p><span className="text-slate-400">Venue:</span> {formData.venueName}</p>
                <p><span className="text-slate-400">Location:</span> {formData.city}, {formData.state}</p>
              </div>
            </div>
          </motion.div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Hero Image */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
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
          <Image
            src="/soccer-field-aerial-view-night.jpg"
            alt="Soccer field aerial view"
            fill
            className="object-cover"
            priority
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-green-900/90 to-blue-900/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 1,
              delay: 0.3,
              ease: "easeOut"
            }}
          />
        </motion.div>
        
        <div className="relative z-20 flex items-center justify-center w-full h-full p-12">
          <motion.div
            className="text-center text-white space-y-8 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="flex justify-center mb-8"
              animate={{ 
                y: [0, -3, -5, -3, 0, 3, 5, 3, 0],
                rotate: [0, 1, 0, -1, 0, 1, 0, -1, 0]
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
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
            
            <motion.div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-black leading-none tracking-tight">
                <span className="block bg-gradient-to-r from-white via-green-100 to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                  JOIN THE
                </span>
                <span className="block text-4xl lg:text-5xl font-light mt-2 text-white/90 tracking-wider">
                  PLAYCIRCLE NETWORK
                </span>
              </h1>
            </motion.div>
            
            <motion.div className="space-y-3">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
              <p className="text-xl lg:text-2xl font-light text-white/90 leading-relaxed mx-auto max-w-lg">
                Create your partner account and start connecting with players in your community
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Right side - Registration Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-slate-900 p-8">
        <div className="w-full max-w-md space-y-6">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            {[1, 2, 3].map((stepNumber) => (
              <div key={stepNumber} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  step >= stepNumber 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-700 text-slate-400'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-8 h-px transition-colors ${
                    step > stepNumber ? 'bg-blue-600' : 'bg-slate-700'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Title */}
          <motion.div 
            className="text-center"
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-2xl font-bold text-white mb-2">
              {step === 1 && "Personal Information"}
              {step === 2 && "Venue Details"}
              {step === 3 && "Account Setup"}
            </h2>
            <p className="text-slate-400 text-sm">
              {step === 1 && "Tell us about yourself"}
              {step === 2 && "Information about your venue"}
              {step === 3 && "Create your secure account"}
            </p>
          </motion.div>

          {/* Form */}
          <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNextStep(); }}>
            {error && (
              <motion.div
                className="p-3 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {error}
              </motion.div>
            )}

            {renderStepContent()}

            {/* Navigation Buttons */}
            <div className="flex space-x-3 pt-4">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white font-medium transition-colors text-sm"
                >
                  Back
                </button>
              )}
              <button
                type="submit"
                disabled={loading}
                className={`${step === 1 ? 'w-full' : 'flex-1'} px-4 py-2 rounded-lg font-medium transition-colors text-sm flex items-center justify-center ${
                  step === 3 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white disabled:opacity-50`}
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </>
                ) : (
                  step === 3 ? 'Create Account' : 'Next'
                )}
              </button>
            </div>
          </form>

          {/* Footer Link */}
          <div className="text-center pt-4">
            <p className="text-sm text-slate-400">
              Already have an account?{' '}
              <a
                href="/partner-login"
                className="font-medium text-blue-400 hover:text-blue-300 transition-colors"
              >
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}