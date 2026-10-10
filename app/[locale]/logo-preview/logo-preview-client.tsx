'use client';

import React from 'react';
import IDGLogo from '@/components/IDGLogo';
import { useLocale } from '@/lib/locale-context';

export default function LogoPreviewClient() {
  const { isRtl } = useLocale();

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#060D1A] text-slate-100 py-16"
    >
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <header className="text-center">
          <h1 className="text-3xl font-black text-white mb-2">
            IDG Logo — Preview
          </h1>
          <p className="text-slate-400 text-sm">
            Simplified gateway mark · Cyan → Blue gradient · 3 variants
          </p>
        </header>

        {/* Horizontal Lockup */}
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#60A5FA] font-semibold mb-6">
            Horizontal — Navbar
          </h2>
          <div className="space-y-4 p-8 bg-[#0B172E] rounded-2xl border border-[#102447]">
            <IDGLogo variant="horizontal" size={60} />
            <div className="pt-4 border-t border-[#102447]">
              <IDGLogo variant="horizontal" size={40} />
            </div>
          </div>
        </section>

        {/* Square Lockup */}
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#60A5FA] font-semibold mb-6">
            Square — Footer / Print
          </h2>
          <div className="flex flex-wrap items-end gap-8 p-8 bg-[#0B172E] rounded-2xl border border-[#102447]">
            <IDGLogo variant="square" size={200} />
            <IDGLogo variant="square" size={120} />
            <IDGLogo variant="square" size={80} />
          </div>
        </section>

        {/* Icon Only */}
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#60A5FA] font-semibold mb-6">
            Icon Only — Favicon / Mobile
          </h2>
          <div className="flex flex-wrap items-end gap-8 p-8 bg-[#0B172E] rounded-2xl border border-[#102447]">
            <IDGLogo variant="icon" size={80} />
            <IDGLogo variant="icon" size={44} />
            <IDGLogo variant="icon" size={32} />
            <IDGLogo variant="icon" size={16} />
            <div className="flex items-center gap-3 ml-4">
              <IDGLogo variant="icon" size={16} />
              <span className="text-slate-400 text-xs">
                ← Favicon size (16px)
              </span>
            </div>
          </div>
        </section>

        {/* On Light Background */}
        <section>
          <h2 className="text-xs uppercase tracking-[0.2em] text-[#60A5FA] font-semibold mb-6">
            On Light Background (Print Test)
          </h2>
          <div className="flex flex-wrap items-center gap-8 p-8 bg-white rounded-2xl">
            <IDGLogo variant="horizontal" size={50} />
            <IDGLogo variant="square" size={100} />
            <IDGLogo variant="icon" size={44} />
          </div>
        </section>
      </div>
    </div>
  );
}
