import React from 'react';
import type { Metadata } from 'next';
import CareersClient from './careers-client';

export function generateStaticParams() {
  return [{ locale: 'ku' }, { locale: 'ar' }, { locale: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    ku: 'هەلی کار و بەشداریکردن | دەروازەی دیجیتاڵیی عێراق (IDG)',
    ar: 'الوظائف والمسار المهني | بوابة العراق الرقمية (IDG)',
    en: 'Careers & Sovereign Tech Opportunities | Iraq Digital Gateway (IDG)',
  };

  const descriptions: Record<string, string> = {
    ku: 'بەشداربە لە دەستەی نیشتمانیی IDG. دەرفەتی کاری ئەندازیاری، کلاود، ئاسایشی سایبەری، و بەڕێوەبردنی بەرهەمە سەروەرەکان لە عێراق.',
    ar: 'انضم إلى فريق بوابة العراق الرقمية (IDG). شواغر هندسية متقدمة في النظم الموزعة، البنية السحابية السيادية، وإدارة المنتجات الوطنية.',
    en: 'Join the architects of Iraq’s digital sovereignty. Explore engineering, cloud, cybersecurity, and civic product leadership opportunities at IDG.',
  };

  const siteUrl = 'https://idggov.tech';

  return {
    title: titles[locale] || titles.ku,
    description: descriptions[locale] || descriptions.ku,
    alternates: {
      canonical: `/${locale}/careers`,
      languages: {
        ku: `/ku/careers`,
        ar: `/ar/careers`,
        en: `/en/careers`,
      },
    },
    openGraph: {
      title: titles[locale] || titles.ku,
      description: descriptions[locale] || descriptions.ku,
      url: `${siteUrl}/${locale}/careers`,
      type: 'website',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: titles[locale] || titles.ku,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] || titles.ku,
      description: descriptions[locale] || descriptions.ku,
    },
  };
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CareersClient locale={locale} />;
}
