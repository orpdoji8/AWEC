import type { Metadata } from "next";
import { OperationList } from "@/components/operations/OperationList";
import { CallToAction } from "@/components/sections/CallToAction";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { TemporaryContentNotice } from "@/components/sections/TemporaryContentNotice";
import { PageContainer } from "@/components/ui/PageContainer";
import { operations, operationsPageContent } from "@/content/operations";

export const metadata: Metadata = operationsPageContent.metadata;

export default function OperationsPage() {
  return (
    <>
      <section aria-labelledby="operations-heading">
        <PageContainer className="py-16 sm:py-22">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              {operationsPageContent.intro.eyebrow}
            </p>
            <h1
              id="operations-heading"
              className="text-balance text-4xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl"
            >
              {operationsPageContent.intro.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {operationsPageContent.intro.description}
            </p>
            <div className="mt-7 max-w-3xl">
              <TemporaryContentNotice>
                {operationsPageContent.intro.notice}
              </TemporaryContentNotice>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="border-y border-border bg-surface-subtle" aria-labelledby="operations-collection">
        <PageContainer className="py-16 sm:py-22">
          <h2 id="operations-collection" className="sr-only">
            Published business operations
          </h2>
          <OperationList
            operations={operations}
            emptyState={operationsPageContent.emptyState}
          />
        </PageContainer>
      </section>

      <section>
        <PageContainer className="py-16 sm:py-22">
          <SectionIntro {...operationsPageContent.supporting} />
        </PageContainer>
      </section>

      <CallToAction
        {...operationsPageContent.contact}
        href="/contact"
        linkLabel="Visit Contact"
      />
    </>
  );
}
