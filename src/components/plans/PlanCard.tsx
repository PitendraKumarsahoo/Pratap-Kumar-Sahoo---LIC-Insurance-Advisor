import React from 'react';
import { 
  Shield, 
  ExternalLink, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  MessageSquare 
} from 'lucide-react';
import { PlanItem } from '../../data/plansData';
import { getWhatsAppConsultationUrl } from '../../data/agentConfig';

interface PlanCardProps {
  plan: PlanItem;
  onSelectPlan: (plan: PlanItem) => void;
  onDiscussPlan: (planName: string) => void;
}

export const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  onSelectPlan,
  onDiscussPlan,
}) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200/90 hover:border-[#004C97]/40 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      
      {/* Top Section */}
      <div className="p-5 sm:p-6 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-50 text-[#004C97] border border-blue-100">
            {plan.category}
          </span>
          {plan.badge && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
              {plan.badge}
            </span>
          )}
        </div>

        <div>
          <h3 className="text-base sm:text-lg font-bold text-[#102A43] group-hover:text-[#004C97] transition-colors leading-snug">
            {plan.name}
          </h3>
          <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-500 font-mono">
            <span>{plan.planNo}</span>
            <span>&bull;</span>
            <span>{plan.uin}</span>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
          {plan.tagline}
        </p>

        {/* Feature Highlights */}
        <div className="pt-2 border-t border-slate-100 space-y-1.5">
          {plan.keyFeatures.slice(0, 2).map((feat, i) => (
            <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#004C97] shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="px-5 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => onSelectPlan(plan)}
          className="text-xs font-semibold text-[#004C97] hover:text-[#003B75] flex items-center gap-1 group-hover:gap-1.5 transition-all"
        >
          <span>View Official Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-1.5">
          <a
            href={getWhatsAppConsultationUrl(plan.name)}
            target="_blank"
            rel="noopener noreferrer"
            title="Ask via WhatsApp"
            className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={() => onDiscussPlan(plan.name)}
            className="px-3 py-1.5 bg-[#004C97] hover:bg-[#003B75] text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Discuss Plan
          </button>
        </div>
      </div>

    </div>
  );
};
