import { getAuthors, getCategories } from "@/lib/data";
import ArticleForm from "@/app/admin/article-form";

export default async function NewArticlePage() {
  const categories = await getCategories();
  const authors = await getAuthors();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create New Article</h1>
      <ArticleForm categories={categories} authors={authors} />
    </div>
  );
}
