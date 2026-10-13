import React from 'react';
import Badge, { BadgeVariant } from './ui/Badge';

export type { BadgeVariant };

export interface SovereignBadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
  className?: string;
}

export default function SovereignBadge({
  label,
  variant = 'primary',
  size = 'sm',
  className = '',
}: SovereignBadgeProps) {
  return <Badge label={label} variant={variant} size={size === 'md' ? 'md' : 'xs'} className={className} />;
}
