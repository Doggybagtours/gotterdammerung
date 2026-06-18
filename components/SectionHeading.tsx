import type { ReactNode } from "react";

type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeading({
  title,
  description,
  align = "left",
  action,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-16 ${alignClass}`}
    >
      <div className={align === "center" ? "mx-auto" : ""}>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-white">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-sm md:text-base text-white-muted max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
