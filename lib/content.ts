import 'server-only'
import { unstable_cache } from 'next/cache'
import { createReadClient } from '@/lib/supabase/read'
import * as defaults from '@/content/deck'

// The editable content keys mirror the exports in content/deck.ts exactly, so
// the compiled-in objects double as the TypeScript shape AND the fallback.
export type ContentKey = keyof typeof defaults

export const CONTENT_TAG = 'content'
export const contentTag = (key: ContentKey) => `content:${key}`

async function fetchContent<K extends ContentKey>(
  key: K,
): Promise<(typeof defaults)[K]> {
  const fallback = defaults[key]
  const supabase = createReadClient()
  if (!supabase) return fallback

  const { data, error } = await supabase
    .from('content')
    .select('data')
    .eq('key', key)
    .maybeSingle()

  if (error || !data?.data) return fallback

  // Shallow-merge over the default so a newly-added default field still renders
  // if the DB row predates it. Seeded rows carry the full object.
  return { ...(fallback as object), ...(data.data as object) } as (typeof defaults)[K]
}

// Live content for a page section, cached and tagged so an admin save can
// revalidate it instantly (see lib/admin/actions.ts). Falls back to the
// compiled-in default when Supabase is unavailable.
export function getContent<K extends ContentKey>(key: K) {
  return unstable_cache(() => fetchContent(key), ['content', key], {
    tags: [CONTENT_TAG, contentTag(key)],
  })() as Promise<(typeof defaults)[K]>
}
