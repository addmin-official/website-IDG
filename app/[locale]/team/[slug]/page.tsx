import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MemberClient from './member-client';
import { getTeamMemberBySlug, getAllTeamMemberSlugs } from '@/lib/team-data';

interface MemberPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const locales = ['ku', 'ar', 'en'];
  const baseSlugs = getAllTeamMemberSlugs();

  const params: Array<{ locale: string; slug: string }> = [];

  for (const locale of locales) {
    for (const slug of baseSlugs) {
      // Base slug
      params.push({ locale, slug });
      // Localized slug suffix (e.g., mustafa-jalal-ku)
      params.push({ locale, slug: `${slug}-${locale}` });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: MemberPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const member = getTeamMemberBySlug(slug, locale);

  if (!member) {
    return {
      title: 'Member Not Found | IDG',
    };
  }

  const siteUrl = 'https://idggov.tech';

  const memberName = locale === 'ku' ? member.nameKu || member.name : locale === 'ar' ? member.nameAr || member.name : member.name;
  const memberPosition = locale === 'ku' ? member.positionKu || member.position : locale === 'ar' ? member.positionAr || member.position : member.position;
  const memberBio = locale === 'ku' ? member.bioKu || member.bio : locale === 'ar' ? member.bioAr || member.bio : member.bio;

  const title = `${memberName} — ${memberPosition} | IDG`;
  const description = `${memberName}: ${memberBio}`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/team/${member.slug}`,
      languages: {
        ku: `/ku/team/${member.slug}`,
        ar: `/ar/team/${member.slug}`,
        en: `/en/team/${member.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}/${locale}/team/${member.slug}`,
      type: 'profile',
      images: [
        {
          url: member.image || '/og-image.svg',
          width: 800,
          height: 800,
          alt: member.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { locale, slug } = await params;
  const member = getTeamMemberBySlug(slug, locale);

  if (!member) {
    notFound();
  }

  return <MemberClient member={member} locale={locale} />;
}
