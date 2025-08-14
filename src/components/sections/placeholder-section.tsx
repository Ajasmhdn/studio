interface PlaceholderSectionProps {
  id: string;
  title: string;
}

export function PlaceholderSection({ id, title }: PlaceholderSectionProps) {
  return (
    <section id={id} className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-secondary-foreground">
          {title}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Content coming soon. Please check back later.
        </p>
      </div>
    </section>
  );
}
