'use client';
import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'start' | 'end';
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-[#1D5BD8] hover:bg-[#193B73] text-white border border-[#1D5BD8]/40 shadow-sm',
  secondary: 'bg-[#102447] hover:bg-[#193B73] text-slate-200 border border-[#102447]',
  ghost: 'bg-transparent hover:bg-[#102447] text-slate-300 border border-transparent',
  danger: 'bg-[#DC2626]/10 hover:bg-[#DC2626]/20 text-[#DC2626] border border-[#DC2626]/40',
};

const SIZES: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs rounded-lg gap-1.5',
  md: 'px-5 py-2.5 text-sm rounded-lg gap-2',
  lg: 'px-6 py-3 text-base rounded-xl gap-2.5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  icon,
  iconPosition = 'start',
  children,
  disabled,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-[#1D5BD8]/40 disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <button
      className={`${base} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
      )}
      {!loading && icon && iconPosition === 'start' && icon}
      {children}
      {!loading && icon && iconPosition === 'end' && icon}
    </button>
  );
}
