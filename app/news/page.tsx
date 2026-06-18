import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "News",
  description: "News and announcements from Götterdämmerung.",
};

export default function NewsPage() {
  return (
    <>
      <PageHeader
        title="News"
        description="Announcements, updates and releases."
      />

      <section className="py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <SectionHeading
            title="Latest"
            description="No news items at this time."
          />

          <div className="border border-white/10 bg-charcoal p-10 md:p-14">
            <p className="text-lg font-medium text-white mb-3">No announcements</p>
            <p className="text-sm text-white-muted leading-relaxed">
              Updates on releases and band news will be posted here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
