import React from 'react';
import type { Metadata } from 'next';
import { translations, Language } from '@/lib/translations';
import ImpactIQClient from './impactiq-client';

export function generateStaticParams() {
  return [{ locale: 'ku' }, { locale: 'ar' }, { locale: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const t = translations[lang] || translations.ku;
  const product = t.portfolio.products.find((p) => p.id === 'impactiq');

  const title = product ? `${product.name} (Product 004) | ${t.companyName}` : `ImpactIQ | ${t.companyName}`;
  const description = product?.description || t.portfolio.impactIQ?.description || t.tagline;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `/${locale}/products/impactiq`,
      languages: {
        ku: '/ku/products/impactiq',
        ar: '/ar/products/impactiq',
        en: '/en/products/impactiq',
      },
    },
  };
}

export default async function ImpactIQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ImpactIQClient locale={locale} />;
}
