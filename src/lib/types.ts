export interface Author {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  imageHint: string;
  date: string;
  authorId: string;
  categoryId: string;
  tags: string[];
  isFeatured: boolean;
  isPopular: boolean;
}
