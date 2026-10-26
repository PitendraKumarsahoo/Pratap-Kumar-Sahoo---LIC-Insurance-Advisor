import React from 'react';
import { Shield, Lock, CheckCircle2, AlertCircle } from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { agentConfig } from '../data/agentConfig';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8 text-left">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      {/* Header */}
      <div className="border-b border-slate-200 pb-5 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#004C97] text-xs font-bold">
          <Lock className="w-3.5 h-3.5" />
          <span>Data Protection &amp; Confidentiality</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] font-['Plus_Jakarta_Sans',sans-serif]">
          Privacy Policy
        </h1>
        <p className="text-xs text-slate-500">
          Last updated: October 2026 &bull; Governing advisory operations in Bhubaneswar, Odisha, India.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6 text-xs text-slate-700 leading-relaxed">
        
        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider">
            1. Overview &amp; Scope
          </h2>
          <p>
            This Privacy Policy describes how the office of the individual Life Insurance Corporation of India (LIC) insurance advisor in Bhubaneswar collects, uses, and safeguards personal information submitted through this website (<a href={window.location.origin} className="text-[#004C97] underline">{window.location.origin}</a>). We take data privacy seriously and adhere to applicable Indian data protection principles, including the Digital Personal Data Protection Act, 2023.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider">
            2. Information We Collect
          </h2>
          <p>
            We only collect personal information that you voluntarily choose to provide when requesting an insurance consultation or service guidance:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Full Name:</strong> To address you properly in communications.</li>
            <li><strong>Telephone / WhatsApp Number:</strong> To contact you regarding your requested insurance enquiry.</li>
            <li><strong>Email Address (Optional):</strong> To send official policy brochures, comparison summaries, or confirmation notices.</li>
            <li><strong>Area of Interest / Plan Name:</strong> To prepare relevant official LIC product materials prior to your consultation.</li>
            <li><strong>User Account Profile (Optional):</strong> If you choose to log in via Google Sign-in to track consultation requests and bookmarked plans in our Client Portal.</li>
          </ul>
          <p className="font-semibold text-slate-800 pt-1">
            We strictly NEVER collect credit card numbers, Net Banking credentials, Aadhaar numbers, biometric data, or medical test files through public website forms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider">
            3. Purpose of Collection &amp; Lawful Basis
          </h2>
          <p>
            Your information is collected solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your inquiry and schedule your requested insurance discussion.</li>
            <li>Furnish official, insurer-approved LIC brochures and policy details.</li>
            <li>Assist with official servicing guidance (e.g. nomination forms, NEFT updates).</li>
          </ul>
          <p>
            We process your information based exclusively on your explicit consent granted by checking the consultation consent checkbox prior to submission.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider">
            4. Non-Disclosure &amp; Third-Party Sharing
          </h2>
          <p>
            We do NOT sell, rent, lease, trade, or distribute your personal contact information to any third-party marketing companies, telemarketers, or loan aggregators. Your information remains strictly confidential between you and the designated insurance advisor.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider">
            5. Data Storage &amp; Security Precautions
          </h2>
          <p>
            Our website uses enterprise-grade transport security (HTTPS with TLS encryption). Database entries are stored in secure Google Cloud Firestore with role-based security rules ensuring that only authorized administrators and the authenticated submitter have access to records.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider">
            6. External Official Links
          </h2>
          <p>
            This website provides links to the official corporate website of Life Insurance Corporation of India (<a href="https://www.licindia.in/" target="_blank" rel="noopener noreferrer" className="text-[#004C97] underline">https://www.licindia.in/</a>) for premium payments and policy servicing. When navigating to external official portals, their respective privacy and security policies govern your usage.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider">
            7. Your Rights &amp; Privacy Contact
          </h2>
          <p>
            You have the right to request access to your submitted data, request correction of inaccurate information, or request the deletion of your consultation record at any time. To exercise your rights, please contact our office:
          </p>
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-1 mt-2">
            <p><strong>Privacy Inquiries:</strong> {agentConfig.email}</p>
            <p><strong>Advisory Line:</strong> {agentConfig.phoneDisplay}</p>
            <p><strong>Location:</strong> Bhubaneswar, Odisha, India</p>
          </div>
        </section>

      </div>

    </div>
  );
};
