// ============================================================================
// OWNER-PROVIDED CONTENT — verbatim from "Igniton Investor Site (2).pptx".
// Use this text exactly; do not add content beyond the deck ("nothing else").
// Styling comes from the existing design system.
// ============================================================================

/* ------------------------------------------------------------------ HOME */
export const home = {
  heroImage: '/deck/home-hero.jpg',
  company: 'Igniton, Inc.',
  tagline: 'Improving longevity, cognitive functions, memory, sleep and appearance',
  // Owner will provide the company video; placeholder slot until then.
  videoPlaceholder: 'Company video — to be provided',
  confidential: 'STRICTLY PRIVATE & CONFIDENTIAL — IGNITON, INC.',
  // Science-image carousel. Owner to supply final images incl. a facility
  // exterior ("ask Malek"); using our real Colorado lab/apparatus shots for now.
  carouselCaption: 'Igniton stabilization and concentration facility in Colorado, USA',
  carousel: [
    { image: '/lab/cleanroom.jpg' },
    { image: '/apparatus/coldplasma.jpg' },
    { image: '/lab/production.jpg' },
    { image: '/apparatus/light-matter.jpg' },
    { image: '/lab/measurement.jpg' },
    { image: '/apparatus/control.jpg' },
    { image: '/apparatus/deposition.jpg' },
    { image: '/apparatus/resonance.jpg' },
  ],
}

export const disclaimer = {
  title: 'Disclaimer',
  paragraphs: [
    'This website contains forward-looking statements about Igniton, Inc. based on management’s current expectations which are subject to known and unknown uncertainties and risks. Words such as “anticipated,” “initiate,” “expect,” “intend,” “plan,” “believe,” “seek,” “estimate,” “may,” and variations of these words or similar expressions are intended to identify forward-looking statements.',
    'Our actual results could differ materially from those discussed due to a number of factors, including, but not limited to, our ability to raise additional capital on favorable terms, the success of our products under development and other risk factors.',
    'We are providing this information as of the date of this presentation and do not undertake any obligation to update any forward-looking statements contained in this presentation as a result of new information, future events or otherwise. Unless the context requires otherwise, references to “Igniton,” “the Company,” “we,” “us” and “our” refer to Igniton, Inc.',
  ],
}

/* -------------------------------------------------------------- ABOUT US */
export const aboutUs = {
  heading: 'IGNITON',
  intro: [
    'Igniton (eNPQ quasi-particle) technology was originally developed in the 1990’s, and in 1995 the lab was established at CERN facility (Switzerland) with much of the hardware to verify and measure the eNPQ quasi-particle named “ignitons” rented from CERN. The current operation is in Colorado.',
    'The component stages of the eNQP (Ignitons) characterization system are from the Swiss laboratories, that were used until two years ago, when the necessary data on the nature of the quasi-particles and their industrial application had been collected, and the current equipment was designed, constructed and established in Colorado.',
    'Ignitons, like neutrinos, are neutral quasi-particles. In addition to being extremely small, they have no electrical charge. Igniton size and velocity are similar to neutrinos. Ignitons as the life force was known from the time of Khem (ancient Egypt) and referred to as the World Spirit. The life of the original prokaryote bacteria on Earth were solely dependent on their ability to attract and capture ignitons.',
  ],
  gdv: {
    unit: 'Energy · 10⁻² Joules',
    compare: [
      { label: 'Non-Enhanced Water Molecule', energy: '5.56', noise: '3033', image: '/science/gdv-regular.png' },
      { label: 'Igniton Enhanced Water Molecule', energy: '14.04', noise: '1', image: '/science/gdv-charged.png' },
    ],
  },
  outro: [
    'Igniton currently focuses on improving longevity, cognition, memory, neuronal speed, reaction time, stimulating the pineal gland, etc. The quantum interaction between protons and ignitons allow for ignitons to disperse geometrically on the proton’s peripheral gray region, and improve quantum energy and functionality of targeted molecules.',
    'University studies published in peer-reviewed medical journals show significant improvement of memory and other cognitive functions within 30-60 days of exposure.',
  ],
  inc: {
    heading: 'Igniton Inc.',
    bullets: [
      'Colorado Tech focusing on improving longevity, cognitive functions, memory, and energy',
      'No debt, 15 patents',
      'Global distribution network in 50 countries',
    ],
  },
}

/* ------------------------------------------------------ PRODUCT OVERVIEW */
const STUDIES = 'https://igniton.com/pages/studies-trade-journals'
export const productOverview = {
  heading: 'Quantum-Enhanced Supplements',
  products: [
    {
      suffix: 'Cognition',
      image: '/products/cognition.jpg',
      stats: ['+83% Mental Performance', '+51% Attention', '+28% Short Term Memory', '+25% Operational Memory'],
      basis: 'vs. Placebo & Non-Charged',
      studies: [
        { label: 'Download Published Study', href: 'https://cdn.shopify.com/s/files/1/0604/2573/2151/files/Tab-2.2-Alternative-Medicine-Journal-Cogni.pdf' },
        { label: 'Download COVID Published Study', href: 'https://cdn.shopify.com/s/files/1/0604/2573/2151/files/Tab-3.2-Alternative-Medicine-Journal-Covid.pdf' },
      ],
    },
    {
      suffix: 'Longevity',
      image: '/products/longevity.jpg',
      stats: ['-37% IL-6', '-28% CRP', '-13% GGT', '-9% Diastolic BP', '-8% Systolic BP'],
      basis: 'vs. Placebo & Non-Charged',
      studies: [{ label: 'Download Published Study', href: STUDIES }],
    },
    {
      suffix: 'REM Sleep',
      image: '/products/rem.jpg',
      stats: ['+25% REM Time', '+13% More Sleep', '-54% Interruptions', '-92% A.M. Weakness'],
      basis: 'vs. Placebo',
      studies: [],
    },
    {
      suffix: 'Peptide Eye Serum',
      image: '/products/peptide.jpg',
      stats: [
        '+52% Hydration',
        '+30% Barrier Function',
        '85% Brighter Looking Skin',
        '85% Smoother Skin',
        '79% Reduced Under-Eye Puffiness',
        '75% Fewer visible wrinkles',
        '75% Reduced appearance of Dark Circles',
      ],
      basis: '',
      studies: [],
    },
  ],
  awards: [
    { tier: 'Gold', image: '/awards/covr-gold.png' },
    { tier: 'Silver', image: '/awards/covr-silver.png' },
    { tier: 'Bronze', image: '/awards/covr-bronze.png' },
  ],
  worldRecord: {
    heading: 'World Record 60 m Hurdles 40+',
    sub: '(after 9 months of using IgniLongevity & IgniCognition)',
    image: '/deck/world-record.jpg',
  },
  biophotonic: {
    heading: 'Biophotonic Devices',
    devices: [
      {
        name: 'Bio-Well',
        image: '/deck/biowell.jpg',
        text: 'Photonic imaging to provide information about the human energy field (organ-specific). About 5,000 units sold to hospitals, private clinics, and research labs around the world',
      },
      {
        name: 'Sputnik',
        image: '/deck/sputnik.jpg',
        text: 'Sensor for testing the energy of a defined space (vacuum fluctuation)',
      },
      {
        name: 'Bio-well Scanners',
        image: '/deck/scanners.jpg',
        text: '10-finger sensor for “Coherence HIT” chair',
      },
    ],
  },
  usb: {
    heading: 'Igniton-Coded Microchip USB Device (2027)',
    image: '/deck/usb-gaia.jpg',
    caption: 'Igniton release coverage 400 sq. ft.',
  },
  chair: {
    heading: 'H.I.T. Chair = Holoton-Igniton Therapy for Quantum Coherence (2028)',
    image: '/deck/hit-chair.jpg',
    note: '*In 2025 a version was built for NASA for the no gravity environment',
  },
}

/* ------------------------------------------------------------ TECHNOLOGY */
export const technologyDeck = {
  intro: [
    'Igniton (eNPQ quasi-particle) technology was originally developed in the 1990’s, and in 1995 the lab was established at CERN facility (Switzerland) with much of the hardware to verify and measure the eNPQ quasi-particle named “ignitons” rented from CERN. The current operation is in Colorado.',
    'The component stages of the eNQP (Ignitons) characterization system are from the Swiss laboratories, that were used until two years ago, when the necessary data on the nature of the quasi-particles and their industrial application had been collected, and the current equipment was designed, constructed and established in Colorado.',
  ],
  current: {
    heading: 'Current Igniton Equipment',
    items: [
      { caption: 'High vacuum cold plasma with coherent photonic stream complex (using Si-wafers with quantum well nano-layers).', image: '/apparatus/coldplasma.jpg' },
      { caption: 'Computer Control Unit and Vacuum Plasma Chambers', image: '/apparatus/control.jpg' },
      { caption: 'Direct igniton deposition focusing on the proton’s peripheral gray region.', image: '/apparatus/deposition.jpg' },
      { caption: 'Laser and plasma vacuum chamber', image: '/apparatus/deposition-protons.jpg' },
    ],
  },
  original: {
    heading: 'Original Igniton Systems (Switzerland)',
    items: [
      { caption: 'Electronic Control and Counting Systems — Data I/O systems, cascade particle counters, signal amplification systems, radio frequency generator drivers, network control.', image: '/apparatus/counting.jpg' },
      { caption: 'Control Room — Measurement Monitoring Set', image: '/deck/tech-controlroom.jpg' },
      { caption: 'Light-matter interaction — Laser sample disintegration. The sample is disintegrated with laser power. The particle packets (including eNQP) are isolated and conveyed into the circuit.', image: '/apparatus/light-matter.jpg' },
      { caption: 'Splitter — Separation system between transport particles and eNQP. Pre-acceleration stage', image: '/deck/tech-splitter.jpg' },
      { caption: 'Mixer — eNQP acceleration stage', image: '/apparatus/acceleration.jpg' },
    ],
  },
}

/* --------------------------------------------------------------- SCIENCE */
export const scienceDeck = {
  whatAre: {
    heading: 'What are Ignitons?',
    paragraphs: [
      'Elementary “pulses of coherence” that form and disappear in the field expressing an emergent order of reality. They are quanta of memory coherence as a nonlinear field bound to matter flips from a dispersive (potential) to a stable, memory-carrying mode (particle). They are carriers of non-localized, non-linear memory.',
      'Ignitons can be treated as “bosonic neutral quasi-particles”, analogous to a coherent plasmon-polariton hybrid, a “borderline” case at the coherence threshold of the polariton systems (photons + exciton, photon + plasmon).',
      'Igniton is an “edge field event at coherence threshold”. Igniton is an event when the field transitions to a memory carrying mode, at the same time it is a quasi-particle, because this transition can be wrapped up in an effective “particle” description.',
    ],
  },
  physics: {
    heading: 'Igniton place in physics',
    levels: [
      'General physics: atoms, molecules',
      'Nuclear physics: sub-atomic, quarks, baryonic matter (protons, neutrons)',
      'Quantum physics: el.-mag. waves (light - photons), quasi-particles (neutrinos, Higgs boson)',
      'Keylon mechanics: space/time — no light or matter (ignitons “frozen” in time)',
      'Igniton coherence field: no space/time or matter - coherence “sparks”',
    ],
  },
  uses: {
    intro: [
      'Ignitons are the basis of the life force, referred to by the ancients as World Spirit. The energy some refer to as prana is a form (effect) of ignitons.',
      'Ignitons increase energy and effectiveness of embedded molecules.',
    ],
    heading: 'Uses',
    list: [
      'Longevity — regeneration, telomere extension, inflammation reduction, energy boost',
      'Health — coherence, cell repair',
      'Cognition improvement — increase of electric potential of neurons',
      'Functional enhancement of embedded molecules (same effect with about 3x lesser amount)',
      'Cosmetics (restructuring telomeres in the skin)',
      'Agriculture (about 25% more seeds germinate, and grow 30% faster)',
      'New material creation',
    ],
  },
}
