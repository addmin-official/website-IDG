import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocaleProvider } from '@/lib/locale-context';
import { isValidLocale } from '@/lib/locale-utils';
import { Language } from '@/lib/translations';
import { generateStructuredOrganization } from '@/lib/seo-config';

import { OfflineDetector } from '@/components/OfflineDetector';
import KeyboardShortcuts from '@/components/KeyboardShortcuts';
import CommandPalette from '@/components/CommandPalette';
import { OrganizationJsonLd } from '@/components/seo/OrganizationJsonLd';

export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    { locale: 'ku' },
    { locale: 'ar' },
    { locale: 'en' },
  ];
}

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

  const titles: Record<string, string> = {
    ku: 'دەروازەی دیجیتاڵیی عێراق (IDG)',
    ar: 'البوابة الرقمية العراقية (IDG)',
    en: 'Iraq Digital Gateway (IDG)',
  };

  const title = titles[locale] || titles.ku;

  return {
    metadataBase: new URL('https://www.idggov.tech'),
    title,
    alternates: {
      canonical: `https://www.idggov.tech/${locale}`,
      languages: {
        'ku': 'https://www.idggov.tech/ku',
        'ckb-IQ': 'https://www.idggov.tech/ku',
        'ar-IQ': 'https://www.idggov.tech/ar',
        'en': 'https://www.idggov.tech/en',
        'x-default': 'https://www.idggov.tech/ku',
      },
    },
    robots: {
      index: process.env.VERCEL_ENV === 'production',
      follow: process.env.VERCEL_ENV === 'production',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const orgSchema = generateStructuredOrganization(locale as Language);

  return (
    <LocaleProvider lang={locale as Language}>
      <OrganizationJsonLd locale={locale} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <KeyboardShortcuts />
      <CommandPalette />
      {children}
      <OfflineDetector />
    </LocaleProvider>
  );
}

