'use client';

import React from 'react';
import { TranslationData } from '@/lib/translations';
import { Maximize2 } from 'lucide-react';

interface PortfolioProps {
  t: TranslationData;
  isRtl: boolean;
  onSelectProduct: (productId: string) => void;
  onSelectNSW: () => void;
}

export default function Portfolio({
  t,
  isRtl,
  onSelectProduct,
  onSelectNSW,
}: PortfolioProps) {
  const p = t.portfolio;

  return (
    <div className="bg-gray-50 text-gray-900 min-h-screen font-sans" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <section className="bg-slate-900 text-white py-12 md:py-20" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            id="portfolio-header-title"
          >
            {p.headerTitle}
          </h1>
          <p
            className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed"
            id="portfolio-header-desc"
          >
            {p.headerDesc}
          </p>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-200" id="philosophy">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="text-xl md:text-2xl font-bold text-gray-800 mb-6 md:mb-8"
            id="philosophy-title"
          >
            {t.philosophy.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {t.philosophy.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 md:p-5 bg-slate-50 rounded-lg border border-slate-100"
                id={`philosophy-item-${idx}`}
              >
                <h3 className="font-bold text-slate-800 mb-1 md:mb-2 text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Portfolio (Hybrid Model) */}
      <section className="py-12 md:py-20 bg-gray-50" id="portfolio-assets">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 md:mb-12"
            id="portfolio-governed-heading"
          >
            {p.heading}
          </h2>

          <div className="space-y-6 md:space-y-8">
            {p.products.map((prod) => {
              // Badge color variants matching the design
              let badgeColor = 'bg-blue-100 text-blue-800';
              if (prod.id === 'zana') {
                badgeColor = 'bg-slate-200 text-slate-800';
              } else if (prod.id === 'greenbelt') {
                badgeColor = 'bg-green-100 text-green-800';
              }

              return (
                <div
                  key={prod.id}
                  onClick={() => onSelectProduct(prod.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectProduct(prod.id);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`${prod.title} - ${p.cardInspectPrompt}`}
                  className="bg-white p-5 md:p-8 rounded-xl shadow-xs border border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 hover:border-blue-300 hover:shadow-md transition cursor-pointer group"
                  id={`portfolio-card-${prod.id}`}
                >
                  <div className="w-full md:w-auto flex-1">
                    <span
                      className={`${badgeColor} text-xs font-bold px-3 py-1 rounded-full mb-2 md:mb-3 inline-block`}
                    >
                      {prod.numBadge}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                      {prod.title}{' '}
                      <span className="block md:inline text-xs md:text-sm font-normal text-gray-500 md:ml-2">
                        — {prod.subtitle}
                      </span>
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 max-w-3xl leading-relaxed mb-3">
                      {prod.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs text-blue-700 font-medium">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{p.cardInspectPrompt}</span>
                    </div>
                  </div>

                  <a
                    href={prod.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full md:w-auto text-center bg-slate-900 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg whitespace-nowrap transition shrink-0 shadow-xs"
                    id={`btn-visit-site-${prod.id}`}
                  >
                    {p.visitWebsiteBtn}
                  </a>
                </div>
              );
            })}

            {/* Strategic Initiative */}
            <div
              onClick={onSelectNSW}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onSelectNSW();
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`${p.nsw.title} - ${p.cardInspectPrompt}`}
              className="mt-8 md:mt-12 p-5 md:p-8 border-2 border-dashed border-slate-300 hover:border-blue-400 rounded-xl bg-slate-50 hover:bg-blue-50/40 transition cursor-pointer group"
              id="spotlight-iraq-nsw"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 group-hover:text-blue-900 transition-colors">
                    {p.nsw.fullTitle}
                  </h3>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-3xl">
                    {p.nsw.architecture}
                  </p>
                </div>
                <div className="w-full md:w-auto text-center bg-white hover:bg-blue-50 border border-slate-300 text-blue-700 font-medium py-2 px-5 rounded-lg whitespace-nowrap transition text-xs sm:text-sm flex items-center justify-center gap-1.5 shrink-0 shadow-2xs">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{p.cardInspectPrompt}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
