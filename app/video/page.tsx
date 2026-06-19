import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import { SectionHeading } from "@/components/SectionHeading";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { featuredVideo, youtubeChannelUrl } from "@/lib/videos";
import { pageUrl } from "@/lib/site";

const title = "Videos | Official Music Videos and Live Footage";
const description =
  "Watch official music videos, live performances and visual releases from Götterdämmerung.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: pageUrl("/video") },
  openGraph: { title, description },
};

export default function VideoPage() {
  return (
    <>
      <PageHeader title="VIDEO" />

      <section className="py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-10 md:mb-12">
            <div className="border-t-2 border-white/25" aria-hidden="true" />
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-grey">
              MK II
            </p>
          </div>

          <div className="max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              <YouTubeEmbed
                url={featuredVideo.youtubeUrl}
                title={featuredVideo.title}
              />
              <YouTubeEmbed url="https://youtu.be/sls7VGUJkvQ?si=g70AVZcJm-7oTYJz" />
              <YouTubeEmbed url="https://www.youtube.com/watch?v=v4N57OqTzE4" />
              <YouTubeEmbed url="https://youtu.be/olkAFdJPlF0?si=oTlQl6pF59lkYoyA" />
            </div>
          </div>

          <div className="my-10 md:my-12">
            <div className="border-t-2 border-white/25" aria-hidden="true" />
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-grey">
              MK I
            </p>
          </div>

          <div className="max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              <YouTubeEmbed url="https://youtu.be/HHiSqiScXr0?si=zeCo0d9xkl7HFYXG" />
              <YouTubeEmbed url="https://youtu.be/582ynWFD5XE?si=AbxPGVfMPlpA5h5b" />
              <YouTubeEmbed url="https://youtu.be/yxd9k9RuF68?si=p4Twdfoi35UFAV_o" />
              <YouTubeEmbed url="https://www.youtube.com/watch?v=7mJ8e3CimpI" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-border py-12 md:py-16 bg-black">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading title="For more videos, go to our YouTube channel" />
          <Button href={youtubeChannelUrl} variant="secondary" external>
            Visit Channel
          </Button>
        </div>
      </section>
    </>
  );
}
