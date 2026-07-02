'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { nav, headerCta, site } from '@/content/site'

// Sticky, navy-translucent header mirroring the consumer chrome.
// Logo left · nav center/right · bright-gold CTA in the top-right accent slot.
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-navy/85 backdrop-blur-md border-b border-white/10' : 'bg-navy/60 backdrop-blur-sm'
      }`}
    >
      <div className="container-brand flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center" aria-label={`${site.name} — Investor Relations`}>
          <Image
            src="/brand/logo.png"
            alt={`${site.name}`}
            width={160}
            height={48}
            priority
            className="h-8 w-auto brightness-0 invert"
          />
          <span className="ml-3 hidden text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-gold sm:inline">
            Investors
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Investor navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link href={headerCta.href} className="btn-primary btn-primary--gold">
            {headerCta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex flex-col gap-[5px] p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-white transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-navy px-6 py-4 md:hidden" aria-label="Investor navigation">
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm font-semibold uppercase tracking-[0.16em] text-white/85"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href={headerCta.href}
                onClick={() => setOpen(false)}
                className="btn-primary btn-primary--gold w-full"
              >
                {headerCta.label}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
