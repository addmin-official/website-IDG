'use client';
import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface ValidatedInputProps {
  value: string;
  onChange: (v: string) => void;
  validate?: (v: string) => string | null;
  placeholder?: string;
  type?: string;
  label?: string;
  required?: boolean;
  showCharCount?: boolean;
  maxLength?: number;
  className?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
  suppressHydrationWarning?: boolean;
}

export function ValidatedInput({
  value,
  onChange,
  validate,
  placeholder,
  type = 'text',
  label,
  required,
  showCharCount,
  maxLength,
  className = '',
  id,
  name,
  autoComplete,
  suppressHydrationWarning,
}: ValidatedInputProps) {
  const [touched, setTouched] = useState(false);
  const error = touched && validate ? validate(value) : null;
  const valid = touched && !error && value.length > 0;

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-xs font-bold text-slate-300 mb-1">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          autoComplete={autoComplete}
          suppressHydrationWarning={suppressHydrationWarning}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setTouched(true)}
          maxLength={maxLength}
          placeholder={placeholder}
          className={`w-full px-3.5 py-2.5 rounded-lg border bg-[#0B172E] text-slate-100 text-sm focus:outline-hidden focus:ring-2 transition-colors ${
            error
              ? 'border-red-500 focus:ring-red-500/30'
              : valid
              ? 'border-emerald-500 focus:ring-emerald-500/30'
              : 'border-[#102447] focus:ring-[#1D5BD8]/30 focus:border-[#1D5BD8]'
          }`}
        />
        {valid && (
          <CheckCircle2 className="absolute end-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400 pointer-events-none" />
        )}
        {error && (
          <AlertCircle className="absolute end-3 top-1/2 -translate-y-1/2 w-4 h-4 text-red-400 pointer-events-none" />
        )}
      </div>
      <div className="flex justify-between items-center mt-1 min-h-[16px]">
        {error ? (
          <span className="text-[11px] text-red-400 font-medium">{error}</span>
        ) : <span />}
        {showCharCount && maxLength && (
          <span
            className={`text-[10px] font-mono ms-auto ${
              value.length > maxLength * 0.9 ? 'text-amber-400' : 'text-slate-500'
            }`}
          >
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
}

interface ValidatedTextareaProps {
  value: string;
  onChange: (v: string) => void;
  validate?: (v: string) => string | null;
  placeholder?: string;
  label?: string;
  required?: boolean;
  showCharCount?: boolean;
  maxLength?: number;
  rows?: number;
  className?: string;
  id?: string;
  name?: string;
  suppressHydrationWarning?: boolean;
}

export function ValidatedTextarea({
  value,
  onChange,
  validate,
  placeholder,
  label,
  required,
  showCharCount,
  maxLength = 500,
  rows = 4,
  className = '',
  id,
  name,
  suppressHydrationWarning,
}: ValidatedTextareaProps) {
  const [touched, setTouched] = useState(false);
  const error = touched && validate ? validate(value) : null;
  const valid = touched && !error && value.length > 0;

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="block text-xs font-bold text-slate-300 mb-1">
          {label} {required && <span className="text-red-400">*</span>}
        </label>
      )}
      <div className="relative">
        <textarea
          id={id}
          name={name}
          rows={rows}
          value={value}
          suppressHydrationWarning={suppressHydrationWarning}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => setTouched(true)}
          maxLength={maxLength}
          placeholder={placeholder}
          className={`w-full px-3.5 py-2.5 rounded-lg border bg-[#0B172E] text-slate-100 text-sm focus:outline-hidden focus:ring-2 transition-colors leading-relaxed ${
            error
              ? 'border-red-500 focus:ring-red-500/30'
              : valid
              ? 'border-emerald-500 focus:ring-emerald-500/30'
              : 'border-[#102447] focus:ring-[#1D5BD8]/30 focus:border-[#1D5BD8]'
          }`}
        />
        {valid && (
          <CheckCircle2 className="absolute end-3 top-3 w-4 h-4 text-emerald-400 pointer-events-none" />
        )}
        {error && (
          <AlertCircle className="absolute end-3 top-3 w-4 h-4 text-red-400 pointer-events-none" />
        )}
      </div>
      <div className="flex justify-between items-center mt-1 min-h-[16px]">
        {error ? (
          <span className="text-[11px] text-red-400 font-medium">{error}</span>
        ) : <span />}
        {showCharCount && maxLength && (
          <span
            className={`text-[10px] font-mono ms-auto ${
              value.length > maxLength * 0.9 ? 'text-amber-400' : 'text-slate-500'
            }`}
          >
            {value.length}/{maxLength}
          </span>
        )}
      </div>
    </div>
  );
}
