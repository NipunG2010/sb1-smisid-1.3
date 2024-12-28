import React from 'react';
import { ContactForm } from './contact/ContactForm';

export function CTASection() {
  return (
    <div className="bg-primary relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary/10 opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Start Your SEO Journey Today
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Book a free consultation to discuss your business goals and how we can help you achieve them
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}