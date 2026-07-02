import Image from 'next/image'
import Link from 'next/link'
import { Section, Eyebrow } from './Section'
import { Reveal } from './Reveal'
import { BrandName } from './BrandName'
import { MetricCell } from './Metric'
import { pillars, credibility } from '@/content/overview'
import { technology } from '@/content/technology'
import { portfolioIntro, products } from '@/content/portfolio'
import { tractionIntro, businessMetrics, scientificValidation, endorsement, pendingProof, awards } from '@/content/traction'
import { company } from '@/content/company'
import { roadmapIntro, horizons } from '@/content/roadmap'
import { disclaimers } from '@/content/disclaimers'
import { site } from '@/content/site'

/* ---------------------------------------------------------------- THESIS */
export function Thesis() {
  return (
    <Section tone="alt">
      <Reveal>
        <Eyebrow>The Thesis</Eyebrow>
        <h2 className="h-section max-w-3xl">
          A de-risked business with <em>venture-scale</em> upside.
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-px overflow-hidden rounded-section border border-hairline md:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 70} className="bg-white p-8">
            <span className="font-display text-3xl text-gold">0{i + 1}</span>
            <h3 className="h-subhead mt-3">{p.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-warm-gray">{p.body}</p>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-warm-gray">
        {credibility.map((c) => (
          <span key={c}>{c}</span>
        ))}
      </Reveal>
    </Section>
  )
}

/* ------------------------------------------------------------ TECHNOLOGY */
export function Technology() {
  return (
    <Section id="technology" tone="primary">
      <Reveal>
        <Eyebrow>{technology.eyebrow}</Eyebrow>
        <h2 className="h-section max-w-3xl">
          {technology.headlineLead}
          <em>{technology.headlineEmphasis}</em>
          {technology.headlinePost}
        </h2>
        <p className="mt-6 max-w-2xl text-warm-gray">{technology.intro}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {technology.wedge.map((w, i) => (
          <Reveal key={w.title} delay={i * 70} className="rounded-card border border-hairline p-6">
            <h3 className="h-subhead">{w.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-warm-gray">{w.body}</p>
          </Reveal>
        ))}
      </div>

      {/* Lineage timeline */}
      <Reveal className="mt-16">
        <h3 className="font-display text-2xl">{technology.lineage.heading}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.14em] text-gold">{technology.lineage.note}</p>
        <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {technology.lineage.timeline.map((t) => (
            <li key={t.year} className="border-l-2 border-gold pl-4">
              <span className="font-display text-xl text-navy">{t.year}</span>
              <p className="mt-2 text-sm text-warm-gray">{t.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* IP — status is a placeholder */}
      <Reveal className="mt-14 rounded-card bg-off-white p-8">
        <h3 className="h-subhead">{technology.ip.heading}</h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-warm-gray">{technology.ip.body}</p>
        <p className="mt-4 flex items-center gap-3 text-sm">
          <span className="font-semibold text-navy">Patent / IP status:</span>
          {technology.ip.status ? (
            <span>{technology.ip.status}</span>
          ) : (
            <span className="chip-pending" title="Client to supply patent/application/trade-secret status">
              Pending verification
            </span>
          )}
        </p>
      </Reveal>

      <p className="mt-8 text-xs italic text-warm-gray">{disclaimers.framework}</p>
    </Section>
  )
}

/* ------------------------------------------------------------- PORTFOLIO */
export function Portfolio() {
  return (
    <section id="portfolio" className="bg-off-white py-[clamp(3.5rem,9vw,7rem)]">
      <div className="container-brand">
        <Reveal>
          <Eyebrow>{portfolioIntro.eyebrow}</Eyebrow>
          <h2 className="h-section max-w-3xl">
            {portfolioIntro.headlineLead}
            <em>{portfolioIntro.headlineEmphasis}</em>
            {portfolioIntro.headlinePost}
          </h2>
          <p className="mt-6 max-w-2xl text-warm-gray">{portfolioIntro.body}</p>
          <p className="mt-4 text-sm text-warm-gray">
            Products are sold to consumers at{' '}
            <a
              href={site.consumerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-navy underline decoration-gold decoration-2 underline-offset-4 hover:text-gold"
            >
              {site.consumerLabel} ↗
            </a>
            . No pricing or checkout appears on this investor site.
          </p>
        </Reveal>
      </div>

      {/* Full-width, 4-across product row to match the consumer site */}
      <div className="mt-12 grid grid-cols-1 gap-px border-y border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p, i) => (
          <Reveal key={p.key} delay={i * 60} className="flex flex-col bg-white">
            <div className="relative aspect-[4/5] bg-off-white">
              <Image
                src={p.image}
                alt={`Igni${p.suffix} — premium supplement bottle`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl">
                <BrandName suffix={p.suffix} />
              </h3>
              <p className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-gold">
                {p.tier}
              </p>
              <p className="mt-3 text-sm text-warm-gray">{p.positioning}</p>
              <ul className="mt-4 grid grid-cols-2 gap-1.5">
                {p.figures.map((f) => (
                  <li key={f} className="rounded bg-off-white px-2.5 py-1.5 text-xs font-semibold text-navy">
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.68rem] leading-relaxed text-warm-gray">{p.citation}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="container-brand">
        <p className="mt-8 text-xs text-warm-gray">{disclaimers.fda}</p>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------- TRACTION */
export function Traction() {
  return (
    <Section id="traction" tone="primary">
      <Reveal>
        <Eyebrow>{tractionIntro.eyebrow}</Eyebrow>
        <h2 className="h-section max-w-3xl">
          {tractionIntro.headlineLead}
          <em>{tractionIntro.headlineEmphasis}</em>
          {tractionIntro.headlinePost}
        </h2>
      </Reveal>

      <Reveal className="mt-12">
        <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-warm-gray">Business metrics</h3>
        <dl className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-7">
          {businessMetrics.map((m) => (
            <MetricCell key={m.label} metric={m} />
          ))}
        </dl>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <h3 className="h-subhead">Scientific validation</h3>
          <ul className="mt-4 space-y-3">
            {scientificValidation.map((s) => (
              <li key={s} className="flex gap-3 text-sm text-warm-gray">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                {s}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={80}>
          <figure className="rounded-card bg-navy p-8 text-white on-dark">
            <blockquote className="font-display text-xl italic leading-relaxed">
              “{endorsement.quote}”
            </blockquote>
            <figcaption className="mt-4 text-sm text-white/70">{endorsement.attribution}</figcaption>
            {!endorsement.verified && (
              <p className="mt-4 text-[0.7rem] text-white/45">
                Attribution pending permission for investor use.
              </p>
            )}
          </figure>
        </Reveal>
      </div>

      {/* COVR awards — verified */}
      <Reveal className="mt-14">
        <h3 className="h-subhead">{awards.title}</h3>
        <p className="mt-1 text-sm text-warm-gray">{awards.org}</p>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {awards.items.map((a) => {
            const ring =
              a.tier === 'Gold'
                ? 'text-gold-bright border-gold-bright'
                : a.tier === 'Silver'
                ? 'text-warm-gray border-warm-gray'
                : 'text-gold border-gold'
            return (
              <div key={a.tier} className="flex items-center gap-4 rounded-card border border-hairline p-6">
                <span
                  className={`flex h-14 w-14 flex-none items-center justify-center rounded-full border-2 font-display text-lg ${ring}`}
                >
                  {a.tier[0]}
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-warm-gray">
                    2025 {a.tier}
                  </span>
                  <span className="font-display text-lg text-navy">{a.category}</span>
                </span>
              </div>
            )
          })}
        </div>
      </Reveal>

      <Reveal className="mt-10 rounded-card border border-dashed border-hairline p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-warm-gray">
          Awaiting documentation (omitted until supplied)
        </p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {pendingProof.map((p) => (
            <li key={p} className="chip-pending">{p}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}

/* -------------------------------------------------------- LIFESTYLE BAND */
export function LifestyleBand() {
  return (
    <section className="relative h-[46vh] min-h-[340px] overflow-hidden">
      <Image
        src="/lifestyle/hand.jpg"
        alt="An Igniton supplement held in warm natural light — premium daily ritual"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Darken for legible text regardless of what's behind it */}
      <div className="absolute inset-0 bg-navy/35" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/10" />
      <div className="relative z-10 flex h-full items-center">
        <div className="container-brand">
          <Reveal>
            <p className="eyebrow mb-4 text-gold-bright [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
              Made in Colorado, USA
            </p>
            <p className="max-w-2xl font-display text-3xl leading-tight text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.55)] md:text-4xl">
              A premium ritual, engineered to <em className="emphasis text-gold-bright">work</em>.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* --------------------------------------------------------------- COMPANY */
export function Company() {
  return (
    <Section id="company" tone="alt">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>{company.eyebrow}</Eyebrow>
          <h2 className="h-section">
            {company.headlineLead}
            <em>{company.headlineEmphasis}</em>
            {company.headlinePost}
          </h2>
          <ul className="mt-8 space-y-4">
            {company.facts.map((f) => (
              <li key={f} className="flex gap-3 text-navy">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                <span className="font-medium">{f}</span>
              </li>
            ))}
          </ul>
          <Link
            href={company.articlesOfIncorporation}
            className="btn-secondary mt-6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Articles of Incorporation (PDF)
          </Link>
        </Reveal>

        <Reveal delay={80} className="rounded-card border border-hairline bg-white p-8">
          <h3 className="h-subhead">{company.gaia.heading}</h3>
          <p className="mt-3 text-sm leading-relaxed text-warm-gray">{company.gaia.body}</p>
          <p className="mt-4 flex items-center gap-3 text-sm">
            <span className="font-semibold text-navy">Gaia ownership:</span>
            {company.gaia.ownership ? (
              <span>{company.gaia.ownership}</span>
            ) : (
              <span className="chip-pending" title="Confirm exact % — source references two-thirds">
                Pending exact %
              </span>
            )}
          </p>
          <hr className="my-6 border-hairline" />
          <h3 className="h-subhead">Business model</h3>
          <p className="mt-3 text-sm leading-relaxed text-warm-gray">{company.businessModel}</p>
        </Reveal>
      </div>
    </Section>
  )
}

/* --------------------------------------------------------------- ROADMAP */
export function Roadmap() {
  return (
    <Section id="roadmap" tone="dark">
      <Reveal>
        <Eyebrow>{roadmapIntro.eyebrow}</Eyebrow>
        <h2 className="h-section max-w-3xl text-white">
          {roadmapIntro.headlineLead}
          <em>{roadmapIntro.headlineEmphasis}</em>
          {roadmapIntro.headlinePost}
        </h2>
        <p className="mt-4 max-w-2xl text-sm italic text-white/55">{disclaimers.forwardLooking}</p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {horizons.map((h, i) => (
          <Reveal key={h.label} delay={i * 80} className="rounded-card border border-white/15 p-7">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{h.label}</span>
            <h3 className="h-subhead mt-3 text-white">{h.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">{h.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* --------------------------------------------------------------- CONTACT */
export function Contact() {
  return (
    <Section id="contact" tone="primary">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>Investor Relations</Eyebrow>
        <h2 className="h-section">
          Let’s <em>talk</em>.
        </h2>
        <p className="mt-6 text-warm-gray">
          For the investor overview, data room access, or a conversation with the team, reach
          out to investor relations.
        </p>
        <a href={`mailto:${site.irEmail}`} className="btn-primary btn-primary--gold mt-8">
          Email investor relations
        </a>
        <p className="mt-4 text-sm text-warm-gray">{site.irEmail}</p>
        <p className="mx-auto mt-10 max-w-xl text-[0.7rem] leading-relaxed text-warm-gray">
          {disclaimers.notAnOffer}
        </p>
      </Reveal>
    </Section>
  )
}
