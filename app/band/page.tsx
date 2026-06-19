import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { bandBiography } from "@/lib/band";

const title = "Band Biography | Götterdämmerung";
const description =
  "Biography and history of Götterdämmerung. Formed in 1991, blending gothic rock, deathrock, post-punk and dark electronic influences.";

export const metadata: Metadata = {
  title: "Band Biography",
  description,
  openGraph: { title, description },
};

export default function BandPage() {
  return (
    <>
      <PageHeader title="Band" />

      {bandBiography.length > 0 && (
        <section className="py-16 md:py-24 bg-black">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
              <div className="w-full md:w-72 shrink-0 overflow-hidden border border-white/10">
                <Image
                  src="/images/5M9A1128.jpg"
                  alt="Götterdämmerung"
                  width={3648}
                  height={5472}
                  sizes="(max-width: 768px) 100vw, 288px"
                  className="w-full h-auto grayscale"
                />
              </div>
              <div className="space-y-7 text-base md:text-lg text-white-muted leading-[1.85] text-left">
                {bandBiography.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
