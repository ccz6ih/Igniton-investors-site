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
    'Igniton’s defensible asset is the process, not the ingredient list: a cold-plasma enhancement run in its own Colorado facility, a 30-year science lineage, and GDV measurement. Inside the lab.',
  alternates: { canonical: '/technology' },
}

export default function TechnologyPage() {
  const t = technology
  return (
    <>
      {/* Hero — navy with a darkened lab-equipment backdrop */}
      <section className="relative overflow-hidden bg-navy text-white on-dark">
        <Image
          src="/lab/equipment.jpg"
          alt="Igniton cold-plasma processing equipment"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/50" />
        <div className="container-brand relative z-10 flex min-h-[60vh] flex-col justify-center py-24">
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

      {/* Inside the lab — the gallery that makes it pop */}
      <Section tone="alt">
        <Reveal className="max-w-3xl">
          <Eyebrow>{t.lab.eyebrow}</Eyebrow>
          <h2 className="h-section">{t.lab.heading}</h2>
          <p className="mt-6 text-warm-gray">{t.lab.body}</p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.lab.shots.map((s, i) => (
            <Reveal key={s.image} delay={(i % 2) * 80} className="overflow-hidden rounded-section border border-hairline bg-white">
              <div className="relative aspect-video">
                <Image src={s.image} alt={s.caption} fill sizes="(max-width:640px) 100vw, 50vw" className="object-cover" />
              </div>
              <p className="px-5 py-4 text-sm font-medium text-navy">{s.caption}</p>
            </Reveal>
          ))}
        </div>
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

      {/* IP / moat */}
      <Section tone="alt">
        <Reveal className="rounded-card bg-white p-8 shadow-[0_1px_0_rgba(18,18,65,0.04)]">
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
