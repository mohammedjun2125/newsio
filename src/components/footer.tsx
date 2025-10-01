import { getCategories } from '@/lib/data';
import { Newspaper } from 'lucide-react';
import Link from 'next/link';

const NewsioLogo = () => (
    <Newspaper className="h-8 w-8 text-primary" />
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
