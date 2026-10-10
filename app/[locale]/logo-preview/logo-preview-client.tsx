'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const ContactModal = dynamic(() => import('@/components/ContactModal'), {
  ssr: false,
});

// ─────────────────────────────────────────────────────────────────────────────
// LOGO A — Mesopotamian Gateway (ئارک)
// An arch/gateway motif referencing Iraq's ancient architectural heritage.
// ─────────────────────────────────────────────────────────────────────────────
function LogoGateway({ size = 120 }: { size?: number }) {
  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const archW = s * 0.68;
  const archH = s * 0.52;
  const pillW = s * 0.11;
  const pillH = s * 0.34;
  const archRx = archW / 2;
  const archRy = archH;
  const baseY = cy + s * 0.12;
  const leftX = cx - archW / 2;
  const rightX = cx + archW / 2;
  const pillY = baseY - pillH;

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="IDG Mesopotamian Gateway Logo"
    >
      <defs>
        <linearGradient id="gw-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <linearGradient id="gw-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1D5BD8" />
          <stop offset="100%" stopColor="#102447" />
        </linearGradient>
        <filter id="gw-glow">
          <feGaussianBlur stdDeviation={s * 0.025} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background circle */}
      <circle cx={cx} cy={cy} r={s * 0.47} fill="#0B172E" />
      <circle cx={cx} cy={cy} r={s * 0.47} fill="none" stroke="#193B73" strokeWidth={s * 0.015} />

      {/* Left pillar */}
      <rect
        x={leftX}
        y={pillY}
        width={pillW}
        height={pillH + s * 0.04}
        rx={pillW * 0.2}
        fill="url(#gw-body)"
      />
      {/* Right pillar */}
      <rect
        x={rightX - pillW}
        y={pillY}
        width={pillW}
        height={pillH + s * 0.04}
        rx={pillW * 0.2}
        fill="url(#gw-body)"
      />

      {/* Arch — semi-ellipse stroked path */}
      <path
        d={`M ${leftX + pillW * 0.5} ${pillY}
            A ${archRx - pillW * 0.5} ${archRy} 0 0 1 ${rightX - pillW * 0.5} ${pillY}`}
        stroke="url(#gw-grad)"
        strokeWidth={pillW * 0.9}
        fill="none"
        strokeLinecap="round"
        filter="url(#gw-glow)"
      />

      {/* Keystone diamond */}
      <rect
        x={cx - s * 0.04}
        y={pillY - archH - s * 0.015}
        width={s * 0.08}
        height={s * 0.08}
        rx={s * 0.01}
        fill="#60A5FA"
        transform={`rotate(45 ${cx} ${pillY - archH + s * 0.025})`}
      />

      {/* Baseline / ground line */}
      <rect
        x={leftX - s * 0.02}
        y={baseY}
        width={archW + s * 0.04}
        height={s * 0.018}
        rx={s * 0.009}
        fill="#193B73"
      />

      {/* Horizontal hairline decorators */}
      <line x1={leftX - s * 0.1} y1={cy + s * 0.22} x2={leftX - s * 0.02} y2={cy + s * 0.22} stroke="#1D5BD8" strokeWidth={s * 0.01} strokeLinecap="round" />
      <line x1={rightX + s * 0.02} y1={cy + s * 0.22} x2={rightX + s * 0.1} y2={cy + s * 0.22} stroke="#1D5BD8" strokeWidth={s * 0.01} strokeLinecap="round" />

      {/* IDG lettermark */}
      <text
        x={cx}
        y={baseY + s * 0.13}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#gw-grad)"
        fontSize={s * 0.13}
        fontWeight="800"
        fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
        letterSpacing={s * 0.015}
      >
        IDG
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGO B — Tigris-Euphrates (دوو ڕووبار)
// Two flowing rivers rendered as digital waveforms, carrying data to the sea.
// ─────────────────────────────────────────────────────────────────────────────
function LogoRivers({ size = 120 }: { size?: number }) {
  const s = size;
  const cx = s / 2;
  const cy = s / 2;

  // River path control points (two sinusoidal-like Bezier curves)
  const r1Y = cy - s * 0.08;
  const r2Y = cy + s * 0.08;
  const amp = s * 0.12;
  const startX = s * 0.14;
  const endX = s * 0.86;

  const river1 = `M ${startX} ${r1Y}
    C ${startX + (endX - startX) * 0.3} ${r1Y - amp}
      ${startX + (endX - startX) * 0.7} ${r1Y + amp}
      ${endX} ${r1Y}`;

  const river2 = `M ${startX} ${r2Y}
    C ${startX + (endX - startX) * 0.3} ${r2Y + amp}
      ${startX + (endX - startX) * 0.7} ${r2Y - amp}
      ${endX} ${r2Y}`;

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="IDG Tigris-Euphrates Rivers Logo"
    >
      <defs>
        <linearGradient id="rv-r1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1D5BD8" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1D5BD8" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="rv-r2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="rv-text" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1D5BD8" />
        </linearGradient>
        <filter id="rv-glow">
          <feGaussianBlur stdDeviation={s * 0.02} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background circle */}
      <circle cx={cx} cy={cy} r={s * 0.47} fill="#0B172E" />
      <circle cx={cx} cy={cy} r={s * 0.47} fill="none" stroke="#193B73" strokeWidth={s * 0.015} />

      {/* Digital data dots along river 1 */}
      {[0.2, 0.5, 0.8].map((t, i) => {
        const x = startX + t * (endX - startX);
        // approximate y along cubic bezier at parameter t (simplified)
        const bendY = r1Y + (i === 1 ? 0 : i === 0 ? -amp * 0.5 : amp * 0.5);
        return (
          <circle key={`d1-${i}`} cx={x} cy={bendY} r={s * 0.018} fill="#60A5FA" opacity="0.7" />
        );
      })}

      {/* River 1 — Tigris (brighter, upper) */}
      <path
        d={river1}
        stroke="url(#rv-r1)"
        strokeWidth={s * 0.035}
        strokeLinecap="round"
        filter="url(#rv-glow)"
      />

      {/* River 2 — Euphrates (slightly dimmer, lower) */}
      <path
        d={river2}
        stroke="url(#rv-r2)"
        strokeWidth={s * 0.025}
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Digital data dots along river 2 */}
      {[0.3, 0.65].map((t, i) => {
        const x = startX + t * (endX - startX);
        const bendY = r2Y + (i === 0 ? amp * 0.5 : -amp * 0.5);
        return (
          <circle key={`d2-${i}`} cx={x} cy={bendY} r={s * 0.013} fill="#93C5FD" opacity="0.6" />
        );
      })}

      {/* Source dot left */}
      <circle cx={startX} cy={cy} r={s * 0.025} fill="#1D5BD8" />
      {/* Delta merge dot right */}
      <circle cx={endX} cy={cy} r={s * 0.032} fill="#60A5FA" filter="url(#rv-glow)" />

      {/* IDG text below rivers */}
      <text
        x={cx}
        y={cy + s * 0.3}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#rv-text)"
        fontSize={s * 0.14}
        fontWeight="800"
        fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
        letterSpacing={s * 0.012}
      >
        IDG
      </text>

      {/* Thin separator line above text */}
      <line
        x1={cx - s * 0.18}
        y1={cy + s * 0.2}
        x2={cx + s * 0.18}
        y2={cy + s * 0.2}
        stroke="#193B73"
        strokeWidth={s * 0.008}
      />
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGO C — Sovereign Hexagon (شەشگۆشە)
// A geometric hexagonal emblem — strength, sovereignty, and networked power.
// ─────────────────────────────────────────────────────────────────────────────
function LogoHexagon({ size = 120 }: { size?: number }) {
  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const r = s * 0.42;
  const innerR = s * 0.29;
  const nodeR = s * 0.045;
  const nodeInnerR = s * 0.024;

  // Hexagon points (flat-top orientation)
  const hexPoints = (radius: number) =>
    Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      return { x: cx + radius * Math.cos(angle), y: cy + radius * Math.sin(angle) };
    });

  const outerPts = hexPoints(r);
  const innerPts = hexPoints(innerR);

  const toPolyStr = (pts: { x: number; y: number }[]) =>
    pts.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(' ');

  // Spoke lines from center to each vertex of inner hex
  const spokes = innerPts.map((pt, i) => (
    <line
      key={`spoke-${i}`}
      x1={cx}
      y1={cy}
      x2={pt.x}
      y2={pt.y}
      stroke="#193B73"
      strokeWidth={s * 0.012}
    />
  ));

  // Node circles at inner hex vertices
  const nodes = innerPts.map((pt, i) => (
    <g key={`node-${i}`}>
      <circle cx={pt.x} cy={pt.y} r={nodeR} fill="#102447" stroke="#1D5BD8" strokeWidth={s * 0.012} />
      <circle cx={pt.x} cy={pt.y} r={nodeInnerR} fill="#1D5BD8" opacity="0.7" />
    </g>
  ));

  // Connecting ring lines between adjacent inner nodes
  const connectors = innerPts.map((pt, i) => {
    const next = innerPts[(i + 1) % 6];
    return (
      <line
        key={`conn-${i}`}
        x1={pt.x}
        y1={pt.y}
        x2={next.x}
        y2={next.y}
        stroke="#1D5BD8"
        strokeWidth={s * 0.008}
        opacity="0.5"
      />
    );
  });

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="IDG Sovereign Hexagon Logo"
    >
      <defs>
        <linearGradient id="hx-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1D5BD8" />
          <stop offset="100%" stopColor="#0B172E" />
        </linearGradient>
        <linearGradient id="hx-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1D5BD8" />
        </linearGradient>
        <linearGradient id="hx-text" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F1F5F9" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
        <filter id="hx-glow">
          <feGaussianBlur stdDeviation={s * 0.022} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer hexagon background fill */}
      <polygon
        points={toPolyStr(outerPts)}
        fill="url(#hx-grad)"
        stroke="url(#hx-stroke)"
        strokeWidth={s * 0.022}
        strokeLinejoin="round"
        filter="url(#hx-glow)"
      />

      {/* Spokes + inner connectors + nodes */}
      {spokes}
      {connectors}
      {nodes}

      {/* Center circle */}
      <circle cx={cx} cy={cy} r={s * 0.06} fill="#060D1A" stroke="#60A5FA" strokeWidth={s * 0.012} />
      <circle cx={cx} cy={cy} r={s * 0.03} fill="#60A5FA" />

      {/* IDG lettermark — below the hex emblem */}
      <text
        x={cx}
        y={cy + s * 0.015}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="url(#hx-text)"
        fontSize={s * 0.115}
        fontWeight="900"
        fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
        letterSpacing={s * 0.005}
      >
        IDG
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// LOGO D — Sovereign Shield (درفشی دەولەت) — BONUS
// A vertical kite shield with internal geometric lattice — authority & trust.
// ─────────────────────────────────────────────────────────────────────────────
function LogoShield({ size = 120 }: { size?: number }) {
  const s = size;
  const cx = s / 2;
  const top = s * 0.08;
  const bottom = s * 0.9;
  const halfW = s * 0.34;
  const midY = top + (bottom - top) * 0.55;

  // Shield outline: square top, pointed bottom
  const shieldPath = `
    M ${cx - halfW} ${top + s * 0.06}
    Q ${cx - halfW} ${top} ${cx - halfW + s * 0.06} ${top}
    L ${cx + halfW - s * 0.06} ${top}
    Q ${cx + halfW} ${top} ${cx + halfW} ${top + s * 0.06}
    L ${cx + halfW} ${midY}
    Q ${cx + halfW} ${midY + s * 0.15} ${cx} ${bottom}
    Q ${cx - halfW} ${midY + s * 0.15} ${cx - halfW} ${midY}
    Z
  `;

  return (
    <svg
      width={s}
      height={s}
      viewBox={`0 0 ${s} ${s}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="IDG Sovereign Shield Logo"
    >
      <defs>
        <linearGradient id="sh-fill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0F2A5E" />
          <stop offset="100%" stopColor="#060D1A" />
        </linearGradient>
        <linearGradient id="sh-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1D5BD8" />
        </linearGradient>
        <linearGradient id="sh-bar" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1D5BD8" stopOpacity="0" />
          <stop offset="50%" stopColor="#1D5BD8" />
          <stop offset="100%" stopColor="#1D5BD8" stopOpacity="0" />
        </linearGradient>
        <filter id="sh-glow">
          <feGaussianBlur stdDeviation={s * 0.018} result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <clipPath id="sh-clip">
          <path d={shieldPath} />
        </clipPath>
      </defs>

      {/* Shield body */}
      <path
        d={shieldPath}
        fill="url(#sh-fill)"
        stroke="url(#sh-stroke)"
        strokeWidth={s * 0.025}
        strokeLinejoin="round"
        filter="url(#sh-glow)"
      />

      {/* Inner horizontal bar accent */}
      <rect
        x={cx - halfW + s * 0.04}
        y={top + (midY - top) * 0.48}
        width={(halfW - s * 0.04) * 2}
        height={s * 0.018}
        fill="url(#sh-bar)"
        clipPath="url(#sh-clip)"
      />

      {/* Vertical center line */}
      <line
        x1={cx}
        y1={top + s * 0.05}
        x2={cx}
        y2={top + (midY - top) * 0.42}
        stroke="#193B73"
        strokeWidth={s * 0.01}
        clipPath="url(#sh-clip)"
      />

      {/* IDG text */}
      <text
        x={cx}
        y={top + (bottom - top) * 0.44}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#F1F5F9"
        fontSize={s * 0.185}
        fontWeight="900"
        fontFamily="'Inter', 'Segoe UI', system-ui, sans-serif"
        letterSpacing={s * 0.005}
        clipPath="url(#sh-clip)"
      >
        IDG
      </text>

      {/* Star / asterisk sovereignty mark */}
      <text
        x={cx}
        y={top + (bottom - top) * 0.73}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#60A5FA"
        fontSize={s * 0.09}
        fontFamily="serif"
        opacity="0.7"
        clipPath="url(#sh-clip)"
      >
        ★
      </text>
    </svg>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// PREVIEW PAGE
// ─────────────────────────────────────────────────────────────────────────────
type LogoVariant = {
  id: 'A' | 'B' | 'C' | 'D';
  code: string;
  label: string;
  subLabel: string;
  desc: string;
  Component: React.ComponentType<{ size?: number }>;
  bgNote: string;
};

const VARIANTS: LogoVariant[] = [
  {
    id: 'A',
    code: 'ئارک',
    label: 'Mesopotamian Gateway',
    subLabel: 'درگای مێزۆپۆتامیا',
    desc: 'ئارکی میراتی شارستانیەتی مێزۆپۆتامیا — دەروازەی عێراق بۆ ئایندەی دیجیتاڵ. ستوونی دوو لایەن، ئارکی ڕووناک، و سنگی کلید.',
    Component: LogoGateway,
    bgNote: 'Heritage · Architecture · Digital Future',
  },
  {
    id: 'B',
    code: 'دوو ڕووبار',
    label: 'Tigris-Euphrates',
    subLabel: 'دجلە و فورات',
    desc: 'دوو ڕووباری دیجیتاڵ — دجلە و فورات — ئامادەی گەیاندنی داتا. ئەمپڵیتیودی موجی نیشاندەهەڵی ڕوانگەی تەکنەلۆجیا.',
    Component: LogoRivers,
    bgNote: 'Flow · Data · Connectivity',
  },
  {
    id: 'C',
    code: 'شەشگۆشە',
    label: 'Sovereign Hexagon',
    subLabel: 'شەشگۆشەی دەولەتی',
    desc: 'شەشگۆشەی حوکمرانی — نەتەجەی تەکنەلۆجیا، حوکمرانی، و دەسەڵات. تۆڕی ناوەوەی ڤێرتێکس نیشانی پەیوەندی ئامانجدار.',
    Component: LogoHexagon,
    bgNote: 'Sovereignty · Network · Power',
  },
  {
    id: 'D',
    code: 'درفش',
    label: 'Sovereign Shield',
    subLabel: 'درفشی دەولەت',
    desc: 'درفشی کلاسیکی حوکمرانی — ئینستیتیوتی قووڵ و بووتنی دیجیتاڵی تازە. خەتی ئارامش لەگەڵ بەهێزی دامەزراندن.',
    Component: LogoShield,
    bgNote: 'Authority · Trust · Institution',
  },
];

const SIZES = [40, 72, 120, 180] as const;
const SIZE_LABELS: Record<(typeof SIZES)[number], string> = {
  40: 'Favicon',
  72: 'Mobile',
  120: 'Desktop',
  180: 'Hero',
};

export default function LogoPreviewClient({ locale }: { locale: string }) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selected, setSelected] = useState<'A' | 'B' | 'C' | 'D' | null>(null);
  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      lang={lang}
      className="min-h-screen bg-[#060D1A] text-slate-100 overflow-x-hidden w-full max-w-full"
    >
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => setIsContactOpen(true)} />

      <main id="main-content" className="pt-20">
        {/* ── PAGE HEADER ─────────────────────────────────────── */}
        <section className="border-b border-[#102447] bg-[#0B172E]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="flex items-start gap-3 mb-4">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-[#102447] text-[#60A5FA] border border-[#193B73] shrink-0 mt-1">
                DESIGN DRAFT
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-amber-950/60 text-amber-400 border border-amber-800/50 shrink-0 mt-1">
                INTERNAL REVIEW
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight">
              IDG Logo Concept Preview
            </h1>
            <p className="text-[#94A3B8] text-base md:text-lg max-w-2xl mb-2">
              چوار ڤارییانتی کۆنسێپتی لۆگۆی IDG — Iraq Digital Gateway. یەکێک هەڵبژێرە یان بە دیزاینەر ناردنی Figma بکە.
            </p>
            <p className="text-[#60A5FA] text-sm font-medium">
              Select a variant below → it will be highlighted for production handoff.
            </p>
          </div>
        </section>

        {/* ── VARIANT GRID ────────────────────────────────────── */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {VARIANTS.map((v) => {
                const isSelected = selected === v.id;
                return (
                  <div
                    key={v.id}
                    onClick={() => setSelected(isSelected ? null : v.id)}
                    className={`
                      relative cursor-pointer rounded-2xl border transition-all duration-200
                      ${isSelected
                        ? 'border-[#1D5BD8] shadow-[0_0_0_2px_#1D5BD8,0_0_32px_rgba(29,91,216,0.35)] bg-[#0B172E]'
                        : 'border-[#102447] hover:border-[#193B73] bg-[#0B172E]/70 hover:bg-[#0B172E]'}
                    `}
                  >
                    {/* Selection badge */}
                    {isSelected && (
                      <div className="absolute top-3 end-3 z-10">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold tracking-widest uppercase bg-[#1D5BD8] text-white">
                          ✓ SELECTED
                        </span>
                      </div>
                    )}

                    {/* Variant label pill */}
                    <div className="absolute top-3 start-3 z-10">
                      <span className={`
                        inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold tracking-widest
                        ${isSelected ? 'bg-[#1D5BD8] text-white' : 'bg-[#102447] text-[#60A5FA] border border-[#193B73]'}
                      `}>
                        {v.id}
                      </span>
                    </div>

                    {/* Main logo showcase at 120px */}
                    <div className="pt-14 pb-8 flex flex-col items-center gap-4">
                      <div className="flex items-center justify-center w-36 h-36 rounded-xl bg-[#060D1A] border border-[#102447]">
                        <v.Component size={120} />
                      </div>

                      {/* Size strip */}
                      <div className="flex items-end gap-3">
                        {SIZES.map((sz) => (
                          <div key={sz} className="flex flex-col items-center gap-1.5">
                            <v.Component size={sz} />
                            <span className="text-[9px] text-[#94A3B8] font-medium tracking-wide">
                              {SIZE_LABELS[sz]}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Card info */}
                    <div className="px-5 pb-6 border-t border-[#102447]">
                      <div className="pt-4 mb-2">
                        <h2 className="text-white font-bold text-base leading-tight">
                          {v.label}
                        </h2>
                        <p className="text-[#60A5FA] text-sm font-medium mt-0.5">{v.subLabel} — {v.code}</p>
                      </div>
                      <p className="text-[#94A3B8] text-xs leading-relaxed mb-3">{v.desc}</p>
                      <p className="text-[#193B73] text-[10px] tracking-widest uppercase font-medium border-t border-[#102447] pt-2">
                        {v.bgNote}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── DARK vs LIGHT CONTEXT ───────────────────────────── */}
        <section className="py-12 border-t border-[#102447]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-white mb-8">
              Context Test — Dark / Mid / Nav Background
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {VARIANTS.map((v) => (
                <div key={`ctx-${v.id}`} className="rounded-xl overflow-hidden border border-[#102447]">
                  <div className="flex items-center gap-3 p-4 bg-[#060D1A]">
                    <v.Component size={44} />
                    <div>
                      <p className="text-white text-xs font-bold">Canvas</p>
                      <p className="text-[#94A3B8] text-[10px]">#060D1A</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-[#0B172E]">
                    <v.Component size={44} />
                    <div>
                      <p className="text-white text-xs font-bold">Surface</p>
                      <p className="text-[#94A3B8] text-[10px]">#0B172E</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-[#0B172E]/95 backdrop-blur-md">
                    <v.Component size={44} />
                    <div>
                      <p className="text-white text-xs font-bold">Navbar</p>
                      <p className="text-[#94A3B8] text-[10px]">/95 blur</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-slate-100">
                    <v.Component size={44} />
                    <div>
                      <p className="text-slate-800 text-xs font-bold">Light</p>
                      <p className="text-slate-500 text-[10px]">PDF / Print</p>
                    </div>
                  </div>
                  <div className="p-3 bg-[#102447] text-center">
                    <p className="text-[#60A5FA] text-[10px] font-bold tracking-widest uppercase">
                      Variant {v.id} — {v.code}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SELECTION PANEL ─────────────────────────────────── */}
        <section className="py-12 border-t border-[#102447] bg-[#0B172E]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h2 className="text-xl font-bold text-white mb-1">
                  {selected ? `Variant ${selected} Selected` : 'No Variant Selected Yet'}
                </h2>
                {selected && (
                  <p className="text-[#60A5FA] text-sm">
                    {VARIANTS.find((v) => v.id === selected)?.label} —{' '}
                    {VARIANTS.find((v) => v.id === selected)?.subLabel}
                  </p>
                )}
                {!selected && (
                  <p className="text-[#94A3B8] text-sm">
                    Click a variant card above to select it for production.
                  </p>
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                {VARIANTS.map((v) => (
                  <button
                    key={`btn-${v.id}`}
                    onClick={() => setSelected(selected === v.id ? null : v.id)}
                    className={`
                      px-4 py-2 rounded-lg text-sm font-bold border transition-all duration-150
                      ${selected === v.id
                        ? 'bg-[#1D5BD8] text-white border-[#1D5BD8]'
                        : 'bg-[#102447] text-[#60A5FA] border-[#193B73] hover:border-[#1D5BD8] hover:text-white'}
                    `}
                  >
                    {v.id} — {v.code}
                  </button>
                ))}
              </div>
            </div>

            {selected && (
              <div className="mt-8 p-5 rounded-xl bg-[#0B172E] border border-[#1D5BD8]/40">
                <div className="flex items-center gap-4 mb-4">
                  {(() => {
                    const V = VARIANTS.find((v) => v.id === selected)!;
                    return (
                      <>
                        <V.Component size={72} />
                        <div>
                          <h3 className="text-white font-bold text-lg">{V.label}</h3>
                          <p className="text-[#60A5FA] text-sm">{V.subLabel} — {V.code}</p>
                          <p className="text-[#94A3B8] text-xs mt-1">{V.desc}</p>
                        </div>
                      </>
                    );
                  })()}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-lg bg-[#102447] border border-[#193B73]">
                    <p className="text-[#60A5FA] font-bold mb-1 tracking-wide">NEXT STEP</p>
                    <p className="text-[#CBD5E1]">Export SVG → Figma → Final polish</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#102447] border border-[#193B73]">
                    <p className="text-[#60A5FA] font-bold mb-1 tracking-wide">USAGE</p>
                    <p className="text-[#CBD5E1]">Navbar · Favicon · OG image · Docs</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[#102447] border border-[#193B73]">
                    <p className="text-[#60A5FA] font-bold mb-1 tracking-wide">FORMATS</p>
                    <p className="text-[#CBD5E1]">SVG · PNG 32/64/256/512 · WebP</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ── FOOTER SPACER ───────────────────────────────────── */}
        <div className="py-8 text-center border-t border-[#102447]">
          <p className="text-[#94A3B8] text-xs">
            IDG Logo Design Draft — Internal Review Only — Not for Public Distribution
          </p>
          <Link
            href={`/${lang}`}
            className="inline-flex items-center gap-1.5 mt-3 text-[#60A5FA] text-sm font-medium hover:text-white transition-colors"
          >
            ← {lang === 'ku' ? 'گەڕانەوە بۆ سەرەکی' : lang === 'ar' ? 'العودة إلى الرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </main>

      <Footer t={t} isRtl={isRtl} onOpenContact={() => setIsContactOpen(true)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} t={t} />
    </div>
  );
}
