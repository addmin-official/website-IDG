'use client';

import React from 'react';
import { TranslationData } from '@/lib/translations';
import { Landmark, TrendingUp, ShieldAlert, Network } from 'lucide-react';

interface PhilosophyProps {
  t: TranslationData;
}

const philosophyIcons = [Landmark, TrendingUp, ShieldAlert, Network];

export default function Philosophy({ t }: PhilosophyProps) {
  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-200" id="philosophy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <div className="inline-block text-xs font-bold text-slate-500 uppercase tracking-wider px-3 py-1 bg-slate-200/60 rounded-md mb-2" id="badge-philosophy">
            Design Standards
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3" id="philosophy-title">
            {t.philosophy.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl" id="philosophy-subtitle">
            {t.philosophy.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="philosophy-grid">
          {t.philosophy.items.map((item, idx) => {
            const Icon = philosophyIcons[idx] || Landmark;
            return (
              <div
                key={item.title}
                className="p-6 bg-white rounded-xl border border-slate-200/90 shadow-xs hover:border-blue-400 transition-colors"
                id={`philosophy-item-${idx}`}
              >
                <div className="w-10 h-10 rounded-md bg-slate-100 text-slate-800 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-blue-700" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2" id={`philosophy-item-title-${idx}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed" id={`philosophy-item-desc-${idx}`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
