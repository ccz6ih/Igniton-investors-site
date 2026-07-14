'use client'

import Link from 'next/link'
import { useState } from 'react'
import { saveSections } from '@/lib/admin/sections-actions'
import { useUnsavedGuard } from '@/components/admin/useUnsavedGuard'
import { SaveBar } from '@/components/admin/ui'
import { BlockEditor } from './BlockEditor'
import { slotsFor } from '@/lib/sections/slots'
import { BLOCK_LIBRARY, BLOCK_LABELS, newBlock, type Block, type BlockType } from '@/lib/sections/types'

export function SectionsManager({
  slug,
  title,
  initial,
}: {
  slug: string
  title: string
  initial: Block[]
}) {
  const [blocks, setBlocks] = useState<Block[]>(initial)
  const guard = useUnsavedGuard(blocks)
  const slots = slotsFor(slug)
  const previewHref = slug === 'home' ? '/' : `/${slug}`

  const update = (i: number, b: Block) => setBlocks((bs) => bs.map((x, j) => (j === i ? b : x)))
  const remove = (i: number) => setBlocks((bs) => bs.filter((_, j) => j !== i))
  const toggleHidden = (i: number) =>
    setBlocks((bs) => bs.map((x, j) => (j === i ? { ...x, hidden: !x.hidden } : x)))
  const add = (t: BlockType) => setBlocks((bs) => [...bs, newBlock(t)])
  const duplicate = (i: number) =>
    setBlocks((bs) => {
      const copy = { ...(JSON.parse(JSON.stringify(bs[i])) as Block), id: newBlock(bs[i].type).id }
      const next = [...bs]
      next.splice(i + 1, 0, copy)
      return next
    })
  const move = (i: number, dir: -1 | 1) =>
    setBlocks((bs) => {
      const j = i + dir
      if (j < 0 || j >= bs.length) return bs
      const next = [...bs]
      ;[next[i], next[j]] = [next[j], next[i]]
      return next
    })

  async function onSave(): Promise<string | null> {
    const r = await saveSections(slug, blocks)
    if (!r.ok) return r.error
    guard.markSaved()
    return null
  }

  return (
    <div>
      <Link href="/admin" className="text-sm font-medium text-warm-gray hover:text-navy">
        ← All pages
      </Link>
      <h1 className="mt-3 font-display text-3xl text-navy">{title} — Sections</h1>
      <p className="mt-2 max-w-xl text-warm-gray">
        Add sections anywhere on this page — pick a spot with <strong>Position</strong>. Each block
        is pre-styled to match the site. Use <strong>Hide</strong> to stage a section without
        publishing it.
      </p>

      <div className="mt-8 space-y-4">
        {blocks.length === 0 && (
          <p className="rounded-xl border border-dashed border-hairline bg-off-white/40 p-6 text-center text-sm text-warm-gray">
            No custom sections yet. Add one below.
          </p>
        )}

        {blocks.map((block, i) => (
          <div
            key={block.id}
            className={`rounded-xl border p-5 ${
              block.hidden ? 'border-dashed border-hairline bg-off-white/40' : 'border-hairline bg-white'
            }`}
          >
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-hairline pb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-semibold uppercase tracking-wide text-gold">
                  {BLOCK_LABELS[block.type]}
                </span>
                {block.hidden && (
                  <span className="rounded-full bg-off-white px-2 py-0.5 text-xs font-medium text-warm-gray">
                    Hidden
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5">
                <Ctrl label="Move up" onClick={() => move(i, -1)} disabled={i === 0}>↑</Ctrl>
                <Ctrl label="Move down" onClick={() => move(i, 1)} disabled={i === blocks.length - 1}>↓</Ctrl>
                <Ctrl label="Duplicate" onClick={() => duplicate(i)}>⧉</Ctrl>
                <Ctrl label={block.hidden ? 'Show' : 'Hide'} onClick={() => toggleHidden(i)}>
                  {block.hidden ? '🙈' : '👁'}
                </Ctrl>
                <Ctrl label="Remove" onClick={() => remove(i)} tone="danger">✕</Ctrl>
              </div>
            </div>

            <label className="mb-4 flex items-center gap-2 text-sm">
              <span className="font-medium text-navy">Position</span>
              <select
                value={block.slot ?? 'bottom'}
                onChange={(e) => update(i, { ...block, slot: e.target.value })}
                className="rounded-lg border border-hairline bg-white px-3 py-1.5 text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              >
                {slots.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>

            <BlockEditor block={block} onChange={(b) => update(i, b)} />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <p className="mb-2 text-sm font-semibold text-navy">Add a section</p>
        <div className="flex flex-wrap gap-2">
          {BLOCK_LIBRARY.map((b) => (
            <button
              key={b.type}
              type="button"
              onClick={() => add(b.type)}
              title={b.description}
              className="rounded-lg border border-hairline px-3 py-1.5 text-sm font-medium text-navy transition hover:border-gold hover:bg-off-white"
            >
              + {b.label}
            </button>
          ))}
        </div>
      </div>

      <SaveBar onSave={onSave} previewHref={previewHref} />
    </div>
  )
}

function Ctrl({
  children,
  onClick,
  label,
  disabled,
  tone = 'default',
}: {
  children: React.ReactNode
  onClick: () => void
  label: string
  disabled?: boolean
  tone?: 'default' | 'danger'
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      disabled={disabled}
      className={`grid h-7 w-7 place-items-center rounded-md border text-xs transition disabled:cursor-not-allowed disabled:opacity-30 ${
        tone === 'danger'
          ? 'border-hairline text-red-600 hover:border-red-400 hover:bg-red-50'
          : 'border-hairline text-warm-gray hover:border-gold hover:text-navy'
      }`}
    >
      {children}
    </button>
  )
}
