'use server'

import { revalidateTag } from 'next/cache'
import { createSupabaseServer } from '@/lib/supabase/server'
import { getAdmin } from '@/lib/admin/auth'
import { layoutKey, layoutTag } from '@/lib/layout'
import type { Block } from '@/lib/sections/types'

export type SaveResult = { ok: true } | { ok: false; error: string }

// Persists a page's arranged layout and revalidates it (instant publish).
export async function saveLayout(slug: string, blocks: Block[]): Promise<SaveResult> {
  const admin = await getAdmin()
  if (!admin) return { ok: false, error: 'Not signed in as an admin.' }

  const supabase = await createSupabaseServer()
  const { error } = await supabase.from('content').upsert(
    {
      key: layoutKey(slug),
      data: blocks,
      updated_at: new Date().toISOString(),
      updated_by: admin.email,
    },
    { onConflict: 'key' },
  )

  if (error) return { ok: false, error: error.message }

  revalidateTag(layoutTag(slug))
  return { ok: true }
}
