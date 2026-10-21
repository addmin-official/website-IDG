'use client';
import React from 'react';

export type BadgeVariant = 'primary' | 'emerald' | 'gold' | 'crimson' | 'neutral' | 'subtle';
export type BadgeSize = 'xs' | 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  label?: string;
  className?: string;
}

const VARIANTS: Record<BadgeVariant, string> = {
  primary: 'bg-[#102447] text-[#60A5FA] border-[#1D5BD8]/40',
  emerald: 'bg-[#052e16] text-[#059669] border-[#059669]/40',
  gold: 'bg-[#451a03] text-[#D97706] border-[#D97706]/40',
  crimson: 'bg-[#450a0a] text-[#DC2626] border-[#DC2626]/40',
  neutral: 'bg-slate-800 text-slate-300 border-slate-700',
  subtle: 'bg-slate-900/80 text-slate-400 border-slate-800',
};

const SIZES: Record<BadgeSize, string> = {
  xs: 'text-[10px] px-2 py-0.5 rounded',
  sm: 'text-xs px-2.5 py-0.5 rounded-md',
  md: 'text-xs px-3 py-1 rounded-full',
};

export default function Badge({
  variant = 'primary',
  size = 'sm',
  icon,
  children,
  label,
  className = '',
  ...props
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold border ${VARIANTS[variant]} ${SIZES[size]} tracking-wide ${className}`}
      {...props}
    >
      {icon}
      <bdi>{children || label}</bdi>
    </span>
  );
}
