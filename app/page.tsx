import Image from 'next/image'
import { Section, Eyebrow } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { home, disclaimer } from '@/content/deck'

export default function HomePage() {
  return (
    <>
      {/* Cosmic hero — Igniton wordmark + HIT chair (from the deck) */}
      <section className="relative bg-black">
        <Image
          src={home.heroImage}
          alt="Igniton — www.igniton.com"
          width={1672}
          height={941}
          priority
          sizes="100vw"
          className="mx-auto h-auto w-full max-w-[1600px]"
        />
        <p className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[0.6rem] uppercase tracking-[0.18em] text-white/45">
          {home.confidential}
        </p>
      </section>

      {/* Company statement + video + science carousel */}
      <Section tone="primary">
        <Reveal className="text-center">
          <h1 className="font-display text-3xl text-navy sm:text-4xl">{home.company}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-warm-gray">{home.tagline}</p>
        </Reveal>

        {/* Video slot — owner to provide */}
        <Reveal className="mx-auto mt-10 w-full max-w-3xl">
          <div className="flex aspect-video items-center justify-center rounded-section border border-dashed border-hairline bg-off-white">
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-warm-gray">
              {home.videoPlaceholder}
            </span>
          </div>
        </Reveal>
      </Section>

      {/* Science-image carousel (facility) */}
      <Section tone="alt">
        <Reveal>
          <Eyebrow>Igniton facility</Eyebrow>
        </Reveal>
        <div className="marquee mt-6">
          <div className="marquee-track">
            {[...home.carousel, ...home.carousel].map((s, i) => (
              <div key={i} className="relative h-52 w-72 flex-none overflow-hidden rounded-section sm:h-60 sm:w-80">
                <Image src={s.image} alt={i < home.carousel.length ? s.caption : ''} fill sizes="20rem" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-warm-gray">{home.carousel[0].caption}</p>
      </Section>

      {/* Disclaimer */}
      <Section id="disclaimer" tone="primary">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl text-navy">{disclaimer.title}</h2>
          <div className="mt-8 space-y-5 text-sm leading-relaxed text-warm-gray">
            {disclaimer.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  )
}
