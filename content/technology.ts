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

  // The actual apparatus — real equipment photos, grouped current vs original.
  apparatus: {
    eyebrow: 'The apparatus',
    heading: 'From CERN-era instruments to a compact Colorado system.',
    body: 'Igniton (eNPQ quasi-particle) technology was developed from the 1990s. In 1995 a laboratory was established in Switzerland, with much of the measurement hardware rented from CERN. Once the physics was characterized, a compact, energy-efficient cold-plasma system was designed and built in Colorado — where the process runs today.',
    groups: [
      {
        label: 'Today — Colorado',
        note: 'Hot plasma replaced by cold plasma: far more energy-efficient and compact.',
        shots: [
          { image: '/apparatus/coldplasma.jpg', caption: 'High-vacuum cold-plasma with coherent photonic-stream complex — Si-wafers with quantum-well nano-layers' },
          { image: '/apparatus/deposition.jpg', caption: 'Direct igniton deposition equipment' },
          { image: '/apparatus/deposition-protons.jpg', caption: 'Direct igniton deposition into protons in the molecule mix' },
          { image: '/apparatus/control.jpg', caption: 'Computer control unit & vacuum plasma chambers' },
        ],
      },
      {
        label: 'Original characterization — Swiss laboratory (CERN-era)',
        note: 'The instruments that verified and measured the eNPQ quasi-particle before industrialization.',
        shots: [
          { image: '/apparatus/resonance.jpg', caption: 'Hot-plasma resonance chamber' },
          { image: '/apparatus/light-matter.jpg', caption: 'Light–matter interaction — laser sample disintegration' },
          { image: '/apparatus/acceleration.jpg', caption: 'eNQP acceleration stage' },
          { image: '/apparatus/detectors-array.jpg', caption: 'eNQP detectors array — spherical, electronically focused' },
          { image: '/apparatus/deflector.jpg', caption: 'Vertical magneto-static / RF deflector' },
          { image: '/apparatus/counting.jpg', caption: 'Electronic control & counting systems' },
        ],
      },
    ],
  },

  // GDV measurement comparison — framework/measurement, paired with the note.
  gdv: {
    eyebrow: 'Measured, not asserted',
    headlineLead: 'Your body is 70% water. What state ',
    headlineEmphasis: 'is yours',
    headlinePost: ' in?',
    body: 'Gas Discharge Visualization (GDV) — pioneered by advisor Prof. Konstantin Korotkov and used in the published trials — measures a sample’s energy output and molecular order. Untreated water, next to Igniton-charged water.',
    unit: 'Energy · 10⁻² Joules',
    compare: [
      { tag: 'Uncharged', label: 'Standard water', energy: '5.56', noise: '3,033' },
      { tag: 'Igniton', label: 'Charged water', energy: '14.04', noise: '1' },
    ],
  },

  // A few facility B-roll frames — the human side of the operation.
  facility: {
    eyebrow: 'In the facility',
    heading: 'Made in Colorado — in-house, end to end.',
    shots: [
      { image: '/lab/cleanroom.jpg', caption: 'Controlled-environment handling' },
      { image: '/lab/production.jpg', caption: 'In-house formulation & encapsulation' },
      { image: '/lab/measurement.jpg', caption: 'Process monitoring & measurement' },
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
