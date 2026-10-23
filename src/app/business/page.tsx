import type { Metadata } from "next";
import { OperationList } from "@/components/operations/OperationList";
import { PageContainer } from "@/components/ui/PageContainer";
import { operations, operationsPageContent } from "@/content/operations";

export const metadata: Metadata = operationsPageContent.metadata;
export default function BusinessPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <header className="lg:sticky lg:top-8 lg:self-start">
          <p className="eyebrow">Business sections</p>
          <h1 className="page-title mt-5">Business</h1>
          <p className="mt-6 text-lg leading-8 text-muted">
            {operationsPageContent.intro.description}
          </p>
          <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-7 text-muted">
            {operationsPageContent.intro.notice}
          </p>
        </header>
        <section aria-label="Business sections">
          <OperationList
            operations={operations}
            emptyState={operationsPageContent.emptyState}
          />
        </section>
      </div>
    </PageContainer>
  );
}
