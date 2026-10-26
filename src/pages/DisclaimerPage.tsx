import React from 'react';
import { AlertCircle, Shield, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { agentConfig } from '../data/agentConfig';

export const DisclaimerPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 text-left">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Insurance & Website Disclaimer' }]} />

      {/* Header */}
      <div className="border-b border-slate-200 pb-5 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
          <span>Regulatory Disclosures &amp; Legal Notices</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] font-['Plus_Jakarta_Sans',sans-serif]">
          Insurance &amp; Website Disclaimer
        </h1>
        <p className="text-xs text-slate-500">
          Mandatory public notice pursuant to insurance solicitation guidelines in India.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6 text-xs text-slate-700 leading-relaxed">
        
        {/* Core Statutory Disclaimer Box */}
        <div className="bg-amber-50/70 border-l-4 border-[#C5A15B] p-5 rounded-r-xl space-y-3 text-slate-800">
          <p className="font-bold text-sm text-[#102A43]">
            Official Statutory Declaration:
          </p>
          <p className="text-xs leading-relaxed text-slate-800">
            &ldquo;This website is an independently operated informational website for an individual insurance agent. It is not the official corporate website of Life Insurance Corporation of India (LIC). LIC&apos;s official website is <a href="https://www.licindia.in/" target="_blank" rel="noopener noreferrer" className="text-[#004C97] font-semibold underline">https://www.licindia.in/</a>.
          </p>
          <p className="text-xs leading-relaxed text-slate-800">
            Product names, descriptions, plan numbers, UINs, brochures, eligibility criteria, premiums, benefits, exclusions, and terms must be verified against the latest official LIC documents. Product availability and individual eligibility may vary.
          </p>
          <p className="text-xs leading-relaxed text-slate-800">
            This website provides general information and does not constitute a policy contract, a personalized financial recommendation, or a guarantee of policy issuance, returns, bonuses, or claim settlement. The applicable policy document and insurer-approved terms govern the actual insurance contract.&rdquo;
          </p>
        </div>

        {/* Section 1: Non-Corporate Relationship */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider">
            1. Nature of the Website
          </h2>
          <p>
            This website is maintained by an authorized, appointed individual insurance agent affiliated with Life Insurance Corporation of India (LIC), serving Bhubaneswar, Odisha. It is designed to assist prospective and existing policyholders with product education, general information, and customer servicing procedural guidance. It is not owned, maintained, or endorsed by LIC as a corporate portal.
          </p>
        </section>

        {/* Section 2: No Guaranteed Returns or Approvals */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider">
            2. No Financial or Settlement Guarantees
          </h2>
          <p>
            Any illustrative calculations, historical bonus references, or benefit overviews presented on this website are for general understanding only:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Reversionary Bonuses:</strong> Bonuses in participating with-profit policies depend on the annual actuarial valuation and profits declared by LIC India and are not guaranteed.</li>
            <li><strong>Unit Linked Plans (ULIPs):</strong> Past fund performance does not guarantee future results. Investment risk in the investment portfolio is borne by the policyholder.</li>
            <li><strong>Claim Settlement:</strong> Claim admissibility is subject to official verification of terms, conditions, waiting periods, and accurate disclosure in the original proposal form in accordance with Section 45 of the Insurance Act.</li>
          </ul>
        </section>

        {/* Section 3: Solicitation Notice */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider">
            3. Insurance Solicitation Notice
          </h2>
          <p className="font-semibold text-slate-800">
            &ldquo;Insurance is the subject matter of solicitation.&rdquo;
          </p>
          <p>
            Prospective buyers are advised to read the sales brochure and policy terms carefully before concluding a sale. The agent acts as an intermediary facilitating understanding and application processing; the legal contract of insurance is solely between the policyholder and Life Insurance Corporation of India.
          </p>
        </section>

        {/* Section 4: External Links & Verification */}
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider">
            4. Official Corporate Resources
          </h2>
          <p>
            Always verify policy details through official LIC India channels:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <a
              href={agentConfig.officialLicUrls.portalHome}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-[#004C97] hover:bg-slate-100 flex items-center justify-between"
            >
              <span>LIC Corporate Website</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href={agentConfig.officialLicUrls.policyStatus}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-[#004C97] hover:bg-slate-100 flex items-center justify-between"
            >
              <span>LIC Policy Status Portal</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </section>

      </div>

    </div>
  );
};
