import Link from "next/link";
import { Logo } from "@/components/Logo";
import { socialLinks, visibleNavLinks } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1 flex flex-col items-center text-center">
            <Logo size="md" linked />
            <p className="mt-4 text-sm text-white-muted">Official</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-grey mb-4">
              Navigation
            </p>
            <ul className="space-y-2">
              {visibleNavLinks.map((link) => {
                const { href, label } = link;
                const external = "external" in link && link.external;

                return (
                  <li key={href}>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-white-muted hover:text-white transition-colors"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link
                        href={href}
                        className="text-sm text-white-muted hover:text-white transition-colors"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-grey mb-4">
              Connect
            </p>
            <ul className="space-y-2">
              {socialLinks.map(({ href, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-white-muted hover:text-white transition-colors"
                    aria-label={label}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.15em] text-grey mb-4">
              Contact
            </p>
            <a
              href="mailto:info@gotterdammerung.band"
              className="text-sm text-white-muted hover:text-white transition-colors"
            >
              info@gotterdammerung.band
            </a>
          </div>
        </div>

        <p className="mt-12 pt-6 border-t border-white/10 text-xs text-grey">
          © {year} Dark Stream Design. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
