import type { Metadata } from "next";
import { BackLink } from "@/components/ui/BackLink";
import { NewsList } from "@/components/news/NewsList";
import { PageContainer } from "@/components/ui/PageContainer";
import { newsArticles, newsPageContent } from "@/content/news";
import styles from "@/components/news/NewsLanding.module.css";

export const metadata: Metadata = {
  title: "Historical Activities",
  description: "Historical activities recovered from the previous American West Educational Center website.",
};
export default function HistoricalActivitiesPage() {
  return (
    <PageContainer className={styles.page}>
      <BackLink href="/news">Back to News &amp; Activities</BackLink>
      <header className="mt-8">
        <h1 className={styles.title}>Historical <em>Activities</em></h1>
        <div className={styles.mastheadRule} aria-hidden="true" />
      </header>
      <section aria-label="Historical activities" className="pt-8 sm:pt-12">
        <NewsList
          articles={newsArticles}
          emptyState={newsPageContent.emptyState}
        />
      </section>
    </PageContainer>
  );
}
