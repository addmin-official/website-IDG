import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EconomicKnowledgeGraphClient from './graph-client';
import { Locale } from '@/src/features/intelligence/types';

export async function generateStaticParams() {
  return [
    { locale: 'ku' },
    { locale: 'ar' },
    { locale: 'en' },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!['ku', 'ar', 'en'].includes(locale)) notFound();

  const baseUrl = 'https://www.idggov.tech';

  const titles: Record<Locale, string> = {
    ku: 'تۆڕی زانیاری ئابووری — دەروازەی دیجیتاڵیی عێراق | IDG',
    ar: 'الشبكة المعرفية الاقتصادية — بوابة العراق الرقمية | IDG',
    en: 'Economic Knowledge Graph — Iraq Digital Gateway | IDG',
  };

  const descriptions: Record<Locale, string> = {
    ku: 'سیستەمی نیگارکێشانی پەیوەندی نێوان بەندەر، گومرگ، کاڵا و بڕیارە مەنەفیستیەکان لەسەر بنەمای داتای سەروەری نیشتمانی.',
    ar: 'منظومة تفاعلية لرسم وتتبع الروابط اللوجستية والجمركية وحركة السلع والقرارات السيادية الاتحادية.',
    en: 'Interactive knowledge graph mapping relationships between Iraqi ports, customs terminals, strategic commodities, and federal trade regulations.',
  };

  const title = titles[locale as Locale];
  const description = descriptions[locale as Locale];

  return {
    title,
    description,
    keywords: [
      'economic knowledge graph',
      'Iraqi ports',
      'customs intelligence',
      'Iraq NSW',
      'trade corridors',
      'Umm Qasr',
      'Ibrahim Khalil',
      'Trebil corridor',
      'sovereign data',
      'IDG intelligence',
    ],
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/products/economic-knowledge-graph`,
      type: 'website',
      siteName: 'Iraq Digital Gateway (IDG)',
      locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_IQ' : 'ckb_IQ',
      images: [
        {
          url: `${baseUrl}/og-gateway-ai.png`,
          width: 1200,
          height: 630,
          alt: 'Economic Knowledge Graph - Iraq Digital Gateway',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${baseUrl}/og-gateway-ai.png`],
    },
    alternates: {
      canonical: `${baseUrl}/${locale}/products/economic-knowledge-graph`,
      languages: {
        ku: `${baseUrl}/ku/products/economic-knowledge-graph`,
        ar: `${baseUrl}/ar/products/economic-knowledge-graph`,
        en: `${baseUrl}/en/products/economic-knowledge-graph`,
        'x-default': `${baseUrl}/ku/products/economic-knowledge-graph`,
      },
    },
  };
}

export default async function EconomicKnowledgeGraphPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!['ku', 'ar', 'en'].includes(locale)) notFound();
  return <EconomicKnowledgeGraphClient locale={locale as Locale} />;
}
