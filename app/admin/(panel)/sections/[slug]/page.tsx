import { notFound } from 'next/navigation'
import { getSections } from '@/lib/sections'
import { ADMIN_PAGES } from '@/lib/admin/config'
import { SectionsManager } from '@/components/admin/sections/SectionsManager'

export default async function EditSectionsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = ADMIN_PAGES.find((p) => p.slug === slug)
  if (!page) notFound()

  const blocks = await getSections(slug)
  return <SectionsManager slug={slug} title={page.title} initial={blocks} />
}
