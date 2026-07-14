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

// Top nav mirrors the owner's deck structure.
export const nav: NavItem[] = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Products', href: '/products' },
  { label: 'Technology', href: '/technology' },
  { label: 'Science', href: '/science' },
]

export const headerCta: NavItem = { label: 'Contact IR', href: '/#contact' }

export const footerColumns: { heading: string; links: NavItem[] }[] = [
  {
    heading: 'Explore',
    links: [
      { label: 'Overview', href: '/#overview' },
      { label: 'Portfolio', href: '/#portfolio' },
      { label: 'Technology', href: '/technology' },
      { label: 'Science & Traction', href: '/#traction' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About / Vision', href: '/vision' },
      { label: 'Team & Advisors', href: '/team' },
      { label: 'Company & Gaia', href: '/#company' },
      { label: 'Roadmap', href: '/#roadmap' },
    ],
  },
  {
    heading: 'More',
    links: [
      { label: 'Media', href: '/media' },
      { label: 'Contact IR', href: '/#contact' },
      { label: 'Shop at igniton.com ↗', href: 'https://igniton.com' },
    ],
  },
]
