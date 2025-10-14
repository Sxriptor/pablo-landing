'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { TableCard } from '../../../components/ui/TableCard'
import { supabase } from '../../../lib/supabase'
import { Plus, Eye, Edit, Trash2 } from 'lucide-react'
import type { Court } from '../../../lib/types'

export default function CourtsPage() {
  const [courts, setCourts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCourts()
  }, [])

  const fetchCourts = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return

      const { data: partner } = await supabase
        .from('partners')
        .select('id')
        .eq('user_id', session.user.id)
        .single()

      if (!partner) return

      // Get courts with venue information
      const { data, error } = await supabase
        .from('courts')
        .select(`
          *,
          venues!inner(name, partner_id)
        `)
        .eq('venues.partner_id', partner.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setCourts(data || [])
    } catch (error) {
      console.error('Error fetching courts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleView = (court: Court) => {
    console.log('View court:', court)
  }

  const handleEdit = (court: Court) => {
    console.log('Edit court:', court)
  }

  const handleDelete = async (court: Court) => {
    if (!confirm('Are you sure you want to delete this court?')) return

    try {
      const { error } = await supabase
        .from('courts')
        .delete()
        .eq('id', court.id)

      if (error) throw error
      await fetchCourts()
    } catch (error) {
      console.error('Error deleting court:', error)
    }
  }

  const columns = [
    { key: 'name', label: 'Court Name' },
    { 
      key: 'venues', 
      label: 'Venue',
      render: (venue: any) => venue?.name || 'N/A'
    },
    { key: 'sport_type', label: 'Sport' },
    { 
      key: 'indoor', 
      label: 'Type',
      render: (value: boolean) => value ? 'Indoor' : 'Outdoor'
    },
    { 
      key: 'hourly_rate', 
      label: 'Rate',
      render: (value: number) => value ? `$${value}/hr` : 'Free'
    },
    { 
      key: 'available', 
      label: 'Status',
      render: (value: boolean) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {value ? 'Available' : 'Unavailable'}
        </span>
      )
    },
  ]

  const actions = [
    {
      label: 'View',
      icon: <Eye className="h-4 w-4" />,
      onClick: handleView,
    },
    {
      label: 'Edit',
      icon: <Edit className="h-4 w-4" />,
      onClick: handleEdit,
    },
    {
      label: 'Delete',
      icon: <Trash2 className="h-4 w-4" />,
      onClick: handleDelete,
      variant: 'destructive' as const,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Courts</h1>
          <p className="text-muted-foreground">
            Manage courts across all your venues
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Court
        </Button>
      </div>

      <TableCard
        title="Your Courts"
        description="All courts available at your venues"
        columns={columns}
        data={courts}
        actions={actions}
        emptyMessage="No courts found. Add courts to your venues to get started."
      />
    </div>
  )
}