import Image from "next/image";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import {
  getYouTubeEmbedUrl,
  getYouTubeThumbnail,
  type Video,
} from "@/lib/videos";

type VideoCardProps = {
  video: Video;
};

export function VideoCard({ video }: VideoCardProps) {
  const embedUrl = getYouTubeEmbedUrl(video.youtubeUrl);
  const thumbnail = video.thumbnail ?? getYouTubeThumbnail(video.youtubeUrl);

  return (
    <article>
      {embedUrl ? (
        <YouTubeEmbed url={video.youtubeUrl} title={video.title} />
      ) : thumbnail ? (
        <a
          href={video.youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block aspect-video overflow-hidden border border-white/10 bg-charcoal"
        >
          <Image
            src={thumbnail}
            alt={video.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </a>
      ) : null}

      {video.year !== undefined && (
        <p className="mt-4 text-[11px] uppercase tracking-[0.15em] text-grey mb-1">
          {video.year}
        </p>
      )}
      <h3
        className={`text-sm md:text-base font-medium text-white leading-snug ${video.year === undefined ? "mt-4" : ""}`}
      >
        {video.title}
      </h3>
    </article>
  );
}
