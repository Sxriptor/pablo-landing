/**
 * Authentication error messages
 */
export const AUTH_ERRORS = {
  INVALID_CREDENTIALS: 'Invalid login credentials',
  PARTNER_ACCESS_ONLY: 'Partner access only. Please apply via the PlayCircle app.',
  PARTNER_NOT_ACTIVE: 'Partner account is not active. Please contact support.',
  PARTNER_PENDING: 'Partner application is pending approval.',
  PARTNER_REJECTED: 'Partner application was rejected.',
}

/**
 * Partner status types
 */
export type PartnerStatus = 'pending' | 'approved' | 'rejected' | 'suspended'

/**
 * Partner data interface
 */
export interface Partner {
  id: string
  company_name: string
  email: string
  phone?: string
  address?: string
  logo_url?: string
  website?: string
  description?: string
  status: PartnerStatus
  user_id: string
  created_at: string
  updated_at: string
}

/**
 * Check if user has partner access
 */
export function validatePartnerAccess(partner: Partner | null): {
  hasAccess: boolean
  error?: string
} {
  if (!partner) {
    return {
      hasAccess: false,
      error: AUTH_ERRORS.PARTNER_ACCESS_ONLY
    }
  }

  switch (partner.status) {
    case 'approved':
      return { hasAccess: true }
    case 'pending':
      return {
        hasAccess: false,
        error: AUTH_ERRORS.PARTNER_PENDING
      }
    case 'rejected':
      return {
        hasAccess: false,
        error: AUTH_ERRORS.PARTNER_REJECTED
      }
    case 'suspended':
      return {
        hasAccess: false,
        error: AUTH_ERRORS.PARTNER_NOT_ACTIVE
      }
    default:
      return {
        hasAccess: false,
        error: AUTH_ERRORS.PARTNER_ACCESS_ONLY
      }
  }
}