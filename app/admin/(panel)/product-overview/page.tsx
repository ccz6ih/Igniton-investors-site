import { getContent } from '@/lib/content'
import { ProductOverviewEditor } from './ProductOverviewEditor'

export default async function EditProductOverviewPage() {
  const productOverview = await getContent('productOverview')
  return <ProductOverviewEditor initial={productOverview} />
}
