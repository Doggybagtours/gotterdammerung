import Image from "next/image";
import Link from "next/link";
import { logo, siteConfig } from "@/lib/site";

type LogoProps = {
  variant?: "white" | "black";
  size?: "sm" | "md" | "lg" | "hero";
  linked?: boolean;
  className?: string;
};

const sizeStyles = {
  sm: "h-8 w-auto md:h-9",
  md: "h-12 w-auto md:h-14",
  lg: "h-20 w-auto md:h-24",
  hero: "h-96 w-auto max-w-[min(95vw,24rem)] sm:h-[30rem] sm:max-w-[min(90vw,30rem)] md:h-[39rem] md:max-w-[min(85vw,39rem)] lg:h-[48rem] lg:max-w-[min(80vw,48rem)]",
};

export function Logo({
  variant = "white",
  size = "md",
  linked = false,
  className = "",
}: LogoProps) {
  const src =
    size === "sm" || size === "md" || size === "hero"
      ? logo.nav
      : variant === "white"
        ? logo.white
        : logo.black;
  const isSvg = src.endsWith(".svg");

  const isHero = size === "hero";
  const imageClassName = `${sizeStyles[size]} object-contain ${className}`;

  const image = isHero ? (
    // Hero SVG: native img avoids Next.js Image overhead for above-the-fold LCP
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={siteConfig.name}
      className={imageClassName}
    />
  ) : (
    <Image
      src={src}
      alt={siteConfig.name}
      width={isSvg ? 400 : 800}
      height={isSvg ? 120 : 200}
      className={imageClassName}
      unoptimized={isSvg}
    />
  );

  if (linked) {
    return (
      <Link href="/" className="inline-block shrink-0" aria-label="Home">
        {image}
      </Link>
    );
  }

  return image;
}
