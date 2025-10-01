"use client";

import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from './ui/input';

export function SearchForm() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get('query') as string;
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        name="query"
        placeholder="Search articles..."
        className="w-full pl-9"
        aria-label="Search articles"
      />
    </form>
  );
}
