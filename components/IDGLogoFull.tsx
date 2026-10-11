'use client';

import React from 'react';

/**
 * IDGLogoFull — Iraq Digital Gateway full lockup logo
 *
 * Refined from original SVG design:
 *   • Teal gradient retained (#18B7B0 → #087E91) — distinctive brand colour
 *   • Gold bar/nodes changed to Blueprint Status Gold #D97706
 *   • Wordmark text changed to IDG dark-theme palette
 *   • Font changed from Arial to Inter, system-ui
 *   • Icon background aligned to IDG Surface colour #0B172E
 *
 * Props:
 *   width    — rendered pixel width  (default: 280)
 *   height   — rendered pixel height (default: auto from width + aspect ratio)
 *   variant  — 'full' shows descriptor line | 'compact' hides it
 *   className — extra CSS class names
 */

interface IDGLogoFullProps {
  width?: number;
  height?: number;
  variant?: 'full' | 'compact';
  className?: string;
}

const VIEWBOX_W = 560;
const VIEWBOX_H_FULL = 160;
const VIEWBOX_H_COMPACT = 115; // clips descriptor, preserves wordmark + icon

export default function IDGLogoFull({
  width = 280,
  height,
  variant = 'full',
  className = '',
}: IDGLogoFullProps) {
  const vbH = variant === 'full' ? VIEWBOX_H_FULL : VIEWBOX_H_COMPACT;
  const computedHeight = height ?? Math.round(width * (vbH / VIEWBOX_W));
  const viewBox = `0 0 ${VIEWBOX_W} ${vbH}`;

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
        {/* Teal brand gradient — retained as distinctive IDG identity colour */}
        <linearGradient id="idg-teal-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#18B7B0" />
          <stop offset="100%" stopColor="#087E91" />
        </linearGradient>
      </defs>

      {/* ── ICON ─────────────────────────────────────────────────── */}

      {/* Icon background — IDG Surface #0B172E (Blueprint aligned) */}
      <rect x="12" y="12" width="136" height="136" rx="28" fill="#0B172E" />

      {/* Outer gateway arc — teal gradient */}
      <path
        d="M43 119 V70 C43 45 59 31 80 31 C101 31 117 45 117 70 V119"
        fill="none"
        stroke="url(#idg-teal-grad)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Inner gateway / digital pathway — white */}
      <path
        d="M62 119 V75 C62 62 69 54 80 54 C91 54 98 62 98 75 V119"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* National signal bar — Status Gold #D97706 (Blueprint aligned) */}
      <path
        d="M53 95 H107"
        fill="none"
        stroke="#D97706"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Digital nodes */}
      {/* Left & right nodes — Status Gold */}
      <circle cx="43" cy="70" r="6" fill="#D97706" />
      <circle cx="117" cy="70" r="6" fill="#D97706" />
      {/* Apex node — white (gateway crown) */}
      <circle cx="80" cy="31" r="6" fill="#FFFFFF" />
      {/* Base node — teal (data output) */}
      <circle cx="80" cy="119" r="6" fill="#18B7B0" />

      {/* ── WORDMARK ─────────────────────────────────────────────── */}

      {/* "IRAQ DIGITAL" — IDG primary text #F1F5F9 */}
      <text
        x="174"
        y="66"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="34"
        fontWeight="800"
        letterSpacing="1.5"
        fill="#F1F5F9"
      >
        IRAQ DIGITAL
      </text>

      {/* "GATEWAY" — teal accent (Accent Teal #18B7B0) */}
      <text
        x="174"
        y="103"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="34"
        fontWeight="800"
        letterSpacing="1.5"
        fill="#18B7B0"
      >
        GATEWAY
      </text>

      {/* ── DESCRIPTOR — full variant only ───────────────────────── */}
      {variant === 'full' && (
        <>
          {/* Accent line — Status Gold */}
          <path
            d="M176 119 H218"
            stroke="#D97706"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Tagline */}
          <text
            x="228"
            y="124"
            fontFamily="Inter, system-ui, sans-serif"
            fontSize="11"
            fontWeight="600"
            letterSpacing="2.1"
            fill="#64748B"
          >
            CONNECT • SECURE • EMPOWER
          </text>
        </>
      )}
    </svg>
  );
}
