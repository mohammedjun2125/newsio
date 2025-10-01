import { getArticles } from "@/lib/data";
import ArticleTable from "./article-table";

export default async function AdminDashboard() {
  const articles = await getArticles();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Article Management</h1>
      <ArticleTable articles={articles} />
    </div>
  );
}
