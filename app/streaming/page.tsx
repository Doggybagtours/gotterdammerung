import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { PageHeader } from "@/components/PageHeader";
import {
  primaryStreamingPlatform,
  secondaryStreamingPlatforms,
} from "@/lib/streaming";

export const metadata: Metadata = {
  title: "Streaming",
  description:
    "Listen to Götterdämmerung on Bandcamp, Spotify, Apple Music, and other platforms.",
};

export default function StreamingPage() {
  return (
    <>
      <PageHeader
        title="Streaming"
        description="Listen, purchase and download on Bandcamp. Stream on other platforms."
      />

      <section className="py-16 md:py-24 bg-black">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="max-w-4xl">
          <div className="border border-white/30 bg-charcoal px-8 py-10 md:px-10 md:py-12">
            <p className="text-xs uppercase tracking-[0.2em] text-grey mb-3">
              Primary
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              {primaryStreamingPlatform.name}
            </h2>
            <p className="mt-3 text-sm md:text-base text-white-muted leading-relaxed max-w-xl">
              Official store for listening, purchasing and downloading releases.
            </p>
            <div className="mt-6">
              <Button
                href={primaryStreamingPlatform.href}
                variant="primary"
                external
              >
                Visit Bandcamp
              </Button>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {secondaryStreamingPlatforms.map(({ name, href }) => (
              <div
                key={name}
                className="border border-white/10 bg-charcoal px-6 py-8 text-center"
              >
                <p className="text-sm font-medium text-white">{name}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs uppercase tracking-[0.1em] text-white-muted hover:text-white transition-colors"
                >
                  Listen
                </a>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
