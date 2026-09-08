'use client';

import React from 'react';
import { TranslationData } from '@/lib/translations';
import { Building2, Landmark, Truck, Trees, Check } from 'lucide-react';

interface StakeholdersProps {
  t: TranslationData;
}

const sectorIcons = [Building2, Landmark, Truck, Trees];

export default function Stakeholders({ t }: StakeholdersProps) {
  const s = t.stakeholders;

  return (
    <section className="py-24 bg-white border-b border-slate-200" id="stakeholders">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest px-3 py-1 bg-blue-50 border border-blue-200 rounded-md mb-3" id="badge-stakeholders">
            Target Stakeholders & Mandates
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4" id="stakeholders-heading">
            {s.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal" id="stakeholders-subheading">
            {s.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="stakeholders-sectors-grid">
          {s.sectors.map((sec, idx) => {
            const Icon = sectorIcons[idx] || Building2;
            return (
              <div
                key={sec.title}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 transition-all flex flex-col justify-between"
                id={`stakeholder-card-${idx}`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {sec.title}
                    </h3>
                  </div>

                  <p className="text-sm font-medium text-blue-700 mb-6 bg-blue-50/70 p-3 rounded-lg border border-blue-100">
                    {sec.mandate}
                  </p>

                  <div className="space-y-2.5">
                    {sec.outcomes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-400">
                  <span>ستانداردی دەستەی IDG</span>
                  <span className="font-mono">SECTOR-0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
