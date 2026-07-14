import Image from 'next/image'
import type { Block } from '@/lib/sections/types'

// Renders a single custom block with brand styling. Server component.
export function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'richText':
      return (
        <div className="mx-auto max-w-3xl">
          {block.heading && (
            <h2 className="font-display text-2xl text-navy sm:text-3xl">{block.heading}</h2>
          )}
          <div className="mt-4 space-y-4 leading-relaxed text-warm-gray">
            {block.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      )

    case 'imageText':
      return (
        <div className="mx-auto grid max-w-4xl items-center gap-8 sm:grid-cols-2">
          <div
            className={`relative aspect-[4/3] overflow-hidden rounded-section bg-off-white ${
              block.imageSide === 'right' ? 'sm:order-2' : ''
            }`}
          >
            {block.image && (
              <Image
                src={block.image}
                alt={block.heading || ''}
                fill
                sizes="(max-width:640px) 100vw, 32rem"
                className="object-cover"
              />
            )}
          </div>
          <div>
            {block.heading && <h2 className="font-display text-2xl text-navy">{block.heading}</h2>}
            <div className="mt-3 space-y-3 leading-relaxed text-warm-gray">
              {block.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      )

    case 'statRow':
      return (
        <div className="mx-auto max-w-4xl text-center">
          {block.heading && <h2 className="font-display text-2xl text-navy">{block.heading}</h2>}
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {block.stats.map((s, i) => (
              <div key={i}>
                <p className="font-display text-3xl text-gold sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-warm-gray">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      )

    case 'quote':
      return (
        <figure className="mx-auto max-w-3xl text-center">
          <blockquote className="font-display text-2xl italic text-navy sm:text-3xl">
            “{block.quote}”
          </blockquote>
          {block.attribution && (
            <figcaption className="mt-4 text-sm uppercase tracking-[0.15em] text-warm-gray">
              {block.attribution}
            </figcaption>
          )}
        </figure>
      )

    case 'cta':
      return (
        <div className="mx-auto max-w-2xl text-center">
          {block.heading && (
            <h2 className="font-display text-2xl text-navy sm:text-3xl">{block.heading}</h2>
          )}
          {block.body && <p className="mt-3 leading-relaxed text-warm-gray">{block.body}</p>}
          {block.buttonLabel && (
            <a
              href={block.buttonHref || '#'}
              className="mt-6 inline-block rounded-lg bg-navy px-6 py-3 font-semibold text-white transition hover:bg-navy/90"
            >
              {block.buttonLabel}
            </a>
          )}
        </div>
      )
  }
}
