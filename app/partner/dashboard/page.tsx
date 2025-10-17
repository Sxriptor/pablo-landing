import React from 'react'
import { motion } from 'framer-motion'
import {
  Building2,
  MapPin,
  Trophy,
  Calendar,
  Users,
  DollarSign,
  TrendingUp,
  Activity,
  MoreHorizontal
} from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { getCurrentPartner } from '@/lib/supabase/venues'
import DashboardClient from './DashboardClient'

async function getDashboardStats() {
  try {
    // Get current partner
    const partner = await getCurrentPartner()
    if (!partner) {
      return {
        totalVenues: 0,
        totalCourts: 0,
        totalMatches: 0,
        totalEvents: 0,
        activeMatches: 0,
        upcomingEvents: 0,
        monthlyRevenue: 0,
        totalParticipants: 0
      }
    }

    // Get total venues
    const { count: venuesCount } = await supabase
      .from('venues')
      .select('*', { count: 'exact', head: true })
      .eq('partner_id', partner.id)

    // Get total courts (across all venues)
    const { data: venues } = await supabase
      .from('venues')
      .select('id')
      .eq('partner_id', partner.id)

    const venueIds = venues?.map(v => v.id) || []

    let courtsCount = 0
    if (venueIds.length > 0) {
      const { count } = await supabase
        .from('courts')
        .select('*', { count: 'exact', head: true })
        .in('venue_id', venueIds)
      courtsCount = count || 0
    }

    // Get total matches
    const { count: matchesCount } = await supabase
      .from('matches')
      .select('*', { count: 'exact', head: true })
      .eq('partner_id', partner.id)

    // Get active matches (scheduled status)
    const { count: activeMatchesCount } = await supabase
      .from('matches')
      .select('*', { count: 'exact', head: true })
      .eq('partner_id', partner.id)
      .eq('status', 'scheduled')

    // Get total events
    const { count: eventsCount } = await supabase
      .from('events')
      .select('*', { count: 'exact', head: true })
      .eq('partner_id', partner.id)

    // Get upcoming events (scheduled status)
    const { count: upcomingEventsCount } = await supabase
      .from('events')
      .select('*', { count: 'exact', head: true })
      .eq('partner_id', partner.id)
      .eq('status', 'scheduled')

    // Get total participants from all matches
    const { data: matches } = await supabase
      .from('matches')
      .select('current_players')
      .eq('partner_id', partner.id)

    const totalParticipants = matches?.reduce((sum, match) => sum + (match.current_players || 0), 0) || 0

    return {
      totalVenues: venuesCount || 0,
      totalCourts: courtsCount,
      totalMatches: matchesCount || 0,
      totalEvents: eventsCount || 0,
      activeMatches: activeMatchesCount || 0,
      upcomingEvents: upcomingEventsCount || 0,
      monthlyRevenue: 0, // TODO: Implement revenue tracking
      totalParticipants
    }
  } catch (error) {
    console.error('Error fetching dashboard stats:', error)
    return {
      totalVenues: 0,
      totalCourts: 0,
      totalMatches: 0,
      totalEvents: 0,
      activeMatches: 0,
      upcomingEvents: 0,
      monthlyRevenue: 0,
      totalParticipants: 0
    }
  }
}

async function getRecentMatches() {
  try {
    const partner = await getCurrentPartner()
    if (!partner) return []

    const { data: matches } = await supabase
      .from('matches')
      .select('*')
      .eq('partner_id', partner.id)
      .order('scheduled_date', { ascending: false })
      .limit(5)

    return matches || []
  } catch (error) {
    console.error('Error fetching recent matches:', error)
    return []
  }
}

export default async function PartnerDashboard() {
  const stats = await getDashboardStats()
  const matches = await getRecentMatches()

  return (
    <DashboardClient
      stats={stats}
      matches={matches}
    />
  )
}
