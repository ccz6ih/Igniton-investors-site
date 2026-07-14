import { createClient } from '@supabase/supabase-js'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './env'

// Public, cookie-less read client for rendering the live site. Uses the anon /
// publishable key; Row-Level Security allows anonymous SELECT on `content`.
export function createReadClient() {
  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    auth: { persistSession: false },
  })
}
