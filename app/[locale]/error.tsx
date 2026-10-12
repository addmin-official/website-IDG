'use client';

import React, { useEffect } from 'react';
import { AlertTriangle, RefreshCw, Home, Mail } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { lang, isRtl } = useLocale();

  useEffect(() => {
    // Log to monitoring service (if exists)
    console.error('IDG Error:', error);
  }, [error]);

  const messages = {
    ku: {
      title: 'هەڵەیەکی نەخوازراو ڕوویدا',
      desc: 'بەڵێنی ئێمە ئەمەیە: هەر هەڵەیەک بە وردی دەپشکنین و چارەسەری دەکەین. تکایە دووبارە هەوڵ بدە.',
      retry: 'دووبارە هەوڵ بدە',
      home: 'گەڕانەوە بۆ سەرەتا',
      report: 'ڕاپۆرتکردنی کێشە',
      ref: 'کۆدی پێداچوونەوە',
    },
    ar: {
      title: 'حدث خطأ غير متوقع',
      desc: 'وعدنا: كل خطأ يتم فحصه بدقة وإصلاحه. يرجى المحاولة مرة أخرى.',
      retry: 'إعادة المحاولة',
      home: 'العودة للرئيسية',
      report: 'الإبلاغ عن المشكلة',
      ref: 'رمز المراجعة',
    },
    en: {
      title: 'An unexpected error occurred',
      desc: 'Our promise: every error is investigated and fixed. Please try again.',
      retry: 'Try again',
      home: 'Return home',
      report: 'Report issue',
      ref: 'Reference ID',
    },
  };

  const m = messages[lang] || messages.en;

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-[#060D1A] flex items-center justify-center p-6 text-slate-100"
    >
      <div className="max-w-lg w-full bg-[#0B172E] border border-[#102447] rounded-2xl p-8 text-center shadow-2xl">
        <div className="w-16 h-16 bg-amber-950/50 border border-amber-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-8 h-8 text-amber-400" />
        </div>

        <h1 className="text-2xl font-black text-white mb-3">
          {m.title}
        </h1>

        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {m.desc}
        </p>

        {error.digest && (
          <div className="bg-[#102447] border border-[#1D5BD8]/30 rounded-lg px-4 py-2 mb-6 inline-block">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
              {m.ref}
            </span>
            <div className="text-xs font-mono text-[#60A5FA] mt-0.5">
              {error.digest}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1D5BD8] hover:bg-blue-600 text-white text-sm font-bold rounded-lg transition-colors cursor-pointer shadow-sm"
          >
            <RefreshCw className="w-4 h-4" />
            <span>{m.retry}</span>
          </button>

          <a
            href={`/${lang}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#102447] hover:bg-[#193B73] text-slate-200 text-sm font-bold rounded-lg border border-[#102447] transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>{m.home}</span>
          </a>

          <a
            href={`/${lang}/contact`}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-slate-400 hover:text-white text-sm font-bold rounded-lg transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>{m.report}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
