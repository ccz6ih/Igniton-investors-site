import { getContent } from '@/lib/content'
import { AboutUsEditor } from './AboutUsEditor'

export default async function EditAboutUsPage() {
  const aboutUs = await getContent('aboutUs')
  return <AboutUsEditor initial={aboutUs} />
}
