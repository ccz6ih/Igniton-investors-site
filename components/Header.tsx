'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { nav, headerCta, site } from '@/content/site'

// Light, sticky header matching the consumer chrome: native logo (+ "Investors"
// lockup) left · investor nav center/right · bright-gold Contact IR button, with
// a subtle Shop ↗ link out to the store.
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
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-[0_1px_12px_rgba(18,18,65,0.08)] backdrop-blur-md'
          : 'bg-white/80 backdrop-blur-sm'
      } border-b border-hairline`}
    >
      <div className="container-wide flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} — Investor Relations`}>
          <Image
            src="/brand/logo.png"
            alt={site.name}
            width={160}
            height={48}
            priority
            className="h-7 w-auto sm:h-8"
          />
          <span className="border-l border-hairline pl-3 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Investors
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Investor navigation">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy/75 transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={site.consumerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold transition-opacity hover:opacity-70"
          >
            Shop ↗
          </a>
          <Link href={headerCta.href} className="btn-primary btn-primary--gold">
            {headerCta.label}
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex flex-col gap-[5px] p-2 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-0.5 w-6 bg-navy transition ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-navy transition ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-navy transition ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {open && (
        <nav className="border-t border-hairline bg-white px-6 py-4 lg:hidden" aria-label="Investor navigation">
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm font-semibold uppercase tracking-[0.14em] text-navy/80"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={site.consumerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-1 text-sm font-semibold uppercase tracking-[0.14em] text-gold"
              >
                Shop at {site.consumerLabel} ↗
              </a>
            </li>
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
