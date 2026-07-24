type CollectionEmptyStateProps = {
  title: string;
  description: string;
};

export function CollectionEmptyState({
  title,
  description,
}: CollectionEmptyStateProps) {
  return (
    <div className="rounded-lg border border-border bg-surface p-7 text-center sm:p-10">
      <p className="mx-auto max-w-2xl text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
        {title}
      </p>
      <p className="mx-auto mt-4 max-w-2xl leading-7 text-muted">
        {description}
      </p>
    </div>
  );
}
