'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Loader2, AlertCircle } from 'lucide-react'
import { supabase } from '../../../lib/supabase'
import { validatePartnerAccess, AUTH_ERRORS } from '../../../lib/auth-utils'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

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
        setError(AUTH_ERRORS.INVALID_CREDENTIALS)
        return
      }

      if (!authData.user) {
        setError(AUTH_ERRORS.INVALID_CREDENTIALS)
        return
      }

      // Check if user is a partner
      const { data: partner, error: partnerError } = await supabase
        .from('partners')
        .select('*')
        .eq('user_id', authData.user.id)
        .single()

      if (partnerError || !partner) {
        // Sign out the user since they don't have partner access
        await supabase.auth.signOut()
        setError(AUTH_ERRORS.PARTNER_ACCESS_ONLY)
        return
      }

      // Validate partner access
      const { hasAccess, error: accessError } = validatePartnerAccess(partner)
      
      if (!hasAccess) {
        await supabase.auth.signOut()
        setError(accessError || AUTH_ERRORS.PARTNER_ACCESS_ONLY)
        return
      }

      // Redirect to dashboard
      router.push('/dashboard')
    } catch (err) {
      setError('An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            PlayCircle Partner Dashboard
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to manage your venues and events
          </p>
        </div>

        {/* Login Form */}
        <Card>
          <CardHeader>
            <CardTitle>Sign In</CardTitle>
            <CardDescription>
              Enter your partner account credentials
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignIn} className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="partner@example.com"
                  required
                  disabled={loading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  disabled={loading}
                />
              </div>

              <Button type="submit" className="w-full" disabled={loading}>
                {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have partner access?{' '}
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Apply via the PlayCircle app
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}