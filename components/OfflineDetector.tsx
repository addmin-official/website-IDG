'use client';

import React, { useEffect, useState } from 'react';
import { WifiOff } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';

export function OfflineDetector() {
  const [isOffline, setIsOffline] = useState(false);
  const { lang, isRtl } = useLocale();

  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    setIsOffline(typeof navigator !== 'undefined' ? !navigator.onLine : false);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (!isOffline) return null;

  const labels = {
    ku: {
      title: 'ئینتەرنێت نەماوە',
      desc: 'تکایە پەیوەندی خۆت بپشکنەوە و دووبارە هەوڵ بدە.',
    },
    ar: {
      title: 'انقطع الاتصال بالإنترنت',
      desc: 'يرجى التحقق من اتصال الشبكة وإعادة المحاولة.',
    },
    en: {
      title: 'You are currently offline',
      desc: 'Please check your connection and try again.',
    },
  };

  const current = labels[lang] || labels.ku;

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="fixed bottom-4 start-4 end-4 md:start-auto md:end-4 md:w-84 bg-[#451a03] border border-amber-600/60 rounded-xl p-4 shadow-2xl z-50 text-slate-100 animate-in fade-in slide-in-from-bottom-3 duration-300"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-start gap-3">
        <WifiOff className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <div className="text-amber-100 font-bold text-sm">
            {current.title}
          </div>
          <div className="text-amber-200 text-xs mt-1 leading-relaxed">
            {current.desc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfflineDetector;
