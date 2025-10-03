import type { Article, Category, Author } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';
import { subDays } from 'date-fns';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    return {
      imageUrl: 'https://picsum.photos/seed/error/800/600',
      imageHint: 'placeholder image',
    };
  }
  return { imageUrl: image.imageUrl, imageHint: image.imageHint };
};

export const authors: Author[] = [
  { id: 'author-1', name: 'Jane Doe', avatarUrl: findImage('author-1').imageUrl },
  { id: 'author-2', name: 'John Smith', avatarUrl: findImage('author-2').imageUrl },
  { id: 'author-3', name: 'Alex Ray', avatarUrl: findImage('author-3').imageUrl },
];

export const categories: Category[] = [
  { id: 'cat-1', slug: 'tech', name: 'Tech' },
  { id: 'cat-2', slug: 'trending', name: 'Trending' },
  { id: 'cat-3', slug: 'gadgets', name: 'Gadgets' },
  { id: 'cat-4', slug: 'general', name: 'General News' },
];

let articles: Article[] = [];

// --- Data Access Functions ---

export async function getArticles(options: { limit?: number; category?: string; query?: string } = {}) {
  let filteredArticles = [...articles];

  if (options.category) {
    const category = categories.find(c => c.slug === options.category);
    if (category) {
      filteredArticles = filteredArticles.filter(a => a.categoryId === category.id);
    } else {
      return []; // No articles if category doesn't exist
    }
  }

  if (options.query) {
    const lowercasedQuery = options.query.toLowerCase();
    filteredArticles = filteredArticles.filter(
      a =>
        a.title.toLowerCase().includes(lowercasedQuery) ||
        a.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery))
    );
  }
  
  filteredArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (options.limit) {
    return filteredArticles.slice(0, options.limit);
  }

  return filteredArticles;
}

export async function getArticle(slug: string) {
  return articles.find(article => article.slug === slug) ?? null;
}

export async function getPopularArticles(options: { limit?: number } = {}) {
  let popular = articles.filter(a => a.isPopular);
  popular.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  if (options.limit) {
    return popular.slice(0, options.limit);
  }
  return popular;
}

export async function getCategories() {
  return [...categories];
}

export async function getCategory(slug: string) {
  return categories.find(category => category.slug === slug) ?? null;
}


export async function getAuthor(id: string) {
  return authors.find(author => author.id === id) ?? null;
}

export async function getAuthors() {
  return [...authors];
}

// --- Admin Functions (Simulated) ---

export async function createArticle(data: Omit<Article, 'id' | 'date' | 'isFeatured' | 'isPopular'> & { id?: string }) {
  const newArticle: Article = {
    ...data,
    id: `article-${Date.now()}`,
    date: new Date().toISOString(),
    isFeatured: false,
    isPopular: false,
  };
  articles.unshift(newArticle);
  return newArticle;
}

export async function updateArticle(slug: string, data: Partial<Article>) {
  const articleIndex = articles.findIndex(a => a.slug === slug);
  if (articleIndex === -1) {
    return null;
  }
  articles[articleIndex] = { ...articles[articleIndex], ...data };
  return articles[articleIndex];
}

export async function deleteArticle(slug: string) {
  const articleIndex = articles.findIndex(a => a.slug === slug);
  if (articleIndex > -1) {
    articles.splice(articleIndex, 1);
    return true;
  }
  return false;
}
