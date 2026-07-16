import { createClient } from '@supabase/supabase-js'

/**
 * Supabase client for the shared ZenConnect project (also used by zenteck.ai).
 *
 * The URL and anon key are PUBLIC by design — the anon key ships in every
 * client bundle and is protected by Row Level Security. ZenConnect's RLS
 * allows public INSERT on `contacts` / `contact_submissions` but no reads,
 * so this browser client can only submit contact forms, never read data.
 *
 * Values fall back to the known public project so the Netlify build works
 * without extra config; override via VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
 * (e.g. to point at a different environment or rotate the key).
 */
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ?? 'https://kzpylczadrnkwxrbeuyp.supabase.co'

const SUPABASE_ANON_KEY =
  import.meta.env.VITE_SUPABASE_ANON_KEY ??
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt6cHlsY3phZHJua3d4cmJldXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NTg4NjcsImV4cCI6MjA2NzIzNDg2N30.bNDUYVt0j0lBx1u3zy2XACMmgAaVJAT0y-I7RmkSqls'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
})
