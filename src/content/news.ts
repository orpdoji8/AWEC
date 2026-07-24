import type { ContentImage, ContentSection } from "@/types/content";

export type NewsArticleContent = {
  slug: string;
  title: string;
  publishedAt: string;
  summary: string;
  featuredImage?: ContentImage;
  body: readonly ContentSection[];
  gallery?: readonly ContentImage[];
  relatedArticleSlugs?: readonly string[];
};

export const newsPageContent = {
  metadata: {
    title: "News",
    description:
      "A structural News area prepared for approved American West Educational Center updates.",
  },
  intro: {
    eyebrow: "News and activities",
    title: "News",
    description:
      "Approved news and activity updates will be published here after client material has been reviewed.",
    notice:
      "No articles are currently published. Titles, dates, summaries, and article content will be added only after approval.",
  },
  emptyState: {
    title: "Approved updates will appear here",
    description:
      "Future articles will link to dedicated pages containing only reviewed dates, summaries, and supporting material.",
  },
  supporting: {
    eyebrow: "Organization information",
    title: "Learn more while news content is prepared",
    description:
      "The About Us page provides the current structural overview while approved news material is being gathered.",
  },
} as const;

export const newsArticles: readonly NewsArticleContent[] = [];

export function findNewsArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}

export function getNewsStaticParams() {
  return newsArticles.map(({ slug }) => ({ slug }));
}

export function getRelatedNewsArticles(article: NewsArticleContent) {
  if (!article.relatedArticleSlugs?.length) return [];

  return article.relatedArticleSlugs.flatMap((slug) => {
    const relatedArticle = findNewsArticleBySlug(slug);
    return relatedArticle ? [relatedArticle] : [];
  });
}
