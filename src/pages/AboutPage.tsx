import React, { useState } from 'react';
import { 
  User, 
  MapPin, 
  Phone, 
  MessageSquare, 
  Shield, 
  CheckCircle2, 
  FileText, 
  AlertCircle, 
  Award,
  Globe,
  Briefcase
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { agentConfig } from '../data/agentConfig';

export const AboutPage: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'About the Advisor' }]} />

      {/* Hero Section */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
          
          {/* Portrait Photo with Zero-Broken-Image Fallback */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="w-56 h-72 sm:w-64 sm:h-80 rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-slate-100 relative group">
              {!imageError ? (
                <img
                  src={agentConfig.advisorPhoto}
                  alt={`Portrait of ${agentConfig.agentName}, LIC Insurance Advisor`}
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-500 bg-gradient-to-b from-slate-100 to-slate-200">
                  <div className="w-16 h-16 rounded-full bg-slate-300 flex items-center justify-center text-[#102A43] mb-2">
                    <User className="w-8 h-8 text-[#004C97]" />
                  </div>
                  <p className="font-bold text-xs text-slate-800">{agentConfig.agentName}</p>
                  <p className="text-[11px] text-slate-500">LIC Insurance Advisor</p>
                </div>
              )}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#102A43]/90 via-[#102A43]/40 to-transparent p-3 text-white text-center">
                <span className="text-xs font-bold block">{agentConfig.agentName}</span>
                <span className="text-[10px] text-slate-300">LIC Advisor &bull; Bhubaneswar</span>
              </div>
            </div>
            <div className="mt-2.5 text-center">
              <span className="text-[11px] font-semibold text-[#004C97] bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                Verified Insurance Advisor
              </span>
            </div>
          </div>

          {/* Agent Bio & Verified Credentials */}
          <div className="lg:col-span-8 space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#004C97] text-xs font-bold border border-blue-200">
              <Shield className="w-3.5 h-3.5 text-[#C5A15B]" />
              <span>Independent Life Insurance Advisor</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#102A43] font-['Plus_Jakarta_Sans',sans-serif]">
              {agentConfig.agentName}
            </h1>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#004C97]" />
                <span>{agentConfig.primaryLocation}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5 text-[#004C97]" />
                <span>{agentConfig.divisionalOffice}</span>
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#004C97]" />
                <span>Languages: Odia, Hindi, English</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed pt-2">
              Namaskar! I am <strong>{agentConfig.agentName}</strong>, an individual life insurance advisor associated with Life Insurance Corporation of India (LIC), serving Bhubaneswar, Cuttack, and communities across Odisha. My mission is to assist families, salaried professionals, and entrepreneurs in securing tailored financial protection and disciplined long-term wealth creation.
            </p>

            <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
              Choosing the right insurance policy shouldn&apos;t feel overwhelming. Whether you are safeguarding your children&apos;s higher education milestones through plans like Amritbaal, structuring lifelong guaranteed income with Jeevan Utsav, or seeking high pure term protection with Digi Term, I provide transparent, pressure-free consultations strictly grounded in official LIC product literature.
            </p>

            {/* Quick action buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-5 py-2.5 bg-[#004C97] hover:bg-[#003B75] text-white text-xs font-bold rounded-lg shadow-xs flex items-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C5A15B]" />
                <span>Book Consultation with {agentConfig.agentName.split(' ')[0]}</span>
              </button>

              <a
                href={agentConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-lg shadow-xs flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp ({agentConfig.phoneDisplay})</span>
              </a>

              <a
                href={agentConfig.phoneTelLink}
                className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#102A43] text-xs font-bold rounded-lg border border-slate-200 flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#004C97]" />
                <span>Direct Call</span>
              </a>
            </div>

          </div>

        </div>

        {/* Advisory Ethics Bar */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:px-6 text-xs text-slate-700 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-[#004C97] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <p className="font-semibold text-[#102A43]">Professional Advisory Standard:</p>
            <p className="text-[11px] text-slate-600 leading-relaxed">
              Advisor: <strong>{agentConfig.agentName}</strong> &bull; Location: Bhubaneswar, Odisha &bull; Office: {agentConfig.divisionalOffice}. In compliance with insurance solicitation regulations, all policy features, eligibility requirements, and bonus additions are communicated strictly as authorized by Life Insurance Corporation of India.
            </p>
          </div>
        </div>
      </div>

      {/* Areas of Customer Assistance */}
      <div className="space-y-6">
        <div className="text-left space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-[#004C97]">Services Provided</span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#102A43]">
            How {agentConfig.agentName} Assists Clients in Odisha
          </h2>
          <p className="text-xs text-slate-600 max-w-2xl">
            From new policy exploration to existing policy servicing guidance, get personalized local support every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#004C97] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-bold text-sm text-[#102A43]">Needs-Based Goal Mapping</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We help you determine whether your priority is pure financial family protection (Term Assurance), child education (Child Plans), retirement cashflow (Pension/Annuity), or disciplined savings (Endowment).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#004C97] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-bold text-sm text-[#102A43]">Proposal &amp; Documentation Guidance</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We guide you through the official documentation required by LIC: KYC proofs, age certificates, income documents for high sum assured, and medical checkup scheduling.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#004C97] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-bold text-sm text-[#102A43]">Long-Term Servicing Support</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Our relationship does not end with policy issuance. We assist with nomination updates, bank NEFT registration, address updates, maturity claims, and claim documentation.
            </p>
          </div>
        </div>
      </div>

      {/* Advisory Principles / Code of Ethics */}
      <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
        <h3 className="text-lg font-bold text-[#102A43] flex items-center gap-2">
          <Shield className="w-5 h-5 text-[#C5A15B]" />
          Our Professional Advisory Principles
        </h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
          <div className="flex items-start gap-2 bg-white p-3.5 rounded-lg border border-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>Complete Truthfulness:</strong> We explain both the benefits and the exclusions, conditions, and waiting periods of every policy.
            </div>
          </div>
          <div className="flex items-start gap-2 bg-white p-3.5 rounded-lg border border-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>No Exaggerated Returns:</strong> We never describe market-linked plans as risk-free or promise guaranteed bonus rates that are not guaranteed by the policy document.
            </div>
          </div>
          <div className="flex items-start gap-2 bg-white p-3.5 rounded-lg border border-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>Zero Premium Handling on Third-Party Sites:</strong> We always direct you to pay premiums through official LIC portals or branch counters.
            </div>
          </div>
          <div className="flex items-start gap-2 bg-white p-3.5 rounded-lg border border-slate-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <strong>Nominee &amp; Family Care:</strong> In times of distress, we prioritize guiding nominees through official claim documentation without confusion.
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
