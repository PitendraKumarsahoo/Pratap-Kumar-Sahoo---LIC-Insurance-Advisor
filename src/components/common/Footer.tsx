import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Instagram, 
  ExternalLink, 
  Mail, 
  ArrowUpRight 
} from 'lucide-react';
import { agentConfig } from '../../data/agentConfig';
import { planCategories } from '../../data/plansData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#102A43] text-slate-300 pt-14 pb-8 border-t-4 border-[#004C97]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-700/60">
          
          {/* Col 1: Brand & Advisor Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#004C97] flex items-center justify-center text-white">
                <Shield className="w-5 h-5 text-[#C5A15B]" />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-white block">
                  LIC ADVISOR
                </span>
                <span className="text-[11px] text-slate-400 font-medium block">
                  Bhubaneswar &bull; Odisha
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              Professional life insurance advisory helping families and professionals in Bhubaneswar plan for tomorrow, protect their loved ones, and navigate official LIC policies with clarity.
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#C5A15B] shrink-0 mt-0.5" />
                <span>{agentConfig.primaryLocation}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-[#C5A15B] shrink-0" />
                <a href={agentConfig.phoneTelLink} className="hover:text-white transition-colors">
                  {agentConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Instagram className="w-3.5 h-3.5 text-[#C5A15B] shrink-0" />
                <a 
                  href={agentConfig.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-pink-400 transition-colors"
                >
                  instagram.com/lic.bhubaneswar
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Insurance Plan Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C5A15B]"></span>
              Insurance Plans
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/plans" className="text-slate-300 hover:text-white flex items-center gap-1">
                  <span>Browse All Plans Catalogue</span>
                </Link>
              </li>
              {planCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link 
                    to={`/plans/${cat.slug}`} 
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Customer Services & Policy Servicing */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C5A15B]"></span>
              Customer Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/services" className="text-slate-300 hover:text-white">
                  Customer Services Hub
                </Link>
              </li>
              <li>
                <Link to="/services/premium-payment" className="text-slate-400 hover:text-white">
                  Premium Payment Guidance
                </Link>
              </li>
              <li>
                <Link to="/services/policy-servicing" className="text-slate-400 hover:text-white">
                  Policy Status & Servicing
                </Link>
              </li>
              <li>
                <Link to="/services/claims" className="text-slate-400 hover:text-white">
                  Claim Documentation Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-400 hover:text-white">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white">
                  Book Personal Consultation
                </Link>
              </li>
              <li>
                <Link to="/portal" className="text-[#C5A15B] hover:text-white font-medium">
                  Client & Advisor Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Official LIC Resources & Compliance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#C5A15B]"></span>
              Official LIC Resources
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Official portals operated by Life Insurance Corporation of India:
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a 
                  href={agentConfig.officialLicUrls.portalHome} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#C5A15B] flex items-center justify-between group"
                >
                  <span>Official LIC India Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#C5A15B]" />
                </a>
              </li>
              <li>
                <a 
                  href={agentConfig.officialLicUrls.insurancePlans} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#C5A15B] flex items-center justify-between group"
                >
                  <span>Official Insurance Plans Catalogue</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#C5A15B]" />
                </a>
              </li>
              <li>
                <a 
                  href={agentConfig.officialLicUrls.policyStatus} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#C5A15B] flex items-center justify-between group"
                >
                  <span>Official Policy Status Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#C5A15B]" />
                </a>
              </li>
              <li>
                <a 
                  href="https://ebiz.licindia.in/D2CPM/#DirectPay" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#C5A15B] flex items-center justify-between group"
                >
                  <span>LIC Direct Pay (No Login)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-[#C5A15B]" />
                </a>
              </li>
            </ul>

            <div className="mt-4 pt-3 border-t border-slate-700/60">
              <span className="text-[11px] text-slate-400 block mb-1">Direct Advisor Contact:</span>
              <div className="flex gap-2">
                <a 
                  href={agentConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-2 bg-[#25D366] text-white rounded text-center text-[11px] font-semibold hover:opacity-90 transition-opacity"
                >
                  WhatsApp
                </a>
                <a 
                  href={agentConfig.phoneTelLink}
                  className="flex-1 py-1.5 px-2 bg-[#004C97] text-white rounded text-center text-[11px] font-semibold hover:bg-[#003B75] transition-colors"
                >
                  Direct Call
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimer Section (Section 18 requirement) */}
        <div className="py-6 border-b border-slate-700/60 text-xs text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-200">Regulatory Disclaimer:</strong> This website is an independently operated informational website for an individual insurance agent serving Bhubaneswar, Odisha. It is not the official corporate website of Life Insurance Corporation of India (LIC). LIC&apos;s official website is <a href="https://www.licindia.in/" target="_blank" rel="noopener noreferrer" className="text-[#C5A15B] underline">https://www.licindia.in/</a>.
          </p>
          <p>
            Product names, descriptions, plan numbers, UINs, brochures, eligibility criteria, premiums, benefits, exclusions, and terms must be verified against the latest official LIC documents. Product availability and individual eligibility may vary based on age, health, and underwriting conditions.
          </p>
          <p>
            This website provides general information and does not constitute a policy contract, a personalized financial recommendation, or a guarantee of policy issuance, returns, bonuses, or claim settlement. The applicable policy document and insurer-approved terms govern the actual insurance contract. Insurance is the subject matter of solicitation.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} LIC Insurance Advisor &bull; Bhubaneswar, Odisha. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <Link to="/disclaimer" className="hover:text-white transition-colors">
              Insurance Disclaimer
            </Link>
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
