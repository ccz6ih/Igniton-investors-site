// TRACTION & VALIDATION. Business metrics are placeholders (verify each).
// Scientific validation + endorsement are source-derived.

import type { Metric } from './overview'

export const tractionIntro = {
  eyebrow: 'Traction & Validation',
  headlineLead: 'Backed by studies, not ',
  headlineEmphasis: 'marketing',
  headlinePost: '.',
}

// All business metrics pending client verification.
export const businessMetrics: Metric[] = [
  { label: 'Net revenue', value: null, verified: false },
  { label: 'Growth / run-rate', value: null, verified: false },
  { label: 'Orders / customers', value: null, verified: false },
  { label: 'Subscription mix', value: null, verified: false },
  { label: 'AOV', value: null, verified: false },
  { label: 'Repeat rate', value: null, verified: false },
  { label: 'CAC / LTV', value: null, verified: false },
]

// Verified via public press release (igniton.com/blogs/press-release):
// Igniton won three 2025 COVR Visionary Awards (Coalition of Visionary Resources).
export const awards = {
  title: 'Three 2025 COVR Visionary Awards',
  org: 'Coalition of Visionary Resources (COVR) — Mind-Body-Spirit marketplace',
  items: [
    { tier: 'Gold', category: 'Online Retailer' },
    { tier: 'Silver', category: 'Personal Products' },
    { tier: 'Bronze', category: 'Transformational Products' },
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

// Items not yet substantiated — omit until proof supplied.
export const pendingProof = [
  '“As seen in” publication names',
  'Specific customer-review counts (theme defaults were placeholders)',
]
