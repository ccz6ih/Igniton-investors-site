'use client'

import { useState } from 'react'
import Image from 'next/image'

function youTubeId(url: string) {
  const m = url.match(/(?:youtu\.be\/|[?&]v=|\/embed\/)([\w-]{11})/)
  return m ? m[1] : null
}
function vimeoId(url: string) {
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)
  return m ? m[1] : null
}
function driveFileId(url: string) {
  const m = url.match(/\/d\/([\w-]+)/) || url.match(/[?&]id=([\w-]+)/)
  return m ? m[1] : null
}

// Company video. A hosted file (e.g. Supabase Storage) plays immediately via a
// native player — one click, no second play button. A YouTube/Vimeo/Drive link
// uses a lightweight poster + click-to-load embed. Falls back to the legacy
// Google Drive file ID when no videoUrl is set.
export function HomeVideo({
  videoUrl,
  driveId,
  poster,
}: {
  videoUrl?: string
  driveId?: string
  poster: string
}) {
  const [play, setPlay] = useState(false)
  const url = (videoUrl || '').trim()

  const isEmbedLink = /youtube\.com|youtu\.be|vimeo\.com|drive\.google\.com/.test(url)

  // Direct video file (incl. Supabase Storage) — native player, plays on click.
  if (url && !isEmbedLink) {
    return (
      <video
        controls
        preload="metadata"
        poster={poster}
        className="aspect-video w-full rounded-section bg-navy ring-1 ring-hairline"
      >
        <source src={url} />
        Your browser doesn’t support embedded video.
      </video>
    )
  }

  const yt = url ? youTubeId(url) : null
  const vm = url ? vimeoId(url) : null
  const drv = (url ? driveFileId(url) : null) || driveId || null
  const embedSrc = yt
    ? `https://www.youtube-nocookie.com/embed/${yt}?autoplay=1`
    : vm
      ? `https://player.vimeo.com/video/${vm}?autoplay=1`
      : drv
        ? `https://drive.google.com/file/d/${drv}/preview`
        : ''

  if (!embedSrc) return null

  return (
    <div className="relative aspect-video overflow-hidden rounded-section bg-navy ring-1 ring-hairline">
      {play ? (
        <iframe
          src={embedSrc}
          title="Igniton company video"
          allow="autoplay; fullscreen"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          aria-label="Play the Igniton company video"
          className="group absolute inset-0 h-full w-full"
        >
          <Image src={poster} alt="" fill sizes="(max-width:768px) 100vw, 48rem" className="object-cover" />
          <span className="absolute inset-0 bg-navy/20 transition group-hover:bg-navy/10" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-bright text-navy shadow-[0_8px_30px_rgba(18,18,65,0.35)] transition group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
