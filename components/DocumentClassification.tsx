'use client';

import React from 'react';
import { Lock, ShieldCheck, ShieldAlert, LucideIcon } from 'lucide-react';

export type ClassificationLevel = 'public' | 'official' | 'restricted';

interface DocumentClassificationProps {
  level: ClassificationLevel;
  lang?: 'ku' | 'ar' | 'en';
  className?: string;
}

const LABELS: Record<ClassificationLevel, Record<string, string>> = {
  public: { ku: 'گشتی', ar: 'عام', en: 'PUBLIC SOVEREIGN' },
  official: { ku: 'فەرمی', ar: 'رسمي', en: 'OFFICIAL USE' },
  restricted: { ku: 'سنووردار', ar: 'مقيد', en: 'RESTRICTED' },
};

const STYLES: Record<ClassificationLevel, string> = {
  public: 'bg-blue-950 text-blue-300 border-blue-800',
  official: 'bg-amber-950 text-amber-300 border-amber-800',
  restricted: 'bg-red-950 text-red-300 border-red-800',
};

const ICONS: Record<ClassificationLevel, LucideIcon> = {
  public: ShieldCheck,
  official: Lock,
  restricted: ShieldAlert,
};

export default function DocumentClassification({
  level,
  lang = 'ku',
  className = '',
}: DocumentClassificationProps) {
  const Icon = ICONS[level];
  const label = LABELS[level][lang] || LABELS[level].en;

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase tracking-wider ${STYLES[level]} ${className}`}>
      <Icon className="w-3 h-3" />
      <span>{label}</span>
    </span>
  );
}
