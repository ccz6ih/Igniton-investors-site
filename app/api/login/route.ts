import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const PASSWORD = process.env.SITE_PASSWORD || 'igniton2026'
const COOKIE = 'igniton_preview'

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const password = String(form.get('password') || '')

  if (password === PASSWORD) {
    const res = NextResponse.redirect(new URL('/', req.url), { status: 303 })
    res.cookies.set(COOKIE, PASSWORD, {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 days
    })
    return res
  }

  return NextResponse.redirect(new URL('/login?error=1', req.url), { status: 303 })
}
