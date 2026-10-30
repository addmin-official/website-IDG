'use client';
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Eye, Users, UserCheck, Briefcase, HelpCircle, FileText, Accessibility, BookOpen, Lightbulb, Newspaper, Layers, Cpu } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';

export default function NavbarMoreMenu() {
  const { lang, t } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const items = [
    { href: `/${lang}/products`, label: { ku: 'بەرهەمەکان', ar: 'المنتجات', en: 'Products' }[lang] || 'Products', icon: Cpu },
    { href: `/${lang}/services`, label: { ku: 'خزمەتگوزارییەکان', ar: 'الخدمات', en: 'Services' }[lang] || 'Services', icon: Layers },
    { href: `/${lang}/blog`, label: t.nav.blog, icon: BookOpen },
    { href: `/${lang}/insights`, label: t.nav.insights, icon: Lightbulb },
    { href: `/${lang}/news`, label: t.nav.news, icon: Newspaper },
    { href: `/${lang}/vision`, label: { ku: 'دیدگای ٢٠٣٥', ar: 'رؤية ٢٠٣٥', en: 'Vision 2035' }[lang] || 'Vision 2035', icon: Eye },
    { href: `/${lang}/stakeholders`, label: { ku: 'لایەنە ئامانجدارەکان', ar: 'الجهات المستهدفة', en: 'Stakeholders' }[lang] || 'Stakeholders', icon: Users },
    { href: `/${lang}/careers`, label: { ku: 'هەلی کار', ar: 'الوظائف', en: 'Careers' }[lang] || 'Careers', icon: Briefcase },
    { href: `/${lang}/team`, label: t?.nav?.team || ({ ku: 'تیمی ئێمە', ar: 'فريقنا', en: 'Our Team' }[lang] || 'Our Team'), icon: UserCheck },
    { href: `/${lang}/faq`, label: { ku: 'پرسیارە باوەکان', ar: 'الأسئلة الشائعة', en: 'FAQ' }[lang] || 'FAQ', icon: HelpCircle },
    { href: `/${lang}/help`, label: { ku: 'ناوەندی هاوکاری', ar: 'مركز المساعدة', en: 'Help Center' }[lang] || 'Help Center', icon: FileText },
    { href: `/${lang}/legal/accessibility`, label: { ku: 'دەستڕاگەیشتن', ar: 'إمكانية الوصول', en: 'Accessibility' }[lang] || 'Accessibility', icon: Accessibility },
  ];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
      >
        <span>
          {lang === 'ku' ? 'پەرەی زیاتر' : lang === 'ar' ? 'المزيد' : 'More'}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full start-0 mt-2 w-64 max-h-[80vh] overflow-y-auto bg-[#0B172E] border border-[#102447] rounded-xl shadow-2xl shadow-black/40 py-2 z-50">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-[#102447] transition-colors"
              >
                <Icon className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
