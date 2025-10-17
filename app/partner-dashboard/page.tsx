'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function PartnerDashboardRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Redirect to the partner dashboard
    router.push('/partner/dashboard')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#050a0f' }}>
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 mx-auto mb-4" style={{ borderColor: '#456882' }}></div>
        <p className="text-gray-400">Redirecting to Partner Dashboard...</p>
      </div>
    </div>
  )
}