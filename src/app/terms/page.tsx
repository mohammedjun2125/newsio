import type { Metadata } from 'next';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Terms of Service - Newsio',
  description: 'Review the Terms of Service for using the Newsio website. Understand your rights and responsibilities when accessing our content and services.',
  keywords: ['terms of service', 'user agreement', 'website terms', 'conditions of use'],
};

export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tighter md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </header>

      <Card>
        <CardContent className="prose prose-lg max-w-none pt-6 dark:prose-invert">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using our website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you may not access the service.
          </p>

          <h2>2. Content</h2>
          <p>
            Our service allows you to read and share articles and other content. The content found on or through this service is the property of Newsio or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            The service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Newsio and its licensors.
          </p>

          <h2>4. Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by Newsio. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services.
          </p>
          
          <h2>5. Limitation Of Liability</h2>
          <p>
            In no event shall Newsio, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
          </p>

          <h2>6. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the company is based, without regard to its conflict of law provisions.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at contact@newsio.com.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
