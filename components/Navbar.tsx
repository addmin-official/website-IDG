'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Language, TranslationData } from '@/lib/translations';
import { Globe, Menu, X, ShieldCheck, Mail, ChevronDown } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange?: (newLang: Language) => void;
  t: TranslationData;
  onOpenContact: () => void;
}

const NAV_DROPDOWN_LABELS: Record<
  Language,
  {
    about: string;
    companyStory: string;
    vision2035: string;
    stakeholders: string;
    portfolio: string;
    allProducts: string;
    governance: string;
  }
> = {
  ku: {
    about: 'دەربارە',
    companyStory: 'چیرۆکی کۆمپانیا',
    vision2035: 'دیدگای ٢٠٣٥',
    stakeholders: 'لایەنە ئامانجدارەکان',
    portfolio: 'پۆرتفۆلیۆ',
    allProducts: 'هەموو بەرهەمەکان',
    governance: 'حوکمڕانی',
  },
  ar: {
    about: 'من نحن',
    companyStory: 'قصة الشركة',
    vision2035: 'رؤية ٢٠٣٥',
    stakeholders: 'الجهات المستهدفة',
    portfolio: 'المحفظة',
    allProducts: 'جميع المنتجات',
    governance: 'الحوكمة',
  },
  en: {
    about: 'About',
    companyStory: 'Company Story',
    vision2035: 'Vision 2035',
    stakeholders: 'Target Stakeholders',
    portfolio: 'Portfolio',
    allProducts: 'All Products',
    governance: 'Governance',
  },
};

export default function Navbar({ lang, onLanguageChange, t, onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<'about' | 'portfolio' | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  const labels = NAV_DROPDOWN_LABELS[lang] || NAV_DROPDOWN_LABELS.ku;

  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === `/${lang}` || pathname === `/${lang}/`;
    return pathname.startsWith(href);
  };

  const isAboutActive =
    pathname === `/${lang}/about` ||
    pathname.startsWith(`/${lang}/about/`) ||
    pathname === `/${lang}/vision` ||
    pathname.startsWith(`/${lang}/vision/`) ||
    pathname === `/${lang}/stakeholders` ||
    pathname.startsWith(`/${lang}/stakeholders/`);

  const isPortfolioActive =
    pathname === `/${lang}/portfolio` || pathname.startsWith(`/${lang}/portfolio/`);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Close dropdown and mobile drawer on route transition
  useEffect(() => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  }, [pathname]);

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
                  <ShieldCheck className="w-3.5 h-3.5 text-[#60A5FA] inline shrink-0" />
                  <span className="truncate">{t.parentBadge}</span>
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links — 5 Top-Level Items (with 2 Dropdowns) */}
          <nav
            ref={navRef}
            className="hidden xl:flex items-center gap-4 xl:gap-6 text-[13px] xl:text-sm font-medium text-slate-300 shrink-0"
            id="desktop-nav-menu"
          >
            {/* [1] Home — direct link */}
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

            {/* [2] About — DROPDOWN */}
            <div className="relative group">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
                aria-expanded={openDropdown === 'about'}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1.5 transition-colors py-2 px-1 border-b-2 whitespace-nowrap cursor-pointer ${
                  isAboutActive
                    ? 'text-white border-[#1D5BD8]'
                    : 'text-slate-300 border-transparent hover:text-white hover:border-[#1D5BD8]'
                }`}
                id="nav-dropdown-about"
              >
                <span>{labels.about}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                    openDropdown === 'about' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                role="menu"
                className={`absolute start-0 top-full pt-1.5 z-50 min-w-[220px] transition-all duration-150 ${
                  openDropdown === 'about' ? 'block' : 'hidden group-hover:block'
                }`}
              >
                <div className="bg-[#0B172E] border border-[#102447] rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-2 backdrop-blur-md">
                  <Link
                    href={`/${lang}/about`}
                    role="menuitem"
                    onClick={() => setOpenDropdown(null)}
                    className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                      pathname === `/${lang}/about`
                        ? 'text-[#60A5FA] border-s-2 border-[#1D5BD8] bg-[#102447]/50 font-medium'
                        : 'text-slate-300 hover:bg-[#102447] hover:text-white'
                    }`}
                    id="dropdown-link-company-story"
                  >
                    {labels.companyStory}
                  </Link>
                  <Link
                    href={`/${lang}/vision`}
                    role="menuitem"
                    onClick={() => setOpenDropdown(null)}
                    className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                      pathname === `/${lang}/vision`
                        ? 'text-[#60A5FA] border-s-2 border-[#1D5BD8] bg-[#102447]/50 font-medium'
                        : 'text-slate-300 hover:bg-[#102447] hover:text-white'
                    }`}
                    id="dropdown-link-vision"
                  >
                    {labels.vision2035}
                  </Link>
                  <Link
                    href={`/${lang}/stakeholders`}
                    role="menuitem"
                    onClick={() => setOpenDropdown(null)}
                    className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                      pathname === `/${lang}/stakeholders`
                        ? 'text-[#60A5FA] border-s-2 border-[#1D5BD8] bg-[#102447]/50 font-medium'
                        : 'text-slate-300 hover:bg-[#102447] hover:text-white'
                    }`}
                    id="dropdown-link-stakeholders"
                  >
                    {labels.stakeholders}
                  </Link>
                </div>
              </div>
            </div>

            {/* [3] Portfolio — DROPDOWN */}
            <div className="relative group">
              <button
                type="button"
                onClick={() => setOpenDropdown(openDropdown === 'portfolio' ? null : 'portfolio')}
                aria-expanded={openDropdown === 'portfolio'}
                aria-haspopup="true"
                className={`inline-flex items-center gap-1.5 transition-colors py-2 px-1 border-b-2 whitespace-nowrap cursor-pointer ${
                  isPortfolioActive
                    ? 'text-white border-[#1D5BD8]'
                    : 'text-slate-300 border-transparent hover:text-white hover:border-[#1D5BD8]'
                }`}
                id="nav-dropdown-portfolio"
              >
                <span>{labels.portfolio}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                    openDropdown === 'portfolio' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                role="menu"
                className={`absolute start-0 top-full pt-1.5 z-50 min-w-[220px] transition-all duration-150 ${
                  openDropdown === 'portfolio' ? 'block' : 'hidden group-hover:block'
                }`}
              >
                <div className="bg-[#0B172E] border border-[#102447] rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-2 backdrop-blur-md">
                  <Link
                    href={`/${lang}/portfolio`}
                    role="menuitem"
                    onClick={() => setOpenDropdown(null)}
                    className={`block px-4 py-2.5 text-sm transition-colors duration-150 ${
                      pathname === `/${lang}/portfolio`
                        ? 'text-[#60A5FA] border-s-2 border-[#1D5BD8] bg-[#102447]/50 font-medium'
                        : 'text-slate-300 hover:bg-[#102447] hover:text-white'
                    }`}
                    id="dropdown-link-all-products"
                  >
                    {labels.allProducts}
                  </Link>
                  <div className="h-px bg-[#102447] my-1 mx-2" />
                  <Link
                    href={`/${lang}/portfolio#ai-gate`}
                    role="menuitem"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-[#102447] transition-colors"
                    id="dropdown-link-ai-gate"
                  >
                    AI Gate Iraq
                  </Link>
                  <Link
                    href={`/${lang}/portfolio#zana`}
                    role="menuitem"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-[#102447] transition-colors"
                    id="dropdown-link-zana"
                  >
                    ZaNa Academy
                  </Link>
                  <Link
                    href={`/${lang}/portfolio#greenbelt`}
                    role="menuitem"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-[#102447] transition-colors"
                    id="dropdown-link-greenbelt"
                  >
                    Green Belt
                  </Link>
                  <Link
                    href={`/${lang}/portfolio#nsw`}
                    role="menuitem"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-4 py-2 text-xs text-slate-400 hover:text-white hover:bg-[#102447] transition-colors"
                    id="dropdown-link-nsw"
                  >
                    Iraq NSW
                  </Link>
                </div>
              </div>
            </div>

            {/* [4] Governance — direct link */}
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
              {labels.governance}
            </Link>

            {/* [5] FAQ — direct link */}
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
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
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
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
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
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
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
              className="hidden sm:inline-flex items-center gap-2 bg-[#1D5BD8] hover:bg-[#193B73] text-white font-semibold text-xs sm:text-sm py-2 px-4 rounded-xl transition-colors shadow-xs border border-[#1D5BD8]/40 cursor-pointer"
              id="btn-header-contact"
            >
              <Mail className="w-4 h-4" />
              <span>{t.nav.contact}</span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-200 hover:bg-[#102447] transition-colors cursor-pointer"
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

      {/* Mobile Drawer — Keeps all 9 flat links for simple vertical mobile navigation */}
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
                className={`px-3 py-1 text-xs font-bold rounded-md cursor-pointer ${
                  lang === 'ku' ? 'bg-[#1D5BD8] text-white' : 'text-slate-300'
                }`}
              >
                کوردی
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                className={`px-3 py-1 text-xs font-bold rounded-md cursor-pointer ${
                  lang === 'ar' ? 'bg-[#1D5BD8] text-white' : 'text-slate-300'
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className={`px-3 py-1 text-xs font-bold rounded-md cursor-pointer ${
                  lang === 'en' ? 'bg-[#1D5BD8] text-white' : 'text-slate-300'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Flat Links: 1. سەرەکی 2. دەربارەی ئێمە 3. دیدگای ٢٠٣٥ 4. لایەنە ئامانجدارەکان 5. پۆرتفۆلیۆ 6. حوکمڕانی 7. هەلی کار 8. پرسیارە باوەکان 9. پەیوەندی */}
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
              href={`/${lang}/vision`}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-[#102447] transition"
              id="mobile-link-vision"
            >
              {t.nav.vision}
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
              className="w-full flex items-center justify-center gap-2 bg-[#1D5BD8] hover:bg-[#193B73] text-white py-3 px-4 rounded-xl font-semibold text-sm shadow-sm border border-[#1D5BD8]/40 cursor-pointer"
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
