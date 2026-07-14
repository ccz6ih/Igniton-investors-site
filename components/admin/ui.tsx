'use client'

import { useState, type ReactNode } from 'react'

// ---------------------------------------------------------------------------
// Reusable admin editor building blocks. Every page editor composes these +
// <ImageField> and saves through the `saveContent` server action. Keep them
// controlled (value + onChange) so page editors own their state.
// ---------------------------------------------------------------------------

export function FieldLabel({ label, hint }: { label: string; hint?: string }) {
  return (
    <div className="mb-1.5">
      <span className="text-sm font-semibold text-navy">{label}</span>
      {hint && <span className="ml-2 text-xs text-warm-gray">{hint}</span>}
    </div>
  )
}

export function TextInput({
  label,
  value,
  onChange,
  hint,
  placeholder,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  hint?: string
  placeholder?: string
}) {
  return (
    <label className="block">
      <FieldLabel label={label} hint={hint} />
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-hairline bg-white px-3 py-2 text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </label>
  )
}

export function TextArea({
  label,
  value,
  onChange,
  hint,
  rows = 3,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  hint?: string
  rows?: number
}) {
  return (
    <label className="block">
      <FieldLabel label={label} hint={hint} />
      <textarea
        value={value}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        className="w-full resize-y rounded-lg border border-hairline bg-white px-3 py-2 text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
      />
    </label>
  )
}

// Editable list of plain strings (paragraphs, bullets, stats). Add / remove /
// reorder. `multiline` picks textarea vs input per item.
export function StringList({
  label,
  values,
  onChange,
  hint,
  multiline = true,
  addLabel = 'Add item',
}: {
  label: string
  values: string[]
  onChange: (v: string[]) => void
  hint?: string
  multiline?: boolean
  addLabel?: string
}) {
  const set = (i: number, v: string) => onChange(values.map((x, j) => (j === i ? v : x)))
  const remove = (i: number) => onChange(values.filter((_, j) => j !== i))
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir
    if (j < 0 || j >= values.length) return
    const next = [...values]
    ;[next[i], next[j]] = [next[j], next[i]]
    onChange(next)
  }

  return (
    <div>
      <FieldLabel label={label} hint={hint} />
      <div className="space-y-2">
        {values.map((v, i) => (
          <div key={i} className="flex gap-2">
            {multiline ? (
              <textarea
                value={v}
                rows={2}
                onChange={(e) => set(i, e.target.value)}
                className="w-full resize-y rounded-lg border border-hairline bg-white px-3 py-2 text-sm text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            ) : (
              <input
                type="text"
                value={v}
                onChange={(e) => set(i, e.target.value)}
                className="w-full rounded-lg border border-hairline bg-white px-3 py-2 text-sm text-navy outline-none focus:border-gold focus:ring-2 focus:ring-gold/30"
              />
            )}
            <div className="flex flex-col gap-1">
              <IconBtn label="Move up" onClick={() => move(i, -1)} disabled={i === 0}>↑</IconBtn>
              <IconBtn label="Move down" onClick={() => move(i, 1)} disabled={i === values.length - 1}>↓</IconBtn>
            </div>
            <IconBtn label="Remove" onClick={() => remove(i)} tone="danger">✕</IconBtn>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => onChange([...values, ''])}
        className="mt-2 rounded-lg border border-dashed border-hairline px-3 py-1.5 text-sm font-medium text-warm-gray hover:border-gold hover:text-navy"
      >
        + {addLabel}
      </button>
    </div>
  )
}

function IconBtn({
  children,
  onClick,
  label,
  disabled,
  tone = 'default',
}: {
  children: ReactNode
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

// Grouping card for a set of related fields.
export function FieldGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-xl border border-hairline bg-off-white/40 p-5">
      <h2 className="mb-4 font-display text-lg text-navy">{title}</h2>
      <div className="space-y-4">{children}</div>
    </section>
  )
}

// Sticky save bar with status. `onSave` returns an error string or null.
export function SaveBar({ onSave }: { onSave: () => Promise<string | null> }) {
  const [state, setState] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [msg, setMsg] = useState<string | null>(null)

  async function handle() {
    setState('saving')
    setMsg(null)
    const error = await onSave()
    if (error) {
      setState('error')
      setMsg(error)
    } else {
      setState('saved')
      setMsg('Saved — changes are live.')
      setTimeout(() => setState('idle'), 2500)
    }
  }

  return (
    <div className="sticky bottom-0 z-10 mt-8 flex items-center justify-between gap-4 border-t border-hairline bg-white/90 px-1 py-4 backdrop-blur">
      <p
        className={`text-sm ${
          state === 'error' ? 'text-red-600' : state === 'saved' ? 'text-green-700' : 'text-warm-gray'
        }`}
      >
        {msg ?? 'Edits publish to the live site the moment you save.'}
      </p>
      <button
        type="button"
        onClick={handle}
        disabled={state === 'saving'}
        className="rounded-lg bg-navy px-6 py-2.5 font-semibold text-white transition hover:bg-navy/90 disabled:opacity-60"
      >
        {state === 'saving' ? 'Saving…' : 'Save & publish'}
      </button>
    </div>
  )
}
