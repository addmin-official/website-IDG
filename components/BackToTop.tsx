'use client';

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  label?: string;
}

export default function BackToTop({ label = 'گەڕانەوە بۆ سەرەوە' }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        // Button appears when the bottom of the hero section is above the top of the viewport
        setIsVisible(rect.bottom < 60);
      } else {
        setIsVisible(window.scrollY > 450);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleScrollToTop}
      aria-label={label}
      title={label}
      id="btn-back-to-top"
      className="fixed bottom-6 end-6 z-40 flex items-center gap-2 px-3.5 py-3 rounded-full bg-slate-900/90 hover:bg-blue-700 text-white border border-slate-700 hover:border-blue-500 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer animate-in fade-in zoom-in-95 duration-200"
    >
      <ArrowUp className="w-4 h-4 text-blue-400 group-hover:text-white transition-all duration-300 group-hover:-translate-y-0.5" />
      <span className="text-xs font-semibold max-w-0 overflow-hidden whitespace-nowrap opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300">
        {label}
      </span>
    </button>
  );
}
