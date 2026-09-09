'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { TranslationData } from '@/lib/translations';

interface FooterProps {
  t?: TranslationData;
  onOpenContact?: () => void;
}

export default function Footer({ t, onOpenContact }: FooterProps = {}) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setIsSubscribed(true);
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16 border-t border-slate-800" dir="rtl" id="corporate-footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          
          {/* Brand & Vision */}
          <div className="lg:col-span-1" id="footer-brand-section">
            <h3 className="text-2xl font-bold text-white mb-4">IDG</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              دەروازەی دیجیتاڵیی عێراق (Iraq Digital Gateway). ستۆدیۆیەکی بنیاتنانی دامەزراوەیی بۆ گۆڕینی ئاڵۆزییەکان بۆ توانای دیجیتاڵیی پارێزراو.
            </p>
          </div>

          {/* Quick Links */}
          <div id="footer-quick-links">
            <h4 className="text-lg font-bold text-white mb-4">بەستەرە سەرەکییەکان</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-blue-400 transition" id="footer-link-home">سەرەکی</Link></li>
              <li><Link href="/#portfolio" className="hover:text-blue-400 transition" id="footer-link-portfolio">پۆرتفۆلیۆ</Link></li>
              <li><Link href="/#governance" className="hover:text-blue-400 transition" id="footer-link-governance">حوکمڕانی</Link></li>
              <li><Link href="/#stakeholders" className="hover:text-blue-400 transition" id="footer-link-stakeholders">لایەنە ئامانجدارەکان</Link></li>
            </ul>
          </div>

          {/* Corporate Links */}
          <div id="footer-corporate-links">
            <h4 className="text-lg font-bold text-white mb-4">کۆمپانیا</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#about" className="hover:text-blue-400 transition" id="footer-link-about">دەربارەی ئێمە</Link></li>
              <li><Link href="/#careers" className="hover:text-blue-400 transition" id="footer-link-careers">کارکردن (Careers)</Link></li>
              <li>
                <Link
                  href="/#contact"
                  onClick={() => {
                    if (onOpenContact) onOpenContact();
                  }}
                  className="hover:text-blue-400 transition"
                  id="footer-link-contact"
                >
                  پەیوەندیی فەرمی
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div id="footer-newsletter-section">
            <h4 className="text-lg font-bold text-white mb-4">ناوەندی زانیاری</h4>
            <p className="text-xs text-slate-400 mb-4">
              ئاگاداری دوایین ڕاپۆرتە ستراتیژی و پێشڤەچوونەکانی IDG بە.
            </p>
            {/* لێرەشدا suppressHydrationWarning مان داناوە بۆ ڕێگریکردن لە کێشەی وەرگێڕ */}
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2" suppressHydrationWarning id="footer-newsletter-form">
              <input 
                type="email" 
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="ئیمەیڵی فەرمی..." 
                className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
                id="footer-newsletter-email"
                suppressHydrationWarning
              />
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold py-2 rounded-lg transition cursor-pointer"
                id="footer-newsletter-submit"
              >
                {isSubscribed ? 'تۆمار کرا ✓' : 'بەشداریکردن'}
              </button>
            </form>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 text-center md:text-right flex flex-col md:flex-row justify-between items-center gap-4" id="footer-copyright-section">
          <p className="text-xs text-slate-500" suppressHydrationWarning id="footer-copyright-text">
            © {new Date().getFullYear()} دەروازەی دیجیتاڵیی عێراق (IDG). هەموو مافەکان پارێزراون.
          </p>
          <div className="flex gap-4 text-xs text-slate-500">
            <span className="cursor-pointer hover:text-white transition" id="footer-link-terms">مەرجەکانی بەکارهێنان</span>
            <span className="cursor-pointer hover:text-white transition" id="footer-link-privacy">سیاسەتی تایبەتمەندی</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

