// TEAM & ADVISORS. Founder + advisory board bios are verbatim from the source.

export type Person = {
  name: string
  title: string
  bio: string
  image: string | null // null → initials avatar until a headshot is supplied
}

export const teamIntro = {
  eyebrow: 'Team & Advisors',
  headlineLead: 'A proven founder and a ',
  headlineEmphasis: 'world-class',
  headlinePost: ' advisory board.',
}

export const founder: Person = {
  name: 'Jirka Rysavy',
  title: 'Founder',
  bio: 'Built several billion-dollar companies, including Corporate Express — Colorado’s largest privately owned company at $4.7B in revenue before its acquisition by Staples. Pioneered organic food retail with Crystal Market, the foundation of Wild Oats (later acquired by Whole Foods). Founder of Gaia Inc. (NASDAQ: GAIA). A former athletic champion and child math prodigy from the Czech Republic who lives simply in a mountain cabin.',
  image: null, // by preference, the founder does not use portraits — track record leads
}

// The founder prefers no portrait; his record is the credential.
export const founderMonogram = 'JR'
export const founderCredentials = [
  'Corporate Express — $4.7B revenue, acquired by Staples',
  'Crystal Market → Wild Oats → Whole Foods',
  'Founder, Gaia Inc. (NASDAQ: GAIA)',
]

export const advisors: Person[] = [
  {
    name: 'Prof. Konstantin Korotkov, PhD',
    title: 'Physics & Bioelectrography',
    bio: 'Professor of physics and inventor of Gas Discharge Visualization (GDV/EPI) technology. 200+ published papers and 15+ international patents; St. Petersburg University.',
    image: '/team/korotkov.jpg',
  },
  {
    name: 'Dr. Kenneth Ro, M.D.',
    title: 'Emergency & Internal Medicine',
    bio: 'Board-certified in Emergency and Internal Medicine with 35+ years of experience. Founder and medical director of “Back in the Game Men,” and author of PRIME: How to Win the Second Half of Life (2025).',
    image: '/team/kenro.jpg',
  },
  {
    name: 'Dr. Gail King, M.D., FACOG, FAARM',
    title: 'Integrative Medicine',
    bio: 'Board-certified OB/GYN with 30+ years of clinical practice, specializing in hormone optimization and personalized, integrative wellness.',
    image: '/team/king.webp',
  },
  {
    name: 'Dr. Raul Valverde, PhD',
    title: 'Concordia University',
    bio: 'Teaching Professor at Concordia University and lead author of the Igniton cognition study; background in AI and analytics for mental health, electrical engineering, and neurofinance.',
    image: '/team/valverde.jpg',
  },
  {
    name: 'Dave Asprey',
    title: 'Biohacking / Performance',
    bio: 'Founder of Bulletproof Coffee and widely recognized as the “Creator of Biohacking.” Four-time New York Times bestselling author and host of the top-ranked health podcast, The Human Upgrade.',
    image: '/team/asprey.jpg',
  },
  {
    name: 'James Colquhoun',
    title: 'Longevity Research',
    bio: 'Founder of Food Matters; director of award-winning documentaries on food and medicine. Focus on NAD+ precursors and mitochondrial support.',
    image: '/team/colquhoun.jpg',
  },
]
