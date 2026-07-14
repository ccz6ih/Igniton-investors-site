'use client'

import Link from 'next/link'
import { useState } from 'react'
import { saveContent } from '@/lib/admin/actions'
import { useUnsavedGuard } from '@/components/admin/useUnsavedGuard'
import { TextInput, TextArea, StringList, FieldGroup, SaveBar } from '@/components/admin/ui'
import { ImageField } from '@/components/admin/ImageField'
import { UploadField } from '@/components/admin/UploadField'

type ProductOverview = (typeof import('@/content/deck'))['productOverview']
type Product = ProductOverview['products'][number]
type Study = Product['studies'][number]
type Award = ProductOverview['awards'][number]
type Device = ProductOverview['biophotonic']['devices'][number]

export function ProductOverviewEditor({ initial }: { initial: ProductOverview }) {
  const [state, setState] = useState<ProductOverview>(initial)
  const guard = useUnsavedGuard(state)

  const patch = (p: Partial<ProductOverview>) => setState((s) => ({ ...s, ...p }))

  // Products ------------------------------------------------------------
  const setProduct = (i: number, prod: Product) =>
    patch({ products: state.products.map((x, j) => (j === i ? prod : x)) })
  const removeProduct = (i: number) =>
    patch({ products: state.products.filter((_, j) => j !== i) })
  const addProduct = () =>
    patch({ products: [...state.products, { suffix: '', image: '', stats: [], basis: '', studies: [] }] })

  // Studies (nested within a product) -----------------------------------
  const setStudy = (pi: number, si: number, study: Study) =>
    setProduct(pi, { ...state.products[pi], studies: state.products[pi].studies.map((x, j) => (j === si ? study : x)) })
  const removeStudy = (pi: number, si: number) =>
    setProduct(pi, { ...state.products[pi], studies: state.products[pi].studies.filter((_, j) => j !== si) })
  const addStudy = (pi: number) =>
    setProduct(pi, { ...state.products[pi], studies: [...state.products[pi].studies, { label: '', href: '' }] })

  // Awards --------------------------------------------------------------
  const setAward = (i: number, award: Award) =>
    patch({ awards: state.awards.map((x, j) => (j === i ? award : x)) })
  const removeAward = (i: number) =>
    patch({ awards: state.awards.filter((_, j) => j !== i) })
  const addAward = () => patch({ awards: [...state.awards, { tier: '', image: '' }] })

  // World record --------------------------------------------------------
  const patchWorldRecord = (p: Partial<ProductOverview['worldRecord']>) =>
    patch({ worldRecord: { ...state.worldRecord, ...p } })

  // Biophotonic devices -------------------------------------------------
  const patchBiophotonic = (p: Partial<ProductOverview['biophotonic']>) =>
    patch({ biophotonic: { ...state.biophotonic, ...p } })
  const setDevice = (i: number, device: Device) =>
    patchBiophotonic({ devices: state.biophotonic.devices.map((x, j) => (j === i ? device : x)) })
  const removeDevice = (i: number) =>
    patchBiophotonic({ devices: state.biophotonic.devices.filter((_, j) => j !== i) })
  const addDevice = () =>
    patchBiophotonic({ devices: [...state.biophotonic.devices, { name: '', image: '', text: '' }] })

  // Microchip, coherence & chair ---------------------------------------
  const patchMicrochip = (p: Partial<ProductOverview['microchip']>) =>
    patch({ microchip: { ...state.microchip, ...p } })
  const patchCoherence = (p: Partial<ProductOverview['coherence']>) =>
    patch({ coherence: { ...state.coherence, ...p } })
  const patchChair = (p: Partial<ProductOverview['chair']>) => patch({ chair: { ...state.chair, ...p } })

  async function onSave(): Promise<string | null> {
    const r = await saveContent('productOverview', state)
    if (!r.ok) return r.error
    guard.markSaved()
    return null
  }

  return (
    <div>
      <Link href="/admin" className="text-sm font-medium text-warm-gray hover:text-navy">
        ← All pages
      </Link>
      <h1 className="mt-3 font-display text-3xl text-navy">Products</h1>
      <p className="mt-2 text-warm-gray">Supplements, awards, world record, biophotonic devices, microchip release, coherence imprinting, and the coherence chair.</p>

      <div className="mt-8 space-y-6">
        <FieldGroup title="Section heading">
          <TextInput
            label="Heading"
            value={state.heading}
            onChange={(v) => patch({ heading: v })}
          />
        </FieldGroup>

        <FieldGroup title="Products">
          <div className="space-y-6">
            {state.products.map((prod, i) => (
              <div key={i} className="rounded-lg border border-hairline bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-navy">Product {i + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeProduct(i)}
                    className="rounded-md border border-hairline px-2.5 py-1 text-xs text-red-600 hover:border-red-400 hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
                <div className="space-y-4">
                  <TextInput
                    label="Suffix"
                    hint="Product name after “Igni” (e.g. Cognition)"
                    value={prod.suffix}
                    onChange={(v) => setProduct(i, { ...prod, suffix: v })}
                  />
                  <ImageField
                    label="Image"
                    value={prod.image}
                    onChange={(v) => setProduct(i, { ...prod, image: v })}
                    aspect={4 / 5}
                  />
                  <StringList
                    label="Stats"
                    values={prod.stats}
                    onChange={(v) => setProduct(i, { ...prod, stats: v })}
                    addLabel="Add stat"
                  />
                  <TextInput
                    label="Basis"
                    hint="e.g. vs. Placebo & Non-Charged"
                    value={prod.basis}
                    onChange={(v) => setProduct(i, { ...prod, basis: v })}
                  />
                  <div>
                    <span className="mb-1.5 block text-sm font-semibold text-navy">Studies</span>
                    <div className="space-y-3">
                      {prod.studies.map((study, si) => (
                        <div key={si} className="rounded-md border border-hairline p-3">
                          <div className="mb-2 flex items-center justify-between">
                            <span className="text-xs font-semibold text-warm-gray">Study {si + 1}</span>
                            <button
                              type="button"
                              onClick={() => removeStudy(i, si)}
                              className="rounded-md border border-hairline px-2.5 py-1 text-xs text-red-600 hover:border-red-400 hover:bg-red-50"
                            >
                              Remove
                            </button>
                          </div>
                          <div className="space-y-3">
                            <TextInput
                              label="Label"
                              value={study.label}
                              onChange={(v) => setStudy(i, si, { ...study, label: v })}
                            />
                            <UploadField
                              label="PDF"
                              hint="Upload the study PDF, or paste a link."
                              accept="application/pdf"
                              uploadLabel="Upload PDF"
                              value={study.href}
                              onChange={(v) => setStudy(i, si, { ...study, href: v })}
                            />
                          </div>
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => addStudy(i)}
                        className="rounded-lg border border-dashed border-hairline px-3 py-1.5 text-sm font-medium text-warm-gray hover:border-gold hover:text-navy"
                      >
                        + Add study
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addProduct}
              className="rounded-lg border border-dashed border-hairline px-3 py-1.5 text-sm font-medium text-warm-gray hover:border-gold hover:text-navy"
            >
              + Add product
            </button>
          </div>
        </FieldGroup>

        <FieldGroup title="Awards">
          <div className="space-y-3">
            {state.awards.map((award, i) => (
              <div key={i} className="rounded-lg border border-hairline bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-navy">Award {i + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeAward(i)}
                    className="rounded-md border border-hairline px-2.5 py-1 text-xs text-red-600 hover:border-red-400 hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
                <div className="space-y-4">
                  <TextInput
                    label="Tier"
                    value={award.tier}
                    onChange={(v) => setAward(i, { ...award, tier: v })}
                  />
                  <ImageField
                    label="Image"
                    value={award.image}
                    onChange={(v) => setAward(i, { ...award, image: v })}
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addAward}
              className="rounded-lg border border-dashed border-hairline px-3 py-1.5 text-sm font-medium text-warm-gray hover:border-gold hover:text-navy"
            >
              + Add award
            </button>
          </div>
        </FieldGroup>

        <FieldGroup title="World record">
          <TextInput
            label="Heading"
            value={state.worldRecord.heading}
            onChange={(v) => patchWorldRecord({ heading: v })}
          />
          <TextInput
            label="Sub"
            value={state.worldRecord.sub}
            onChange={(v) => patchWorldRecord({ sub: v })}
          />
          <ImageField
            label="Image"
            value={state.worldRecord.image}
            onChange={(v) => patchWorldRecord({ image: v })}
            aspect={1}
          />
        </FieldGroup>

        <FieldGroup title="Biophotonic devices">
          <TextInput
            label="Heading"
            value={state.biophotonic.heading}
            onChange={(v) => patchBiophotonic({ heading: v })}
          />
          <div className="space-y-3">
            {state.biophotonic.devices.map((device, i) => (
              <div key={i} className="rounded-lg border border-hairline bg-white p-4">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-semibold text-navy">Device {i + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeDevice(i)}
                    className="rounded-md border border-hairline px-2.5 py-1 text-xs text-red-600 hover:border-red-400 hover:bg-red-50"
                  >
                    Remove
                  </button>
                </div>
                <div className="space-y-4">
                  <TextInput
                    label="Name"
                    value={device.name}
                    onChange={(v) => setDevice(i, { ...device, name: v })}
                  />
                  <ImageField
                    label="Image"
                    value={device.image}
                    onChange={(v) => setDevice(i, { ...device, image: v })}
                  />
                  <TextArea
                    label="Text"
                    value={device.text}
                    onChange={(v) => setDevice(i, { ...device, text: v })}
                  />
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={addDevice}
              className="rounded-lg border border-dashed border-hairline px-3 py-1.5 text-sm font-medium text-warm-gray hover:border-gold hover:text-navy"
            >
              + Add device
            </button>
          </div>
        </FieldGroup>

        <FieldGroup title="Microchip Release (Gaia)">
          <TextInput
            label="Heading"
            value={state.microchip.heading}
            onChange={(v) => patchMicrochip({ heading: v })}
          />
          <p className="text-sm font-semibold text-navy">Gaia TV Stick</p>
          <ImageField
            label="Stick image"
            value={state.microchip.stick.image}
            onChange={(v) => patchMicrochip({ stick: { ...state.microchip.stick, image: v } })}
            aspect={635 / 255}
          />
          <TextInput
            label="Stick caption"
            value={state.microchip.stick.caption}
            onChange={(v) => patchMicrochip({ stick: { ...state.microchip.stick, caption: v } })}
          />
          <TextInput
            label="Stick sub-caption"
            value={state.microchip.stick.sub}
            onChange={(v) => patchMicrochip({ stick: { ...state.microchip.stick, sub: v } })}
          />
          <p className="text-sm font-semibold text-navy">Coding equipment</p>
          <ImageField
            label="Equipment image"
            value={state.microchip.equipment.image}
            onChange={(v) => patchMicrochip({ equipment: { ...state.microchip.equipment, image: v } })}
          />
          <TextInput
            label="Equipment caption"
            value={state.microchip.equipment.caption}
            onChange={(v) => patchMicrochip({ equipment: { ...state.microchip.equipment, caption: v } })}
          />
        </FieldGroup>

        <FieldGroup title="Igniton Coherence Imprinting">
          <TextInput
            label="Heading"
            value={state.coherence.heading}
            onChange={(v) => patchCoherence({ heading: v })}
          />
          <TextInput
            label="Product name"
            value={state.coherence.productName}
            onChange={(v) => patchCoherence({ productName: v })}
          />
          <TextInput
            label="Lead"
            value={state.coherence.lead}
            onChange={(v) => patchCoherence({ lead: v })}
          />
          <StringList
            label="Points"
            values={state.coherence.points}
            onChange={(v) => patchCoherence({ points: v })}
            addLabel="Add point"
          />
          <ImageField
            label="Bottle image"
            value={state.coherence.image}
            onChange={(v) => patchCoherence({ image: v })}
          />
        </FieldGroup>

        <FieldGroup title="Coherence Environment (HIT chair)">
          <TextInput
            label="Heading"
            value={state.chair.heading}
            onChange={(v) => patchChair({ heading: v })}
          />
          <TextInput
            label="Product title"
            value={state.chair.productTitle}
            onChange={(v) => patchChair({ productTitle: v })}
          />
          <TextInput
            label="Subtitle"
            value={state.chair.subtitle}
            onChange={(v) => patchChair({ subtitle: v })}
          />
          <ImageField
            label="Chair image"
            value={state.chair.image}
            onChange={(v) => patchChair({ image: v })}
            aspect={650 / 348}
          />
          <TextInput
            label="Image note"
            value={state.chair.imageNote}
            onChange={(v) => patchChair({ imageNote: v })}
          />
          <StringList
            label="Points"
            values={state.chair.points}
            onChange={(v) => patchChair({ points: v })}
            addLabel="Add point"
          />
          <TextInput
            label="Equations heading"
            value={state.chair.equationsHeading}
            onChange={(v) => patchChair({ equationsHeading: v })}
          />
          <ImageField
            label="Equations image"
            value={state.chair.equationsImage}
            onChange={(v) => patchChair({ equationsImage: v })}
          />
        </FieldGroup>
      </div>

      <SaveBar onSave={onSave} previewHref="/products" />
    </div>
  )
}
