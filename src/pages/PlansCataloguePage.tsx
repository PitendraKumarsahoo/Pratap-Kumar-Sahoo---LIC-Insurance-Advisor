import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  Shield, 
  AlertCircle, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { allPlans, planCategories, PlanItem } from '../data/plansData';
import { PlanCard } from '../components/plans/PlanCard';
import { agentConfig } from '../data/agentConfig';

interface PlansCataloguePageProps {
  onSelectPlan: (plan: PlanItem) => void;
  onDiscussPlan: (planName: string) => void;
}

export const PlansCataloguePage: React.FC<PlansCataloguePageProps> = ({
  onSelectPlan,
  onDiscussPlan,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'name' | 'planNo'>('name');

  const filteredPlans = useMemo(() => {
    return allPlans
      .filter((plan) => {
        const matchesCategory = selectedCategory === 'all' || plan.categorySlug === selectedCategory;
        const query = searchQuery.toLowerCase().trim();
        const matchesSearch = 
          !query || 
          plan.name.toLowerCase().includes(query) || 
          plan.tagline.toLowerCase().includes(query) ||
          plan.planNo.toLowerCase().includes(query) ||
          plan.uin.toLowerCase().includes(query);
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else {
          return a.planNo.localeCompare(b.planNo);
        }
      });
  }, [searchQuery, selectedCategory, sortBy]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('name');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-8">
      
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: 'All Insurance Plans' }]} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-[#102A43] via-[#004C97] to-[#102A43] text-white p-6 sm:p-10 rounded-2xl space-y-3 shadow-md">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#C5A15B] text-xs font-bold border border-white/20">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Official LIC Product Inventory</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold font-['Plus_Jakarta_Sans',sans-serif]">
          All LIC Insurance Plans
        </h1>
        <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
          Browse verified life insurance plans categorized by family protection, children&apos;s education, wealth savings, retirement annuity, and health riders.
        </p>
      </div>

      {/* Regulatory Notice */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-xs text-blue-900 flex items-start gap-2.5">
        <AlertCircle className="w-4 h-4 text-[#004C97] shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <p className="font-semibold text-[#004C97]">Notice Regarding Product Availability &amp; Eligibility:</p>
          <p className="text-[11px] text-slate-700 leading-relaxed">
            All plans shown represent currently verified active products from Life Insurance Corporation of India. Eligibility, maximum sum assured, and exact premium amounts depend strictly on the applicant&apos;s entry age, medical history, income documents, and prevailing underwriting criteria.
          </p>
        </div>
      </div>

      {/* Search, Filter & Sort Controls */}
      <div className="bg-white p-4 sm:p-6 rounded-xl border border-slate-200 shadow-xs space-y-4">
        
        {/* Top Controls: Search & Sort */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by plan name, plan no (e.g. 914), or UIN..."
              className="w-full text-xs pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#004C97] focus:border-transparent outline-none text-slate-800 placeholder-slate-400"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          </div>

          {/* Sort Selector & Reset */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <span className="font-medium hidden sm:inline">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="text-xs py-2 px-3 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 outline-none focus:ring-2 focus:ring-[#004C97]"
              >
                <option value="name">Plan Name (A-Z)</option>
                <option value="planNo">Plan Number</option>
              </select>
            </div>

            {(searchQuery || selectedCategory !== 'all') && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold text-slate-600 hover:text-[#004C97] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                title="Reset filters"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>

        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-100">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[#004C97] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            All Plans ({allPlans.length})
          </button>

          {planCategories.map((cat) => {
            const count = allPlans.filter(p => p.categorySlug === cat.slug).length;
            const isSelected = selectedCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  isSelected
                    ? 'bg-[#004C97] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.title} ({count})
              </button>
            );
          })}
        </div>

      </div>

      {/* Plans Grid / Empty State */}
      {filteredPlans.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              onSelectPlan={onSelectPlan}
              onDiscussPlan={onDiscussPlan}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="text-base font-bold text-[#102A43]">No matching plans found</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            No plans matched &quot;{searchQuery}&quot; in the selected category. Try searching with a different keyword or plan number.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="px-4 py-2 bg-[#004C97] text-white rounded-lg text-xs font-semibold hover:bg-[#003B75] transition-colors"
          >
            Clear Search &amp; Filters
          </button>
        </div>
      )}

      {/* Official Catalogue Citation */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 text-center text-xs text-slate-600 space-y-2">
        <p>
          Looking for a plan not listed here? You can inspect the entire repository of in-force policies directly on the official LIC website:
        </p>
        <a
          href={agentConfig.officialLicUrls.products}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[#004C97] font-bold hover:underline"
        >
          <span>Official LIC India Product Directory</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

    </div>
  );
};
