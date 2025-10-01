import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SiteWrapper } from '@/components/site-wrapper';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: {
    default: 'Newsio - Your Daily Tech News',
    template: '%s | Newsio',
  },
  description: 'The latest articles in tech, AI, gadgets, and trending topics. Your essential source for technology news, reviews, and analysis.',
  keywords: ['tech news', 'latest technology', 'AI', 'gadgets', 'reviews', 'trending tech', 'science news'],
  openGraph: {
    title: 'Newsio - Your Daily Tech News',
    description: 'The latest articles in tech, AI, gadgets, and trending topics.',
    url: 'https://newsio.com', // Replace with your actual domain
    siteName: 'Newsio',
    images: [
      {
        url: 'https://newsio.com/og-image.jpg', // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Newsio - Tech News and Analysis',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Newsio - Your Daily Tech News',
    description: 'The latest articles in tech, AI, gadgets, and trending topics.',
    // creator: '@yourtwitterhandle', // Replace with your Twitter handle
    images: ['https://newsio.com/twitter-image.jpg'], // Replace with your actual Twitter image URL
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <SiteWrapper
          header={<Header />}
          footer={<Footer />}
        >
          {children}
        </SiteWrapper>
        <Toaster />
      </body>
    </html>
  );
}
