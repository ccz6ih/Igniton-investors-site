'use client'

import Link from 'next/link'
import { useState } from 'react'
import { saveContent } from '@/lib/admin/actions'
import { TextInput, StringList, FieldGroup, SaveBar } from '@/components/admin/ui'
import { ImageField } from '@/components/admin/ImageField'

type AboutUs = (typeof import('@/content/deck'))['aboutUs']

export function AboutUsEditor({ initial }: { initial: AboutUs }) {
  const [state, setState] = useState<AboutUs>(initial)

  const patch = (p: Partial<AboutUs>) => setState((s) => ({ ...s, ...p }))

  const setCompare = (i: number, p: Partial<AboutUs['gdv']['compare'][number]>) =>
    patch({
      gdv: {
        ...state.gdv,
        compare: state.gdv.compare.map((c, j) => (j === i ? { ...c, ...p } : c)),
      },
    })
  const removeCompare = (i: number) =>
    patch({ gdv: { ...state.gdv, compare: state.gdv.compare.filter((_, j) => j !== i) } })
  const addCompare = () =>
    patch({
      gdv: {
        ...state.gdv,
        compare: [...state.gdv.compare, { label: '', energy: '', noise: '', image: '' }],
      },
    })

  async function onSave(): Promise<string | null> {
    const r = await saveContent('aboutUs', state)
    return r.ok ? null : r.error
  }

  return (
    <div>
      <Link href="/admin" className="text-sm font-medium text-warm-gray hover:text-navy">
        ← All pages
      </Link>
      <h1 className="mt-3 font-display text-3xl text-navy">About Us</h1>
      <p className="mt-2 text-warm-gray">Company intro, GDV comparison, closing paragraphs, and Igniton Inc. highlights.</p>

      <div className="mt-8 space-y-6">
        <FieldGroup title="GDV comparison">
          <TextInput
            label="Unit"
            value={state.gdv.unit}
            onChange={(v) => patch({ gdv: { ...state.gdv, unit: v } })}
          />
          <div className="space-y-3">
            {state.gdv.compare.map((item, i) => (
              <div key={i} className="space-y-3 rounded-lg border border-hairline bg-white p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-navy">Comparison {i + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeCompare(i)}
                    className="rounded-md border border-hairline px-2.5 py-1 text-xs text-red-600 hover:border-red-400 hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
                <TextInput
                  label="Label"
                  value={item.label}
                  onChange={(v) => setCompare(i, { label: v })}
                />
                <TextInput
                  label="Energy"
                  value={item.energy}
                  onChange={(v) => setCompare(i, { energy: v })}
                />
                <TextInput
                  label="Noise"
                  value={item.noise}
                  onChange={(v) => setCompare(i, { noise: v })}
                />
                <ImageField
                  label="Image"
                  value={item.image}
                  onChange={(v) => setCompare(i, { image: v })}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addCompare}
              className="rounded-lg border border-dashed border-hairline px-3 py-1.5 text-sm font-medium text-warm-gray hover:border-gold hover:text-navy"
            >
              + Add comparison
            </button>
          </div>
        </FieldGroup>

        <FieldGroup title="Outro">
          <StringList
            label="Outro"
            values={state.outro}
            onChange={(v) => patch({ outro: v })}
            addLabel="Add paragraph"
          />
        </FieldGroup>

        <FieldGroup title="Igniton Inc.">
          <TextInput
            label="Heading"
            value={state.inc.heading}
            onChange={(v) => patch({ inc: { ...state.inc, heading: v } })}
          />
          <StringList
            label="Bullets"
            values={state.inc.bullets}
            onChange={(v) => patch({ inc: { ...state.inc, bullets: v } })}
            addLabel="Add bullet"
          />
        </FieldGroup>
      </div>

      <SaveBar onSave={onSave} />
    </div>
  )
}
