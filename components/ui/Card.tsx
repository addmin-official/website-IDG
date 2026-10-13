'use client';
import React from 'react';

export interface CardProps {
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const VARIANTS = {
  default: 'bg-[#0B172E] border border-[#102447]',
  elevated: 'bg-[#0B172E] border border-[#102447] shadow-lg shadow-black/20',
  outlined: 'bg-transparent border border-[#1D5BD8]/40',
};

const PADDINGS = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export default function Card({ variant = 'default', padding = 'md', children, className = '' }: CardProps) {
  return (
    <div className={`rounded-xl ${VARIANTS[variant]} ${PADDINGS[padding]} ${className}`}>
      {children}
    </div>
  );
}
