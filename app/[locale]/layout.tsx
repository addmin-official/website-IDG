import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocaleProvider } from '@/lib/locale-context';
import { isValidLocale, LOCALES } from '@/lib/locale-utils';
import { Language } from '@/lib/translations';

import { OfflineDetector } from '@/components/OfflineDetector';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  const titles: Record<Language, string> = {
    ku: 'دەروازەی دیجیتاڵیی عێراق (IDG)',
    ar: 'بوابة العراق الرقمية (IDG)',
    en: 'Iraq Digital Gateway (IDG)',
  };

  const descriptions: Record<Language, string> = {
    ku: 'دەروازەی دیجیتاڵیی عێراق (IDG) — کۆمپانیای دایکی سەربەخۆ بۆ حوکمڕانی، داتا و ژیریی دەستکرد.',
    ar: 'بوابة العراق الرقمية (IDG) — الشركة الأم السيادية للحوكمة والبيانات.',
    en: 'Iraq Digital Gateway (IDG) — Sovereign parent company.',
  };

  const baseUrl = 'https://idg.iq';

  return {
    title: titles[locale],
    description: descriptions[locale],
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        ku: `${baseUrl}/ku`,
        ar: `${baseUrl}/ar`,
        en: `${baseUrl}/en`,
        'x-default': `${baseUrl}/ku`,
      },
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      type: 'website',
      locale: locale === 'ku' ? 'ckb_IQ' : locale === 'ar' ? 'ar_IQ' : 'en_US',
      url: `${baseUrl}/${locale}`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  return (
    <LocaleProvider lang={locale as Language}>
      {children}
      <OfflineDetector />
    </LocaleProvider>
  );
}

