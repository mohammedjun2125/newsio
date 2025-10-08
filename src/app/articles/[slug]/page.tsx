import { getArticle, getAuthor, getCategory } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { AdBanner } from '@/components/ad-banner';
import type { Metadata } from 'next';
import Link from 'next/link';
import { GoBackButton } from '@/components/go-back-button';
import { JsonLd } from '@/components/seo/json-ld';

const URL = 'https://newsio.com'; // Replace with your actual domain

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `${URL}/articles/${article.slug}`,
    },
    openGraph: {
        title: article.title,
        description: article.description,
        images: [
            {
                url: article.imageUrl,
                width: 1200,
                height: 630,
                alt: article.title,
            },
        ],
    },
  };
}


export default async function ArticlePage({ params }: { params: { slug: string }}) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  const author = await getAuthor(article.authorId);
  const category = await getCategory(article.categoryId);

  return (
    <>
      <JsonLd article={article} author={author} />
      <div className="container mx-auto max-w-4xl px-4 py-8">
        <GoBackButton />
        <article>
          <header className="mb-8">
            {category && (
              <Link href={`/category/${category.slug}`}>
                  <Badge className="mb-2">{category.name}</Badge>
              </Link>
            )}
            <h1 className="font-headline text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl">
              {article.title}
            </h1>
            <div className="mt-4 flex items-center space-x-4 text-sm text-muted-foreground">
              {author && (
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={author.avatarUrl} alt={author.name} />
                    <AvatarFallback>
                      {author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span>{author.name}</span>
                </div>
              )}
              <span>&middot;</span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </div>
          </header>

          <div className="relative mb-8 h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="rounded-lg object-cover shadow-lg"
              priority
              data-ai-hint={article.imageHint}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <section className="prose prose-lg max-w-none md:col-span-3 dark:prose-invert" dangerouslySetInnerHTML={{ __html: article.content }} />
              <aside className='md:col-span-1'>
                  <div className='sticky top-24'>
                      <AdBanner />
                  </div>
              </aside>
          </div>


          <footer className="mt-12">
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                  <Link key={tag} href={`/search?q=${encodeURIComponent(tag)}`}>
                      <Badge variant="outline">{tag}</Badge>
                  </Link>
              ))}
            </div>
          </footer>
        </article>
      </div>
    </>
  );
}
