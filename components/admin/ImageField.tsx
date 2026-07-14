'use client'

import { useState } from 'react'
import { createSupabaseBrowser } from '@/lib/supabase/client'
import { IMAGE_BUCKET } from '@/lib/admin/config'
import { FieldLabel } from './ui'

// Cover-crops + downscales an image to a target aspect ratio, returning a JPEG
// blob. Used for photo frames so uploads always fit cleanly (no stretching or
// awkward cropping at display time).
async function coverCropToBlob(file: File, aspect: number, maxWidth = 1600): Promise<Blob> {
  let bitmap: ImageBitmap
  try {
    bitmap = await createImageBitmap(file, { imageOrientation: 'from-image' })
  } catch {
    bitmap = await createImageBitmap(file)
  }

  const srcAspect = bitmap.width / bitmap.height
  let sw = bitmap.width
  let sh = bitmap.height
  let sx = 0
  let sy = 0
  if (srcAspect > aspect) {
    sw = Math.round(bitmap.height * aspect)
    sx = Math.round((bitmap.width - sw) / 2)
  } else {
    sh = Math.round(bitmap.width / aspect)
    sy = Math.round((bitmap.height - sh) / 2)
  }

  let outW = sw
  let outH = sh
  if (outW > maxWidth) {
    const scale = maxWidth / outW
    outW = Math.round(outW * scale)
    outH = Math.round(outH * scale)
  }

  const canvas = document.createElement('canvas')
  canvas.width = outW
  canvas.height = outH
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('This browser can’t process images.')
  ctx.imageSmoothingQuality = 'high'
  ctx.drawImage(bitmap, sx, sy, sw, sh, 0, 0, outW, outH)
  bitmap.close?.()

  return await new Promise<Blob>((resolve, reject) =>
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error('Could not process the image.'))),
      'image/jpeg',
      0.85,
    ),
  )
}

// Uploads an image to Supabase Storage and returns its public URL. When
// `aspect` (width/height) is set, the image is auto-cropped + downscaled to fit
// that frame cleanly. Existing values may be local paths or full URLs.
export function ImageField({
  label,
  value,
  onChange,
  hint,
  aspect,
}: {
  label: string
  value: string
  onChange: (url: string) => void
  hint?: string
  aspect?: number
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
      let body: Blob = file
      let ext = (file.name.split('.').pop() || 'jpg').toLowerCase()
      let contentType = file.type || 'application/octet-stream'

      // Only reshape photo frames; leave logos/diagrams (contain fields) as-is
      // so transparency and crispness are preserved.
      if (aspect) {
        body = await coverCropToBlob(file, aspect)
        ext = 'jpg'
        contentType = 'image/jpeg'
      }

      const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`
      const { error: upErr } = await supabase.storage
        .from(IMAGE_BUCKET)
        .upload(path, body, { cacheControl: '31536000', upsert: false, contentType })

      if (upErr) {
        setError(upErr.message)
        return
      }

      const { data } = supabase.storage.from(IMAGE_BUCKET).getPublicUrl(path)
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
            <input type="file" accept="image/*" onChange={handleFile} disabled={busy} className="hidden" />
          </label>
          {aspect && <p className="text-xs text-warm-gray">Auto-cropped to fit this frame.</p>}
          {error && <p className="text-xs text-red-600">{error}</p>}
        </div>
      </div>
    </div>
  )
}
