'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Language, TranslationData } from '@/lib/translations';
import { Globe, Menu, X, ShieldCheck, Mail } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange?: (newLang: Language) => void;
  t: TranslationData;
  onOpenContact: () => void;
}

export default function Navbar({ lang, onLanguageChange, t, onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (newLang: Language) => {
    if (onLanguageChange) {
      onLanguageChange(newLang);
    }
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && ['ku', 'ar', 'en'].includes(segments[0])) {
      segments.shift();
    }
    const newPath = `/${newLang}${segments.length ? '/' + segments.join('/') : ''}`;
    router.push(newPath);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs" id="corporate-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand & Sovereign Parent Mark */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0">
            <Link href={`/${lang}`} className="flex items-center gap-2.5 sm:gap-3 group min-w-0" id="brand-logo-link">
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-lg md:text-xl tracking-wider shadow-sm group-hover:bg-blue-900 transition-colors border border-slate-800 shrink-0">
                IDG
              </div>
              <div className="flex flex-col max-w-[200px] sm:max-w-[240px] md:max-w-none min-w-0">
                <span className="font-extrabold text-slate-900 text-sm md:text-base leading-tight tracking-tight whitespace-nowrap truncate">
                  {lang === 'ku' ? 'دەروازەی دیجیتاڵیی عێراق' : lang === 'ar' ? 'بوابة العراق الرقمية' : 'Iraq Digital Gateway'}
                </span>
                <span className="hidden sm:flex items-center gap-1 text-[10px] font-medium text-slate-500 whitespace-nowrap truncate">
                  <ShieldCheck className="w-3 h-3 text-blue-700 inline shrink-0" />
                  <span className="truncate">{t.parentBadge}</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-[13px] xl:text-sm font-medium text-slate-700 shrink-0" id="desktop-nav-menu">
            <Link href={`/${lang}`} className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600 whitespace-nowrap" id="nav-link-home">
              {t.nav.home}
            </Link>
            <Link href={`/${lang}/about`} className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600 whitespace-nowrap" id="nav-link-about">
              {t.nav.about}
            </Link>
            <Link href={`/${lang}/portfolio`} className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600 whitespace-nowrap" id="nav-link-portfolio">
              {t.nav.portfolio}
            </Link>
            <Link href={`/${lang}/governance`} className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600 whitespace-nowrap" id="nav-link-governance">
              {t.nav.governance}
            </Link>
            <Link href={`/${lang}/stakeholders`} className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600 whitespace-nowrap" id="nav-link-stakeholders">
              {t.nav.stakeholders}
            </Link>
            <Link href={`/${lang}/vision`} className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600 whitespace-nowrap" id="nav-link-vision">
              {t.nav.vision}
            </Link>
            <Link href={`/${lang}/careers`} className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600 whitespace-nowrap" id="nav-link-careers">
              {t.nav.careers}
            </Link>
            <Link href={`/${lang}/faq`} className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600 whitespace-nowrap" id="nav-link-faq">
              {t.nav.faq}
            </Link>
            <Link href={`/${lang}/contact`} className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600 whitespace-nowrap" id="nav-link-contact-scroll">
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right Actions: Language Switcher & Contact Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Language Selector (Kurdish default, Arabic & English available) */}
            <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200 shadow-2xs" id="language-switcher-group">
              <span className="text-slate-400 px-1.5 hidden sm:inline" title="زمان / اللغة / Language">
                <Globe className="w-3.5 h-3.5" />
              </span>
              <button
                onClick={() => handleLanguageChange('ku')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  lang === 'ku'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="کوردی (سۆرانی) - زمانی سەرەکی"
                id="btn-lang-ku"
              >
                کوردی
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  lang === 'ar'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="العربية - لغة ثانوية"
                id="btn-lang-ar"
              >
                العربية
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  lang === 'en'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="English - Secondary Option"
                id="btn-lang-en"
              >
                EN
              </button>
            </div>

            {/* Official Contact CTA */}
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold text-xs sm:text-sm py-2 px-4 rounded-xl transition-colors shadow-xs"
              id="btn-header-contact"
            >
              <Mail className="w-4 h-4" />
              <span>{t.nav.contact}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation"
              id="btn-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-4" id="mobile-nav-panel">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-blue-700" />
              <span>{lang === 'ku' ? 'زمان' : lang === 'ar' ? 'اللغة' : 'Language'}</span>
            </span>
            <div className="flex items-center bg-slate-100 rounded-lg p-1 border border-slate-200">
              <button
                onClick={() => handleLanguageChange('ku')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  lang === 'ku' ? 'bg-slate-900 text-white' : 'text-slate-600'
                }`}
              >
                کوردی
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  lang === 'ar' ? 'bg-slate-900 text-white' : 'text-slate-600'
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  lang === 'en' ? 'bg-slate-900 text-white' : 'text-slate-600'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-1 text-sm font-medium text-slate-700">
            <Link
              href={`/${lang}`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-home"
            >
              {t.nav.home}
            </Link>
            <Link
              href={`/${lang}/about`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-about"
            >
              {t.nav.about}
            </Link>
            <Link
              href={`/${lang}/portfolio`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-portfolio"
            >
              {t.nav.portfolio}
            </Link>
            <Link
              href={`/${lang}/governance`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-governance"
            >
              {t.nav.governance}
            </Link>
            <Link
              href={`/${lang}/stakeholders`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-stakeholders"
            >
              {t.nav.stakeholders}
            </Link>
            <Link
              href={`/${lang}/vision`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-vision"
            >
              {t.nav.vision}
            </Link>
            <Link
              href={`/${lang}/careers`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-careers"
            >
              {t.nav.careers}
            </Link>
            <Link
              href={`/${lang}/faq`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition font-medium text-blue-700"
              id="mobile-link-faq"
            >
              {t.nav.faq}
            </Link>
            <Link
              href={`/${lang}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-contact-scroll"
            >
              {t.nav.contact}
            </Link>
          </nav>

          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-sm"
              id="mobile-btn-contact"
            >
              <Mail className="w-4 h-4" />
              <span>{t.nav.contact}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
