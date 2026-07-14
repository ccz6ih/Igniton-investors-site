'use client'

import Link from 'next/link'
import { useState } from 'react'
import { saveContent } from '@/lib/admin/actions'
import { useUnsavedGuard } from '@/components/admin/useUnsavedGuard'
import { TextInput, StringList, FieldGroup, SaveBar } from '@/components/admin/ui'

type ScienceDeck = (typeof import('@/content/deck'))['scienceDeck']

export function ScienceEditor({ initial }: { initial: ScienceDeck }) {
  const [state, setState] = useState<ScienceDeck>(initial)
  const guard = useUnsavedGuard(state)

  const patch = (p: Partial<ScienceDeck>) => setState((s) => ({ ...s, ...p }))

  async function onSave(): Promise<string | null> {
    const r = await saveContent('scienceDeck', state)
    if (!r.ok) return r.error
    guard.markSaved()
    return null
  }

  return (
    <div>
      <Link href="/admin" className="text-sm font-medium text-warm-gray hover:text-navy">
        ← All pages
      </Link>
      <h1 className="mt-3 font-display text-3xl text-navy">Science</h1>
      <p className="mt-2 text-warm-gray">What ignitons are, their place in physics, and their uses.</p>

      <div className="mt-8 space-y-6">
        <FieldGroup title="Opening (IGNITON)">
          <TextInput
            label="Heading"
            value={state.intro.heading}
            onChange={(v) => patch({ intro: { ...state.intro, heading: v } })}
          />
          <StringList
            label="Paragraphs"
            hint="Use *word* for italic, **word** for bold"
            values={state.intro.paragraphs}
            onChange={(v) => patch({ intro: { ...state.intro, paragraphs: v } })}
            addLabel="Add paragraph"
          />
        </FieldGroup>

        <FieldGroup title="What are Ignitons?">
          <TextInput
            label="Heading"
            value={state.whatAre.heading}
            onChange={(v) => patch({ whatAre: { ...state.whatAre, heading: v } })}
          />
          <StringList
            label="Paragraphs"
            values={state.whatAre.paragraphs}
            onChange={(v) => patch({ whatAre: { ...state.whatAre, paragraphs: v } })}
            addLabel="Add paragraph"
          />
        </FieldGroup>

        <FieldGroup title="Igniton place in physics">
          <TextInput
            label="Heading"
            value={state.physics.heading}
            onChange={(v) => patch({ physics: { ...state.physics, heading: v } })}
          />
          <StringList
            label="Levels"
            values={state.physics.levels}
            onChange={(v) => patch({ physics: { ...state.physics, levels: v } })}
            addLabel="Add level"
          />
        </FieldGroup>

        <FieldGroup title="Uses">
          <TextInput
            label="Heading"
            value={state.uses.heading}
            onChange={(v) => patch({ uses: { ...state.uses, heading: v } })}
          />
          <StringList
            label="List"
            values={state.uses.list}
            onChange={(v) => patch({ uses: { ...state.uses, list: v } })}
            addLabel="Add use"
          />
        </FieldGroup>

        {state.process && (
          <FieldGroup title="Igniton process">
            <TextInput
              label="Heading"
              value={state.process.heading}
              onChange={(v) => patch({ process: { ...state.process, heading: v } })}
            />
            <TextInput
              label="Lead"
              value={state.process.lead}
              onChange={(v) => patch({ process: { ...state.process, lead: v } })}
            />
            <StringList
              label="Points"
              values={state.process.points}
              onChange={(v) => patch({ process: { ...state.process, points: v } })}
              addLabel="Add point"
            />
          </FieldGroup>
        )}
      </div>

      <SaveBar onSave={onSave} previewHref="/science" />
    </div>
  )
}
