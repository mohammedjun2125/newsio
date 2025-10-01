import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Newspaper, Target, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Newsio | Your Premier Tech News Source',
  description: 'Learn about Newsio, our mission, and the team dedicated to bringing you the latest in tech, AI, gadgets, and trending news with expert analysis and insights.',
  keywords: ['about us', 'tech news', 'technology journalism', 'expert analysis', 'AI news'],
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tighter md:text-5xl">
          About Newsio
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Your daily source for the latest in tech, gadgets, and breaking news.
        </p>
      </header>

      <div className="space-y-12">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Target className="h-8 w-8 text-primary" />
              <span className="text-3xl">Our Mission</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <p>
              In a world overflowing with information, Newsio stands as a beacon for clarity, accuracy, and insight in the tech world. Our mission is to demystify technology and empower our readers with the knowledge they need to navigate the future. We are committed to delivering timely, well-researched, and engaging content that goes beyond the headlines.
            </p>
            <p>
              From in-depth analyses of emerging AI trends to unbiased reviews of the latest gadgets, we strive to be your most trusted partner in understanding the forces that shape our digital lives.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Users className="h-8 w-8 text-primary" />
              <span className="text-3xl">Our Team</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <p>
              Newsio is powered by a diverse team of passionate journalists, seasoned tech experts, and data analysts. Our contributors are deeply embedded in the tech community, bringing years of experience and a critical eye to every story. We believe in the power of expert voices and are dedicated to providing you with perspectives that are both authoritative and accessible.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Newspaper className="h-8 w-8 text-primary" />
              <span className="text-3xl">Our Content</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <p>
              We cover a wide spectrum of topics within the technology landscape, including:
            </p>
            <ul>
              <li><strong>Artificial Intelligence:</strong> The latest breakthroughs, ethical discussions, and practical applications.</li>
              <li><strong>Gadgets & Hardware:</strong> Honest reviews, buying guides, and news on the devices you love.</li>
              <li><strong>Trending News:</strong> The biggest stories in the tech industry, delivered with speed and context.</li>
              <li><strong>Future Tech:</strong> Explorations into the innovations that will define tomorrow, from quantum computing to the metaverse.</li>
            </ul>
            <p>
              Join us on this journey as we explore the ever-evolving world of technology together.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
