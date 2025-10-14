'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { TableCard } from '../../../components/ui/TableCard'
import { supabase } from '../../../lib/supabase'
import { Plus, Eye, Edit, Trash2 } from 'lucide-react'
import type { Event } from '../../../lib/types'

export default function EventsPage() {
  const [events, setEvents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
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
        .from('events')
        .select(`
          *,
          venues!inner(name)
        `)
        .eq('partner_id', partner.id)
        .order('start_date', { ascending: false })

      if (error) throw error
      setEvents(data || [])
    } catch (error) {
      console.error('Error fetching events:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleView = (event: Event) => {
    console.log('View event:', event)
  }

  const handleEdit = (event: Event) => {
    console.log('Edit event:', event)
  }

  const handleDelete = async (event: Event) => {
    if (!confirm('Are you sure you want to delete this event?')) return

    try {
      const { error } = await supabase
        .from('events')
        .delete()
        .eq('id', event.id)

      if (error) throw error
      await fetchEvents()
    } catch (error) {
      console.error('Error deleting event:', error)
    }
  }

  const columns = [
    { key: 'name', label: 'Event Name' },
    { key: 'event_type', label: 'Type' },
    { key: 'sport', label: 'Sport' },
    { 
      key: 'start_date', 
      label: 'Date',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
    { 
      key: 'current_registrations', 
      label: 'Registrations',
      render: (value: number, row: any) => `${value}/${row.capacity}`
    },
    { 
      key: 'price', 
      label: 'Price',
      render: (value: number) => value > 0 ? `$${value}` : 'Free'
    },
    { 
      key: 'status', 
      label: 'Status',
      render: (value: string) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          value === 'scheduled' ? 'bg-blue-100 text-blue-800' :
          value === 'in_progress' ? 'bg-yellow-100 text-yellow-800' :
          value === 'completed' ? 'bg-green-100 text-green-800' :
          'bg-red-100 text-red-800'
        }`}>
          {value.replace('_', ' ')}
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
          <h1 className="text-3xl font-bold">Events</h1>
          <p className="text-muted-foreground">
            Manage classes, clinics, and tournaments
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Event
        </Button>
      </div>

      <TableCard
        title="Your Events"
        description="All events and classes at your venues"
        columns={columns}
        data={events}
        actions={actions}
        emptyMessage="No events found. Create your first event to get started."
      />
    </div>
  )
}