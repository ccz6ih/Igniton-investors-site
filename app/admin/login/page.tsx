'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createSupabaseBrowser } from '@/lib/supabase/client'

const CONFIGURED = Boolean(
  process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
)

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setBusy(true)
    setError(null)
    const supabase = createSupabaseBrowser()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('That email and password didn’t match. Please try again.')
      setBusy(false)
      return
    }
    router.push('/admin')
    router.refresh()
  }

  return (
    <main className="grid min-h-screen place-items-center bg-navy px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-bright">
            Igniton Editor
          </p>
          <h1 className="mt-3 font-display text-3xl text-white">
            <span className="italic">Igni</span>ton Admin
          </h1>
          <p className="mt-2 text-sm text-white/60">Sign in to edit the site.</p>
        </div>

        {!CONFIGURED && (
          <div className="mt-8 rounded-lg border border-gold/40 bg-gold/10 p-4 text-sm text-white/80">
            The admin isn’t finished connecting yet. The site’s Supabase keys
            (<code className="text-gold-bright">NEXT_PUBLIC_SUPABASE_URL</code> and
            <code className="text-gold-bright"> NEXT_PUBLIC_SUPABASE_ANON_KEY</code>) need to be
            added in Vercel, then redeploy.
          </div>
        )}

        <form onSubmit={submit} className="mt-8 space-y-4">
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-white/80">Email</span>
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-white placeholder-white/30 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              placeholder="you@igniton.com"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-white/80">Password</span>
            <input
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-white placeholder-white/30 outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              placeholder="••••••••"
            />
          </label>

          {error && <p className="text-sm text-red-300">{error}</p>}

          <button
            type="submit"
            disabled={busy}
            className="w-full rounded-lg bg-gold-bright px-6 py-2.5 font-semibold text-navy transition hover:brightness-105 disabled:opacity-60"
          >
            {busy ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
      </div>
    </main>
  )
}
