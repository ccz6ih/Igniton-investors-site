import Link from 'next/link'
import { requireAdmin } from '@/lib/admin/auth'
import { LogoutButton } from '@/components/admin/LogoutButton'

export const metadata = { title: 'Igniton Editor', robots: { index: false, follow: false } }

// Guarded chrome for the admin panel. Every page under (panel) requires a
// signed-in admin (middleware also enforces this).
export default async function PanelLayout({ children }: { children: React.ReactNode }) {
  const admin = await requireAdmin()

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-hairline">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/admin" className="font-display text-lg text-navy">
            <span className="italic">Igni</span>ton Editor
          </Link>
          <div className="flex items-center gap-5">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-warm-gray transition hover:text-navy"
            >
              View site ↗
            </a>
            <span className="hidden text-sm text-warm-gray sm:inline">{admin.email}</span>
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  )
}
