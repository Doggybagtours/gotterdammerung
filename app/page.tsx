import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Hero } from "@/components/Hero";
import { JsonLd } from "@/components/JsonLd";
import { ReleaseCard } from "@/components/ReleaseCard";
import { SectionHeading } from "@/components/SectionHeading";
import { YouTubeEmbed } from "@/components/YouTubeEmbed";
import { previewReleases } from "@/lib/discography";
import { bandIntro } from "@/lib/band";
import { buildHomepageSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";
import { featuredVideo } from "@/lib/videos";

const title = "Götterdämmerung | Official Website";
const description =
  "Official website of Götterdämmerung. Gothic rock, deathrock, post-punk and dark electronic music since 1991. Discography, videos, news, merchandise and streaming links.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  openGraph: { title, description },
};

export default function Home() {
  return (
    <>
      <JsonLd data={buildHomepageSchema(siteConfig.url)} />
      <Hero />

      <section id="news" className="hidden section-border py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading
            title="Latest News"
            action={
              <Button href="/news" variant="ghost">
                All News
              </Button>
            }
          />
          <p className="text-sm text-white-muted">No news items.</p>
        </div>
      </section>

      <section id="discography" className="section-border py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading
            title="Discography"
            action={
              <Button href="/discography" variant="secondary">
                Full Discography
              </Button>
            }
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {previewReleases.map((release) => (
              <ReleaseCard key={release.id} release={release} />
            ))}
          </div>
        </div>
      </section>

      <section id="video" className="section-border py-16 md:py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading
            title="Video"
            action={
              <Button href="/video" variant="ghost">
                All Videos
              </Button>
            }
          />
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
            <YouTubeEmbed
              url={featuredVideo.youtubeUrl}
              title={featuredVideo.title}
            />
            <YouTubeEmbed url="https://www.youtube.com/watch?v=v4N57OqTzE4" />
          </div>
        </div>
      </section>

      <section id="band" className="section-border py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeading
            title="Band"
            action={
              <Button href="/band" variant="ghost">
                Band Page
              </Button>
            }
          />
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="max-w-lg">
              <div className="relative aspect-[4/3] overflow-hidden border border-white/10">
                <Image
                  src="/images/652A9305.jpg"
                  alt="Götterdämmerung"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover grayscale"
                />
              </div>
              <p className="mt-2 text-[10px] text-grey">picture by Andrea Roell.</p>
            </div>
            <div>
              <div className="space-y-5 text-sm md:text-base text-white-muted leading-relaxed">
                {bandIntro.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-6">
                <Button href="/band" variant="ghost">
                  Full Biography
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
