import 'server-only'
import { redirect } from 'next/navigation'
import { createSupabaseServer } from '@/lib/supabase/server'

export type AdminUser = { id: string; email: string }

// Returns the signed-in admin, or null. An admin is any authenticated user
// whose email is present in the `admins` table (also enforced by RLS on writes).
export async function getAdmin(): Promise<AdminUser | null> {
  const supabase = await createSupabaseServer()
  if (!supabase) return null
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user?.email) return null

  const { data } = await supabase
    .from('admins')
    .select('email')
    .eq('email', user.email)
    .maybeSingle()

  if (!data) return null
  return { id: user.id, email: user.email }
}

// Use at the top of every /admin page/layout. Redirects to the login page when
// there is no signed-in admin.
export async function requireAdmin(): Promise<AdminUser> {
  const admin = await getAdmin()
  if (!admin) redirect('/admin/login')
  return admin
}
