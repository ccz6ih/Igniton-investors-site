import Link from 'next/link'
import { ADMIN_PAGES } from '@/lib/admin/config'

export default function AdminDashboard() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Dashboard</p>
      <h1 className="mt-2 font-display text-3xl text-navy">Edit your pages</h1>
      <p className="mt-2 max-w-xl text-warm-gray">
        Pick a page to edit its text and images. Changes publish to the live site the moment you
        save — the layout stays exactly as it is.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {ADMIN_PAGES.map((page) => {
          const card = (
            <div
              className={`h-full rounded-xl border p-5 transition ${
                page.ready
                  ? 'border-hairline bg-white hover:border-gold hover:shadow-sm'
                  : 'border-dashed border-hairline bg-off-white/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl text-navy">{page.title}</h2>
                {page.ready ? (
                  <span className="text-sm font-semibold text-gold">Edit →</span>
                ) : (
                  <span className="rounded-full bg-off-white px-2.5 py-0.5 text-xs font-medium text-warm-gray">
                    Coming soon
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm text-warm-gray">{page.description}</p>
            </div>
          )
          return page.ready ? (
            <Link key={page.slug} href={`/admin/${page.slug}`} className="block">
              {card}
            </Link>
          ) : (
            <div key={page.slug}>{card}</div>
          )
        })}
      </div>
    </div>
  )
}
