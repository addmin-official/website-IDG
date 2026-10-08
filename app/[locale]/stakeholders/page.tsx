import React from 'react';
import StakeholdersClient from './stakeholders-client';

export function generateStaticParams() {
  return [{ locale: 'ku' }, { locale: 'ar' }, { locale: 'en' }];
}

export default async function StakeholdersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <StakeholdersClient locale={locale} />;
}
