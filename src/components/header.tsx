import Link from 'next/link';
import { getCategories } from '@/lib/data';
import { Button } from './ui/button';
import { SearchForm } from './search-form';
import { Menu, Newspaper } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const NewsioLogo = () => (
    <Newspaper className="h-6 w-6 text-primary" />
);


export async function Header() {
  const categories = await getCategories();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <NewsioLogo />
            <span className="font-bold sm:inline-block font-headline">
              Newsio
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
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
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <NewsioLogo />
                <span className="sr-only">Newsio</span>
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="w-full flex-1 sm:w-auto sm:flex-none">
             <SearchForm />
          </div>
        </div>
      </div>
    </header>
  );
}
