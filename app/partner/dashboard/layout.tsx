'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase, supabaseUrl } from '@/lib/supabase'
import { validatePartnerAccess } from '@/lib/auth-utils'
import { Navbar } from '@/components/partner/layout/Navbar'
import { Sidebar } from '@/components/partner/layout/Sidebar'
import type { Partner } from '@/lib/types'
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
        // Check if Supabase is properly configured
        if (supabaseUrl === 'https://placeholder.supabase.co') {
          // Demo mode - create mock partner data
          const mockPartner: Partner = {
            id: 'demo-partner-1',
            company_name: 'Demo Sports Center',
            email: 'demo@playcircle.com',
            phone: '+1 (555) 123-4567',
            address: '123 Sports Ave, Demo City, DC 12345',
            logo_url: undefined,
            website: 'https://demosportscenter.com',
            description: 'A premier sports facility offering tennis, pickleball, and more.',
            status: 'approved',
            user_id: 'demo-user-1',
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }
          setPartner(mockPartner)
          setLoading(false)
          return
        }

        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session) {
          router.push('/partner/entry')
          return
        }

        // Get partner data
        const { data: partnerData, error } = await supabase
          .from('partners')
          .select('*')
          .eq('user_id', session.user.id)
          .single()

        if (error || !partnerData) {
          router.push('/partner/entry')
          return
        }

        // Validate partner access
        const { hasAccess } = validatePartnerAccess(partnerData)
        
        if (!hasAccess) {
          await supabase.auth.signOut()
          router.push('/partner/entry')
          return
        }

        setPartner(partnerData)
      } catch (error) {
        console.error('Auth check failed:', error)
        // In demo mode, don't redirect on error
        if (supabaseUrl !== 'https://placeholder.supabase.co') {
          router.push('/partner/entry')
        }
      } finally {
        setLoading(false)
      }
    }

    checkAuth()

    // Only set up auth listener if Supabase is properly configured
    if (supabaseUrl !== 'https://placeholder.supabase.co') {
      const { data: { subscription } } = supabase.auth.onAuthStateChange(
        async (event: string, session: any) => {
          if (event === 'SIGNED_OUT' || !session) {
            router.push('/partner/entry')
          }
        }
      )

      return () => subscription.unsubscribe()
    }
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen" style={{ 
      background: 'linear-gradient(135deg, #0f1535 0%, #1a1f3a 50%, #0a0e27 100%)'
    }}>
      <Navbar partner={partner} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}