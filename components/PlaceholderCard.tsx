type PlaceholderCardProps = {
  label: string;
  aspect?: "square" | "video" | "portrait" | "wide";
  className?: string;
};

const aspectStyles = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/7]",
};

export function PlaceholderCard({
  label,
  aspect = "square",
  className = "",
}: PlaceholderCardProps) {
  return (
    <div
      className={`relative overflow-hidden border border-white/10 bg-charcoal ${aspectStyles[aspect]} ${className}`}
    >
      <div className="absolute inset-0 bg-charcoal-light" />
      <div className="absolute inset-0 flex items-end p-4">
        <span className="text-[10px] uppercase tracking-[0.15em] text-grey">
          {label}
        </span>
      </div>
    </div>
  );
}
