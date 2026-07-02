// PORTFOLIO — the 4 SKUs shown as revenue assets. NO prices, cart, or subscribe.
// Figures + citations are verbatim from the source studies. Keep the ** FDA marker.

export type Product = {
  key: string
  // BrandName renders italic-gold "Igni" + roman remainder + ™
  suffix: string // e.g. "Cognition" -> IgniCognition™
  image: string
  positioning: string
  tier: string // the correctly-tiered study claim
  figures: string[]
  citation: string
}

export const portfolioIntro = {
  eyebrow: 'The Portfolio',
  headlineLead: 'Four validated formulas. ',
  headlineEmphasis: 'One',
  headlinePost: ' revenue foundation.',
  body: 'The current product line is the de-risked, cash-generating base of the business. Each formula carries its own study tier and exact figures. The Cognition + Longevity pairing is the validated top revenue line.',
}

export const products: Product[] = [
  {
    key: 'cognition',
    suffix: 'Cognition',
    image: '/products/cognition.jpg',
    positioning:
      'The flagship line and deepest evidence base in the portfolio — and half of the validated Cognition + Longevity revenue pairing.',
    tier: 'University study, published in a peer-reviewed journal',
    figures: [
      '+83% quality of mental performance**',
      '+51% sustained attention**',
      '+28% short-term memory**',
      '+25% operational memory**',
    ],
    citation:
      'Valverde R. et al., 2023 — HSOA Journal of Alternative, Complementary & Integrative Medicine (Concordia University). 90-day RCT, 80 subjects, 3 arms incl. placebo.',
  },
  {
    key: 'longevity',
    suffix: 'Longevity',
    image: '/products/longevity.png',
    positioning:
      'The systemic-inflammation and longevity formula — peer-reviewed across three independent measurement methods, and the other half of the top revenue pairing.',
    tier: 'University study, published in a peer-reviewed journal',
    figures: ['−37% IL-6**', '−28% CRP**', '−13% GGT**', '−8/9% blood pressure**'],
    citation:
      'International Journal of Studies in Psychology, DOI 10.38140/ijspsy.v5i1.1616. 30-day RCT, 70 subjects, 3 arms, 3 independent measurement methods.',
  },
  {
    key: 'peptide',
    suffix: 'Peptide Eye Serum',
    image: '/products/peptide.jpg',
    positioning:
      'The topical entry point into skincare — Igniton-charged EGF, validated by an independent contract-research clinical trial.',
    tier: 'Independent clinical study',
    figures: [
      '+52% skin hydration*',
      '+30% barrier function in 24h*',
      '100% of subjects improved*',
      '34% better barrier vs. non-charged*',
    ],
    citation:
      '8-week independent clinical trial by ALS Global (CRO), 52 healthy female subjects (Corneometer, Cutometer, TEWL).',
  },
  {
    key: 'rem',
    suffix: 'REM Sleep',
    image: '/products/rem.jpg',
    positioning:
      'The sleep formula and newest pipeline entry — an early-stage study showing increased REM versus placebo, expanding the line.',
    tier: 'A study (initial)',
    figures: ['+25% more REM vs. placebo**', 'Fewer wake-ups: 2.6 → 1.2 / night**', 'More sleep: 6.3 → 7.1 hrs**'],
    citation:
      'Open, randomized, enhanced-vs-placebo trial: 14 days vs. 7-day baseline, 60 healthy people aged 40–76.',
  },
]
