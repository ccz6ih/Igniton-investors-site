import type { MetadataRoute } from 'next'
import { site } from '@/content/site'

// Explicitly welcome the major AI / answer-engine crawlers (AEO), plus all
// others. NOTE: while the temporary password gate (middleware.ts) is active,
// crawlers can read this file but cannot access the pages — remove the gate to
// let the site be crawled/indexed.
export default function robots(): MetadataRoute.Robots {
  const aiAgents = [
    'GPTBot', // OpenAI / ChatGPT
    'OAI-SearchBot', // OpenAI search
    'ChatGPT-User',
    'PerplexityBot', // Perplexity
    'Perplexity-User',
    'ClaudeBot', // Anthropic / Claude
    'Claude-User',
    'anthropic-ai',
    'Google-Extended', // Gemini / Google AI
    'Applebot-Extended', // Apple Intelligence
    'CCBot', // Common Crawl (used to train many models)
    'Amazonbot',
    'Bytespider',
    'cohere-ai',
  ]

  return {
    rules: [
      ...aiAgents.map((userAgent) => ({ userAgent, allow: '/' })),
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  }
}
