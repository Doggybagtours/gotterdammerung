import { getYouTubeEmbedUrl } from "@/lib/videos";

type YouTubeEmbedProps = {
  url: string;
  title?: string;
  className?: string;
};

export function YouTubeEmbed({ url, title, className = "" }: YouTubeEmbedProps) {
  const embedUrl = getYouTubeEmbedUrl(url);

  if (!embedUrl) {
    return null;
  }

  return (
    <div
      className={`relative aspect-video overflow-hidden border border-white/10 bg-charcoal ${className}`}
    >
      <iframe
        src={embedUrl}
        title={title ?? "YouTube video"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
      />
    </div>
  );
}
