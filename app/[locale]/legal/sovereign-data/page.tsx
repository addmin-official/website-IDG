import React from 'react';
import SovereignDataClient from './sovereign-data-client';

export function generateStaticParams() {
  return [{ locale: 'ku' }, { locale: 'ar' }, { locale: 'en' }];
}

export default async function SovereignDataPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <SovereignDataClient locale={locale} />;
}
