import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-white text-black hover:bg-white-muted",
  secondary:
    "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/5",
  ghost: "bg-transparent text-white-muted hover:text-white",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-medium transition-colors duration-200 ${variantStyles[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={styles}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
