// TRACTION & VALIDATION. Business metrics are placeholders (verify each).
// Scientific validation + endorsement are source-derived.

import type { Metric } from './overview'

export const tractionIntro = {
  eyebrow: 'Traction & Validation',
  headlineLead: 'Backed by studies, not ',
  headlineEmphasis: 'marketing',
  headlinePost: '.',
}

// Real, client-provided directional metrics.
export const businessMetrics: Metric[] = [
  { label: 'Customers', value: '10,000+', verified: true },
  { label: 'Average order value', value: '~$300', verified: true },
  { label: 'Avg. repeat cycle', value: '~8 months', verified: true },
]

// A durable-demand signal stated in prose alongside the metrics.
export const sellThrough =
  'The product line has sold through inventory multiple times — a repeatable, demand-led restock pattern rather than a one-time launch spike.'

// Verified via public press release (igniton.com/blogs/press-release):
// Igniton won three 2025 COVR Visionary Awards (Coalition of Visionary Resources).
export const awards = {
  title: 'Three 2025 COVR Visionary Awards',
  org: 'Coalition of Visionary Resources (COVR) — Mind-Body-Spirit marketplace',
  items: [
    { tier: 'Gold', category: 'Online Retailer', badge: '/awards/covr-gold.png' },
    { tier: 'Silver', category: 'Personal Products', badge: '/awards/covr-silver.png' },
    { tier: 'Bronze', category: 'Transformational Products', badge: '/awards/covr-bronze.png' },
  ],
}

export const scientificValidation = [
  'Three peer-reviewed published studies (Cognition, post-COVID Cognition, Longevity/Stress).',
  'Additional independent clinical study (Peptide) and an initial study (REM).',
  'Journals: HSOA J. Alternative, Complementary & Integrative Medicine; Int’l J. Studies in Psychology.',
  'Medical & scientific advisory board (see Team).',
]

// Physician / advisory-board validation (faithful excerpt from her published quote).
export const physicianEndorsement = {
  quote:
    'In my practice, I’ve seen how inflammation, stress, and cellular dysfunction silently sabotage the aging process. Igniton products offer breakthrough support… I am seeing the profound benefits from my personal use and I’m excited to recommend IgniCognition™ and IgniLongevity™ to my patients.',
  attribution: 'Dr. Gail King, M.D., FACOG, FAARM — Igniton Medical Advisory Board',
}

// Endorsement — verify permission to attribute for investor use before launch.
export const endorsement = {
  quote:
    'This is the most important new breakthrough supplement for longevity — and after 90 days on Igniton’s brain formula, I didn’t just use it, I invested in it.',
  attribution: 'Dave Asprey — founder of Bulletproof, “Creator of Biohacking”',
  verified: false,
  note: 'Confirm permission to quote/attribute for investor use.',
}

// "Measured in blood" — the IgniLongevity study biomarkers (** FDA marker kept).
export const bloodwork = {
  eyebrow: 'Measured in blood',
  headlineLead: 'Don’t take our word. Take ',
  headlineEmphasis: 'a blood test',
  headlinePost: '.',
  body: 'Markers your doctor may already track at your annual physical. In the IgniLongevity study, the enhanced group moved every one.**',
  markers: [
    { value: '−37%', label: 'IL-6', sub: 'Inflammation marker' },
    { value: '−28%', label: 'CRP', sub: 'C-reactive protein' },
    { value: '−13%', label: 'GGT', sub: 'Liver / oxidative stress' },
    { value: '−9%', label: 'Diastolic BP', sub: 'Blood pressure' },
  ],
  cite: 'Igniton-enhanced group vs. baseline at 30 days · n=70 · published in a peer-reviewed journal.',
}

// Verified customer reviews (client-confirmed rating).
export const reviews = {
  rating: '4.9',
  label: 'average rating · verified buyers',
  quote:
    'At 70, I’ve learned that longevity isn’t just about living longer, it’s about living well… Since adding IgniCognition into my routine, I’ve noticed a difference in how steady my energy feels throughout the day. It’s not a spike-and-crash. It’s consistent, clear, and reliable.',
  by: 'Maria Romano — Verified Buyer',
}

// Items not yet substantiated — omit until proof supplied.
export const pendingProof = ['“As seen in” publication names']
