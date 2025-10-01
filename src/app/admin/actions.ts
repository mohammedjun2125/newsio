"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { articleSchema } from "./schemas";
import {
  createArticle as dbCreateArticle,
  deleteArticle as dbDeleteArticle,
  updateArticle as dbUpdateArticle,
  getArticle,
} from "@/lib/data";
import { Article } from "@/lib/types";

type FormState = {
  message: string;
  errors?: {
    [key: string]: string[] | undefined;
  };
};

export async function createArticle(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = articleSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const articleData: Omit<Article, 'id' | 'date' | 'isFeatured' | 'isPopular'> = {
        ...validatedFields.data,
        content: validatedFields.data.content,
        // In a real app, handle image upload and get URL
        imageUrl: 'https://picsum.photos/seed/new-article/800/600',
        imageHint: 'new article',
    };
    
    await dbCreateArticle(articleData);

  } catch (error) {
    return { message: "Failed to create article." };
  }

  revalidatePath("/admin");
  revalidatePath("/");
  redirect("/admin");
}

export async function updateArticle(
  slug: string,
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
    const validatedFields = articleSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if (!validatedFields.success) {
        return {
          message: "Validation failed. Please check your input.",
          errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    try {
        const existingArticle = await getArticle(slug);
        if(!existingArticle) {
            return { message: "Article not found." };
        }
        
        const articleData: Partial<Article> = {
            ...validatedFields.data,
        };
        await dbUpdateArticle(slug, articleData);
    } catch (error) {
        return { message: "Failed to update article." };
    }

    revalidatePath(`/admin/edit/${slug}`);
    revalidatePath(`/articles/${slug}`);
    revalidatePath("/admin");
    redirect("/admin");
}

export async function deleteArticle(slug: string) {
  try {
    await dbDeleteArticle(slug);
    revalidatePath("/admin");
    return { message: "Article deleted successfully." };
  } catch (error) {
    return { message: "Failed to delete article." };
  }
}
