'use client'

import { useState } from 'react'
import Image from 'next/image'

// Company video: shows the branded poster + play button, then loads Google
// Drive's streaming player on click. (Drive can't autoplay, so its own play
// control appears once loaded — for a true one-click + thumbnail experience,
// host on YouTube/Vimeo instead.) The Drive file must be shared publicly.
export function HomeVideo({ driveId, poster }: { driveId: string; poster: string }) {
  const [play, setPlay] = useState(false)

  return (
    <div className="relative aspect-video overflow-hidden rounded-section bg-navy ring-1 ring-hairline">
      {play ? (
        <iframe
          src={`https://drive.google.com/file/d/${driveId}/preview`}
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
