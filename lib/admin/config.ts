import type { ContentKey } from '@/lib/content'

// Storage bucket for admin-uploaded images.
export const IMAGE_BUCKET = 'site-images'

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
    description: 'Company intro, GDV comparison, Igniton Inc. bullets.',
    keys: ['aboutUs'],
    ready: false,
  },
  {
    slug: 'product-overview',
    title: 'Product Overview',
    description: 'Products, stats, studies, awards, devices.',
    keys: ['productOverview'],
    ready: false,
  },
  {
    slug: 'technology',
    title: 'Technology',
    description: 'Current & original Igniton equipment.',
    keys: ['technologyDeck'],
    ready: false,
  },
  {
    slug: 'science',
    title: 'Science',
    description: 'What are Ignitons, place in physics, uses.',
    keys: ['scienceDeck'],
    ready: false,
  },
]
