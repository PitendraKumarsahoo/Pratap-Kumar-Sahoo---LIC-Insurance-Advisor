import React from 'react';
import { 
  X, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Calendar, 
  Shield, 
  MessageSquare, 
  Bookmark, 
  BookmarkCheck,
  Coins
} from 'lucide-react';
import { PlanItem } from '../../data/plansData';
import { getWhatsAppConsultationUrl } from '../../data/agentConfig';
import { useAuth } from '../../context/AuthContext';
import { db } from '../../firebase/config';
import { doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';

interface PlanDetailModalProps {
  plan: PlanItem | null;
  onClose: () => void;
  onOpenConsultation: (planName: string) => void;
}

export const PlanDetailModal: React.FC<PlanDetailModalProps> = ({
  plan,
  onClose,
  onOpenConsultation,
}) => {
  const { user } = useAuth();
  const [isSaved, setIsSaved] = React.useState(false);
  const [savingLoading, setSavingLoading] = React.useState(false);

  React.useEffect(() => {
    if (!plan || !user) {
      setIsSaved(false);
      return;
    }
    const checkSaved = async () => {
      try {
        const docRef = doc(db, 'users', user.uid, 'savedPlans', plan.id);
        const snap = await getDoc(docRef);
        setIsSaved(snap.exists());
      } catch (e) {
        console.warn('Error checking saved plan status:', e);
      }
    };
    checkSaved();
  }, [plan, user]);

  const handleToggleSavePlan = async () => {
    if (!plan) return;
    if (!user) {
      alert('Please log in with your Google account in the top portal link to bookmark plans to your personal account.');
      return;
    }
    setSavingLoading(true);
    try {
      const docRef = doc(db, 'users', user.uid, 'savedPlans', plan.id);
      if (isSaved) {
        await deleteDoc(docRef);
        setIsSaved(false);
      } else {
        await setDoc(docRef, {
          planId: plan.id,
          planName: plan.name,
          category: plan.category,
          savedAt: new Date().toISOString(),
          notes: plan.tagline,
        });
        setIsSaved(true);
      }
    } catch (err) {
      console.error('Error toggling saved plan:', err);
    } finally {
      setSavingLoading(false);
    }
  };

  if (!plan) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-[#102A43] text-white p-5 sm:p-6 relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider bg-[#004C97] text-white px-2.5 py-0.5 rounded-full border border-blue-400/30">
              {plan.category}
            </span>
            {plan.badge && (
              <span className="text-[11px] font-semibold bg-[#C5A15B] text-[#102A43] px-2.5 py-0.5 rounded-full">
                {plan.badge}
              </span>
            )}
            <span className="text-[11px] text-slate-300 ml-auto mr-8">
              Verified: {plan.lastVerified}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold font-['Plus_Jakarta_Sans',sans-serif] text-white leading-snug">
            {plan.name}
          </h2>

          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-300">
            <span className="font-mono bg-white/10 px-2 py-0.5 rounded">
              {plan.planNo}
            </span>
            <span className="font-mono bg-white/10 px-2 py-0.5 rounded">
              {plan.uin}
            </span>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto text-xs text-slate-700 leading-relaxed">
          
          {/* Summary / Tagline */}
          <div className="bg-blue-50/80 border border-blue-100 p-4 rounded-xl text-slate-800">
            <p className="font-semibold text-sm text-[#004C97] mb-1">Overview</p>
            <p className="text-xs text-slate-700 leading-relaxed">{plan.description}</p>
          </div>

          {/* Who Might Consider Exploring It */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2 flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-[#C5A15B]" />
              Who Might Consider Exploring This
            </h4>
            <p className="bg-slate-50 border border-slate-200 p-3 rounded-lg text-slate-700">
              {plan.suitability}
            </p>
          </div>

          {/* Officially Documented Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#102A43] mb-2 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#004C97]" />
              Key Documented Features
            </h4>
            <ul className="grid grid-cols-1 gap-2">
              {plan.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-slate-50/70 p-2.5 rounded-lg border border-slate-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004C97] mt-1.5 shrink-0" />
                  <span className="text-slate-800">{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Payment & Eligibility Parameters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
              <p className="font-bold text-[#102A43] text-xs flex items-center gap-1.5 mb-2">
                <Coins className="w-3.5 h-3.5 text-[#C5A15B]" />
                Premium Payment Modes
              </p>
              <p className="text-slate-700">{plan.premiumPayment}</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl">
              <p className="font-bold text-[#102A43] text-xs flex items-center gap-1.5 mb-2">
                <Calendar className="w-3.5 h-3.5 text-[#004C97]" />
                Eligibility Parameters
              </p>
              <div className="space-y-1 text-[11px] text-slate-600">
                {plan.eligibilitySummary.minAge && <div><strong>Entry Age:</strong> {plan.eligibilitySummary.minAge} to {plan.eligibilitySummary.maxAge}</div>}
                {plan.eligibilitySummary.policyTerm && <div><strong>Policy Term:</strong> {plan.eligibilitySummary.policyTerm}</div>}
                {plan.eligibilitySummary.minSumAssured && <div><strong>Min. Sum Assured:</strong> {plan.eligibilitySummary.minSumAssured}</div>}
              </div>
            </div>
          </div>

          {/* Conditions, Exclusions & Limitations */}
          <div className="bg-amber-50/60 border border-amber-200/80 p-3.5 rounded-xl text-amber-900">
            <h5 className="font-bold text-xs flex items-center gap-1.5 text-amber-900 mb-1">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
              Conditions, Exclusions & Regulatory Notes
            </h5>
            <p className="text-[11px] leading-relaxed text-amber-950">
              {plan.exclusions}
            </p>
            <p className="text-[10px] text-amber-800 mt-1 italic">
              * Note: Please consult the official LIC policy document or brochure for complete terms, conditions, waiting periods, and underwriting rules.
            </p>
          </div>

          {/* Official Verification Links */}
          <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-slate-200">
            <a
              href={plan.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#004C97] hover:underline font-semibold text-xs"
            >
              <span>Official LIC Product Page</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <span className="text-slate-300">&bull;</span>

            <a
              href={plan.brochureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 font-medium text-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Official Documentation</span>
            </a>
          </div>

        </div>

        {/* Modal Footer CTAs */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            type="button"
            onClick={handleToggleSavePlan}
            disabled={savingLoading}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${
              isSaved 
                ? 'bg-amber-50 text-amber-800 border-amber-300' 
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
            }`}
          >
            {isSaved ? (
              <>
                <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>Saved to My Portal</span>
              </>
            ) : (
              <>
                <Bookmark className="w-3.5 h-3.5 text-slate-400" />
                <span>Bookmark Plan</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-2">
            <a
              href={getWhatsAppConsultationUrl(plan.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Advisor</span>
            </a>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenConsultation(plan.name);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#004C97] hover:bg-[#003B75] shadow-xs transition-colors"
            >
              <span>Discuss This Plan</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
