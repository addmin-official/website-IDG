'use client';
import NextLink from 'next/link';
import React from 'react';

export type LinkVariant = 'default' | 'subtle' | 'accent';

export interface LinkProps extends React.ComponentProps<typeof NextLink> {
  variant?: LinkVariant;
}

const VARIANTS: Record<LinkVariant, string> = {
  default: 'text-slate-200 hover:text-white underline-offset-4 hover:underline transition-colors',
  subtle: 'text-slate-400 hover:text-slate-200 transition-colors',
  accent: 'text-[#60A5FA] hover:text-[#19C7FF] font-semibold transition-colors',
};

export default function Link({ variant = 'default', className = '', ...props }: LinkProps) {
  return <NextLink className={`${VARIANTS[variant]} ${className}`} {...props} />;
}
