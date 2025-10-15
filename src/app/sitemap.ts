import { MetadataRoute } from 'next';
import { getArticles, getCategories } from '@/lib/data';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.newsio.space';

  // Get all articles
  const articles = await getArticles();
  const articleUrls = articles.map(article => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date).toISOString(),
    priority: 0.8,
  }));

  // Get all categories
  const categories = await getCategories();
  const categoryUrls = categories.map(category => ({
    url: `${baseUrl}/category/${category.slug}`,
    lastModified: new Date().toISOString(),
    priority: 0.7,
  }));

  // Define static pages
  const staticRoutes = [
    '',
    '/about',
    '/contact',
    '/privacy',
    '/disclaimer',
    '/terms',
  ];

  const staticUrls = staticRoutes.map(path => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date().toISOString(),
      priority: path === '' ? 1.0 : 0.5,
  }));

  return [...staticUrls, ...categoryUrls, ...articleUrls];
}
