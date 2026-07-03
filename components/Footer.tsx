import Image from 'next/image'
import { site } from '@/content/site'
import { disclaimers } from '@/content/disclaimers'

// Minimal navy footer: logo, a single "Shop at igniton.com" link, and the
// legal disclaimer block. Legal must review disclaimers before launch.
export function Footer() {
  const year = 2026 // build-stamped; update at release

  return (
    <footer className="bg-navy text-white on-dark">
      <div className="container-brand py-16">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          {/* Reverse logo treatment (white on navy) — never re-typeset the wordmark. */}
          <Image
            src="/brand/logo.png"
            alt={site.name}
            width={160}
            height={48}
            className="h-8 w-auto brightness-0 invert"
          />
          <a
            href={site.consumerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold uppercase tracking-[0.18em] text-gold transition-opacity hover:opacity-80"
          >
            Shop at {site.consumerLabel} ↗
          </a>
        </div>

        {/* Disclaimer block */}
        <div className="mt-14 space-y-3 border-t border-white/10 pt-8 text-[0.7rem] leading-relaxed text-white/55">
          <p>{disclaimers.notAnOffer}</p>
          <p>{disclaimers.forwardLooking}</p>
          <p>{disclaimers.framework}</p>
          <p>{disclaimers.fda}</p>
          <p className="italic text-white/40">
            Draft disclaimer language — must be reviewed by legal counsel before launch.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="font-semibold tracking-wide text-gold">Powered by Ignitons™</p>
        </div>
      </div>
    </footer>
  )
}
