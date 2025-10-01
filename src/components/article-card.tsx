import Image from 'next/image';
import Link from 'next/link';
import type { Article } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { formatDate } from '@/lib/utils';
import { getCategory } from '@/lib/data';
import { ArrowRight } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
}

export async function ArticleCard({ article }: ArticleCardProps) {
  const category = await getCategory(article.categoryId);

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <Link href={`/articles/${article.slug}`} className="flex h-full flex-col">
        <CardHeader className="p-0">
          <div className="relative h-48 w-full">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              data-ai-hint={article.imageHint}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6">
          {category && (
            <Badge variant="secondary" className="mb-2">
              {category.name}
            </Badge>
          )}
          <h3 className="font-headline text-xl font-semibold leading-snug">
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            {formatDate(article.date)}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
            <div className="flex w-full items-center justify-end text-sm font-semibold text-primary">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
            </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
