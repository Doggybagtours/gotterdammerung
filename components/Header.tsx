"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { visibleNavLinks } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const headerBg =
    scrolled || !isHome || menuOpen
      ? "bg-black/95 border-b border-white/10"
      : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Logo size="sm" linked />

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {visibleNavLinks.map((link) => {
            const { href, label } = link;
            const external = "external" in link && link.external;
            const active = !external && pathname === href;
            const className = `text-xs uppercase tracking-[0.12em] transition-colors duration-200 whitespace-nowrap ${
              active ? "text-white" : "text-white-muted hover:text-white"
            }`;

            if (external) {
              return (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {label}
                </a>
              );
            }

            return (
              <Link key={href} href={href} className={className}>
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
        >
          <span
            className={`block h-px bg-white transition-all duration-200 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px bg-white transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px bg-white transition-all duration-200 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-[60px] bg-black transition-all duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 pt-6">
          {visibleNavLinks.map((link) => {
            const { href, label } = link;
            const external = "external" in link && link.external;
            const active = !external && pathname === href;
            const className = `border-b border-white/10 py-4 text-lg font-medium uppercase tracking-wide transition-colors ${
              active ? "text-white" : "text-white-muted hover:text-white"
            }`;

            if (external) {
              return (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className={className}
                >
                  {label}
                </a>
              );
            }

            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={className}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
