import React from 'react';
import { 
  FileCheck2, 
  ExternalLink, 
  AlertCircle, 
  UserCheck, 
  MapPin, 
  CreditCard, 
  Smartphone, 
  Lock, 
  HelpCircle 
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { agentConfig } from '../data/agentConfig';

export const PolicyServicingPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10 text-left">
      
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Customer Services', path: '/services' },
          { label: 'Policy Servicing & Status' },
        ]}
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#102A43] via-[#004C97] to-[#102A43] text-white p-6 sm:p-10 rounded-2xl space-y-3 shadow-md">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C5A15B] text-xs font-bold border border-white/20">
          <FileCheck2 className="w-3.5 h-3.5" />
          <span>Policy Servicing &amp; In-Force Support</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans',sans-serif]">
          Policy Servicing &amp; Policy Status
        </h1>

        <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
          Verify your policy status, check accrued bonus values, update nomination records, register bank NEFT details, or explore loan eligibility against in-force policies.
        </p>

        {/* Primary CTA Button required by brief */}
        <div className="pt-2">
          <a
            href={agentConfig.officialLicUrls.policyStatus}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A15B] hover:bg-[#b5914b] text-[#102A43] text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors"
          >
            <span>Check Policy Status on LIC</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Authentication and Security Guidance Banner */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 text-xs text-blue-950 flex items-start gap-3">
        <Lock className="w-5 h-5 text-[#004C97] shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-[#004C97] text-sm">
            Portal Authentication Safety Rule:
          </p>
          <p className="leading-relaxed text-slate-700">
            Registration, password setup, and identity verification must be completed <strong>only on the official LIC customer portal</strong> (https://licindia.in/). Never disclose your portal username, password, or Aadhaar OTP to anyone claiming to be from LIC.
          </p>
        </div>
      </div>

      {/* Common Servicing Tasks */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[#102A43]">
          Common Policy Servicing Procedures
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Task 1: Check Status & Revival */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs">
            <h3 className="text-base font-bold text-[#102A43] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#004C97]"></span>
              Policy Status &amp; Revival Guidance
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              If premium was not paid within the 30-day grace period, the policy enters a lapsed state. Lapsed policies can be revived within 5 years from the first unpaid premium date by paying arrears with interest and submitting health declaration Form 680 or 720.
            </p>
            <p className="text-[11px] text-slate-500 italic">
              Our Bhubaneswar office can verify whether special revival campaigns (concession on late fees) are active for your policy.
            </p>
          </div>

          {/* Task 2: Nomination Updation */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs">
            <h3 className="text-base font-bold text-[#102A43] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#004C97]"></span>
              Nomination Registration &amp; Modification
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Section 39 of the Insurance Act allows changing or registering a nominee at any time during policy currency. If your family status has changed (e.g. marriage, birth of child), submit official Form 3750 along with proof of relationship to your servicing LIC branch.
            </p>
            <p className="text-[11px] text-slate-500 italic">
              An official endorsement on the original policy bond is issued upon successful registration.
            </p>
          </div>

          {/* Task 3: NEFT Mandate Registration */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs">
            <h3 className="text-base font-bold text-[#102A43] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#004C97]"></span>
              Bank NEFT Mandate for Payouts
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              All maturity payments, survival installments, and claim disbursements are transferred directly to your bank account via NEFT. Ensure your bank account is linked to your policy by submitting the official NEFT form with a cancelled cheque copy.
            </p>
            <p className="text-[11px] text-slate-500 italic">
              Prevent cheque delays by registering your IFSC and account number well in advance of maturity.
            </p>
          </div>

          {/* Task 4: Policy Loan Facility */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs">
            <h3 className="text-base font-bold text-[#102A43] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#004C97]"></span>
              Loan Against In-Force Policy
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Most endowment, whole life, and money-back plans permit loans after 2 or 3 years of full premium payment. Loans can be obtained up to 90% of the surrender value at competitive interest rates set by LIC, with no fixed repayment schedule (interest payable half-yearly).
            </p>
            <p className="text-[11px] text-slate-500 italic">
              Loan application Form 5196 requires depositing the original policy bond with the servicing branch.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
