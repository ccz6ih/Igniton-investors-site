import Image from 'next/image'
import { Section } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { getContent } from '@/lib/content'

// "Igniton Impact on Water (Photon Emission)" comparison — used on About Us and
// again on the Products page (Biophotonic Devices). Content is live-editable via
// the About Us editor (aboutUs.gdv).
export async function WaterComparison({ tone = 'alt' }: { tone?: 'primary' | 'alt' }) {
  const aboutUs = await getContent('aboutUs')
  const g = aboutUs.gdv

  return (
    <Section tone={tone}>
      <Reveal className="text-center">
        <h2 className="font-display text-2xl text-navy sm:text-3xl">{g.heading}</h2>
        {'subheading' in g && g.subheading && (
          <p className="mt-1 text-lg text-warm-gray">{g.subheading}</p>
        )}
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
        {g.compare.map((c, i) => (
          <Reveal
            key={c.label}
            delay={i * 80}
            className="overflow-hidden rounded-section border border-hairline bg-white"
          >
            <div className="bg-[#4d4d86] px-4 py-2.5 text-center text-sm font-semibold text-white">
              {c.label}
            </div>
            <div className="flex items-center gap-4 p-5">
              <div className="relative h-28 w-28 flex-none">
                <Image src={c.image} alt={c.label} fill className="object-contain" />
              </div>
              <div className="text-sm leading-snug">
                <p className="font-semibold text-navy">
                  Energy: {c.energy} ({g.unit})
                </p>
                <p className="font-semibold text-navy">Inner noise: {c.noise}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
