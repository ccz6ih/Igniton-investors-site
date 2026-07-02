import Link from 'next/link'
import { hero, metrics } from '@/content/overview'
import { MetricCell } from './Metric'
import { Reveal } from './Reveal'

// Luminous navy hero with the CSS radial-gradient glow orb ("Born from Light").
export function Hero() {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-navy text-white on-dark"
    >
      <div className="hero-orb" aria-hidden="true" />

      <div className="container-brand relative z-10 flex min-h-[88vh] flex-col justify-center py-24">
        <Reveal>
          <p className="eyebrow mb-6">{hero.eyebrow}</p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="h-hero max-w-4xl">
            {hero.headlineLead}
            <br className="hidden sm:block" />
            {hero.headlineEmphasisPre}
            <em>{hero.headlineEmphasis}</em>
            {hero.headlineEmphasisPost}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
            {hero.subhead}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link href={hero.primaryCta.href} className="btn-primary btn-primary--gold">
              {hero.primaryCta.label}
            </Link>
            <Link href={hero.secondaryCta.href} className="btn-secondary on-dark">
              {hero.secondaryCta.label}
            </Link>
          </div>
        </Reveal>

        {/* At-a-glance metric band */}
        <Reveal delay={320}>
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-white/10 pt-10 sm:grid-cols-4">
            {metrics.map((m) => (
              <MetricCell key={m.label} metric={m} />
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
