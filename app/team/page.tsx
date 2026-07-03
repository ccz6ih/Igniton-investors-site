import type { Metadata } from 'next'
import Image from 'next/image'
import { Section, Eyebrow } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { teamIntro, founder, founderMonogram, founderCredentials, advisors, type Person } from '@/content/team'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Team & Advisors',
  description:
    'Igniton is led by founder Jirka Rysavy and a world-class medical and scientific advisory board.',
  alternates: { canonical: '/team' },
}

function initials(name: string) {
  return name
    .replace(/(Prof\.|Dr\.|M\.D\.|PhD|FACOG|FAARM)/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

function Avatar({ person, size = 96 }: { person: Person; size?: number }) {
  if (person.image) {
    return (
      <Image
        src={person.image}
        alt={person.name}
        width={size}
        height={size}
        className="h-24 w-24 flex-none rounded-full object-cover"
      />
    )
  }
  return (
    <div
      className="flex h-24 w-24 flex-none items-center justify-center rounded-full bg-off-white font-display text-2xl text-gold"
      aria-hidden="true"
    >
      {initials(person.name)}
    </div>
  )
}

export default function TeamPage() {
  return (
    <>
      <Section tone="dark">
        <Reveal>
          <Eyebrow>{teamIntro.eyebrow}</Eyebrow>
          <h1 className="h-hero max-w-3xl text-white">
            {teamIntro.headlineLead}
            <em>{teamIntro.headlineEmphasis}</em>
            {teamIntro.headlinePost}
          </h1>
        </Reveal>
      </Section>

      {/* Founder — no portrait by preference; the track record is the visual. */}
      <Section tone="primary">
        <Reveal className="grid gap-8 rounded-card border border-hairline p-8 md:grid-cols-[auto,1fr] md:items-center">
          <div className="flex h-40 w-40 flex-none flex-col items-center justify-center rounded-card bg-navy text-white">
            <span className="font-display text-5xl italic text-gold">{founderMonogram}</span>
            <span className="mt-2 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/60">
              Founder
            </span>
          </div>
          <div>
            <h2 className="font-display text-3xl">{founder.name}</h2>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              {founder.title}
            </p>
            <p className="mt-4 max-w-3xl leading-relaxed text-warm-gray">{founder.bio}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {founderCredentials.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-hairline bg-off-white px-3 py-1.5 text-xs font-semibold text-navy"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Section>

      {/* Advisors */}
      <Section tone="alt">
        <Reveal>
          <Eyebrow>Advisory Board</Eyebrow>
          <h2 className="h-section">Scientific & medical advisors</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {advisors.map((a, i) => (
            <Reveal
              key={a.name}
              delay={(i % 3) * 70}
              className="flex flex-col items-start gap-4 rounded-card border border-hairline bg-white p-7"
            >
              <Avatar person={a} />
              <div>
                <h3 className="font-display text-xl">{a.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
                  {a.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-warm-gray">{a.bio}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-xs text-warm-gray">
          Operating-team bios to be added. Advisor affiliations shown are the individuals’ own
          credentials.
        </p>
      </Section>

      <Section tone="primary">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="h-section">
            Talk to <em>us</em>.
          </h2>
          <a
            href={site.contactUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary btn-primary--gold mt-8"
          >
            Contact investor relations
          </a>
        </Reveal>
      </Section>
    </>
  )
}
