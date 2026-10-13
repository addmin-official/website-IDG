'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import { usePathname } from 'next/navigation';

export interface RecentPage {
  path: string;
  title: string;
  timestamp: number;
}

const ROUTE_TITLES: Record<string, Record<string, string>> = {
  about: { ku: 'دەربارەی ئێمە', ar: 'من نحن', en: 'About Us' },
  governance: { ku: 'حوکمڕانی و شەفافیەت', ar: 'الحوكمة والشفافية', en: 'Governance Matrix' },
  portfolio: { ku: 'پۆرتفۆلیۆ و بەرهەمەکان', ar: 'محفظة المنتجات', en: 'Portfolio & Products' },
  stakeholders: { ku: 'لایەنە ئامانجدارەکان', ar: 'الجهات المستهدفة', en: 'Stakeholders' },
  vision: { ku: 'دیدگای ٢٠٣٥', ar: 'رؤية 2035', en: 'Vision 2035' },
  careers: { ku: 'هەلی کار و دامەزراندن', ar: 'الوظائف والفرص المهنية', en: 'Careers & Talent' },
  faq: { ku: 'پرسیارە باوەکان', ar: 'الأسئلة الشائعة', en: 'Frequently Asked Questions' },
  contact: { ku: 'پەیوەندیی فەرمی', ar: 'التواصل المؤسسي', en: 'Official Contact' },
  help: { ku: 'ناوەندی هاوکاری و بەڵگەنامەکان', ar: 'مركز المساعدة والوثائق', en: 'Help & Documentation' },
  'legal/privacy': { ku: 'سیاسەتی پاراستنی نهێنی', ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
  'legal/terms': { ku: 'مەرجەکانی بەکارهێنان', ar: 'شروط الاستخدام', en: 'Terms of Use' },
  'legal/sovereign-data': { ku: 'سەروەریی داتای نیشتمانی', ar: 'سيادة البيانات الوطنية', en: 'Sovereign Data Policy' },
  'legal/accessibility': { ku: 'ڕاگەیەندراوی دەستڕاگەیشتن', ar: 'بيان إمكانية الوصول', en: 'Accessibility Statement' },
};

export default function RecentlyViewed() {
  const { lang, isRtl } = useLocale();
  const pathname = usePathname();
  const [pages, setPages] = useState<RecentPage[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const cleanPath = pathname || '';
    const isHome = cleanPath === `/${lang}` || cleanPath === `/${lang}/` || cleanPath === '/' || cleanPath === '';

    // If on a sub-page, record it in history
    if (!isHome) {
      try {
        const routeKey = cleanPath.replace(new RegExp(`^/${lang}/?`), '');
        const mappedTitle = ROUTE_TITLES[routeKey]?.[lang];
        const pageTitle = mappedTitle || (typeof document !== 'undefined' && document.title ? document.title.split('—')[0].trim() : cleanPath);

        const saved = localStorage.getItem('idg-recent-pages');
        const existing: RecentPage[] = saved ? JSON.parse(saved) : [];

        const updated = [
          { path: cleanPath, title: pageTitle, timestamp: Date.now() },
          ...existing.filter((p) => p.path !== cleanPath),
        ].slice(0, 5);

        localStorage.setItem('idg-recent-pages', JSON.stringify(updated));
      } catch {}
    }

    // Load history for display (filter out current page)
    try {
      const saved = localStorage.getItem('idg-recent-pages');
      if (saved) {
        const existing: RecentPage[] = JSON.parse(saved);
        setPages(existing.filter((p) => p.path !== cleanPath).slice(0, 3));
      }
    } catch {}
  }, [pathname, lang]);

  if (pages.length === 0) return null;

  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-8 border-b border-[#102447] bg-[#060D1A]" id="recently-viewed-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">
          <Clock className="w-3.5 h-3.5 text-[#60A5FA]" />
          <span>
            {lang === 'ku'
              ? 'بەردەوام بە لەوێوە کە جێت هێشت'
              : lang === 'ar'
              ? 'تابع من حيث توقفت'
              : 'Continue where you left off'}
          </span>
        </div>
        <div className="flex flex-wrap gap-3">
          {pages.map((page) => (
            <Link
              key={page.path}
              href={page.path}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B172E] border border-[#102447] hover:border-[#1D5BD8]/60 rounded-xl text-sm text-slate-200 transition-colors group shadow-xs"
            >
              <span className="truncate max-w-[220px]">{page.title}</span>
              <Arrow className="w-3.5 h-3.5 text-[#60A5FA] group-hover:translate-x-0.5 transition-transform shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
