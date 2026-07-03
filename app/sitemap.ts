import type { MetadataRoute } from 'next'
import { site } from '@/content/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-07-03')
  const routes = ['/', '/about-us', '/product-overview', '/technology', '/science']
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: r === '/' ? 1 : 0.8,
  }))
}
