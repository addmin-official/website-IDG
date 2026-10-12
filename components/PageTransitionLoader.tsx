'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function PageTransitionLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Complete progress whenever route changes
  useEffect(() => {
    if (isLoading) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  // Intercept local link clicks to start progress bar immediately
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      const targetAttr = target.getAttribute('target');

      // Ignore external links, mailto, tel, anchor hashes on same page, or new tab links
      if (
        !href ||
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        targetAttr === '_blank' ||
        e.metaKey ||
        e.ctrlKey
      ) {
        return;
      }

      // Check if target is same page
      if (href === pathname || href === `${pathname}${window.location.search}`) {
        return;
      }

      setIsLoading(true);
      setProgress(25);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 85) {
            clearInterval(interval);
            return 85;
          }
          return prev + Math.random() * 15;
        });
      }, 200);

      startTransition(() => {
        // Keeps React transition synced
      });

      return () => clearInterval(interval);
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [pathname]);

  if (!isLoading && progress === 0) return null;

  return (
    <div
      className="fixed top-0 start-0 end-0 z-50 h-[3px] pointer-events-none overflow-hidden"
      role="progressbar"
      aria-label="Page transition progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-[#19C7FF] via-[#1D5BD8] to-[#60A5FA] shadow-[0_0_12px_rgba(29,91,216,0.9)] transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
          transition: 'width 200ms ease-out, opacity 300ms ease-in',
        }}
      />
    </div>
  );
}
