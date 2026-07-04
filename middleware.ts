import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// TEMPORARY private-preview gate (for owner approval).
// Any username works; the password is below (overridable via SITE_PASSWORD env).
// To make the site public again, delete this file (and redeploy).
const PASSWORD = process.env.SITE_PASSWORD || 'igniton2026'

export function middleware(req: NextRequest) {
  const auth = req.headers.get('authorization')
  if (auth) {
    const [scheme, encoded] = auth.split(' ')
    if (scheme === 'Basic' && encoded) {
      // atob is available in the Edge runtime
      const decoded = atob(encoded) // "username:password"
      const password = decoded.slice(decoded.indexOf(':') + 1)
      if (password === PASSWORD) {
        return NextResponse.next()
      }
    }
  }
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Igniton Private Preview"' },
  })
}

// Gate everything except Next's internal assets and the favicon.
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|brand/favicon).*)'],
}
