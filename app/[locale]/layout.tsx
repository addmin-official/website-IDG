import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LocaleProvider } from '@/lib/locale-context';
import { isValidLocale } from '@/lib/locale-utils';
import { Language } from '@/lib/translations';
import { generatePageMetadata, generateStructuredOrganization } from '@/lib/seo-config';

import { OfflineDetector } from '@/components/OfflineDetector';
import KeyboardShortcuts from '@/components/KeyboardShortcuts';
import CommandPalette from '@/components/CommandPalette';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};

  return generatePageMetadata({
    locale: locale as Language,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const orgSchema = generateStructuredOrganization(locale as Language);

  return (
    <LocaleProvider lang={locale as Language}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <KeyboardShortcuts />
      <CommandPalette />
      {children}
      <OfflineDetector />
    </LocaleProvider>
  );
}
