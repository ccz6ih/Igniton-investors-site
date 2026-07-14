import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Cookie-bound server client — carries the signed-in admin's session for
// Server Components and Server Actions in the /admin area. Returns null when
// Supabase env isn't configured so callers degrade gracefully (login screen /
// clear message) instead of throwing a 500.
export async function createSupabaseServer() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !key) return null
  const cookieStore = await cookies()

  return createServerClient(url, key, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          )
        } catch {
          // Called from a Server Component (read-only cookies) — safe to ignore;
          // the middleware refreshes the session cookie on the next request.
        }
      },
    },
  })
}
