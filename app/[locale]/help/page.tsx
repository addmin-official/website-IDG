import React from 'react';
import type { Metadata } from 'next';
import HelpClient from './help-client';

export function generateStaticParams() {
  return [{ locale: 'ku' }, { locale: 'ar' }, { locale: 'en' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    ku: 'ناوەندی هاوکاری و بەڵگەنامەکان | دەروازەی دیجیتاڵیی عێراق (IDG)',
    ar: 'مركز المساعدة والوثائق | بوابة العراق الرقمية (IDG)',
    en: 'Help Center & Documentation | Iraq Digital Gateway (IDG)',
  };

  const descriptions: Record<string, string> = {
    ku: 'ڕێبەرەکان، فەرهەنگی زاراوەکان، فێرکارییەکان، و کەناڵەکانی پشتگیریی فەرمیی IDG.',
    ar: 'الأدلة الإرشادية، قاموس المصطلحات، الشروحات وقنوات الدعم الرسمية لبوابة العراق الرقمية.',
    en: 'Official guides, glossary of sovereign terms, tutorials, and institutional support channels.',
  };

  return {
    title: titles[locale] || titles.ku,
    description: descriptions[locale] || descriptions.ku,
  };
}

export default async function HelpPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <HelpClient locale={locale} />;
}
