/**
 * Official LIC Insurance Plans Data Catalog
 * All entries verified against LIC India's official public catalogue.
 * Compliance notice: Terms, premiums, and eligibility must be verified against official policy documents.
 */

export interface PlanItem {
  id: string;
  name: string;
  category: string;
  categorySlug: 'endowment' | 'whole-life' | 'money-back' | 'term-insurance' | 'child-plans' | 'retirement' | 'market-linked' | 'health-and-riders';
  planNo: string;
  uin: string;
  tagline: string;
  badge?: string;
  description: string;
  suitability: string;
  keyFeatures: string[];
  premiumPayment: string;
  eligibilitySummary: {
    minAge?: string;
    maxAge?: string;
    policyTerm?: string;
    minSumAssured?: string;
  };
  exclusions: string;
  officialUrl: string;
  brochureUrl: string;
  status: 'verified current' | 'needs verification';
  lastVerified: string;
}

export interface PlanCategoryMeta {
  slug: PlanItem['categorySlug'];
  title: string;
  shortDesc: string;
  longDesc: string;
  idealFor: string;
  keyConsiderations: string[];
  officialLicUrl: string;
}

export const planCategories: PlanCategoryMeta[] = [
  {
    slug: 'endowment',
    title: 'Endowment Plans',
    shortDesc: 'A disciplined blend of financial protection and guaranteed savings over a fixed term.',
    longDesc: 'Endowment assurance provides a guaranteed sum assured along with applicable bonuses (if participating) either upon the maturity of the policy or to nominees upon unfortunate demise during the term. These plans help families build savings for milestones while securing life coverage.',
    idealFor: 'Individuals seeking long-term goal accumulation (buying a house, child milestones) with insurance protection.',
    keyConsiderations: [
      'Combines life cover with savings accumulation.',
      'Maturity proceeds include Sum Assured plus accrued bonuses (for participating plans).',
      'Loan facility available after designated policy active periods.',
      'Tax benefits as per applicable prevailing Income Tax laws.'
    ],
    officialLicUrl: 'https://www.licindia.in/en/web/guest/endowment-plans',
  },
  {
    slug: 'whole-life',
    title: 'Whole Life Plans',
    shortDesc: 'Lifelong protection and continuous legacy planning up to 100 years of age.',
    longDesc: 'Whole life insurance policies offer life cover for the entire lifetime of the insured person (up to age 100), with guaranteed regular income or survival payouts starting after the premium-paying term, ensuring lifelong financial peace of mind.',
    idealFor: 'Families wanting continuous lifelong life coverage and estate creation for the next generation.',
    keyConsiderations: [
      'Lifelong risk cover up to 100 years of age.',
      'Guaranteed income/survival benefits after premium paying term in modern whole-life designs like Jeevan Utsav.',
      'Significant financial security for dependents whenever demise occurs.',
      'Tax efficiency under prevailing sections of the IT Act.'
    ],
    officialLicUrl: 'https://www.licindia.in/en/web/guest/whole-life-plans',
  },
  {
    slug: 'money-back',
    title: 'Money Back Plans',
    shortDesc: 'Periodic liquidity payouts during policy tenure with full risk coverage.',
    longDesc: 'Money-back plans provide periodic survival benefits as a percentage of the basic sum assured at regular specified intervals, while keeping the full life cover intact throughout the entire policy term regardless of payouts already received.',
    idealFor: 'Individuals who need periodic liquidity for recurring goals, celebrations, education fees, or debt repayments.',
    keyConsiderations: [
      'Periodic survival benefit installments at regular intervals.',
      'Full death benefit payable on demise without deducting already-paid survival benefits.',
      'Guaranteed additions or bonuses depending on the specific plan chosen.',
      'Liquidity without the need to surrender the policy.'
    ],
    officialLicUrl: 'https://www.licindia.in/en/web/guest/money-back-plans',
  },
  {
    slug: 'term-insurance',
    title: 'Term Assurance Plans',
    shortDesc: 'Maximum pure life coverage at economical premium rates for family financial security.',
    longDesc: 'Term insurance is a pure protection plan that pays the sum assured to the nominee upon the unfortunate demise of the policyholder during the policy term. It offers high financial security to replace the breadwinner’s income at economical premiums.',
    idealFor: 'Earning individuals, young parents, and individuals with liabilities (home loans, business credit).',
    keyConsiderations: [
      'High sum assured coverage at economical premium rates.',
      'Option for regular, limited, or single premium payment terms.',
      'Special discounted premium rates for non-smokers and women policyholders on select plans.',
      'Optional accidental and disability riders for enhanced protection.'
    ],
    officialLicUrl: 'https://www.licindia.in/en/web/guest/term-assurance-plans',
  },
  {
    slug: 'child-plans',
    title: 'Child-Focused Plans',
    shortDesc: 'Dedicated savings to secure your child’s educational milestones and career start.',
    longDesc: 'Child plans are specifically designed to meet educational and career milestones of growing children. They feature premium waiver options ensuring that savings continue uninterrupted even if the parent passes away unexpectedly.',
    idealFor: 'Parents and grandparents planning for higher education, college fees, professional training, or marriage.',
    keyConsiderations: [
      'Maturity or survival payouts synchronized with crucial academic milestones (ages 18 to 25).',
      'Premium Waiver Benefit Rider protects child’s future even if the earning parent passes away.',
      'Guaranteed additions throughout the policy term.',
      'Long-term inflation hedge for higher educational expenses.'
    ],
    officialLicUrl: 'https://www.licindia.in/en/web/guest/childrens-plans',
  },
  {
    slug: 'retirement',
    title: 'Pension & Retirement Plans',
    shortDesc: 'Guaranteed lifelong annuity and retirement income security for your golden years.',
    longDesc: 'Retirement plans allow you to accumulate a retirement corpus or convert your existing savings into a guaranteed regular stream of income (annuity) for the rest of your life, with joint-life options for spouse protection.',
    idealFor: 'Salaried, self-employed, or retired individuals seeking guaranteed lifelong pension and dignified retirement.',
    keyConsiderations: [
      'Immediate and deferred annuity options available.',
      'Choice of guaranteed lifelong annuity rates fixed at inception.',
      'Joint life annuity with 100% pension continuation to spouse and return of purchase price to nominees.',
      'Tax advantages on pension contributions and annuity plans.'
    ],
    officialLicUrl: 'https://www.licindia.in/en/web/guest/pension-plans',
  },
  {
    slug: 'market-linked',
    title: 'Unit-Linked Plans (ULIP)',
    shortDesc: 'Market-linked investment growth combined with life insurance protection.',
    longDesc: 'Unit Linked Insurance Plans (ULIPs) invest a portion of premiums in capital market instruments (equity and debt funds) based on your risk appetite, alongside life insurance coverage. Investment risk in investment portfolio is borne by the policyholder.',
    idealFor: 'Investors seeking long-term capital appreciation with market exposure and disciplined insurance cover.',
    keyConsiderations: [
      'Choice between equity-oriented, balanced, and debt funds.',
      'Free switches between funds during policy tenure to rebalance asset allocation.',
      'Guaranteed additions or loyalty additions added to the fund value on specified terms.',
      'Market-linked returns: Investment risk is borne by the policyholder.'
    ],
    officialLicUrl: 'https://www.licindia.in/en/web/guest/unit-linked-plans',
  },
  {
    slug: 'health-and-riders',
    title: 'Health Products & Riders',
    shortDesc: 'Comprehensive coverage against critical illnesses, accidental injuries, and hospital costs.',
    longDesc: 'Health insurance policies and optional policy riders provide financial support during medical crises such as cancer diagnosis, major critical illness, accidental disability, or hospitalization, safeguarding your accumulated family savings.',
    idealFor: 'Anyone seeking a financial shield against escalating medical costs and critical health risks.',
    keyConsiderations: [
      'Lump-sum payouts upon diagnosis of covered critical illnesses.',
      'Riders attachable to primary life policies to boost accidental death and disability cover.',
      'Premium Waiver Benefit riders waive future premiums in case of tragedy or disability.',
      'Riders must be verified as attachable to specific base plans.'
    ],
    officialLicUrl: 'https://www.licindia.in/en/web/guest/health-plans',
  },
];

export const allPlans: PlanItem[] = [
  // ENDOWMENT
  {
    id: 'lic-new-endowment-plan',
    name: "LIC's New Endowment Plan",
    category: 'Endowment',
    categorySlug: 'endowment',
    planNo: 'Plan No. 914',
    uin: 'UIN: 512N277V02',
    tagline: 'Participating non-linked regular endowment assurance plan combining savings and family protection.',
    badge: 'Popular Classic',
    description: "LIC's New Endowment Plan is a participating non-linked plan which offers an attractive combination of protection and saving. This combination provides financial support for the family of the deceased policyholder at any time before maturity and a good lump sum amount at the time of maturity for the surviving policyholders.",
    suitability: 'Ideal for individuals seeking disciplined long-term savings coupled with life cover for family security.',
    keyFeatures: [
      'Participating plan with simple reversionary bonuses and final additional bonus (if any).',
      'Lump-sum maturity benefit equal to Basic Sum Assured plus vested bonuses.',
      'Full death benefit equal to Sum Assured on Death plus vested bonuses.',
      'Loan facility available after 2 full years of premium payment.',
      'Optional riders: Accidental Death & Disability Rider, Critical Illness Rider.'
    ],
    premiumPayment: 'Yearly, Half-Yearly, Quarterly, Monthly (NACH/ECS)',
    eligibilitySummary: {
      minAge: '8 years (completed)',
      maxAge: '55 years (nearer birthday)',
      policyTerm: '12 to 35 years',
      minSumAssured: '₹1,00,000 (No upper limit)'
    },
    exclusions: 'Suicide clause applicable within 12 months from inception or revival as per official policy document.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-new-endowment-plan',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-new-endowment-plan',
    status: 'verified current',
    lastVerified: 'October 2026'
  },
  {
    id: 'lic-new-jeevan-anand',
    name: "LIC's New Jeevan Anand",
    category: 'Endowment',
    categorySlug: 'endowment',
    planNo: 'Plan No. 915',
    uin: 'UIN: 512N279V02',
    tagline: 'Dual benefit of maturity payout during lifetime plus continued life cover for whole of life.',
    badge: 'Lifetime Protection',
    description: "LIC's New Jeevan Anand is one of the most trusted plans in India. It offers double protection: you receive your maturity lump sum with bonuses at the end of the term, and the basic sum assured continues as a free life cover till age 100.",
    suitability: 'For earning individuals who want a substantial maturity corpus for themselves plus guaranteed inheritance for their nominees whenever demise occurs.',
    keyFeatures: [
      'Maturity payout = Basic Sum Assured + Vested Simple Reversionary Bonuses + Final Additional Bonus.',
      'Continuous life cover of Basic Sum Assured remains active after maturity until age 100 without further premiums.',
      'High bonus earning track record as a participating plan.',
      'Tax exemption under prevailing section 80C and 10(10D) of IT Act.'
    ],
    premiumPayment: 'Yearly, Half-Yearly, Quarterly, Monthly',
    eligibilitySummary: {
      minAge: '18 years (completed)',
      maxAge: '50 years (nearer birthday)',
      policyTerm: '15 to 35 years',
      minSumAssured: '₹1,00,000'
    },
    exclusions: 'Subject to standard suicide clause within 12 months. Additional terms as per official policy document.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-new-jeevan-anand',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-new-jeevan-anand',
    status: 'verified current',
    lastVerified: 'October 2026'
  },
  {
    id: 'lic-jeevan-labh',
    name: "LIC's Jeevan Labh Plan",
    category: 'Endowment',
    categorySlug: 'endowment',
    planNo: 'Plan No. 936',
    uin: 'UIN: 512N304V02',
    tagline: 'Limited premium payment endowment plan with high bonus potential and shorter paying terms.',
    badge: 'Limited Pay High Return',
    description: "LIC's Jeevan Labh is a limited premium paying, non-linked, participating endowment plan. It offers a combination of protection and savings with the comfort of paying premiums for a limited period (e.g. pay 10, 15, or 16 years for terms of 16, 21, or 25 years).",
    suitability: 'Great for professionals and business owners looking for limited paying liabilities while enjoying extended cover and maturity corpus.',
    keyFeatures: [
      'Limited premium payment options: Pay for 10 yrs (16 yr term), 15 yrs (21 yr term), or 16 yrs (25 yr term).',
      'High bonus rates declared historically.',
      'Special rebate on higher Sum Assured (₹5,00,000 and above).',
      'Loan facility available after 2 years of continuous premium payments.'
    ],
    premiumPayment: 'Yearly, Half-Yearly, Quarterly, Monthly',
    eligibilitySummary: {
      minAge: '8 years (completed)',
      maxAge: '59 years (for 16-yr term)',
      policyTerm: '16, 21, or 25 years',
      minSumAssured: '₹2,00,000'
    },
    exclusions: 'Standard policy suicide exclusion within 12 months. Full details in official product brochure.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-jeevan-labh',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-jeevan-labh',
    status: 'verified current',
    lastVerified: 'October 2026'
  },
  {
    id: 'lic-jeevan-lakshya',
    name: "LIC's Jeevan Lakshya",
    category: 'Endowment',
    categorySlug: 'endowment',
    planNo: 'Plan No. 933',
    uin: 'UIN: 512N297V02',
    tagline: 'Family goal protection plan offering 10% annual income benefit upon unfortunate demise.',
    badge: 'Family Income Shield',
    description: "LIC's Jeevan Lakshya is a participating non-linked plan designed specifically to secure children's educational and financial future even in the absence of the parent. In case of unfortunate demise of the parent during policy term, all future premiums are waived, 10% of Sum Assured is paid every year to the family until maturity, and the full maturity sum is paid at maturity.",
    suitability: 'Essential for young parents wanting to guarantee their child’s school and higher education funds come what may.',
    keyFeatures: [
      'In case of demise: 10% of Basic Sum Assured paid annually till the year before maturity.',
      'No future premiums required to be paid after policyholder demise.',
      'Full maturity sum (110% of Basic Sum Assured + bonuses) paid on original maturity date.',
      'Available with Premium Waiver Benefit and Accidental Riders.'
    ],
    premiumPayment: 'Yearly, Half-Yearly, Quarterly, Monthly (Policy term minus 3 years)',
    eligibilitySummary: {
      minAge: '18 years (completed)',
      maxAge: '50 years (nearer birthday)',
      policyTerm: '13 to 25 years',
      minSumAssured: '₹1,00,000'
    },
    exclusions: 'Standard 12-month suicide clause and underwriting conditions as per official terms.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-jeevan-lakshya',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-jeevan-lakshya',
    status: 'verified current',
    lastVerified: 'October 2026'
  },
  {
    id: 'lic-single-premium-endowment',
    name: "LIC's Single Premium Endowment Plan",
    category: 'Endowment',
    categorySlug: 'endowment',
    planNo: 'Plan No. 917',
    uin: 'UIN: 512N283V02',
    tagline: 'One-time lump sum investment with insurance cover and bonus accumulation.',
    badge: 'One-Time Payment',
    description: "A non-linked, participating individual life insurance savings plan where premium is paid in a single lump sum at the outset. Provides financial protection during the term and returns sum assured along with bonuses at maturity.",
    suitability: 'Individuals with lump-sum surplus (windfall, property sale, bonuses) seeking risk-free preservation with life coverage.',
    keyFeatures: [
      'Single premium payment with zero recurring liability.',
      'Participating plan with simple reversionary bonuses.',
      'Loan facility available immediately after 1 year.',
      'Guaranteed surrender value available after 1 year.'
    ],
    premiumPayment: 'Single Premium only',
    eligibilitySummary: {
      minAge: '90 days (completed)',
      maxAge: '65 years',
      policyTerm: '10 to 25 years',
      minSumAssured: '₹50,000'
    },
    exclusions: 'Standard exclusions per official LIC guidelines.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-single-premium-endowment-plan',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-single-premium-endowment-plan',
    status: 'verified current',
    lastVerified: 'October 2026'
  },

  // WHOLE LIFE
  {
    id: 'lic-jeevan-utsav',
    name: "LIC's Jeevan Utsav",
    category: 'Whole Life',
    categorySlug: 'whole-life',
    planNo: 'Plan No. 871',
    uin: 'UIN: 512N363V01',
    tagline: 'Non-linked, non-participating whole-life plan with guaranteed lifelong income of 10% of Sum Assured.',
    badge: '10% Guaranteed Income',
    description: "LIC's Jeevan Utsav is a non-linked, non-participating, individual, savings, whole life insurance plan. It provides financial support to family in case of unfortunate demise and guaranteed income benefits (Regular Income or Flexi Income of 10% of Basic Sum Assured per year) throughout life from the end of the specified deferment period.",
    suitability: 'Persons who desire a guaranteed, predictable annual cashflow for life after a short premium paying term.',
    keyFeatures: [
      'Guaranteed Additions of ₹40 per thousand Basic Sum Assured during entire premium paying term.',
      'Guaranteed lifelong survival benefit of 10% of Sum Assured every year after deferment.',
      'Two payout options: Option I (Regular Income) or Option II (Flexi Income with compounding interest).',
      'Lifelong risk cover up to 100 years of age.'
    ],
    premiumPayment: 'Limited pay: 5 to 16 years',
    eligibilitySummary: {
      minAge: '90 days (completed)',
      maxAge: '65 years (depending on premium paying term)',
      policyTerm: 'Whole of life (up to 100 years)',
      minSumAssured: '₹5,00,000'
    },
    exclusions: 'Subject to suicide exclusion within 12 months. Official policy terms apply.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-jeevan-utsav',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-jeevan-utsav',
    status: 'verified current',
    lastVerified: 'October 2026'
  },
  {
    id: 'lic-jeevan-umang',
    name: "LIC's Jeevan Umang",
    category: 'Whole Life',
    categorySlug: 'whole-life',
    planNo: 'Plan No. 945',
    uin: 'UIN: 512N312V02',
    tagline: 'Participating whole life plan providing 8% annual survival payouts from end of premium term till age 100.',
    badge: 'Lifelong 8% Annual Benefit',
    description: "LIC's Jeevan Umang offers a rare combination of income and protection for your family. It provides annual survival benefits of 8% of the Basic Sum Assured from the end of the premium-paying term till the age of 99, and a lump sum maturity payment at the age of 100 or on prior demise.",
    suitability: 'Ideal for those seeking a steady stream of supplementary annual funds throughout retirement alongside whole-of-life coverage.',
    keyFeatures: [
      'Annual payout equal to 8% of Basic Sum Assured payable each year till age 99.',
      'Lump-sum maturity benefit at age 100 equal to Basic Sum Assured + Vested Bonuses + Final Additional Bonus.',
      'Premium paying terms of 15, 20, 25, or 30 years.',
      'Simple reversionary bonus additions during premium paying years.'
    ],
    premiumPayment: 'Yearly, Half-Yearly, Quarterly, Monthly',
    eligibilitySummary: {
      minAge: '90 days (completed)',
      maxAge: '55 years (nearer birthday)',
      policyTerm: '100 minus age at entry',
      minSumAssured: '₹2,00,000'
    },
    exclusions: 'Standard 12-month suicide clause and medical underwriting criteria as per LIC rules.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-jeevan-umang',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-jeevan-umang',
    status: 'verified current',
    lastVerified: 'October 2026'
  },

  // MONEY BACK
  {
    id: 'lic-new-money-back-20-years',
    name: "LIC's New Money Back Plan — 20 Years",
    category: 'Money Back',
    categorySlug: 'money-back',
    planNo: 'Plan No. 920',
    uin: 'UIN: 512N280V02',
    tagline: 'Guaranteed cash payouts at 5th, 10th, and 15th years with comprehensive life cover for 20 years.',
    badge: 'Popular Liquidity Plan',
    description: "LIC's New Money Back Plan - 20 Years is a participating non-linked plan offering periodic liquidity payments during the 20-year policy term, with premiums payable for only 15 years. It protects against demise while offering cash inflows for milestone expenses.",
    suitability: 'Ideal for individuals who anticipate recurring capital requirements every 5 years for family expenses.',
    keyFeatures: [
      '20% of Basic Sum Assured paid at the end of 5th, 10th, and 15th policy years.',
      'Maturity payout at 20th year = 40% of Basic Sum Assured + Vested Simple Reversionary Bonuses + FAB.',
      'Premiums payable for only 15 years.',
      'Full death benefit payable on demise without deducting previously paid survival installments.'
    ],
    premiumPayment: 'Yearly, Half-Yearly, Quarterly, Monthly (15 years PPT)',
    eligibilitySummary: {
      minAge: '13 years (completed)',
      maxAge: '50 years (nearer birthday)',
      policyTerm: '20 years (Premium term 15 years)',
      minSumAssured: '₹1,00,000'
    },
    exclusions: 'Standard suicide clause within 12 months as per official terms.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-new-money-back-plan-20-years',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-new-money-back-plan-20-years',
    status: 'verified current',
    lastVerified: 'October 2026'
  },
  {
    id: 'lic-new-money-back-25-years',
    name: "LIC's New Money Back Plan — 25 Years",
    category: 'Money Back',
    categorySlug: 'money-back',
    planNo: 'Plan No. 921',
    uin: 'UIN: 512N278V02',
    tagline: 'Periodic survival payouts at 5th, 10th, 15th, and 20th years with premium payable for only 20 years.',
    badge: 'Long-term Liquidity',
    description: "A 25-year non-linked, participating money-back plan where premiums are payable for only 20 years. 15% of Basic Sum Assured is paid at 5th, 10th, 15th, and 20th policy anniversaries, and remaining 40% plus bonuses at maturity.",
    suitability: 'For individuals seeking disciplined 25-year wealth creation with four pre-scheduled liquidity liquidity injections.',
    keyFeatures: [
      '15% of Basic Sum Assured paid at 5th, 10th, 15th, and 20th policy anniversaries.',
      'Maturity payout at 25th year = 40% of Basic Sum Assured + Vested Bonuses + Final Additional Bonus.',
      'Premium paying term is 20 years for a 25-year term.',
      'In case of demise, full Sum Assured on Death is paid without deducting survival payments.'
    ],
    premiumPayment: 'Yearly, Half-Yearly, Quarterly, Monthly',
    eligibilitySummary: {
      minAge: '13 years (completed)',
      maxAge: '45 years (nearer birthday)',
      policyTerm: '25 years (Premium term 20 years)',
      minSumAssured: '₹1,00,000'
    },
    exclusions: 'Standard official exclusion clauses apply.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-new-money-back-plan-25-years',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-new-money-back-plan-25-years',
    status: 'verified current',
    lastVerified: 'October 2026'
  },
  {
    id: 'lic-bima-shree',
    name: "LIC's Bima Shree",
    category: 'Money Back',
    categorySlug: 'money-back',
    planNo: 'Plan No. 948',
    uin: 'UIN: 512N316V02',
    tagline: 'High net-worth individual money back plan with guaranteed additions and critical illness rider.',
    badge: 'HNI Specialized',
    description: "LIC's Bima Shree is a limited premium paying, non-linked, with-profits money back plan specially designed for High Net-worth Individuals. It provides guaranteed additions alongside survival milestones and life protection.",
    suitability: 'Affluent individuals seeking high sum assured life cover (minimum ₹10 Lakhs) with guaranteed additions and liquidity.',
    keyFeatures: [
      'Guaranteed Additions of ₹50 to ₹55 per thousand Sum Assured.',
      'Periodic survival payouts of up to 45% based on selected policy terms (14, 16, 18, or 20 years).',
      'In-built Critical Illness benefit for 15 specified critical illnesses.',
      'Settlement option available for receiving maturity and death payouts in installments.'
    ],
    premiumPayment: 'Limited pay (10, 12, 14, or 16 years)',
    eligibilitySummary: {
      minAge: '8 years (completed)',
      maxAge: '55 years',
      policyTerm: '14, 16, 18, or 20 years',
      minSumAssured: '₹10,00,000'
    },
    exclusions: 'Standard medical underwriting and suicide clauses as per official guidelines.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-bima-shree',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-bima-shree',
    status: 'verified current',
    lastVerified: 'October 2026'
  },

  // TERM ASSURANCE
  {
    id: 'lic-digi-term',
    name: "LIC's Digi Term",
    category: 'Term Assurance',
    categorySlug: 'term-insurance',
    planNo: 'Plan No. 876',
    uin: 'UIN: 512N367V01',
    tagline: 'Modern pure risk protection plan offering high life cover at competitive rates.',
    badge: 'Pure Protection',
    description: "LIC's Digi Term is a non-linked, non-participating, individual, pure risk life insurance plan that provides financial protection to the insured's family in case of unfortunate demise during the policy term.",
    suitability: 'Breadwinners, young salaried earners, and entrepreneurs wanting maximum risk coverage at affordable rates.',
    keyFeatures: [
      'Pure risk term insurance: high life cover at minimal cost.',
      'Special discounted premium rates for healthy non-smokers.',
      'Special discounted rates for women policyholders.',
      'Choice of level sum assured or increasing sum assured options.',
      'Optional Accidental Benefit Rider available.'
    ],
    premiumPayment: 'Regular, Limited (5 or 10 years), or Single Premium',
    eligibilitySummary: {
      minAge: '18 years (completed)',
      maxAge: '65 years',
      policyTerm: '10 to 40 years',
      minSumAssured: '₹50,00,000'
    },
    exclusions: 'Standard suicide exclusion within 12 months as per official terms.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-digi-term',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-digi-term',
    status: 'verified current',
    lastVerified: 'October 2026'
  },
  {
    id: 'lic-yuva-term',
    name: "LIC's Yuva Term",
    category: 'Term Assurance',
    categorySlug: 'term-insurance',
    planNo: 'Plan No. 875',
    uin: 'UIN: 512N366V01',
    tagline: 'Pure risk term plan customized for young professionals entering the workforce.',
    badge: 'Youth Special',
    description: "LIC's Yuva Term is a dedicated pure risk insurance plan tailored for young individuals aged 18 to 45 years to secure their early career liabilities and family responsibilities at entry-friendly premium slabs.",
    suitability: 'Young professionals, newly married individuals, and first-time insurance buyers.',
    keyFeatures: [
      'Tailored for ages 18 to 45.',
      'Lower entry threshold of ₹50 Lakhs Sum Assured.',
      'Option to receive death benefit in installments over 5 years.',
      'Tax deduction on premiums under Section 80C.'
    ],
    premiumPayment: 'Regular, Limited, Single Pay',
    eligibilitySummary: {
      minAge: '18 years (completed)',
      maxAge: '45 years',
      policyTerm: '10 to 40 years',
      minSumAssured: '₹50,00,000'
    },
    exclusions: 'Standard suicide exclusion within 12 months of risk inception or revival.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-yuva-term',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-yuva-term',
    status: 'verified current',
    lastVerified: 'October 2026'
  },
  {
    id: 'lic-saral-jeevan-bima',
    name: "LIC's Saral Jeevan Bima",
    category: 'Term Assurance',
    categorySlug: 'term-insurance',
    planNo: 'Plan No. 859',
    uin: 'UIN: 512N341V01',
    tagline: 'Standardized individual pure term life insurance plan with simple eligibility conditions.',
    badge: 'IRDAI Standard Plan',
    description: "LIC's Saral Jeevan Bima is a standard individual pure risk premium life insurance policy that pays sum assured on demise to the beneficiary. It provides standardized terms across the entire insurance sector.",
    suitability: 'Individuals looking for basic term insurance without complex restrictions, including lower income thresholds.',
    keyFeatures: [
      'Standardized IRDAI product with simplified documentation.',
      'Affordable entry sum assured starting from ₹5 Lakhs up to ₹25 Lakhs.',
      'Flexible policy terms between 5 to 40 years.',
      'Straightforward death benefit with no maturity payouts (pure protection).'
    ],
    premiumPayment: 'Regular, 5 Years Limited, 10 Years Limited, or Single Pay',
    eligibilitySummary: {
      minAge: '18 years (completed)',
      maxAge: '65 years',
      policyTerm: '5 to 40 years',
      minSumAssured: '₹5,00,000 (Max ₹25,00,000)'
    },
    exclusions: '45-day waiting period from inception (accidental death covered from day 1). Suicide clause applies.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-saral-jeevan-bima',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-saral-jeevan-bima',
    status: 'verified current',
    lastVerified: 'October 2026'
  },

  // CHILD PLANS
  {
    id: 'lic-amritbaal',
    name: "LIC's Amritbaal",
    category: 'Child Plans',
    categorySlug: 'child-plans',
    planNo: 'Plan No. 874',
    uin: 'UIN: 512N365V01',
    tagline: 'Individual savings plan specifically designed to build an education corpus for children with high guaranteed additions.',
    badge: 'Education Guaranteed',
    description: "LIC's Amritbaal is a non-linked, non-participating, individual, savings plan specially designed to build a solid financial foundation for children's higher education and career start. It features attractive Guaranteed Additions of ₹80 per thousand Basic Sum Assured per policy year.",
    suitability: 'Parents and grandparents planning for higher education, study abroad, and career startup funds for young children.',
    keyFeatures: [
      'Guaranteed Additions of ₹80 per ₹1,000 Sum Assured added every policy year.',
      'Entry age starts from just 30 days old up to 13 years.',
      'Maturity age synchronized with college entrance: 18 to 25 years.',
      'Option to receive maturity benefit in flexible installments.',
      'Premium Waiver Benefit Rider ensures plan continues without payments upon parent demise.'
    ],
    premiumPayment: 'Single Premium or Limited Pay (5, 6, or 7 years)',
    eligibilitySummary: {
      minAge: '30 days (completed)',
      maxAge: '13 years',
      policyTerm: '10 to 25 years (Maturity age 18-25)',
      minSumAssured: '₹2,00,000'
    },
    exclusions: 'Risk begins after 2 years or on child reaching age 8 (whichever is earlier). Standard underwriting applies.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-amritbaal',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-amritbaal',
    status: 'verified current',
    lastVerified: 'October 2026'
  },
  {
    id: 'lic-jeevan-tarun',
    name: "LIC's Jeevan Tarun",
    category: 'Child Plans',
    categorySlug: 'child-plans',
    planNo: 'Plan No. 934',
    uin: 'UIN: 512N299V02',
    tagline: 'Flexible educational milestone plan offering 4 survival benefit distribution options between ages 20 to 25.',
    badge: 'Flexible College Payouts',
    description: "LIC's Jeevan Tarun is a participating non-linked child plan that provides an attractive combination of protection and savings. The plan is structured to provide annual payouts during the vital college years from age 20 to 24, followed by a lump sum maturity bonus at age 25.",
    suitability: 'Parents wanting structured liquidity tailored exactly to collegiate semesters and post-graduation expenses.',
    keyFeatures: [
      '4 flexible payout options ranging from 100% maturity to 15% annual survival payouts from ages 20 to 24.',
      'Premiums payable only until the child reaches age 20.',
      'Participating bonuses add to the final maturity payout at age 25.',
      'Premium Waiver Benefit Rider protects policy continuation if parent passes away.'
    ],
    premiumPayment: 'Payable till child reaches age 20',
    eligibilitySummary: {
      minAge: '90 days (completed)',
      maxAge: '12 years (nearer birthday)',
      policyTerm: '25 minus entry age',
      minSumAssured: '₹75,000'
    },
    exclusions: 'Commencement of risk rules for minors apply. Full details in official product prospectus.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-jeevan-tarun',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-jeevan-tarun',
    status: 'verified current',
    lastVerified: 'October 2026'
  },

  // RETIREMENT & PENSION
  {
    id: 'lic-jeevan-akshay-vii',
    name: "LIC's Jeevan Akshay-VII",
    category: 'Pension & Retirement',
    categorySlug: 'retirement',
    planNo: 'Plan No. 857',
    uin: 'UIN: 512N337V04',
    tagline: 'Immediate annuity pension plan with guaranteed lifelong payouts starting immediately upon single premium deposit.',
    badge: 'Immediate Pension',
    description: "LIC's Jeevan Akshay-VII is an immediate annuity plan where you pay a single lump-sum premium and start receiving guaranteed pension payments immediately (monthly, quarterly, half-yearly, or yearly) for the rest of your life.",
    suitability: 'Retirees or seniors looking for guaranteed, steady pension checks without market volatility.',
    keyFeatures: [
      '10 distinct annuity options to choose from (Life annuity, Joint life with spouse, Return of Purchase Price).',
      'Guaranteed annuity rate locked-in for life from the day of purchase.',
      'Option for spouse to continue receiving 100% pension after demise with purchase price returned to children.',
      'Incentives for higher purchase price deposits (₹5 Lakhs and above).'
    ],
    premiumPayment: 'Single Premium only',
    eligibilitySummary: {
      minAge: '30 years (completed)',
      maxAge: '85 years (up to 100 for Option F)',
      policyTerm: 'Lifelong',
      minSumAssured: 'Minimum Purchase Price ₹1,00,000'
    },
    exclusions: 'No medical exam required in most cases. Surrender allowed under select options subject to rules.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-jeevan-akshay-vii',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-jeevan-akshay-vii',
    status: 'verified current',
    lastVerified: 'October 2026'
  },
  {
    id: 'lic-new-jeevan-shanti',
    name: "LIC's New Jeevan Shanti",
    category: 'Pension & Retirement',
    categorySlug: 'retirement',
    planNo: 'Plan No. 858',
    uin: 'UIN: 512N338V04',
    tagline: 'Deferred annuity plan locking in high guaranteed pension rates today for retirement in the future.',
    badge: 'Deferred Retirement',
    description: "LIC's New Jeevan Shanti is a single premium deferred annuity plan. You invest today and defer your pension for 1 to 12 years. The annuity rates are guaranteed at inception and increase the longer you defer, providing a substantial pension when you retire.",
    suitability: 'Working professionals in their 40s and 50s planning for early retirement or securing pension for their spouse.',
    keyFeatures: [
      'Single premium with deferment periods from 1 to 12 years.',
      'Guaranteed additions accrue throughout the deferment period.',
      'Option 1 (Single Life Deferred) and Option 2 (Joint Life Deferred with spouse/parent/child).',
      'Loan facility available after 3 months from inception.'
    ],
    premiumPayment: 'Single Premium only',
    eligibilitySummary: {
      minAge: '30 years (completed)',
      maxAge: '79 years',
      policyTerm: 'Lifelong (Deferment 1 to 12 years)',
      minSumAssured: 'Minimum Purchase Price ₹1,50,000'
    },
    exclusions: 'Death benefit during deferment = Purchase Price + Accrued Guaranteed Additions minus prior deductions.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-new-jeevan-shanti',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-new-jeevan-shanti',
    status: 'verified current',
    lastVerified: 'October 2026'
  },

  // UNIT LINKED (ULIP)
  {
    id: 'lic-index-plus',
    name: "LIC's Index Plus",
    category: 'Unit-Linked Plans',
    categorySlug: 'market-linked',
    planNo: 'Plan No. 873',
    uin: 'UIN: 512L349V01',
    tagline: 'Unit-linked insurance plan investing in Nifty 50 and Nifty Next 50 index funds with life cover.',
    badge: 'Index Fund ULIP',
    description: "LIC's Index Plus is a unit-linked, non-participating, regular premium individual life insurance plan that offers life insurance cover along with savings. Premium is invested in index-based funds (Flexi Growth Fund, Flexi Smart Growth Fund) tracking top index stocks.",
    suitability: 'Informed investors seeking long-term index growth alongside life cover and guaranteed additions.',
    keyFeatures: [
      'Guaranteed Additions added as percentage of annualized premium at specified durations.',
      'Choice of 4 distinct funds including Nifty 50 and Nifty Next 50 tracking index portfolios.',
      '4 free fund switches per policy year to align with market trends.',
      'Partial withdrawals permitted after 5-year lock-in period.'
    ],
    premiumPayment: 'Yearly, Half-Yearly, Quarterly, Monthly',
    eligibilitySummary: {
      minAge: '90 days (completed)',
      maxAge: '50 or 60 years (based on Sum Assured option)',
      policyTerm: '10 to 25 years',
      minSumAssured: '7x to 10x Annualized Premium'
    },
    exclusions: 'Investment risk in portfolio is borne by the policyholder. 5-year statutory lock-in period applies.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-index-plus',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-index-plus',
    status: 'verified current',
    lastVerified: 'October 2026'
  },
  {
    id: 'lic-siip',
    name: "LIC's SIIP",
    category: 'Unit-Linked Plans',
    categorySlug: 'market-linked',
    planNo: 'Plan No. 852',
    uin: 'UIN: 512L334V01',
    tagline: 'Systematic regular investment plan with life cover and refund of mortality charges at maturity.',
    badge: 'Mortality Charge Refund',
    description: "LIC's SIIP is a unit-linked regular premium plan that provides market-linked savings and life cover. Notably, it refunds all deducted mortality charges at maturity, maximizing your total investment accumulation.",
    suitability: 'Disciplined savers wanting systematic monthly investments with insurance protection.',
    keyFeatures: [
      'Refund of full mortality charges upon completion of maturity.',
      'Guaranteed Additions credited to unit account at 6, 10, 15, 20, and 25 years.',
      'Choice of Bond, Secured, Balanced, and Growth funds.',
      'Tax advantages on maturity subject to prevailing Section 10(10D) limits.'
    ],
    premiumPayment: 'Yearly, Half-Yearly, Quarterly, Monthly (SIP format)',
    eligibilitySummary: {
      minAge: '90 days (completed)',
      maxAge: '65 years',
      policyTerm: '10 to 25 years',
      minSumAssured: '10x Annualized Premium'
    },
    exclusions: 'ULIP investment risk is borne by the policyholder. 5-year lock-in period applies.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-siip',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-siip',
    status: 'verified current',
    lastVerified: 'October 2026'
  },

  // HEALTH & RIDERS
  {
    id: 'lic-cancer-cover',
    name: "LIC's Cancer Cover",
    category: 'Health & Riders',
    categorySlug: 'health-and-riders',
    planNo: 'Plan No. 905',
    uin: 'UIN: 512N314V02',
    tagline: 'Non-linked regular premium health plan offering financial protection against early and major stages of cancer.',
    badge: 'Dedicated Cancer Shield',
    description: "LIC's Cancer Cover is a regular premium health insurance plan providing financial assistance upon diagnosis of specified early or major stage cancer. It pays lump-sum benefits and provides income benefits plus premium waivers.",
    suitability: 'Individuals wishing to secure their family against the high treatment costs of oncological illnesses.',
    keyFeatures: [
      'Early Stage: 25% of Sum Insured paid + 3 years future premiums waived.',
      'Major Stage: 100% of Sum Insured paid + Income Benefit of 1% of Sum Insured per month for 10 years + all future premiums waived.',
      'Option 1 (Level Sum Insured) and Option 2 (Increasing Sum Insured by 10% each year).',
      'No medical examination required in many age categories.'
    ],
    premiumPayment: 'Yearly, Half-Yearly',
    eligibilitySummary: {
      minAge: '20 years (completed)',
      maxAge: '65 years',
      policyTerm: '10 to 30 years',
      minSumAssured: '₹10,00,000 (Max ₹50,00,000)'
    },
    exclusions: 'Waiting period of 180 days applies. Pre-existing cancer and sexually transmitted diseases excluded. Refer official brochure.',
    officialUrl: 'https://www.licindia.in/en/web/guest/lics-cancer-cover',
    brochureUrl: 'https://www.licindia.in/en/web/guest/lics-cancer-cover',
    status: 'verified current',
    lastVerified: 'October 2026'
  },
  {
    id: 'lic-accidental-rider',
    name: "LIC's Accidental Death and Disability Benefit Rider",
    category: 'Health & Riders',
    categorySlug: 'health-and-riders',
    planNo: 'Attached Rider',
    uin: 'UIN: 512B209V02',
    tagline: 'Essential add-on rider providing supplementary sum assured on accidental demise and monthly disability income.',
    badge: 'Crucial Add-On',
    description: "An add-on rider attachable to most non-linked base policies. In case of unfortunate demise due to accident, an additional Accident Benefit Sum Assured is paid. In case of permanent accidental disability, future rider premiums are waived and disability benefits are paid monthly for 10 years.",
    suitability: 'Highly recommended for any policyholder travelling, commuting, or seeking robust accidental protection at low cost.',
    keyFeatures: [
      'Double protection: Additional Accident Sum Assured paid to nominee.',
      'Accidental disability benefit: 10 years monthly income support.',
      'All future rider premiums waived in case of permanent disability.',
      'Very affordable nominal premium rates.'
    ],
    premiumPayment: 'Attached to base policy premium schedule',
    eligibilitySummary: {
      minAge: '18 years (completed)',
      maxAge: '65 years (Ceasing age 70)',
      policyTerm: 'Co-terminus with base policy',
      minSumAssured: 'Up to Basic Sum Assured (Max ₹2 Crores)'
    },
    exclusions: 'Intentional self-injury, intoxication, violation of law, military action excluded. Refer official rider document.',
    officialUrl: 'https://www.licindia.in/en/web/guest/insurance-plan',
    brochureUrl: 'https://www.licindia.in/en/web/guest/insurance-plan',
    status: 'verified current',
    lastVerified: 'October 2026'
  }
];

export const getPlansByCategory = (categorySlug: PlanItem['categorySlug']) => {
  return allPlans.filter(p => p.categorySlug === categorySlug);
};

export const getPlanById = (id: string) => {
  return allPlans.find(p => p.id === id);
};
