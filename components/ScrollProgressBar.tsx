'use client';

import React, { useEffect, useState } from 'react';

interface ScrollProgressBarProps {
  isRtl?: boolean;
}

export default function ScrollProgressBar({ isRtl = true }: ScrollProgressBarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (scrollHeight > 0) {
        const pct = Math.min(100, Math.max(0, (scrollTop / scrollHeight) * 100));
        setScrollProgress(pct);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 start-0 end-0 z-50 h-[3.5px] bg-slate-900/10 backdrop-blur-xs pointer-events-none"
      id="scroll-progress-container"
      role="progressbar"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Scroll Progress"
    >
      <div
        className="h-full bg-gradient-to-r from-blue-700 via-blue-500 to-indigo-500 shadow-[0_0_8px_rgba(37,99,235,0.75)] transition-[width] duration-150 ease-out"
        style={{
          width: `${scrollProgress}%`,
          marginInlineStart: isRtl ? 'auto' : '0',
        }}
        id="scroll-progress-bar"
      />
    </div>
  );
}
