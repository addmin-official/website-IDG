'use client';

import React, { useState } from 'react';
import { HelpCircle } from 'lucide-react';

interface TooltipProps {
  content: string;
  children?: React.ReactNode;
  position?: 'top' | 'bottom' | 'start' | 'end';
  className?: string;
}

export function Tooltip({
  content,
  children,
  position = 'top',
  className = '',
}: TooltipProps) {
  const [show, setShow] = useState(false);

  const posMap = {
    top: 'bottom-full start-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full start-1/2 -translate-x-1/2 mt-2',
    start: 'end-full top-1/2 -translate-y-1/2 me-2',
    end: 'start-full top-1/2 -translate-y-1/2 ms-2',
  };

  return (
    <span
      className={`relative inline-flex items-center ${className}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show && (
        <span
          role="tooltip"
          className={`absolute ${posMap[position]} z-50 w-56 sm:w-64 px-3 py-2 bg-[#102447] border border-[#1D5BD8]/50 rounded-lg shadow-2xl text-xs text-slate-200 leading-relaxed whitespace-normal pointer-events-none transition-all duration-150 animate-in fade-in zoom-in-95`}
        >
          {content}
        </span>
      )}
    </span>
  );
}

export function HelpIcon({
  tooltip,
  position = 'top',
}: {
  tooltip: string;
  position?: 'top' | 'bottom' | 'start' | 'end';
}) {
  return (
    <Tooltip content={tooltip} position={position}>
      <button
        type="button"
        className="inline-flex items-center justify-center w-4 h-4 rounded-full text-slate-400 hover:text-[#60A5FA] focus:text-[#60A5FA] focus:outline-none transition-colors cursor-help"
        aria-label="زانیاری زیاتر / More information"
      >
        <HelpCircle className="w-3.5 h-3.5" />
      </button>
    </Tooltip>
  );
}

export default Tooltip;
