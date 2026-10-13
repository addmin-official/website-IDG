'use client';

import React, { useState, useMemo } from 'react';
import { TranslationData } from '@/lib/translations';
import { Maximize2, Search, X } from 'lucide-react';
import { HelpIcon } from '@/components/ui/Tooltip';
import SovereignBadge, { BadgeVariant } from '@/components/SovereignBadge';
import { useLocale } from '@/lib/locale-context';
import EmptyState from '@/components/ui/EmptyState';

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
  const { lang } = useLocale();
  const p = t.portfolio;
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'products' | 'initiatives'>('all');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'initiatives') return [];
    const q = searchQuery.trim().toLowerCase();
    if (!q) return p.products;
    return p.products.filter(
      (prod) =>
        prod.title.toLowerCase().includes(q) ||
        prod.subtitle.toLowerCase().includes(q) ||
        prod.numBadge.toLowerCase().includes(q) ||
        prod.description.toLowerCase().includes(q)
    );
  }, [p.products, searchQuery, activeFilter]);

  const showNSW = useMemo(() => {
    if (activeFilter === 'products') return false;
    const q = searchQuery.trim().toLowerCase();
    if (!q) return true;
    return (
      p.nsw.title.toLowerCase().includes(q) ||
      p.nsw.fullTitle.toLowerCase().includes(q) ||
      p.nsw.architecture.toLowerCase().includes(q)
    );
  }, [p.nsw, searchQuery, activeFilter]);

  return (
    <div className="bg-[#060D1A] text-slate-200 min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header Section */}
      <section className="bg-[#0B172E] text-white py-10 sm:py-14 md:py-20 border-b border-[#102447]" id="portfolio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight"
            id="portfolio-header-title"
          >
            {p.headerTitle}
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed"
            id="portfolio-header-desc"
          >
            {p.headerDesc}
          </p>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-10 sm:py-14 md:py-16 bg-[#060D1A] border-b border-[#102447]" id="philosophy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-lg sm:text-xl md:text-2xl font-bold text-slate-100 mb-4 sm:mb-8"
            id="philosophy-title"
          >
            {t.philosophy.heading}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
            {t.philosophy.items.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 bg-[#0B172E] rounded-xl border border-[#102447]"
                id={`philosophy-item-${idx}`}
              >
                <h3 className="font-bold text-slate-100 mb-1 md:mb-2 text-sm md:text-base">
                  {item.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Portfolio (Hybrid Model) */}
      <section className="py-10 sm:py-14 md:py-20 bg-[#060D1A]" id="portfolio-assets">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-100 mb-6 sm:mb-8 inline-flex items-center gap-2"
            id="portfolio-governed-heading"
          >
            <span>{p.heading}</span>
            <HelpIcon tooltip={isRtl ? 'یەکە و بەرهەمە فەرمییە بەڕێوەبراوەکانی ژێر چاودێریی IDG (Governed Portfolio Asset)' : 'Official institutional entities operating under IDG sovereign governance'} />
          </h2>

          {/* Search & Category Filter Bar */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 mb-8" id="portfolio-search-filters">
            {/* Search Input */}
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 text-slate-400 absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'ku'
                    ? 'گەڕان لە بەرهەمەکان...'
                    : lang === 'ar'
                    ? 'البحث في المحفظة والمنتجات...'
                    : 'Search products and initiatives...'
                }
                className="input-base rounded-xl ps-10 pe-9 py-2.5 text-xs sm:text-sm w-full min-h-[42px]"
                id="portfolio-search-input"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute end-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1 rounded-md transition-colors"
                  aria-label="Clear Search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex gap-2 shrink-0">
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  activeFilter === 'all'
                    ? 'bg-[#1D5BD8] text-white shadow-xs'
                    : 'bg-[#0B172E] border border-[#102447] text-slate-300 hover:text-white hover:border-[#1D5BD8]/50'
                }`}
                id="filter-btn-all"
              >
                {lang === 'ku' ? 'هەمووی' : lang === 'ar' ? 'الكل' : 'All'}
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('products')}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  activeFilter === 'products'
                    ? 'bg-[#1D5BD8] text-white shadow-xs'
                    : 'bg-[#0B172E] border border-[#102447] text-slate-300 hover:text-white hover:border-[#1D5BD8]/50'
                }`}
                id="filter-btn-products"
              >
                {lang === 'ku' ? 'بەرهەمەکان' : lang === 'ar' ? 'المنتجات' : 'Products'}
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter('initiatives')}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                  activeFilter === 'initiatives'
                    ? 'bg-[#1D5BD8] text-white shadow-xs'
                    : 'bg-[#0B172E] border border-[#102447] text-slate-300 hover:text-white hover:border-[#1D5BD8]/50'
                }`}
                id="filter-btn-initiatives"
              >
                {lang === 'ku' ? 'دەستپێشخەرییەکان' : lang === 'ar' ? 'المبادرات' : 'Initiatives'}
              </button>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {filteredProducts.map((prod) => {
              let badgeVariant: BadgeVariant = 'primary';
              if (prod.id === 'zana') {
                badgeVariant = 'neutral';
              } else if (prod.id === 'greenbelt') {
                badgeVariant = 'emerald';
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
                  className="bg-[#0B172E] p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl border border-[#102447] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 hover:border-[#1D5BD8] hover:shadow-[0_0_0_1px_#1D5BD8]/20 transition cursor-pointer group"
                  id={prod.id}
                >
                  <div className="w-full md:w-auto flex-1">
                    <div className="mb-2 md:mb-3">
                      <SovereignBadge
                        label={prod.numBadge}
                        variant={badgeVariant}
                        size="md"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-100 mb-2 group-hover:text-[#60A5FA] transition-colors">
                      {prod.title}{' '}
                      <span className="block md:inline text-xs md:text-sm font-normal text-slate-400 md:ms-2">
                        — {prod.subtitle}
                      </span>
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-3xl leading-relaxed mb-3">
                      {prod.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-xs text-[#60A5FA] font-medium">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{p.cardInspectPrompt}</span>
                    </div>
                  </div>

                  <a
                    href={prod.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full md:w-auto text-center bg-[#1D5BD8] hover:bg-[#193B73] text-white font-medium py-2.5 px-6 rounded-xl whitespace-nowrap transition shrink-0 shadow-xs border border-[#1D5BD8]/40 min-h-[44px] flex items-center justify-center text-xs sm:text-sm"
                    id={`btn-visit-site-${prod.id}`}
                  >
                    {p.visitWebsiteBtn}
                  </a>
                </div>
              );
            })}

            {/* Strategic Initiative */}
            {showNSW && (
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
                className="mt-8 md:mt-12 p-5 md:p-8 border-2 border-dashed border-[#102447] hover:border-[#1D5BD8]/60 rounded-xl bg-[#0B172E]/50 hover:bg-[#102447]/40 transition cursor-pointer group"
                id="spotlight-iraq-nsw"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-bold text-slate-200 mb-2 group-hover:text-[#60A5FA] transition-colors">
                      {p.nsw.fullTitle}
                    </h3>
                    <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-3xl">
                      {p.nsw.architecture}
                    </p>
                  </div>
                  <div className="w-full md:w-auto text-center bg-[#0B172E] hover:bg-[#102447] border border-[#102447] text-[#60A5FA] font-medium py-2 px-5 rounded-lg whitespace-nowrap transition text-xs sm:text-sm flex items-center justify-center gap-1.5 shrink-0 shadow-2xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{p.cardInspectPrompt}</span>
                  </div>
                </div>
              </div>
            )}

            {filteredProducts.length === 0 && !showNSW && (
              <EmptyState
                icon={Search}
                title={lang === 'ku' ? 'هیچ بەرهەمێک نەدۆزرایەوە' : lang === 'ar' ? 'لم يتم العثور على نتائج' : 'No products found'}
                description={
                  lang === 'ku'
                    ? 'هیچ بەرهەم یان دەستپێشخەرییەک لەگەڵ وشەی گەڕانەکەت ناگونجێت. دەتوانیت گەڕانەکەت پاک بکەیتەوە.'
                    : lang === 'ar'
                    ? 'لم يتم العثور على نتائج تطابق عبارة البحث الحالية.'
                    : 'No portfolio asset matches your current search or filter query.'
                }
                actionLabel={lang === 'ku' ? 'پاککردنەوەی گەڕان' : lang === 'ar' ? 'إعادة ضبط البحث' : 'Clear search'}
                onAction={() => {
                  setSearchQuery('');
                  setActiveFilter('all');
                }}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
