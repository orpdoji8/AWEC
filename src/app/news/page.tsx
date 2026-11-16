import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { NewsProgramPreview } from "@/components/news/NewsProgramPreview";
import styles from "@/components/news/NewsLanding.module.css";
import cardStyles from "@/components/news/NewsHoverCard.module.css";
import { newsArticles, newsPageContent } from "@/content/news";

export const metadata: Metadata = newsPageContent.metadata;
const historicalPreview = newsArticles.find((article) => article.id === "HIST-001")!;

export default function NewsPage() {
  return (
    <PageContainer className={styles.page}>
      <header className={styles.masthead}>
        <h1 className={styles.title}>News &amp; <em>Activities</em></h1>
        <div className={styles.mastheadRule} aria-hidden="true" />
      </header>
      <section aria-labelledby="historical-activities" className={styles.history}>
        <Link href="/news/historical-activities" className={`${styles.historyLink} ${cardStyles.card}`} aria-labelledby="historical-activities">
          <div className={styles.historyCopy}>
            <h2 id="historical-activities"><span className={styles.hoverTitle}>Historical<br /> Activities</span></h2>
            <span className={styles.historyArrow} aria-hidden="true">↗</span>
          </div>
          {historicalPreview.featuredImage ? (
            <figure className={styles.historyFigure}>
              <Image {...historicalPreview.featuredImage} alt={historicalPreview.featuredImage.alt}
                sizes="(min-width: 1344px) 850px, (min-width: 768px) 66vw, 100vw" priority />
              <figcaption>{historicalPreview.title}</figcaption>
            </figure>
          ) : null}
        </Link>
      </section>
      <section className={styles.programs} aria-labelledby="past-yes-programs">
        <header className={styles.programHeader}>
          <h2 id="past-yes-programs"><span className={styles.hoverTitle}>Past <em>YES</em> Programs</span></h2>
        </header>
        <NewsProgramPreview />
      </section>
    </PageContainer>
  );
}
