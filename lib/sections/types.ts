// Composable, pre-styled content blocks Ashley can add to any page (Phase 2).
// Each block carries its own data; rendering lives in components/sections and
// editing in components/admin/sections. Add a new block type by extending the
// union, BLOCK_LIBRARY, newBlock(), <BlockView>, and <BlockEditor>.

export type StatItem = { value: string; label: string }

export type Block =
  | { id: string; type: 'richText'; heading: string; body: string[] }
  | {
      id: string
      type: 'imageText'
      image: string
      heading: string
      body: string[]
      imageSide: 'left' | 'right'
    }
  | { id: string; type: 'statRow'; heading: string; stats: StatItem[] }
  | { id: string; type: 'quote'; quote: string; attribution: string }
  | { id: string; type: 'cta'; heading: string; body: string; buttonLabel: string; buttonHref: string }

export type BlockType = Block['type']

// Shown in the "Add section" menu.
export const BLOCK_LIBRARY: { type: BlockType; label: string; description: string }[] = [
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

export function newBlock(type: BlockType): Block {
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
}
