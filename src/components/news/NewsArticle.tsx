import Image from "next/image";
import Link from "next/link";
import { BackLink } from "@/components/ui/BackLink";
import { PageContainer } from "@/components/ui/PageContainer";
import type { NewsArticleContent } from "@/content/news";

type NewsArticleProps = {
  article: NewsArticleContent;
  relatedArticles: readonly NewsArticleContent[];
};

function formatPublishedDate(date: string) {
  if (/^\d{4}$/.test(date)) return date;

  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(date));
}

export function NewsArticle({ article, relatedArticles }: NewsArticleProps) {
  return (
    <article>
      <PageContainer className="py-12 sm:py-16">
        <BackLink href="/news">Back to News &amp; Activities</BackLink>
        <header className="mt-8 max-w-4xl">
          {article.publishedAt ? (
            <time dateTime={article.publishedAt} className="text-sm font-semibold text-accent">
              {formatPublishedDate(article.publishedAt)}
            </time>
          ) : null}
          <h1 className={`${article.publishedAt ? "mt-3" : ""} text-balance text-4xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl`}>
            {article.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
            {article.summary}
          </p>
        </header>

        {article.featuredImage ? (
          <Image
            {...article.featuredImage}
            alt={article.featuredImage.alt}
            priority
            sizes="(min-width: 1200px) 1152px, 100vw"
            className="mt-10 h-auto w-full rounded-lg"
          />
        ) : null}

        <div className="mt-14 max-w-3xl space-y-12">
          {article.body.map((section) => (
            <section key={section.heading}>
              <h2 className="text-3xl font-semibold tracking-[-0.025em] text-foreground">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-8 text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        {article.gallery?.length ? (
          <section className="mt-14" aria-labelledby="news-gallery">
            <h2 id="news-gallery" className="text-3xl font-semibold tracking-[-0.025em] text-foreground">
              Photo gallery
            </h2>
            <ul className="mt-6 grid gap-5 sm:grid-cols-2">
              {article.gallery.map((image) => (
                <li key={image.src}>
                  <Image
                    {...image}
                    alt={image.alt}
                    className="w-full rounded-lg object-cover"
                  />
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {relatedArticles.length ? (
          <aside className="mt-14 border-t border-border pt-10" aria-labelledby="related-news">
            <h2 id="related-news" className="text-3xl font-semibold tracking-[-0.025em] text-foreground">
              Related news &amp; activities
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {relatedArticles.map((relatedArticle) => (
                <li key={relatedArticle.slug}>
                  <Link
                    href={`/news/${relatedArticle.slug}`}
                    className="inline-flex min-h-11 items-center rounded-md font-semibold text-accent hover:text-accent-hover"
                  >
                    {relatedArticle.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        ) : null}
      </PageContainer>
    </article>
  );
}
