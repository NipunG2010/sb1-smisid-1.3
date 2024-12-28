import React from 'react';
import { Features } from '../components/Features';
import { ContactLayout } from '../components/contact/ContactLayout';

export function FeaturesPage() {
  return (
    <div className="pt-16">
      <Features />
      <ContactLayout />
    </div>
  );
}