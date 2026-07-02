import type { Metric as MetricType } from '@/content/overview'

// Renders a verified metric value, or a muted "▢ pending" chip when unverified.
// Never fabricates a number.
export function MetricCell({ metric }: { metric: MetricType }) {
  return (
    <div className="flex flex-col gap-2">
      {metric.verified && metric.value ? (
        <span className="font-display text-[clamp(2rem,4vw,3rem)] leading-none">
          {metric.value}
        </span>
      ) : (
        <span className="chip-pending" title={metric.note ?? 'Pending verified data'}>
          Pending
        </span>
      )}
      <span className="text-xs font-semibold uppercase tracking-[0.12em] opacity-60">
        {metric.label}
      </span>
      {metric.note && (
        <span className="text-[0.7rem] leading-snug opacity-45">{metric.note}</span>
      )}
    </div>
  )
}
