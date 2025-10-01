import { getArticles } from '@/lib/data';
import { ArticleCard } from '@/components/article-card';
import type { Metadata } from 'next';

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ searchParams }: Props): Metadata {
    const query = searchParams.q as string || '';
    return {
        title: `Search results for "${query}"`,
        description: `Find articles matching your search for "${query}".`,
    };
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q as string || '';
  const articles = await getArticles({ query });

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8 border-b pb-4">
        <h1 className="font-headline text-4xl font-bold">Search Results</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          {articles.length > 0
            ? `Found ${articles.length} article(s) for `
            : 'No articles found for '}
          <span className="font-semibold text-primary">&quot;{query}&quot;</span>.
        </p>
      </header>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center">
            <h3 className="text-xl font-semibold">No results found</h3>
            <p className="mt-2 text-sm text-muted-foreground">Try searching for something else.</p>
        </div>
      )}
    </div>
  );
}
