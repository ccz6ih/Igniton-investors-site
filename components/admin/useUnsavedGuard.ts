'use client'

import { useEffect, useRef } from 'react'

// Warns the user (native browser prompt) before leaving with unsaved edits.
// Pass the current editor state; call markSaved() after a successful save to
// reset the baseline. `dirty` can drive an in-page indicator if desired.
export function useUnsavedGuard(current: unknown) {
  const baseline = useRef<string | null>(null)
  const currentStr = JSON.stringify(current)
  if (baseline.current === null) baseline.current = currentStr

  const dirty = baseline.current !== currentStr

  useEffect(() => {
    if (!dirty) return
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault()
      e.returnValue = ''
    }
    window.addEventListener('beforeunload', handler)
    return () => window.removeEventListener('beforeunload', handler)
  }, [dirty])

  return {
    dirty,
    markSaved: () => {
      baseline.current = JSON.stringify(current)
    },
  }
}
