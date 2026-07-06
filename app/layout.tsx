import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { HideOnLogin } from '@/components/HideOnLogin'
import { site } from '@/content/site'

// Brand guidelines: Playfair Display is used at REGULAR weight for headlines and
// product names (italic emphasizes a single word). Not 600.
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

// Public, indexable site (client decision — see docs/04_COMPLIANCE.md).
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Investor Relations`,
    template: `%s — ${site.name} Investors`,
  },
  description: site.description,
  applicationName: `${site.name} Investors`,
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: `${site.name} Investors`,
    title: `${site.name} — Investor Relations`,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Investor Relations`,
    description: site.description,
  },
  icons: { icon: '/brand/favicon.webp' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        {/* Reveal content immediately if JS is disabled. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.remove('no-js')",
          }}
        />
      </head>
      <body className="no-js">
        <a
          href="#overview"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <HideOnLogin>
          <Header />
        </HideOnLogin>
        <main>{children}</main>
        <HideOnLogin>
          <Footer />
        </HideOnLogin>
      </body>
    </html>
  )
}
