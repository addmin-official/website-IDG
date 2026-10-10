import React from 'react';

type BadgeVariant = 'primary' | 'emerald' | 'gold' | 'crimson' | 'neutral';

interface SovereignBadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
}

const variantMap: Record<BadgeVariant, string> = {
  primary: 'bg-[#102447] text-[#60A5FA] border-[#1D5BD8]/40',
  emerald: 'bg-[#052e16] text-[#059669] border-[#059669]/40',
  gold: 'bg-[#451a03] text-[#D97706] border-[#D97706]/40',
  crimson: 'bg-[#450a0a] text-[#DC2626] border-[#DC2626]/40',
  neutral: 'bg-slate-800 text-slate-300 border-slate-700',
};

const sizeMap = {
  sm: 'text-[10px] px-2 py-0.5',
  md: 'text-[11px] px-2.5 py-1',
};

export default function SovereignBadge({ label, variant = 'primary', size = 'sm' }: SovereignBadgeProps) {
  return (
    <span className={`inline-flex items-center font-semibold rounded border ${variantMap[variant]} ${sizeMap[size]} tracking-wide`}>
      {label}
    </span>
  );
}
