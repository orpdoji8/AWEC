import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { PastYesList } from "@/components/news/PastYesList";
import { newsPageContent } from "@/content/news";

export const metadata: Metadata = newsPageContent.metadata;

export default function NewsPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <header className="border-b border-border pb-8">
        <div>
          <h1 className="page-title">News &amp; Activities</h1>
        </div>
      </header>
      <section className="mt-10" aria-labelledby="historical-activities">
        <Link href="/news/historical-activities" className="group block border-b border-border py-8 sm:py-10">
          <h2 id="historical-activities" className="flex items-center justify-between gap-5 text-4xl font-semibold tracking-tight group-hover:text-accent sm:text-5xl lg:text-6xl">
            Historical Activities<span className="shrink-0" aria-hidden="true">&rarr;</span>
          </h2>
        </Link>
      </section>
      <section className="mt-14" aria-labelledby="past-yes-programs">
        <h2 id="past-yes-programs" className="mb-8 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Past YES Programs</h2>
        <PastYesList />
      </section>
    </PageContainer>
  );
}
