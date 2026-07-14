import type { Metadata } from 'next'
import Image from 'next/image'
import { Section, Eyebrow } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { BrandName } from '@/components/BrandName'
import { IgniText } from '@/components/IgniText'
import { ProductTabs } from '@/components/ProductTabs'
import { WaterComparison } from '@/components/WaterComparison'
import { getContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Products',
  alternates: { canonical: '/products' },
}

export default async function ProductsPage() {
  const p = await getContent('productOverview')

  return (
    <ProductTabs
      labels={[
        'Quantum-Enhanced Supplements',
        'Biophotonic Devices',
        'Microchip Release',
        'Coherence Environment',
      ]}
    >
      {/* ---------------- Quantum-Enhanced Supplements ---------------- */}
      <>
        <Section tone="primary">
          <Reveal className="text-center">
            <h1 className="font-display text-3xl text-navy sm:text-4xl">{p.heading}</h1>
          </Reveal>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {p.products.map((prod, i) => (
              <Reveal key={prod.suffix} delay={(i % 4) * 60} className="flex h-full flex-col">
                <div className="relative aspect-[4/5] overflow-hidden rounded-section bg-off-white">
                  <Image src={prod.image} alt={`Igni${prod.suffix}`} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
                </div>
                <h2 className="mt-4 text-xl">
                  <BrandName suffix={prod.suffix} />
                </h2>
                <ul className="mt-3 space-y-1.5 text-sm font-semibold text-navy">
                  {prod.stats.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {prod.basis && <p className="mt-3 text-xs italic text-warm-gray">{prod.basis}</p>}

                {prod.studies.length > 0 && (
                  <div className="mt-auto flex flex-col gap-3 pt-6">
                    {prod.studies.map((s) =>
                      s.href ? (
                        <a
                          key={s.label}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-14 items-center justify-center rounded border border-navy px-3 text-center text-sm font-semibold leading-tight text-navy transition-colors hover:bg-navy hover:text-white"
                        >
                          {s.label}
                        </a>
                      ) : (
                        <span
                          key={s.label}
                          title="PDF coming soon"
                          className="flex h-14 items-center justify-center rounded border border-dashed border-navy/40 px-3 text-center text-sm font-semibold leading-tight text-warm-gray"
                        >
                          {s.label}
                        </span>
                      ),
                    )}
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 flex flex-wrap items-center justify-center gap-10">
            {p.awards.map((a) => (
              <Image
                key={a.tier}
                src={a.image}
                alt={`COVR ${a.tier} Award`}
                width={260}
                height={260}
                className="h-40 w-40 sm:h-52 sm:w-52"
              />
            ))}
          </Reveal>
        </Section>

        {/* World record — under the supplements */}
        <Section tone="alt">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl text-navy sm:text-3xl">{p.worldRecord.heading}</h2>
            <p className="mt-2 text-warm-gray">
              <IgniText>{p.worldRecord.sub}</IgniText>
            </p>
            <div className="relative mx-auto mt-8 aspect-[1/1] max-w-lg overflow-hidden rounded-section">
              <Image src={p.worldRecord.image} alt={p.worldRecord.heading} fill sizes="32rem" className="object-cover" />
            </div>
          </Reveal>
        </Section>
      </>

      {/* ---------------- Biophotonic Devices ---------------- */}
      <>
        <Section tone="primary">
          <Reveal>
            <Eyebrow>Products</Eyebrow>
            <h2 className="font-display text-3xl text-navy">{p.biophotonic.heading}</h2>
          </Reveal>
          <div className="mt-10 space-y-8">
            {p.biophotonic.devices.map((d, i) => (
              <Reveal
                key={d.name}
                delay={i * 70}
                className="grid items-center gap-6 border-t border-hairline pt-8 sm:grid-cols-[160px,1fr]"
              >
                <div className="relative h-28 w-full">
                  <Image src={d.image} alt={d.name} fill className="object-contain object-left" />
                </div>
                <div>
                  <h3 className="font-display text-xl text-navy">{d.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-warm-gray">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Igniton Impact on Water — shown again per deck */}
        <WaterComparison tone="alt" />
      </>

      {/* ---------------- Microchip Release ---------------- */}
      <>
        <Section tone="primary">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl text-navy sm:text-3xl">{p.microchip.heading}</h2>
            <div className="relative mx-auto mt-8 aspect-[635/255] w-full max-w-2xl overflow-hidden rounded-section">
              <Image src={p.microchip.stick.image} alt={p.microchip.stick.caption} fill sizes="42rem" className="object-cover" />
            </div>
            <p className="mt-4 font-semibold text-navy">{p.microchip.stick.caption}</p>
            <p className="text-sm text-warm-gray">{p.microchip.stick.sub}</p>

            <div className="relative mx-auto mt-12 aspect-[415/300] w-full max-w-md">
              <Image src={p.microchip.equipment.image} alt={p.microchip.equipment.caption} fill sizes="28rem" className="object-contain" />
            </div>
            <p className="mt-4 font-semibold text-navy">{p.microchip.equipment.caption}</p>
          </Reveal>
        </Section>

        {/* Igniton Coherence Imprinting Biophotons */}
        <Section tone="alt">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl text-navy sm:text-3xl">{p.coherence.heading}</h2>
            <p className="mt-4 font-display text-2xl text-navy">
              <IgniText>{p.coherence.productName}</IgniText>
            </p>
            <p className="mt-4 font-semibold text-navy">{p.coherence.lead}</p>
          </Reveal>
          <Reveal className="mx-auto mt-6 max-w-2xl space-y-3">
            {p.coherence.points.map((pt, i) => (
              <p key={i} className="flex gap-3 text-sm text-warm-gray">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                <span>{pt}</span>
              </p>
            ))}
          </Reveal>
          <Reveal className="relative mx-auto mt-8 h-72 w-full max-w-xs">
            <Image src={p.coherence.image} alt={p.coherence.productName} fill sizes="20rem" className="object-contain" />
          </Reveal>
        </Section>
      </>

      {/* ---------------- Coherence Environment ---------------- */}
      <>
        <Section tone="primary">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl text-navy sm:text-3xl">{p.chair.heading}</h2>
            <p className="mt-4 font-semibold text-navy">{p.chair.productTitle}</p>
            <p className="text-sm text-warm-gray">{p.chair.subtitle}</p>
            <div className="relative mx-auto mt-8 aspect-[650/348] w-full max-w-2xl overflow-hidden rounded-section">
              <Image src={p.chair.image} alt={p.chair.productTitle} fill sizes="42rem" className="object-cover" />
            </div>
            <p className="mt-3 text-xs text-warm-gray">{p.chair.imageNote}</p>
            <div className="mx-auto mt-8 max-w-xl space-y-3 text-left">
              {p.chair.points.map((pt, i) => (
                <p key={i} className="flex gap-3 text-sm text-navy">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold" />
                  <span>{pt}</span>
                </p>
              ))}
            </div>
          </Reveal>
        </Section>

        {/* Energetic Landscape of the Coherence Chair (equations) */}
        <Section tone="alt">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-2xl text-navy sm:text-3xl">{p.chair.equationsHeading}</h2>
            <div className="relative mx-auto mt-8 aspect-[638/715] w-full max-w-xl overflow-hidden rounded-section bg-white p-2 ring-1 ring-hairline">
              <Image src={p.chair.equationsImage} alt={p.chair.equationsHeading} fill sizes="36rem" className="object-contain" />
            </div>
          </Reveal>
        </Section>
      </>
    </ProductTabs>
  )
}
