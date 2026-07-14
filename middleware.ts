import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { updateAdminSession } from '@/lib/supabase/middleware'

// TEMPORARY private-preview gate (owner approval) — simple single-password.
// The login page (/login) sets a cookie after the password is entered.
// The /admin panel is separate: it uses Supabase auth (see updateAdminSession).
const PASSWORD = process.env.SITE_PASSWORD || 'igniton2026'
const COOKIE = 'igniton_preview'

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Admin panel — Supabase email/password auth, independent of the preview gate.
  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    return updateAdminSession(req)
  }

  // Crawler / SEO files stay reachable (AEO) even while the preview gate is on.
  if (pathname === '/robots.txt' || pathname === '/sitemap.xml' || pathname === '/llms.txt') {
    return NextResponse.next()
  }

  // Public preview gate.
  if (pathname === '/login' || pathname.startsWith('/api/login')) {
    return NextResponse.next()
  }
  if (req.cookies.get(COOKIE)?.value === PASSWORD) {
    return NextResponse.next()
  }

  const url = req.nextUrl.clone()
  url.pathname = '/login'
  url.search = ''
  return NextResponse.redirect(url)
}

export const config = {
  // Also allow /brand/* (logo/favicon) so the login splash can show the logo.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|brand).*)'],
}
