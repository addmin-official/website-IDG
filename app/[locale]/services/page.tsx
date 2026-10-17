import React from 'react';
import type { Metadata } from 'next';
import ServicesClient from './services-client';

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
    ku: 'خزمەتگوزارییە دیجیتاڵییەکان | دەروازەی دیجیتاڵیی عێراق (IDG)',
    ar: 'الخدمات والحلول الرقمية السيادية | بوابة العراق الرقمية (IDG)',
    en: 'Sovereign Digital Services & Solutions | Iraq Digital Gateway (IDG)',
  };

  const descriptions: Record<string, string> = {
    ku: 'شەش پلاتفۆرمی سەرەکی بۆ بەدیجیتاڵیکردنی پرۆسە حکومییەکان، دەستەبەرکردنی ئاسایشی سایبەری، ناسنامەی پارێزراو، ژیریی دەستکرد، و ستۆدیۆی وەبەرهێنان.',
    ar: 'منظومات سيادية متكاملة للأمن السيبراني، بنية الحكومة السحابية، الهوية الرقمية، الذكاء الاصطناعي، والتعليم التقني في العراق.',
    en: 'Enterprise sovereign cloud infrastructure, zero-trust cybersecurity, digital identity, applied AI, and technical education solutions by Iraq Digital Gateway.',
  };

  const siteUrl = 'https://idggov.tech';

  return {
    title: titles[locale] || titles.ku,
    description: descriptions[locale] || descriptions.ku,
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        ku: `/ku/services`,
        ar: `/ar/services`,
        en: `/en/services`,
      },
    },
    openGraph: {
      title: titles[locale] || titles.ku,
      description: descriptions[locale] || descriptions.ku,
      url: `${siteUrl}/${locale}/services`,
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

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ServicesClient locale={locale} />;
}
