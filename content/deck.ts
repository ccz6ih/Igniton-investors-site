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
  // Company video — streamed from Google Drive (file must be "anyone with the
  // link can view"). Embedded via Drive's preview player; nothing hosted in repo.
  // Preferred: a hosted video file (Supabase Storage) — plays on one click.
  // Also accepts a YouTube/Vimeo/Drive link. Falls back to videoDriveId.
  videoUrl: '',
  videoDriveId: '1Vj2SwAml-JZ526hYD2PP_qUIoTmcIY_I',
  videoPoster: '/lifestyle/home-video-poster.jpg',
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
  gdv: {
    heading: 'Igniton Impact on Water',
    subheading: '(Photon Emission)',
    unit: '10⁻³ Joules',
    compare: [
      { label: 'Water Molecule', energy: '5.56', noise: '3033', image: '/science/gdv-regular.png' },
      { label: 'Same Water Molecule - Igniton Enhanced', energy: '14.04', noise: '1', image: '/science/gdv-charged.png' },
    ],
  },
  outro: [
    'Igniton currently focuses on improving longevity, cognition, memory, neuronal speed, reaction time, stimulating the pineal gland, etc. The quantum interaction between protons and ignitons allow for ignitons to disperse geometrically on the proton’s peripheral gray region, and improve quantum energy and functionality of targeted molecules.',
    'University studies published in peer-reviewed medical journals show significant improvement of memory and other cognitive functions within 30-60 days of ingestion.',
  ],
  inc: {
    heading: 'Igniton Inc.',
    bullets: [
      'Colorado Tech, based in Colorado, focusing on improving longevity, coherence, cognitive functions, memory, and energy improvement',
      'Equity $17 million, cash $4.5 million, no debt',
      '15 patents',
      'Global distribution network in 50 countries',
    ],
    mapImage: '/deck/world-map.png',
  },
}

/* ------------------------------------------------------ PRODUCT OVERVIEW */
const STUDIES = 'https://igniton.com/pages/studies-trade-journals'
export const productOverview = {
  heading: 'Quantum-Enhanced Supplements',
  // The four section-tab button labels (editable in the Products editor).
  tabs: [
    'Quantum-Enhanced Supplements',
    'Biophotonic Devices',
    'Microchip Release',
    'Coherence Environment',
  ],
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
      studies: [
        {
          label: 'Download Published Study',
          href: 'https://cdn.shopify.com/s/files/1/0604/2573/2151/files/raul-et-al-2025-influence-of-an-amino-acid-composition-enhanced-with-cold-plasma-radiation-on-psychological-stress-a.pdf?v=1780012013',
        },
      ],
    },
    {
      suffix: 'REM Sleep',
      image: '/products/rem.jpg',
      stats: ['+25% REM Time', '+13% More Sleep', '-54% Interruptions', '-92% A.M. Weakness'],
      basis: 'vs. Placebo',
      studies: [{ label: 'Download Study', href: '' }],
    },
    {
      suffix: 'Peptide Eye Serum',
      image: '/products/peptide-serum-4.jpg',
      stats: [
        '+52% Hydration',
        '+30% Barrier Function',
        '85% Brighter Looking Skin',
        '85% Smoother Skin',
        '79% Reduced Under-Eye Puffiness',
        '75% Fewer Visible Wrinkles',
        '75% Reduced Dark Circles',
      ],
      basis: '',
      studies: [{ label: 'Download Clinical Study', href: '' }],
    },
  ],
  awards: [
    { tier: 'Gold', image: '/awards/covr-gold.png' },
  ],
  worldRecord: {
    heading: 'World Record 60 m Hurdles 40+',
    sub: '12 months of using IgniLongevity & IgniCognition (after 2 years of injuries)',
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
  microchip: {
    heading: 'Igniton’s Next Step - Release from microchip',
    stick: {
      image: '/deck/gaia-stick.png',
      caption: 'Igniton new delivery - Gaia TV Stick',
      sub: 'Release from microchip coding controlled by Gaia via online',
    },
    equipment: {
      image: '/deck/gaia-equipment.png',
      caption: 'Equipment for chip coding by ignitons',
    },
  },
  coherence: {
    heading: 'Igniton Coherence Imprinting Biophotons',
    productName: 'Igni Coherence',
    lead: 'Boosts ability of Chromatin for ignitons imprinting biophotons',
    points: [
      'Chromatin is an interface between a coherent field and a biological manifestation',
      'Chromatin acting as a stabilizer of possibilities (igniton – chromatin – biophoton)',
      'Igniton creates a change in coherence of the imprint, chromatin reacts to the imprint',
      'Chromatin changes its topography, influencing coherent processes in the cell memory matrix',
      'Change of conformation state of chromatin changes electron processes in the nucleus',
      'Chromatin is stabilizing memory of coherence – anchoring information in time',
    ],
    image: '/products/igni-coherence.png',
  },
  chair: {
    heading: 'Next Phase - Igniton Coherence Environment',
    productTitle: 'COHERENCE HIT Chair  (partially functioning prototype)',
    subtitle: 'Holoton only version delivered to NASA in 2026',
    image: '/deck/hit-chair-pod.png',
    imageNote: 'Bio-well scanners in arm rest',
    points: [
      'H.I.T. = Holoton-Igniton Therapy (quantum coherence)',
      'Coherence field effect on cellular entropy',
      'Similar to light effect on darkness',
      'A lot of diseases and aging symptoms are results of entropy at the cellular level',
    ],
    equationsHeading: 'Energetic Landscape of “Coherence Chair”',
    equationsImage: '/deck/coherence-equations.png',
  },
}

/* ------------------------------------------------------------ TECHNOLOGY */
export const technologyDeck = {
  introHeading: 'Igniton Equipment',
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
  // Opening intro — heading + life-force text at the top of Science. The Uses
  // list (below) renders in this same section. Edited in the Science editor.
  // Use *word* for italic, **word** for bold.
  intro: {
    heading: 'IGNITON',
    paragraphs: [
      'Ignitons are the basis of the life force, referred to by the ancients as World Spirit. The energy some refer to as *prana* is a form (effect) of ignitons.',
      'Ignitons increase the energy and effectiveness of embedded molecules.',
    ],
  },
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
    intro: [],
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
  process: {
    heading: 'Igniton process',
    lead: 'Embedding as an operative property:',
    points: [
      'Igniton is neutral and has no hard topological charge, can therefore be “embedded” into the electron shell of an atom',
      'Change in the electron properties of the host, without changing its chemical identity, increasing bioavailability',
    ],
  },
}
