import 'server-only'
import { unstable_cache } from 'next/cache'
import { createReadClient } from '@/lib/supabase/read'
import type { Block } from '@/lib/sections/types'

// Custom sections are stored in the same `content` table under a per-page key,
// e.g. "sections:home". Default is an empty list (page shows only its fixed
// content until Ashley adds blocks).
export const sectionsKey = (slug: string) => `sections:${slug}`
export const sectionsTag = (slug: string) => `sections:${slug}`

async function fetchSections(slug: string): Promise<Block[]> {
  const supabase = createReadClient()
  const { data, error } = await supabase
    .from('content')
    .select('data')
    .eq('key', sectionsKey(slug))
    .maybeSingle()

  if (error || !data?.data) return []
  return (data.data as Block[]) ?? []
}

export function getSections(slug: string) {
  return unstable_cache(() => fetchSections(slug), ['sections', slug], {
    tags: ['content', sectionsTag(slug)],
  })() as Promise<Block[]>
}
