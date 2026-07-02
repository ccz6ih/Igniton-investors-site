// Global site config: nav, footer, brand, IR contact.
// Edit copy here without touching components.

export const site = {
  name: 'Igniton',
  legalName: 'Igniton, Inc.',
  domain: 'ignitoninc.com',
  url: 'https://ignitoninc.com',
  tagline: '30 years of research. Measurable in 30 days.',
  description:
    'Igniton is a revenue-generating premium wellness brand today — and a quantum-wellness technology platform tomorrow. Investor overview, technology moat, traction, team, and roadmap.',
  // IR contact — replace with the real inbox before launch (see docs/04_COMPLIANCE.md).
  irEmail: 'investors@ignitoninc.com',
}

export type NavItem = { label: string; href: string }

export const nav: NavItem[] = [
  { label: 'Overview', href: '/#overview' },
  { label: 'Technology', href: '/#technology' },
  { label: 'Traction', href: '/#traction' },
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
      { label: 'Technology', href: '/#technology' },
      { label: 'Portfolio', href: '/#portfolio' },
      { label: 'Traction', href: '/#traction' },
      { label: 'Roadmap', href: '/#roadmap' },
    ],
  },
  {
    heading: 'Investor Relations',
    links: [
      { label: 'Contact IR', href: '/#contact' },
      { label: 'Consumer site ↗', href: 'https://igniton.com' },
    ],
  },
]
