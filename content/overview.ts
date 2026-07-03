// OVERVIEW (home) content. Unverified numbers carry `verified: false`
// so the UI renders a muted "▢ pending" chip instead of a made-up figure.

export type Metric = {
  label: string
  value: string | null
  verified: boolean
  note?: string
}

export const hero = {
  eyebrow: 'Investor Overview',
  // The italic word is wrapped in <em> at render time via `emphasis`.
  headlineLead: 'A revenue business today.',
  headlineEmphasisPre: 'A wellness ',
  headlineEmphasis: 'technology',
  headlineEmphasisPost: ' tomorrow.',
  subhead:
    'Igniton is a revenue-generating premium wellness brand today — and a quantum-wellness technology platform tomorrow. Backed by a proven founder and majority-owned by a public company (Gaia Inc., NASDAQ: GAIA).',
  primaryCta: { label: 'Contact investor relations', href: '/#contact' },
  secondaryCta: { label: 'See the technology', href: '/#technology' },
}

// At-a-glance metric band. Only `published studies` is source-derived;
// the rest are placeholders until the client supplies verified data.
export const metrics: Metric[] = [
  { label: 'Net revenue to date', value: null, verified: false },
  { label: 'Run-rate / YoY growth', value: null, verified: false },
  {
    label: 'Published studies',
    value: '3 peer-reviewed',
    verified: true,
    note: 'plus additional clinical & initial studies — see Traction',
  },
  {
    label: 'Gaia ownership',
    value: '~2/3',
    verified: true,
    note: 'Gaia Inc. (NASDAQ: GAIA) — largest investor',
  },
]

export type Pillar = { title: string; body: string }

export const pillars: Pillar[] = [
  {
    title: 'Proven operator',
    body: "Founder Jirka Rysavy's track record — Corporate Express ($4.7B, acquired by Staples), the Wild Oats lineage, and Gaia Inc. (NASDAQ: GAIA) — de-risks execution.",
  },
  {
    title: 'Real traction',
    body: 'A revenue-generating, subscription-led supplement business with published university studies and a public-company parent. Financial figures pending verification.',
  },
  {
    title: 'A defensible moat',
    body: "The enhancement process and ignitons IP, paired with peer-reviewed science and a 30-year research lineage — not just what's in it, but what's been done to it.",
  },
  {
    title: 'Venture upside',
    body: "The platform roadmap — from studied formulas today to an in-home igniton-field device and the HIT coherence chair — plus Gaia's owned, conscious-media audience.",
  },
]

export const credibility = [
  'Gaia Inc. — NASDAQ: GAIA',
  'University-led, peer-reviewed studies',
  'Three 2025 COVR Visionary Awards',
  'Medical & scientific advisory board',
  'Made in Colorado, USA',
]
