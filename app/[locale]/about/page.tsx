import React from 'react';
import type { Metadata } from 'next';
import AboutClient from './about-client';

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
    ku: 'سەبارەت بە IDG | دەروازەی دیجیتاڵیی عێراق',
    ar: 'عن IDG | بوابة العراق الرقمية',
    en: 'About IDG | Iraq Digital Gateway',
  };

  const descriptions: Record<string, string> = {
    ku: 'دەروازەی دیجیتاڵیی عێراق — سەروەریی تەکنۆلۆژی و فێرکاری، کۆمپانیای دایکی سەربەخۆ بۆ ژێرخانی سەروەری نیشتمانی.',
    ar: 'بوابة العراق الرقمية — السيادة التكنولوجية والابتكار، الشركة القابضة واستوديو المشاريع السيادي للعراق.',
    en: 'Iraq Digital Gateway (IDG) — Sovereign Tech & Innovation holding company and institutional venture studio for national digital infrastructure.',
  };

  const siteUrl = 'https://idggov.tech';

  return {
    title: titles[locale] || titles.ku,
    description: descriptions[locale] || descriptions.ku,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        ku: `/ku/about`,
        ar: `/ar/about`,
        en: `/en/about`,
      },
    },
    openGraph: {
      title: titles[locale] || titles.ku,
      description: descriptions[locale] || descriptions.ku,
      url: `${siteUrl}/${locale}/about`,
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

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AboutClient locale={locale} />;
}
