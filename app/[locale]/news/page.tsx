import React from 'react';
import type { Metadata } from 'next';
import NewsClient from './news-client';

export const metadata: Metadata = {
  title: 'News - IDG',
  description: 'Official announcements and institutional updates from Iraq Digital Gateway',
};

export function generateStaticParams() {
  return [{ locale: 'ku' }, { locale: 'ar' }, { locale: 'en' }];
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <NewsClient locale={locale} />;
}
