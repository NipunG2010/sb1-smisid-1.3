import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { StatsGrid } from './stats/StatsGrid';

export function Hero() {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-primary text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
            Elevate Your Online Presence with
            <span className="text-secondary"> Strategic SEO</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            We're a new SEO agency committed to helping businesses grow through data-driven strategies 
            and personalized solutions.
          </p>
          <div className="flex justify-center gap-4 mb-16">
            <button 
              onClick={scrollToContact}
              className="bg-secondary hover:bg-opacity-90 text-primary px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Book Your Call
            </button>
            <button className="border border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2">
              Our Approach <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>

          <div className="max-w-5xl mx-auto">
            <StatsGrid />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)'
      }}></div>
    </div>
  );
}