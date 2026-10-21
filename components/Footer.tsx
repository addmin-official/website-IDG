import React from 'react';
import Link from '@/components/ui/Link';
import SovereignBadge from '@/components/SovereignBadge';
import { TranslationData } from '@/lib/translations';
import { useLocale } from '@/lib/locale-context';
import { Shield, ArrowRight, ArrowLeft, Keyboard } from 'lucide-react';
import { HelpIcon } from '@/components/ui/Tooltip';
import NewsletterSignup from '@/components/NewsletterSignup';

interface FooterProps {
  t?: TranslationData;
  isRtl?: boolean;
  onOpenContact?: () => void;
}

export default function Footer({ t, isRtl = true, onOpenContact }: FooterProps = {}) {
  const { lang: currentLang } = useLocale();
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
              <SovereignBadge label={t?.parentBadge || 'کۆمپانیای دایک'} variant="primary" size="sm" />
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
                <Link href={`/${currentLang}/services`} className="hover:text-blue-400 transition" id="footer-link-services">
                  {currentLang === 'ku' ? 'خزمەتگوزارییەکان' : currentLang === 'ar' ? 'الخدمات' : 'Services'}
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
              <li>
                <Link href={`/${currentLang}/help`} prefetch={true} className="hover:text-blue-400 transition" id="footer-link-help">
                  {currentLang === 'ku' ? 'ناوەندی هاوکاری و بەڵگەنامەکان' : currentLang === 'ar' ? 'مركز المساعدة والوثائق' : 'Help & Documentation'}
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
                <Link href={`/${currentLang}/team`} className="hover:text-blue-400 transition" id="footer-link-team">
                  {currentLang === 'ku' ? 'تیمی ئێمە' : currentLang === 'ar' ? 'فريقنا' : 'Our Team'}
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
              <li className="pt-2 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent('idg:show-shortcuts'))}
                  className="text-xs text-slate-500 hover:text-[#60A5FA] transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                  id="footer-link-shortcuts"
                >
                  <Keyboard className="w-3 h-3" />
                  <span>{currentLang === 'ku' ? 'کلیلەکانی ڕێنمایی' : 
                         currentLang === 'ar' ? 'اختصارات' : 
                         'Shortcuts'}</span>
                  <kbd className="px-1.5 py-0.5 bg-[#102447] border border-[#193B73] rounded text-[9px] font-mono text-slate-300">
                    ?
                  </kbd>
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription (4 cols) */}
          <div className="lg:col-span-4" id="footer-newsletter-section">
            <NewsletterSignup t={t} isRtl={isRtl} />
          </div>

        </div>

        {/* Governance Status Bar */}
        <div dir="ltr" className="py-3 border-t border-[#102447] flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] font-mono text-slate-500 text-center" id="footer-governance-bar">
          <p dir="ltr" className="font-mono text-xs text-start inline-flex items-center gap-2">
            <bdi>Build IDG-2026.10-PROD · ISO-27001 Verified · Erbil Node 01</bdi>
            <HelpIcon tooltip={isRtl ? 'پابەندبوونی تەواو بە ستانداردی جیهانیی بەڕێوەبردنی ئاسایشی زانیاری (ISO/IEC 27001)' : 'Strict compliance with Information Security Management System standards (ISO/IEC 27001)'} />
          </p>
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

        {/* Brand Disambiguation Disclaimer */}
        <p className="text-[10px] text-slate-600 leading-relaxed max-w-3xl mx-auto text-center mt-4" id="footer-disambiguation-notice">
          {currentLang === 'ku' && 'دەروازەی دیجیتاڵیی عێراق (IDG) کۆمپانیایەکی سەربەخۆی عێراقییە. هیچ پەیوەندییەکی نییە بە International Data Group (IDG Inc.) یان IDG Communications.'}
          {currentLang === 'ar' && 'بوابة العراق الرقمية (IDG) هي شركة عراقية مستقلة. لا علاقة لها بـ International Data Group أو IDG Communications.'}
          {currentLang === 'en' && 'Iraq Digital Gateway (IDG) is an independent Iraqi company. Not affiliated with International Data Group or IDG Communications.'}
        </p>
      </div>
    </footer>
  );
}
