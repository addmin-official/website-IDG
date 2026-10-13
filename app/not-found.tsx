'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Compass,
  Home,
  Mail,
  Search,
  ArrowRight,
  ArrowLeft,
  Briefcase,
  Building2,
  ShieldCheck,
  FileText,
  Users,
} from 'lucide-react';

type SupportedLocale = 'ku' | 'ar' | 'en';

interface Destination {
  id: string;
  href: string;
  keywords: string[];
  title: Record<SupportedLocale, string>;
  desc: Record<SupportedLocale, string>;
  icon: React.ComponentType<{ className?: string }>;
}

const DESTINATIONS: Destination[] = [
  {
    id: 'home',
    href: '',
    keywords: ['home', 'main', 'سەرەکی', 'رئيسية', 'مالپەڕ', 'idg'],
    title: {
      ku: 'پەڕەی سەرەکی',
      ar: 'الصفحة الرئيسية',
      en: 'Home Page',
    },
    desc: {
      ku: 'دەروازەی دیجیتاڵیی عێراق و ناساندنی گشتی',
      ar: 'بوابة العراق الرقمية والنظرة العامة',
      en: 'Iraq Digital Gateway sovereign overview',
    },
    icon: Home,
  },
  {
    id: 'portfolio',
    href: '/portfolio',
    keywords: ['portfolio', 'companies', 'پۆرتفۆلیۆ', 'کۆمپانیا', 'شركات', 'محفظة'],
    title: {
      ku: 'پۆرتفۆلیۆی کۆمپانیاکان',
      ar: 'محفظة الشركات السيادية',
      en: 'Company Portfolio',
    },
    desc: {
      ku: 'کۆمپانیا و یەکە تەکنەلۆژییە سەروەرییەکانی IDG',
      ar: 'الشركات والوحدات التقنية التابعة للمجموعة',
      en: 'Sovereign digital entities and technology subsidiaries',
    },
    icon: Building2,
  },
  {
    id: 'about',
    href: '/about',
    keywords: ['about', 'دەربارە', 'من نحن', 'info', 'کێن'],
    title: {
      ku: 'دەربارەی IDG',
      ar: 'عن بوابة العراق',
      en: 'About IDG',
    },
    desc: {
      ku: 'مێژوو، ئەرک و ستراتیژی سەروەری دیجیتاڵی',
      ar: 'التاريخ، المهمة، واستراتيجية السيادة الرقمية',
      en: 'History, mission, and national digital sovereignty',
    },
    icon: Users,
  },
  {
    id: 'governance',
    href: '/governance',
    keywords: ['governance', 'compliance', 'حوکمڕانی', 'شفافية', 'حوكمة', 'یاسا'],
    title: {
      ku: 'حوکمڕانی و پابەندبوون',
      ar: 'الحوكمة والامتثال',
      en: 'Governance & Compliance',
    },
    desc: {
      ku: 'ستانداردە نێودەوڵەتییەکان و چوارچێوەی یاسایی',
      ar: 'المعايير الدولية وأطر الحوكمة الصارمة',
      en: 'International standards and sovereign compliance framework',
    },
    icon: ShieldCheck,
  },
  {
    id: 'vision',
    href: '/vision',
    keywords: ['vision', '2035', 'دیدگا', 'رؤية', 'ستراتیژ'],
    title: {
      ku: 'دیدگای ٢٠٣٥',
      ar: 'رؤية 2035',
      en: 'Vision 2035',
    },
    desc: {
      ku: 'نەخشەڕێگای ئابووری دیجیتاڵی لە عێراق',
      ar: 'خارطة طريق الاقتصاد الرقمي والابتكار السيادي',
      en: 'The national roadmap for Iraq digital economy',
    },
    icon: FileText,
  },
  {
    id: 'careers',
    href: '/careers',
    keywords: ['careers', 'jobs', 'کار', 'وظائف', 'دامەزراندن', 'هەلی کار'],
    title: {
      ku: 'هەلی کار',
      ar: 'الوظائف والفرص',
      en: 'Careers & Talent',
    },
    desc: {
      ku: 'پەیوەندی بکە بە گەورەترین تیمی تەکنەلۆژیی نیشتمانی',
      ar: 'انضم إلى نخبة الكفاءات التكنولوجية في العراق',
      en: 'Join the premier national technology enterprise',
    },
    icon: Briefcase,
  },
  {
    id: 'contact',
    href: '/contact',
    keywords: ['contact', 'پەیوەندی', 'اتصال', 'تواصل', 'ئیمەیڵ', 'email'],
    title: {
      ku: 'پەیوەندی و پشتگیری',
      ar: 'التواصل والدعم',
      en: 'Contact & Support',
    },
    desc: {
      ku: 'پەیوەندی لەگەڵ پەیوەندییە حکومی و نێودەوڵەتییەکان',
      ar: 'تواصل مع العلاقات المؤسسية والوفود الرسمية',
      en: 'Institutional partnerships and sovereign inquiries',
    },
    icon: Mail,
  },
  {
    id: 'help',
    href: '/help',
    keywords: ['help', 'docs', 'هاوکاری', 'مساعدة', 'ڕێبەر', 'فەرهەنگ', 'دلیل'],
    title: {
      ku: 'ناوەندی هاوکاری و بەڵگەنامەکان',
      ar: 'مركز المساعدة والوثائق',
      en: 'Help Center & Docs',
    },
    desc: {
      ku: 'فەرهەنگی زاراوەکان، ڕێبەرنامەکان، و فێرکارییە تەکنیکییەکان',
      ar: 'قاموس المصطلحات، الأدلة الفنية، والشروحات المرئية',
      en: 'Glossary of terms, downloadable whitepapers, and guides',
    },
    icon: Compass,
  },
];

const UI_COPY = {
  ku: {
    code: '٤٠٤',
    badge: 'پەڕەکە نەدۆزرایەوە',
    heading: 'ئەم بەستەرە بوونی نییە یان گوێزراوەتەوە',
    subheading:
      'سیستەمی ناوەندی دەروازەی دیجیتاڵیی عێراق ناتوانێت ئەم ناونیشانە بدۆزێتەوە. بەدوای لاپەڕەی دیاریکراودا بگەڕێ یان سەردانی بەشە سەرەکییەکان بکە:',
    searchPlaceholder: 'بگەڕێ بەدوای بەشەکاندا (پۆرتفۆلیۆ، دیدگا، هەلی کار...)',
    didYouMean: 'پێشنیارکراوەکان بۆ سەردانیکردن:',
    noResults: 'هیچ لاپەڕەیەک نەدۆزرایەوە بەم ناوە. دەتوانیت بگەڕێیتەوە بۆ پەڕەی سەرەکی.',
    returnHome: 'گەڕانەوە بۆ پەڕەی سەرەکی',
    contactSupport: 'پەیوەندی بە تیمی پشتگیری',
  },
  ar: {
    code: '٤٠٤',
    badge: 'الصفحة غير موجودة',
    heading: 'هذا الرابط غير موجود أو تم نقله',
    subheading:
      'لم يتمكن النظام المركزي لبوابة العراق الرقمية من العثور على هذا المسار. يمكنك البحث عن وجهتك أو التصفح عبر الأقسام المقترحة:',
    searchPlaceholder: 'ابحث عن قسم (محفظة، رؤية، وظائف، حوكمة...)',
    didYouMean: 'أقسام مقترحة قد تهمك:',
    noResults: 'لم يتم العثور على نتائج تطابق بحثك. يرجى العودة للرئيسية.',
    returnHome: 'العودة للصفحة الرئيسية',
    contactSupport: 'التواصل مع فريق الدعم',
  },
  en: {
    code: '404',
    badge: 'Page Not Found',
    heading: 'The requested resource could not be found',
    subheading:
      'The sovereign digital routing registry cannot locate this page. It may have moved or been updated. Search below or use our fast navigation:',
    searchPlaceholder: 'Search destinations (portfolio, vision, careers, about...)',
    didYouMean: 'Suggested destinations:',
    noResults: 'No destinations matched your query. You can return home below.',
    returnHome: 'Return to Homepage',
    contactSupport: 'Contact Technical Support',
  },
};

export default function NotFound() {
  const [locale, setLocale] = useState<SupportedLocale>('ku');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.startsWith('/ar')) {
        setLocale('ar');
      } else if (path.startsWith('/en')) {
        setLocale('en');
      } else {
        setLocale('ku');
      }
    }
  }, []);

  const t = UI_COPY[locale];
  const isRtl = locale !== 'en';
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const filteredDestinations = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return DESTINATIONS;

    return DESTINATIONS.filter((item) => {
      const matchKeywords = item.keywords.some((k) => k.toLowerCase().includes(query));
      const matchTitle = Object.values(item.title).some((v) => v.toLowerCase().includes(query));
      const matchDesc = Object.values(item.desc).some((v) => v.toLowerCase().includes(query));
      return matchKeywords || matchTitle || matchDesc;
    });
  }, [searchQuery]);

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#060D1A] text-slate-100 flex flex-col justify-between selection:bg-[#1D5BD8] selection:text-white"
    >
      {/* Top Bar with Language Selector */}
      <header className="border-b border-[#102447] bg-[#060D1A]/80 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1D5BD8] to-[#18B7B0] flex items-center justify-center font-black text-white text-xs shadow-md">
            IDG
          </div>
          <span className="text-xs font-bold tracking-wider text-slate-300 uppercase">
            Iraq Digital Gateway
          </span>
        </div>

        <div className="flex items-center gap-1 bg-[#0B172E] border border-[#102447] p-1 rounded-lg">
          {(['ku', 'ar', 'en'] as const).map((langKey) => (
            <button
              key={langKey}
              onClick={() => setLocale(langKey)}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                locale === langKey
                  ? 'bg-[#1D5BD8] text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {langKey === 'ku' ? 'کوردی' : langKey === 'ar' ? 'العربية' : 'English'}
            </button>
          ))}
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12 flex flex-col justify-center">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <div className="text-7xl sm:text-9xl font-black tracking-tight mb-4 bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent select-none">
            {t.code}
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            {t.heading}
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-400 leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl w-full mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 ps-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="input-base rounded-xl ps-10 pe-4 py-3"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 end-0 pe-3 flex items-center text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Destinations / Search Results */}
        <div className="mb-10">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4 text-start">
            {searchQuery ? `ئەنجامەکانی گەڕان (${filteredDestinations.length})` : t.didYouMean}
          </div>

          {filteredDestinations.length === 0 ? (
            <div className="bg-[#0B172E] border border-[#102447] rounded-xl p-6 text-center text-slate-400 text-sm">
              {t.noResults}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredDestinations.map((item) => {
                const Icon = item.icon;
                const path = `/${locale}${item.href}`;
                return (
                  <Link
                    key={item.id}
                    href={path}
                    className="group bg-[#0B172E] hover:bg-[#102447] border border-[#102447] hover:border-[#1D5BD8]/50 rounded-xl p-4 transition-all flex items-start gap-3.5 text-start"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#060D1A] border border-[#102447] group-hover:border-[#1D5BD8]/40 flex items-center justify-center shrink-0 text-[#60A5FA] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-sm font-bold text-white group-hover:text-[#60A5FA] transition-colors">
                          {item.title[locale]}
                        </span>
                        <ArrowIcon className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#60A5FA] group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-all shrink-0" />
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                        {item.desc[locale]}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href={`/${locale}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1D5BD8] hover:bg-blue-600 text-white text-sm font-bold rounded-xl transition-colors shadow-lg shadow-blue-900/20"
          >
            <Home className="w-4 h-4" />
            <span>{t.returnHome}</span>
          </Link>

          <Link
            href={`/${locale}/contact`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0B172E] hover:bg-[#102447] text-slate-300 hover:text-white text-sm font-bold rounded-xl border border-[#102447] transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>{t.contactSupport}</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#102447] px-6 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Iraq Digital Gateway (IDG). All rights reserved.
      </footer>
    </div>
  );
}
