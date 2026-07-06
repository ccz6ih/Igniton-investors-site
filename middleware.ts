import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// TEMPORARY private-preview gate (owner approval) — simple single-password.
// The login page (/login) sets a cookie after the password is entered.
// To make the site public again, delete this file (and redeploy).
const PASSWORD = process.env.SITE_PASSWORD || 'igniton2026'
const COOKIE = 'igniton_preview'

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Always allow the login page and its API through.
  if (pathname === '/login' || pathname.startsWith('/api/login')) {
    return NextResponse.next()
  }

  // Authorized if the cookie matches.
  if (req.cookies.get(COOKIE)?.value === PASSWORD) {
    return NextResponse.next()
  }

  // Otherwise send to the login page.
  const url = req.nextUrl.clone()
  url.pathname = '/login'
  url.search = ''
  return NextResponse.redirect(url)
}

export const config = {
  // Also allow /brand/* (logo/favicon) so the login splash can show the logo.
  matcher: ['/((?!_next/static|_next/image|favicon.ico|brand).*)'],
}
