import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MessageSquare, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us - Newsio',
  description: 'Get in touch with the Newsio team. We welcome news tips, press inquiries, feedback, and questions about our tech news coverage.',
  keywords: ['contact newsio', 'tech news contact', 'press inquiries', 'submit news tip', 'technology journalism contact'],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us - Newsio',
    description: 'Get in touch with the Newsio team. We welcome news tips, press inquiries, feedback, and questions about our tech news coverage.',
    url: 'https://www.newsio.space/contact',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Newsio',
    description: 'Get in touch with the Newsio team. We welcome news tips, press inquiries, feedback, and questions about our tech news coverage.',
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tighter md:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a story idea, a question, or some feedback? We'd love to hear from you.
        </p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <Mail className="h-6 w-6 text-primary" />
            <span className="text-2xl">Send us a Message</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="e.g., Story Idea for Tech Section" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message here..." required className="min-h-[150px]" />
            </div>
            <div className="flex justify-end">
              <Button type="submit">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

       <div className="mt-12 text-center text-muted-foreground">
            <p>You can also reach us via email at <a href="mailto:contact@newsio.com" className="font-semibold text-primary hover:underline">contact@newsio.com</a>.</p>
        </div>
    </div>
  );
}
