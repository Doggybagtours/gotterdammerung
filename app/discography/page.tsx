import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { JsonLd } from "@/components/JsonLd";
import { PageHeader } from "@/components/PageHeader";
import { ReleaseCard } from "@/components/ReleaseCard";
import { mkI, mkII, type Release } from "@/lib/discography";
import { buildDiscographySchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const title = "Discography | Official Releases Since 1994";
const description =
  "Explore the complete Götterdämmerung discography from the 1994 debut to Towards The Unknown EP, Intensity Zone and A Violent Sky.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: { title, description },
};

type EraSectionProps = {
  title: string;
  subtitle: string;
  releases: Release[];
};

function EraSection({ title, subtitle, releases }: EraSectionProps) {
  return (
    <section className="py-16 md:py-24">
      <header className="mb-12 md:mb-16 border-b border-white/10 pb-8 md:pb-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
          {title}
        </h2>
        <p className="mt-4 text-xs uppercase tracking-[0.25em] text-white-muted">
          {subtitle}
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12">
        {releases.map((release) => (
          <ReleaseCard key={release.id} release={release} detailed />
        ))}
      </div>
    </section>
  );
}

export default function DiscographyPage() {
  return (
    <>
      <JsonLd data={buildDiscographySchema(siteConfig.url)} />
      <PageHeader
        title="Discography"
        description="Albums, EPs, singles and artwork. Listen and purchase on Bandcamp."
      />

      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <EraSection title="MK II" subtitle="2022–2025" releases={mkII} />
        </div>
      </div>

      <div className="section-border bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <EraSection title="MK I" subtitle="1991–2010" releases={mkI} />
        </div>
      </div>

      <section className="section-border py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Button href={`mailto:${siteConfig.email}`} variant="secondary">
            Press Inquiries
          </Button>
        </div>
      </section>
    </>
  );
}
