import React from 'react';
import type { Metadata } from 'next';
import InsightsClient from './insights-client';

export const metadata: Metadata = {
  title: 'Insights - IDG',
  description: 'Strategic analysis and digital architecture perspectives from Iraq Digital Gateway',
};

export function generateStaticParams() {
  return [{ locale: 'ku' }, { locale: 'ar' }, { locale: 'en' }];
}

export default async function InsightsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <InsightsClient locale={locale} />;
}
