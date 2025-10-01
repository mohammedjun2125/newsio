import { getCategories } from '@/lib/data';
import Link from 'next/link';

const NewsioLogo = () => (
    <svg
      width="32"
      height="32"
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

export async function Footer() {
    const categories = await getCategories();

    return (
        <footer className="border-t bg-card">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2">
                            <NewsioLogo />
                            <span className="text-xl font-bold font-headline">Newsio</span>
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Your daily source for the latest in tech, gadgets, and trending news.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold tracking-wider text-foreground">CATEGORIES</h3>
                        <ul className="mt-4 space-y-2">
                            {categories.map((category) => (
                                <li key={category.id}>
                                    <Link href={`/category/${category.slug}`} className="text-sm text-muted-foreground hover:text-primary">
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold tracking-wider text-foreground">COMPANY</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
                            <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold tracking-wider text-foreground">LEGAL</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
                            <li><Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-primary">Disclaimer</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Newsio. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
