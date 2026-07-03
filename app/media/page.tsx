import type { Metadata } from 'next'
import Link from 'next/link'
import { Reveal } from '@/components/Reveal'
import { VideoEmbed } from '@/components/VideoEmbed'
import { mediaIntro, videos } from '@/content/media'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'Media — In Conversation',
  description:
    'Leading voices in consciousness, longevity, and human performance — Dr. Joe Dispenza, Dave Asprey, Gregg Braden, Dr. Theresa Bullard and more — explore the ideas and technology behind Igniton.',
  alternates: { canonical: '/media' },
}

export default function MediaPage() {
  const [featured, ...rest] = videos

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-white on-dark">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-[-30%] h-[110vh] w-[110vw] -translate-x-1/2"
          style={{
            background:
              'radial-gradient(closest-side, rgba(211,162,60,.20), rgba(25,24,128,.10) 45%, transparent 70%)',
          }}
        />
        <div className="container-brand relative z-10 py-20 text-center sm:py-24">
          <Reveal>
            <p className="eyebrow mb-5">{mediaIntro.eyebrow}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mx-auto h-hero max-w-3xl text-white">
              {mediaIntro.headlineLead}
              <em>{mediaIntro.headlineEmphasis}</em>
              {mediaIntro.headlinePost}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
              {mediaIntro.lead}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured video */}
      <section className="bg-off-white py-[clamp(3rem,7vw,6rem)]">
        <div className="container-brand">
          <Reveal className="mx-auto max-w-4xl">
            <VideoEmbed id={featured.id} title={featured.title} thumb={featured.thumb} priority />
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                {featured.speaker}
              </p>
              <h2 className="mt-1 font-display text-2xl text-navy">{featured.title}</h2>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid of the rest */}
      <section className="bg-white py-[clamp(3rem,7vw,6rem)]">
        <div className="container-brand">
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {rest.map((v, i) => (
              <Reveal key={v.id} delay={(i % 2) * 80}>
                <VideoEmbed id={v.id} title={v.title} thumb={v.thumb} />
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                    {v.speaker}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-navy">{v.title}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy text-white on-dark py-[clamp(3.5rem,9vw,7rem)]">
        <div className="container-brand text-center">
          <Reveal>
            <h2 className="h-section text-white">
              See the <em>whole</em> picture.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-white/75">
              Explore the technology and the framework behind these conversations.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <Link href="/technology" className="btn-primary btn-primary--gold">
                The technology
              </Link>
              <a
                href="https://www.youtube.com/@IgnitonOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary on-dark"
              >
                More on YouTube
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
