'use client'

import { useRouter } from 'next/navigation'
import { createSupabaseBrowser } from '@/lib/supabase/client'

export function LogoutButton() {
  const router = useRouter()
  async function logout() {
    await createSupabaseBrowser().auth.signOut()
    router.push('/admin/login')
    router.refresh()
  }
  return (
    <button
      type="button"
      onClick={logout}
      className="text-sm font-medium text-warm-gray transition hover:text-navy"
    >
      Sign out
    </button>
  )
}
