import { notFound } from 'next/navigation'
import { getSections } from '@/lib/sections'
import { getPageLayout } from '@/lib/layout'
import { hasBuiltins } from '@/lib/sections/builtins'
import { ADMIN_PAGES } from '@/lib/admin/config'
import { SectionsManager } from '@/components/admin/sections/SectionsManager'
import { PageArranger } from '@/components/admin/sections/PageArranger'

export default async function EditSectionsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = ADMIN_PAGES.find((p) => p.slug === slug)
  if (!page) notFound()

  // Converted pages get the full-page arranger (built-in sections movable);
  // others use the add-on sections manager until they're converted.
  if (hasBuiltins(slug)) {
    const layout = await getPageLayout(slug)
    return <PageArranger slug={slug} title={page.title} initial={layout} />
  }

  const blocks = await getSections(slug)
  return <SectionsManager slug={slug} title={page.title} initial={blocks} />
}
