import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested page could not be found.",
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading" className="flex flex-1 items-center">
      <PageContainer className="py-18 sm:py-24">
        <div className="max-w-2xl rounded-lg border border-border bg-surface p-7 shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
            Page not found
          </p>
          <h1
            id="not-found-heading"
            className="mt-3 text-balance text-4xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl"
          >
            We could not find the requested page.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-muted">
            The address may be incorrect, or the page may no longer be available.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Return to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-accent bg-surface px-6 py-3 font-semibold text-accent transition-colors hover:bg-surface-subtle hover:text-accent-hover"
            >
              Visit Contact
            </Link>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
