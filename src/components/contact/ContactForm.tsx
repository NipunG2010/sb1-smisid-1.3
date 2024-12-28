import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, User } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  company?: string;
  website?: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '',
    website: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/.netlify/functions/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Submission failed');
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        company: '',
        website: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitStatus !== 'idle') setSubmitStatus('idle');
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10"
      onSubmit={handleSubmit}
      id="contact-form"
    >
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
              Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg
                  text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                  focus:ring-secondary focus:border-transparent transition-all duration-300"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg
                  text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                  focus:ring-secondary focus:border-transparent transition-all duration-300"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
              Phone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg
                  text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                  focus:ring-secondary focus:border-transparent transition-all duration-300"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-medium text-white mb-2">
              Website (if any)
            </label>
            <input
              type="url"
              id="website"
              name="website"
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg
                text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                focus:ring-secondary focus:border-transparent transition-all duration-300"
              placeholder="https://your-website.com"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            How can we help? *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg
              text-white placeholder-gray-400 focus:outline-none focus:ring-2 
              focus:ring-secondary focus:border-transparent transition-all duration-300"
            placeholder="Tell us about your business and SEO goals..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary text-primary px-6 py-3 rounded-lg font-semibold
            hover:bg-opacity-90 transition-all duration-300 disabled:opacity-50
            disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Get Started'}
        </button>

        {submitStatus === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-400 text-sm mt-2 text-center"
          >
            Thanks! We'll get back to you within 24 hours.
          </motion.p>
        )}

        {submitStatus === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-400 text-sm mt-2 text-center"
          >
            Something went wrong. Please try again or email us directly.
          </motion.p>
        )}
      </div>
    </motion.form>
  );
}