import type { Metadata } from "next";
import { NewsList } from "@/components/news/NewsList";
import { CallToAction } from "@/components/sections/CallToAction";
import { TemporaryContentNotice } from "@/components/sections/TemporaryContentNotice";
import { PageContainer } from "@/components/ui/PageContainer";
import { newsArticles, newsPageContent } from "@/content/news";

export const metadata: Metadata = newsPageContent.metadata;

export default function NewsPage() {
  return (
    <>
      <section aria-labelledby="news-heading">
        <PageContainer className="py-16 sm:py-22">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              {newsPageContent.intro.eyebrow}
            </p>
            <h1
              id="news-heading"
              className="text-balance text-4xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl"
            >
              {newsPageContent.intro.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {newsPageContent.intro.description}
            </p>
            <div className="mt-7 max-w-3xl">
              <TemporaryContentNotice>
                {newsPageContent.intro.notice}
              </TemporaryContentNotice>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="border-y border-border bg-surface-subtle" aria-labelledby="news-collection">
        <PageContainer className="py-16 sm:py-22">
          <h2 id="news-collection" className="sr-only">
            Historical activities and news
          </h2>
          <NewsList
            articles={newsArticles}
            emptyState={newsPageContent.emptyState}
          />
        </PageContainer>
      </section>

      <CallToAction
        {...newsPageContent.supporting}
        href="/about"
        linkLabel="About the Organization"
      />
    </>
  );
}
