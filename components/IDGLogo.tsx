'use client';

import React from 'react';
import IDGLogoIcon from './IDGLogoIcon';
import IDGLogoFull from './IDGLogoFull';

interface IDGLogoProps {
  variant?: 'icon' | 'full' | 'compact';
  size?: number;
  width?: number;
  height?: number;
  className?: string;
}

export default function IDGLogo({
  variant = 'icon',
  size = 40,
  width,
  height,
  className = '',
}: IDGLogoProps) {
  if (variant === 'icon') {
    return <IDGLogoIcon size={size} className={className} />;
  }

  return (
    <IDGLogoFull
      width={width ?? size}
      height={height}
      variant={variant === 'compact' ? 'compact' : 'full'}
      className={className}
    />
  );
}
