import { MetadataRoute } from "next";
import { getArticles } from "@/lib/data";

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
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
    priority: path === "" ? 1 : 0.8,
  }));

  // Dynamic article pages
  const articles = await getArticles();
  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.date).toISOString(),
    priority: 0.64,
  }));


  return [...staticPages, ...articlePages];
}
