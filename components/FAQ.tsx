'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { TranslationData } from '@/lib/translations';
import {
  HelpCircle,
  ChevronDown,
  Search,
  ShieldCheck,
  Server,
  Layers,
  Handshake,
  MessageSquare,
  X,
  Sparkles,
} from 'lucide-react';
import EmptyState from '@/components/ui/EmptyState';

interface FAQProps {
  t: TranslationData;
  isRtl?: boolean;
  onOpenContact?: () => void;
}

export default function FAQ({ t, isRtl = true, onOpenContact }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [openItems, setOpenItems] = useState<Set<string>>(() => new Set(['faq-1', 'faq-2']));

  useEffect(() => {
    try {
      const saved = localStorage.getItem('idg-faq-searches');
      if (saved) setRecentSearches(JSON.parse(saved).slice(0, 5));
    } catch {}
  }, []);

  const saveSearch = (query: string) => {
    const trimmed = query.trim();
    if (trimmed.length < 3) return;
    const updated = [trimmed, ...recentSearches.filter((s) => s !== trimmed)].slice(0, 5);
    setRecentSearches(updated);
    try {
      localStorage.setItem('idg-faq-searches', JSON.stringify(updated));
    } catch {}
  };

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const filteredItems = useMemo(() => {
    return t.faq.items.filter((item) => {
      const matchesCategory =
        activeCategory === 'all' || item.category === activeCategory;
      const normalizedQuery = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !normalizedQuery ||
        item.question.toLowerCase().includes(normalizedQuery) ||
        item.answer.toLowerCase().includes(normalizedQuery) ||
        (item.highlights &&
          item.highlights.some((h) => h.toLowerCase().includes(normalizedQuery)));
      return matchesCategory && matchesSearch;
    });
  }, [t.faq.items, activeCategory, searchQuery]);

  const categories = [
    { id: 'all', label: t.faq.allCategory, icon: Layers },
    { id: 'governance', label: t.faq.categories.governance, icon: ShieldCheck },
    { id: 'infrastructure', label: t.faq.categories.infrastructure, icon: Server },
    { id: 'products', label: t.faq.categories.products, icon: Sparkles },
    { id: 'partnerships', label: t.faq.categories.partnerships, icon: Handshake },
  ];

  return (
    <section
      className="py-10 sm:py-16 md:py-24 bg-[#060D1A] text-white relative overflow-hidden border-t border-[#102447]"
      id="faq"
    >
      {/* Background Accent Mesh */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1D5BD8_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute -top-32 -start-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -end-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B172E] border border-[#102447] text-xs font-semibold text-blue-400 mb-3 sm:mb-4"
            id="faq-badge"
          >
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span>{t.faq.badge}</span>
          </div>

          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3 sm:mb-4"
            id="faq-heading"
          >
            {t.faq.heading}
          </h2>

          <p
            className="text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed font-normal"
            id="faq-subheading"
          >
            {t.faq.subheading}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-6 sm:mb-8" id="faq-search-wrapper">
          <div className="relative flex items-center">
            <Search className="w-4 sm:w-5 h-4 sm:h-5 text-slate-400 absolute start-3.5 sm:start-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') saveSearch(searchQuery);
              }}
              onBlur={() => {
                if (searchQuery.length >= 3) saveSearch(searchQuery);
              }}
              placeholder={t.faq.searchPlaceholder}
              autoComplete="off"
              spellCheck={false}
              suppressHydrationWarning
              className="input-base rounded-xl ps-10 sm:ps-12 pe-10 py-3 sm:py-3.5 text-xs sm:text-sm text-white placeholder-slate-400 min-h-[44px]"
              id="faq-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute end-3 text-slate-400 hover:text-white p-1 rounded-md transition-colors"
                id="faq-search-clear"
                aria-label="Clear Search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {recentSearches.length > 0 && !searchQuery && (
            <div className="flex items-center gap-2 mt-2.5 flex-wrap text-xs text-slate-400" id="faq-recent-searches">
              <span className="text-[11px] text-slate-500 font-medium">
                {isRtl ? 'گەڕانەکانی پێشوو:' : 'Recent searches:'}
              </span>
              {recentSearches.map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSearchQuery(s)}
                  className="px-2.5 py-1 rounded-lg bg-[#0B172E] border border-[#102447] text-slate-300 hover:text-white hover:border-[#1D5BD8]/60 transition-colors cursor-pointer text-xs"
                >
                  {s}
                </button>
              ))}
              <button
                type="button"
                onClick={() => {
                  setRecentSearches([]);
                  try {
                    localStorage.removeItem('idg-faq-searches');
                  } catch {}
                }}
                className="text-[10px] text-slate-500 hover:text-slate-300 transition-colors ms-1 cursor-pointer"
                title={isRtl ? 'سڕینەوەی مێژوو' : 'Clear history'}
              >
                <X className="w-3 h-3 inline" />
              </button>
            </div>
          )}
        </div>

        {/* Category Filters */}
        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          id="faq-category-filters"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-900/30 border border-blue-500'
                    : 'bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/80'
                }`}
                id={`faq-filter-${cat.id}`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Items Accordion */}
        <div className="space-y-4 mb-16" id="faq-accordion-list">
          {filteredItems.length === 0 ? (
            <EmptyState
              icon={HelpCircle}
              title={isRtl ? 'هیچ پرسیارێک نەدۆزرایەوە' : 'No questions found'}
              description={
                isRtl
                  ? 'هیچ پرسیارێک نەدۆزرایەوە کە لەگەڵ وشەی گەڕانەکەت یان فلتەرەکەدا بگونجێت.'
                  : 'No questions matched your current search or category filter.'
              }
              actionLabel={isRtl ? 'سڕینەوەی فلتەرەکان' : 'Reset filters'}
              onAction={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            />
          ) : (
            filteredItems.map((item, index) => {
              const isOpen = openItems.has(item.id);
              return (
                <div
                  key={item.id}
                  className={`bg-slate-800/80 rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-blue-500/70 shadow-lg shadow-blue-950/40 bg-slate-800'
                      : 'border-slate-700/70 hover:border-slate-600'
                  }`}
                  id={`faq-card-${item.id}`}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-5 sm:p-6 text-start flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                    id={`faq-toggle-${item.id}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-content-${item.id}`}
                  >
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <span className="shrink-0 mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-950/80 border border-blue-800 text-blue-400 text-xs font-bold font-mono">
                        {index + 1}
                      </span>
                      <span className="text-base sm:text-lg font-bold text-white leading-snug">
                        {item.question}
                      </span>
                    </div>
                    <div
                      className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-slate-700/60 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-blue-600 text-white' : 'text-slate-400'
                      }`}
                      id={`faq-icon-${item.id}`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 border-t border-slate-700/60 text-slate-300 text-sm sm:text-base leading-relaxed animate-in fade-in duration-200"
                      id={`faq-content-${item.id}`}
                    >
                      <p className="mb-4 text-slate-200 leading-relaxed font-normal">
                        {item.answer}
                      </p>

                      {item.highlights && item.highlights.length > 0 && (
                        <div
                          className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-700/40"
                          id={`faq-highlights-${item.id}`}
                        >
                          <span className="text-xs text-slate-400 font-medium">
                            {isRtl ? 'خاڵە سەرەکییەکان:' : 'Key Pillars:'}
                          </span>
                          {item.highlights.map((highlight, hIdx) => (
                            <span
                              key={hIdx}
                              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-950/60 text-blue-300 border border-blue-800/60"
                            >
                              <ShieldCheck className="w-3 h-3 text-blue-400" />
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Institutional Contact Support Box */}
        <div
          className="bg-gradient-to-r from-slate-800 via-slate-800/90 to-blue-950/60 border border-slate-700 rounded-2xl p-6 sm:p-8 text-center sm:text-start flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
          id="faq-institutional-support-card"
        >
          <div className="space-y-1.5">
            <h3 className="text-lg sm:text-xl font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <MessageSquare className="w-5 h-5 text-blue-400 inline" />
              <span>{t.faq.stillHaveQuestions}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
              {t.faq.supportDesc}
            </p>
          </div>

          <button
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              }
            }}
            className="shrink-0 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all hover:shadow-lg hover:scale-102 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
            id="faq-btn-contact-support"
          >
            {t.faq.contactBtn}
          </button>
        </div>

      </div>
    </section>
  );
}
