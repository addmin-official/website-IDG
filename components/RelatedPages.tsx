'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';

export interface RelatedPage {
  href: string;
  title: string;
  description: string;
}

export interface RelatedPagesProps {
  pages: RelatedPage[];
  className?: string;
}

export default function RelatedPages({ pages, className = '' }: RelatedPagesProps) {
  const { lang, isRtl } = useLocale();
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className={`py-12 border-t border-[#102447] ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-lg font-bold text-slate-200 mb-6">
          {lang === 'ku'
            ? 'لاپەڕە پەیوەندیدارەکان'
            : lang === 'ar'
            ? 'الصفحات ذات الصلة'
            : 'Related Pages'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {pages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="group p-5 bg-[#0B172E] border border-[#102447] hover:border-[#1D5BD8]/60 rounded-xl transition-all flex flex-col justify-between"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="text-slate-100 font-bold group-hover:text-[#60A5FA] transition-colors">
                  {page.title}
                </div>
                <Arrow className="w-4 h-4 text-[#60A5FA] shrink-0 group-hover:translate-x-0.5 transition-transform mt-1" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {page.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
