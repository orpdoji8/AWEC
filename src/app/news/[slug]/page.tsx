import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsArticle } from "@/components/news/NewsArticle";
import {
  findNewsArticleBySlug,
  getNewsStaticParams,
  getRelatedNewsArticles,
} from "@/content/news";

type NewsPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getNewsStaticParams();
}

export async function generateMetadata({
  params,
}: NewsPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = findNewsArticleBySlug(slug);

  if (!article) notFound();

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function NewsDetailPage({ params }: NewsPageProps) {
  const { slug } = await params;
  const article = findNewsArticleBySlug(slug);

  if (!article) notFound();

  return (
    <NewsArticle
      article={article}
      relatedArticles={getRelatedNewsArticles(article)}
    />
  );
}
