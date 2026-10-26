import React from 'react';
import { 
  Phone, 
  MapPin, 
  MessageSquare, 
  Instagram, 
  Mail, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink,
  Building2,
  Calendar,
  User
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ConsultationForm } from '../components/consultation/ConsultationForm';
import { agentConfig } from '../data/agentConfig';

export const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-12 text-left">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Contact & Consultation' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#102A43] via-[#004C97] to-[#102A43] text-white p-6 sm:p-10 rounded-2xl space-y-3 shadow-md">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C5A15B] text-xs font-bold border border-white/20">
          <Calendar className="w-3.5 h-3.5" />
          <span>Bhubaneswar Advisory Chamber</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans',sans-serif]">
          Contact {agentConfig.agentName}
        </h1>

        <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
          Get in touch with Pratap Kumar Sahoo, authorized individual LIC insurance advisor serving Bhubaneswar, Cuttack, and the wider Odisha region. Request a phone call, WhatsApp dialogue, or in-person consultation.
        </p>
      </div>

      {/* Two Column Layout: Contact Channels & Consultation Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Info & Verification (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Advisor Card with Photo */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
            <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 border-2 border-[#004C97] shadow-sm shrink-0">
                <img
                  src={agentConfig.advisorPhoto}
                  alt={agentConfig.agentName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#102A43]">
                  {agentConfig.agentName}
                </h2>
                <p className="text-xs text-[#004C97] font-semibold">
                  LIC Insurance Advisor &bull; Bhubaneswar
                </p>
                <p className="text-[11px] text-slate-400">
                  {agentConfig.divisionalOffice}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Telephone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#004C97] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Telephone / Mobile</p>
                  <a
                    href={agentConfig.phoneTelLink}
                    className="text-sm font-bold text-[#102A43] hover:text-[#004C97] transition-colors"
                  >
                    {agentConfig.phoneDisplay}
                  </a>
                  <p className="text-[11px] text-slate-400">Available Monday &ndash; Saturday (9:00 AM &ndash; 7:30 PM)</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">WhatsApp Direct</p>
                  <a
                    href={agentConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#25D366] hover:underline"
                  >
                    {agentConfig.whatsappNumber}
                  </a>
                  <p className="text-[11px] text-slate-400">Direct message to {agentConfig.agentName}</p>
                </div>
              </div>

              {/* Instagram Profile */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-pink-50 text-pink-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Instagram className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Official Instagram</p>
                  <a
                    href={agentConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-800 hover:text-pink-600 transition-colors flex items-center gap-1"
                  >
                    <span>instagram.com/lic.bhubaneswar</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                  <p className="text-[11px] text-slate-400">Insurance tips and policy updates</p>
                </div>
              </div>

              {/* Location & Office */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 text-[#004C97] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service Location</p>
                  <p className="text-xs font-bold text-[#102A43]">{agentConfig.primaryLocation}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{agentConfig.officeAddress}</p>
                </div>
              </div>
            </div>

            {/* Client Privacy Notice */}
            <div className="pt-3 border-t border-slate-100 flex items-start gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                Your privacy is strictly respected. Your phone number is only used by {agentConfig.agentName} to fulfill your requested consultation and never shared.
              </span>
            </div>
          </div>

          {/* Quick FAQ summary box */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-[#102A43]">
              What Happens After You Submit?
            </h3>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#004C97] shrink-0 mt-0.5" />
                <span>{agentConfig.agentName} reviews your stated goals and checks currently active LIC schemes.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#004C97] shrink-0 mt-0.5" />
                <span>We reach out via your preferred method (WhatsApp, phone, or email).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#004C97] shrink-0 mt-0.5" />
                <span>You receive official product brochures and eligibility guidelines without obligation.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column: Complete Consultation Form (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-[#102A43] font-['Plus_Jakarta_Sans',sans-serif]">
              Request a Personal Insurance Consultation
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Please complete the form below. {agentConfig.agentName} will get back to you shortly.
            </p>
          </div>

          <ConsultationForm />
        </div>

      </div>

    </div>
  );
};
