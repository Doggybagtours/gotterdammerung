type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-white/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-14 md:px-10 md:pt-40 md:pb-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white-muted leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
