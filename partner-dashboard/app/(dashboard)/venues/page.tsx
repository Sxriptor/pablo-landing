'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { TableCard } from '../../../components/ui/TableCard'
import { supabase } from '../../../lib/supabase'
import { Plus, Eye, Edit, Trash2 } from 'lucide-react'
import type { Venue } from '../../../lib/types'

export default function VenuesPage() {
  const [venues, setVenues] = useState<Venue[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchVenues()
  }, [])

  const fetchVenues = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) return

      const { data: partner } = await supabase
        .from('partners')
        .select('id')
        .eq('user_id', session.user.id)
        .single()

      if (!partner) return

      const { data, error } = await supabase
        .from('venues')
        .select('*')
        .eq('partner_id', partner.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setVenues(data || [])
    } catch (error) {
      console.error('Error fetching venues:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleView = (venue: Venue) => {
    console.log('View venue:', venue)
  }

  const handleEdit = (venue: Venue) => {
    console.log('Edit venue:', venue)
  }

  const handleDelete = async (venue: Venue) => {
    if (!confirm('Are you sure you want to delete this venue?')) return

    try {
      const { error } = await supabase
        .from('venues')
        .delete()
        .eq('id', venue.id)

      if (error) throw error
      await fetchVenues()
    } catch (error) {
      console.error('Error deleting venue:', error)
    }
  }

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'city', label: 'City' },
    { key: 'address', label: 'Address' },
    { 
      key: 'active', 
      label: 'Status',
      render: (value: boolean) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {value ? 'Active' : 'Inactive'}
        </span>
      )
    },
    {
      key: 'created_at',
      label: 'Created',
      render: (value: string) => new Date(value).toLocaleDateString()
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
          <h1 className="text-3xl font-bold">Venues</h1>
          <p className="text-muted-foreground">
            Manage your venue locations and details
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Venue
        </Button>
      </div>

      <TableCard
        title="Your Venues"
        description="All venues under your management"
        columns={columns}
        data={venues}
        actions={actions}
        emptyMessage="No venues found. Create your first venue to get started."
      />
    </div>
  )
}