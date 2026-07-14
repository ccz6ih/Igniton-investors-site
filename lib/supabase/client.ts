'use client'

import { createBrowserClient } from '@supabase/ssr'

// Browser client for the admin login form and image uploads. Session is stored
// in cookies so Server Components / middleware can read it.
export function createSupabaseBrowser() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}
