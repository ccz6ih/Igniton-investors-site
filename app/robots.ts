import type { MetadataRoute } from 'next'
import { site } from '@/content/site'

// Public / indexable (client decision). See docs/04_COMPLIANCE.md §2.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
