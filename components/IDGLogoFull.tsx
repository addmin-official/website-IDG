'use client';

import React from 'react';

/**
 * IDGLogoFull — Iraq Digital Gateway full lockup logo
 *
 * Blueprint Palette:
 *   #18B7B0 → #60A5FA (Light Blue from Blueprint)
 *   #087E91 → #1D5BD8 (Institutional Blue from Blueprint)
 *   #E5B653 → #D97706 (Status Gold from Blueprint)
 *
 * Supplemental Teal Palette (optional):
 *   #18B7B0 (Accent Teal)
 *   #087E91 (Deep Teal)
 *   #D97706 (Status Gold)
 *
 * Props:
 *   width       — rendered pixel width (default: 280)
 *   height      — rendered pixel height (default: 80 for full, or proportional)
 *   variant     — 'full' (with descriptor) | 'compact' (hides descriptor)
 *   colorScheme — 'blueprint' (default) | 'teal'
 *   theme       — 'dark' (default) | 'light'
 *   className   — extra CSS class names
 */

export interface IDGLogoFullProps {
  width?: number;
  height?: number;
  variant?: 'full' | 'compact';
  colorScheme?: 'blueprint' | 'teal';
  theme?: 'dark' | 'light';
  className?: string;
}

const VIEWBOX_W = 560;
const VIEWBOX_H_FULL = 160;
const VIEWBOX_H_COMPACT = 115;

export default function IDGLogoFull({
  width = 280,
  height,
  variant = 'full',
  colorScheme = 'blueprint',
  theme = 'dark',
  className = '',
}: IDGLogoFullProps) {
  const vbH = variant === 'full' ? VIEWBOX_H_FULL : VIEWBOX_H_COMPACT;
  const computedHeight = height ?? (variant === 'full' ? 80 : Math.round(width * (vbH / VIEWBOX_W)));
  const viewBox = `0 0 ${VIEWBOX_W} ${vbH}`;

  const isBlueprint = colorScheme === 'blueprint';
  const gradStart = isBlueprint ? '#60A5FA' : '#18B7B0';
  const gradEnd = isBlueprint ? '#1D5BD8' : '#087E91';
  const gatewayTextFill = isBlueprint ? '#60A5FA' : '#18B7B0';
  const bottomNodeFill = isBlueprint ? '#60A5FA' : '#18B7B0';

  const goldColor = '#D97706';
  const iraqDigitalFill = theme === 'dark' ? '#F1F5F9' : '#0B1930';
  const descriptorFill = theme === 'dark' ? '#94A3B8' : '#64748B';
  const iconBgFill = theme === 'dark' ? '#0B172E' : '#0B1930';

  // Unique gradient id based on scheme to prevent collision if multiple rendered
  const gradId = `idg-full-grad-${colorScheme}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={computedHeight}
      viewBox={viewBox}
      role="img"
      aria-labelledby="idg-full-title idg-full-desc"
      className={className}
    >
      <title id="idg-full-title">Iraq Digital Gateway</title>
      <desc id="idg-full-desc">
        Corporate logo representing a national digital gateway,
        secure connectivity and intelligent infrastructure.
      </desc>

      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={gradStart} />
          <stop offset="100%" stopColor={gradEnd} />
        </linearGradient>
      </defs>

      {/* ── ICON SHIELD ─────────────────────────────────────────── */}
      <rect x="12" y="12" width="136" height="136" rx="28" fill={iconBgFill} />

      {/* Outer gateway structure */}
      <path
        d="M43 119 V70 C43 45 59 31 80 31 C101 31 117 45 117 70 V119"
        fill="none"
        stroke={`url(#${gradId})`}
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Inner gateway / digital pathway */}
      <path
        d="M62 119 V75 C62 62 69 54 80 54 C91 54 98 62 98 75 V119"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* National gold signal */}
      <path
        d="M53 95 H107"
        fill="none"
        stroke={goldColor}
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Digital nodes */}
      <circle cx="43" cy="70" r="6" fill={goldColor} />
      <circle cx="117" cy="70" r="6" fill={goldColor} />
      <circle cx="80" cy="31" r="6" fill="#FFFFFF" />
      <circle cx="80" cy="119" r="6" fill={bottomNodeFill} />

      {/* ── WORDMARK (Inter font) ───────────────────────────────── */}
      <text
        x="174"
        y="66"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="34"
        fontWeight="800"
        letterSpacing="1.5"
        fill={iraqDigitalFill}
      >
        IRAQ DIGITAL
      </text>

      <text
        x="174"
        y="103"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="34"
        fontWeight="800"
        letterSpacing="1.5"
        fill={gatewayTextFill}
      >
        GATEWAY
      </text>

      {/* ── CORPORATE DESCRIPTOR ─────────────────────────────────── */}
      {variant === 'full' && (
        <>
          <path
            d="M176 119 H218"
            stroke={goldColor}
            strokeWidth="3"
            strokeLinecap="round"
          />

          <text
            x="228"
            y="124"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="11"
            fontWeight="600"
            letterSpacing="2.1"
            fill={descriptorFill}
          >
            CONNECT • SECURE • EMPOWER
          </text>
        </>
      )}
    </svg>
  );
}
