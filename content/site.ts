// Global site config: nav, footer, brand, IR contact.
// Edit copy here without touching components.

export const site = {
  name: 'Igniton',
  legalName: 'Igniton, Inc.',
  domain: 'ignitoninc.com',
  url: 'https://ignitoninc.com',
  tagline: 'Revenue today. Platform tomorrow.',
  description:
    'Igniton is a revenue-generating premium wellness brand today — and a quantum-wellness technology platform tomorrow. Investor overview, technology moat, traction, team, and roadmap.',
  // IR contact — replace with the real inbox before launch (see docs/04_COMPLIANCE.md).
  irEmail: 'investors@ignitoninc.com',
  // The consumer store — where products are actually sold. This investor site
  // links out to it (no commerce lives here).
  consumerUrl: 'https://igniton.com',
  consumerLabel: 'igniton.com',
  // Contact routes to the existing Shopify contact page (working form, no build).
  contactUrl: 'https://igniton.com/pages/contact',
}

export type NavItem = { label: string; href: string }

// Mirrors the consumer nav's shape (Products/Science/Results/About) but points
// at the investor equivalents, plus investor-only sections.
export const nav: NavItem[] = [
  { label: 'Overview', href: '/#overview' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Technology', href: '/technology' },
  { label: 'Traction', href: '/#traction' },
  { label: 'Vision', href: '/vision' },
  { label: 'Media', href: '/media' },
  { label: 'Team', href: '/team' },
  { label: 'Roadmap', href: '/#roadmap' },
]

export const headerCta: NavItem = { label: 'Contact IR', href: '/#contact' }

export const footerColumns: { heading: string; links: NavItem[] }[] = [
  {
    heading: 'Company',
    links: [
      { label: 'Overview', href: '/#overview' },
      { label: 'Company & Gaia', href: '/#company' },
      { label: 'Team & Advisors', href: '/team' },
    ],
  },
  {
    heading: 'The Business',
    links: [
      { label: 'Technology', href: '/technology' },
      { label: 'Portfolio', href: '/#portfolio' },
      { label: 'Traction', href: '/#traction' },
      { label: 'Roadmap', href: '/#roadmap' },
    ],
  },
  {
    heading: 'Investor Relations',
    links: [
      { label: 'Contact IR', href: '/#contact' },
      { label: 'Shop at igniton.com ↗', href: 'https://igniton.com' },
    ],
  },
]
