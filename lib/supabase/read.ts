import { createClient } from '@supabase/supabase-js'

// Public, cookie-less read client for rendering the live site. Uses the anon /
// publishable key; Row-Level Security allows anonymous SELECT on `content`.
// Returns null if env isn't configured so the site can still build & render
// from the compiled-in defaults (see lib/content.ts).
export function createReadClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  return createClient(url, key, { auth: { persistSession: false } })
}
