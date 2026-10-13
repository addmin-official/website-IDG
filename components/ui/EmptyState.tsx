'use client';

import React from 'react';
import { Search, RotateCcw } from 'lucide-react';

interface EmptyStateProps {
  icon?: React.ComponentType<{ className?: string }>;
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export function EmptyState({
  icon: Icon = Search,
  title = 'هیچ ئەنجامێک نەدۆزرایەوە',
  description = 'تکایە وشەی گەڕانەکەت بگۆڕە یان فلتەرەکان پاک بکەرەوە بۆ بینینی ئەنجام.',
  actionLabel = 'سڕینەوەی فلتەرەکان',
  onAction,
  className = '',
}: EmptyStateProps) {
  return (
    <div
      className={`text-center py-12 sm:py-16 px-4 bg-[#0B172E]/40 border border-[#102447] rounded-2xl ${className}`}
      role="status"
    >
      <div className="w-16 h-16 bg-[#102447] border border-[#1D5BD8]/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#60A5FA]">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-lg font-bold text-slate-100 mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-400 max-w-md mx-auto mb-6 leading-relaxed">
        {description}
      </p>
      {onAction && (
        <button
          type="button"
          onClick={onAction}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#102447] hover:bg-[#193B73] text-slate-200 text-xs sm:text-sm font-semibold rounded-lg border border-[#1D5BD8]/30 transition-colors cursor-pointer"
        >
          <RotateCcw className="w-4 h-4 text-[#60A5FA]" />
          <span>{actionLabel}</span>
        </button>
      )}
    </div>
  );
}

export default EmptyState;
