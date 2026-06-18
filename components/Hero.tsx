import Image from "next/image";
import { Logo } from "@/components/Logo";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-image.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center max-md:object-[center_38%] md:object-center"
          aria-hidden="true"
        />
      </div>

      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="-translate-y-[10%] md:-translate-y-[18%]">
          <Logo size="hero" linked />
        </div>
      </div>
    </section>
  );
}
