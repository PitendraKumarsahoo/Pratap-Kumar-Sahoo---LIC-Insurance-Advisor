import React from 'react';
import { 
  Coins, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  Smartphone, 
  Building, 
  CreditCard 
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { agentConfig } from '../data/agentConfig';

export const PremiumPaymentPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10 text-left">
      
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Customer Services', path: '/services' },
          { label: 'Official Premium Payment' },
        ]}
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#102A43] via-[#004C97] to-[#102A43] text-white p-6 sm:p-10 rounded-2xl space-y-3 shadow-md">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C5A15B] text-xs font-bold border border-white/20">
          <Coins className="w-3.5 h-3.5" />
          <span>Official Payment Channels</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans',sans-serif]">
          How to Pay Your LIC Policy Premium
        </h1>

        <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
          Learn how to pay renewal premiums securely through official LIC digital channels, verified banking portals, and branch cash counters.
        </p>

        {/* Primary CTA Button required by brief */}
        <div className="pt-2">
          <a
            href={agentConfig.officialLicUrls.premiumPayment}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A15B] hover:bg-[#b5914b] text-[#102A43] text-xs sm:text-sm font-bold rounded-xl shadow-md transition-colors"
          >
            <span>Open Official LIC Website</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Strict Fraud Warning Banner */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-5 text-xs text-red-900 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <p className="font-bold text-red-800 text-sm">
            Security Warning: Verify the Official Domain Before Paying
          </p>
          <p className="leading-relaxed">
            Never pay premiums to any individual’s personal UPI ID, personal Google Pay/PhonePe number, or non-LIC bank account. This website does not collect premiums. Always ensure your browser address bar displays <strong>https://www.licindia.in/</strong> or <strong>https://ebiz.licindia.in/</strong> before submitting payments.
          </p>
        </div>
      </div>

      {/* Authorized Payment Options */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-[#102A43]">
          Official Channels for Premium Payment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Method 1: LIC Direct Pay (No Login) */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#102A43]">
                  1. LIC Direct Pay (Zero Login Required)
                </h3>
                <span className="text-[11px] text-emerald-700 font-semibold">Fastest Online Method</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              You can pay renewal premiums immediately without creating an account or logging in. Simply enter:
            </p>

            <ul className="text-xs text-slate-700 space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#004C97]" />
                <span>Your 9-digit LIC Policy Number</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#004C97]" />
                <span>Installment Premium amount (without GST)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#004C97]" />
                <span>Date of Birth of the policyholder (DD/MM/YYYY)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#004C97]" />
                <span>Email ID and Mobile Number for instant receipt</span>
              </li>
            </ul>

            <a
              href="https://ebiz.licindia.in/D2CPM/#DirectPay"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004C97] hover:underline"
            >
              <span>Launch Official LIC Direct Pay &rarr;</span>
            </a>
          </div>

          {/* Method 2: Customer Portal Login */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#004C97] flex items-center justify-center">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#102A43]">
                  2. Official Customer Portal / MyLIC App
                </h3>
                <span className="text-[11px] text-blue-700 font-semibold">Manage Multiple Policies</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              If registered on the official LIC Customer Portal, log in to pay premiums for all family policies together, view statement history, and download digitally signed premium receipts.
            </p>

            <ul className="text-xs text-slate-700 space-y-1.5 bg-slate-50 p-3 rounded-lg border border-slate-200">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#004C97]" />
                <span>Consolidated premium calendar for all linked policies</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#004C97]" />
                <span>Instant download of Form 16 / Tax Certificate (80C)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#004C97]" />
                <span>Pay via UPI, Debit/Credit Card, or Net Banking</span>
              </li>
            </ul>

            <a
              href="https://ebiz.licindia.in/D2CPM/#Login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004C97] hover:underline"
            >
              <span>Launch Official LIC Customer Portal &rarr;</span>
            </a>
          </div>

          {/* Method 3: NACH / Bank Auto-Debit */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 text-[#004C97] flex items-center justify-center">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#102A43]">
                  3. NACH / e-NACH Bank Auto-Debit
                </h3>
                <span className="text-[11px] text-indigo-700 font-semibold">Zero Late Fee Worry</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Set up automated mandate through your bank account so premiums are debited on the due date automatically, preventing policy lapses and loss of insurance cover.
            </p>

            <p className="text-xs text-slate-500">
              Contact our advisory office in Bhubaneswar for assistance submitting the NACH mandate form to your servicing LIC branch.
            </p>
          </div>

          {/* Method 4: Physical Branch Counters */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-[#102A43]">
                  4. LIC Branch Cash Counters &amp; Authorized Banks
                </h3>
                <span className="text-[11px] text-amber-700 font-semibold">In-Person Payment</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Pay by cash, cheque, or demand draft directly at any authorized LIC branch cash counter across Bhubaneswar, or at designated partner banks (Axis Bank, City Union Bank) with your policy renewal notice.
            </p>

            <p className="text-xs text-slate-500">
              Always collect the official computer-generated receipt with official LIC seal and transaction number immediately upon payment.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
