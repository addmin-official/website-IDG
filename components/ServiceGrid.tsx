'use client';

import React from 'react';
import ServiceCard from '@/components/ServiceCard';
import { SERVICES_LIST } from '@/lib/services-data';
import { Sparkles, Layers } from 'lucide-react';

interface ServiceGridProps {
  locale: string;
  isRtl?: boolean;
}

export default function ServiceGrid({ locale, isRtl = false }: ServiceGridProps) {
  const content = {
    ku: {
      badge: 'پۆرتفۆلیۆی خزمەتگوزارییەکان • Ecosystem Services',
      title: 'شەش پلاتفۆرمی سەرەکی بۆ بنیادنانی ژێرخانی سەروەر',
      subtitle: 'تەلارسازییەکی یەکگرتوو کە پێداویستییە هەستیارەکانی دەوڵەت، کەرتی دارایی و بازرگانی دابین دەکات.',
    },
    ar: {
      badge: 'محفظة الخدمات والمنظومات • Ecosystem Services',
      title: 'ست منظومات استراتيجية لبناء السيادة التكنولوجية',
      subtitle: 'معمارية متكاملة تلبي المتطلبات الحرجة للمؤسسات الحكومية والقطاع المالي والتجاري في العراق.',
    },
    en: {
      badge: 'Ecosystem Portfolio • Flagship Deployments',
      title: 'Six Flagship Sovereign Platforms Powering Modern Iraq',
      subtitle: 'An interconnected architecture meeting the critical mission requirements of state agencies and enterprises.',
    },
  };

  const t = content[locale as 'ku' | 'ar' | 'en'] || content.ku;

  return (
    <section id="services-grid" className="py-16 sm:py-24 bg-[#060D1A] border-b border-[#102447]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#102447]/60 border border-[#193B73] text-xs font-semibold text-[#60A5FA] mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 6 Services Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              locale={locale}
              isRtl={isRtl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
