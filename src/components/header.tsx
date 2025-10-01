import Link from 'next/link';
import { getCategories } from '@/lib/data';
import { Button } from './ui/button';
import { SearchForm } from './search-form';
import { Newspaper } from 'lucide-react';

const NewsioLogo = () => (
    <Newspaper className="h-6 w-6 text-primary" />
);


export async function Header() {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <NewsioLogo />
            <span className="font-bold sm:inline-block font-headline">
              Newsio
            </span>
          </Link>
          <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/category/${category.slug}`}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {category.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="w-full flex-1 sm:w-auto sm:flex-none">
             <SearchForm />
          </div>
        </div>
      </div>
    </header>
  );
}
