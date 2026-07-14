'use client'

import { createBrowserClient } from '@supabase/ssr'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './env'

// Browser client for the admin login form and image uploads. Session is stored
// in cookies so Server Components / middleware can read it.
export function createSupabaseBrowser() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}
