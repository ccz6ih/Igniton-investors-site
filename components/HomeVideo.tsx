// Company video — embeds Google Drive's streaming preview player directly, so
// there's a single play button (no double-click). The Drive file must be shared
// "anyone with the link can view". Nothing video-related lives in the repo.
export function HomeVideo({ driveId }: { driveId: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-section bg-navy ring-1 ring-hairline">
      <iframe
        src={`https://drive.google.com/file/d/${driveId}/preview`}
        title="Igniton company video"
        allow="autoplay; fullscreen"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 h-full w-full"
      />
    </div>
  )
}
