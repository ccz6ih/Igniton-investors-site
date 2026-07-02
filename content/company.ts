// COMPANY — corporate facts (verbatim from the source investor page) + Gaia.

export const company = {
  eyebrow: 'The Company',
  headlineLead: 'A real business with a ',
  headlineEmphasis: 'public-company',
  headlinePost: ' parent.',

  // Verbatim from templates/page.investors-page.json — safe to ship.
  facts: [
    'Igniton, Inc. is a Colorado C corporation.',
    'Headquarters in Colorado on a 12-acre campus near Boulder.',
    'Company has cash and no debt.',
    'Bio-Well, a biophotonic company, is a majority-owned subsidiary.',
  ],

  articlesOfIncorporation: '/docs/articles-of-incorporation.pdf',

  gaia: {
    heading: 'The Gaia relationship',
    body: 'Igniton is majority-owned by Gaia Inc. (NASDAQ: GAIA), a publicly traded conscious-media company founded by Jirka Rysavy. Gaia’s audience is a built-in distribution engine.',
    // Source says "two-thirds" in one place; confirm exact % before publishing.
    ownership: null as string | null,
  },

  businessModel:
    'Premium direct-to-consumer supplements, subscription-led, expanding into a technology platform. Cap-table summary and use of funds available to qualified investors on request.',
}
