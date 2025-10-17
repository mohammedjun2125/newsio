import { getArticles, getCategory } from '@/lib/data';
import { notFound } from 'next/navigation';
import { ArticleCard } from '@/components/article-card';
import type { Metadata } from 'next';
import { GoBackButton } from '@/components/go-back-button';

type Props = {
  params: { categoryName: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { categoryName } = params;
    const category = await getCategory(categoryName);
  
    if (!category) {
      return {
        title: 'Category Not Found',
      };
    }
  
    return {
      title: `${category.name} Articles`,
      description: `Browse the latest articles in the ${category.name} category.`,
      alternates: {
        canonical: `/category/${category.slug}`,
      },
    };
  }

export default async function CategoryPage({ params }: Props) {
  const { categoryName } = params;
  const category = await getCategory(categoryName);

  if (!category) {
    notFound();
  }

  const articles = await getArticles({ category: category.slug });

  return (
    <div className="container mx-auto px-4 py-8">
      <GoBackButton />
      <header className="mb-8 border-b pb-4">
        <h1 className="font-headline text-4xl font-bold">{category.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Showing {articles.length} articles in this category.
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
            <h3 className="text-xl font-semibold">No articles found</h3>
            <p className="mt-2 text-sm text-muted-foreground">There are no articles in this category yet. Check back later!</p>
        </div>
      )}
    </div>
  );
}
