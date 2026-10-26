export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'plans' | 'servicing' | 'claims';
}

export const faqsData: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What is life insurance?',
    answer: 'Life insurance is a legally binding contract between a policyholder and Life Insurance Corporation of India (LIC). In exchange for regular or lump-sum premium payments, the insurer guarantees to pay a designated lump sum (the Sum Assured, plus applicable bonuses) to designated family beneficiaries upon the unfortunate demise of the insured person, or to the policyholder upon surviving the policy maturity term.',
    category: 'general',
  },
  {
    id: 'faq-2',
    question: 'How do I explore LIC insurance plans?',
    answer: 'You can explore current LIC plans directly through our structured Plans Catalogue by category—such as Term Assurance for high pure risk protection, Endowment for disciplined savings with life cover, Whole Life for legacy planning up to age 100, Money Back for periodic liquidity, Child Plans for education milestones, and Pension/Annuity for retirement income. Each plan profile outlines officially documented features, eligibility parameters, and direct links to the official LIC India website.',
    category: 'plans',
  },
  {
    id: 'faq-3',
    question: 'How can I compare different policy categories?',
    answer: 'Comparing categories depends on your primary financial goal. If your goal is high family income replacement at minimum cost, Term Assurance is ideal. If you want savings accumulation with guaranteed death benefits and bonuses, explore Endowment. If you require periodic cash inflows every 4 to 5 years, Money Back suits you best. During our personal consultation, we review your time horizon, financial goals, and risk profile to identify the appropriate product category before you review official documentation.',
    category: 'plans',
  },
  {
    id: 'faq-4',
    question: 'How can I check my policy status?',
    answer: 'To check your policy status, always use official LIC channels. You can log in directly to the official LIC Customer Portal at https://licindia.in/en/web/guest/policy-status, use the official LIC Mobile App ("MyLIC"), send an SMS in the official format to 9222492224, or contact our advisory office in Bhubaneswar for procedural guidance with your policy bond details.',
    category: 'servicing',
  },
  {
    id: 'faq-5',
    question: 'Where can I pay my LIC premium?',
    answer: 'Important: Always pay your insurance premiums exclusively through official LIC channels. You can pay online on the official website (https://www.licindia.in/) via the "Pay Premium Online" portal with zero login required (Direct Pay), through authorized bank branches, official LIC branch cash counters, or registered UPI apps. Never transfer premium funds to personal bank accounts or unverified third-party websites.',
    category: 'servicing',
  },
  {
    id: 'faq-6',
    question: 'How do I obtain a policy brochure?',
    answer: 'You can download the official, regulator-approved brochure for every plan directly from the official LIC India product repository (https://www.licindia.in/en/web/guest/products) or via the official brochure links provided on each plan page on our website. You may also request a digital copy via WhatsApp or during your consultation.',
    category: 'plans',
  },
  {
    id: 'faq-7',
    question: 'What information may be needed for a consultation?',
    answer: 'For a meaningful preliminary consultation, it is helpful to have in mind: your approximate age, monthly or annual savings target, primary goal (e.g. child education, retirement, family cover), existing liabilities (home loan, personal loan), and smoking/health status. You do not need to share sensitive documents like Aadhaar numbers or bank details during initial discussions.',
    category: 'general',
  },
  {
    id: 'faq-8',
    question: 'How can I understand policy eligibility?',
    answer: 'Eligibility criteria are strictly governed by LIC India and IRDAI regulations. Key factors include age at entry (e.g., minimum 18 years for term plans, 30 or 90 days for child plans), maximum maturity age, income proof (ITR / Form 16 / salary slips for high sum assured), and medical underwriting history. We assist you in understanding these official conditions before any application is prepared.',
    category: 'plans',
  },
  {
    id: 'faq-9',
    question: 'How do I begin a claim enquiry?',
    answer: 'To begin a claim, first identify the type of claim: Maturity Claim (for surviving policies reaching term end), Survival Benefit (periodic money-back installment), or Death Claim. Contact the servicing LIC branch where the policy was originated or reach out to our advisor office. We guide nominees through document verification (original policy bond, claim discharge form, death certificate, and NEFT details) for official submission to LIC.',
    category: 'claims',
  },
  {
    id: 'faq-10',
    question: 'Can I contact the agent on WhatsApp?',
    answer: 'Yes! You can contact the advisor directly on WhatsApp at +91 89086 77424 or click any of the green "Chat on WhatsApp" buttons throughout this website. You can ask general questions, schedule a face-to-face or telephone appointment in Bhubaneswar, or request official plan brochures.',
    category: 'general',
  },
  {
    id: 'faq-11',
    question: 'Does this website issue LIC policies?',
    answer: 'No. This is an independent informational and advisory website. Insurance policies cannot be purchased or issued directly on this site, nor do we collect premiums. Policies are underwritten, processed, and issued solely by Life Insurance Corporation of India (LIC) through authorized official branches following formal proposal submission and regulatory underwriting.',
    category: 'general',
  },
  {
    id: 'faq-12',
    question: 'Is every displayed product available to every customer?',
    answer: 'No. Availability and terms depend strictly on individual eligibility, including entry age, health profile, medical underwriting, occupational risk category, and financial verification per LIC India underwriting rules. Displayed plans represent currently active products from the official catalogue, but final acceptance is at the sole discretion of the insurer.',
    category: 'plans',
  },
];
