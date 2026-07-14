import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './env'

// Cookie-bound server client — carries the signed-in admin's session for
// Server Components and Server Actions in the /admin area.
export async function createSupabaseServer() {
  const cookieStore = await cookies()

  return createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
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
