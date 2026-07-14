'use server'

import { revalidateTag } from 'next/cache'
import { createSupabaseServer } from '@/lib/supabase/server'
import { getAdmin } from '@/lib/admin/auth'
import { sectionsKey, sectionsTag } from '@/lib/sections'
import type { Block } from '@/lib/sections/types'

export type SaveResult = { ok: true } | { ok: false; error: string }

// Persists a page's custom sections and revalidates so the change is live
// immediately. Admin-only (also enforced by RLS).
export async function saveSections(slug: string, blocks: Block[]): Promise<SaveResult> {
  const admin = await getAdmin()
  if (!admin) return { ok: false, error: 'Not signed in as an admin.' }

  const supabase = await createSupabaseServer()
  const { error } = await supabase.from('content').upsert(
    {
      key: sectionsKey(slug),
      data: blocks,
      updated_at: new Date().toISOString(),
      updated_by: admin.email,
    },
    { onConflict: 'key' },
  )

  if (error) return { ok: false, error: error.message }

  revalidateTag(sectionsTag(slug))
  return { ok: true }
}
