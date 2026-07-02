// TECHNOLOGY / MOAT content. Framework language is allowed here (owned context)
// but always paired with the rational anchor (absorption + published studies).

export const technology = {
  eyebrow: 'The Moat',
  headlineLead: 'Not just what’s in it. What’s been ',
  headlineEmphasis: 'done',
  headlinePost: ' to it.',
  intro:
    'The defensible asset is the process, not the ingredient list. In an otherwise commodity category, Igniton’s cold-plasma charging alters each ingredient’s molecular state before encapsulation — the step competitors can’t easily replicate, and the reason head-to-head studies favor the charged formula over the same uncharged inputs.',

  wedge: [
    {
      title: 'Commodity inputs, proprietary process',
      body: 'The ingredients are ordinary GRAS compounds; the moat is what’s done to them. Cold-plasma charging puts each into an “excited” state before encapsulation — the formula holds, the enhancement is the variable.',
    },
    {
      title: 'A lower effective dose',
      body: 'The company reports 80–90% lower effective dose required, with stronger effect at lower concentration as measured in GDV testing.',
    },
    {
      title: 'Measured, not asserted',
      body: 'Gas Discharge Visualization (GDV) — the same instrumentation used in the published Igniton trials — is used to quantify the charged state.',
    },
  ],

  lineage: {
    heading: 'From particle physics to the human body',
    note: 'Framed as Igniton’s framework, not settled physics.',
    timeline: [
      { year: '1990s', text: 'Discovery and characterization of the eNPQ quasi-particle later named “ignitons.”' },
      { year: '1995', text: 'Laboratory established in Switzerland; much of the measurement hardware rented from CERN.' },
      { year: '2023', text: 'Cold-plasma production operation established in Louisville, Colorado.' },
      { year: '2024–25', text: 'University-led trials completed and published in peer-reviewed journals.' },
    ],
  },

  // IP is a placeholder: the source describes "a patented process" but states no
  // patent numbers. Do not assert specifics without documentation.
  ip: {
    heading: 'IP & moat',
    body: 'The source describes a patented process embedding ignitons into the molecules, plus a proprietary cold-plasma and laser-photonics system developed over 30 years, and manufacturing know-how.',
    status: null as string | null, // patents / applications / trade-secret posture — client to supply
  },
}
