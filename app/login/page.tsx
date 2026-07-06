import type { Metadata } from 'next'

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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy px-6 text-white">
      {/* Signature warm glow, matching the site's dark sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[120vh] w-[120vw] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            'radial-gradient(closest-side, rgba(211,162,60,0.18), rgba(25,24,128,0.10) 45%, transparent 70%)',
        }}
      />
      <div className="relative z-10 w-full max-w-sm text-center">
        {/* Plain img (not next/image) so it loads on the pre-auth splash */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/logo.png"
          alt="Igniton"
          width={200}
          height={60}
          className="mx-auto h-9 w-auto brightness-0 invert"
        />
        <p className="eyebrow mt-7">Private Preview</p>
        <p className="mt-3 text-sm text-white/70">Enter the password to continue.</p>

        <form action="/api/login" method="POST" className="mt-8 flex flex-col gap-3">
          <input
            type="password"
            name="password"
            autoFocus
            required
            placeholder="Password"
            aria-label="Password"
            className="w-full rounded border border-white/25 bg-white/10 px-4 py-3 text-center text-white placeholder:text-white/45 focus:border-gold focus:outline-none"
          />
          <button type="submit" className="btn-primary btn-primary--gold w-full justify-center">
            Enter
          </button>
          {error && <p className="text-sm text-gold-bright">Incorrect password. Please try again.</p>}
        </form>
      </div>
    </main>
  )
}
