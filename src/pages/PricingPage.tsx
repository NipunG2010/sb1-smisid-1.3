import React from 'react';
import { PricingPlans } from '../components/pricing/PricingPlans';
import { ContactLayout } from '../components/contact/ContactLayout';

export function PricingPage() {
  return (
    <div className="pt-16">
      <PricingPlans />
      <ContactLayout />
    </div>
  );
}