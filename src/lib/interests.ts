/** Contact-form interest options. Kept free of the Supabase import so the form
 *  can render these without pulling supabase-js into the initial bundle. */
export const INTEREST_OPTIONS = [
  'Driver / owner-operator app',
  'Fleet dispatch coordination (small fleets)',
  'Enterprise & embed / integration',
  'Partnership',
  'Something else',
] as const

export type PrimaryInterest = (typeof INTEREST_OPTIONS)[number]
