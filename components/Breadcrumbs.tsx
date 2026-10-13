'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { useLocale } from '@/lib/locale-context';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const { lang, isRtl } = useLocale();
  const Arrow = isRtl ? ChevronLeft : ChevronRight;

  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center flex-wrap gap-1.5 text-xs text-slate-400 mb-6 ${className}`}
    >
      <Link
        href={`/${lang}`}
        className="inline-flex items-center gap-1 hover:text-[#60A5FA] transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>{lang === 'ku' ? 'سەرەکی' : lang === 'ar' ? 'الرئيسية' : 'Home'}</span>
      </Link>

      {items.map((item, idx) => (
        <React.Fragment key={idx}>
          <Arrow className="w-3 h-3 text-slate-600 shrink-0" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-[#60A5FA] transition-colors truncate max-w-[200px]"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-200 font-medium truncate max-w-[200px]">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
