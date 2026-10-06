import React from 'react';
import { LocaleProvider } from '@/lib/locale-context';
import { Language } from '@/lib/translations';

export function generateStaticParams() {
  return [{ locale: 'ku' }, { locale: 'ar' }, { locale: 'en' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';

  return <LocaleProvider initialLang={lang}>{children}</LocaleProvider>;
}
