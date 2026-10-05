import type { Metadata } from "next";
import Link from "next/link";
import { OperationList } from "@/components/operations/OperationList";
import { PageContainer } from "@/components/ui/PageContainer";
import { operations, operationsPageContent } from "@/content/operations";

export const metadata: Metadata = operationsPageContent.metadata;
export default function OperationsPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <header className="lg:sticky lg:top-8 lg:self-start">
          <p className="eyebrow">A directory of legacy categories</p>
          <h1 className="page-title mt-5">Business Operations</h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            {operationsPageContent.intro.description}
          </p>
          <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-7 text-muted">
            {operationsPageContent.intro.notice}
          </p>
        </header>
        <section aria-label="Legacy business operation categories">
          <OperationList
            operations={operations}
            emptyState={operationsPageContent.emptyState}
          />
        </section>
      </div>
      <aside className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-border py-8">
        <div>
          <p className="eyebrow">See the historical records</p>
          <h2 className="mt-3 text-2xl font-semibold">
            Visits, training, exhibitions and more
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted">
            {operationsPageContent.supporting.description}
          </p>
        </div>
        <Link
          href="/news"
          className="text-link inline-flex min-h-11 items-center"
        >
          Explore News & Activities →
        </Link>
      </aside>
    </PageContainer>
  );
}
