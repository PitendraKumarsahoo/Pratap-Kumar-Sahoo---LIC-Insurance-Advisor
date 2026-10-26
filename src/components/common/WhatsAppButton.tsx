import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { getWhatsAppConsultationUrl, agentConfig } from '../../data/agentConfig';

export const WhatsAppButton: React.FC<{ currentPlan?: string }> = ({ currentPlan }) => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const whatsappUrl = getWhatsAppConsultationUrl(currentPlan);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Friendly floating tooltip (dismissible) */}
      {!tooltipDismissed && (
        <div className="mb-2 bg-white text-slate-800 text-xs py-2 px-3 rounded-lg shadow-lg border border-slate-200 max-w-[210px] hidden sm:flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div>
            <p className="font-semibold text-[#102A43]">Chat with Advisor</p>
            <p className="text-[11px] text-slate-500">Ask about LIC plans on WhatsApp</p>
          </div>
          <button 
            onClick={() => setTooltipDismissed(true)} 
            className="text-slate-400 hover:text-slate-600 ml-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact LIC Insurance Advisor on WhatsApp (+91 89086 77424)"
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        {/* Custom SVG WhatsApp Logo */}
        <svg 
          className="w-6 h-6 fill-current" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.128-.53-1.834-.757-3.003-2.618-3.094-2.74-.092-.121-.745-.992-.745-1.892 0-.901.467-1.344.633-1.528.166-.184.364-.23.486-.23.121 0 .243.002.349.007.112.005.263-.042.411.314.156.376.531 1.298.577 1.391.046.092.077.2.016.323-.062.123-.093.199-.185.308-.092.107-.193.24-.276.323-.092.092-.188.193-.081.377.107.184.477.786 1.025 1.274.707.63 1.304.825 1.488.917.185.092.292.077.4-.046.108-.123.462-.538.585-.723.123-.185.247-.154.416-.092.169.062 1.077.508 1.262.6.185.092.308.138.354.215.046.077.046.452-.098.857z"/>
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.982L2 22l5.233-1.371c1.455.794 3.097 1.213 4.775 1.214h.004c5.505 0 9.988-4.478 9.989-9.985 0-2.668-1.04-5.176-2.928-7.063C17.185 3.039 14.678 2 12.012 2zm0 18.232h-.003c-1.489 0-2.95-.4-4.225-1.157l-.303-.18-3.111.816.83-3.033-.197-.314c-.832-1.325-1.272-2.868-1.272-4.464 0-4.542 3.696-8.238 8.243-8.238 2.2 0 4.269.858 5.824 2.414 1.556 1.557 2.412 3.626 2.411 5.826 0 4.542-3.696 8.238-8.242 8.238z"/>
        </svg>
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          WhatsApp Advisor
        </span>
      </a>
    </div>
  );
};
