'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Mail } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';
import NavbarLanguageSwitcher from './NavbarLanguageSwitcher';
import NavbarMoreMenu from './NavbarMoreMenu';
import IDGLogo from './IDGLogo';

interface NavbarProps {
  lang?: string;
  onLanguageChange?: (newLang: any) => void;
  t?: any;
  onOpenContact?: () => void;
}

export default function Navbar(_props?: NavbarProps) {
  const { lang, t } = useLocale();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === `/${lang}`) return pathname === `/${lang}` || pathname === `/${lang}/`;
    return pathname.startsWith(href);
  };

  const primaryNav = [
    { href: `/${lang}`, label: { ku: 'سەرەکی', ar: 'الرئيسية', en: 'Home' } },
    { href: `/${lang}/about`, label: { ku: 'دەربارە', ar: 'من نحن', en: 'About' } },
    { href: `/${lang}/portfolio`, label: { ku: 'پۆرتفۆلیۆ', ar: 'المحفظة', en: 'Portfolio' } },
    { href: `/${lang}/governance`, label: { ku: 'حوکمڕانی', ar: 'الحوكمة', en: 'Governance' } },
  ];

  const mobileNavLinks = [
    ...primaryNav,
    { href: `/${lang}/vision`, label: { ku: 'دیدگای ٢٠٣٥', ar: 'رؤية ٢٠٣٥', en: 'Vision 2035' } },
    { href: `/${lang}/stakeholders`, label: { ku: 'لایەنە ئامانجدارەکان', ar: 'الجهات المستهدفة', en: 'Stakeholders' } },
    { href: `/${lang}/careers`, label: { ku: 'هەلی کار', ar: 'الوظائف', en: 'Careers' } },
    { href: `/${lang}/faq`, label: { ku: 'پرسیارە باوەکان', ar: 'الأسئلة الشائعة', en: 'FAQ' } },
    { href: `/${lang}/help`, label: { ku: 'ناوەندی هاوکاری', ar: 'مركز المساعدة', en: 'Help Center' } },
    { href: `/${lang}/contact`, label: { ku: 'پەیوەندی', ar: 'التواصل', en: 'Contact' } },
  ];

  return (
    <header
      className="sticky top-0 z-40 bg-[#060D1A]/95 backdrop-blur-md border-b border-[#102447]"
      id="corporate-header"
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">
          
          {/* BRAND SECTION */}
          <div className="flex items-center gap-3 min-w-0 shrink-0">
            <Link
              href={`/${lang}`}
              className="flex items-center gap-2.5 group min-w-0"
              id="brand-logo-link"
            >
              <IDGLogo variant="icon" size={40} />
              <div className="flex flex-col max-w-[140px] lg:max-w-[200px] min-w-0">
                <span className="font-extrabold text-white text-sm lg:text-base leading-tight tracking-tight whitespace-nowrap truncate">
                  {lang === 'ku' ? 'دەروازەی دیجیتاڵیی عێراق' :
                   lang === 'ar' ? 'بوابة العراق الرقمية' :
                   'Iraq Digital Gateway'}
                </span>
                <span className="hidden xl:inline text-[10px] font-medium text-slate-500 whitespace-nowrap truncate">
                  {t.parentBadge}
                </span>
              </div>
            </Link>
          </div>

          {/* DESKTOP NAV LINKS */}
          <nav
            className="hidden lg:flex items-center gap-1 flex-1 justify-center"
            id="desktop-nav-menu"
            aria-label="ناوەڕۆکی سەرەکی"
          >
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white hover:bg-[#102447]/50'
                }`}
              >
                {item.label[lang as keyof typeof item.label]}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 start-3 end-3 h-0.5 bg-[#D97706] rounded-full" />
                )}
              </Link>
            ))}
            <NavbarMoreMenu />
          </nav>

          {/* ACTIONS SECTION */}
          <div className="flex items-center gap-2 shrink-0">
            <NavbarLanguageSwitcher />

            <Link
              href={`/${lang}/contact`}
              className="hidden sm:inline-flex items-center gap-2 bg-[#1D5BD8] hover:bg-[#193B73] text-white font-bold text-xs lg:text-sm py-2 px-4 lg:px-5 rounded-lg transition-colors shadow-sm"
              id="btn-header-contact"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">
                {lang === 'ku' ? 'پەیوەندیی فەرمی' :
                 lang === 'ar' ? 'التواصل الرسمي' :
                 'Contact Us'}
              </span>
            </Link>

            {/* MOBILE HAMBURGER */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#102447] transition-colors"
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              id="btn-mobile-menu-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-[#060D1A] border-t border-[#102447] px-4 pt-4 pb-6 space-y-1 max-h-[calc(100vh-72px)] overflow-y-auto"
          id="mobile-nav-panel"
        >
          <nav className="flex flex-col space-y-1">
            {mobileNavLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-white bg-[#102447]'
                    : 'text-slate-300 hover:text-white hover:bg-[#102447]'
                }`}
              >
                {item.label[lang as keyof typeof item.label]}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
