import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Shield, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  MessageSquare,
  BookOpen
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { planCategories, getPlansByCategory, PlanItem } from '../data/plansData';
import { PlanCard } from '../components/plans/PlanCard';
import { agentConfig } from '../data/agentConfig';

interface PlanCategoryPageProps {
  onSelectPlan: (plan: PlanItem) => void;
  onDiscussPlan: (planName: string) => void;
  onOpenConsultation: (planName?: string) => void;
}

export const PlanCategoryPage: React.FC<PlanCategoryPageProps> = ({
  onSelectPlan,
  onDiscussPlan,
  onOpenConsultation,
}) => {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  const category = planCategories.find((c) => c.slug === categorySlug);
  
  if (!category) {
    return <Navigate to="/plans" replace />;
  }

  const plans = getPlansByCategory(category.slug);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10">
      
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Insurance Plans', path: '/plans' },
          { label: category.title },
        ]}
      />

      {/* Category Hero Banner */}
      <div className="bg-gradient-to-r from-[#102A43] via-[#004C97] to-[#102A43] text-white p-6 sm:p-10 rounded-2xl space-y-4 shadow-md">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C5A15B] text-xs font-bold border border-white/20">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Category Catalogue</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans',sans-serif]">
          {category.title}
        </h1>

        <p className="text-xs sm:text-sm text-slate-200 max-w-3xl leading-relaxed">
          {category.longDesc}
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
          <button
            type="button"
            onClick={() => onOpenConsultation(`Category: ${category.title}`)}
            className="px-4 py-2 bg-[#C5A15B] hover:bg-[#b5914b] text-[#102A43] font-bold rounded-lg transition-colors flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Consult on {category.title}</span>
          </button>

          <a
            href={category.officialLicUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#C5A15B] underline flex items-center gap-1"
          >
            <span>Official LIC {category.title} Page</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Strategic Considerations & Ideal For Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-[#102A43] flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#004C97]" />
            <span>Who Should Consider {category.title}?</span>
          </h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {category.idealFor}
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-[#102A43] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#C5A15B]" />
            <span>Key Regulatory &amp; Policy Features</span>
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-600">
            {category.keyConsiderations.map((item, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#004C97] mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Plans Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <h2 className="text-xl font-bold text-[#102A43]">
            Verified Current Plans in this Category ({plans.length})
          </h2>
          <span className="text-xs text-slate-500">
            Verified as of October 2026
          </span>
        </div>

        {plans.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onSelectPlan={onSelectPlan}
                onDiscussPlan={onDiscussPlan}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-xs text-slate-600 space-y-3">
            <p>
              No verified active products currently listed under this category. Please check the official LIC catalogue for updates.
            </p>
            <a
              href={agentConfig.officialLicUrls.products}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-[#004C97] underline"
            >
              <span>Visit Official LIC Product Directory</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-bold text-base text-[#102A43]">
            Need Personal Clarification on {category.title}?
          </h3>
          <p className="text-xs text-slate-600 max-w-xl">
            Get an objective breakdown of eligibility, policy terms, and premium calculation parameters for your family.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={agentConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-lg hover:bg-[#20bd5a] transition-colors flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Advisor</span>
          </a>

          <button
            type="button"
            onClick={() => onOpenConsultation(`Category: ${category.title}`)}
            className="px-4 py-2.5 bg-[#004C97] hover:bg-[#003B75] text-white text-xs font-bold rounded-lg transition-colors"
          >
            Book Consultation
          </button>
        </div>
      </div>

    </div>
  );
};
