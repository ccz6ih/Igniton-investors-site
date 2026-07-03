import type { Metadata } from 'next'
import Image from 'next/image'
import { Section, Eyebrow } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { aboutUs } from '@/content/deck'

export const metadata: Metadata = {
  title: 'About Us',
  alternates: { canonical: '/about-us' },
}

export default function AboutUsPage() {
  const a = aboutUs
  return (
    <>
      <Section tone="primary">
        <Reveal className="text-center">
          <h1 className="font-display text-4xl text-navy">{a.heading}</h1>
        </Reveal>
        <Reveal className="mx-auto mt-8 max-w-3xl space-y-5 text-sm leading-relaxed text-warm-gray">
          {a.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        {/* GDV water comparison */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2">
          {a.gdv.compare.map((c, i) => (
            <Reveal
              key={c.label}
              delay={i * 80}
              className={`rounded-section p-6 text-center ${i === 1 ? 'bg-navy text-white on-dark' : 'border border-hairline bg-off-white'}`}
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

      {/* Igniton Inc. */}
      <Section tone="alt">
        <Reveal>
          <Eyebrow>About Us</Eyebrow>
          <h2 className="font-display text-3xl text-navy">{a.inc.heading}</h2>
          <ul className="mt-8 max-w-2xl space-y-4">
            {a.inc.bullets.map((b) => (
              <li key={b} className="flex gap-3 text-navy">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                <span className="font-medium">{b}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>
    </>
  )
}
