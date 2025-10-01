import { z } from 'zod';

export const articleSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long."),
  slug: z.string().min(3, "Slug must be at least 3 characters long.").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be a valid URL slug (e.g., 'my-awesome-article')."),
  description: z.string().min(10, "Description must be at least 10 characters long."),
  content: z.string().min(50, "Content must be at least 50 characters long."),
  categoryId: z.string().min(1, "Please select a category."),
  authorId: z.string().min(1, "Please select an author."),
  tags: z.string().transform(val => val.split(',').map(tag => tag.trim())),
  image: z.any().optional(),
});
