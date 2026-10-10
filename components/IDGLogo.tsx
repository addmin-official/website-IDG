'use client';

import React from 'react';

type LogoVariant = 'icon' | 'horizontal' | 'square';

interface IDGLogoProps {
  variant?: LogoVariant;
  size?: number;
  className?: string;
  alt?: string;
}

export default function IDGLogo({
  variant = 'horizontal',
  size,
  className = '',
  alt = 'Iraq Digital Gateway',
}: IDGLogoProps) {
  const gradientId = `idg-grad-${variant}`;

  // Icon Only (Favicon, mobile)
  if (variant === 'icon') {
    const dim = size ?? 44;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={dim}
        height={dim}
        className={className}
        role="img"
        aria-label={alt}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#19C7FF" />
            <stop offset="100%" stopColor="#087BFF" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="22" fill="#06172B" />
        <path
          d="M 22 76 L 22 48 Q 22 22 50 22 Q 78 22 78 48 L 78 76"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="9"
          strokeLinecap="round"
        />
        <circle cx="50" cy="22" r="5.5" fill="#19C7FF" />
      </svg>
    );
  }

  // Horizontal (Navbar)
  if (variant === 'horizontal') {
    const dim = size ?? 60;
    const width = dim * (460 / 120);
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 460 120"
        width={width}
        height={dim}
        className={className}
        role="img"
        aria-label={alt}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#19C7FF" />
            <stop offset="100%" stopColor="#087BFF" />
          </linearGradient>
        </defs>
        <rect width="460" height="120" rx="18" fill="#06172B" />
        <g transform="translate(24 20)">
          <path
            d="M 6 74 L 6 42 Q 6 6 40 6 Q 74 6 74 42 L 74 74"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="40" cy="6" r="5" fill="#19C7FF" />
        </g>
        <text
          x="130"
          y="62"
          textAnchor="start"
          fontFamily="Inter, system-ui, -apple-system, sans-serif"
          fontSize="52"
          fontWeight="900"
          letterSpacing="3"
          fill="#FFFFFF"
        >
          IDG
        </text>
        <rect
          x="132"
          y="72"
          width="70"
          height="3"
          rx="1.5"
          fill={`url(#${gradientId})`}
        />
        <text
          x="132"
          y="95"
          textAnchor="start"
          fontFamily="Inter, system-ui, -apple-system, sans-serif"
          fontSize="9.5"
          fontWeight="600"
          letterSpacing="2.8"
          fill="#D7E8F8"
        >
          IRAQ DIGITAL GATEWAY
        </text>
      </svg>
    );
  }

  // Square (Footer, Print, Pitch)
  const dim = size ?? 200;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      width={dim}
      height={dim}
      className={className}
      role="img"
      aria-label={alt}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#19C7FF" />
          <stop offset="100%" stopColor="#087BFF" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" rx="52" fill="#06172B" />
      <g transform="translate(150 55)">
        <path
          d="M 6 145 L 6 78 Q 6 6 50 6 Q 94 6 94 78 L 94 145"
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth="14"
          strokeLinecap="round"
        />
        <circle cx="50" cy="6" r="9" fill="#19C7FF" />
      </g>
      <text
        x="200"
        y="300"
        textAnchor="middle"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontSize="82"
        fontWeight="900"
        letterSpacing="5"
        fill="#FFFFFF"
      >
        IDG
      </text>
      <rect
        x="155"
        y="318"
        width="90"
        height="5"
        rx="2.5"
        fill={`url(#${gradientId})`}
      />
      <text
        x="200"
        y="350"
        textAnchor="middle"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontSize="11"
        fontWeight="600"
        letterSpacing="3.5"
        fill="#D7E8F8"
      >
        IRAQ DIGITAL GATEWAY
      </text>
    </svg>
  );
}
