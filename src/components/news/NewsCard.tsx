import Image from "next/image";
import Link from "next/link";
import type { NewsArticleContent } from "@/content/news";

type NewsCardProps = {
  article: NewsArticleContent;
};

function formatPublishedDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(date));
}

export function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface">
      {article.featuredImage ? (
        <Image
          {...article.featuredImage}
          alt={article.featuredImage.alt}
          className="aspect-[16/9] w-full object-cover"
        />
      ) : null}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <time dateTime={article.publishedAt} className="text-sm font-semibold text-accent">
          {formatPublishedDate(article.publishedAt)}
        </time>
        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-foreground">
          {article.title}
        </h2>
        <p className="mt-3 flex-1 leading-7 text-muted">{article.summary}</p>
        <Link
          href={`/news/${article.slug}`}
          className="mt-5 inline-flex min-h-11 items-center self-start rounded-md font-semibold text-accent hover:text-accent-hover"
        >
          Read {article.title}
        </Link>
      </div>
    </article>
  );
}
