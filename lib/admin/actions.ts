'use server'

import { revalidateTag } from 'next/cache'
import { createSupabaseServer } from '@/lib/supabase/server'
import { getAdmin } from '@/lib/admin/auth'
import { contentTag, type ContentKey } from '@/lib/content'

export type SaveResult = { ok: true } | { ok: false; error: string }

// Persists an edited content record and revalidates it so the change is live
// immediately (no redeploy). Admin-only — also enforced by RLS.
export async function saveContent(
  key: ContentKey,
  data: unknown,
): Promise<SaveResult> {
  const admin = await getAdmin()
  if (!admin) return { ok: false, error: 'Not signed in as an admin.' }

  const supabase = await createSupabaseServer()
  if (!supabase) return { ok: false, error: 'Admin is not configured (missing Supabase keys).' }
  const { error } = await supabase
    .from('content')
    .upsert(
      { key, data, updated_at: new Date().toISOString(), updated_by: admin.email },
      { onConflict: 'key' },
    )

  if (error) return { ok: false, error: error.message }

  revalidateTag(contentTag(key))
  return { ok: true }
}
