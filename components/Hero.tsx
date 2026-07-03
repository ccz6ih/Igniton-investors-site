import Image from 'next/image'
import Link from 'next/link'
import { hero, metrics } from '@/content/overview'
import { MetricCell } from './Metric'
import { Reveal } from './Reveal'

// Light, warm hero matching the consumer home: left-aligned navy Playfair
// headline with a gold italic accent, a warm glow orb to the right, and the
// at-a-glance metric band below. Dark text on light canvas = readable.
export function Hero() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-[#fdfaf5] text-navy"
    >
      <div className="container-wide relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="max-w-2xl text-center lg:text-left">
            <Reveal>
              <p className="eyebrow mb-6">{hero.eyebrow}</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="h-hero">
                {hero.headlineLead}
                <br className="hidden sm:block" />
                {hero.headlineEmphasisPre}
                <em>{hero.headlineEmphasis}</em>
                {hero.headlineEmphasisPost}
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 text-lg leading-relaxed text-warm-gray">{hero.subhead}</p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
                <Link href={hero.primaryCta.href} className="btn-primary">
                  {hero.primaryCta.label}
                </Link>
                <Link href={hero.secondaryCta.href} className="btn-secondary">
                  {hero.secondaryCta.label}
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Right column: the visual held INSIDE the luminous orb — "Born from Light". */}
          <Reveal delay={200} className="relative hidden items-center justify-center lg:flex">
            {/* Soft gold glow radiating from behind the orb */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 scale-125"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(211,162,60,0.55) 0%, rgba(180,145,83,0.28) 42%, rgba(180,145,83,0) 70%)',
                filter: 'blur(6px)',
              }}
            />
            {/* The circular orb holding the warm, luminous visual — "Born from Light" */}
            <div className="relative aspect-square w-full max-w-[440px] overflow-hidden rounded-full shadow-[0_0_90px_18px_rgba(211,162,60,0.30)] ring-1 ring-gold/40">
              <Image
                src="/hero/eye-serum.jpg"
                alt="A face bathed in warm light as an Igniton serum is applied — the ‘Born from Light’ motif"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 40vw"
                className="object-cover"
              />
              {/* Inner warmth ring so the photo melts into the glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{ boxShadow: 'inset 0 0 60px 10px rgba(211,162,60,0.30)' }}
              />
            </div>
          </Reveal>
        </div>

        {/* At-a-glance metric band */}
        <Reveal delay={320}>
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-hairline pt-10 sm:grid-cols-4">
            {metrics.map((m) => (
              <MetricCell key={m.label} metric={m} />
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
