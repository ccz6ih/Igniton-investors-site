'use client'

import Link from 'next/link'
import { useState } from 'react'
import { saveContent } from '@/lib/admin/actions'
import { useUnsavedGuard } from '@/components/admin/useUnsavedGuard'
import { TextInput, TextArea, StringList, FieldGroup, SaveBar } from '@/components/admin/ui'
import { ImageField } from '@/components/admin/ImageField'

type TechnologyDeck = (typeof import('@/content/deck'))['technologyDeck']

export function TechnologyEditor({ initial }: { initial: TechnologyDeck }) {
  const [state, setState] = useState<TechnologyDeck>(initial)
  const guard = useUnsavedGuard(state)

  const patch = (p: Partial<TechnologyDeck>) => setState((s) => ({ ...s, ...p }))

  const setCurrentItem = (i: number, item: { caption: string; image: string }) =>
    patch({ current: { ...state.current, items: state.current.items.map((x, j) => (j === i ? item : x)) } })
  const removeCurrentItem = (i: number) =>
    patch({ current: { ...state.current, items: state.current.items.filter((_, j) => j !== i) } })
  const addCurrentItem = () =>
    patch({ current: { ...state.current, items: [...state.current.items, { caption: '', image: '' }] } })

  const setOriginalItem = (i: number, item: { caption: string; image: string }) =>
    patch({ original: { ...state.original, items: state.original.items.map((x, j) => (j === i ? item : x)) } })
  const removeOriginalItem = (i: number) =>
    patch({ original: { ...state.original, items: state.original.items.filter((_, j) => j !== i) } })
  const addOriginalItem = () =>
    patch({ original: { ...state.original, items: [...state.original.items, { caption: '', image: '' }] } })

  async function onSave(): Promise<string | null> {
    const r = await saveContent('technologyDeck', state)
    if (!r.ok) return r.error
    guard.markSaved()
    return null
  }

  return (
    <div>
      <Link href="/admin" className="text-sm font-medium text-warm-gray hover:text-navy">
        ← All pages
      </Link>
      <h1 className="mt-3 font-display text-3xl text-navy">Technology</h1>
      <p className="mt-2 text-warm-gray">Intro paragraphs and the current & original apparatus galleries.</p>

      <div className="mt-8 space-y-6">
        <FieldGroup title="Intro">
          <StringList
            label="Paragraphs"
            values={state.intro}
            onChange={(v) => patch({ intro: v })}
            addLabel="Add paragraph"
          />
        </FieldGroup>

        <FieldGroup title="Current Igniton Equipment">
          <TextInput
            label="Heading"
            value={state.current.heading}
            onChange={(v) => patch({ current: { ...state.current, heading: v } })}
          />
          <div className="space-y-3">
            {state.current.items.map((item, i) => (
              <div key={i} className="flex items-end gap-3">
                <div className="flex-1 space-y-4">
                  <TextArea
                    label={`Caption ${i + 1}`}
                    value={item.caption}
                    onChange={(v) => setCurrentItem(i, { ...item, caption: v })}
                  />
                  <ImageField
                    label="Image"
                    value={item.image}
                    onChange={(v) => setCurrentItem(i, { ...item, image: v })}
                    aspect={16 / 9}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeCurrentItem(i)}
                  className="mb-1 rounded-md border border-hairline px-2.5 py-1 text-xs text-red-600 hover:border-red-400 hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addCurrentItem}
              className="rounded-lg border border-dashed border-hairline px-3 py-1.5 text-sm font-medium text-warm-gray hover:border-gold hover:text-navy"
            >
              + Add item
            </button>
          </div>
        </FieldGroup>

        <FieldGroup title="Original Igniton Systems (Switzerland)">
          <TextInput
            label="Heading"
            value={state.original.heading}
            onChange={(v) => patch({ original: { ...state.original, heading: v } })}
          />
          <div className="space-y-3">
            {state.original.items.map((item, i) => (
              <div key={i} className="flex items-end gap-3">
                <div className="flex-1 space-y-4">
                  <TextArea
                    label={`Caption ${i + 1}`}
                    value={item.caption}
                    onChange={(v) => setOriginalItem(i, { ...item, caption: v })}
                  />
                  <ImageField
                    label="Image"
                    value={item.image}
                    onChange={(v) => setOriginalItem(i, { ...item, image: v })}
                    aspect={16 / 9}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeOriginalItem(i)}
                  className="mb-1 rounded-md border border-hairline px-2.5 py-1 text-xs text-red-600 hover:border-red-400 hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addOriginalItem}
              className="rounded-lg border border-dashed border-hairline px-3 py-1.5 text-sm font-medium text-warm-gray hover:border-gold hover:text-navy"
            >
              + Add item
            </button>
          </div>
        </FieldGroup>
      </div>

      <SaveBar onSave={onSave} previewHref="/technology" />
    </div>
  )
}
