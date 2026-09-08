'use client';

import React, { useState } from 'react';
import { Language, TranslationData } from '@/lib/translations';
import { Globe, Menu, X, ShieldCheck, Mail } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  t: TranslationData;
  onOpenContact: () => void;
}

export default function Navbar({ lang, onLanguageChange, t, onOpenContact }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs" id="corporate-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand & Sovereign Parent Mark */}
          <div className="flex items-center gap-3">
            <a href="#hero" className="flex items-center gap-3 group" id="brand-logo-link">
              <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center font-extrabold text-xl tracking-wider shadow-sm group-hover:bg-blue-900 transition-colors border border-slate-800">
                IDG
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-slate-900 text-base sm:text-lg leading-tight tracking-tight">
                  {lang === 'ku' ? 'دەروازەی دیجیتاڵیی عێراق' : lang === 'ar' ? 'بوابة العراق الرقمية' : 'Iraq Digital Gateway'}
                </span>
                <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-700 inline" />
                  {t.parentBadge}
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-slate-700" id="desktop-nav-menu">
            <a href="#hero" className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600" id="nav-link-home">
              {t.nav.home}
            </a>
            <a href="#about" className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600" id="nav-link-about">
              {t.nav.about}
            </a>
            <a href="#portfolio" className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600" id="nav-link-portfolio">
              {t.nav.portfolio}
            </a>
            <a href="#governance" className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600" id="nav-link-governance">
              {t.nav.governance}
            </a>
            <a href="#stakeholders" className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600" id="nav-link-stakeholders">
              {t.nav.stakeholders}
            </a>
            <a href="#vision" className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600" id="nav-link-vision">
              {t.nav.vision}
            </a>
            <a href="#careers" className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600" id="nav-link-careers">
              {t.nav.careers}
            </a>
            <a href="#contact" className="hover:text-blue-700 transition-colors py-2 px-1 border-b-2 border-transparent hover:border-blue-600" id="nav-link-contact-scroll">
              {t.nav.contact}
            </a>
          </nav>

          {/* Right Actions: Language Switcher & Contact Button */}
          <div className="flex items-center gap-3">
            
            {/* Language Selector (Kurdish default, Arabic & English available) */}
            <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200 shadow-2xs" id="language-switcher-group">
              <span className="text-slate-400 px-1.5 hidden sm:inline" title="زمان / اللغة / Language">
                <Globe className="w-3.5 h-3.5" />
              </span>
              <button
                onClick={() => onLanguageChange('ku')}
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
                onClick={() => onLanguageChange('ar')}
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
                onClick={() => onLanguageChange('en')}
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
                onClick={() => onLanguageChange('ku')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  lang === 'ku' ? 'bg-slate-900 text-white' : 'text-slate-600'
                }`}
              >
                کوردی
              </button>
              <button
                onClick={() => onLanguageChange('ar')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  lang === 'ar' ? 'bg-slate-900 text-white' : 'text-slate-600'
                }`}
              >
                العربية
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-3 py-1 text-xs font-bold rounded-md ${
                  lang === 'en' ? 'bg-slate-900 text-white' : 'text-slate-600'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          <nav className="flex flex-col space-y-1 text-sm font-medium text-slate-700">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-home"
            >
              {t.nav.home}
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-about"
            >
              {t.nav.about}
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-portfolio"
            >
              {t.nav.portfolio}
            </a>
            <a
              href="#governance"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-governance"
            >
              {t.nav.governance}
            </a>
            <a
              href="#stakeholders"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-stakeholders"
            >
              {t.nav.stakeholders}
            </a>
            <a
              href="#vision"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-vision"
            >
              {t.nav.vision}
            </a>
            <a
              href="#careers"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-careers"
            >
              {t.nav.careers}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 rounded-lg hover:bg-slate-50 transition"
              id="mobile-link-contact-scroll"
            >
              {t.nav.contact}
            </a>
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
