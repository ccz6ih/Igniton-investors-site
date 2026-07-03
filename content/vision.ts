// THE VISION / "Born from Light" — founder philosophy page.
// Grounded in Jirka Rysavy's Igniton lexicon + Gaia Episode 7 narration.
// TIER: NARRATIVE. Per the lexicon's own rules, everything here is presented
// explicitly as Igniton's framework/worldview — NOT settled science, and NEVER
// attached to a product efficacy claim. Quotes are verbatim/faithful to Jirka.

export const visionHero = {
  eyebrow: 'The Igniton Idea · A founder’s framework',
  headlineLead: 'What if the universe isn’t expanding — but ',
  headlineEmphasis: 'remembering',
  headlinePost: '?',
  lead: 'Before Igniton was a supplement, it was an idea. Founder Jirka Rysavy spent decades on a single question — how light, memory, and coherence shape living systems. This is that worldview, in his words. We share it as the company’s framework, not as settled science.',
}

export type Movement = {
  eyebrow: string
  titleLead: string
  titleEmphasis: string
  titlePost?: string
  quote?: string
  body: string
  image: string
  imageAlt: string
  imageSide: 'left' | 'right'
}

export const movements: Movement[] = [
  {
    eyebrow: 'The premise',
    titleLead: 'The next frontier isn’t a molecule. It’s ',
    titleEmphasis: 'coherence',
    titlePost: '.',
    body: 'For a century, wellness asked one question: what do I add? Igniton asks a deeper one — how coherently can a living system organize itself? In the framework, coherence is a system’s ability to hold its own shape while staying open to change: to know its identity without closing to it.',
    image: '/hero/yoga.jpg',
    imageAlt: 'A figure in a warrior pose within a field of radiant light',
    imageSide: 'right',
  },
  {
    eyebrow: 'Ignitons',
    titleLead: 'The most subtle form of ',
    titleEmphasis: 'light',
    titlePost: '.',
    quote: 'Light that carries intelligence, but not matter — a carrier of non-localized memory, and the principle of continuity.',
    body: 'Named for fire, an igniton is described as an elementary “pulse of coherence” — a quantum of memory in the field. In the framework, ignitons are what let structure, and life, remember how to form: not a record of the past, but the ability to re-actualize it.',
    image: '/hero/sunset.jpg',
    imageAlt: 'A luminous sky at the threshold of light',
    imageSide: 'left',
  },
  {
    eyebrow: 'Memory & time',
    titleLead: 'Memory is a ',
    titleEmphasis: 'reconstruction',
    titlePost: ', not a record.',
    quote: 'Time is a function of memory. Memory is not a function of time.',
    body: 'In Igniton’s view the past is not a fixed archive; it is re-read each moment from the field’s present configuration. It is why the universe behaves as if it remembers how to make galaxies, cells, and minds — “the memory inertia of the field,” carried by ignitons.',
    image: '/lifestyle/sleep.jpg',
    imageAlt: 'A person at rest in low, warm light',
    imageSide: 'right',
  },
  {
    eyebrow: 'Consciousness',
    titleLead: 'The brain isn’t the source. It’s a ',
    titleEmphasis: 'gateway',
    titlePost: '.',
    quote: 'Consciousness enters the brain the way a radio signal enters a receiver — through interference patterns the device captures and amplifies.',
    body: 'The framework treats the mind as an interface that tunes into a wider field, not a machine that manufactures thought. That is why, taken to its end, it points at measurement and environment — biophotonic monitoring, a coherence chair — and not only at a capsule.',
    image: '/lifestyle/meditation.jpg',
    imageAlt: 'A moment of stillness and focus',
    imageSide: 'left',
  },
]

// The credibility keystone — the discipline that keeps the story honest.
export const discipline = {
  eyebrow: 'Where we hold the line',
  titleLead: 'Two things, kept ',
  titleEmphasis: 'separate',
  titlePost: '.',
  story: {
    tag: 'The framework — it inspires',
    body: 'Coherence, memory, light that carries intelligence. This is how Igniton thinks about why wellness might work at a deeper level. It is shared openly — and always as the company’s worldview, never as established science.',
  },
  science: {
    tag: 'The studies — they substantiate',
    body: 'Every product claim ties to a published study and careful structure-and-function language. Exact figures, correct study tier, nothing invented. The philosophy never does the studies’ job.',
  },
}

// The investor tie — why a worldview is an asset, not just a story.
export const investorTie = {
  eyebrow: 'Why it matters to investors',
  titleLead: 'A worldview this coherent is a ',
  titleEmphasis: 'moat',
  titlePost: '.',
  body: 'Thirty years of physics R&D, a body of owned IP, a measurement stack (GDV / Bio-Well biophotonics), and a device roadmap — an in-home igniton-field device, then the HIT coherence chair — all descend from one idea. That is a decade-plus head start a competitor cannot simply buy. The studied supplements are the first expression you can hold today; the framework is the reason there is a platform behind them.',
}

export const frameworkNote =
  '“Ignitons,” “coherence,” and the memory-field are Igniton’s framework, authored by founder Jirka Rysavy. They are presented as the company’s worldview and creative direction — not as established scientific consensus, and not as claims about any product’s effects.'
