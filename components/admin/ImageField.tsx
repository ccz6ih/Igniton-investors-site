'use client'

import { useState } from 'react'
import { createSupabaseBrowser } from '@/lib/supabase/client'
import { IMAGE_BUCKET } from '@/lib/admin/config'
import { FieldLabel } from './ui'

// Uploads an image to Supabase Storage and returns its public URL. Existing
// values may be local paths (/deck/x.jpg) or full URLs — both preview fine.
export function ImageField({
  label,
  value,
  onChange,
  hint,
}: {
  label: string
  value: string
  onChange: (url: string) => void
  hint?: string
}) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setBusy(true)
    setError(null)

    const supabase = createSupabaseBrowser()
    const ext = (file.name.split('.').pop() || 'jpg').toLowerCase()
    const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`

    const { error: upErr } = await supabase.storage
      .from(IMAGE_BUCKET)
      .upload(path, file, { cacheControl: '31536000', upsert: false })

    if (upErr) {
      setError(upErr.message)
      setBusy(false)
      return
    }

    const { data } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(path)
    onChange(data.publicUrl)
    setBusy(false)
  }

  return (
    <div>
      <FieldLabel label={label} hint={hint} />
      <div className="flex items-center gap-4">
        <div className="relative h-20 w-28 flex-none overflow-hidden rounded-lg border border-hairline bg-off-white">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="" className="h-full w-full object-cover" />
          ) : (
            <span className="grid h-full w-full place-items-center text-xs text-warm-gray">No image</span>
          )}
        </div>
        <div className="space-y-1.5">
          <label className="inline-block cursor-pointer rounded-lg border border-navy px-3 py-1.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white">
            {busy ? 'Uploading…' : 'Replace image'}
            <input
              type="file"
              accept="image/*"
              onChange={handleFile}
              disabled={busy}
              className="hidden"
            />
          </label>
          {error && <p className="text-xs text-red-600">{error}</p>}
          {value && <p className="max-w-xs truncate text-xs text-warm-gray">{value}</p>}
        </div>
      </div>
    </div>
  )
}
