import type { Metadata } from 'next'
import Image from 'next/image'
import { Section, Eyebrow } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { getContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Technology',
  alternates: { canonical: '/technology' },
}

function ApparatusList({
  items,
}: {
  items: { caption: string; image: string }[]
}) {
  return (
    <div className="mt-8 space-y-14">
      {items.map((it, i) => (
        <Reveal key={it.image} delay={(i % 2) * 60}>
          <p className="font-semibold text-navy">{it.caption}</p>
          <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-section bg-navy">
            <Image src={it.image} alt={it.caption} fill sizes="(max-width:1024px) 100vw, 60vw" className="object-cover" />
          </div>
        </Reveal>
      ))}
    </div>
  )
}

export default async function TechnologyPage() {
  const t = await getContent('technologyDeck')
  return (
    <>
      <Section tone="primary">
        <Reveal className="max-w-3xl space-y-5 text-sm leading-relaxed text-warm-gray">
          {t.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </Section>

      <Section tone="alt">
        <Reveal>
          <Eyebrow>Technology</Eyebrow>
          <h2 className="font-display text-3xl text-navy">{t.current.heading}</h2>
        </Reveal>
        <ApparatusList items={t.current.items} />
      </Section>

      <Section tone="primary">
        <Reveal>
          <Eyebrow>Technology</Eyebrow>
          <h2 className="font-display text-3xl text-navy">{t.original.heading}</h2>
        </Reveal>
        <ApparatusList items={t.original.items} />
      </Section>
    </>
  )
}
