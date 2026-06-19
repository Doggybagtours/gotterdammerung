import Image from "next/image";
import { BandcampEmbed } from "@/components/BandcampEmbed";
import { Button } from "@/components/Button";
import type { Release } from "@/lib/discography";
import { defaultBandcampStoreUrl } from "@/lib/bandcamp";

type ReleaseCardProps = {
  release: Release;
  detailed?: boolean;
};

export function ReleaseCard({ release, detailed = false }: ReleaseCardProps) {
  const bandcampHref = release.bandcampLink ?? defaultBandcampStoreUrl;
  const useBandcampPlayer = detailed && Boolean(release.bandcampEmbedUrl);

  return (
    <article className="group">
      {useBandcampPlayer ? (
        <>
          <BandcampEmbed
            src={release.bandcampEmbedUrl!}
            title={release.title}
            height={release.bandcampEmbedHeight ?? 470}
            className="mt-0"
          />
          {release.orderLink && (
            <div className="mt-4">
              <Button href={release.orderLink.href} variant="secondary" external>
                {release.orderLink.label}
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="relative aspect-square overflow-hidden bg-charcoal border border-white/10">
          <Image
            src={release.image}
            alt={release.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}
      <div className="mt-4">
        <p className="text-[11px] uppercase tracking-[0.15em] text-grey mb-1">
          {detailed ? `${release.type} · ${release.year}` : release.type}
        </p>
        <h3 className="text-sm md:text-base font-medium text-white leading-snug">
          {release.title}
        </h3>
        {detailed && (
          <>
            <p className="mt-2 text-xs text-white-muted">{release.formats}</p>
            {release.note && (
              <p className="mt-2 text-xs text-grey leading-relaxed">
                {release.note}
              </p>
            )}
            {!release.bandcampEmbedUrl && (
              <div className="mt-4">
                <Button href={bandcampHref} variant="secondary" external>
                  Listen / Buy on Bandcamp
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </article>
  );
}
