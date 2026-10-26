type FeatureCardProps = {
  title: string;
  description: string;
};

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="rounded-lg border border-border bg-surface p-6 sm:p-7">
      <h3 className="text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-foreground">
        {title}
      </h3>
      <p className="mt-3 leading-7 text-muted">{description}</p>
    </article>
  );
}
