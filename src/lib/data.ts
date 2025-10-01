import type { Article, Category, Author } from '@/lib/types';
import { PlaceHolderImages } from './placeholder-images';
import { subDays } from 'date-fns';

const findImage = (id: string) => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    return {
      imageUrl: 'https://picsum.photos/seed/error/800/600',
      imageHint: 'placeholder image',
    };
  }
  return { imageUrl: image.imageUrl, imageHint: image.imageHint };
};

export const authors: Author[] = [
  { id: 'author-1', name: 'Jane Doe', avatarUrl: findImage('author-1').imageUrl },
  { id: 'author-2', name: 'John Smith', avatarUrl: findImage('author-2').imageUrl },
  { id: 'author-3', name: 'Alex Ray', avatarUrl: findImage('author-3').imageUrl },
];

export const categories: Category[] = [
  { id: 'cat-1', slug: 'tech', name: 'Tech' },
  { id: 'cat-2', slug: 'trending', name: 'Trending' },
  { id: 'cat-3', slug: 'gadgets', name: 'Gadgets' },
  { id: 'cat-4', slug: 'general', name: 'General News' },
];

let articles: Article[] = [
  {
    id: 'article-1',
    slug: 'the-future-of-ai-in-web-development',
    title: 'The Future of AI in Web Development',
    description: 'Explore how artificial intelligence is reshaping the landscape of web development, from automated coding to personalized user experiences.',
    content: `
      <p>Artificial intelligence is no longer a concept of science fiction; it's a tangible tool that's revolutionizing industries, and web development is no exception. In this article, we delve into the profound impact of AI on how we build, deploy, and interact with websites and applications.</p>
      
      <p class="my-4">One of the most significant advancements is in the realm of automated code generation. AI-powered tools can now write boilerplate code, suggest bug fixes, and even complete complex algorithms based on natural language descriptions. This frees up developers to focus on higher-level architectural decisions and creative problem-solving.</p>
      
      <h3 class="text-xl font-bold my-4">Personalization at Scale</h3>
      <p>AI also enables unprecedented levels of personalization. By analyzing user behavior, AI algorithms can dynamically adjust content, layouts, and recommendations to suit individual preferences. This leads to more engaging and effective user experiences, boosting metrics from session duration to conversion rates.</p>

      <div class="my-6 p-4 border-l-4 border-primary bg-secondary rounded-r-lg">
        <p class="font-semibold italic">"AI will not replace developers, but developers who use AI will replace those who don't."</p>
      </div>

      <p>The integration of AI into development workflows is still in its early stages, but its potential is undeniable. As the technology matures, we can expect to see even more sophisticated applications that will continue to push the boundaries of what's possible on the web.</p>
    `,
    ...findImage('article-1'),
    date: subDays(new Date(), 1).toISOString(),
    authorId: 'author-1',
    categoryId: 'cat-1',
    tags: ['AI', 'Web Development', 'Future Tech'],
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 'article-2',
    slug: 'top-5-gadgets-of-the-year',
    title: 'Top 5 Must-Have Gadgets of the Year',
    description: 'Our annual roundup of the most innovative and exciting gadgets that are changing the way we live, work, and play.',
    content: '<p>Every year brings a new wave of innovation, and this year is no different. We\'ve tested and reviewed countless devices to bring you our definitive list of the top 5 gadgets you need to check out. From smart home assistants to portable powerhouses, these are the devices that stand out from the crowd.</p>',
    ...findImage('article-2'),
    date: subDays(new Date(), 2).toISOString(),
    authorId: 'author-2',
    categoryId: 'cat-3',
    tags: ['Gadgets', 'Review', 'Top 5'],
    isFeatured: false,
    isPopular: true,
  },
  {
    id: 'article-3',
    slug: 'remote-work-is-here-to-stay',
    title: 'Why Remote Work is More Than a Trend',
    description: 'The pandemic may have accelerated its adoption, but remote work is proving to be a permanent fixture in the modern economy. We explore the benefits and challenges.',
    content: '<p>The shift to remote work has been one of the most significant workplace transformations in a century. What started as a temporary measure has evolved into a preferred working model for millions. This article examines the lasting impact of remote work on productivity, company culture, and the urban landscape.</p>',
    ...findImage('article-3'),
    date: subDays(new Date(), 3).toISOString(),
    authorId: 'author-1',
    categoryId: 'cat-2',
    tags: ['Remote Work', 'Productivity', 'Future of Work'],
    isFeatured: false,
    isPopular: false,
  },
  {
    id: 'article-4',
    slug: 'navigating-the-new-social-media-landscape',
    title: 'Navigating the New Social Media Landscape',
    description: 'With the rise of new platforms and the evolution of existing ones, the world of social media is in constant flux. Here\'s how to stay ahead.',
    content: '<p>From TikTok\'s dominance to the rise of decentralized social networks, the way we connect and share online is changing. This guide will help you understand the latest trends and develop a social media strategy that works in today\'s fast-paced environment.</p>',
    ...findImage('article-4'),
    date: subDays(new Date(), 5).toISOString(),
    authorId: 'author-3',
    categoryId: 'cat-2',
    tags: ['Social Media', 'Marketing', 'Trends'],
    isFeatured: false,
    isPopular: true,
  },
  {
    id: 'article-5',
    slug: 'virtual-reality-the-next-computing-platform',
    title: 'Virtual Reality: The Next Computing Platform?',
    description: 'VR has long been promised as the future. With recent hardware and software advancements, is it finally ready for mainstream adoption?',
    content: '<p>Virtual Reality (VR) is on the cusp of becoming the next major computing platform, following in the footsteps of PCs and smartphones. We look at the latest headsets, applications, and the development of the metaverse to determine if VR is finally ready for prime time.</p>',
    ...findImage('article-5'),
    date: subDays(new Date(), 7).toISOString(),
    authorId: 'author-2',
    categoryId: 'cat-1',
    tags: ['VR', 'Virtual Reality', 'Metaverse'],
    isFeatured: false,
    isPopular: false,
  },
  {
    id: 'article-6',
    slug: 'the-ultimate-guide-to-smart-home-devices',
    title: 'The Ultimate Guide to Smart Home Devices',
    description: 'Transform your living space with the latest smart home technology. Our comprehensive guide covers everything from lighting and security to entertainment.',
    content: '<p>Building a smart home can be daunting. This guide breaks down the ecosystem of devices, platforms, and protocols to help you create a connected home that is both intelligent and intuitive. We cover the best products in every category to get you started.</p>',
    ...findImage('article-6'),
    date: subDays(new Date(), 10).toISOString(),
    authorId: 'author-1',
    categoryId: 'cat-3',
    tags: ['Smart Home', 'IoT', 'Gadgets'],
    isFeatured: false,
    isPopular: true,
  },
  {
    id: 'article-7',
    slug: 'understanding-large-language-models',
    title: 'A Non-Technical Guide to Large Language Models',
    description: 'You\'ve heard of them, but what are they? We break down the core concepts behind Large Language Models (LLMs) like GPT in an easy-to-understand way.',
    content: '<p>Large Language Models, or LLMs, are the technology behind chatbots and other AI marvels. This article demystifies how they work, what they are capable of, and the ethical considerations surrounding their use, all without the complex jargon.</p>',
    ...findImage('article-7'),
    date: subDays(new Date(), 12).toISOString(),
    authorId: 'author-3',
    categoryId: 'cat-1',
    tags: ['AI', 'LLM', 'Tech Explained'],
    isFeatured: false,
    isPopular: false,
  },
  {
    id: 'article-8',
    slug: 'general-news-update',
    title: 'General News Update: Market Trends and Analysis',
    description: 'A look at the latest news and events shaping the world, with a focus on market trends and economic analysis.',
    content: '<p>This is a general news update covering recent developments. Content is brief for demonstration purposes.</p>',
    ...findImage('article-8'),
    date: subDays(new Date(), 15).toISOString(),
    authorId: 'author-2',
    categoryId: 'cat-4',
    tags: ['News', 'Markets'],
    isFeatured: false,
    isPopular: false,
  },
];

// --- Data Access Functions ---

export async function getArticles(options: { limit?: number; category?: string; query?: string } = {}) {
  let filteredArticles = [...articles];

  if (options.category) {
    const category = categories.find(c => c.slug === options.category);
    if (category) {
      filteredArticles = filteredArticles.filter(a => a.categoryId === category.id);
    } else {
      return []; // No articles if category doesn't exist
    }
  }

  if (options.query) {
    const lowercasedQuery = options.query.toLowerCase();
    filteredArticles = filteredArticles.filter(
      a =>
        a.title.toLowerCase().includes(lowercasedQuery) ||
        a.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery))
    );
  }
  
  filteredArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (options.limit) {
    return filteredArticles.slice(0, options.limit);
  }

  return filteredArticles;
}

export async function getArticle(slug: string) {
  return articles.find(article => article.slug === slug) ?? null;
}

export async function getPopularArticles(options: { limit?: number } = {}) {
  let popular = articles.filter(a => a.isPopular);
  popular.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  if (options.limit) {
    return popular.slice(0, options.limit);
  }
  return popular;
}

export async function getCategories() {
  return [...categories];
}

export async function getCategory(slug: string) {
  return categories.find(category => category.slug === slug) ?? null;
}


export async function getAuthor(id: string) {
  return authors.find(author => author.id === id) ?? null;
}

// --- Admin Functions (Simulated) ---

export async function createArticle(data: Omit<Article, 'id' | 'date' | 'isFeatured' | 'isPopular'> & { id?: string }) {
  const newArticle: Article = {
    ...data,
    id: `article-${Date.now()}`,
    date: new Date().toISOString(),
    isFeatured: false,
    isPopular: false,
  };
  articles.unshift(newArticle);
  return newArticle;
}

export async function updateArticle(slug: string, data: Partial<Article>) {
  const articleIndex = articles.findIndex(a => a.slug === slug);
  if (articleIndex === -1) {
    return null;
  }
  articles[articleIndex] = { ...articles[articleIndex], ...data };
  return articles[articleIndex];
}

export async function deleteArticle(slug: string) {
  const articleIndex = articles.findIndex(a => a.slug === slug);
  if (articleIndex > -1) {
    articles.splice(articleIndex, 1);
    return true;
  }
  return false;
}
