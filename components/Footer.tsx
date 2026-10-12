'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TranslationData } from '@/lib/translations';
import { useLocale } from '@/lib/locale-context';
import { Mail, CheckCircle2, Shield, ArrowRight, ArrowLeft } from 'lucide-react';

interface FooterProps {
  t?: TranslationData;
  isRtl?: boolean;
  onOpenContact?: () => void;
}

export default function Footer({ t, isRtl = true, onOpenContact }: FooterProps = {}) {
  const { lang: currentLang } = useLocale();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = newsletterEmail.trim();
    if (!cleanEmail) return;

    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setErrorMsg(
        t?.footer?.newsletter?.invalidEmail || 'تکایە ئیمەیڵێکی فەرمی و دروست بنووسە.'
      );
      return;
    }

    setErrorMsg('');
    setIsSubmitting(true);

    // Simulate reliable capture of institutional email
    await new Promise((resolve) => setTimeout(resolve, 600));

    setIsSubmitting(false);
    setIsSubscribed(true);
  };

  const resetForm = () => {
    setNewsletterEmail('');
    setIsSubscribed(false);
    setErrorMsg('');
  };

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <footer
      className="bg-[#060D1A] text-slate-300 py-10 sm:py-14 md:py-18 border-t border-[#102447] relative w-full overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
      id="corporate-footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-10 sm:mb-14">
          
          {/* Brand & Vision (4 cols) */}
          <div className="lg:col-span-4" id="footer-brand-section">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-black text-white tracking-tight">IDG</span>
              <span className="px-2 py-0.5 text-[11px] font-semibold bg-[#102447] text-[#60A5FA] border border-[#193B73] rounded-md">
                {t?.parentBadge || 'کۆمپانیای دایک'}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
              {t?.footer?.parentDesc ||
                'دەروازەی دیجیتاڵیی عێراق (IDG). ستۆدیۆیەکی سەروەریی تەکنەلۆژی بۆ گۆڕینی ئاڵۆزییەکان بۆ توانای دیجیتاڵیی دامەزراوەیی لەسەر بنەمای حوکمڕانی و ئاسایشی زانیاری.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>{t?.footer?.links?.security || 'سەروەریی زانیاری و ئاسایش'}</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2" id="footer-quick-links">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {isRtl ? 'بەستەرە سەرەکییەکان' : 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`/${currentLang}`} className="hover:text-blue-400 transition" id="footer-link-home">
                  {t?.nav?.home || 'سەرەکی'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/portfolio`} className="hover:text-blue-400 transition" id="footer-link-portfolio">
                  {t?.nav?.portfolio || 'پۆرتفۆلیۆ'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/governance`} className="hover:text-blue-400 transition" id="footer-link-governance">
                  {t?.nav?.governance || 'حوکمڕانی'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/faq`} className="hover:text-blue-400 transition text-blue-300 font-medium" id="footer-link-faq">
                  {t?.footer?.links?.faq || t?.nav?.faq || 'پرسیارە باوەکان (FAQ)'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Links (2 cols) */}
          <div className="lg:col-span-2" id="footer-corporate-links">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              {isRtl ? 'دامەزراوەیی' : 'Institutional'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href={`/${currentLang}/about`} className="hover:text-blue-400 transition" id="footer-link-about">
                  {t?.footer?.links?.about || 'دەربارەی ئێمە'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/governance`} className="hover:text-blue-400 transition" id="footer-link-principles">
                  {t?.footer?.links?.principles || 'بنەماکانی کۆمپانیا'}
                </Link>
              </li>
              <li>
                <Link href={`/${currentLang}/careers`} className="hover:text-blue-400 transition" id="footer-link-careers">
                  {t?.footer?.links?.careers || 'هەلی کار'}
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenContact) onOpenContact();
                  }}
                  className="hover:text-blue-400 transition text-start cursor-pointer"
                  id="footer-link-contact"
                >
                  {t?.footer?.links?.contact || 'پەیوەندیی فەرمی'}
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription (4 cols) */}
          <div className="lg:col-span-4" id="footer-newsletter-section">
            <div className="bg-[#0B172E] border border-[#102447] rounded-2xl p-4 sm:p-5 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <h4 className="text-sm font-bold text-white tracking-wide">
                  {t?.footer?.newsletter?.title || 'ناوەندی زانیاری و نوێکارییە خولییەکان'}
                </h4>
              </div>
              
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                {t?.footer?.newsletter?.description ||
                  'ئیمەیڵی دامەزراوەیی خۆت تۆمار بکە بۆ وەرگرتنی ڕاپۆرتە فەرمییەکان، شیارییە ستراتیژییەکان، و پێشکەوتنەکانی ژێرخانی دیجیتاڵیی IDG.'}
              </p>

              {isSubscribed ? (
                <div
                  className="bg-blue-950/70 border border-blue-800/80 rounded-xl p-4 text-start animate-in fade-in duration-300"
                  id="footer-newsletter-success"
                >
                  <div className="flex items-center gap-2 text-blue-400 font-bold text-xs mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{t?.footer?.newsletter?.successTitle || 'بە سەرکەوتوویی تۆمار کرا'}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {t?.footer?.newsletter?.successMsg ||
                      'سوپاس، ئیمەیڵی دامەزراوەییەکەت تۆمار کرا. پوختەی ڕاپۆرتەکان بۆ ناونیشانەکەت دەنێردرێن.'}
                  </p>
                  <button
                    onClick={resetForm}
                    className="text-[11px] font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-2 cursor-pointer"
                    id="footer-newsletter-reset"
                  >
                    {isRtl ? 'تۆمارکردنی ئیمەیڵێکی تر' : 'Register another email'}
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="space-y-2.5"
                  suppressHydrationWarning
                  id="footer-newsletter-form"
                >
                  <div className="relative">
                    <input
                      type="email"
                      required
                      autoComplete="off"
                      spellCheck={false}
                      value={newsletterEmail}
                      onChange={(e) => {
                        setNewsletterEmail(e.target.value);
                        if (errorMsg) setErrorMsg('');
                      }}
                      placeholder={
                        t?.footer?.newsletter?.placeholder ||
                        'ئیمەیڵی دامەزراوەیی (name@institution.gov.iq)'
                      }
                      className={`w-full bg-slate-950 border rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                        errorMsg ? 'border-red-500' : 'border-slate-700 focus:border-blue-500'
                      }`}
                      id="footer-newsletter-email"
                      suppressHydrationWarning
                    />
                  </div>

                  {errorMsg && (
                    <p className="text-[11px] text-red-400 font-medium" id="footer-newsletter-error">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800/60 text-white text-xs font-bold py-2.5 rounded-xl transition-all shadow-md hover:shadow-blue-900/30 cursor-pointer"
                    id="footer-newsletter-submit"
                  >
                    <span>
                      {isSubmitting
                        ? t?.footer?.newsletter?.submittingBtn || 'تۆمارکردنی ئیمەیڵ...'
                        : t?.footer?.newsletter?.submitBtn || 'بەشداریکردن لە نوێکارییەکان'}
                    </span>
                    {!isSubmitting && <ArrowIcon className="w-3.5 h-3.5" />}
                  </button>

                  <p className="text-[10px] text-slate-400 pt-1 leading-normal">
                    {t?.footer?.newsletter?.notice ||
                      'تێبینی: ئەم کەناڵە تەنها بۆ ئیمەیڵە فەرمی و دامەزراوەیییەکان بەردەستە و پارێزراوە.'}
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Governance Status Bar */}
        <div className="py-3 border-t border-[#102447] flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] font-mono text-slate-500 text-center" id="footer-governance-bar">
          <span>Build IDG-2026.10-PROD</span>
          <span className="text-slate-700">·</span>
          <span>ISO-27001 Verified</span>
          <span className="text-slate-700">·</span>
          <span>Erbil Node 01</span>
        </div>

        {/* Copyright & Sub-links */}
        <div
          className="pt-4 border-t border-[#102447] flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-slate-400 text-center md:text-start"
          id="footer-copyright-section"
        >
          <p suppressHydrationWarning id="footer-copyright-text">
            {t?.footer?.rights ||
              '© ٢٠٢٦ دەروازەی دیجیتاڵیی عێراق (IDG). مافی خاوەندارێتیی پۆرتفۆلیۆ پارێزراوە.'}
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 text-xs text-slate-400">
            <Link
              href={`/${currentLang}/legal/privacy`}
              className="hover:text-blue-400 transition"
              id="footer-link-privacy"
            >
              {currentLang === 'ku' ? 'پاراستنی نهێنی' : currentLang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </Link>
            <Link
              href={`/${currentLang}/legal/terms`}
              className="hover:text-blue-400 transition"
              id="footer-link-terms"
            >
              {currentLang === 'ku' ? 'مەرجەکانی بەکارهێنان' : currentLang === 'ar' ? 'شروط الخدمة' : 'Terms of Service'}
            </Link>
            <Link
              href={`/${currentLang}/legal/sovereign-data`}
              className="hover:text-blue-400 transition"
              id="footer-link-sovereign-data"
            >
              {currentLang === 'ku' ? 'سەروەریی داتا' : currentLang === 'ar' ? 'سيادة البيانات' : 'Sovereign Data'}
            </Link>
            <Link
              href={`/${currentLang}/legal/accessibility`}
              className="hover:text-blue-400 transition"
              id="footer-link-accessibility"
            >
              {currentLang === 'ku' ? 'دەستڕاگەیشتن' : currentLang === 'ar' ? 'إمكانية الوصول' : 'Accessibility'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
