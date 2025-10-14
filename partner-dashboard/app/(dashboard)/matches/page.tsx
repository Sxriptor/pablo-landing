'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { TableCard } from '../../../components/ui/TableCard'
import { supabase } from '../../../lib/supabase'
import { Plus, Eye, Edit, Trash2 } from 'lucide-react'
import type { Match } from '../../../lib/types'

export default function MatchesPage() {
  const [matches, setMatches] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMatches()
  }, [])

  const fetchMatches = async () => {
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
        .from('matches')
        .select(`
          *,
          venues!inner(name),
          courts(name)
        `)
        .eq('partner_id', partner.id)
        .order('scheduled_date', { ascending: false })

      if (error) throw error
      setMatches(data || [])
    } catch (error) {
      console.error('Error fetching matches:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleView = (match: Match) => {
    console.log('View match:', match)
  }

  const handleEdit = (match: Match) => {
    console.log('Edit match:', match)
  }

  const handleDelete = async (match: Match) => {
    if (!confirm('Are you sure you want to delete this match?')) return

    try {
      const { error } = await supabase
        .from('matches')
        .delete()
        .eq('id', match.id)

      if (error) throw error
      await fetchMatches()
    } catch (error) {
      console.error('Error deleting match:', error)
    }
  }

  const columns = [
    { key: 'title', label: 'Match Title' },
    { key: 'sport', label: 'Sport' },
    { 
      key: 'scheduled_date', 
      label: 'Date',
      render: (value: string) => new Date(value).toLocaleDateString()
    },
    { 
      key: 'start_time', 
      label: 'Time',
      render: (value: string, row: any) => `${value} - ${row.end_time}`
    },
    { 
      key: 'current_players', 
      label: 'Players',
      render: (value: number, row: any) => `${value}/${row.max_players}`
    },
    { 
      key: 'entry_fee', 
      label: 'Fee',
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
          <h1 className="text-3xl font-bold">Matches</h1>
          <p className="text-muted-foreground">
            Create and manage matches at your venues
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Match
        </Button>
      </div>

      <TableCard
        title="Your Matches"
        description="All matches hosted at your venues"
        columns={columns}
        data={matches}
        actions={actions}
        emptyMessage="No matches found. Create your first match to get started."
      />
    </div>
  )
}