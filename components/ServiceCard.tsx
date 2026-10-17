'use client';

import React from 'react';
import Link from 'next/link';
import {
  Server,
  ShieldCheck,
  Fingerprint,
  Brain,
  GraduationCap,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from 'lucide-react';
import { ServiceItem } from '@/lib/services-data';

interface ServiceCardProps {
  service: ServiceItem;
  locale: string;
  isRtl?: boolean;
}

const iconMap = {
  Server,
  Shield: ShieldCheck,
  Fingerprint,
  Brain,
  GraduationCap,
  Rocket,
};

export default function ServiceCard({ service, locale, isRtl = false }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Server;
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const langKey = (locale === 'ar' || locale === 'en' ? locale : 'ku') as 'ku' | 'ar' | 'en';

  const title = service.title[langKey];
  const subtitle = service.subtitle[langKey];
  const desc = service.description[langKey];
  const badge = service.badge[langKey];
  const features = service.features[langKey].slice(0, 3);
  const highlights = service.highlights[langKey].slice(0, 2);

  const learnMoreText = {
    ku: 'زانیاریی تەواو و تەلارسازی',
    ar: 'التفاصيل والمعمارية الفنية',
    en: 'Architecture & Specifications',
  }[langKey];

  return (
    <article className="group flex flex-col justify-between bg-[#0B172E] border border-[#102447] hover:border-[#1D5BD8] rounded-3xl p-7 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-[#1D5BD8]/10 hover:-translate-y-1 relative overflow-hidden">
      <div>
        {/* Top Icon & Badge Header */}
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-[#60A5FA] flex items-center justify-center group-hover:scale-105 group-hover:bg-[#2563EB] group-hover:text-white transition-all shadow-md">
            <IconComponent className="w-7 h-7" />
          </div>

          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-[#102447] text-blue-300 border border-[#193B73]">
            {badge}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#60A5FA] transition-colors leading-snug mb-2">
          <Link href={`/${locale}/services/${service.slug}`}>
            {title}
          </Link>
        </h2>

        <p className="text-xs font-semibold text-blue-400 mb-3.5 leading-relaxed">
          {subtitle}
        </p>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-6">
          {desc}
        </p>

        {/* Highlights Pills */}
        <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-[#060D1A] border border-[#102447] mb-6 text-center">
          {highlights.map((h, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[10px] text-slate-400 font-medium">{h.label}</span>
              <span className="text-xs font-bold text-white font-mono mt-0.5">{h.value}</span>
            </div>
          ))}
        </div>

        {/* Key Features List */}
        <ul className="space-y-2 mb-6">
          {features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-[#102447]/80 flex items-center justify-between">
        <Link
          href={`/${locale}/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#60A5FA] group-hover:text-white transition-colors"
        >
          <span>{learnMoreText}</span>
          <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
