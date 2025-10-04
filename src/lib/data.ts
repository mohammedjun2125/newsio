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
  { id: 'cat-1', slug: 'finance-money', name: 'Finance & Money' },
  { id: 'cat-2', slug: 'insurance-legal', name: 'Insurance & Legal' },
  { id: 'cat-3', slug: 'technology-ai-tools', name: 'Technology & AI Tools' },
  { id: 'cat-4', slug: 'health-wellness', name: 'Health & Wellness' },
];

let articles: Article[] = [
    {
    id: 'article-1',
    slug: 'rising-interest-mortgage-rates-2025',
    title: 'How Rising Interest and Mortgage Rates Are Affecting Borrowers Globally in 2025',
    description: 'In 2025, rising interest and mortgage rates are reshaping the borrowing landscape. Discover how rates are changing, what borrowers in the US, UK & internationally can do, and forecast what’s next.',
    content: `
        <p class="mb-6 text-lg">In 2025, the financial world is grappling with a new reality: the era of cheap money is over. After years of historically low borrowing costs, a perfect storm of persistent inflation, fractured supply chains, and global economic uncertainty has forced central banks to take decisive action. The result? A worldwide surge in <strong>interest rates</strong> that is sending ripples through every corner of the economy.</p>
        <p class="mb-6 text-lg">For millions, this isn't just a headline—it's a real-world squeeze on household budgets. From first-time homebuyers in the United States facing daunting mortgage payments to small businesses in the UK struggling with loan affordability, the impact is profound and personal. Major life decisions are being re-evaluated: Is it the right time to buy a house? Should I take on new debt? How can I best position my finances for the road ahead?</p>
        <p class="mb-6 text-lg">This article breaks down the complex forces driving the <strong>rising interest rates in 2025</strong>. We'll explore the real-world effects on borrowers in key markets, offer actionable strategies to navigate this challenging environment, and provide a forecast for what might come next.</p>
        
        <img src="${findImage('article-rates-2025-2').imageUrl}" alt="A chart showing rising interest rates" class="my-8 rounded-lg shadow-md" data-ai-hint="finance chart" />

        <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">What’s Driving the Surge in Global Interest Rates?</h2>
        <p class="mb-6">The current high-rate environment is not a random event but the result of several powerful, interconnected economic factors:</p>
        <ul class="list-disc list-inside space-y-4 mb-6 text-lg">
            <li><strong>Stubborn Inflation:</strong> Despite aggressive monetary policy, inflation in many nations remains stubbornly above central bank targets. The escalating costs of essentials like energy, food, and housing continue to fuel the Consumer Price Index (CPI), compelling institutions like the Federal Reserve and the Bank of England to maintain a firm, hawkish stance on <strong>central bank rates 2025</strong>.</li>
            <li><strong>Robust Labor Markets:</strong> Unusually low unemployment and widespread labor shortages have led to significant wage growth. While good for workers, this feeds into higher consumer spending and inflation, creating a challenging cycle for policymakers to break.</li>
            <li><strong>Supply Chain & Energy Volatility:</strong> Geopolitical tensions and unpredictable energy prices continue to disrupt global supply chains. These shocks create significant cost pressures that are inevitably passed on to consumers and businesses.</li>
            <li><strong>Lingering Post-Pandemic Demand:</strong> As economies fully reopened, a wave of pent-up demand for housing, goods, and services placed immense pressure on production capacity, contributing to the initial spike in prices that has been difficult to tame.</li>
        </ul>
        
        <img src="${findImage('article-rates-2025-3').imageUrl}" alt="A person reviewing their finances and mortgage documents" class="my-8 rounded-lg shadow-md" data-ai-hint="personal finance" />

        <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">The Impact on Borrowers: A Tale of Two Markets (US & UK)</h2>
        <p class="mb-6">The consequences of these <strong>global interest rates</strong> are being felt most acutely by everyday people. Let's examine the situation in the United States and the United Kingdom.</p>

        <h3 class="text-2xl font-bold mt-8 mb-4">The United States: The American Dream Gets More Expensive</h3>
        <p class="mb-4">In the US, the path to homeownership has become significantly steeper. The <strong>current mortgage rates</strong> are at levels unseen for over a decade, with the average 30-year fixed rate frequently crossing the 7% threshold. This translates to dramatically higher monthly payments, sidelining many aspiring buyers.</p>
        <ul class="list-disc list-inside space-y-3 mb-6">
            <li><strong>Refinancing Comes to a Halt:</strong> The once-booming market to <strong>refinance mortgage options</strong> has cooled. Homeowners who locked in rock-bottom rates are now staying put, leading to a sharp decline in refinancing activity.</li>
            <li><strong>Tapping into Home Equity:</strong> To access cash, many are turning to <strong>home equity loans</strong> or HELOCs. Leveraging home equity can still offer a lower interest rate compared to unsecured debt, making it a popular choice for funding renovations or consolidating high-interest credit card debt.</li>
            <li><strong>The Rising Cost of Personal Debt:</strong> Rates on personal loans and credit cards have also climbed, hitting borrowers with lower credit scores the hardest.</li>
        </ul>
        
        <h3 class="text-2xl font-bold mt-8 mb-4">The United Kingdom: Navigating the "Remortgage Shock"</h3>
        <p class="mb-4">Across the Atlantic, the Bank of England's series of base rate hikes has directly translated into higher <strong>mortgage rates UK</strong>. Homeowners whose fixed-rate deals are expiring are facing a significant "payment shock."</p>
         <ul class="list-disc list-inside space-y-3 mb-6">
            <li><strong>The Hunt for New Deals:</strong> Favorable remortgage rates are a memory. Borrowers are now scrambling to find the <strong>best mortgage rates</strong> available, often forced to accept much higher monthly outgoings.</li>
            <li><strong>A Higher Hurdle for First-Time Buyers:</strong> The barrier to entry for new buyers has risen. They face a double challenge: higher deposit requirements and stricter affordability checks from lenders.</li>
        </ul>
        
        <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">Smart Strategies for a High-Rate World</h2>
        <p class="mb-6">Even in this tough environment, proactive borrowers have options. Here are some effective strategies to manage the impact of higher rates:</p>
        <ol class="list-decimal list-inside space-y-4 mb-6 text-lg">
          <li><strong>Become a Calculator Pro:</strong> Before making any moves, use a <strong>loan refinance calculator</strong>. Understand the total interest cost and how different rates will affect your monthly budget. Knowledge is your best defense.</li>
          <li><strong>Shop Around Aggressively:</strong> Don’t accept the first offer you receive. Compare rates from traditional banks, credit unions, and online fintech lenders to find the <strong>best personal loan UK</strong> or US rates.</li>
          <li><strong>Lock In or Float? The Fixed vs. Variable Dilemma:</strong> The <strong>fixed vs variable mortgage</strong> decision is more critical than ever. If you value predictability and believe rates may rise further, locking in a fixed rate offers peace of mind.</li>
          <li><strong>Boost Your Credit Score:</strong> A higher credit score is your golden ticket to better rates. Focus on paying down debt, ensuring timely payments, and correcting any errors on your report to improve your <strong>credit score for loan approval</strong>.</li>
        </ol>

        <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">Mortgage Rate Forecast 2025 and Beyond: What's Next?</h2>
        <p class="mb-6">What can borrowers expect for the remainder of 2025 and into 2026? The consensus among economists is caution. Most central banks have signaled that significant rate cuts are off the table until inflation is firmly under control. While some analysts predict modest cuts in late 2025 or mid-2026, the <strong>global mortgage market forecast</strong> remains clouded by uncertainty. Housing demand is expected to continue its cooling trend, which may lead to increased competition among lenders and potentially more innovative loan products designed to attract well-qualified borrowers.</p>
        
        <div class="mt-12 p-6 bg-muted dark:bg-muted/20 rounded-lg">
            <h3 class="text-2xl font-bold mb-2">Take Control of Your Finances</h3>
            <p>The financial landscape is changing, but you don't have to navigate it alone. Subscribe to our newsletter for weekly insights on <strong>global loan and mortgage rate trends</strong>, expert tips for saving money, and the latest news that matters to your wallet.</p>
        </div>
        `,
    imageUrl: findImage('article-rates-2025').imageUrl,
    imageHint: findImage('article-rates-2025').imageHint,
    date: new Date().toISOString(),
    authorId: 'author-1',
    categoryId: 'cat-1',
    tags: ['mortgage rates 2025', 'rising interest rates', 'global interest rates', 'loan interest rates', 'refinance loans', 'home equity loans', 'mortgage rates USA', 'mortgage rates UK'],
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
      <p class="mb-6 text-lg">Whether you're in the <strong>PSLF backlog 2025</strong> or banking on the <strong>SAVE plan student loans</strong>, the path to relief feels more like a maze than a straight line. This guide will help you understand what's really happening, what's at stake, and what you need to do right now to protect your financial future.</p>
      
      <img src="${findImage('article-student-loan-2025-2').imageUrl}" alt="A person looking stressed while reviewing documents" class="my-8 rounded-lg shadow-md" data-ai-hint="financial stress" />

      <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">The Heart of the Problem: A System Overwhelmed</h2>
      <p class="mb-6">While the government has resumed processing forgiveness applications, the system is straining under the weight of a massive <strong>student loan forgiveness backlog</strong>. Tens of thousands of applications for Public Service Loan Forgiveness (PSLF) are stuck in review, and Income-Driven Repayment (IDR) programs are plagued by verification bottlenecks. Many who applied in early 2024 are now facing potential wait times extending into 2026, creating significant <strong>student loan forgiveness delays</strong>. Borrowers are strongly advised to document everything and frequently check their status on StudentAid.gov for the latest <strong>Department of Education updates</strong>.</p>
      
      <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">Major Policy Shake-Ups You Need to Know</h2>
      <p class="mb-6">The rules of the game are changing. Here are the biggest <strong>US student loan policy changes</strong> impacting borrowers:</p>
      <ul class="list-disc list-inside space-y-4 mb-6 text-lg">
        <li><strong>SAVE Plan in Limbo:</strong> The popular Saving on a Valuable Education (SAVE) plan has been challenged in court. Key features, like automatic forgiveness for smaller balances, are on hold, creating uncertainty for those relying on it.</li>
        <li><strong>PSLF Buyback Program:</strong> This initiative allows public servants to get credit for past periods of forbearance or deferment. However, technical glitches have slowed its rollout, and many applicants are still waiting for their accounts to be updated.</li>
        <li><strong>The Looming Tax Bomb:</strong> Here's a critical deadline: December 31, 2025. Currently, forgiven student debt is not taxed at the federal level. If this <strong>student loan tax exemption 2025</strong> expires, any debt forgiven in 2026 could be considered taxable income. This means a potential tax bill of thousands of dollars, making the question "are <strong>forgiven student loans taxable</strong>?" a very important one.</li>
        <li><strong>Private Loans Left Out:</strong> Federal relief programs do not apply to private student loans. Borrowers with private debt must look for refinancing options directly from lenders.</li>
      </ul>

      <img src="${findImage('article-student-loan-2025-3').imageUrl}" alt="A calendar with a date circled, symbolizing a deadline" class="my-8 rounded-lg shadow-md" data-ai-hint="deadline date" />
      
      <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">Your Action Plan: 5 Steps to Take Today</h2>
      <p class="mb-6">With so much uncertainty, being proactive is your best strategy. Here’s what every borrower should do immediately:</p>
      <ol class="list-decimal list-inside space-y-4 mb-6 text-lg">
        <li><strong>Confirm Your Eligibility:</strong> Don't assume anything. Visit the official StudentAid.gov website and use their Loan Simulator to confirm you're in the right repayment plan for forgiveness programs like PSLF.</li>
        <li><strong>Certify, Certify, Certify:</strong> If you're pursuing Public Service Loan Forgiveness, regularly submit your employer certification forms. Don't let years of service go uncounted due to paperwork gaps.</li>
        <li><strong>Become Your Own Archivist:</strong> Keep meticulous records of everything—payments, correspondence with loan servicers, and employment history. This documentation is your best defense if a dispute arises.</li>
        <li><strong>Plan for a Potential Tax Hit:</strong> Hope for the best but plan for the worst. Speak with a tax advisor about the possibility of your forgiven debt being taxed. Setting aside a small amount of money now could prevent a major shock later.</li>
        <li><strong>Stay Informed and Vigilant:</strong> Follow official updates from the Department of Education. Be wary of scams promising quick fixes; legitimate information will never ask you for money to access a free federal program.</li>
      </ol>
      
      <h2 class="text-3xl font-bold mt-12 mb-4 font-headline">Frequently Asked Questions</h2>
        <div class="space-y-6">
          <div>
            <h4 class="font-bold text-xl">Will student loan forgiveness actually happen in 2025?</h4>
            <p>Yes, forgiveness is happening, but it's a slow rollout. Approvals are expected to continue through late 2025 and into 2026. Patience and persistence are key.</p>
          </div>
          <div>
            <h4 class="font-bold text-xl">What if I was in forbearance during the COVID-19 pandemic?</h4>
            <p>Those months may count toward forgiveness under special initiatives like the IDR Account Adjustment or the <strong>PSLF Buyback program</strong>. You must check your eligibility and apply if necessary.</p>
          </div>
           <div>
            <h4 class="font-bold text-xl">Is it too late to switch to an income-driven repayment plan?</h4>
            <p>No, it's not too late. Switching to a plan like IBR or SAVE is often a crucial step to lower your monthly payments and stay on track for eventual <strong>Income-Based Repayment forgiveness</strong>.</p>
          </div>
        </div>

      <div class="mt-12 p-6 bg-muted dark:bg-muted/20 rounded-lg">
          <h3 class="text-2xl font-bold mb-2">Don't Miss an Update</h3>
          <p>The student loan landscape is constantly changing. Subscribe to our finance newsletter for weekly, easy-to-understand updates on forgiveness news, policy changes, and eligibility tools that can help you save money.</p>
      </div>
    `,
    imageUrl: findImage('article-student-loan-2025').imageUrl,
    imageHint: findImage('article-student-loan-2025').imageHint,
    date: subDays(new Date(), 1).toISOString(),
    authorId: 'author-2',
    categoryId: 'cat-1',
    tags: [
        'student loan forgiveness 2025', 
        'PSLF backlog 2025', 
        'SAVE plan student loans', 
        'student loan forgiveness update', 
        'US student loan policy changes', 
        'Income-Based Repayment forgiveness',
        'student debt relief programs',
        'student loan forgiveness delays',
        'PSLF Buyback program',
        'student loan tax exemption 2025'
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
  return articles.find(article => article.slug.toLowerCase() === slug.toLowerCase()) ?? null;
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
  return categories.find(category => category.slug.toLowerCase() === slug.toLowerCase()) ?? null;
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
