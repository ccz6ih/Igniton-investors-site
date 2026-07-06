import Image from 'next/image'
import { Section, Eyebrow } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { HomeVideo } from '@/components/HomeVideo'
import { home, disclaimer } from '@/content/deck'

export default function HomePage() {
  return (
    <>
      {/* Cosmic hero — full-screen (from the deck) */}
      <section className="relative h-[calc(100svh-72px)] min-h-[460px] w-full overflow-hidden bg-black">
        <Image
          src={home.heroImage}
          alt="Igniton — www.igniton.com"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* subtle cinematic overlay for depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/0 to-black/50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ boxShadow: 'inset 0 0 200px 40px rgba(0,0,0,0.45)' }}
        />
        <p className="absolute inset-x-0 bottom-4 z-10 text-center text-[0.6rem] uppercase tracking-[0.2em] text-white/55">
          {home.confidential}
        </p>
      </section>

      {/* Company statement + video + science carousel */}
      <Section tone="primary">
        <Reveal className="text-center">
          <h1 className="font-display text-3xl text-navy sm:text-4xl">
            <span className="italic">Igni</span>ton, Inc.
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-warm-gray">{home.tagline}</p>
        </Reveal>

        {/* Company video — streamed from Google Drive */}
        <Reveal className="mx-auto mt-10 w-full max-w-3xl">
          <HomeVideo driveId={home.videoDriveId} />
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
                <Image src={s.image} alt={i < home.carousel.length ? home.carouselCaption : ''} fill sizes="20rem" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-warm-gray">{home.carouselCaption}</p>
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
