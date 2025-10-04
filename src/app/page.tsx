import Image from 'next/image';
import Link from 'next/link';

import { getArticles, getPopularArticles } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { ArticleCard } from '@/components/article-card';
import { AdBanner } from '@/components/ad-banner';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

export default async function Home() {
  const articles = await getArticles({ limit: 7 });
  const popularArticles = await getPopularArticles({ limit: 4 });

  const featuredArticle = articles[0];
  const recentArticles = articles.slice(1);

  return (
    <div className="container mx-auto px-4 py-8">
      <main className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Featured Article */}
          {featuredArticle && (
            <section className="mb-12">
              <Card className="overflow-hidden border-0 shadow-xl transition-shadow duration-300 hover:shadow-2xl">
                <Link href={`/articles/${featuredArticle.slug}`}>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={featuredArticle.imageUrl}
                        alt={featuredArticle.title}
                        fill
                        className="object-cover"
                        data-ai-hint={featuredArticle.imageHint}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg=="
                      />
                    </div>
                    <div className="flex flex-col justify-between p-6">
                      <div>
                        <Badge variant="destructive" className="mb-2">
                          Featured
                        </Badge>
                        <h2 className="font-headline text-3xl font-bold leading-tight">
                          {featuredArticle.title}
                        </h2>
                        <p className="mt-2 text-muted-foreground">
                          {formatDate(featuredArticle.date)}
                        </p>
                        <p className="mt-4 text-foreground/80">
                          {featuredArticle.description}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center justify-end text-sm font-semibold text-primary">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            </section>
          )}

          {/* Recent Articles */}
          <section>
            <h2 className="mb-6 font-headline text-2xl font-bold">
              Latest Stories
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {recentArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8 lg:col-span-1">
          {/* Popular Posts */}
          <Card>
            <CardHeader>
              <CardTitle>Popular Posts</CardTitle>
              <CardDescription>
                What&apos;s trending on Newsio right now.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {popularArticles.map((article, index) => (
                  <li key={article.id}>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="group flex items-start gap-4"
                    >
                      <span className="text-3xl font-bold text-muted-foreground/50 transition-colors group-hover:text-primary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="font-semibold leading-snug transition-colors group-hover:text-primary">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {formatDate(article.date, 'MMM dd')}
                        </p>
                      </div>
                    </Link>
                    {index < popularArticles.length - 1 && <Separator className="mt-4" />}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Ad Space */}
          <div className="sticky top-24">
            <AdBanner />
          </div>
        </aside>
      </main>
    </div>
  );
}
