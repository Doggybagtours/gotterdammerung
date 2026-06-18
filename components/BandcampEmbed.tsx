type BandcampEmbedProps = {
  src: string;
  title?: string;
  height?: number;
  className?: string;
};

export function BandcampEmbed({
  src,
  title,
  height = 120,
  className = "",
}: BandcampEmbedProps) {
  const isLargePlayer = height > 200;

  return (
    <div className={`border border-white/10 bg-charcoal ${className}`}>
      {isLargePlayer ? (
        <div
          className="relative w-full"
          style={{ paddingTop: `${(height / 350) * 100}%` }}
        >
          <iframe
            src={src}
            title={title ?? "Bandcamp player"}
            className="absolute inset-0 h-full w-full border-0"
          />
        </div>
      ) : (
        <iframe
          src={src}
          title={title ?? "Bandcamp player"}
          className="w-full border-0 block"
          style={{ height }}
        />
      )}
    </div>
  );
}
