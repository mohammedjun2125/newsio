import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.newsio.space";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/contact",
    "/category/finance-money",
    "/category/insurance-legal",
    "/category/technology-ai-tools",
    "/category/health-wellness",
  ];

  // Dynamically fetch all article slugs if you use an API or local folder
  // Example 1: If you store posts locally in /articles
  // const articles = getAllArticles().map(article => `/articles/${article.slug}`);

  // Example 2: If you use an API endpoint for posts
  // const res = await fetch(`${baseUrl}/api/articles`);
  // const articlesData = await res.json();
  // const articles = articlesData.map((a: any) => `/articles/${a.slug}`);

  // TEMPORARY: hardcoded list (remove this if you enable dynamic fetch)
  const articles = [
    "/articles/ai-in-insurance-legal-challenges-2025",
    "/articles/rising-interest-mortgage-rates-2025",
    "/articles/student-loan-forgiveness-backlog-2025",
    "/articles/us-liability-insurance-crisis-2025",
  ];

  const now = new Date().toISOString();

  // Combine all URLs
  return [...staticPages, ...articles].map((path, i) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    priority: i === 0 ? 1 : 0.64,
  }));
}