'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

// Hides the site chrome (header/footer) throughout the /admin panel, which has
// its own chrome.
export function HideOnLogin({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/admin' || pathname.startsWith('/admin/')) {
    return null
  }
  return <>{children}</>
}
