import type { Metadata } from 'next'
import Image from 'next/image'
import { Section, Eyebrow } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { getContent } from '@/lib/content'
import { PageSections } from '@/components/sections/PageSections'

export const metadata: Metadata = {
  title: 'About Us',
  alternates: { canonical: '/about-us' },
}

export default async function AboutUsPage() {
  const aboutUs = await getContent('aboutUs')
  const a = aboutUs
  return (
    <>
      <PageSections slug="about-us" slot="top" />

      {/* 1) Igniton Inc. — moved to top of page */}
      <Section tone="primary">
        <Reveal>
          <Eyebrow>About Us</Eyebrow>
          <h1 className="font-display text-3xl text-navy sm:text-4xl">
            <span className="italic">Igni</span>ton Inc.
          </h1>
          {/* Full-width bullets so "…memory, and energy" stays on one line */}
          <ul className="mt-8 space-y-4">
            {a.inc.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-navy">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <PageSections slug="about-us" slot="afterInc" />

      {/* 2) GDV comparison + focus + university studies */}
      <Section tone="alt">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {a.gdv.compare.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 80}
              className={`rounded-section p-6 text-center ${i === 1 ? 'bg-navy text-white on-dark' : 'border border-hairline bg-white'}`}
            >
              <p className={`text-sm font-semibold ${i === 1 ? 'text-gold' : 'text-navy'}`}>{c.label}</p>
              <div className="relative mx-auto my-4 h-40 w-40">
                <Image src={c.image} alt={c.label} fill className="object-contain" />
              </div>
              <p className={`font-display text-4xl ${i === 1 ? 'text-gold' : 'text-navy'}`}>{c.energy}</p>
              <p className={`text-xs ${i === 1 ? 'text-white/60' : 'text-warm-gray'}`}>
                {a.gdv.unit}; Inner noise: {c.noise}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-3xl space-y-5 text-sm leading-relaxed text-warm-gray">
          {a.outro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>
      </Section>
      <PageSections slug="about-us" slot="bottom" />
    </>
  )
}
