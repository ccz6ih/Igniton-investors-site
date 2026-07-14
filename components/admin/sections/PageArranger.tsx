'use client'

import Link from 'next/link'
import { useState } from 'react'
import { saveLayout } from '@/lib/admin/layout-actions'
import { useUnsavedGuard } from '@/components/admin/useUnsavedGuard'
import { SaveBar } from '@/components/admin/ui'
import { BlockEditor } from './BlockEditor'
import { builtinLabel } from '@/lib/sections/builtins'
import {
  BLOCK_LIBRARY,
  BLOCK_LABELS,
  newBlock,
  type Block,
  type CustomBlockType,
} from '@/lib/sections/types'

// Full-page arranger: reorder/hide every section (built-in + custom), edit
// custom blocks inline, and add new ones. Built-in sections keep their bespoke
// styling; their text/images are edited in the page's content editor.
export function PageArranger({
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
  const previewHref = slug === 'home' ? '/' : `/${slug}`

  const update = (i: number, b: Block) => setBlocks((bs) => bs.map((x, j) => (j === i ? b : x)))
  const remove = (i: number) => setBlocks((bs) => bs.filter((_, j) => j !== i))
  const toggleHidden = (i: number) =>
    setBlocks((bs) => bs.map((x, j) => (j === i ? { ...x, hidden: !x.hidden } : x)))
  const add = (t: CustomBlockType) => setBlocks((bs) => [...bs, newBlock(t)])
  const duplicate = (i: number) =>
    setBlocks((bs) => {
      const copy = { ...(JSON.parse(JSON.stringify(bs[i])) as Block), id: newBlock('richText').id }
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
    const r = await saveLayout(slug, blocks)
    if (!r.ok) return r.error
    guard.markSaved()
    return null
  }

  return (
    <div>
      <Link href="/admin" className="text-sm font-medium text-warm-gray hover:text-navy">
        ← All pages
      </Link>
      <h1 className="mt-3 font-display text-3xl text-navy">{title} — Arrange page</h1>
      <p className="mt-2 max-w-xl text-warm-gray">
        Reorder any section with the arrows, or <strong>Hide</strong> one to take it off the live
        page. Add new sections at the bottom, then drag them into place. A section&rsquo;s text and
        images are edited in the{' '}
        <Link href={`/admin/${slug}`} className="font-medium text-gold hover:text-navy">
          {title} content editor
        </Link>
        .
      </p>

      <div className="mt-8 space-y-3">
        {blocks.map((block, i) => {
          const isBuiltin = block.type === 'builtin'
          return (
            <div
              key={block.id}
              className={`rounded-xl border p-4 ${
                block.hidden
                  ? 'border-dashed border-hairline bg-off-white/40'
                  : isBuiltin
                    ? 'border-hairline bg-off-white/30'
                    : 'border-hairline bg-white'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-navy">
                    {isBuiltin ? builtinLabel(slug, block.ref) : BLOCK_LABELS[block.type]}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      isBuiltin ? 'bg-navy/5 text-navy' : 'bg-gold/15 text-gold'
                    }`}
                  >
                    {isBuiltin ? 'Built-in' : 'Custom'}
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
                  {!isBuiltin && <Ctrl label="Duplicate" onClick={() => duplicate(i)}>⧉</Ctrl>}
                  <Ctrl label={block.hidden ? 'Show' : 'Hide'} onClick={() => toggleHidden(i)}>
                    {block.hidden ? '🙈' : '👁'}
                  </Ctrl>
                  {!isBuiltin && (
                    <Ctrl label="Remove" onClick={() => remove(i)} tone="danger">✕</Ctrl>
                  )}
                </div>
              </div>

              {!isBuiltin && (
                <div className="mt-4 border-t border-hairline pt-4">
                  <BlockEditor block={block} onChange={(b) => update(i, b)} />
                </div>
              )}
            </div>
          )
        })}
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
