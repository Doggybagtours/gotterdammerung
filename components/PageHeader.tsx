import Image from "next/image";

export type PageTitleImage = {
  src: string;
  width: number;
  height: number;
};

type PageHeaderProps = {
  title: string;
  description?: string;
  titleImage?: PageTitleImage;
};

export function PageHeader({ title, description, titleImage }: PageHeaderProps) {
  return (
    <header className="border-b border-white/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-14 md:px-10 md:pt-40 md:pb-16">
        {titleImage ? (
          <>
            <h1 className="sr-only">{title}</h1>
            <Image
              src={titleImage.src}
              alt=""
              aria-hidden="true"
              width={titleImage.width}
              height={titleImage.height}
              className="h-7 w-auto max-w-full md:h-9"
              priority
            />
          </>
        ) : (
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            {title}
          </h1>
        )}
        {description && (
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white-muted leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
