import type { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Disclaimer - Newsio',
  description: 'Official disclaimer for Newsio. Understand the limitations of liability, accuracy of information, external links, and professional advice policy.',
  alternates: {
    canonical: '/disclaimer',
  },
  openGraph: {
    title: 'Disclaimer - Newsio',
    description: 'Official disclaimer for Newsio. Understand the limitations of liability, accuracy of information, external links, and professional advice policy.',
    url: 'https://www.newsio.space/disclaimer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Disclaimer - Newsio',
    description: 'Official disclaimer for Newsio. Understand the limitations of liability, accuracy of information, external links, and professional advice policy.',
  },
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <header className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-extrabold tracking-tighter md:text-5xl">
          Disclaimer
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </header>

      <Card>
        <CardContent className="prose prose-lg max-w-none pt-6 dark:prose-invert">
            <p>
              The information provided by Newsio ("we," "us," or "our") on this website is for general informational purposes only. All information on the site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
            </p>

            <h2>External Links Disclaimer</h2>
            <p>
              The site may contain (or you may be sent through the site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </p>

            <h2>Professional Disclaimer</h2>
            <p>
              The site cannot and does not contain financial or investment advice. The information is provided for general informational and educational purposes only and is not a substitute for professional advice. Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of financial or investment advice.
            </p>
            
            <h2>Views Expressed Disclaimer</h2>
            <p>
              The views and opinions expressed on this site are those of the authors and do not necessarily reflect the official policy or position of any other agency, organization, employer, or company.
            </p>

            <h2>Errors and Omissions Disclaimer</h2>
            <p>
              While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Newsio is not responsible for any errors or omissions or for the results obtained from the use of this information.
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
