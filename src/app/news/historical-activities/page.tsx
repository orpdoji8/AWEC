import type { Metadata } from "next";
import { BackLink } from "@/components/ui/BackLink";
import { NewsList } from "@/components/news/NewsList";
import { PageContainer } from "@/components/ui/PageContainer";
import { newsArticles, newsPageContent } from "@/content/news";

export const metadata: Metadata = {
  title: "Historical Activities",
  description: "Historical activities recovered from the previous American West Educational Center website.",
};
export default function HistoricalActivitiesPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <BackLink href="/news">Back to News &amp; Activities</BackLink>
      <header className="mt-8 grid items-end gap-6 border-b border-border pb-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow">The activity archive</p>
          <h1 className="page-title mt-4">Historical Activities</h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-muted">
          Activities recovered from our previous website.
        </p>
      </header>
      <p className="max-w-3xl py-6 text-sm leading-7 text-muted">
        {newsPageContent.intro.notice}
      </p>
      <section aria-label="Historical activities" className="pt-3">
        <NewsList
          articles={newsArticles}
          emptyState={newsPageContent.emptyState}
        />
      </section>
    </PageContainer>
  );
}
