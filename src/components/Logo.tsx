import React from 'react';
import { Shield } from 'lucide-react';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  // To use a custom logo image, replace the Shield icon with an img tag:
  // <img src="/logo.png" alt="BSEO Logo" className={className} />
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Shield className="w-8 h-8 text-secondary" />
      <span className="text-2xl font-bold text-secondary">BSEO</span>
    </div>
  );
}