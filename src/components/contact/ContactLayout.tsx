import React from 'react';
import { ContactForm } from './ContactForm';
import { CalendlyEmbed } from './CalendlyEmbed';

export function ContactLayout() {
  return (
    <section id="contact" className="bg-primary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to <span className="text-secondary">Transform</span> Your SEO?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Schedule your call or drop us a message. Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <CalendlyEmbed />
        </div>
      </div>
    </section>
  );
}