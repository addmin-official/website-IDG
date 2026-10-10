'use client';

import React from 'react';

/**
 * IDGLogoIcon — Iraq Digital Gateway simplified icon
 *
 * Designed for micro-dimensions:
 *   - Favicon (16px)
 *   - Mobile navbar / Small badges (32px – 44px)
 *
 * Elements preserved:
 *   - Rounded square background (rx=20, #0B172E)
 *   - Single outer arc (#60A5FA in blueprint or #18B7B0 in teal)
 *   - Single white inner arc (#FFFFFF)
 *   - Single apex keystone node (#FFFFFF)
 *   - NO gold bar (avoids visual clutter at micro-resolution)
 *   - NO side nodes
 *
 * Props:
 *   size        — pixel width & height (default: 44)
 *   colorScheme — 'blueprint' (default) | 'teal'
 *   className   — extra CSS class names
 */

export interface IDGLogoIconProps {
  size?: number;
  colorScheme?: 'blueprint' | 'teal';
  className?: string;
}

export default function IDGLogoIcon({
  size = 44,
  colorScheme = 'blueprint',
  className = '',
}: IDGLogoIconProps) {
  const isBlueprint = colorScheme === 'blueprint';
  const strokeColor = isBlueprint ? '#60A5FA' : '#18B7B0';
  const gradStart = isBlueprint ? '#60A5FA' : '#18B7B0';
  const gradEnd = isBlueprint ? '#1D5BD8' : '#087E91';
  const gradId = `idg-icon-grad-${colorScheme}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Iraq Digital Gateway Icon"
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={gradStart} />
          <stop offset="100%" stopColor={gradEnd} />
        </linearGradient>
      </defs>

      {/* Rounded square container */}
      <rect x="2" y="2" width="96" height="96" rx="20" fill="#0B172E" />

      {/* Outer arc */}
      <path
        d="M18 82 V46 C18 27 31 17 50 17 C69 17 82 27 82 46 V82"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Inner arc / pathway */}
      <path
        d="M34 82 V51 C34 39 41 31 50 31 C59 31 66 39 66 51 V82"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Single apex keystone node */}
      <circle cx="50" cy="17" r="5.5" fill="#FFFFFF" />
    </svg>
  );
}
