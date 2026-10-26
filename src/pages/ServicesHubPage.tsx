import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Coins, 
  FileCheck2, 
  FileText, 
  ArrowRight, 
  ExternalLink, 
  AlertTriangle, 
  UserCheck, 
  Phone, 
  MessageSquare,
  HelpCircle,
  Building2
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { agentConfig } from '../data/agentConfig';

export const ServicesHubPage: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10 text-left">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Customer Services Hub' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#102A43] via-[#004C97] to-[#102A43] text-white p-6 sm:p-10 rounded-2xl space-y-3 shadow-md">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C5A15B] text-xs font-bold border border-white/20">
          <Shield className="w-3.5 h-3.5" />
          <span>Policy Servicing &amp; Assistance Hub</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans',sans-serif]">
          LIC Customer Services Hub
        </h1>
        <p className="text-xs sm:text-sm text-slate-200 max-w-3xl leading-relaxed">
          Access official Life Insurance Corporation of India servicing channels, premium payment gateways, status enquiry tools, and claim guidance with local support in Bhubaneswar.
        </p>
      </div>

      {/* Critical Security & Privacy Warning */}
      <div className="bg-amber-50 border border-amber-300 rounded-xl p-4 sm:p-5 text-xs text-amber-950 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-amber-900">Important Cybersecurity &amp; Payment Safeguard:</p>
          <p className="leading-relaxed">
            Never enter your LIC portal password, OTPs, full credit card numbers, Net Banking credentials, Aadhaar number, or medical reports on any independent agent website. All monetary transactions and customer credential logins must be performed exclusively on the official encrypted website of LIC (<a href="https://www.licindia.in/" target="_blank" rel="noopener noreferrer" className="text-[#004C97] font-semibold underline">https://www.licindia.in/</a>).
          </p>
        </div>
      </div>

      {/* 3 Main Service Gateway Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Premium Payment */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Coins className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#102A43]">
              Official Premium Payment
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Step-by-step guidance on paying your renewal premiums safely through official LIC Direct Pay (no login required) or through authorized banks, UPI, and branch cash counters.
            </p>
            <ul className="text-[11px] text-slate-500 space-y-1 pt-1">
              <li>&bull; Pay directly on licindia.in without login</li>
              <li>&bull; NACH / ECS automatic debit guidance</li>
              <li>&bull; Official payment receipt download instructions</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <Link
              to="/services/premium-payment"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004C97] hover:underline"
            >
              <span>Explore Payment Instructions &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Card 2: Policy Servicing & Status */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#004C97] flex items-center justify-center">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#102A43]">
              Policy Status &amp; Servicing
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Learn how to track policy status, register on the official LIC Customer Portal, update nominee details, change registered address or phone number, and inquire about loan against policy.
            </p>
            <ul className="text-[11px] text-slate-500 space-y-1 pt-1">
              <li>&bull; Official Customer Portal registration guide</li>
              <li>&bull; Nomination form download &amp; submission</li>
              <li>&bull; Address / Bank NEFT mandate updation</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <Link
              to="/services/policy-servicing"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004C97] hover:underline"
            >
              <span>Explore Policy Servicing Guide &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Card 3: Claims Guidance */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#102A43]">
              Claim Procedures &amp; Guidance
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Clear informational guidance for policyholders and nominees navigating Maturity Claims, Survival Benefit disbursements, and Death Claims with required official documentation.
            </p>
            <ul className="text-[11px] text-slate-500 space-y-1 pt-1">
              <li>&bull; Maturity claim discharge procedure</li>
              <li>&bull; Survival benefit timeline verification</li>
              <li>&bull; Death claim documentation support for nominees</li>
            </ul>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <Link
              to="/services/claims"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004C97] hover:underline"
            >
              <span>Explore Claims Guidance &rarr;</span>
            </Link>
          </div>
        </div>

      </div>

      {/* Local Support Section in Bhubaneswar */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-base font-bold text-[#102A43]">
            Need Assistance with an In-Force Policy?
          </h3>
          <p className="text-xs text-slate-600 max-w-xl">
            Whether you need help understanding a premium notice, updating a nominee, or tracking an endorsement, our advisor is available to guide you through official LIC branch procedures in Bhubaneswar.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={agentConfig.phoneTelLink}
            className="px-4 py-2.5 bg-white border border-slate-300 text-[#102A43] text-xs font-bold rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#004C97]" />
            <span>Call Advisor</span>
          </a>

          <a
            href={agentConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-lg hover:bg-[#20bd5a] transition-colors flex items-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>

    </div>
  );
};
