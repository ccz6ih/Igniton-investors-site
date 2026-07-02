import Link from 'next/link'
import Image from 'next/image'
import { footerColumns, site } from '@/content/site'
import { disclaimers } from '@/content/disclaimers'

// Dark navy footer with gold wordmark, investor links, "Powered by Ignitons™",
// and the full disclaimer block. Legal must review disclaimers before launch.
export function Footer() {
  const year = 2026 // build-stamped; update at release

  return (
    <footer className="bg-navy text-white on-dark">
      <div className="container-brand py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            {/* Reverse logo treatment (white on navy) — never re-typeset the wordmark. */}
            <Image
              src="/brand/logo.png"
              alt={site.name}
              width={160}
              height={48}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm text-white/70">
              A revenue business today. A wellness technology tomorrow.
            </p>
          </div>

          {footerColumns.map((col) => (
            <div key={col.heading}>
              <h2 className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold">
                {col.heading}
              </h2>
              <ul className="flex flex-col gap-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/75 transition-colors hover:text-white">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
