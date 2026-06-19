import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { pageUrl } from "@/lib/site";

const bandcampMerchUrl = "https://gotterdammerung.bandcamp.com/merch";

const title = "Merchandise | Official CDs, Vinyl, T-Shirts and Collectibles";
const description =
  "Official Götterdämmerung merchandise including CDs, shirts, collectibles and limited releases.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl("/merch") },
  openGraph: { title, description },
};

export default function MerchPage() {
  return (
    <>
      <PageHeader
        title="Merch"
        titleImage={{ src: "/nav/merch.svg", width: 166.08, height: 36.16 }}
      />

      <section className="py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading title="Official Store" />
          <p className="max-w-2xl text-base md:text-lg text-white-muted leading-relaxed">
            Records, merchandise and selected releases are available through
            the official Götterdämmerung Bandcamp store.
          </p>
          <div className="mt-8">
            <Button href={bandcampMerchUrl} variant="primary" external>
              Visit Bandcamp Store
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
