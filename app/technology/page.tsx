import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Section, Eyebrow } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { technology } from '@/content/technology'
import { disclaimers } from '@/content/disclaimers'

export const metadata: Metadata = {
  title: 'Technology — The Moat',
  description:
    'Igniton’s defensible asset is the process, not the ingredient list: a cold-plasma enhancement system developed from CERN-era instruments and rebuilt in its own Colorado facility. Inside the apparatus.',
  alternates: { canonical: '/technology' },
}

function ShotGrid({
  shots,
  cols,
}: {
  shots: { image: string; caption: string }[]
  cols: string
}) {
  return (
    <div className={`mt-6 grid gap-5 ${cols}`}>
      {shots.map((s, i) => (
        <Reveal
          key={s.image}
          delay={(i % 4) * 60}
          className="overflow-hidden rounded-section border border-hairline bg-white"
        >
          <div className="relative aspect-[4/3] bg-navy">
            <Image src={s.image} alt={s.caption} fill sizes="(max-width:640px) 100vw, 33vw" className="object-cover" />
          </div>
          <p className="px-4 py-3 text-xs leading-snug text-navy">{s.caption}</p>
        </Reveal>
      ))}
    </div>
  )
}

export default function TechnologyPage() {
  const t = technology
  return (
    <>
      {/* Hero — navy with a darkened equipment backdrop */}
      <section className="relative overflow-hidden bg-navy text-white on-dark">
        <Image
          src="/apparatus/light-matter.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/85 to-navy/60" />
        <div className="container-brand relative z-10 flex min-h-[62vh] flex-col justify-center py-24">
          <Reveal>
            <p className="eyebrow mb-5">{t.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="h-hero max-w-3xl text-white">
              {t.headlineLead}
              <em>{t.headlineEmphasis}</em>
              {t.headlinePost}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/80">{t.intro}</p>
          </Reveal>
        </div>
      </section>

      {/* The wedge */}
      <Section tone="primary">
        <div className="grid gap-6 md:grid-cols-3">
          {t.wedge.map((w, i) => (
            <Reveal key={w.title} delay={i * 70} className="rounded-card border border-hairline p-7">
              <h2 className="h-subhead">{w.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-warm-gray">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* The apparatus — the real equipment */}
      <Section tone="alt">
        <Reveal className="max-w-3xl">
          <Eyebrow>{t.apparatus.eyebrow}</Eyebrow>
          <h2 className="h-section">{t.apparatus.heading}</h2>
          <p className="mt-6 text-warm-gray">{t.apparatus.body}</p>
        </Reveal>

        {t.apparatus.groups.map((g, gi) => (
          <Reveal key={g.label} className="mt-12">
            <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-hairline pt-6">
              <h3 className="font-display text-2xl text-navy">{g.label}</h3>
              <p className="text-xs uppercase tracking-[0.12em] text-gold">{g.note}</p>
            </div>
            <ShotGrid
              shots={g.shots}
              cols={gi === 0 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3'}
            />
          </Reveal>
        ))}
      </Section>

      {/* Lineage timeline */}
      <Section tone="primary">
        <Reveal>
          <Eyebrow>Science lineage</Eyebrow>
          <h2 className="h-section max-w-3xl">{t.lineage.heading}</h2>
          <p className="mt-2 text-xs uppercase tracking-[0.14em] text-gold">{t.lineage.note}</p>
        </Reveal>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.lineage.timeline.map((tl) => (
            <li key={tl.year} className="border-l-2 border-gold pl-4">
              <span className="font-display text-xl text-navy">{tl.year}</span>
              <p className="mt-2 text-sm text-warm-gray">{tl.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      {/* In the facility */}
      <Section tone="alt">
        <Reveal className="max-w-3xl">
          <Eyebrow>{t.facility.eyebrow}</Eyebrow>
          <h2 className="h-section">{t.facility.heading}</h2>
        </Reveal>
        <ShotGrid shots={t.facility.shots} cols="sm:grid-cols-3" />
      </Section>

      {/* IP / moat */}
      <Section tone="primary">
        <Reveal className="rounded-card bg-off-white p-8">
          <h2 className="h-subhead">{t.ip.heading}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-warm-gray">{t.ip.body}</p>
          <p className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="font-semibold text-navy">Patent / IP status:</span>
            {t.ip.status ? (
              <span>{t.ip.status}</span>
            ) : (
              <span className="chip-pending" title="Client to supply patent/application/trade-secret status">
                Pending verification
              </span>
            )}
          </p>
        </Reveal>
        <p className="mt-8 text-xs italic text-warm-gray">{disclaimers.framework}</p>
        <div className="mt-8 flex flex-wrap gap-6">
          <Link href="/#contact" className="btn-primary">
            Contact investor relations
          </Link>
          <Link href="/vision" className="btn-secondary">
            The idea behind it
          </Link>
        </div>
      </Section>
    </>
  )
}
