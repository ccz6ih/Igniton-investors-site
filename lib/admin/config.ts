import type { ContentKey } from '@/lib/content'

// Storage bucket for admin-uploaded images.
export const IMAGE_BUCKET = 'site-images'

// Storage bucket for larger media + documents (video, PDF).
export const MEDIA_BUCKET = 'site-media'

// The pages that appear in the admin dashboard. `ready` flips to true as each
// page's editor ships (Phase 1). `keys` are the content/deck.ts exports the
// page's editor manages.
export type AdminPage = {
  slug: string
  title: string
  description: string
  keys: ContentKey[]
  ready: boolean
}

export const ADMIN_PAGES: AdminPage[] = [
  {
    slug: 'home',
    title: 'Home',
    description: 'Hero image, tagline, company video, facility carousel, disclaimer.',
    keys: ['home', 'disclaimer'],
    ready: true,
  },
  {
    slug: 'about-us',
    title: 'About Us',
    description: 'GDV comparison, closing paragraphs, and Igniton Inc. bullets.',
    keys: ['aboutUs'],
    ready: true,
  },
  {
    slug: 'product-overview',
    title: 'Products',
    description: 'Products, studies, awards, devices, microchip, coherence chair.',
    keys: ['productOverview'],
    ready: true,
  },
  {
    slug: 'technology',
    title: 'Technology',
    description: 'Current & original Igniton equipment.',
    keys: ['technologyDeck'],
    ready: true,
  },
  {
    slug: 'science',
    title: 'Science',
    description: 'Opening intro, what Ignitons are, place in physics, uses.',
    keys: ['scienceDeck'],
    ready: true,
  },
]
