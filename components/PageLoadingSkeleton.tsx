'use client';

import React from 'react';
import { useLocale } from '@/lib/locale-context';

export default function PageLoadingSkeleton() {
  const { isRtl } = useLocale();

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-slate-50 text-slate-900 transition-opacity duration-200"
      aria-busy="true"
      aria-label="Loading page content"
    >
      {/* Top Navbar Skeleton */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm bg-slate-200 animate-pulse" />
            <div className="space-y-1.5 hidden sm:block">
              <div className="w-32 h-4 rounded-xs bg-slate-200 animate-pulse" />
              <div className="w-20 h-2.5 rounded-xs bg-slate-200/70 animate-pulse" />
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-16 h-3.5 rounded-xs bg-slate-200 animate-pulse" />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <div className="w-20 h-8 rounded-sm bg-slate-200 animate-pulse" />
            <div className="w-24 h-8 rounded-sm bg-slate-300 animate-pulse" />
          </div>
        </div>
      </header>

      {/* Main Page Skeleton */}
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-16 space-y-12">
        {/* Header Block Skeleton */}
        <div className="space-y-4 max-w-3xl">
          <div className="w-28 h-6 rounded-xs bg-blue-100 animate-pulse" />
          <div className="w-3/4 h-10 rounded-xs bg-slate-300 animate-pulse" />
          <div className="w-full h-4 rounded-xs bg-slate-200 animate-pulse" />
          <div className="w-5/6 h-4 rounded-xs bg-slate-200/80 animate-pulse" />
        </div>

        {/* Content Cards Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="bg-white border border-slate-200 rounded-sm p-6 space-y-4 shadow-xs"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xs bg-slate-100 animate-pulse" />
                <div className="w-16 h-3 rounded-xs bg-slate-100 animate-pulse" />
              </div>
              <div className="w-2/3 h-5 rounded-xs bg-slate-200 animate-pulse" />
              <div className="space-y-2">
                <div className="w-full h-3.5 rounded-xs bg-slate-100 animate-pulse" />
                <div className="w-5/6 h-3.5 rounded-xs bg-slate-100 animate-pulse" />
                <div className="w-4/6 h-3.5 rounded-xs bg-slate-100 animate-pulse" />
              </div>
              <div className="pt-2 flex justify-between items-center border-t border-slate-100">
                <div className="w-20 h-3 rounded-xs bg-slate-100 animate-pulse" />
                <div className="w-4 h-4 rounded-xs bg-slate-100 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Panel Skeleton */}
        <div className="bg-slate-100/80 border border-slate-200 rounded-sm p-8 space-y-4">
          <div className="w-40 h-5 rounded-xs bg-slate-300 animate-pulse" />
          <div className="w-2/3 h-4 rounded-xs bg-slate-200 animate-pulse" />
          <div className="flex gap-4 pt-2">
            <div className="w-32 h-9 rounded-sm bg-slate-300 animate-pulse" />
            <div className="w-28 h-9 rounded-sm bg-slate-200 animate-pulse" />
          </div>
        </div>
      </main>

      {/* Footer Skeleton */}
      <footer className="border-t border-slate-200 bg-white mt-12 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="w-48 h-4 rounded-xs bg-slate-200 animate-pulse" />
          <div className="flex gap-6">
            <div className="w-20 h-3.5 rounded-xs bg-slate-200 animate-pulse" />
            <div className="w-20 h-3.5 rounded-xs bg-slate-200 animate-pulse" />
            <div className="w-20 h-3.5 rounded-xs bg-slate-200 animate-pulse" />
          </div>
        </div>
      </footer>
    </div>
  );
}
