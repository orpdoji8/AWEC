import Image from "next/image";
import Link from "next/link";
import type { NewsArticleContent } from "@/content/news";
import cardStyles from "./NewsHoverCard.module.css";

type NewsCardProps = {
  article: NewsArticleContent;
};

function formatPublishedDate(date: string) {
  if (/^\d{4}$/.test(date)) return date;

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(date));
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="h-full">
      <Link href={`/news/${article.slug}`} className={`${cardStyles.card} ${cardStyles.archiveCard}`} aria-labelledby={`title-${article.id}`}>
      {article.featuredImage ? (
        <Image
          {...article.featuredImage}
          alt={article.featuredImage.alt}
          sizes="(min-width: 1200px) 564px, (min-width: 768px) 50vw, 100vw"
          className="aspect-[16/9] w-full bg-surface-subtle object-contain"
        />
      ) : null}
      <div className="flex flex-1 flex-col pt-5">
        {article.publishedAt ? (
          <time
            dateTime={article.publishedAt}
            className="text-sm font-semibold text-accent"
          >
            {formatPublishedDate(article.publishedAt)}
          </time>
        ) : null}
        <h2
          id={`title-${article.id}`}
          className={`${article.publishedAt ? "mt-3" : ""} text-2xl lg:text-3xl font-semibold tracking-[-0.02em] text-foreground`}
        >
          <span className={cardStyles.title}>{article.title}</span>
        </h2>
        <p className="mt-3 flex-1 leading-7 text-muted">{article.summary}</p>
      </div>
      </Link>
    </article>
  );
}
