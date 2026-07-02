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
      <div className="hero-orb" aria-hidden="true" />

      <div className="container-brand relative z-10 py-20 sm:py-24 lg:py-28">
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

          {/* Right column: the "Born from Light" visual, haloed by the warm orb. */}
          <Reveal delay={200} className="relative hidden lg:block">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[4px] shadow-[0_20px_60px_rgba(18,18,65,0.18)]">
              <Image
                src="/hero/yoga.jpg"
                alt="A figure in a warrior pose within a radiant field of light — Igniton's ‘Born from Light’ motif"
                fill
                priority
                sizes="(max-width: 1024px) 0px, 40vw"
                className="object-cover"
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
