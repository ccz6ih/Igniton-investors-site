import type { MetadataRoute } from 'next'
import { site } from '@/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-07-02')
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${site.url}/vision`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${site.url}/team`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
