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
        <h2 class="text-2xl font-bold mb-4">The Era of Rising Rates: A Global Overview</h2>
        <p class="mb-6">2025 has brought sharp changes in the borrowing environment. After years of ultra-cheap financing, a confluence of inflationary pressures, supply chain disruptions, and global economic uncertainty has pushed central banks worldwide to raise base interest rates. Consequently, <strong>mortgage rates 2025</strong>, <strong>loan interest rates</strong>, and the cost to <strong>refinance loans</strong> have followed suit, creating a new reality for borrowers.</p>
        <p class="mb-6">From first-time homebuyers in the UK grappling with affordability to small businesses in Australia facing tighter credit, the squeeze is palpable. The higher cost of borrowing is fundamentally influencing major financial decisions: when to buy property, whether to take on debt, which loan products to choose, and how to structure long-term financial plans. This article explores the core drivers behind the surge in <strong>global interest rates</strong>, its impact on key markets like the US and UK, and actionable strategies for borrowers to navigate this challenging landscape.</p>
        
        <h3 class="text-xl font-bold mt-8 mb-4">What's Driving the Surge in Interest Rates in 2025?</h3>
        <p class="mb-4">The current high-rate environment is not an isolated event but the result of several interlocking global economic factors:</p>
        <ul class="list-disc pl-6 space-y-4 mb-6">
          <li><strong>Inflation Persistence:</strong> Despite aggressive monetary policy, inflation in many nations has remained stubbornly above central bank targets. The rising costs of energy, food, and housing continue to fuel the Consumer Price Index (CPI), compelling institutions like the Federal Reserve and the Bank of England to maintain a hawkish stance on <strong>central bank rates 2025</strong>.</li>
          <li><strong>Tight Labor Markets & Wage Growth:</strong> Persistently low unemployment and widespread labor shortages have led to significant wage growth, which in turn feeds into consumer spending and inflation, creating a difficult cycle for policymakers to break.</li>
          <li><strong>Supply Chain & Energy Shocks:</strong> Geopolitical tensions, volatile energy prices, and logistical bottlenecks continue to disrupt global supply chains. These shocks add significant cost pressures that are ultimately passed on to consumers and businesses.</li>
          <li><strong>Post-Pandemic Demand Normalization:</strong> As economies fully reopened, pent-up demand for housing, consumer goods, and services placed immense pressure on production capacity, contributing to the initial spike in prices.</li>
          <li><strong>Government Debt and Fiscal Policy:</strong> High levels of sovereign debt and expansive fiscal stimulus packages implemented during the pandemic have also added to inflation risk, prompting higher borrowing costs in both public and private sectors.</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-12 mb-4">Effects on Borrowers in Key Markets: US and UK</h2>
        <p class="mb-6">The impact of these <strong>rising interest rates</strong> is felt acutely by borrowers in developed economies. Here’s a look at the current situation in the United States and the United Kingdom.</p>

        <h3 class="text-xl font-bold mt-8 mb-4">United States Market Analysis</h3>
        <p class="mb-4">In the US, the dream of homeownership has become more expensive. The <strong>current mortgage rates</strong> are hovering at levels not seen in over a decade, with the average 30-year fixed rate often exceeding 6-7%. This has dramatically increased monthly payments, pushing many potential buyers to the sidelines.</p>
        <ul class="list-disc pl-6 space-y-4 mb-6">
            <li><strong>Refinancing Activity:</strong> The option to <strong>refinance mortgage options</strong> has become far less attractive. Homeowners who locked in historically low rates are now hesitant to refinance, leading to a sharp drop in refinancing activity.</li>
            <li><strong>Home Equity Loans:</strong> Many are turning to <strong>home equity loans</strong> or HELOCs to access cash. Leveraging home equity can still offer a lower interest rate compared to unsecured debt, making it a popular choice for financing renovations or consolidating high-interest credit cards.</li>
            <li><strong>Personal and Credit Card Debt:</strong> Rates on <strong>personal loan rates</strong> and credit cards have also climbed, disproportionately affecting borrowers with lower credit scores who face the highest costs.</li>
        </ul>
        
        <h3 class="text-xl font-bold mt-8 mb-4">United Kingdom Market Analysis</h3>
        <p class="mb-4">Across the pond, the Bank of England's multiple base rate hikes have directly translated to higher <strong>mortgage rates UK</strong>. Borrowers coming off fixed-rate deals are facing significant payment shocks.</p>
        <ul class="list-disc pl-6 space-y-4 mb-6">
            <li><strong>Remortgage Shock:</strong> Favorable remortgage rates are a thing of the past. Homeowners are now scrambling to find the <strong>best mortgage rates</strong> available, often having to accept much higher monthly payments.</li>
            <li><strong>First-Time Buyers:</strong> The barrier to entry for first-time buyers has risen. They now face a double whammy of higher deposit requirements and stricter affordability checks from lenders.</li>
            <li><strong>Investment Properties:</strong> The buy-to-let market is also feeling the pressure, with higher interest costs and regulatory changes squeezing investor yields.</li>
        </ul>
        
        <h2 class="text-2xl font-bold mt-12 mb-4">Global Trends: Canada, Australia, and Emerging Markets</h2>
        <p class="mb-6">The trend of rising rates is a global phenomenon. In Canada and Australia, housing affordability has become a major concern as <strong>refinance rates Canada</strong> and Australia climb. In emerging markets like India and Southeast Asia, the challenges are compounded by higher nominal interest rates and currency risks. However, the proliferation of fintech lenders is providing more options, albeit sometimes with higher fees.</p>

        <h2 class="text-2xl font-bold mt-12 mb-4">What Borrowers Can Do: Smart Strategies for a High-Rate World</h2>
        <p class="mb-6">Even in this environment, proactive borrowers can mitigate the impact of higher rates. Here are some effective strategies:</p>
        <ul class="list-disc pl-6 space-y-4 mb-6">
          <li><strong>Use a Loan Refinance Calculator:</strong> Before making any decisions, run the numbers. Understand the total interest cost and how different rates will impact your monthly budget.</li>
          <li><strong>Compare Lenders and Products:</strong> Don’t settle for the first offer. Explore options from traditional banks, credit unions, and online fintech lenders to find the <strong>best personal loan UK</strong> or US rates.</li>
          <li><strong>Choose Between Fixed vs. Variable Rates:</strong> A <strong>fixed vs variable mortgage</strong> decision is crucial. If you anticipate rates will continue to rise, locking in a fixed rate can provide payment stability.</li>
          <li><strong>Improve Your Credit Score:</strong> A higher credit score is key to unlocking better rates. Focus on paying down debt and making timely payments to improve your <strong>credit score for loan approval</strong>.</li>
          <li><strong>Refinance Wisely:</strong> While rates are high, refinancing might still make sense if it allows you to consolidate debt or switch to more favorable loan terms. These are some of the best <strong>mortgage refinancing tips</strong>.</li>
        </ul>

        <h2 class="text-2xl font-bold mt-12 mb-4">Mortgage Rate Forecast 2025 and Beyond</h2>
        <p class="mb-6">What can borrowers expect for the remainder of 2025 and into 2026? Most central banks have signaled that significant rate cuts are unlikely until inflation is firmly under control. Some analysts predict moderate cuts in late 2025 or mid-2026, but the <strong>global mortgage market forecast</strong> remains highly uncertain. Housing demand is expected to cool further, and we may see increased competition among lenders, leading to more innovative loan products.</p>
        
        <h2 class="text-2xl font-bold mt-12 mb-4">Conclusion</h2>
        <p class="mb-6">The era of <strong>rising interest rates</strong> in 2025 marks a pivotal moment for borrowers globally. While costlier credit presents undeniable challenges, it also creates an opportunity for strategic financial planning. By understanding the market, comparing options, and leveraging tools like a <strong>loan refinance calculator</strong>, borrowers can navigate this new landscape and secure their financial future.</p>
        
        <div class="mt-12 p-6 bg-secondary rounded-lg">
            <h3 class="text-xl font-bold mb-2">Stay Ahead of the Curve</h3>
            <p>Want to stay up to date with global loan and mortgage rate trends? Subscribe for weekly insights—compare <strong>loan interest rates</strong>, track refinance opportunities, and get tips for saving money in a rising-rate world.</p>
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
      <h2 class="text-2xl font-bold mb-4">The Student Loan Confusion of 2025</h2>
      <p class="mb-6">It’s 2025, and <strong>student loan forgiveness 2025</strong> is once again dominating financial headlines across the United States. Millions of borrowers are anxiously waiting for a <strong>student loan forgiveness update</strong> from the Department of Education, as new rulings, program backlogs, and administrative delays continue to create uncertainty.</p>
      <p class="mb-6">From <strong>PSLF backlog 2025</strong> to <strong>SAVE plan student loans</strong> court rulings, the system designed to offer <strong>student debt relief programs</strong> has become a maze of policies, appeals, and political debates. If you’re one of the 40+ million Americans holding federal student debt, this year could determine your financial future — especially as key tax exemptions expire at the end of 2025.</p>
      
      <h2 class="text-2xl font-bold mt-12 mb-4">What’s Happening Right Now: A Backlog Crisis</h2>
      <p class="mb-6">The federal government has resumed portions of the student loan forgiveness process that were paused during litigation in 2024. However, the processing <strong>student loan forgiveness backlog</strong> has ballooned. Over 70,000 applications under Public Service Loan Forgiveness (PSLF) are still waiting for review, and Income-Driven Repayment (IDR) programs like SAVE and IBR (<strong>Income-Based Repayment forgiveness</strong>) are facing verification bottlenecks. Borrowers who submitted documentation in early 2024 are now being told to expect results in mid-2026. This has created significant <strong>student loan delays</strong>. Borrowers are advised to check their status frequently on StudentAid.gov and maintain documentation of all submitted records for the latest <strong>Department of Education updates</strong>.</p>
      
      <h2 class="text-2xl font-bold mt-12 mb-4">Legal & Policy Shake-Ups: What’s Changing</h2>
      <p class="mb-6">The policy environment around <strong>US student loan policy changes</strong> remains dynamic. Here are the biggest updates shaping the landscape:</p>
      <h3 class="text-xl font-bold mt-8 mb-4">a. SAVE Plan on Pause</h3>
      <p class="mb-4">The Saving on a Valuable Education (SAVE) plan, a new income-driven repayment option, has faced multiple court injunctions. Parts of the program — like automatic forgiveness for low balances — are temporarily halted pending appeal. This is a critical development for those relying on <strong>SAVE plan student loans</strong>.</p>
      <h3 class="text-xl font-bold mt-8 mb-4">b. PSLF Buyback Program</h3>
      <p class="mb-4">The <strong>PSLF Buyback program</strong> allows public service workers to retroactively count past periods of forbearance or deferment toward forgiveness. However, technical delays have slowed implementation, and many applicants have not yet seen those months credited.</p>
      <h3 class="text-xl font-bold mt-8 mb-4">c. Income-Based Repayment Adjustments</h3>
      <p class="mb-4">The IBR and PAYE programs are being consolidated under a new umbrella to simplify repayment options. This could affect how payments are calculated for <strong>Income-Based Repayment forgiveness</strong> eligibility.</p>
      <h3 class="text-xl font-bold mt-8 mb-4">d. End of Tax-Free Forgiveness (Dec 31, 2025)</h3>
      <p class="mb-4">A key deadline looms: under the American Rescue Plan, forgiven student debt is not taxed. This <strong>student loan tax exemption 2025</strong> expires at the end of the year. If forgiveness is delayed into 2026, borrowers may owe thousands in federal income taxes on the forgiven amount, making <strong>forgiven student loans taxable</strong>.</p>
      <h3 class="text-xl font-bold mt-8 mb-4">e. Private Loan Borrowers Still Excluded</h3>
      <p class="mb-4">Private student loans remain ineligible for federal forgiveness. However, some private lenders are introducing refinance incentives to help struggling borrowers consolidate debt at lower rates.</p>

      <h2 class="text-2xl font-bold mt-12 mb-4">What Borrowers Should Do Right Now</h2>
      <p class="mb-6">With so much in flux, here are five steps every borrower should take immediately:</p>
      <ol class="list-decimal pl-6 space-y-4 mb-6">
        <li><strong>Check Your Program Eligibility:</strong> Visit studentaid.gov/loan-forgiveness and confirm your enrollment. Use the Loan Simulator to see which forgiveness or repayment plan suits your income and goals. This is the first step to <strong>how to qualify for PSLF forgiveness</strong>.</li>
        <li><strong>Verify Employer Certification:</strong> For PSLF applicants, ensure your employer’s certification is up to date. Gaps or outdated records can delay forgiveness credit.</li>
        <li><strong>Keep Organized Documentation:</strong> Maintain proof of payments, deferment, and employment history. Borrowers who can present detailed records have a higher success rate when disputes arise.</li>
        <li><strong>Plan for Possible Taxation:</strong> If your forgiveness is delayed into 2026, consult a tax advisor. Some borrowers may benefit from setting aside funds for potential tax liabilities, as the answer to "<strong>is student loan forgiveness taxable in 2026</strong>?" might be yes.</li>
        <li><strong>Stay Informed on Policy Announcements:</strong> Follow official <strong>Department of Education updates</strong>. Avoid scams—legitimate forgiveness information will come only from verified government sources.</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-12 mb-4">Common Questions Borrowers Are Asking</h2>
        <div class="space-y-4">
          <p><strong>❓ Will student loan forgiveness actually happen in 2025?</strong> Yes, but processing times vary. Many forgiveness approvals are expected to roll out gradually through late 2025 to early 2026.</p>
          <p><strong>❓ What if I was in forbearance during COVID?</strong> Those months may still count toward forgiveness if you qualify under the <strong>PSLF Buyback program</strong> or the IDR adjustment initiative.</p>
          <p><strong>❓ Can I switch repayment plans?</strong> Yes, switching to an income-driven repayment plan can help lower monthly payments and maintain forgiveness eligibility.</p>
          <p><strong>❓ What happens after Dec 31, 2025?</strong> If the tax exemption expires, forgiven student debt may become taxable income starting in 2026.</p>
        </div>

      <h2 class="text-2xl font-bold mt-12 mb-4">Conclusion: Stay Ready, Stay Informed</h2>
      <p class="mb-6">The student loan forgiveness landscape in 2025 is complex, evolving, and emotionally exhausting for millions of Americans. But amidst the delays and debates, one thing remains clear: information is power. Knowing <strong>how to check student loan forgiveness status</strong>, keeping records updated, and following verified updates can make the difference between receiving relief and missing out. Staying proactive is the best financial move you can make this year.</p>
        
      <div class="mt-12 p-6 bg-secondary rounded-lg">
          <h3 class="text-xl font-bold mb-2">Get Weekly Updates</h3>
          <p>Want weekly updates on student loan forgiveness news, rate changes, and eligibility tools? Subscribe to our finance newsletter to get expert insights that help you navigate the evolving 2025 loan landscape.</p>
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
