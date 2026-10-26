import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Home, Search, Phone, ArrowRight } from 'lucide-react';
import { agentConfig } from '../data/agentConfig';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#004C97] flex items-center justify-center mx-auto shadow-inner">
        <Shield className="w-8 h-8 text-[#C5A15B]" />
      </div>

      <div className="space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-[#004C97]">
          404 &bull; Page Not Found
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] font-['Plus_Jakarta_Sans',sans-serif]">
          This Page Could Not Be Found
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
          The requested insurance page or resource may have moved, or the URL address was entered incorrectly.
        </p>
      </div>

      {/* Suggested Navigation Shortcuts */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#004C97] hover:bg-[#003B75] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>

        <Link
          to="/plans"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl shadow-xs transition-colors"
        >
          <Search className="w-4 h-4 text-[#004C97]" />
          <span>Explore Insurance Plans</span>
        </Link>

        <Link
          to="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-bold rounded-xl shadow-xs transition-colors"
        >
          <Phone className="w-4 h-4 text-[#004C97]" />
          <span>Contact Advisor</span>
        </Link>
      </div>

      <div className="pt-8 text-xs text-slate-500">
        Need immediate policy assistance? Call our Bhubaneswar advisor at{' '}
        <a href={agentConfig.phoneTelLink} className="text-[#004C97] font-bold hover:underline">
          {agentConfig.phoneDisplay}
        </a>.
      </div>
    </div>
  );
};
