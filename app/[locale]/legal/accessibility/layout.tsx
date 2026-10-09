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
    ku: 'بەیاننامەی دەستڕاگەیشتن | دەروازەی دیجیتاڵیی عێراق (IDG)',
    ar: 'بيان إمكانية الوصول وسهولة الاستخدام | بوابة العراق الرقمية (IDG)',
    en: 'Accessibility Statement | Iraq Digital Gateway (IDG)',
  };

  const descriptions: Record<Language, string> = {
    ku: 'پابەندبوونی دەروازەی دیجیتاڵیی عێراق (IDG) بە ستانداردەکانی دەستڕاگەیشتنی گشتگیر بەپێی پێوەرەکانی WCAG 2.2 AA.',
    ar: 'التزام بوابة العراق الرقمية (IDG) بالمعايير الشاملة لإمكانية الوصول الرقمي وفق ضوابط WCAG 2.2 AA.',
    en: 'Official Accessibility Statement detailing WCAG 2.2 AA compliance, multi-lingual accessibility, and assistive technology support at IDG.',
  };

  const baseUrl = 'https://idg.iq';

  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `${baseUrl}/${lang}/legal/accessibility`,
      languages: {
        ku: `${baseUrl}/ku/legal/accessibility`,
        ar: `${baseUrl}/ar/legal/accessibility`,
        en: `${baseUrl}/en/legal/accessibility`,
        'x-default': `${baseUrl}/ku/legal/accessibility`,
      },
    },
    openGraph: {
      title: titles[lang],
      description: descriptions[lang],
      type: 'website',
      url: `${baseUrl}/${lang}/legal/accessibility`,
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

export default function AccessibilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
