import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MapPin, 
  ChevronDown, 
  Menu, 
  X, 
  Shield, 
  User as UserIcon, 
  LogOut, 
  MessageSquare,
  Sparkles,
  ExternalLink,
  Instagram
} from 'lucide-react';
import { agentConfig } from '../../data/agentConfig';
import { planCategories } from '../../data/plansData';
import { useAuth } from '../../context/AuthContext';

export const Header: React.FC<{ onOpenConsultation?: (planName?: string) => void }> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [plansDropdownOpen, setPlansDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobilePlansExpanded, setMobilePlansExpanded] = useState(false);
  const [mobileServicesExpanded, setMobileServicesExpanded] = useState(false);

  const plansRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { user, isAdmin, login, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setPlansDropdownOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (plansRef.current && !plansRef.current.contains(event.target as Node)) {
        setPlansDropdownOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-xs">
      {/* Top Utility Bar */}
      <div className="bg-[#102A43] text-slate-300 text-xs py-2 px-4 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-[#C5A15B]" />
              <span>Bhubaneswar, Odisha, India</span>
            </span>
            <span className="hidden sm:inline-block text-slate-500">|</span>
            <a 
              href={agentConfig.phoneTelLink}
              className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C5A15B]" />
              <span>{agentConfig.phoneDisplay}</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={agentConfig.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-300 hover:text-pink-400 transition-colors"
              title="Official Instagram: lic.bhubaneswar"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span className="hidden md:inline">@lic.bhubaneswar</span>
            </a>

            <span className="text-slate-600">|</span>

            {/* Portal Login / User Status */}
            {user ? (
              <div className="flex items-center gap-2">
                <Link 
                  to="/portal" 
                  className="inline-flex items-center gap-1.5 text-[#C5A15B] hover:text-white font-medium"
                >
                  <UserIcon className="w-3.5 h-3.5" />
                  <span className="max-w-[100px] truncate">{user.displayName || user.email?.split('@')[0]}</span>
                  {isAdmin && (
                    <span className="bg-[#C5A15B] text-[#102A43] text-[10px] font-bold px-1.5 py-0.2 rounded-xs">
                      Advisor
                    </span>
                  )}
                </Link>
                <button 
                  onClick={() => logout()}
                  title="Sign Out"
                  className="text-slate-400 hover:text-red-400 ml-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => login()}
                className="inline-flex items-center gap-1 text-slate-200 hover:text-[#C5A15B] font-medium transition-colors"
              >
                <UserIcon className="w-3.5 h-3.5" />
                <span>Client & Advisor Portal</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-200 ${isScrolled ? 'py-2.5' : 'py-3.5'} px-4 sm:px-6 border-b border-slate-200/80`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Logo & Wordmark */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#004C97] to-[#102A43] flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 text-[#C5A15B]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-[#102A43] font-['Plus_Jakarta_Sans',sans-serif]">
                  LIC ADVISOR
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-wider bg-slate-100 text-[#004C97] px-1.5 py-0.5 rounded border border-slate-200">
                  Odisha
                </span>
              </div>
              <p className="text-[11px] text-[#64748B] font-medium leading-none">
                Independent Insurance Advisory &bull; Bhubaneswar
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link 
              to="/" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/') && location.pathname === '/' 
                  ? 'text-[#004C97] bg-blue-50/60 font-semibold' 
                  : 'text-[#334155] hover:text-[#004C97] hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/about') 
                  ? 'text-[#004C97] bg-blue-50/60 font-semibold' 
                  : 'text-[#334155] hover:text-[#004C97] hover:bg-slate-50'
              }`}
            >
              About Advisor
            </Link>

            {/* Plans Dropdown */}
            <div className="relative" ref={plansRef}>
              <button
                type="button"
                onClick={() => setPlansDropdownOpen(!plansDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/plans') 
                    ? 'text-[#004C97] bg-blue-50/60 font-semibold' 
                    : 'text-[#334155] hover:text-[#004C97] hover:bg-slate-50'
                }`}
              >
                <span>Insurance Plans</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${plansDropdownOpen ? 'rotate-180 text-[#004C97]' : 'text-slate-400'}`} />
              </button>

              {plansDropdownOpen && (
                <div className="absolute left-0 top-full mt-1.5 w-72 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="px-3 py-1.5 border-b border-slate-100">
                    <Link
                      to="/plans"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#004C97] hover:underline"
                    >
                      View All Plans Catalogue &rarr;
                    </Link>
                  </div>
                  <div className="py-1">
                    {planCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/plans/${cat.slug}`}
                        className="block px-3.5 py-2 text-sm text-[#334155] hover:bg-slate-50 hover:text-[#004C97] transition-colors"
                      >
                        <div className="font-medium text-xs text-slate-800">{cat.title}</div>
                        <div className="text-[11px] text-[#64748B] truncate">{cat.shortDesc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative" ref={servicesRef}>
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/services') 
                    ? 'text-[#004C97] bg-blue-50/60 font-semibold' 
                    : 'text-[#334155] hover:text-[#004C97] hover:bg-slate-50'
                }`}
              >
                <span>Customer Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#004C97]' : 'text-slate-400'}`} />
              </button>

              {servicesDropdownOpen && (
                <div className="absolute left-0 top-full mt-1.5 w-64 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50">
                  <Link
                    to="/services"
                    className="block px-3.5 py-2 text-xs font-semibold text-[#004C97] hover:bg-slate-50 border-b border-slate-100"
                  >
                    Services Hub Overview &rarr;
                  </Link>
                  <Link
                    to="/services/premium-payment"
                    className="block px-3.5 py-2 text-xs text-[#334155] hover:bg-slate-50 hover:text-[#004C97]"
                  >
                    <div className="font-medium text-slate-800">Official Premium Payment</div>
                    <div className="text-[11px] text-slate-500">Official LIC payment portal links</div>
                  </Link>
                  <Link
                    to="/services/policy-servicing"
                    className="block px-3.5 py-2 text-xs text-[#334155] hover:bg-slate-50 hover:text-[#004C97]"
                  >
                    <div className="font-medium text-slate-800">Policy Status & Servicing</div>
                    <div className="text-[11px] text-slate-500">Portal login & nomination updates</div>
                  </Link>
                  <Link
                    to="/services/claims"
                    className="block px-3.5 py-2 text-xs text-[#334155] hover:bg-slate-50 hover:text-[#004C97]"
                  >
                    <div className="font-medium text-slate-800">Claim Guidance</div>
                    <div className="text-[11px] text-slate-500">Maturity, survival & death claims</div>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              to="/faq" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/faq') 
                  ? 'text-[#004C97] bg-blue-50/60 font-semibold' 
                  : 'text-[#334155] hover:text-[#004C97] hover:bg-slate-50'
              }`}
            >
              FAQ
            </Link>

            <Link 
              to="/contact" 
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/contact') 
                  ? 'text-[#004C97] bg-blue-50/60 font-semibold' 
                  : 'text-[#334155] hover:text-[#004C97] hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a 
              href={agentConfig.phoneTelLink}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-[#102A43] bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#004C97]" />
              <span>Call Advisor</span>
            </a>

            <button
              onClick={() => onOpenConsultation ? onOpenConsultation() : window.location.assign('/contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#004C97] hover:bg-[#003B75] shadow-xs hover:shadow transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A15B]" />
              <span>Talk to an Advisor</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenConsultation ? onOpenConsultation() : window.location.assign('/contact')}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-semibold text-white bg-[#004C97]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#C5A15B]" />
              <span>Consult</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-[#102A43] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            className={`block py-2 px-3 rounded text-sm font-medium ${isActive('/') && location.pathname === '/' ? 'bg-blue-50 text-[#004C97] font-semibold' : 'text-[#334155]'}`}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={`block py-2 px-3 rounded text-sm font-medium ${isActive('/about') ? 'bg-blue-50 text-[#004C97] font-semibold' : 'text-[#334155]'}`}
          >
            About the Advisor
          </Link>

          {/* Mobile Plans Collapsible */}
          <div className="border rounded-md border-slate-200 p-2">
            <button
              onClick={() => setMobilePlansExpanded(!mobilePlansExpanded)}
              className="w-full flex items-center justify-between text-sm font-medium text-[#102A43]"
            >
              <span>Insurance Plans ({planCategories.length})</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobilePlansExpanded ? 'rotate-180' : ''}`} />
            </button>
            {mobilePlansExpanded && (
              <div className="mt-2 space-y-1.5 pl-2 border-l-2 border-[#004C97]">
                <Link to="/plans" className="block text-xs font-bold text-[#004C97] py-1">
                  View All Insurance Plans &rarr;
                </Link>
                {planCategories.map(cat => (
                  <Link
                    key={cat.slug}
                    to={`/plans/${cat.slug}`}
                    className="block text-xs text-[#334155] py-1 hover:text-[#004C97]"
                  >
                    {cat.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Mobile Services Collapsible */}
          <div className="border rounded-md border-slate-200 p-2">
            <button
              onClick={() => setMobileServicesExpanded(!mobileServicesExpanded)}
              className="w-full flex items-center justify-between text-sm font-medium text-[#102A43]"
            >
              <span>Customer Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesExpanded ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesExpanded && (
              <div className="mt-2 space-y-1.5 pl-2 border-l-2 border-[#004C97]">
                <Link to="/services" className="block text-xs font-bold text-[#004C97] py-1">
                  Services Hub &rarr;
                </Link>
                <Link to="/services/premium-payment" className="block text-xs text-[#334155] py-1">
                  Pay Premium Online
                </Link>
                <Link to="/services/policy-servicing" className="block text-xs text-[#334155] py-1">
                  Policy Status & Servicing
                </Link>
                <Link to="/services/claims" className="block text-xs text-[#334155] py-1">
                  Claim Guidance
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/faq"
            className={`block py-2 px-3 rounded text-sm font-medium ${isActive('/faq') ? 'bg-blue-50 text-[#004C97] font-semibold' : 'text-[#334155]'}`}
          >
            Frequently Asked Questions
          </Link>

          <Link
            to="/contact"
            className={`block py-2 px-3 rounded text-sm font-medium ${isActive('/contact') ? 'bg-blue-50 text-[#004C97] font-semibold' : 'text-[#334155]'}`}
          >
            Contact & Consultation
          </Link>

          <Link
            to="/portal"
            className="block py-2 px-3 rounded text-sm font-medium text-[#C5A15B] bg-[#102A43]"
          >
            {user ? `Portal: ${user.displayName || user.email}` : 'Client & Advisor Portal (Login)'}
          </Link>

          {/* Quick Contact Buttons on Mobile Menu */}
          <div className="pt-2 grid grid-cols-2 gap-2 border-t border-slate-200">
            <a
              href={agentConfig.phoneTelLink}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded text-xs font-bold bg-slate-100 text-[#102A43] border border-slate-200"
            >
              <Phone className="w-3.5 h-3.5 text-[#004C97]" />
              <span>Call Now</span>
            </a>
            <a
              href={agentConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 rounded text-xs font-bold bg-[#25D366] text-white"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
