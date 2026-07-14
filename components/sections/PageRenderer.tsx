import { Section } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { getPageLayout } from '@/lib/layout'
import { BUILTIN_COMPONENTS } from './builtinComponents'
import { BlockView } from './BlockView'

// Renders a whole page from its arranged layout: built-in sections (bespoke
// components) and custom blocks, in order, skipping hidden ones. Built-in
// sections carry their own styling; custom blocks are wrapped in a Section with
// an alternating tone.
export async function PageRenderer({ slug }: { slug: string }) {
  const layout = await getPageLayout(slug)
  const visible = layout.filter((b) => !b.hidden)
  let customIndex = 0

  return (
    <>
      {visible.map((block) => {
        if (block.type === 'builtin') {
          const Comp = BUILTIN_COMPONENTS[slug]?.[block.ref]
          return Comp ? <Comp key={block.id} /> : null
        }
        const tone = customIndex++ % 2 === 0 ? 'alt' : 'primary'
        return (
          <Section key={block.id} tone={tone}>
            <Reveal>
              <BlockView block={block} />
            </Reveal>
          </Section>
        )
      })}
    </>
  )
}
