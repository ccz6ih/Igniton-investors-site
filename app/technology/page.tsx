import type { Metadata } from 'next'
import Image from 'next/image'
import { Section, Eyebrow } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { getContent } from '@/lib/content'
import { PageSections } from '@/components/sections/PageSections'
import { IgniText } from '@/components/IgniText'
import { RichText } from '@/components/RichText'

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
          <p className="font-semibold text-navy">
            <RichText>{it.caption}</RichText>
          </p>
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
      <PageSections slug="technology" slot="top" />

      <Section tone="primary">
        <Reveal>
          {'introHeading' in t && t.introHeading && (
            <h1 className="font-display text-3xl text-navy sm:text-4xl">
              <IgniText>{t.introHeading}</IgniText>
            </h1>
          )}
          <div className="mt-6 max-w-3xl space-y-5 text-sm leading-relaxed text-warm-gray">
            {t.intro.map((p, i) => (
              <p key={i}>
                <RichText>{p}</RichText>
              </p>
            ))}
          </div>
        </Reveal>
      </Section>

      <PageSections slug="technology" slot="afterIntro" />

      <Section tone="alt">
        <Reveal>
          <Eyebrow>Technology</Eyebrow>
          <h2 className="font-display text-3xl text-navy">{t.current.heading}</h2>
        </Reveal>
        <ApparatusList items={t.current.items} />
      </Section>

      <PageSections slug="technology" slot="afterCurrent" />

      <Section tone="primary">
        <Reveal>
          <Eyebrow>Technology</Eyebrow>
          <h2 className="font-display text-3xl text-navy">{t.original.heading}</h2>
        </Reveal>
        <ApparatusList items={t.original.items} />
      </Section>
      <PageSections slug="technology" slot="bottom" />
    </>
  )
}
