import type { Metadata } from 'next'
import Image from 'next/image'
import { Section, Eyebrow } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { BrandName } from '@/components/BrandName'
import { productOverview as p } from '@/content/deck'

export const metadata: Metadata = {
  title: 'Product Overview',
  alternates: { canonical: '/product-overview' },
}

export default function ProductOverviewPage() {
  return (
    <>
      {/* Supplements */}
      <Section tone="primary">
        <Reveal className="text-center">
          <h1 className="font-display text-3xl text-navy sm:text-4xl">{p.heading}</h1>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {p.products.map((prod, i) => (
            <Reveal key={prod.suffix} delay={(i % 4) * 60} className="flex flex-col">
              <div className="relative aspect-[4/5] overflow-hidden rounded-section bg-off-white">
                <Image src={prod.image} alt={`Igni${prod.suffix}`} fill sizes="(max-width:1024px) 50vw, 25vw" className="object-cover" />
              </div>
              <h2 className="mt-4 text-xl">
                <BrandName suffix={prod.suffix} />
              </h2>
              <div className="mt-3 flex flex-col gap-2">
                {prod.studies.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded border border-hairline px-3 py-2 text-center text-xs font-semibold text-navy transition-colors hover:bg-off-white"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <ul className="mt-4 space-y-1.5 text-sm font-semibold text-navy">
                {prod.stats.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              {prod.basis && <p className="mt-3 text-xs italic text-warm-gray">{prod.basis}</p>}
            </Reveal>
          ))}
        </div>

        {/* COVR awards */}
        <Reveal className="mt-14 flex flex-wrap items-center justify-center gap-8">
          {p.awards.map((a) => (
            <Image key={a.tier} src={a.image} alt={`COVR ${a.tier} Award`} width={110} height={110} className="h-24 w-24" />
          ))}
        </Reveal>
      </Section>

      {/* World record */}
      <Section tone="alt">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl text-navy sm:text-3xl">{p.worldRecord.heading}</h2>
          <p className="mt-2 text-warm-gray">{p.worldRecord.sub}</p>
          <div className="relative mx-auto mt-8 aspect-[1/1] max-w-lg overflow-hidden rounded-section">
            <Image src={p.worldRecord.image} alt={p.worldRecord.heading} fill sizes="32rem" className="object-cover" />
          </div>
        </Reveal>
      </Section>

      {/* Biophotonic devices */}
      <Section tone="primary">
        <Reveal>
          <Eyebrow>Product Overview</Eyebrow>
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

      {/* USB device */}
      <Section tone="alt">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-2xl text-navy">{p.usb.heading}</h2>
          <div className="relative mx-auto mt-8 aspect-[3/1] w-full max-w-md">
            <Image src={p.usb.image} alt={p.usb.heading} fill className="object-contain" />
          </div>
          <p className="mt-6 text-warm-gray">{p.usb.caption}</p>
        </Reveal>
      </Section>

      {/* HIT chair */}
      <Section tone="primary">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl text-navy">{p.chair.heading}</h2>
          <div className="relative mx-auto mt-8 aspect-[16/9] w-full overflow-hidden rounded-section">
            <Image src={p.chair.image} alt={p.chair.heading} fill sizes="48rem" className="object-cover" />
          </div>
          <p className="mt-6 text-sm italic text-warm-gray">{p.chair.note}</p>
        </Reveal>
      </Section>
    </>
  )
}
