import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

export function CalendlyEmbed() {
  return (
    <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
      <div className="space-y-6 mb-8">
        <div className="flex items-center gap-4 text-gray-300">
          <Clock className="w-6 h-6 text-secondary" />
          <div>
            <h4 className="font-medium text-white">Duration</h4>
            <p>30-minute strategy call</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-300">
          <Users className="w-6 h-6 text-secondary" />
          <div>
            <h4 className="font-medium text-white">Participants</h4>
            <p>You and an SEO Expert</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-gray-300">
          <Calendar className="w-6 h-6 text-secondary" />
          <div>
            <h4 className="font-medium text-white">Availability</h4>
            <p>Next 48 hours</p>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          window.open('https://calendly.com/your-link', '_blank');
        }}
        className="w-full bg-secondary text-primary px-6 py-3 rounded-lg font-semibold
          hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        Schedule Your Call
      </button>

      <p className="text-gray-400 text-sm mt-4 text-center">
        Limited spots available. Book your call today!
      </p>
    </div>
  );
}