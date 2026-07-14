import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { SUPABASE_URL, SUPABASE_ANON_KEY } from './env'

// Refreshes the Supabase session cookie and guards the /admin area.
export async function updateAdminSession(req: NextRequest) {
  let res = NextResponse.next({ request: req })

  const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
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
