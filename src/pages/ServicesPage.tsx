import React from 'react';
import { Services } from '../components/services/Services';
import { ContactLayout } from '../components/contact/ContactLayout';

export function ServicesPage() {
  return (
    <div className="pt-16">
      <Services />
      <ContactLayout />
    </div>
  );
}