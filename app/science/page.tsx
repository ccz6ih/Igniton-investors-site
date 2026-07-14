import type { Metadata } from 'next'
import { Section } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { RichText } from '@/components/RichText'
import { getContent } from '@/lib/content'
import { PageSections } from '@/components/sections/PageSections'

export const metadata: Metadata = {
  title: 'Science',
  alternates: { canonical: '/science' },
}

export default async function SciencePage() {
  const s = await getContent('scienceDeck')
  return (
    <>
      <PageSections slug="science" slot="top" />

      {/* IGNITON — heading + life-force intro + Uses (one cohesive section) */}
      <Section tone="primary">
        <Reveal className="text-center">
          <h1 className="font-display text-4xl text-navy">{s.intro.heading}</h1>
        </Reveal>
        <Reveal className="mx-auto mt-8 max-w-3xl space-y-5 text-sm leading-relaxed text-warm-gray">
          {s.intro.paragraphs.map((p, i) => (
            <p key={i}>
              <RichText>{p}</RichText>
            </p>
          ))}
        </Reveal>
        <Reveal className="mx-auto mt-10 max-w-3xl">
          <h2 className="font-display text-2xl text-navy">{s.uses.heading}</h2>
          <ol className="mt-4 space-y-3">
            {s.uses.list.map((u, i) => (
              <li key={u} className="flex gap-3 text-sm text-warm-gray">
                <span className="font-display text-gold">{i + 1}.</span>
                <span>
                  <RichText>{u}</RichText>
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      <PageSections slug="science" slot="afterIntro" />

      {/* Igniton place in physics — with a big up-arrow */}
      <Section tone="alt">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl text-navy">{s.physics.heading}</h2>
        </Reveal>
        <Reveal className="mx-auto mt-10 flex max-w-2xl gap-6">
          <div className="flex w-8 flex-none flex-col items-center self-stretch" aria-hidden="true">
            <div className="h-0 w-0 border-x-[14px] border-b-[18px] border-x-transparent border-b-gold" />
            <div className="w-2.5 flex-1 bg-gold" />
          </div>
          <ol className="flex-1 space-y-6 py-2">
            {s.physics.levels.map((lvl) => (
              <li key={lvl} className="text-sm text-navy">
                <RichText>{lvl}</RichText>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      <PageSections slug="science" slot="afterPhysics" />

      {/* What are Ignitons? */}
      <Section tone="primary">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl text-navy sm:text-3xl">{s.whatAre.heading}</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-warm-gray">
            {s.whatAre.paragraphs.map((p, i) => (
              <p key={i}>
                <RichText>{p}</RichText>
              </p>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Igniton process */}
      {'process' in s && s.process && (
        <Section tone="alt">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl text-navy sm:text-3xl">{s.process.heading}</h2>
            <p className="mt-4 font-semibold text-navy">{s.process.lead}</p>
            <ul className="mt-4 space-y-3">
              {s.process.points.map((p, i) => (
                <li key={i} className="flex gap-3 text-sm text-warm-gray">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  <span>
                    <RichText>{p}</RichText>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      )}

      <PageSections slug="science" slot="bottom" />
    </>
  )
}
