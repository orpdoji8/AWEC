import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";

type CallToActionProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

export function CallToAction({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
}: CallToActionProps) {
  return (
    <section className="bg-accent text-accent-foreground">
      <PageContainer className="py-14 sm:py-18">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-chrome-text-muted">
              {eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.025em] sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-chrome-text-muted">
              {description}
            </p>
          </div>
          <Link
            href={href}
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-chrome-action px-6 py-3 font-semibold text-chrome-action-text transition-colors hover:bg-chrome-action-hover"
          >
            {linkLabel}
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
