import React from 'react';

interface SovereignDividerProps {
  label?: string;
  variant?: 'full' | 'inset';
}

export default function SovereignDivider({ label, variant = 'full' }: SovereignDividerProps) {
  const insetClass = variant === 'inset' ? 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8' : '';
  return (
    <div className={`${insetClass} relative flex items-center gap-4`} role="separator" aria-hidden="true">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#102447] to-transparent" />
      {label && (
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-600 shrink-0 select-none">
          {label}
        </span>
      )}
      {label && (
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[#102447] to-transparent" />
      )}
    </div>
  );
}
