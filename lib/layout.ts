import 'server-only'
import { unstable_cache } from 'next/cache'
import { createReadClient } from '@/lib/supabase/read'
import { defaultLayout, reconcileLayout } from '@/lib/sections/builtins'
import type { Block } from '@/lib/sections/types'

// A page's full layout (built-in + custom blocks, in order) lives in the
// `content` table under "layout:<slug>". Default = the built-in sections in
// natural order, so an un-arranged page is identical to the original.
export const layoutKey = (slug: string) => `layout:${slug}`
export const layoutTag = (slug: string) => `layout:${slug}`

async function fetchLayout(slug: string): Promise<Block[]> {
  const supabase = createReadClient()
  const { data, error } = await supabase
    .from('content')
    .select('data')
    .eq('key', layoutKey(slug))
    .maybeSingle()

  if (error || !data?.data) return defaultLayout(slug)
  return reconcileLayout(slug, data.data as Block[])
}

export function getPageLayout(slug: string) {
  return unstable_cache(() => fetchLayout(slug), ['layout', slug], {
    tags: ['content', layoutTag(slug)],
  })() as Promise<Block[]>
}
