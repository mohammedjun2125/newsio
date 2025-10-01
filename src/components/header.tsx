import Link from 'next/link';
import { getCategories } from '@/lib/data';
import { Button } from './ui/button';
import { SearchForm } from './search-form';

const NewsioLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-primary"
  >
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="0" y2="100%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      fill="url(#logoGradient)"
      d="M12.93,4.31a2.3,2.3,0,0,0-3.33.58,7.7,7.7,0,0,0-2.3,4.73,2.3,2.3,0,0,0,2.4,2.58,2.32,2.32,0,0,0,2.33-2.29V8.2a.29.29,0,0,1,.3-.28.28.28,0,0,1,.29.28v1.71a4.32,4.32,0,0,1-4.22,4.42,4.28,4.28,0,0,1-4.21-4.11,9.66,9.66,0,0,1,2.83-6.16A4.3,4.3,0,0,1,12.93,4.31Zm-1.1,15.38a2.3,2.3,0,0,0,3.33-.58,7.7,7.7,0,0,0,2.3-4.73,2.3,2.3,0,0,0-2.4-2.58,2.32,2.32,0,0,0-2.33,2.29v1.71a.29.29,0,0,1-.3.28.28.28,0,0,1-.29-.28V14a4.32,4.32,0,0,1,4.22-4.42,4.28,4.28,0,0,1,4.21,4.11,9.66,9.66,0,0,1-2.83,6.16A4.3,4.3,0,0,1,11.83,19.69Z"
    />
  </svg>
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
