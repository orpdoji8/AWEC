type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  centered?: boolean;
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionIntroProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-[-0.025em] text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-lg leading-8 text-muted">{description}</p>
    </div>
  );
}
