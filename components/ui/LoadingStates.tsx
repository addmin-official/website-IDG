'use client';
import React from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export function LoadingSpinner({ size = 'md', label }: { 
  size?: 'sm' | 'md' | 'lg'; 
  label?: string;
}) {
  const sizeMap = { sm: 'w-4 h-4', md: 'w-5 h-5', lg: 'w-6 h-6' };
  return (
    <span className="inline-flex items-center gap-2">
      <Loader2 className={`${sizeMap[size]} animate-spin`} />
      {label && <span className="text-sm">{label}</span>}
    </span>
  );
}

export function InlineStatus({ 
  status, 
  loadingLabel = 'Processing...', 
  successLabel = 'Success', 
  errorLabel = 'Error' 
}: {
  status: 'idle' | 'loading' | 'success' | 'error';
  loadingLabel?: string;
  successLabel?: string;
  errorLabel?: string;
}) {
  if (status === 'idle') return null;
  if (status === 'loading') {
    return (
      <div className="flex items-center gap-2 text-amber-400 text-xs">
        <Loader2 className="w-3.5 h-3.5 animate-spin" />
        <span>{loadingLabel}</span>
      </div>
    );
  }
  if (status === 'success') {
    return (
      <div className="flex items-center gap-2 text-emerald-400 text-xs">
        <CheckCircle2 className="w-3.5 h-3.5" />
        <span>{successLabel}</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-2 text-red-400 text-xs">
      <AlertCircle className="w-3.5 h-3.5" />
      <span>{errorLabel}</span>
    </div>
  );
}

export function ProgressBar({ 
  value, 
  max = 100, 
  showLabel = true 
}: { 
  value: number; 
  max?: number; 
  showLabel?: boolean;
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="w-full">
      <div className="h-1.5 bg-[#102447] rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-[#19C7FF] to-[#1D5BD8] transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-[10px] font-mono text-slate-400 mt-1 block">
          {Math.round(pct)}%
        </span>
      )}
    </div>
  );
}
