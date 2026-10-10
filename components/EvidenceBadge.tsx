'use client';

import React from 'react';
import { CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

export type EvidenceStatus = 'verified' | 'pending' | 'source-required';

interface EvidenceBadgeProps {
  status: EvidenceStatus;
  source?: string;
  date?: string;
  lang?: 'ku' | 'ar' | 'en';
  className?: string;
}

const LABELS: Record<EvidenceStatus, Record<string, string>> = {
  verified: { ku: 'سەلمێنراو', ar: 'موثق', en: 'SOURCE VERIFIED' },
  pending: { ku: 'چاوەڕوانی پێداچوونەوە', ar: 'قيد المراجعة', en: 'PENDING REVIEW' },
  'source-required': { ku: 'سەرچاوە پێویستە', ar: 'مصدر مطلوب', en: 'SOURCE REQUIRED' },
};

const STYLES: Record<EvidenceStatus, string> = {
  verified: 'bg-[#052e16] text-[#059669] border-[#059669]/40',
  pending: 'bg-[#451a03] text-[#D97706] border-[#D97706]/40',
  'source-required': 'bg-[#450a0a] text-[#DC2626] border-[#DC2626]/40',
};

export default function EvidenceBadge({
  status,
  source,
  date,
  lang = 'ku',
  className = '',
}: EvidenceBadgeProps) {
  const Icon = status === 'verified' ? CheckCircle2 : status === 'pending' ? Clock : AlertTriangle;
  const label = LABELS[status][lang] || LABELS[status].en;

  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-[10px] font-bold ${STYLES[status]} ${className}`}
      title={source ? `${source}${date ? ' · ' + date : ''}` : label}
    >
      <Icon className="w-3 h-3" />
      <span>{label}</span>
    </span>
  );
}
