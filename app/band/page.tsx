import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import {
  bandExploreLinks,
  bandPageDescription,
  bandTimeline,
  currentActivitySection,
  deathrockSection,
  discographyOverviewSection,
  formationSection,
  gothicRockSection,
  musicalInfluencesSection,
} from "@/lib/band";
import { pageUrl } from "@/lib/site";

const title = "Band Biography | Götterdämmerung";

export const metadata: Metadata = {
  title: "Band Biography",
  description: bandPageDescription,
  alternates: { canonical: pageUrl("/band") },
  openGraph: { title, description: bandPageDescription },
};

function ProseSection({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="space-y-5 text-base md:text-lg text-white-muted leading-[1.85]">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
        {title}
      </h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default function BandPage() {
  return (
    <>
      <PageHeader title="Band" description={bandPageDescription} />

      <section className="py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="w-full lg:w-80 shrink-0 overflow-hidden border border-white/10">
              <Image
                src="/images/5M9A1128.jpg"
                alt="Götterdämmerung — Berlin gothic rock and deathrock band"
                width={3648}
                height={5472}
                sizes="(max-width: 1024px) 100vw, 320px"
                className="w-full h-auto grayscale"
                priority
              />
            </div>
            <div className="flex-1 space-y-5 text-base md:text-lg text-white-muted leading-[1.85]">
              <p>
                Götterdämmerung is a Berlin band formed in 1991, working at the
                intersection of gothic rock, deathrock, post-punk and dark
                electronic music. Across more than three decades and twelve
                releases, the project has remained a respected presence in the
                European underground — elusive, uncompromising and unmistakably
                its own.
              </p>
              <p>
                This page traces the band&apos;s formation, influences, history
                and recorded legacy. Explore the full{" "}
                <Link
                  href="/discography"
                  className="text-white underline-offset-4 hover:underline"
                >
                  discography
                </Link>
                , watch official{" "}
                <Link
                  href="/video"
                  className="text-white underline-offset-4 hover:underline"
                >
                  videos
                </Link>{" "}
                or{" "}
                <Link
                  href="/streaming"
                  className="text-white underline-offset-4 hover:underline"
                >
                  stream the catalogue
                </Link>{" "}
                on your preferred platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-border py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <ProseSection
            title={formationSection.title}
            paragraphs={formationSection.paragraphs}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <SectionHeading title={musicalInfluencesSection.title} />
          <p className="text-base md:text-lg text-white-muted leading-[1.85] mb-8">
            {musicalInfluencesSection.intro}
          </p>
          <ul className="space-y-4">
            {musicalInfluencesSection.items.map((item, index) => (
              <li
                key={index}
                className="border-l-2 border-white/20 pl-5 text-base md:text-lg text-white-muted leading-[1.85]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-border py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-3xl px-6 md:px-10 space-y-16">
          <ProseSection
            title={gothicRockSection.title}
            paragraphs={gothicRockSection.paragraphs}
          />
          <ProseSection
            title={deathrockSection.title}
            paragraphs={deathrockSection.paragraphs}
          />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <SectionHeading
            title="History and Timeline"
            description="From the 1991 formation through MK I, the 2021 return and the Towards the Unknown EP."
          />
          <ol className="space-y-10">
            {bandTimeline.map((entry) => (
              <li
                key={`${entry.year}-${entry.headline}`}
                className="grid gap-2 sm:grid-cols-[5rem_1fr] sm:gap-8 border-t border-white/10 pt-8 first:border-t-0 first:pt-0"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-grey font-medium">
                  {entry.year}
                </p>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {entry.headline}
                  </h3>
                  <p className="text-base text-white-muted leading-relaxed">
                    {entry.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-border py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <ProseSection
            title={discographyOverviewSection.title}
            paragraphs={discographyOverviewSection.paragraphs}
          />
          <div className="mt-8">
            <Button href="/discography" variant="secondary">
              View Full Discography
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <ProseSection
            title={currentActivitySection.title}
            paragraphs={currentActivitySection.paragraphs}
          />
        </div>
      </section>

      <section className="section-border py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading
            title="Explore"
            description="Music, video and streaming from Götterdämmerung."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {bandExploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group border border-white/10 bg-charcoal p-8 transition-colors hover:border-white/25"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-white-muted transition-colors">
                  {link.label}
                </h3>
                <p className="mt-2 text-sm text-white-muted leading-relaxed">
                  {link.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
