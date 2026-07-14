import { Section } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { getSections } from '@/lib/sections'
import { BlockView } from './BlockView'

// Renders a page's custom sections (added in the admin) after its fixed
// content. Alternates section tone for rhythm. Renders nothing until blocks
// exist, so pages are unchanged until Ashley adds a section.
export async function PageSections({ slug }: { slug: string }) {
  const blocks = await getSections(slug)
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
