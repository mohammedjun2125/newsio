"use client";

import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { articleSchema } from "./schemas";
import { createArticle, updateArticle } from "./actions";
import type { Article, Category, Author } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

type ArticleFormProps = {
  article?: Article;
  categories: Category[];
  authors: Author[];
};

export default function ArticleForm({
  article,
  categories,
  authors,
}: ArticleFormProps) {
  const { toast } = useToast();
  const isEditMode = !!article;

  const form = useForm<z.infer<typeof articleSchema>>({
    resolver: zodResolver(articleSchema),
    defaultValues: {
      title: article?.title || "",
      slug: article?.slug || "",
      description: article?.description || "",
      content: article?.content || "",
      categoryId: article?.categoryId || "",
      authorId: article?.authorId || "",
      tags: article?.tags?.join(", ") || "",
    },
  });

  const formAction = isEditMode
    ? updateArticle.bind(null, article.slug)
    : createArticle;
  const [state, dispatch] = useActionState(formAction, { message: "" });

  useEffect(() => {
    if (state.message) {
      if (state.errors) {
        toast({
          title: "Error",
          description: state.message,
          variant: "destructive",
        });
      }
    }
  }, [state, toast]);

  return (
    <Form {...form}>
      <form action={dispatch} className="space-y-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Article Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input placeholder="The Future of AI" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="slug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Slug</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="the-future-of-ai"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This is the URL-friendly version of the title.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="A short summary of the article."
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        This will be shown in article previews and for SEO.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Content</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write your article here. You can use HTML tags."
                          className="min-h-[300px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Metadata</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="categoryId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="authorId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Author</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an author" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {authors.map((author) => (
                            <SelectItem key={author.id} value={author.id}>
                              {author.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tags"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tags</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="AI, Tech, Future"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Comma-separated list of tags.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                  <CardTitle>Featured Image</CardTitle>
              </CardHeader>
              <CardContent>
                  <FormField
                      control={form.control}
                      name="image"
                      render={({ field }) => (
                          <FormItem>
                          <FormLabel>Upload Image</FormLabel>
                          <FormControl>
                              <Input type="file" {...field} />
                          </FormControl>
                          <FormDescription>
                            Image upload is for demonstration only. A placeholder will be used.
                          </FormDescription>
                          <FormMessage />
                          </FormItem>
                      )}
                      />
              </CardContent>
            </Card>
          </div>
        </div>

        <Button type="submit" disabled={form.formState.isSubmitting}>
          {isEditMode ? "Update Article" : "Create Article"}
        </Button>
      </form>
    </Form>
  );
}
