import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Private Preview',
  robots: { index: false, follow: false },
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const sp = await searchParams
  const error = sp?.error

  return (
    <main className="flex min-h-screen items-center justify-center bg-navy px-6 text-white">
      <div className="w-full max-w-sm text-center">
        <Image
          src="/brand/logo.png"
          alt="Igniton"
          width={200}
          height={60}
          priority
          className="mx-auto h-9 w-auto brightness-0 invert"
        />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
          Private Preview
        </p>
        <p className="mt-3 text-sm text-white/70">Enter the password to continue.</p>

        <form action="/api/login" method="POST" className="mt-8 flex flex-col gap-3">
          <input
            type="password"
            name="password"
            autoFocus
            required
            placeholder="Password"
            aria-label="Password"
            className="w-full rounded border border-white/20 bg-white/5 px-4 py-3 text-center text-white placeholder:text-white/40 focus:border-gold focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded bg-gold-bright px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-navy transition-opacity hover:opacity-90"
          >
            Enter
          </button>
          {error && <p className="text-sm text-gold">Incorrect password. Please try again.</p>}
        </form>
      </div>
    </main>
  )
}
