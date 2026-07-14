import { Section } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { getSections } from '@/lib/sections'
import { DEFAULT_SLOT } from '@/lib/sections/slots'
import { BlockView } from './BlockView'

// Renders a page's custom sections for one insertion slot. Each page places
// several <PageSections slot="..."> anchors between its fixed sections. Hidden
// blocks are skipped; renders nothing when a slot is empty, so pages are
// unchanged until Ashley adds a section.
export async function PageSections({ slug, slot = DEFAULT_SLOT }: { slug: string; slot?: string }) {
  const all = await getSections(slug)
  const blocks = all.filter((b) => (b.slot ?? DEFAULT_SLOT) === slot && !b.hidden)
  if (!blocks.length) return null

  return (
    <>
      {blocks.map((block, i) => (
        <Section key={block.id} tone={i % 2 === 0 ? 'alt' : 'primary'}>
          <Reveal>
            <BlockView block={block} />
          </Reveal>
        </Section>
      ))}
    </>
  )
}
