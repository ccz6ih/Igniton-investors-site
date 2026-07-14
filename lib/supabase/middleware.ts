import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// Refreshes the Supabase session cookie and guards the /admin area.
// Returns a response to send; for non-/admin routes callers ignore the guard
// and apply their own logic.
export async function updateAdminSession(req: NextRequest) {
  let res = NextResponse.next({ request: req })

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  // If Supabase isn't configured yet, let the login page render (it will show a
  // clear error on submit) rather than hard-failing the middleware.
  if (!url || !key) return res

  const supabase = createServerClient(url, key, {
    cookies: {
      getAll() {
        return req.cookies.getAll()
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => req.cookies.set(name, value))
        res = NextResponse.next({ request: req })
        cookiesToSet.forEach(({ name, value, options }) =>
          res.cookies.set(name, value, options),
        )
      },
    },
  })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { pathname } = req.nextUrl
  const isLogin = pathname === '/admin/login'

  if (!user && !isLogin) {
    const redirect = req.nextUrl.clone()
    redirect.pathname = '/admin/login'
    redirect.search = ''
    return NextResponse.redirect(redirect)
  }

  if (user && isLogin) {
    const redirect = req.nextUrl.clone()
    redirect.pathname = '/admin'
    redirect.search = ''
    return NextResponse.redirect(redirect)
  }

  return res
}
