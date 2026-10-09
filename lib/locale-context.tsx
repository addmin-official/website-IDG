'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { translations, Language, TranslationData } from '@/lib/translations';

export interface LocaleContextType {
  lang: Language;
  isRtl: boolean;
  t: TranslationData;
}

const LocaleContext = createContext<LocaleContextType | null>(null);

export function LocaleProvider({
  children,
  initialLang = 'ku',
  lang: propLang,
}: {
  children: React.ReactNode;
  initialLang?: Language;
  lang?: Language;
}) {
  const params = useParams();
  const rawLocale = propLang || (params?.locale as string) || initialLang;
  const lang: Language = rawLocale === 'ar' || rawLocale === 'en' ? rawLocale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    }
  }, [lang, isRtl]);

  return (
    <LocaleContext.Provider value={{ lang, isRtl, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextType {
  const context = useContext(LocaleContext);
  const params = useParams();

  if (context) {
    return context;
  }

  // Graceful fallback when rendered directly without a provider
  const rawLocale = (params?.locale as string) || 'ku';
  const lang: Language = rawLocale === 'ar' || rawLocale === 'en' ? rawLocale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  return { lang, isRtl, t };
}
