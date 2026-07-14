import type { NextRequest } from 'next/server'
import { updateAdminSession } from '@/lib/supabase/middleware'

// The public site is open (no preview gate). Only the /admin panel is guarded,
// via Supabase auth. The matcher below scopes middleware to /admin only.
export async function middleware(req: NextRequest) {
  return updateAdminSession(req)
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
}
