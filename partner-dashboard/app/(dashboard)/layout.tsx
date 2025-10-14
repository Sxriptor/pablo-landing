'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../lib/supabase'
import { validatePartnerAccess } from '../../lib/auth-utils'
import { Navbar } from '../../components/layout/Navbar'
import { Sidebar } from '../../components/layout/Sidebar'
import type { Partner } from '../../lib/types'
import { Loader2 } from 'lucide-react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [partner, setPartner] = useState<Partner | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session) {
          router.push('/login')
          return
        }

        // Get partner data
        const { data: partnerData, error } = await supabase
          .from('partners')
          .select('*')
          .eq('user_id', session.user.id)
          .single()

        if (error || !partnerData) {
          router.push('/login')
          return
        }

        // Validate partner access
        const { hasAccess } = validatePartnerAccess(partnerData)
        
        if (!hasAccess) {
          await supabase.auth.signOut()
          router.push('/login')
          return
        }

        setPartner(partnerData)
      } catch (error) {
        console.error('Auth check failed:', error)
        router.push('/login')
      } finally {
        setLoading(false)
      }
    }

    checkAuth()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_OUT' || !session) {
          router.push('/login')
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar partner={partner} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}