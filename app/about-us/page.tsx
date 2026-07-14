import type { Metadata } from 'next'
import Image from 'next/image'
import { Section, Eyebrow } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { getContent } from '@/lib/content'
import { PageSections } from '@/components/sections/PageSections'
import { WaterComparison } from '@/components/WaterComparison'

export const metadata: Metadata = {
  title: 'About Us',
  alternates: { canonical: '/about-us' },
}

export default async function AboutUsPage() {
  const a = await getContent('aboutUs')
  return (
    <>
      <PageSections slug="about-us" slot="top" />

      {/* 1) Igniton Impact on Water — first, per the deck */}
      <WaterComparison tone="primary" />

      {/* 2) Igniton Inc. + global distribution map */}
      <Section tone="alt">
        <Reveal>
          <Eyebrow>About Us</Eyebrow>
          <h1 className="font-display text-3xl text-navy sm:text-4xl">
            <span className="italic">Igni</span>ton Inc.
          </h1>
          <ul className="mt-8 space-y-4">
            {a.inc.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-navy">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>
          {'mapImage' in a.inc && a.inc.mapImage && (
            <div className="relative mx-auto mt-10 aspect-[780/395] w-full max-w-3xl">
              <Image
                src={a.inc.mapImage}
                alt="Igniton global distribution network"
                fill
                sizes="48rem"
                className="object-contain"
              />
            </div>
          )}
        </Reveal>
      </Section>

      <PageSections slug="about-us" slot="afterInc" />

      {/* 3) Closing paragraphs */}
      <Section tone="primary">
        <Reveal className="mx-auto max-w-3xl space-y-5 text-sm leading-relaxed text-warm-gray">
          {a.outro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </Section>

      <PageSections slug="about-us" slot="bottom" />
    </>
  )
}
