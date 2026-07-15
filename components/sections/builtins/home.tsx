import Image from 'next/image'
import { Section, Eyebrow } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { HomeVideo } from '@/components/HomeVideo'
import { RichText } from '@/components/RichText'
import { getContent } from '@/lib/content'

// Built-in Home sections — the original hand-coded JSX, unchanged, split into
// individually reorderable/hideable units. Rendered by PageRenderer.

export async function HomeHero() {
  const home = await getContent('home')
  return (
    <section className="relative h-[calc(100svh-72px)] min-h-[460px] w-full overflow-hidden bg-black">
      <Image
        src={home.heroImage}
        alt="Igniton — www.igniton.com"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
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
  )
}

export async function HomeStatement() {
  const home = await getContent('home')
  return (
    <Section tone="primary">
      <Reveal className="text-center">
        <h1 className="font-display text-3xl text-navy sm:text-4xl">
          <span className="italic">Igni</span>ton, Inc.
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-lg text-warm-gray">{home.tagline}</p>
      </Reveal>

      <Reveal className="mx-auto mt-10 w-full max-w-3xl">
        <HomeVideo videoUrl={home.videoUrl} driveId={home.videoDriveId} poster={home.videoPoster} />
      </Reveal>
    </Section>
  )
}

export async function HomeCarousel() {
  const home = await getContent('home')
  return (
    <Section tone="alt">
      <Reveal>
        <Eyebrow>Igniton facility</Eyebrow>
      </Reveal>
      <div className="marquee mt-6">
        <div className="marquee-track">
          {[...home.carousel, ...home.carousel].map((s, i) => (
            <div key={i} className="relative h-52 w-72 flex-none overflow-hidden rounded-section sm:h-60 sm:w-80">
              <Image
                src={s.image}
                alt={i < home.carousel.length ? home.carouselCaption : ''}
                fill
                sizes="20rem"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-warm-gray">{home.carouselCaption}</p>
    </Section>
  )
}

export async function HomeDisclaimer() {
  const disclaimer = await getContent('disclaimer')
  return (
    <Section id="disclaimer" tone="primary">
      <Reveal className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl text-navy">{disclaimer.title}</h2>
        <div className="mt-8 space-y-5 text-sm leading-relaxed text-warm-gray">
          {disclaimer.paragraphs.map((p, i) => (
            <p key={i}>
              <RichText>{p}</RichText>
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
