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
    ku: 'مەرجەکانی بەکارهێنان | دەروازەی دیجیتاڵیی عێراق (IDG)',
    ar: 'شروط الخدمة والاستخدام | بوابة العراق الرقمية (IDG)',
    en: 'Terms of Service | Iraq Digital Gateway (IDG)',
  };

  const descriptions: Record<Language, string> = {
    ku: 'مەرج و ڕێساکانی بەکارهێنانی سیستەم و پلاتفۆرمە فەرمییەکانی دەروازەی دیجیتاڵیی عێراق (IDG).',
    ar: 'الشروط والضوابط القانونية لاستخدام منصات وأنظمة بوابة العراق الرقمية (IDG).',
    en: 'Official Terms of Service governing access to Iraq Digital Gateway (IDG) sovereign platforms.',
  };

  const baseUrl = 'https://idg.iq';

  return {
    title: titles[lang],
    description: descriptions[lang],
    alternates: {
      canonical: `${baseUrl}/${lang}/legal/terms`,
      languages: {
        ku: `${baseUrl}/ku/legal/terms`,
        ar: `${baseUrl}/ar/legal/terms`,
        en: `${baseUrl}/en/legal/terms`,
        'x-default': `${baseUrl}/ku/legal/terms`,
      },
    },
    openGraph: {
      title: titles[lang],
      description: descriptions[lang],
      type: 'website',
      url: `${baseUrl}/${lang}/legal/terms`,
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

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
