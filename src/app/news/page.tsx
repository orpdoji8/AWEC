import type { Metadata } from "next";
import { NewsList } from "@/components/news/NewsList";
import { PageContainer } from "@/components/ui/PageContainer";
import { newsArticles, newsPageContent } from "@/content/news";

export const metadata: Metadata = newsPageContent.metadata;
export default function NewsPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <header className="grid items-end gap-6 border-b border-border pb-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow">The activity archive</p>
          <h1 className="page-title mt-4">News & Activities</h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-muted">
          {newsPageContent.intro.description}
        </p>
      </header>
      <p className="max-w-3xl py-6 text-sm leading-7 text-muted">
        {newsPageContent.intro.notice}
      </p>
      <section aria-label="Historical activities and news" className="pt-3">
        <NewsList
          articles={newsArticles}
          emptyState={newsPageContent.emptyState}
        />
      </section>
    </PageContainer>
  );
}
