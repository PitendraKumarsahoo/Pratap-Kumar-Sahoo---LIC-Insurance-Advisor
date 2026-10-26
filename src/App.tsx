/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { DisclaimerBanner } from './components/common/DisclaimerBanner';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { ConsultationModal } from './components/consultation/ConsultationModal';
import { PlanDetailModal } from './components/plans/PlanDetailModal';
import { PlanItem } from './data/plansData';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PlansCataloguePage } from './pages/PlansCataloguePage';
import { PlanCategoryPage } from './pages/PlanCategoryPage';
import { ServicesHubPage } from './pages/ServicesHubPage';
import { PremiumPaymentPage } from './pages/PremiumPaymentPage';
import { PolicyServicingPage } from './pages/PolicyServicingPage';
import { ClaimsGuidancePage } from './pages/ClaimsGuidancePage';
import { FaqPage } from './pages/FaqPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { DisclaimerPage } from './pages/DisclaimerPage';
import { PortalPage } from './pages/PortalPage';
import { NotFoundPage } from './pages/NotFoundPage';

// ScrollToTop helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [consultationPlanName, setConsultationPlanName] = useState<string | undefined>(undefined);
  const [selectedPlanDetail, setSelectedPlanDetail] = useState<PlanItem | null>(null);

  const handleOpenConsultation = (planName?: string) => {
    setConsultationPlanName(planName);
    setConsultationModalOpen(true);
  };

  const handleSelectPlan = (plan: PlanItem) => {
    setSelectedPlanDetail(plan);
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F5F7FA] text-[#334155] font-sans antialiased">
          {/* Top Regulatory Disclaimer Banner */}
          <DisclaimerBanner />

          {/* Sticky Header Navigation */}
          <Header onOpenConsultation={handleOpenConsultation} />

          {/* Main Page Routing */}
          <main className="flex-1">
            <Routes>
              {/* 1. Home */}
              <Route 
                path="/" 
                element={
                  <HomePage 
                    onOpenConsultation={handleOpenConsultation} 
                    onSelectPlan={handleSelectPlan} 
                  />
                } 
              />

              {/* 2. About the Agent */}
              <Route 
                path="/about" 
                element={<AboutPage onOpenConsultation={() => handleOpenConsultation()} />} 
              />

              {/* 3. All Plans Catalogue */}
              <Route 
                path="/plans" 
                element={
                  <PlansCataloguePage 
                    onSelectPlan={handleSelectPlan} 
                    onDiscussPlan={handleOpenConsultation} 
                  />
                } 
              />

              {/* 4 to 11. Dedicated Plan Categories */}
              <Route 
                path="/plans/:categorySlug" 
                element={
                  <PlanCategoryPage 
                    onSelectPlan={handleSelectPlan} 
                    onDiscussPlan={handleOpenConsultation} 
                    onOpenConsultation={handleOpenConsultation} 
                  />
                } 
              />

              {/* 12. Customer Services Hub */}
              <Route 
                path="/services" 
                element={<ServicesHubPage onOpenConsultation={() => handleOpenConsultation()} />} 
              />

              {/* 13. Premium Payment */}
              <Route 
                path="/services/premium-payment" 
                element={<PremiumPaymentPage />} 
              />

              {/* 14. Policy Servicing and Status */}
              <Route 
                path="/services/policy-servicing" 
                element={<PolicyServicingPage />} 
              />

              {/* 15. Claim Guidance */}
              <Route 
                path="/services/claims" 
                element={<ClaimsGuidancePage onOpenConsultation={handleOpenConsultation} />} 
              />

              {/* 16. Frequently Asked Questions */}
              <Route 
                path="/faq" 
                element={<FaqPage onOpenConsultation={() => handleOpenConsultation()} />} 
              />

              {/* 17. Contact & Consultation */}
              <Route 
                path="/contact" 
                element={<ContactPage />} 
              />

              {/* 18. Privacy Policy */}
              <Route 
                path="/privacy-policy" 
                element={<PrivacyPolicyPage />} 
              />

              {/* 19. Insurance & Website Disclaimer */}
              <Route 
                path="/disclaimer" 
                element={<DisclaimerPage />} 
              />

              {/* 20. Client & Advisor Portal (with Firebase Google Sign-In) */}
              <Route 
                path="/portal" 
                element={<PortalPage onOpenConsultation={handleOpenConsultation} />} 
              />

              {/* 21. 404 Not Found Page */}
              <Route 
                path="/404" 
                element={<NotFoundPage />} 
              />
              <Route 
                path="*" 
                element={<NotFoundPage />} 
              />
            </Routes>
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Floating WhatsApp Button across all pages */}
          <WhatsAppButton currentPlan={selectedPlanDetail?.name} />

          {/* Global Consultation Modal */}
          <ConsultationModal
            isOpen={consultationModalOpen}
            onClose={() => setConsultationModalOpen(false)}
            initialPlanName={consultationPlanName}
          />

          {/* Global Plan Detail Modal */}
          <PlanDetailModal
            plan={selectedPlanDetail}
            onClose={() => setSelectedPlanDetail(null)}
            onOpenConsultation={handleOpenConsultation}
          />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
