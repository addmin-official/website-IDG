import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceClient from './service-client';
import { SERVICES_LIST, getServiceBySlug } from '@/lib/services-data';

interface PageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const locales = ['ku', 'ar', 'en'];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const service of SERVICES_LIST) {
      // 1. Base slug: e.g. government-infrastructure-platform
      params.push({ locale, slug: service.slug });
      // 2. Localized slug: e.g. government-infrastructure-platform-ku
      params.push({ locale, slug: `${service.slug}-${locale}` });
    }
  }

  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | IDG',
    };
  }

  const langKey = (locale === 'ar' || locale === 'en' ? locale : 'ku') as 'ku' | 'ar' | 'en';
  const title = `${service.title[langKey]} | IDG`;
  const description = service.description[langKey];
  const siteUrl = 'https://idggov.tech';

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/services/${slug}`,
      languages: {
        ku: `/ku/services/${service.slug}`,
        ar: `/ar/services/${service.slug}`,
        en: `/en/services/${service.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/services/${slug}`,
      type: 'website',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function SingleServicePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = SERVICES_LIST.filter((s) => s.id !== service.id).slice(0, 2);

  return (
    <ServiceClient
      locale={locale}
      service={service}
      relatedServices={relatedServices}
    />
  );
}
