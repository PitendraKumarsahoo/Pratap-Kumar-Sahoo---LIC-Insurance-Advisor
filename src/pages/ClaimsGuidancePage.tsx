import React from 'react';
import { 
  FileText, 
  ExternalLink, 
  AlertCircle, 
  ShieldAlert, 
  CheckCircle2, 
  Phone, 
  MessageSquare,
  HelpCircle,
  Clock,
  Heart
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { agentConfig } from '../data/agentConfig';

export const ClaimsGuidancePage: React.FC<{ onOpenConsultation: (planName?: string) => void }> = ({ onOpenConsultation }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10 text-left">
      
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Customer Services', path: '/services' },
          { label: 'Claim Guidance' },
        ]}
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#102A43] via-[#004C97] to-[#102A43] text-white p-6 sm:p-10 rounded-2xl space-y-3 shadow-md">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C5A15B] text-xs font-bold border border-white/20">
          <FileText className="w-3.5 h-3.5" />
          <span>Informational Guidance</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans',sans-serif]">
          LIC Claim Guidance &amp; Procedures
        </h1>

        <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
          Step-by-step documentation procedures for maturity settlements, periodic survival payouts, and death claim submissions through authorized LIC branch offices.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href={agentConfig.phoneTelLink}
            className="px-4 py-2.5 bg-white text-[#102A43] text-xs font-bold rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#004C97]" />
            <span>Call for Guidance (+91 89086 77424)</span>
          </a>

          <a
            href={agentConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-lg hover:bg-[#20bd5a] transition-colors flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Procedural Enquiry</span>
          </a>
        </div>
      </div>

      {/* Compliance & Privacy Warning (Section 11 requirement) */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-5 text-xs text-amber-950 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-amber-900 text-sm">
            Regulatory &amp; Sensitive Document Protection:
          </p>
          <p className="leading-relaxed">
            Please note that our website provides general informational guidance only. We do not promise claim settlement, payout amounts, approval timelines, or claim acceptance. Claim settlement is decided solely by Life Insurance Corporation of India (LIC) in accordance with Section 45 of the Insurance Act and official policy terms.
          </p>
          <p className="leading-relaxed font-semibold text-amber-900 pt-1">
            Do not upload death certificates, hospital records, post-mortem reports, or identity cards via web forms. All sensitive claim documents must be submitted in person directly to the authorized servicing LIC branch.
          </p>
        </div>
      </div>

      {/* 6-Step Claim Roadmap (Section 11 requirement) */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#102A43]">
          Official 6-Step Claim Roadmap
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              step: 'Step 1',
              title: 'Contact Local Advisor',
              desc: 'Reach out to your local advisor in Bhubaneswar to identify the servicing branch and receive the official LIC claim discharge forms.',
            },
            {
              step: 'Step 2',
              title: 'Identify Claim Type',
              desc: 'Determine whether your request is a Maturity Claim, Periodic Survival Benefit (Money-Back), or Death Claim.',
            },
            {
              step: 'Step 3',
              title: 'Check LIC Requirements',
              desc: 'Verify the specific list of official documents required by the branch based on the policy term and cause of claim.',
            },
            {
              step: 'Step 4',
              title: 'Prepare Specified Documents',
              desc: 'Collect the original Policy Bond, discharge form signed across revenue stamp, NEFT mandate, and bank verification.',
            },
            {
              step: 'Step 5',
              title: 'Submit via Authorized Channel',
              desc: 'Deliver the claim dossier in person to the servicing LIC branch and obtain an official stamped acknowledgement receipt.',
            },
            {
              step: 'Step 6',
              title: 'Track Claim Status',
              desc: 'Follow the official claim-status process through the LIC Customer Portal or direct branch tracking until NEFT credit.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#C5A15B] bg-slate-100 px-2 py-0.5 rounded">
                {item.step}
              </span>
              <h3 className="font-bold text-sm text-[#102A43]">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Claim Categories Breakdown */}
      <div className="space-y-6 pt-4 border-t border-slate-200">
        <h2 className="text-xl font-bold text-[#102A43]">
          Claim Types &amp; Documentation Checklist
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Maturity Claim */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              MC
            </div>
            <h3 className="font-bold text-base text-[#102A43]">Maturity Claims</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Payable to the surviving policyholder upon successful completion of the full policy term.
            </p>
            <div className="pt-2 text-xs text-slate-700 space-y-1.5 border-t border-slate-100">
              <p className="font-semibold text-slate-800">Required Documents:</p>
              <ul className="space-y-1 text-[11px] text-slate-600">
                <li>&bull; Original Policy Document (Bond)</li>
                <li>&bull; Duly filled Discharge Voucher (Form 3825)</li>
                <li>&bull; NEFT Mandate Form with cancelled cheque</li>
                <li>&bull; Proof of Identity and Address (KYC)</li>
              </ul>
            </div>
          </div>

          {/* Survival Benefits (Money Back) */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#004C97] flex items-center justify-center font-bold">
              SB
            </div>
            <h3 className="font-bold text-base text-[#102A43]">Survival Benefits</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Periodic installment payouts under Money-Back plans at designated anniversaries (e.g. 5th, 10th, 15th year).
            </p>
            <div className="pt-2 text-xs text-slate-700 space-y-1.5 border-t border-slate-100">
              <p className="font-semibold text-slate-800">Required Documents:</p>
              <ul className="space-y-1 text-[11px] text-slate-600">
                <li>&bull; Discharge Voucher (Form 5180)</li>
                <li>&bull; Active bank account NEFT verification</li>
                <li>&bull; Confirmation that premiums are paid up to date</li>
                <li>&bull; Copy of Policy Document</li>
              </ul>
            </div>
          </div>

          {/* Death Claim */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs">
            <div className="w-10 h-10 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center font-bold">
              DC
            </div>
            <h3 className="font-bold text-base text-[#102A43]">Death Claims</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Payable to registered nominees or legal heirs in the unfortunate event of the policyholder&apos;s demise during policy tenure.
            </p>
            <div className="pt-2 text-xs text-slate-700 space-y-1.5 border-t border-slate-100">
              <p className="font-semibold text-slate-800">Required Documents:</p>
              <ul className="space-y-1 text-[11px] text-slate-600">
                <li>&bull; Original Policy Bond</li>
                <li>&bull; Claim Form &lsquo;A&rsquo; (Claimant&apos;s Statement)</li>
                <li>&bull; Official Death Certificate from municipal registrar</li>
                <li>&bull; Medical Attendant&apos;s Certificate (Form &lsquo;B&rsquo;) if hospitalized</li>
                <li>&bull; FIR / Post-Mortem Report for accidental demise</li>
                <li>&bull; Nominee KYC and bank details</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
