import React from 'react';
import type { Metadata } from 'next';
import { translations, Language } from '@/lib/translations';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const t = translations[lang] || translations.ku;
  const title = `${t.nav.vision} | ${t.companyName}`;
  const description = t.vision?.subheading || t.tagline;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function VisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
