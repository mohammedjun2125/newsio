
import { getArticles, getCategories } from '@/lib/data';

const URL = 'https://newsio.com'; // Replace with your actual domain

export async function GET(): Promise<Response> {
  const articles = await getArticles();
  const categories = await getCategories();

  const articleEntries = articles.map(({ slug, date }) => `
    <url>
      <loc>${URL}/articles/${slug}</loc>
      <lastmod>${new Date(date).toISOString()}</lastmod>
      <priority>0.64</priority>
    </url>`).join('');

  const categoryEntries = categories.map(({ slug }) => `
    <url>
      <loc>${URL}/category/${slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>0.64</priority>
    </url>`).join('');

  const staticPages = [
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

  const staticPageEntries = staticPages.map(({ url, lastModified, priority }) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastModified.toISOString()}</lastmod>
      <priority>${priority}</priority>
    </url>`).join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPageEntries}
  ${articleEntries}
  ${categoryEntries}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
