import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { newsPageContent } from "@/content/news";
import { PastYesList } from "@/components/news/PastYesList";

export const metadata: Metadata = newsPageContent.metadata;

export default function NewsPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <header className="grid items-end gap-6 border-b border-border pb-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow">Activity collections</p>
          <h1 className="page-title mt-4">News &amp; Activities</h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-muted">{newsPageContent.intro.description}</p>
      </header>
      <section className="mt-10" aria-labelledby="historical-activities">
        <Link href="/news/historical-activities" className="group block border-b border-border py-8 sm:py-10">
          <p className="eyebrow" aria-hidden="true">01</p>
          <h2 id="historical-activities" className="mt-4 flex items-center justify-between gap-5 text-4xl font-semibold tracking-tight group-hover:text-accent sm:text-5xl">
            Historical Activities<span className="shrink-0" aria-hidden="true">&rarr;</span>
          </h2>
        </Link>
      </section>
      <section className="mt-14" aria-labelledby="past-yes-programs">
        <p className="eyebrow" aria-hidden="true">02</p>
        <h2 id="past-yes-programs" className="mb-8 mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Past YES Programs</h2>
        <PastYesList />
      </section>
    </PageContainer>
  );
}
