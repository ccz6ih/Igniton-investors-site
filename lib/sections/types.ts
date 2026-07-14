// Composable, pre-styled content blocks Ashley can add to any page (Phase 2).
// Each block carries its own data; rendering lives in components/sections and
// editing in components/admin/sections. Add a new block type by extending the
// union, BLOCK_LIBRARY, newBlock(), <BlockView>, and <BlockEditor>.

export type StatItem = { value: string; label: string }

// Fields common to every block: id, which page slot it renders in (see
// lib/sections/slots.ts; undefined = bottom), and whether it's hidden (staged,
// not shown on the live page).
type Base = { id: string; slot?: string; hidden?: boolean }

export type Block =
  | (Base & { type: 'richText'; heading: string; body: string[] })
  | (Base & {
      type: 'imageText'
      image: string
      heading: string
      body: string[]
      imageSide: 'left' | 'right'
    })
  | (Base & { type: 'statRow'; heading: string; stats: StatItem[] })
  | (Base & { type: 'quote'; quote: string; attribution: string })
  | (Base & { type: 'cta'; heading: string; body: string; buttonLabel: string; buttonHref: string })
  // A built-in (bespoke) page section — reordered/hidden via the arranger; its
  // content is edited in the page's content editor. `ref` identifies which
  // section (see lib/sections/builtins.ts).
  | (Base & { type: 'builtin'; ref: string })

export type BlockType = Block['type']

// Block types Ashley can add from the library (excludes 'builtin').
export type CustomBlockType = Exclude<BlockType, 'builtin'>

// Shown in the "Add section" menu.
export const BLOCK_LIBRARY: { type: CustomBlockType; label: string; description: string }[] = [
  { type: 'richText', label: 'Text', description: 'A heading with paragraphs.' },
  { type: 'imageText', label: 'Image + text', description: 'An image beside text.' },
  { type: 'statRow', label: 'Stat row', description: 'A row of numbers with labels.' },
  { type: 'quote', label: 'Quote', description: 'A pulled quote with attribution.' },
  { type: 'cta', label: 'Call to action', description: 'A heading with a button.' },
]

function makeId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID()
  return `b_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}

export function newBlock(type: CustomBlockType): Block {
  const id = makeId()
  switch (type) {
    case 'richText':
      return { id, type, heading: '', body: [''] }
    case 'imageText':
      return { id, type, image: '', heading: '', body: [''], imageSide: 'left' }
    case 'statRow':
      return { id, type, heading: '', stats: [{ value: '', label: '' }] }
    case 'quote':
      return { id, type, quote: '', attribution: '' }
    case 'cta':
      return { id, type, heading: '', body: '', buttonLabel: '', buttonHref: '' }
  }
}

export const BLOCK_LABELS: Record<BlockType, string> = {
  richText: 'Text',
  imageText: 'Image + text',
  statRow: 'Stat row',
  quote: 'Quote',
  cta: 'Call to action',
  builtin: 'Section',
}
