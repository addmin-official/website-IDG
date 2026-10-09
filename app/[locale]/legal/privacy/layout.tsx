import React from 'react';
import type { Metadata } from 'next';
import { isValidLocale } from '@/lib/locale-utils';
import { Language } from '@/lib/translations';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang: Language = isValidLocale(locale) ? locale : 'ku';

  const titles: Record<Language, string> = {
    ku: 'سیاسەتی پاراستنی نهێنی | دەروازەی دیجیتاڵیی عێراق (IDG)',
    ar: 'سياسة الخصوصية | بوابة العراق الرقمية (IDG)',
    en: 'Privacy Policy | Iraq Digital Gateway (IDG)',
  };

  const descriptions: Record<Language, string> = {
    ku: 'سیاسەتی فەرمیی پاراستنی زانیاری و نهێنی لە دەروازەی دیجیتاڵیی عێراق (IDG).',
    ar: 'سياسة الخصوصية وحماية البيانات الرسمية في بوابة العراق الرقمية (IDG).',
    en: 'Official Privacy Policy and institutional data governance at Iraq Digital Gateway (IDG).',
  };

  const baseUrl = 'https://idg.iq';

  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `${baseUrl}/${lang}/legal/privacy`,
      languages: {
        ku: `${baseUrl}/ku/legal/privacy`,
        ar: `${baseUrl}/ar/legal/privacy`,
        en: `${baseUrl}/en/legal/privacy`,
        'x-default': `${baseUrl}/ku/legal/privacy`,
      },
    },
    openGraph: {
      title: titles[lang],
      description: descriptions[lang],
      type: 'website',
      url: `${baseUrl}/${lang}/legal/privacy`,
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[lang],
      description: descriptions[lang],
    },
  };
}

export function generateStaticParams() {
  return [{ locale: 'ku' }, { locale: 'ar' }, { locale: 'en' }];
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
