import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import GatewayAIClient from './gateway-ai-client';

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
  const title = 'Gateway AI — Customs & Border Intelligence | IDG';
  const description = 'National intelligent system for customs and border management, powered by AI Gate Iraq, integrated with Iraq NSW and national digital identity.';

  return {
    title,
    description,
    keywords: [
      'customs intelligence',
      'border management',
      'AI gateway',
      'Iraq digital',
      'IDG product',
      'CBIP',
      'sovereign',
    ],
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/products/gateway-ai`,
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-gateway-ai.png`,
          width: 1200,
          height: 630,
          alt: 'Gateway AI - Customs & Border Intelligence',
        },
      ],
    },
    alternates: {
      languages: {
        ku: `${baseUrl}/ku/products/gateway-ai`,
        ar: `${baseUrl}/ar/products/gateway-ai`,
        en: `${baseUrl}/en/products/gateway-ai`,
        'x-default': `${baseUrl}/ku/products/gateway-ai`,
      },
    },
  };
}

export default async function GatewayAIPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!['ku', 'ar', 'en'].includes(locale)) notFound();
  return <GatewayAIClient locale={locale} />;
}
