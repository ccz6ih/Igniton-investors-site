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

export const scientificValidation = [
  'Three peer-reviewed published studies (Cognition, post-COVID Cognition, Longevity/Stress).',
  'Additional independent clinical study (Peptide) and an initial study (REM).',
  'Journals: HSOA J. Alternative, Complementary & Integrative Medicine; Int’l J. Studies in Psychology.',
  'Medical & scientific advisory board (see Team).',
]

// Endorsement — verify permission to attribute for investor use before launch.
export const endorsement = {
  quote:
    'This is the most important new breakthrough supplement for longevity — and after 90 days on Igniton’s brain formula, I didn’t just use it, I invested in it.',
  attribution: 'Dave Asprey — founder of Bulletproof, “Creator of Biohacking”',
  verified: false,
  note: 'Confirm permission to quote/attribute for investor use.',
}

// Items the source did not substantiate — omit until proof supplied.
export const pendingProof = [
  'COVR award tiers (not found in source)',
  '“As seen in” publication names',
  'Specific customer-review counts (theme defaults were placeholders)',
]
