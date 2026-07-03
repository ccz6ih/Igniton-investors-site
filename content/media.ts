// MEDIA / video page — thought-leader conversations about Igniton.
// Videos are from the official Igniton YouTube channel.

export const mediaIntro = {
  eyebrow: 'In conversation',
  headlineLead: 'The conversation around ',
  headlineEmphasis: 'Igniton',
  headlinePost: '.',
  lead: 'Leading voices in consciousness, longevity, and human performance explore the ideas — and the technology — behind Igniton.',
}

export type Video = {
  id: string
  title: string
  speaker: string
  thumb: string
}

export const videos: Video[] = [
  {
    id: 'EBdll8MhPzw',
    title: 'Blessing Our Energy Centers with Igniton',
    speaker: 'Dr. Joe Dispenza',
    thumb: '/videos/dispenza.jpg',
  },
  {
    id: '9vJUvQdSnWw',
    title: 'Igniton Technology',
    speaker: 'Dave Asprey — Father of Biohacking',
    thumb: '/videos/asprey.jpg',
  },
  {
    id: 'OGSrB9FBMGs',
    title: 'Gregg Braden & Dr. Theresa Bullard on Ignitons',
    speaker: 'Gregg Braden · Dr. Theresa Bullard',
    thumb: '/videos/braden-bullard.jpg',
  },
  {
    id: 'BYpStFW-ZQw',
    title: 'Ignitons: The Star-Born Particles of Ancient Enlightenment & Modern Biohacking',
    speaker: 'Tim Hogan · Dr. Theresa Bullard',
    thumb: '/videos/hogan-bullard.jpg',
  },
  {
    id: 'P-kovHVOnCE',
    title: 'What If Consciousness Is Measurable? Light, Energy & the Human Field',
    speaker: 'Ashley Grace & guests',
    thumb: '/videos/ashley-grace.jpg',
  },
  {
    id: 'PSSORrp_LTo',
    title: 'Consciousness, Matter, and Energy',
    speaker: 'Cosmic energy & Igniton',
    thumb: '/videos/cosmic-energy.jpg',
  },
]
