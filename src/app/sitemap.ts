
import { getArticles, getCategories } from '@/lib/data';
import { MetadataRoute } from 'next';

const URL = 'https://newsio.com'; // Replace with your actual domain

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles();
  const categories = await getCategories();

  const articleEntries: MetadataRoute.Sitemap = articles.map(({ slug, date }) => ({
    url: `${URL}/articles/${slug}`,
    lastModified: new Date(date),
    priority: 0.64,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map(({ slug }) => ({
    url: `${URL}/category/${slug}`,
    lastModified: new Date(),
    priority: 0.64,
  }));
  
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: URL,
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${URL}/contact`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];

  return [
    ...staticPages,
    ...articleEntries,
    ...categoryEntries,
  ];
}
