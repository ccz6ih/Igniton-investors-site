import 'server-only'
import { unstable_cache } from 'next/cache'
import { createReadClient } from '@/lib/supabase/read'
import * as defaults from '@/content/deck'

// The editable content keys mirror the exports in content/deck.ts exactly, so
// the compiled-in objects double as the TypeScript shape AND the fallback.
export type ContentKey = keyof typeof defaults

export const CONTENT_TAG = 'content'
export const contentTag = (key: ContentKey) => `content:${key}`

function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

// Deep-merge saved content over the compiled-in default so newly-added fields
// (nested included) always render from the default even when the DB row predates
// them. Arrays are replaced wholesale (the saved value wins).
function deepMerge<T>(base: T, override: unknown): T {
  if (!isPlainObject(base) || !isPlainObject(override)) {
    return (override === undefined ? base : (override as T))
  }
  const out: Record<string, unknown> = { ...base }
  for (const k of Object.keys(override)) {
    const bv = (base as Record<string, unknown>)[k]
    const ov = override[k]
    out[k] = isPlainObject(bv) && isPlainObject(ov) ? deepMerge(bv, ov) : ov
  }
  return out as T
}

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

  return deepMerge(fallback, data.data)
}

// Live content for a page section, cached and tagged so an admin save can
// revalidate it instantly (see lib/admin/actions.ts). Falls back to the
// compiled-in default when Supabase is unavailable.
// Bump to force a one-time refetch of all content (busts the persisted data
// cache after a direct DB edit that didn't go through an admin save).
const CACHE_VERSION = 'v2'

export function getContent<K extends ContentKey>(key: K) {
  return unstable_cache(() => fetchContent(key), ['content', key, CACHE_VERSION], {
    tags: [CONTENT_TAG, contentTag(key)],
  })() as Promise<(typeof defaults)[K]>
}
