'use client';

import React from 'react';

/**
 * IDGLogoIcon — Iraq Digital Gateway simplified icon
 *
 * Optimised for small sizes (favicon 16px → mobile 44px → badge 32px).
 * Visual language matches the full lockup but complexity stripped to
 * only what reads at 16–44px:
 *
 *   ✓  Rounded square background
 *   ✓  Single outer arc (teal gradient)
 *   ✓  Single inner arc (white)
 *   ✓  Apex keystone dot (white)
 *   ✗  No gold bar (unreadable at small sizes)
 *   ✗  No side nodes (unreadable at small sizes)
 *   ✗  No wordmark
 *
 * Props:
 *   size      — pixel size (square, default 44)
 *   className — extra CSS class names
 */

interface IDGLogoIconProps {
  size?: number;
  className?: string;
}

export default function IDGLogoIcon({ size = 44, className = '' }: IDGLogoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="img"
      aria-label="Iraq Digital Gateway"
      className={className}
    >
      <defs>
        {/* Teal gradient — same brand language as full lockup */}
        <linearGradient id="icon-teal-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#18B7B0" />
          <stop offset="100%" stopColor="#087E91" />
        </linearGradient>
      </defs>

      {/* Rounded square background — IDG Surface #0B172E */}
      <rect x="2" y="2" width="96" height="96" rx="20" fill="#0B172E" />

      {/* Outer arc — teal gradient (same stroke-weight ratio as full lockup) */}
      <path
        d="M18 82 V46 C18 27 31 17 50 17 C69 17 82 27 82 46 V82"
        fill="none"
        stroke="url(#icon-teal-grad)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Inner arc — white digital pathway */}
      <path
        d="M34 82 V51 C34 39 41 31 50 31 C59 31 66 39 66 51 V82"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Apex keystone node — white crown of the gateway */}
      <circle cx="50" cy="17" r="5.5" fill="#FFFFFF" />
    </svg>
  );
}
