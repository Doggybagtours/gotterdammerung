import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig, socialLinks, pageUrl } from "@/lib/site";

const title = "Contact | Götterdämmerung";
const description =
  "Contact Götterdämmerung for press, booking, interviews and general enquiries.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: pageUrl("/contact") },
  openGraph: { title, description },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="Booking, management and general inquiries."
      />

      <section className="py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Send a Message"
                description="Contact form will be connected when available."
              />

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs uppercase tracking-[0.1em] text-grey mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    disabled
                    placeholder="Your name"
                    className="w-full bg-charcoal border border-white/10 px-4 py-3 text-sm text-white placeholder:text-grey focus:outline-none disabled:opacity-60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs uppercase tracking-[0.1em] text-grey mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    disabled
                    placeholder="your@email.com"
                    className="w-full bg-charcoal border border-white/10 px-4 py-3 text-sm text-white placeholder:text-grey focus:outline-none disabled:opacity-60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs uppercase tracking-[0.1em] text-grey mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    disabled
                    className="w-full bg-charcoal border border-white/10 px-4 py-3 text-sm text-white focus:outline-none disabled:opacity-60"
                  >
                    <option>General Inquiry</option>
                    <option>Booking</option>
                    <option>Management</option>
                    <option>Press</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-[0.1em] text-grey mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    disabled
                    placeholder="Your message..."
                    className="w-full bg-charcoal border border-white/10 px-4 py-3 text-sm text-white placeholder:text-grey focus:outline-none resize-none disabled:opacity-60"
                  />
                </div>
                <Button href={`mailto:${siteConfig.email}`}>Send</Button>
              </form>
            </div>

            <div>
              <SectionHeading title="Direct Contact" />

              <div className="space-y-4">
                <div className="border border-white/10 bg-charcoal p-8">
                  <p className="text-xs uppercase tracking-[0.1em] text-grey mb-3">
                    General
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-white hover:text-white-muted transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>

                <div className="border border-white/10 bg-charcoal p-8">
                  <p className="text-xs uppercase tracking-[0.1em] text-grey mb-3">
                    Booking
                  </p>
                  <p className="text-sm text-white-muted leading-relaxed">
                    For live performance inquiries, email with
                    &ldquo;Booking&rdquo; in the subject line.
                  </p>
                </div>

                <div className="border border-white/10 bg-charcoal p-8">
                  <p className="text-xs uppercase tracking-[0.1em] text-grey mb-3">
                    Management
                  </p>
                  <p className="text-sm text-white-muted leading-relaxed">
                    Business and partnership inquiries. Contact details will be
                    added here.
                  </p>
                </div>

                <div className="border border-white/10 bg-charcoal p-8">
                  <p className="text-xs uppercase tracking-[0.1em] text-grey mb-4">
                    Social
                  </p>
                  <ul className="space-y-2">
                    {socialLinks.map(({ href, label }) => (
                      <li key={label}>
                        <a
                          href={href}
                          className="text-sm text-white-muted hover:text-white transition-colors"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
