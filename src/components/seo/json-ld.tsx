import type { Article, Author } from '@/lib/types';

interface JsonLdProps {
    article: Article;
    author: Author | null;
}

export function JsonLd({ article, author }: JsonLdProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.description,
    image: article.imageUrl,
    datePublished: article.date,
    dateModified: article.date,
    author: author ? {
      '@type': 'Person',
      name: author.name,
      url: `/authors/${author.id}` // Assuming you might have author pages
    } : {
      '@type': 'Organization',
      name: 'Newsio',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Newsio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.newsio.space/logo.png', // Replace with your actual logo URL
      },
    },
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://www.newsio.space/articles/${article.slug}`,
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
