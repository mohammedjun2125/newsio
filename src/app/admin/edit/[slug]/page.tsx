import { getArticle, getAuthors, getCategories } from "@/lib/data";
import ArticleForm from "@/app/admin/article-form";
import { notFound } from "next/navigation";

export default async function EditArticlePage({ params }: { params: { slug: string }}) {
  const [article, categories, authors] = await Promise.all([
    getArticle(params.slug),
    getCategories(),
    getAuthors(),
  ]);

  if (!article) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Edit Article</h1>
      <ArticleForm article={article} categories={categories} authors={authors} />
    </div>
  );
}
