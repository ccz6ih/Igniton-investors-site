'use client'

import { useState } from 'react'
import { createSupabaseBrowser } from '@/lib/supabase/client'
import { MEDIA_BUCKET } from '@/lib/admin/config'
import { FieldLabel } from './ui'

// Uploads a non-image file (video, PDF, …) to Supabase Storage and returns its
// public URL. Also accepts a pasted link (e.g. a YouTube URL, or a file
// uploaded via the Supabase dashboard). Very large files (a few hundred MB+)
// upload more reliably via the Supabase dashboard — paste the link here.
export function UploadField({
  label,
  value,
  onChange,
  accept,
  bucket = MEDIA_BUCKET,
  hint,
  uploadLabel = 'Upload file',
}: {
  label: string
  value: string
  onChange: (url: string) => void
  accept?: string
  bucket?: string
  hint?: string
  uploadLabel?: string
}) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    setBusy(true)
    setError(null)
    try {
      const supabase = createSupabaseBrowser()
      const ext = (file.name.split('.').pop() || 'bin').toLowerCase()
      const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`
      const { error: upErr } = await supabase.storage
        .from(bucket)
        .upload(path, file, { cacheControl: '31536000', upsert: false, contentType: file.type || undefined })
      if (upErr) {
        setError(upErr.message)
        return
      }
      const { data } = supabase.storage.from(bucket).getPublicUrl(path)
      onChange(data.publicUrl)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div>
      <FieldLabel label={label} hint={hint} />
      <div className="flex flex-wrap items-center gap-3">
        <label className="inline-block cursor-pointer whitespace-nowrap rounded-lg border border-navy px-3 py-1.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white">
          {busy ? 'Uploading…' : uploadLabel}
          <input type="file" accept={accept} onChange={handleFile} disabled={busy} className="hidden" />
        </label>
        <span className="text-xs text-warm-gray">or paste a link:</span>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="https://…"
          className="min-w-[200px] flex-1 rounded-lg border border-hairline bg-white px-3 py-1.5 text-sm text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
        />
      </div>
      {value && <p className="mt-1 truncate text-xs text-warm-gray">{value}</p>}
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  )
}
