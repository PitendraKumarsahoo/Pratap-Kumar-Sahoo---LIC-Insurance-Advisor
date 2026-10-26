import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageSquare, 
  Phone, 
  Search, 
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { faqsData, FAQItem } from '../data/faqsData';
import { agentConfig } from '../data/agentConfig';

export const FaqPage: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [activeCategory, setActiveCategory] = useState<'all' | 'general' | 'plans' | 'servicing' | 'claims'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCat = activeCategory === 'all' || faq.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesQuery = !query || faq.question.toLowerCase().includes(query) || faq.answer.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-10 text-left">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#102A43] via-[#004C97] to-[#102A43] text-white p-6 sm:p-10 rounded-2xl space-y-3 shadow-md">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C5A15B] text-xs font-bold border border-white/20">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge Base</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans',sans-serif]">
          Frequently Asked Questions
        </h1>

        <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
          Clear, factual answers to essential questions regarding life insurance principles, LIC product options, premium payments, policy status checks, and claims.
        </p>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs by question or keyword..."
            className="w-full text-xs pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent outline-none text-slate-800"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
        </div>

        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {[
            { id: 'all', label: `All Questions (${faqsData.length})` },
            { id: 'general', label: 'General & Basics' },
            { id: 'plans', label: 'Insurance Plans' },
            { id: 'servicing', label: 'Policy Servicing' },
            { id: 'claims', label: 'Claims Guidance' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeCategory === cat.id
                  ? 'bg-[#004C97] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion Questions List */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-[#102A43] hover:text-[#004C97] transition-colors"
                >
                  <span className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004C97] mt-2 shrink-0"></span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#004C97]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 p-8 text-center text-xs text-slate-500 space-y-2">
            <p>No questions matched your search query &quot;{searchQuery}&quot;.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="font-bold text-[#004C97] hover:underline"
            >
              Reset Search &amp; View All FAQs
            </button>
          </div>
        )}
      </div>

      {/* Unresolved Questions CTA */}
      <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 text-center space-y-3">
        <h3 className="font-bold text-base text-[#102A43]">
          Have a Question Not Answered Here?
        </h3>
        <p className="text-xs text-slate-600 max-w-lg mx-auto leading-relaxed">
          Contact our local Bhubaneswar advisor directly on WhatsApp or telephone for straightforward personal guidance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href={agentConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-lg hover:bg-[#20bd5a] transition-colors shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask via WhatsApp (+91 89086 77424)</span>
          </a>

          <button
            type="button"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto px-5 py-2.5 bg-[#004C97] hover:bg-[#003B75] text-white text-xs font-bold rounded-lg transition-colors"
          >
            Book a Consultation
          </button>
        </div>
      </div>

    </div>
  );
};
