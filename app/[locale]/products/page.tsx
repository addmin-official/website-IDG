import React from 'react';
import { Metadata } from 'next';
import ProductsClient from './products-client';

export function generateStaticParams() {
  return [{ locale: 'ku' }, { locale: 'ar' }, { locale: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = 'https://www.idggov.tech';

  const titles: Record<string, string> = {
    ku: 'بەرهەمە نیشتمانی و پلاتفۆرمە سەروەرییەکان | IDG',
    ar: 'المنظومات والمنتجات السيادية الوطنية | IDG',
    en: 'Sovereign National Platforms & Enterprise Products | IDG',
  };

  const descriptions: Record<string, string> = {
    ku: 'ژێرخانی دیجیتاڵیی پارێزراو بۆ خزمەتگوزارییە حکومییەکان، بەڕێوەبردنی گومرگ و دەروازە سنورییەکان، و مۆدێلی زانیاریی ئابووریی عێراق.',
    ar: 'البنى التحتية التكنولوجية المستقلة لحوكمة التجارة الدولية، إدارة المنافذ الجمركية، ونمذجة الاقتصاد الوطني لجمهورية العراق.',
    en: 'Enterprise sovereign platforms powering Iraqi government services, border customs intelligence, economic analytics, and ecological monitoring.',
  };

  return {
    title: titles[locale] || titles.ku,
    description: descriptions[locale] || descriptions.ku,
    alternates: {
      canonical: `${baseUrl}/${locale}/products`,
      languages: {
        ku: `${baseUrl}/ku/products`,
        ar: `${baseUrl}/ar/products`,
        en: `${baseUrl}/en/products`,
        'x-default': `${baseUrl}/ku/products`,
      },
    },
    openGraph: {
      title: titles[locale] || titles.ku,
      description: descriptions[locale] || descriptions.ku,
      url: `${baseUrl}/${locale}/products`,
      type: 'website',
    },
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ProductsClient locale={locale} />;
}
