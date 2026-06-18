import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";

const bandcampMerchUrl = "https://gotterdammerung.bandcamp.com/merch";

export const metadata: Metadata = {
  title: "Merch",
  description: "Official Götterdämmerung store on Bandcamp.",
};

export default function MerchPage() {
  return (
    <>
      <PageHeader title="MERCH" />

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
