import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  ExternalLink, 
  Calendar, 
  Users, 
  TrendingUp, 
  HeartHandshake, 
  PiggyBank, 
  GraduationCap, 
  Coins, 
  Activity, 
  ChevronDown, 
  FileCheck2,
  Clock,
  Sparkles,
  MapPin,
  UserCheck
} from 'lucide-react';
import { agentConfig, getWhatsAppConsultationUrl } from '../data/agentConfig';
import { allPlans, planCategories, PlanItem } from '../data/plansData';
import { PlanCard } from '../components/plans/PlanCard';
import { faqsData } from '../data/faqsData';

interface HomePageProps {
  onOpenConsultation: (planName?: string) => void;
  onSelectPlan: (plan: PlanItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenConsultation,
  onSelectPlan,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [heroImageError, setHeroImageError] = useState(false);
  const [consultImageError, setConsultImageError] = useState(false);

  // Featured plans: Curated selection of 6 verified plans
  const featuredPlans = allPlans.filter(p => [
    'lic-new-jeevan-anand',
    'lic-jeevan-labh',
    'lic-jeevan-utsav',
    'lic-digi-term',
    'lic-amritbaal',
    'lic-jeevan-akshay-vii',
  ].includes(p.id));

  // Quick navigation items
  const quickNavItems = [
    {
      title: 'Protect Your Family',
      desc: 'High financial coverage to secure your loved ones against unforeseen uncertainties.',
      link: '/plans/term-insurance',
      icon: Shield,
      tag: 'Term Assurance',
    },
    {
      title: "Plan for Your Child's Future",
      desc: 'Guaranteed milestone savings for college entrance, degrees, and career launch.',
      link: '/plans/child-plans',
      icon: GraduationCap,
      tag: 'Child Education',
    },
    {
      title: 'Build Long-Term Savings',
      desc: 'Disciplined wealth creation coupled with life cover and bonus additions.',
      link: '/plans/endowment',
      icon: PiggyBank,
      tag: 'Endowment Plans',
    },
    {
      title: 'Plan for Retirement',
      desc: 'Guaranteed lifelong monthly or annual pension stream for your golden years.',
      link: '/plans/retirement',
      icon: Coins,
      tag: 'Pension & Annuity',
    },
  ];

  // Category icons mapping
  const categoryIconMap: Record<string, any> = {
    'term-insurance': Shield,
    'endowment': PiggyBank,
    'whole-life': HeartHandshake,
    'money-back': Coins,
    'child-plans': GraduationCap,
    'retirement': Clock,
    'market-linked': TrendingUp,
    'health-and-riders': Activity,
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 7.A HERO SECTION */}
      <section className="bg-gradient-to-b from-white via-slate-50 to-[#F5F7FA] pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Side Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-[#004C97] text-xs font-bold tracking-wide uppercase">
                <Shield className="w-3.5 h-3.5 text-[#C5A15B]" />
                <span>PERSONALIZED LIFE INSURANCE GUIDANCE</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102A43] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-[1.15]">
                Plan for Tomorrow. <br className="hidden sm:inline" />
                <span className="text-[#004C97]">Protect What Matters Today.</span>
              </h1>

              <p className="text-sm sm:text-base text-[#334155] leading-relaxed max-w-2xl font-normal">
                Explore life insurance options, plan for your family&apos;s future, and get personal guidance from <strong>{agentConfig.agentName}</strong>, an individual LIC agent serving Bhubaneswar and Odisha.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenConsultation()}
                  className="px-6 py-3.5 bg-[#004C97] hover:bg-[#003B75] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <MessageSquare className="w-4 h-4 text-[#C5A15B]" />
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <Link
                  to="/plans"
                  className="px-6 py-3.5 bg-white hover:bg-slate-50 text-[#102A43] border border-slate-300 text-sm font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Insurance Plans</span>
                </Link>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-[#64748B]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Clear information. Personal guidance. Support when you need it.</span>
              </div>
            </div>

            {/* Right Side: Authentic Indian Family Protection Photograph & Discreet Contact Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                
                {/* Authentic Indian Family Photo */}
                <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-slate-100">
                  {!heroImageError ? (
                    <img
                      src={agentConfig.familyHeroPhoto}
                      alt="Indian family protected with life insurance"
                      referrerPolicy="no-referrer"
                      onError={() => setHeroImageError(true)}
                      className="w-full h-full object-cover object-center"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#102A43] via-[#004C97] to-[#1B365D] p-6 text-white flex flex-col justify-end">
                      <h3 className="text-xl font-bold font-['Plus_Jakarta_Sans',sans-serif]">
                        Securing Family Futures
                      </h3>
                      <p className="text-xs text-slate-300">Bhubaneswar, Odisha</p>
                    </div>
                  )}

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/85 via-black/25 to-transparent pointer-events-none" />

                  {/* Top Location / Status Floating Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-[#102A43]/80 px-2.5 py-1 rounded backdrop-blur-xs border border-white/20 text-[#C5A15B]">
                      Advisor: {agentConfig.agentName}
                    </span>
                    <span className="text-[11px] font-semibold bg-[#004C97]/80 px-2.5 py-1 rounded backdrop-blur-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C5A15B]" />
                      Bhubaneswar
                    </span>
                  </div>

                  {/* Bottom Text Over Photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-slate-200">Life Insurance Corporation of India</p>
                    <h3 className="text-lg font-bold font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
                      Family Protection &bull; Savings &bull; Retirement
                    </h3>
                  </div>
                </div>

                {/* Discreet Contact Card Below */}
                <div className="p-5 sm:p-6 bg-white space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
                        <img 
                          src={agentConfig.advisorPhoto} 
                          alt={agentConfig.agentName}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-[#102A43] block">
                          {agentConfig.agentName}
                        </span>
                        <span className="text-[10px] text-slate-500 block">
                          LIC Advisor &bull; Bhubaneswar
                        </span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Available
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs text-slate-500">Telephone / Mobile</p>
                      <a 
                        href={agentConfig.phoneTelLink}
                        className="text-base font-bold text-[#102A43] hover:text-[#004C97] transition-colors"
                      >
                        {agentConfig.phoneDisplay}
                      </a>
                    </div>

                    <a
                      href={agentConfig.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-xs"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-3 border border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#004C97] shrink-0" />
                      <span>Bhubaneswar, Odisha, India</span>
                    </span>
                    <Link to="/about" className="text-[#004C97] font-semibold hover:underline">
                      View Profile &rarr;
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7.B QUICK NAVIGATION CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] font-['Plus_Jakarta_Sans',sans-serif]">
            Find the Right Path for Your Financial Goals
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Plan suitability depends on your individual age, horizon, and official policy terms. Select a priority below to review options.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {quickNavItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={index}
                to={item.link}
                className="bg-white rounded-xl p-6 border border-slate-200/90 hover:border-[#004C97]/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#004C97] flex items-center justify-center group-hover:bg-[#004C97] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#C5A15B]">
                      {item.tag}
                    </span>
                    <h3 className="text-base font-bold text-[#102A43] group-hover:text-[#004C97] transition-colors mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#004C97]">
                  <span>Explore Category</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 7.C EXPLORE INSURANCE PLANS (8 CATEGORIES) */}
      <section className="bg-slate-50/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#004C97]">
                Product Inventory
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] font-['Plus_Jakarta_Sans',sans-serif]">
                Explore Available LIC Insurance Categories
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B] max-w-xl">
                Every category serves distinct financial objectives. Compare features, eligibility, and verified official terms.
              </p>
            </div>
            <Link
              to="/plans"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004C97] hover:underline"
            >
              <span>View Complete Product Index ({allPlans.length} plans)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {planCategories.map((cat) => {
              const Icon = categoryIconMap[cat.slug] || Shield;
              return (
                <div
                  key={cat.slug}
                  className="bg-white rounded-xl p-5 border border-slate-200 hover:border-[#004C97]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#102A43] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#004C97]" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#102A43]">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-[#64748B] mt-1 line-clamp-3 leading-relaxed">
                        {cat.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      to={`/plans/${cat.slug}`}
                      className="text-xs font-semibold text-[#004C97] hover:underline flex items-center gap-1"
                    >
                      <span>Explore Plans</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                    <span className="text-[11px] text-slate-400 font-medium">
                      Official terms
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7.D WHY CONSULT AN INDEPENDENT AGENT? (Featuring Consultation Office Photo) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A15B]">
              Personalized Advisory
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
              Why Consult {agentConfig.agentName} Before Deciding?
            </h2>
            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              Choosing life insurance involves matching your family&apos;s cash flow, tax parameters, and long-term milestones with the correct policy. {agentConfig.agentName} provides objective, transparent guidance without sales pressure in Bhubaneswar.
            </p>

            {/* In-Office Meeting Photo Card */}
            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 relative group">
              {!consultImageError ? (
                <img
                  src={agentConfig.consultationPhoto}
                  alt="Insurance advisory consultation in Bhubaneswar"
                  referrerPolicy="no-referrer"
                  onError={() => setConsultImageError(true)}
                  className="w-full h-48 sm:h-52 object-cover object-center"
                />
              ) : null}
              <div className="p-3 bg-white text-[11px] text-slate-600 flex items-center justify-between">
                <span>Personal advisory sessions in Bhubaneswar</span>
                <span className="font-semibold text-[#004C97]">Odia &bull; Hindi &bull; English</span>
              </div>
            </div>

            <div className="bg-amber-50/70 border border-amber-200/80 p-3.5 rounded-xl text-xs text-amber-900 space-y-1">
              <p className="font-bold">Transparent Commitment:</p>
              <p className="text-[11px] leading-relaxed">
                We never guarantee policy approval, specific investment returns, or claim settlements. All benefits are strictly subject to official LIC terms and underwriting.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Help Understanding Features',
                desc: 'Clear breakdown of maturity terms, guaranteed additions, bonuses, and exclusions in plain Odia, Hindi, or English.',
              },
              {
                title: 'Objective Option Comparison',
                desc: 'Compare term vs endowment vs money-back to identify what fits your personal budget and horizon.',
              },
              {
                title: 'Application & Medical Guidance',
                desc: 'Assistance navigating proposal forms, age proofs, income documents, and medical checkup guidelines.',
              },
              {
                title: 'Policy Servicing Support',
                desc: 'Assistance with nomination changes, address updates, ECS registration, and policy status queries.',
              },
              {
                title: 'Guidance on Claim Documentation',
                desc: 'Compassionate and prompt support for nominees regarding official LIC claim forms and submission steps.',
              },
              {
                title: 'Ongoing Local Communication',
                desc: 'A dedicated point of contact in Bhubaneswar whenever your family has insurance questions.',
              },
            ].map((benefit, i) => (
              <div key={i} className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#004C97] shrink-0" />
                  <h4 className="font-bold text-xs sm:text-sm text-[#102A43]">{benefit.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7.E FEATURED PLANS */}
      <section className="bg-slate-50/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#004C97]">
                Curated Selection
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] font-['Plus_Jakarta_Sans',sans-serif]">
                Featured Life Insurance Plans
              </h2>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Verified current LIC products commonly requested by families and professionals in Bhubaneswar.
              </p>
            </div>

            <Link
              to="/plans"
              className="inline-flex items-center gap-1 text-xs font-bold text-[#004C97] hover:underline shrink-0"
            >
              <span>Explore All {allPlans.length} Plans &rarr;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPlans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onSelectPlan={onSelectPlan}
                onDiscussPlan={(name) => onOpenConsultation(name)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7.F CUSTOMER SERVICE SHORTCUTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C5A15B]">
            Servicing & Support
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] font-['Plus_Jakarta_Sans',sans-serif]">
            Customer Service Shortcuts
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Direct routes to official LIC portals for policyholders and guidance from your local advisor {agentConfig.agentName}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <Coins className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#102A43]">Pay Premium Online</h3>
              <p className="text-xs text-slate-600">
                Use official LIC Direct Pay or Customer Portal. Zero login required for direct premium payments.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link to="/services/premium-payment" className="text-xs font-bold text-[#004C97] hover:underline flex items-center gap-1">
                <span>Payment Instructions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#004C97] flex items-center justify-center">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#102A43]">Check Policy Status</h3>
              <p className="text-xs text-slate-600">
                Verify premium due dates, revival status, and accrued bonus details on the official LIC portal.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link to="/services/policy-servicing" className="text-xs font-bold text-[#004C97] hover:underline flex items-center gap-1">
                <span>Check Status Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#102A43]">Understand Claim Procedures</h3>
              <p className="text-xs text-slate-600">
                Step-by-step procedural guidelines for maturity, survival benefit, and death claim documents.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link to="/services/claims" className="text-xs font-bold text-[#004C97] hover:underline flex items-center gap-1">
                <span>Claim Guidance</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-[#004C97] flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm text-[#102A43]">Contact {agentConfig.agentName.split(' ')[0]}</h3>
              <p className="text-xs text-slate-600">
                Schedule an appointment in Bhubaneswar or ask a question directly via WhatsApp or phone.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-100">
              <Link to="/contact" className="text-xs font-bold text-[#004C97] hover:underline flex items-center gap-1">
                <span>Contact Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7.G HOW CONSULTATION WORKS */}
      <section className="bg-gradient-to-br from-[#102A43] to-[#1B365D] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#C5A15B]">
              Transparent 3-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-['Plus_Jakarta_Sans',sans-serif]">
              How Your Consultation Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              No pressure, no automated policy issuance. Just clear, honest dialogue before you make a decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-[#C5A15B] text-[#102A43] font-extrabold flex items-center justify-center text-sm">
                01
              </div>
              <h3 className="text-base font-bold text-white">1. Tell Us Your Goals</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Share your family protection priorities, child education milestones, or retirement expectations through our simple consultation form or on WhatsApp.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-[#004C97] text-white font-extrabold flex items-center justify-center text-sm border border-blue-400">
                02
              </div>
              <h3 className="text-base font-bold text-white">2. Discuss Suitable Available Options</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We review verified LIC product options together, evaluating premiums, tenure flexibility, bonus track records, and eligibility criteria for each plan.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-3 relative">
              <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-extrabold flex items-center justify-center text-sm">
                03
              </div>
              <h3 className="text-base font-bold text-white">3. Review Official Terms</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Review the official policy prospectus, terms, and conditions carefully. Submitting an enquiry does not obligate you or automatically issue a policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7.H FREQUENTLY ASKED QUESTIONS PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#004C97]">
            Answers to Common Inquiries
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] font-['Plus_Jakarta_Sans',sans-serif]">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            Have questions about life insurance plans and policy procedures? Here are quick answers.
          </p>
        </div>

        <div className="space-y-3">
          {faqsData.slice(0, 5).map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#102A43] hover:text-[#004C97]"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#004C97]' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-8">
          <Link
            to="/faq"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004C97] hover:underline"
          >
            <span>Read all 12 Frequently Asked Questions &rarr;</span>
          </Link>
        </div>
      </section>

      {/* 7.I FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#102A43] via-[#004C97] to-[#102A43] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl">
          <div className="max-w-2xl mx-auto space-y-4 relative z-10">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A15B] bg-white/10 px-3 py-1 rounded-full">
              Serving Bhubaneswar &bull; Odisha
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Plus_Jakarta_Sans',sans-serif] text-white">
              Have Questions About Your Insurance Options?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Connect with <strong>{agentConfig.agentName}</strong> to discuss your family goals and review official LIC terms with clarity.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <a
                href={agentConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp {agentConfig.agentName.split(' ')[0]}</span>
              </a>

              <a
                href={agentConfig.phoneTelLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-[#102A43] hover:bg-slate-100 text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all"
              >
                <Phone className="w-4 h-4 text-[#004C97]" />
                <span>Call {agentConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
