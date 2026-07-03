'use client'

import { useState } from 'react'
import Image from 'next/image'

// Lite YouTube embed: shows the thumbnail + play button, and only loads the
// (privacy-friendly) iframe once the user clicks — keeps the page fast.
export function VideoEmbed({
  id,
  title,
  thumb,
  priority = false,
}: {
  id: string
  title: string
  thumb: string
  priority?: boolean
}) {
  const [play, setPlay] = useState(false)

  return (
    <div className="relative aspect-video overflow-hidden rounded-section bg-navy ring-1 ring-hairline">
      {play ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlay(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full"
        >
          <Image
            src={thumb}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
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
