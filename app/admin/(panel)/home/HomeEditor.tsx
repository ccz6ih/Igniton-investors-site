'use client'

import Link from 'next/link'
import { useState } from 'react'
import { saveContent } from '@/lib/admin/actions'
import { TextInput, StringList, FieldGroup, SaveBar } from '@/components/admin/ui'
import { ImageField } from '@/components/admin/ImageField'

type Home = (typeof import('@/content/deck'))['home']
type Disclaimer = (typeof import('@/content/deck'))['disclaimer']

export function HomeEditor({
  initialHome,
  initialDisclaimer,
}: {
  initialHome: Home
  initialDisclaimer: Disclaimer
}) {
  const [home, setHome] = useState<Home>(initialHome)
  const [disclaimer, setDisclaimer] = useState<Disclaimer>(initialDisclaimer)

  const patchHome = (patch: Partial<Home>) => setHome((h) => ({ ...h, ...patch }))

  const setCarouselImage = (i: number, image: string) =>
    patchHome({ carousel: home.carousel.map((c, j) => (j === i ? { image } : c)) })
  const removeCarousel = (i: number) =>
    patchHome({ carousel: home.carousel.filter((_, j) => j !== i) })
  const addCarousel = () => patchHome({ carousel: [...home.carousel, { image: '' }] })

  async function onSave(): Promise<string | null> {
    const results = await Promise.all([
      saveContent('home', home),
      saveContent('disclaimer', disclaimer),
    ])
    const failed = results.find((r) => !r.ok)
    return failed && !failed.ok ? failed.error : null
  }

  return (
    <div>
      <Link href="/admin" className="text-sm font-medium text-warm-gray hover:text-navy">
        ← All pages
      </Link>
      <h1 className="mt-3 font-display text-3xl text-navy">Home</h1>
      <p className="mt-2 text-warm-gray">Hero, tagline, company video, facility carousel, and disclaimer.</p>

      <div className="mt-8 space-y-6">
        <FieldGroup title="Hero & intro">
          <ImageField
            label="Hero background image"
            hint="Full-screen image at the top of the page"
            value={home.heroImage}
            onChange={(v) => patchHome({ heroImage: v })}
          />
          <TextInput
            label="Tagline"
            value={home.tagline}
            onChange={(v) => patchHome({ tagline: v })}
          />
          <TextInput
            label="Confidential line"
            hint="Small text overlaid at the bottom of the hero"
            value={home.confidential}
            onChange={(v) => patchHome({ confidential: v })}
          />
        </FieldGroup>

        <FieldGroup title="Company video">
          <TextInput
            label="Google Drive file ID"
            hint="The ID from the Drive share link (drive.google.com/file/d/…/view)"
            value={home.videoDriveId}
            onChange={(v) => patchHome({ videoDriveId: v })}
          />
          <ImageField
            label="Video poster (thumbnail)"
            value={home.videoPoster}
            onChange={(v) => patchHome({ videoPoster: v })}
          />
        </FieldGroup>

        <FieldGroup title="Facility carousel">
          <TextInput
            label="Caption"
            value={home.carouselCaption}
            onChange={(v) => patchHome({ carouselCaption: v })}
          />
          <div className="space-y-3">
            {home.carousel.map((item, i) => (
              <div key={i} className="flex items-end gap-3">
                <div className="flex-1">
                  <ImageField
                    label={`Image ${i + 1}`}
                    value={item.image}
                    onChange={(v) => setCarouselImage(i, v)}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeCarousel(i)}
                  className="mb-1 rounded-md border border-hairline px-2.5 py-1 text-xs text-red-600 hover:border-red-400 hover:bg-red-50"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addCarousel}
              className="rounded-lg border border-dashed border-hairline px-3 py-1.5 text-sm font-medium text-warm-gray hover:border-gold hover:text-navy"
            >
              + Add image
            </button>
          </div>
        </FieldGroup>

        <FieldGroup title="Disclaimer">
          <TextInput
            label="Heading"
            value={disclaimer.title}
            onChange={(v) => setDisclaimer((d) => ({ ...d, title: v }))}
          />
          <StringList
            label="Paragraphs"
            values={disclaimer.paragraphs}
            onChange={(v) => setDisclaimer((d) => ({ ...d, paragraphs: v }))}
            addLabel="Add paragraph"
          />
        </FieldGroup>
      </div>

      <SaveBar onSave={onSave} previewHref="/" />
    </div>
  )
}
