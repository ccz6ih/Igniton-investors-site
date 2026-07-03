import type { Metadata } from 'next'
import { Section, Eyebrow } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { scienceDeck as s } from '@/content/deck'

export const metadata: Metadata = {
  title: 'Science',
  alternates: { canonical: '/science' },
}

export default function SciencePage() {
  return (
    <>
      <Section tone="primary">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h1 className="font-display text-3xl text-navy sm:text-4xl">{s.whatAre.heading}</h1>
        </Reveal>
        <Reveal className="mx-auto mt-8 max-w-3xl space-y-5 text-sm leading-relaxed text-warm-gray">
          {s.whatAre.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </Section>

      {/* Igniton place in physics */}
      <Section tone="alt">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl text-navy">{s.physics.heading}</h2>
        </Reveal>
        <ol className="mx-auto mt-10 max-w-2xl">
          {s.physics.levels.map((lvl, i) => (
            <Reveal
              key={lvl}
              delay={i * 60}
              as="li"
              className="border-l-2 border-gold py-3 pl-5 text-sm text-navy"
            >
              {lvl}
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Uses */}
      <Section tone="primary">
        <Reveal className="mx-auto max-w-3xl space-y-4">
          {s.uses.intro.map((p, i) => (
            <p key={i} className="font-medium text-navy">
              {p}
            </p>
          ))}
        </Reveal>
        <Reveal className="mx-auto mt-8 max-w-3xl">
          <h2 className="font-display text-2xl text-navy">{s.uses.heading}</h2>
          <ol className="mt-4 space-y-3">
            {s.uses.list.map((u, i) => (
              <li key={u} className="flex gap-3 text-sm text-warm-gray">
                <span className="font-display text-gold">{i + 1}.</span>
                <span>{u}</span>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>
    </>
  )
}
