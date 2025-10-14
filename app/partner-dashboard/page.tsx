'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PartnerDashboardRedirect() {
  const router = useRouter()

  useEffect(() => {
    // For now, redirect to a partner login page within the same app
    // Later this can be updated to point to the separate partner dashboard
    router.push('/partner-login')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to Partner Dashboard...</p>
      </div>
    </div>
  )
}