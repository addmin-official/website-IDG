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
    ku: 'سیاسەتی سەروەریی داتا | دەروازەی دیجیتاڵیی عێراق (IDG)',
    ar: 'سياسة سيادة البيانات الوطنية | بوابة العراق الرقمية (IDG)',
    en: 'Sovereign Data Policy | Iraq Digital Gateway (IDG)',
  };

  const descriptions: Record<Language, string> = {
    ku: 'سیاسەتی فەرمیی مانەوەی ١٠٠٪ی داتاکان لەناو خاکی عێراق، تەلارسازیی Zero-Trust، و کۆدکردنی سەروەر لە IDG.',
    ar: 'السياسة السيادية لتوطين البيانات بنسبة ١٠٠٪ داخل العراق، معمارية انعدام الثقة Zero-Trust، والتشفير المؤسسي في IDG.',
    en: 'Official Sovereign Data Policy enforcing 100% in-country data residency, Zero-Trust perimeter, and ISO 27001 compliance at IDG.',
  };

  const baseUrl = 'https://idggov.tech';

  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `${baseUrl}/${lang}/legal/sovereign-data`,
      languages: {
        ku: `${baseUrl}/ku/legal/sovereign-data`,
        ar: `${baseUrl}/ar/legal/sovereign-data`,
        en: `${baseUrl}/en/legal/sovereign-data`,
        'x-default': `${baseUrl}/ku/legal/sovereign-data`,
      },
    },
    openGraph: {
      title: titles[lang],
      description: descriptions[lang],
      type: 'website',
      url: `${baseUrl}/${lang}/legal/sovereign-data`,
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

export default function SovereignDataLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
