import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { UrgencyBanner } from './components/UrgencyBanner';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/problems/ProblemSection';
import { ProposalSection } from './components/proposal/ProposalSection';
import { ValueProposition } from './components/proposal/ValueProposition';
import { Journey } from './components/journey/Journey';
import { ContactLayout } from './components/contact/ContactLayout';
import { Footer } from './components/footer/Footer';
import { ServicesPage } from './pages/ServicesPage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';

function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ProposalSection />
      <ValueProposition />
      <Journey />
      <ContactLayout />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <UrgencyBanner />
          <Header />
        </div>
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}