import { getContent } from '@/lib/content'
import { ScienceEditor } from './ScienceEditor'

export default async function EditSciencePage() {
  const scienceDeck = await getContent('scienceDeck')
  return <ScienceEditor initial={scienceDeck} />
}
