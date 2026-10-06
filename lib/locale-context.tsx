'use client';

import { createContext, useContext, ReactNode } from 'react';
import { Language, translations, TranslationData } from '@/lib/translations';

export interface LocaleContextValue {
  lang: Language;
  isRtl: boolean;
  t: TranslationData;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  lang,
  children,
}: {
  lang: Language;
  children: ReactNode;
}) {
  const value: LocaleContextValue = {
    lang,
    isRtl: lang === 'ku' || lang === 'ar',
    t: translations[lang],
  };

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return ctx;
}
