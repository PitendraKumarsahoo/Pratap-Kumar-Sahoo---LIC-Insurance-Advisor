import React from 'react';
import { X, Shield } from 'lucide-react';
import { ConsultationForm } from './ConsultationForm';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlanName?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  initialPlanName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#102A43] text-white p-5 sm:p-6 relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-300 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-4 h-4 text-[#C5A15B]" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#C5A15B]">
              Personalized Consultation
            </span>
          </div>

          <h2 className="text-xl font-bold font-['Plus_Jakarta_Sans',sans-serif] text-white">
            {initialPlanName ? `Enquire About ${initialPlanName}` : 'Book a Personal Insurance Consultation'}
          </h2>

          <p className="text-xs text-slate-300 mt-1">
            Serving Bhubaneswar &amp; Odisha. Honest advice, zero pressure, official terms.
          </p>
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          <ConsultationForm
            initialPlanName={initialPlanName}
            onSuccess={() => {}}
            compact={false}
          />
        </div>

      </div>
    </div>
  );
};
