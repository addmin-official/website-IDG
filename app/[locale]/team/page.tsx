import React from 'react';
import type { Metadata } from 'next';
import TeamClient from './team-client';

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
    ku: 'تیمی سەرکردایەتی و ئەندازیاری | دەروازەی دیجیتاڵیی عێراق (IDG)',
    ar: 'فريق القيادة والكوادر الهندسية | بوابة العراق الرقمية (IDG)',
    en: 'Leadership & Engineering Team | Iraq Digital Gateway (IDG)',
  };

  const descriptions: Record<string, string> = {
    ku: 'سەرکردایەتیی لێهاتوو، تەلارسازانی سیستەم، و پسپۆڕانی ئاسایشی سایبەری لە دەروازەی دیجیتاڵیی عێراق. کادیرێکی نیشتمانی لە پێناو سەروەریی دیجیتاڵی.',
    ar: 'المجلس التنفيذي، معماريو النظم، وخبراء الأمن السيبراني في بوابة العراق الرقمية (IDG). كفاءات وطنية لبناء السيادة التكنولوجية.',
    en: 'Executive leadership, systems architects, and cybersecurity specialists at Iraq Digital Gateway (IDG). National talent building enduring digital sovereignty.',
  };

  const siteUrl = 'https://idggov.tech';

  return {
    title: titles[locale] || titles.ku,
    description: descriptions[locale] || descriptions.ku,
    alternates: {
      canonical: `/${locale}/team`,
      languages: {
        ku: `/ku/team`,
        ar: `/ar/team`,
        en: `/en/team`,
      },
    },
    openGraph: {
      title: titles[locale] || titles.ku,
      description: descriptions[locale] || descriptions.ku,
      url: `${siteUrl}/${locale}/team`,
      type: 'website',
      images: [
        {
          url: '/og-image.svg',
          width: 1200,
          height: 630,
          alt: titles[locale] || titles.ku,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titles[locale] || titles.ku,
      description: descriptions[locale] || descriptions.ku,
    },
  };
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <TeamClient locale={locale} />;
}
