import { CollectionEmptyState } from "@/components/sections/CollectionEmptyState";
import type { NewsArticleContent } from "@/content/news";
import { NewsCard } from "./NewsCard";

type NewsListProps = {
  articles: readonly NewsArticleContent[];
  emptyState: {
    title: string;
    description: string;
  };
};

export function NewsList({ articles, emptyState }: NewsListProps) {
  if (articles.length === 0) {
    return <CollectionEmptyState {...emptyState} />;
  }

  return (
    <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2">
      {articles.map((article) => (
        <li key={article.slug}>
          <NewsCard article={article} />
        </li>
      ))}
    </ul>
  );
}
