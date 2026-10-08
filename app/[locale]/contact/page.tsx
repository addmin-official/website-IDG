import React from 'react';
import ContactClient from './contact-client';

export function generateStaticParams() {
  return [{ locale: 'ku' }, { locale: 'ar' }, { locale: 'en' }];
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ContactClient locale={locale} />;
}
