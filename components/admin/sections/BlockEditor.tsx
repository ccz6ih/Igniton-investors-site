'use client'

import type { Block, StatItem } from '@/lib/sections/types'
import { TextInput, TextArea, StringList, FieldLabel } from '@/components/admin/ui'
import { ImageField } from '@/components/admin/ImageField'

// Renders the right editing form for a block, based on its type.
export function BlockEditor({ block, onChange }: { block: Block; onChange: (b: Block) => void }) {
  switch (block.type) {
    case 'richText':
      return (
        <div className="space-y-4">
          <TextInput label="Heading" value={block.heading} onChange={(v) => onChange({ ...block, heading: v })} />
          <StringList
            label="Paragraphs"
            values={block.body}
            onChange={(v) => onChange({ ...block, body: v })}
            addLabel="Add paragraph"
          />
        </div>
      )

    case 'imageText':
      return (
        <div className="space-y-4">
          <ImageField label="Image" value={block.image} onChange={(v) => onChange({ ...block, image: v })} />
          <div>
            <FieldLabel label="Image side" />
            <select
              value={block.imageSide}
              onChange={(e) => onChange({ ...block, imageSide: e.target.value as 'left' | 'right' })}
              className="rounded-lg border border-hairline bg-white px-3 py-2 text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
            >
              <option value="left">Left</option>
              <option value="right">Right</option>
            </select>
          </div>
          <TextInput label="Heading" value={block.heading} onChange={(v) => onChange({ ...block, heading: v })} />
          <StringList
            label="Paragraphs"
            values={block.body}
            onChange={(v) => onChange({ ...block, body: v })}
            addLabel="Add paragraph"
          />
        </div>
      )

    case 'statRow': {
      const setStat = (i: number, patch: Partial<StatItem>) =>
        onChange({ ...block, stats: block.stats.map((s, j) => (j === i ? { ...s, ...patch } : s)) })
      const removeStat = (i: number) => onChange({ ...block, stats: block.stats.filter((_, j) => j !== i) })
      const addStat = () => onChange({ ...block, stats: [...block.stats, { value: '', label: '' }] })
      return (
        <div className="space-y-4">
          <TextInput label="Heading" value={block.heading} onChange={(v) => onChange({ ...block, heading: v })} />
          <div className="space-y-3">
            {block.stats.map((s, i) => (
              <div key={i} className="flex items-end gap-2">
                <div className="w-32">
                  <TextInput label="Value" value={s.value} onChange={(v) => setStat(i, { value: v })} />
                </div>
                <div className="flex-1">
                  <TextInput label="Label" value={s.label} onChange={(v) => setStat(i, { label: v })} />
                </div>
                <button
                  type="button"
                  onClick={() => removeStat(i)}
                  className="mb-1 rounded-md border border-hairline px-2.5 py-1 text-xs text-red-600 hover:border-red-400 hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addStat}
              className="rounded-lg border border-dashed border-hairline px-3 py-1.5 text-sm font-medium text-warm-gray hover:border-gold hover:text-navy"
            >
              + Add stat
            </button>
          </div>
        </div>
      )
    }

    case 'quote':
      return (
        <div className="space-y-4">
          <TextArea label="Quote" value={block.quote} onChange={(v) => onChange({ ...block, quote: v })} />
          <TextInput
            label="Attribution"
            value={block.attribution}
            onChange={(v) => onChange({ ...block, attribution: v })}
          />
        </div>
      )

    case 'cta':
      return (
        <div className="space-y-4">
          <TextInput label="Heading" value={block.heading} onChange={(v) => onChange({ ...block, heading: v })} />
          <TextArea label="Body" value={block.body} onChange={(v) => onChange({ ...block, body: v })} rows={2} />
          <TextInput
            label="Button label"
            value={block.buttonLabel}
            onChange={(v) => onChange({ ...block, buttonLabel: v })}
          />
          <TextInput
            label="Button link"
            hint="e.g. https://igniton.com or /product-overview"
            value={block.buttonHref}
            onChange={(v) => onChange({ ...block, buttonHref: v })}
          />
        </div>
      )
  }
}
