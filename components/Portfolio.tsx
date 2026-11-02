'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { TranslationData } from '@/lib/translations';
import { Maximize2, Search, X, ExternalLink, ArrowRight, Users, Sparkles } from 'lucide-react';
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
  const router = useRouter();
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
        prod.description.toLowerCase().includes(q) ||
        (prod.name && prod.name.toLowerCase().includes(q)) ||
        (prod.tagline && prod.tagline.toLowerCase().includes(q)) ||
        (prod.code && prod.code.toLowerCase().includes(q))
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
              const isExternal = Boolean(prod.external);
              const isImpactIQ = prod.id === 'impactiq' || prod.code === 'IDG-PRD-004';
              const isGatewayAI = prod.id === 'gatewayai' || prod.code === 'IDG-PRD-005';

              let badgeVariant: BadgeVariant = 'primary';
              if (prod.id === 'zana') {
                badgeVariant = 'neutral';
              } else if (prod.id === 'greenbelt') {
                badgeVariant = 'emerald';
              } else if (isImpactIQ) {
                badgeVariant = 'primary';
              } else if (isGatewayAI) {
                badgeVariant = 'emerald';
              }

              const productHref =
                (prod.link
                  ? prod.link.startsWith(`/${lang}`)
                    ? prod.link
                    : prod.link.startsWith('/')
                    ? `/${lang}${prod.link}`
                    : prod.link
                  : prod.url) || '#';

              return (
                <React.Fragment key={prod.id}>
                  {isGatewayAI && showNSW && (
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
                      className="p-5 md:p-8 border-2 border-dashed border-[#102447] hover:border-[#1D5BD8]/60 rounded-2xl min-h-[140px] md:min-h-[160px] ring-1 ring-indigo-500/20 shadow-sm shadow-indigo-500/10 bg-[#0B172E]/50 hover:bg-[#102447]/40 transition cursor-pointer group"
                      id="spotlight-iraq-nsw"
                    >
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-100 mb-1 leading-tight group-hover:text-[#60A5FA] transition-colors">
                            <span aria-hidden="true" className="me-1.5">🇮🇶</span>
                            <span>{p.nsw.fullTitle.replace('🇮🇶', '').trim()}</span>
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 max-w-xl">
                            {p.nsw.architecture}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 mt-2 md:mt-0 self-end md:self-center flex-shrink-0">
                          <div className="w-full md:w-auto text-center bg-[#0B172E] hover:bg-[#102447] border border-[#102447] text-[#60A5FA] font-medium py-2 px-5 rounded-lg whitespace-nowrap transition text-xs sm:text-sm flex items-center justify-center gap-1.5 shrink-0 shadow-2xs">
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>{p.cardInspectPrompt}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="w-full">
                    {/* Standalone Platforms Section Header - renders above external platform cards */}
                    {isExternal && filteredProducts.findIndex(p => Boolean(p.external)) === filteredProducts.indexOf(prod) && (
                      <div className="text-xs uppercase tracking-wider text-muted text-slate-400 font-semibold mb-3 pt-2">
                        {p.standalonePlatforms}
                      </div>
                    )}

                    <div
                      onClick={() => {
                        if (isExternal && prod.id === 'zana') {
                          window.open(prod.externalUrl || prod.url, '_blank', 'noopener,noreferrer');
                        } else if (prod.id === 'iraqnsw') {
                          onSelectNSW();
                        } else if (isGatewayAI) {
                          router.push(`/${lang}/products/economic-knowledge-graph`);
                        } else {
                          onSelectProduct(prod.id);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          if (isExternal && prod.id === 'zana') {
                            window.open(prod.externalUrl || prod.url, '_blank', 'noopener,noreferrer');
                          } else if (prod.id === 'iraqnsw') {
                            onSelectNSW();
                          } else if (isGatewayAI) {
                            router.push(`/${lang}/products/economic-knowledge-graph`);
                          } else {
                            onSelectProduct(prod.id);
                          }
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      aria-label={`${prod.title} - ${p.cardInspectPrompt}`}
                      className={`bg-[#0B172E] p-4 sm:p-6 md:p-8 rounded-2xl min-h-[140px] md:min-h-[160px] transition cursor-pointer group flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 ${
                        isExternal && prod.id === 'zana'
                          ? 'border-dashed border-2 border-amber-500/40 hover:border-amber-400/80 hover:bg-[#0B172E]/90'
                          : prod.id === 'iraqnsw'
                          ? 'border border-indigo-500/40 ring-1 ring-indigo-500/20 shadow-sm shadow-indigo-500/10 hover:border-indigo-400 hover:ring-indigo-500/40'
                          : isImpactIQ
                          ? 'border border-sky-500/40 ring-1 ring-sky-500/30 shadow-lg shadow-sky-500/10 hover:border-sky-400 hover:ring-sky-500/50'
                          : isGatewayAI
                          ? 'border border-emerald-500/40 ring-1 ring-emerald-500/30 shadow-lg shadow-emerald-500/10 hover:border-emerald-400 hover:ring-emerald-500/50'
                          : 'border border-[#102447] hover:border-[#1D5BD8] hover:shadow-[0_0_0_1px_#1D5BD8]/20'
                      }`}
                      id={prod.id}
                    >
                      <div className="w-full md:w-auto flex-1">
                        {/* Badge Row */}
                        <div className="flex flex-wrap items-center gap-1.5 mb-2 md:mb-3">
                          <SovereignBadge
                            label={prod.numBadge}
                            variant={badgeVariant}
                            size="md"
                          />
                          {isExternal && prod.badge && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-semibold">
                              {prod.badge}
                            </span>
                          )}
                          {isImpactIQ && (
                            <>
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-semibold text-sky-400">
                                <Sparkles className="w-3 h-3 text-sky-400" />
                                <span>⭐ NEW</span>
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
                                {prod.badge || 'Strategic Initiative'}
                              </span>
                            </>
                          )}
                          {isGatewayAI && (
                            <>
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
                                <Sparkles className="w-3 h-3 text-emerald-400" />
                                <span>⭐ NEW</span>
                              </span>
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
                                {prod.badge || 'Strategic Initiative'}
                              </span>
                            </>
                          )}
                        </div>

                        {/* Title and Subtitle */}
                        <h3 className={`text-base sm:text-lg md:text-xl font-bold text-slate-100 mb-1 leading-tight transition-colors ${
                          isExternal ? 'group-hover:text-amber-400' : isImpactIQ ? 'group-hover:text-sky-400' : isGatewayAI ? 'group-hover:text-emerald-400' : 'group-hover:text-[#60A5FA]'
                        }`}>
                          <span lang="en" dir="ltr">{prod.title}</span>{' '}
                          <span className="block md:inline text-xs md:text-sm font-normal text-slate-400 md:ms-2">
                            — {prod.subtitle}
                          </span>
                        </h3>

                        {/* Audience label for external platform */}
                        {isExternal && prod.audience && (
                          <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1 mb-2 font-normal">
                            <Users className="w-3.5 h-3.5 text-amber-400/90 shrink-0" />
                            <span>{prod.audience}</span>
                          </div>
                        )}

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 max-w-xl mb-3">
                          {prod.description}
                        </p>

                        {/* Technical Dossier & Mock-up Inspect Prompt */}
                        {isGatewayAI ? (
                          <Link
                            href={`/${lang}/products/economic-knowledge-graph`}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium transition-colors cursor-pointer"
                            id={`btn-inspect-${prod.id}`}
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>{p.cardInspectPrompt}</span>
                          </Link>
                        ) : (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectProduct(prod.id);
                            }}
                            className="inline-flex items-center gap-1.5 text-xs text-[#60A5FA] hover:text-[#93C5FD] font-medium transition-colors cursor-pointer"
                          >
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span>{p.cardInspectPrompt}</span>
                          </button>
                        )}
                      </div>

                      {/* CTA Button */}
                      <div className="flex items-center gap-2 mt-2 md:mt-0 self-end md:self-center flex-shrink-0">
                        {isExternal && prod.id === 'zana' ? (
                          <a
                            href={prod.externalUrl || prod.url}
                            target="_blank"
                            rel="noopener nofollow external"
                            aria-label={`${p.openExternalPlatform} — ${prod.title} (opens in new tab)`}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full md:w-auto text-center bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/40 font-medium py-2.5 px-6 rounded-xl whitespace-nowrap transition shrink-0 shadow-xs min-h-[44px] flex items-center justify-center gap-2 text-xs sm:text-sm"
                            id={`btn-visit-site-${prod.id}`}
                          >
                            <span>{p.openExternalPlatform}</span>
                            <ExternalLink className="w-4 h-4 shrink-0" />
                          </a>
                        ) : prod.id === 'greenbelt' ? (
                          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto shrink-0">
                            <a
                              href="https://greenbelt.idggov.tech"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${lang === 'ku' ? 'کردنەوە و بینینی وێبسایت' : lang === 'ar' ? 'عرض وزيارة الموقع' : 'View Website'} — ${prod.title} (opens in new tab)`}
                              onClick={(e) => e.stopPropagation()}
                              className="w-full sm:w-auto text-center bg-[#1D5BD8] hover:bg-[#193B73] text-white font-medium py-2.5 px-4 sm:px-5 rounded-xl whitespace-nowrap transition shrink-0 shadow-xs border border-[#1D5BD8]/40 min-h-[44px] flex items-center justify-center gap-2 text-xs sm:text-sm"
                              id={`btn-visit-site-${prod.id}`}
                            >
                              <span>{lang === 'ku' ? 'کردنەوە و بینینی وێبسایت' : lang === 'ar' ? 'عرض وزيارة الموقع' : 'View Website'}</span>
                              <ExternalLink className="w-4 h-4 shrink-0" />
                            </a>
                            <a
                              href="https://greenbelt.idggov.tech/dashboard"
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${lang === 'ku' ? 'چوونە ناو پلاتفۆرم' : lang === 'ar' ? 'الدخول إلى المنصة' : 'Enter Platform'} — ${prod.title} Dashboard (opens in new tab)`}
                              onClick={(e) => e.stopPropagation()}
                              className="w-full sm:w-auto text-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 px-4 sm:px-5 rounded-xl whitespace-nowrap transition shrink-0 shadow-xs border border-emerald-500/40 min-h-[44px] flex items-center justify-center gap-2 text-xs sm:text-sm"
                              id={`btn-dashboard-${prod.id}`}
                            >
                              <span>{lang === 'ku' ? 'چوونە ناو پلاتفۆرم' : lang === 'ar' ? 'الدخول إلى المنصة' : 'Enter Platform'}</span>
                              <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" />
                            </a>
                          </div>
                        ) : productHref.startsWith('http') ? (
                          <a
                            href={productHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${p.visitWebsiteBtn} — ${prod.title} (opens in new tab)`}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full md:w-auto text-center bg-[#1D5BD8] hover:bg-[#193B73] text-white font-medium py-2.5 px-6 rounded-xl whitespace-nowrap transition shrink-0 shadow-xs border border-[#1D5BD8]/40 min-h-[44px] flex items-center justify-center gap-2 text-xs sm:text-sm"
                            id={`btn-visit-site-${prod.id}`}
                          >
                            <span>{p.visitWebsiteBtn}</span>
                            <ExternalLink className="w-4 h-4 shrink-0" />
                          </a>
                        ) : (
                          <Link
                            href={productHref}
                            aria-label={`${p.visitWebsiteBtn} — ${prod.title}`}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full md:w-auto text-center bg-[#1D5BD8] hover:bg-[#193B73] text-white font-medium py-2.5 px-6 rounded-xl whitespace-nowrap transition shrink-0 shadow-xs border border-[#1D5BD8]/40 min-h-[44px] flex items-center justify-center gap-2 text-xs sm:text-sm"
                            id={`btn-visit-site-${prod.id}`}
                          >
                            <span>{p.visitWebsiteBtn}</span>
                            <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}

            {/* Strategic Initiative NSW Card if gatewayai not in list */}
            {showNSW && !filteredProducts.some((p) => p.id === 'gatewayai') && (
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
                className="p-5 md:p-8 border-2 border-dashed border-[#102447] hover:border-[#1D5BD8]/60 rounded-2xl min-h-[140px] md:min-h-[160px] ring-1 ring-indigo-500/20 shadow-sm shadow-indigo-500/10 bg-[#0B172E]/50 hover:bg-[#102447]/40 transition cursor-pointer group"
                id="spotlight-iraq-nsw"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-100 mb-1 leading-tight group-hover:text-[#60A5FA] transition-colors">
                      <span aria-hidden="true" className="me-1.5">🇮🇶</span>
                      <span>{p.nsw.fullTitle.replace('🇮🇶', '').trim()}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-3 max-w-xl">
                      {p.nsw.architecture}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2 md:mt-0 self-end md:self-center flex-shrink-0">
                    <div className="w-full md:w-auto text-center bg-[#0B172E] hover:bg-[#102447] border border-[#102447] text-[#60A5FA] font-medium py-2 px-5 rounded-lg whitespace-nowrap transition text-xs sm:text-sm flex items-center justify-center gap-1.5 shrink-0 shadow-2xs">
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>{p.cardInspectPrompt}</span>
                    </div>
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

