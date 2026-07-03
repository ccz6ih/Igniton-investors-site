import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/Reveal'
import {
  visionHero,
  movements,
  discipline,
  investorTie,
  frameworkNote,
  type Movement,
} from '@/content/vision'

export const metadata: Metadata = {
  title: 'Vision — Born from Light',
  description:
    'The Igniton idea, in founder Jirka Rysavy’s words: light, coherence, and the memory-field — the worldview behind the technology. Presented as Igniton’s framework, not scientific consensus.',
  alternates: { canonical: '/vision' },
}

function MovementBlock({ m }: { m: Movement }) {
  return (
    <div className="container-brand py-[clamp(3rem,7vw,6rem)]">
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          m.imageSide === 'left' ? '' : 'lg:[&>*:first-child]:order-2'
        }`}
      >
        <Reveal className="relative aspect-[5/4] overflow-hidden rounded-section shadow-[0_20px_60px_rgba(18,18,65,0.15)]">
          <Image src={m.image} alt={m.imageAlt} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
        </Reveal>
        <Reveal delay={80}>
          <p className="eyebrow mb-4">{m.eyebrow}</p>
          <h2 className="h-section">
            {m.titleLead}
            <em>{m.titleEmphasis}</em>
            {m.titlePost}
          </h2>
          {m.quote && (
            <blockquote className="mt-6 border-l-2 border-gold pl-5 font-display text-xl italic leading-relaxed text-navy">
              “{m.quote}”
            </blockquote>
          )}
          <p className="mt-6 leading-relaxed text-warm-gray">{m.body}</p>
        </Reveal>
      </div>
    </div>
  )
}

export default function VisionPage() {
  return (
    <>
      {/* Hero — navy, starfield + warm glow */}
      <section className="relative overflow-hidden bg-navy text-white on-dark">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,.5), transparent),' +
              'radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,.35), transparent),' +
              'radial-gradient(1.5px 1.5px at 40% 70%, rgba(255,255,255,.4), transparent),' +
              'radial-gradient(1px 1px at 85% 60%, rgba(255,255,255,.3), transparent),' +
              'radial-gradient(1px 1px at 55% 45%, rgba(255,255,255,.25), transparent)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-20%] h-[120vh] w-[120vw] -translate-x-1/2"
          style={{
            background:
              'radial-gradient(closest-side, rgba(211,162,60,.22), rgba(25,24,128,.12) 45%, transparent 70%)',
          }}
        />
        <div className="container-brand relative z-10 flex min-h-[72vh] flex-col justify-center py-24 text-center">
          <Reveal>
            <p className="eyebrow mb-6">{visionHero.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mx-auto h-hero max-w-4xl text-white">
              {visionHero.headlineLead}
              <em>{visionHero.headlineEmphasis}</em>
              {visionHero.headlinePost}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/80">
              {visionHero.lead}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Movements — alternating cream / white */}
      {movements.map((m, i) => (
        <div key={m.eyebrow} className={i % 2 === 0 ? 'bg-off-white' : 'bg-white'}>
          <MovementBlock m={m} />
        </div>
      ))}

      {/* The discipline — the credibility keystone */}
      <section className="bg-navy text-white on-dark py-[clamp(3.5rem,9vw,7rem)]">
        <div className="container-brand">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">{discipline.eyebrow}</p>
            <h2 className="h-section text-white">
              {discipline.titleLead}
              <em>{discipline.titleEmphasis}</em>
              {discipline.titlePost}
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal className="rounded-section border border-white/15 bg-white/[0.04] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {discipline.story.tag}
              </p>
              <p className="mt-4 leading-relaxed text-white/75">{discipline.story.body}</p>
            </Reveal>
            <Reveal delay={80} className="rounded-section border border-white/15 bg-white/[0.04] p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {discipline.science.tag}
              </p>
              <p className="mt-4 leading-relaxed text-white/75">{discipline.science.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why it matters to investors */}
      <section className="bg-off-white py-[clamp(3.5rem,9vw,7rem)]">
        <div className="container-brand">
          <Reveal className="max-w-3xl">
            <p className="eyebrow mb-4">{investorTie.eyebrow}</p>
            <h2 className="h-section">
              {investorTie.titleLead}
              <em>{investorTie.titleEmphasis}</em>
              {investorTie.titlePost}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-warm-gray">{investorTie.body}</p>
            <div className="mt-8 flex flex-wrap gap-6">
              <Link href="/#roadmap" className="btn-primary">
                See the roadmap
              </Link>
              <Link href="/#technology" className="btn-secondary">
                The technology moat
              </Link>
            </div>
          </Reveal>

          <Reveal className="mt-14 max-w-3xl border-t border-hairline pt-6">
            <p className="text-xs italic leading-relaxed text-warm-gray">{frameworkNote}</p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
