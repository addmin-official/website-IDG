import React from 'react';
import LogoPreviewClient from './logo-preview-client';

export function generateStaticParams() {
  return [{ locale: 'ku' }, { locale: 'ar' }, { locale: 'en' }];
}

export default async function LogoPreviewPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <LogoPreviewClient locale={locale} />;
}
