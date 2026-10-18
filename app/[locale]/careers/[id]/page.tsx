import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import JobClient from './job-client';
import { getJobPostingById, getAllJobPostingIds } from '@/lib/job-postings';

interface JobPageProps {
  params: Promise<{
    locale: string;
    id: string;
  }>;
}

export async function generateStaticParams() {
  const locales = ['ku', 'ar', 'en'];
  const jobIds = getAllJobPostingIds();

  const params: Array<{ locale: string; id: string }> = [];

  for (const locale of locales) {
    for (const id of jobIds) {
      params.push({ locale, id });
      params.push({ locale, id: `${id}-${locale}` });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: JobPageProps): Promise<Metadata> {
  const { locale, id } = await params;
  const job = getJobPostingById(id, locale);

  if (!job) {
    return {
      title: 'Job Not Found | IDG Careers',
    };
  }

  const siteUrl = 'https://idggov.tech';

  const title =
    locale === 'ku'
      ? `${job.titleKu} — هەلی کار لە IDG`
      : locale === 'ar'
      ? `${job.titleAr} — وظائف في IDG`
      : `${job.title} — Careers at IDG`;

  const description =
    locale === 'ku' ? job.descriptionKu : locale === 'ar' ? job.descriptionAr : job.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/careers/${job.id}`,
      languages: {
        ku: `/ku/careers/${job.id}`,
        ar: `/ar/careers/${job.id}`,
        en: `/en/careers/${job.id}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/careers/${job.id}`,
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

export default async function JobPage({ params }: JobPageProps) {
  const { locale, id } = await params;
  const job = getJobPostingById(id, locale);

  if (!job) {
    notFound();
  }

  return <JobClient job={job} locale={locale} />;
}
