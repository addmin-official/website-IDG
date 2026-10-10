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

  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === `/${lang}` || pathname === `/${lang}/`;
    return pathname.startsWith(href);
  };

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
    <header className="sticky top-0 z-40 bg-[#0B172E]/95 backdrop-blur-md border-b border-[#102447] shadow-xs" id="corporate-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand & Sovereign Parent Mark */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 shrink-0">
            <Link href={`/${lang}`} className="flex items-center gap-2.5 sm:gap-3 group min-w-0" id="brand-logo-link">
              <div className="w-9 h-9 md:w-11 md:h-11 rounded-xl bg-[#1D5BD8] text-white flex items-center justify-center font-extrabold text-lg md:text-xl tracking-wider shadow-sm group-hover:bg-[#193B73] transition-colors border border-[#193B73] ring-1 ring-[#1D5BD8]/40 shrink-0">
                IDG
              </div>
              <div className="flex flex-col max-w-[200px] sm:max-w-[240px] md:max-w-none min-w-0">
                <span className="font-extrabold text-white text-sm md:text-base leading-tight tracking-tight whitespace-nowrap truncate">
                  {lang === 'ku' ? 'دەروازەی دیجیتاڵیی عێراق' : lang === 'ar' ? 'بوابة العراق الرقمية' : 'Iraq Digital Gateway'}
                </span>
                <span className="hidden sm:flex items-center gap-1 text-[10px] font-medium text-slate-400 whitespace-nowrap truncate">
                  <ShieldCheck className="w-3 h-3 text-[#60A5FA] inline shrink-0" />
                  <span className="truncate">{t.parentBadge}</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-3 xl:gap-5 text-[13px] xl:text-sm font-medium text-slate-300 shrink-0" id="desktop-nav-menu">
            <Link
              href={`/${lang}`}
              aria-current={isActive(`/${lang}`) ? 'page' : undefined}
              className={`transition-colors py-2 px-1 border-b-2 whitespace-nowrap ${
                isActive(`/${lang}`)
                  ? 'text-white border-[#1D5BD8]'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-[#1D5BD8]'
              }`}
              id="nav-link-home"
            >
              {t.nav.home}
            </Link>
            <Link
              href={`/${lang}/about`}
              aria-current={isActive(`/${lang}/about`) ? 'page' : undefined}
              className={`transition-colors py-2 px-1 border-b-2 whitespace-nowrap ${
                isActive(`/${lang}/about`)
                  ? 'text-white border-[#1D5BD8]'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-[#1D5BD8]'
              }`}
              id="nav-link-about"
            >
              {t.nav.about}
            </Link>
            <Link
              href={`/${lang}/portfolio`}
              aria-current={isActive(`/${lang}/portfolio`) ? 'page' : undefined}
              className={`transition-colors py-2 px-1 border-b-2 whitespace-nowrap ${
                isActive(`/${lang}/portfolio`)
                  ? 'text-white border-[#1D5BD8]'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-[#1D5BD8]'
              }`}
              id="nav-link-portfolio"
            >
              {t.nav.portfolio}
            </Link>
            <Link
              href={`/${lang}/governance`}
              aria-current={isActive(`/${lang}/governance`) ? 'page' : undefined}
              className={`transition-colors py-2 px-1 border-b-2 whitespace-nowrap ${
                isActive(`/${lang}/governance`)
                  ? 'text-white border-[#1D5BD8]'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-[#1D5BD8]'
              }`}
              id="nav-link-governance"
            >
              {t.nav.governance}
            </Link>
            <Link
              href={`/${lang}/stakeholders`}
              aria-current={isActive(`/${lang}/stakeholders`) ? 'page' : undefined}
              className={`transition-colors py-2 px-1 border-b-2 whitespace-nowrap ${
                isActive(`/${lang}/stakeholders`)
                  ? 'text-white border-[#1D5BD8]'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-[#1D5BD8]'
              }`}
              id="nav-link-stakeholders"
            >
              {t.nav.stakeholders}
            </Link>
            <Link
              href={`/${lang}/vision`}
              aria-current={isActive(`/${lang}/vision`) ? 'page' : undefined}
              className={`transition-colors py-2 px-1 border-b-2 whitespace-nowrap ${
                isActive(`/${lang}/vision`)
                  ? 'text-white border-[#1D5BD8]'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-[#1D5BD8]'
              }`}
              id="nav-link-vision"
            >
              {t.nav.vision}
            </Link>
            <Link
              href={`/${lang}/careers`}
              aria-current={isActive(`/${lang}/careers`) ? 'page' : undefined}
              className={`transition-colors py-2 px-1 border-b-2 whitespace-nowrap ${
                isActive(`/${lang}/careers`)
                  ? 'text-white border-[#1D5BD8]'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-[#1D5BD8]'
              }`}
              id="nav-link-careers"
            >
              {t.nav.careers}
            </Link>
            <Link
              href={`/${lang}/faq`}
              aria-current={isActive(`/${lang}/faq`) ? 'page' : undefined}
              className={`transition-colors py-2 px-1 border-b-2 whitespace-nowrap ${
                isActive(`/${lang}/faq`)
                  ? 'text-white border-[#1D5BD8]'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-[#1D5BD8]'
              }`}
              id="nav-link-faq"
            >
              {t.nav.faq}
            </Link>
            <Link
              href={`/${lang}/contact`}
              aria-current={isActive(`/${lang}/contact`) ? 'page' : undefined}
              className={`transition-colors py-2 px-1 border-b-2 whitespace-nowrap ${
                isActive(`/${lang}/contact`)
                  ? 'text-white border-[#1D5BD8]'
                  : 'text-slate-300 border-transparent hover:text-white hover:border-[#1D5BD8]'
              }`}
              id="nav-link-contact-scroll"
            >
              {t.nav.contact}
            </Link>
          </nav>

          {/* Right Actions: Language Switcher & Contact Button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Language Selector (Kurdish default, Arabic & English available) */}
            <div className="flex items-center bg-[#102447]/60 rounded-xl p-1 border border-[#102447] shadow-2xs" id="language-switcher-group">
              <span className="text-slate-400 px-1.5 hidden sm:inline" title="زمان / اللغة / Language">
                <Globe className="w-3.5 h-3.5" />
              </span>
              <button
                onClick={() => handleLanguageChange('ku')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                  lang === 'ku'
                    ? 'bg-[#1D5BD8] text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
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
                    ? 'bg-[#1D5BD8] text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
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
                    ? 'bg-[#1D5BD8] text-white shadow-xs'
                    : 'text-slate-300 hover:text-white'
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
              className="hidden sm:inline-flex items-center gap-2 bg-[#1D5BD8] hover:bg-[#193B73] text-white font-semibold text-xs sm:text-sm py-2 px-4 rounded-xl transition-colors shadow-xs border border-[#1D5BD8]/40"
              id="btn-header-contact"
            >
              <Mail className="w-4 h-4" />
              <span>{t.nav.contact}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-200 hover:bg-[#102447] transition-colors"
              aria-label="Toggle Navigation"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              id="btn-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0B172E] border-b border-[#102447] px-4 pt-3 pb-6 space-y-4 max-w-full overflow-x-hidden" id="mobile-nav-panel">
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-3 border-b border-[#102447]">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-[#60A5FA]" />
              <span>{lang === 'ku' ? 'زمان' : lang === 'ar' ? 'اللغة' : 'Language'}</span>
            </span>
            <div className="flex items-center bg-[#102447]/60 rounded-lg p-1 border border-[#102447]">
              <button
                onClick={() => handleLanguageChange('ku')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  lang === 'ku' ? 'bg-[#1D5BD8] text-white' : 'text-slate-300'
                }`}
              >
                کوردی
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  lang === 'ar' ? 'bg-[#1D5BD8] text-white' : 'text-slate-300'
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  lang === 'en' ? 'bg-[#1D5BD8] text-white' : 'text-slate-300'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-1 text-sm font-medium text-slate-200">
            <Link
              href={`/${lang}`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#102447] transition"
              id="mobile-link-home"
            >
              {t.nav.home}
            </Link>
            <Link
              href={`/${lang}/about`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#102447] transition"
              id="mobile-link-about"
            >
              {t.nav.about}
            </Link>
            <Link
              href={`/${lang}/portfolio`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#102447] transition"
              id="mobile-link-portfolio"
            >
              {t.nav.portfolio}
            </Link>
            <Link
              href={`/${lang}/governance`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#102447] transition"
              id="mobile-link-governance"
            >
              {t.nav.governance}
            </Link>
            <Link
              href={`/${lang}/stakeholders`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#102447] transition"
              id="mobile-link-stakeholders"
            >
              {t.nav.stakeholders}
            </Link>
            <Link
              href={`/${lang}/vision`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#102447] transition"
              id="mobile-link-vision"
            >
              {t.nav.vision}
            </Link>
            <Link
              href={`/${lang}/careers`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#102447] transition"
              id="mobile-link-careers"
            >
              {t.nav.careers}
            </Link>
            <Link
              href={`/${lang}/faq`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#102447] transition"
              id="mobile-link-faq"
            >
              {t.nav.faq}
            </Link>
            <Link
              href={`/${lang}/contact`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#102447] transition"
              id="mobile-link-contact-scroll"
            >
              {t.nav.contact}
            </Link>
          </nav>

          <div className="pt-2 border-t border-[#102447]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#1D5BD8] hover:bg-[#193B73] text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-sm border border-[#1D5BD8]/40"
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
