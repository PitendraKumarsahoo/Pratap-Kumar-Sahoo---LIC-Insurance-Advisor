import React from 'react';
import { AlertCircle, ExternalLink } from 'lucide-react';
import { agentConfig } from '../../data/agentConfig';

export const DisclaimerBanner: React.FC = () => {
  return (
    <div className="bg-[#102A43] text-white text-xs border-b border-[#004C97]/30 py-2 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-slate-200">
          <AlertCircle className="w-3.5 h-3.5 text-[#C5A15B] shrink-0" />
          <span>
            <strong className="text-white font-medium">Independent Advisor Website:</strong> This site is independently operated and not the official corporate website of Life Insurance Corporation of India.
          </span>
        </div>
        <a 
          href={agentConfig.officialLicUrls.portalHome} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[#C5A15B] hover:text-[#d8b878] font-medium shrink-0 transition-colors"
        >
          <span>Visit Official LIC Website (licindia.in)</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
