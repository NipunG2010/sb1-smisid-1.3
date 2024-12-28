import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

export function ScheduleCallSection() {
  return (
    <section className="bg-primary py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to <span className="text-secondary">Transform</span> Your SEO?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Schedule your strategy call today and discover how we can help you achieve your goals
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-4 text-gray-300">
              <Clock className="w-6 h-6 text-secondary flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white">Duration</h4>
                <p>30-minute strategy call</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 text-gray-300">
              <Users className="w-6 h-6 text-secondary flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white">Participants</h4>
                <p>You and our SEO expert</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 text-gray-300">
              <Calendar className="w-6 h-6 text-secondary flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white">Availability</h4>
                <p>Next 48 hours</p>
              </div>
            </div>
          </div>

          <button 
            onClick={() => {
              const contactForm = document.getElementById('contact-form');
              if (contactForm) {
                contactForm.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="w-full bg-secondary text-primary px-6 py-4 rounded-lg font-semibold
              hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Schedule Your Call Now
            <Calendar className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}