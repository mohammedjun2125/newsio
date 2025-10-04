import type { Article, Category, Author } from '@/lib/types';
import { subDays } from 'date-fns';

export const authors: Author[] = [
  { id: 'author-1', name: 'Jane Doe', avatarUrl: 'https://picsum.photos/seed/jane-doe/100/100' },
  { id: 'author-2', name: 'John Smith', avatarUrl: 'https://picsum.photos/seed/john-smith/100/100' },
  { id: 'author-3', name: 'Alex Ray', avatarUrl: 'https://picsum.photos/seed/alex-ray/100/100' },
];

export const categories: Category[] = [
  { id: 'cat-1', slug: 'finance-money', name: 'Finance & Money' },
  { id: 'cat-2', slug: 'insurance-legal', name: 'Insurance & Legal' },
  { id: 'cat-3', slug: 'technology-ai-tools', name: 'Technology & AI Tools' },
  { id: 'cat-4', slug: 'health-wellness', name: 'Health & Wellness' },
];

let articles: Article[] = [
  {
    id: 'article-4',
    slug: 'ai-in-insurance-legal-challenges-2025',
    title: 'Navigating the Intersection of AI and Insurance Law in 2025: Opportunities, Challenges, and Legal Insights',
    description: 'Explore how AI is transforming insurance in 2025, the legal challenges it introduces, and strategies insurers and policyholders can adopt to stay compliant and safe.',
    content: `
        <p class="mb-6 text-lg">Artificial Intelligence (AI) has moved beyond buzzwords to become a central component of the modern insurance industry. By 2025, insurers worldwide are leveraging AI to streamline operations, reduce costs, and improve customer experiences. From automated underwriting and claims processing to risk assessment and fraud detection, AI systems are increasingly handling tasks that were traditionally manual and labor-intensive.</p>
        <p class="mb-6 text-lg">Yet, with innovation comes responsibility. The legal and regulatory landscape is rapidly adapting to these technological advances, as AI introduces complex legal challenges related to liability, data privacy, fairness, and compliance. Insurers, legal professionals, and policyholders must navigate this new environment carefully to mitigate risks and ensure ethical, lawful AI usage.</p>
        <p class="mb-6 text-lg">In this article, we will explore the latest trends in AI insurance, the legal implications, and practical strategies to stay compliant in 2025.</p>
        
        <img src="https://picsum.photos/seed/ai-law-concept/800/450" alt="An abstract image representing AI and legal concepts, like a digital gavel" class="my-8 rounded-lg shadow-md" data-ai-hint="ai law" />

        <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">The Rise of AI in Insurance</h2>
        <p class="mb-6">AI’s penetration in insurance is significant and multi-dimensional. Here’s how it is shaping the industry:</p>
        
        <h3 class="text-2xl font-bold mt-8 mb-4">1. Automated Underwriting</h3>
        <p class="mb-4">Traditionally, underwriting was a labor-intensive process, involving manual review of applications, credit history, medical reports, and financial data. AI systems can now:</p>
        <ul class="list-disc list-inside space-y-3 mb-6">
            <li>Evaluate risks in seconds using machine learning algorithms.</li>
            <li>Analyze large datasets from multiple sources, including social media, wearable devices, and IoT sensors.</li>
            <li>Recommend personalized premium rates for individual policyholders.</li>
        </ul>
        <p class="mb-6"><strong>Example:</strong> Some life insurance companies in the US are using AI to analyze fitness tracker data and lifestyle choices to determine premiums more accurately than traditional actuarial tables.</p>
        
        <h3 class="text-2xl font-bold mt-8 mb-4">2. Claims Processing</h3>
        <p class="mb-4">AI accelerates claims settlement by:</p>
        <ul class="list-disc list-inside space-y-3 mb-6">
            <li>Automatically verifying documents and photos submitted by policyholders.</li>
            <li>Detecting fraudulent claims using anomaly detection models.</li>
            <li>Using natural language processing (NLP) to review claim forms and customer statements.</li>
        </ul>
        <p class="mb-6"><strong>Example:</strong> In auto insurance, AI-powered systems can assess accident photos to estimate damage and approve claims within hours instead of weeks.</p>
        
        <img src="https://picsum.photos/seed/data-privacy-security/800/450" alt="A padlock on a computer screen symbolizing data privacy and security" class="my-8 rounded-lg shadow-md" data-ai-hint="data privacy" />

        <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">Legal Implications of AI in Insurance</h2>
        <p class="mb-6">While AI creates efficiency and cost savings, it also introduces legal challenges. These legal considerations are now becoming a top priority for insurers globally.</p>

        <h3 class="text-2xl font-bold mt-8 mb-4">1. Data Privacy and Security</h3>
        <p class="mb-4">AI systems rely heavily on data. Large-scale data collection and processing create privacy risks:</p>
        <ul class="list-disc list-inside space-y-3 mb-6">
            <li><strong>Data breaches:</strong> Cyberattacks can expose sensitive personal information.</li>
            <li><strong>Regulatory compliance:</strong> Companies must adhere to GDPR, CCPA, HIPAA, and emerging AI-specific regulations.</li>
            <li><strong>Third-party data risks:</strong> Insurers must ensure that AI systems do not misuse or store data improperly from external sources.</li>
        </ul>
        <p class="mb-6"><strong>Example:</strong> A UK insurer using AI to process health data from wearable devices must comply with GDPR’s strict consent and transparency rules.</p>
        
        <h3 class="text-2xl font-bold mt-8 mb-4">2. Liability Issues</h3>
        <p class="mb-4">AI-driven decisions complicate the determination of legal liability:</p>
        <ul class="list-disc list-inside space-y-3 mb-6">
            <li>Who is responsible when an AI miscalculates a risk or denies a claim incorrectly?</li>
            <li>How do courts attribute accountability when AI operates autonomously?</li>
            <li>Can insurance contracts include liability waivers for AI mistakes?</li>
        </ul>
        <p class="mb-6"><strong>Example:</strong> A chatbot denying a life insurance claim due to AI misinterpretation may open the company to legal action.</p>

        <h3 class="text-2xl font-bold mt-8 mb-4">3. Bias and Fairness</h3>
        <p class="mb-4">AI algorithms can perpetuate biases present in the data they are trained on:</p>
        <ul class="list-disc list-inside space-y-3 mb-6">
            <li>Risk of discriminatory practices against protected groups.</li>
            <li>Potential violations of anti-discrimination and consumer protection laws.</li>
            <li>Legal scrutiny over algorithmic transparency.</li>
        </ul>
        <p class="mb-6"><strong>Example:</strong> An AI underwriting system that unintentionally charges higher premiums to minorities could lead to lawsuits under US Equal Credit Opportunity Act provisions.</p>
        
        <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">Humanizing AI in Insurance: Balancing Tech and Trust</h2>
        <p class="mb-6">AI cannot replace human judgment entirely, especially in insurance. Customer trust is critical, and humans must oversee AI decisions to prevent mistakes. Human-in-the-loop systems allow humans to intervene when AI identifies ambiguous cases. Policyholders should understand AI’s role in decision-making through education and transparency.</p>
        <p class="mb-6"><strong>Example:</strong> AI may recommend claim approval, but a human adjuster reviews high-value claims before finalizing payment.</p>
        
        <div class="mt-12 p-6 bg-muted dark:bg-muted/20 rounded-lg">
            <h3 class="text-2xl font-bold mb-2">Conclusion: Embrace AI Responsibly</h3>
            <p>AI is transforming insurance in 2025, offering incredible efficiency and predictive capabilities. However, it also introduces legal complexities that require careful management. Data privacy, liability, bias, and IP concerns must be addressed proactively. By balancing technology with legal safeguards, insurers can leverage AI’s full potential while protecting themselves and their clients from legal pitfalls.</p>
            <p class="mt-4"><strong>The key takeaway for 2025: AI is powerful, but responsible implementation is what separates innovators from legal risk-takers.</strong></p>
        </div>
    `,
    imageUrl: 'https://picsum.photos/seed/ai-insurance/800/600',
    imageHint: 'ai insurance',
    date: new Date().toISOString(),
    authorId: 'author-3',
    categoryId: 'cat-2',
    tags: [
        'AI in insurance 2025', 'insurance law and AI', 'legal challenges in AI insurance', 'AI liability insurance', 
        'insurtech legal issues', 'AI compliance insurance', 'data privacy in insurance', 'algorithmic bias insurance', 
        'AI claims processing legal', 'explainable AI insurance', 'how AI affects insurance law in 2025', 
        'legal implications of AI in underwriting', 'AI insurance compliance best practices', 'ethical AI in insurance', 
        'AI risk management in insurance'
    ],
    isFeatured: false,
    isPopular: true,
  },
  {
    id: 'article-1',
    slug: 'rising-interest-mortgage-rates-2025',
    title: 'How Rising Interest and Mortgage Rates Are Affecting Borrowers Globally in 2025',
    description: 'In 2025, rising interest and mortgage rates are reshaping the borrowing landscape. Discover how rates are changing, what borrowers can do, and what’s next.',
    content: `
        <p class="mb-6 text-lg">In 2025, the financial world is grappling with a new reality: the era of cheap money is over. After years of historically low borrowing costs, a perfect storm of persistent inflation, fractured supply chains, and global economic uncertainty has forced central banks to take decisive action. The result? A worldwide surge in <strong>interest rates</strong> that is sending ripples through every corner of the economy, creating a challenging environment for anyone with a loan.</p>
        <p class="mb-6 text-lg">For millions, this isn't just a headline—it's a real-world squeeze on household budgets. From first-time homebuyers in the United States facing daunting mortgage payments to small businesses in the UK struggling with loan affordability, the impact is profound and personal. This environment of <strong>rising interest rates</strong> is forcing a re-evaluation of major life decisions: Is now a good time to buy a house? Should I take on new debt? How can I best position my finances for the road ahead?</p>
        
        <img src="https://picsum.photos/seed/rates-chart/800/450" alt="A financial chart showing a steep upward trend, symbolizing rising interest rates" class="my-8 rounded-lg shadow-md" data-ai-hint="finance chart" />

        <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">What’s Driving the Surge in Global Interest Rates?</h2>
        <p class="mb-6">The current high-rate environment is not a random event but the result of several powerful, interconnected economic factors. Understanding <strong>why mortgage rates are rising</strong> is the first step to navigating them.</p>
        <ul class="list-disc list-inside space-y-4 mb-6 text-lg">
            <li><strong>Stubborn Inflation:</strong> Despite aggressive monetary policy, inflation in many nations remains stubbornly above the 2% target set by central banks. The escalating costs of essentials like energy, food, and housing continue to fuel the Consumer Price Index (CPI).</li>
            <li><strong>Robust Labor Markets:</strong> Unusually low unemployment and widespread labor shortages have led to significant wage growth. While beneficial for workers, this feeds into higher consumer spending and inflation.</li>
        </ul>
        
        <img src="https://picsum.photos/seed/personal-finance-planning/800/450" alt="A person sitting at a desk with a calculator and documents, planning their personal finances" class="my-8 rounded-lg shadow-md" data-ai-hint="personal finance" />

        <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">The Impact on Borrowers: A Tale of Two Markets (US & UK)</h2>
        <p class="mb-6">In the US, the path to homeownership has become significantly steeper. The <strong>current mortgage rates</strong> are at levels unseen for over a decade. In the UK, homeowners whose fixed-rate deals are expiring are facing a significant "payment shock" as they are forced to remortgage at much higher rates.</p>

        <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">Smart Strategies for a High-Rate World</h2>
        <p class="mb-6">Even in this tough environment, proactive borrowers have options. Here are some effective strategies to manage the impact of higher rates:</p>
        <ol class="list-decimal list-inside space-y-4 mb-6 text-lg">
          <li><strong>Become a Calculator Pro:</strong> Before making any moves, use a <strong>loan refinance calculator</strong> to understand the total interest cost.</li>
          <li><strong>Shop Around Aggressively:</strong> Don’t accept the first offer from your current bank. Compare rates from traditional banks, credit unions, and online fintech lenders.</li>
          <li><strong>Boost Your Credit Score:</strong> A higher credit score is your golden ticket to better rates. Focus on paying down debt and ensuring timely payments.</li>
        </ol>
        `,
    imageUrl: 'https://picsum.photos/seed/house-keys-loan/800/600',
    imageHint: 'house keys',
    date: subDays(new Date(), 1).toISOString(),
    authorId: 'author-1',
    categoryId: 'cat-1',
    tags: ['mortgage rates 2025', 'rising interest rates', 'global interest rates', 'loan interest rates', 'refinance loans', 'home equity loans', 'current mortgage rates', 'best mortgage rates', 'personal loan rates'],
    isFeatured: true,
    isPopular: true,
  },
  {
    id: 'article-2',
    slug: 'student-loan-forgiveness-backlog-2025',
    title: 'Student Loan Forgiveness Backlog & Policy Shake-Ups: What Borrowers Need to Know in 2025',
    description: 'Confused about US student loan forgiveness in 2025? Learn about backlogs, new policy shifts, tax deadlines, and what steps borrowers should take right now.',
    content: `
      <p class="mb-6 text-lg">It’s 2025, and the topic of <strong>student loan forgiveness</strong> is once again a source of both hope and confusion for millions of Americans. Anxious borrowers are glued to news from the Department of Education, caught in a complex web of program backlogs, new court rulings, and administrative delays. For the 40+ million people holding federal student debt, this year is pivotal—especially with a crucial tax exemption set to expire.</p>
      
      <img src="https://picsum.photos/seed/financial-stress-docs/800/450" alt="A person looking stressed while reviewing documents, symbolizing the confusion around student loans" class="my-8 rounded-lg shadow-md" data-ai-hint="financial stress" />

      <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">The Heart of the Problem: A System Overwhelmed by Backlogs</h2>
      <p class="mb-6">While the government has resumed processing forgiveness applications, the system is straining under the weight of a massive <strong>student loan forgiveness backlog</strong>. Tens of thousands of applications for Public Service Loan Forgiveness (PSLF) are stuck in review, and Income-Driven Repayment (IDR) programs are plagued by verification bottlenecks.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">Major Policy Shake-Ups: What Every Borrower Needs to Know</h2>
      <ul class="list-disc list-inside space-y-4 mb-6 text-lg">
        <li><strong>SAVE Plan in Limbo:</strong> The popular Saving on a Valuable Education (SAVE) plan, designed to lower monthly payments, has been challenged in court.</li>
        <li><strong>The Looming Tax Bomb:</strong> A critical deadline is fast approaching: December 31, 2025. Currently, forgiven student debt is not taxed at the federal level. If this <strong>student loan tax exemption 2025</strong> expires, any debt forgiven in 2026 and beyond could be considered taxable income.</li>
      </ul>

      <img src="https://picsum.photos/seed/deadline-calendar/800/450" alt="A calendar with December 31st circled, symbolizing the tax exemption deadline" class="my-8 rounded-lg shadow-md" data-ai-hint="deadline date" />
      
      <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">Your Action Plan: 5 Steps to Take Today</h2>
      <p class="mb-6">With so much uncertainty, being proactive is your best strategy. Here’s what every borrower should do immediately:</p>
      <ol class="list-decimal list-inside space-y-4 mb-6 text-lg">
        <li><strong>Confirm Your Eligibility and Plan:</strong> Visit the official StudentAid.gov website and use their Loan Simulator tool.</li>
        <li><strong>Certify, Certify, Certify:</strong> If you are pursuing Public Service Loan Forgiveness, you must regularly submit your employer certification forms.</li>
        <li><strong>Become Your Own Archivist:</strong> Keep meticulous records of everything—payment confirmations, correspondence, and application submission receipts.</li>
      </ol>
    `,
    imageUrl: 'https://picsum.photos/seed/graduation-cap/800/600',
    imageHint: 'graduation cap',
    date: subDays(new Date(), 2).toISOString(),
    authorId: 'author-2',
    categoryId: 'cat-1',
    tags: [
        'student loan forgiveness 2025', 
        'PSLF backlog 2025', 
        'SAVE plan student loans', 
        'student loan forgiveness update', 
        'US student loan policy changes', 
        'Income-Based Repayment forgiveness',
    ],
    isFeatured: false,
    isPopular: true,
  },
  {
    id: 'article-3',
    slug: 'us-liability-insurance-crisis-2025',
    title: 'Why US Liability Insurance is Facing a Breakdown: Legal Trends & What Businesses Must Do in 2025',
    description: 'Liability insurance premiums are soaring amid legal inflation and swelling claims. Learn what’s causing the breakdown in US liability insurance and how businesses can protect themselves in 2025.',
    content: `
      <p class="mb-6 text-lg">In 2025, business owners across the United States are waking up to a harsh new reality. The safety net they’ve always relied on—liability insurance—is fraying. What was once a predictable, routine expense has morphed into a significant source of financial strain, leaving companies feeling exposed and vulnerable. This isn't just a minor market fluctuation; many experts are calling it a full-blown <strong>liability insurance crisis in the USA</strong>.</p>

      <img src="https://picsum.photos/seed/legal-justice-gavel/800/450" alt="A gavel and law books symbolizing the legal challenges in insurance" class="my-8 rounded-lg shadow-md" data-ai-hint="legal justice" />

      <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">What’s Driving the Liability Insurance Breakdown?</h2>
      <p class="mb-4">The most significant factor is arguably <strong>social inflation in insurance</strong>. This isn’t the kind of inflation you see at the gas pump; it’s the rising cost of insurance claims driven by societal trends. This includes massive jury awards, eroding tort reform, and aggressive plaintiff attorneys.</p>
      <p class="mb-4">Another powerful accelerant is the rise of third-party litigation funding. This is an industry where hedge funds and private investors provide capital to law firms to finance lawsuits in exchange for a substantial cut of the settlement. The <strong>litigation funding effect on premiums</strong> is profound.</p>
      
      <img src="https://picsum.photos/seed/risk-storm/800/450" alt="An abstract image of a stormy sea, representing risk and uncertainty" class="my-8 rounded-lg shadow-md" data-ai-hint="risk uncertainty" />

      <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">Your Proactive Defense: How Businesses Can Navigate the Crisis</h2>
      <p class="mb-6">While the market is challenging, businesses are not powerless. Taking a proactive stance can make a significant difference. Here’s <strong>how businesses deal with liability insurance legal risk</strong>:</p>
      <div class="space-y-6">
        <div>
          <h4 class="font-bold text-xl">1. Conduct a Thorough Policy Review</h4>
          <p>Don't just auto-renew. Sit down with your broker and scrutinize your existing policies. Look for new <strong>liability insurance coverage exclusions to watch</strong>. Do you have gaps in areas like cyber liability or ESG-related claims?</p>
        </div>
        <div>
          <h4 class="font-bold text-xl">2. Double Down on Risk Management</h4>
          <p>This is the most effective way to <strong>how to reduce liability insurance costs</strong>. Insurers are far more willing to work with businesses that can demonstrate a strong commitment to safety and loss prevention.</p>
        </div>
        <div>
          <h4 class="font-bold text-xl">3. Partner with Specialized Experts</h4>
          <p>Your general insurance broker may not have the expertise to navigate this complex market. Seek out specialists who understand your industry's unique risks.</p>
        </div>
      </div>
    `,
    imageUrl: 'https://picsum.photos/seed/scales-of-justice/800/600',
    imageHint: 'scales justice',
    date: subDays(new Date(), 3).toISOString(),
    authorId: 'author-3',
    categoryId: 'cat-2',
    tags: [
      'liability insurance crisis USA',
      'rising liability insurance premiums',
      'social inflation insurance',
      'legal costs in insurance claims',
      'commercial liability insurance US',
      'tort reform 2025 USA',
    ],
    isFeatured: false,
    isPopular: true,
  }
];

// --- Data Access Functions ---

export async function getArticles(options: { limit?: number; category?: string; query?: string } = {}) {
  let filteredArticles = [...articles];

  if (options.category) {
    const category = categories.find(c => c.slug.toLowerCase() === options.category?.toLowerCase());
    if (category) {
      filteredArticles = filteredArticles.filter(a => a.categoryId === category.id);
    } else {
      // If the category doesn't exist, return no articles for that category page
      return [];
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
  try {
    const decodedSlug = decodeURIComponent(slug);
    return articles.find(article => article.slug.toLowerCase() === decodedSlug.toLowerCase()) ?? null;
  } catch (e) {
    console.error("Error decoding slug:", e);
    return null;
  }
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
  try {
    const decodedSlug = decodeURIComponent(slug);
    return categories.find(category => category.slug.toLowerCase() === decodedSlug.toLowerCase()) ?? null;
  } catch (e) {
    console.error("Error decoding slug:", e);
    return null;
  }
}

export async function getAuthor(id: string) {
  return authors.find(author => author.id === id) ?? null;
}

export async function getAuthors() {
  return [...authors];
}

// --- Data Mutation Functions ---

export async function createArticle(articleData: Omit<Article, 'id' | 'date' | 'isFeatured' | 'isPopular'>) {
    const newArticle: Article = {
        ...articleData,
        id: `article-${Date.now()}`,
        date: new Date().toISOString(),
        imageUrl: `https://picsum.photos/seed/${articleData.slug}/800/600`,
        imageHint: articleData.tags[0] || 'article image',
        isFeatured: false,
        isPopular: false,
    };
    articles.unshift(newArticle);
    return newArticle;
}

export async function updateArticle(slug: string, articleData: Partial<Article>) {
    const articleIndex = articles.findIndex(a => a.slug === slug);
    if (articleIndex === -1) {
        throw new Error("Article not found");
    }
    articles[articleIndex] = { ...articles[articleIndex], ...articleData };
    return articles[articleIndex];
}

export async function deleteArticle(slug: string) {
    const initialLength = articles.length;
    articles = articles.filter(a => a.slug !== slug);
    return articles.length < initialLength;
}
