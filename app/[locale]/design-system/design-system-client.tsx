'use client';

import React, { useState } from 'react';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import SovereignBadge from '@/components/SovereignBadge';
import EvidenceBadge from '@/components/EvidenceBadge';
import { ValidatedInput, ValidatedTextarea } from '@/components/ui/ValidatedInput';
import { HelpIcon } from '@/components/ui/Tooltip';
import {
  ShieldCheck,
  Scale,
  Building2,
  Database,
  Network,
  TreePine,
  GraduationCap,
  Lock,
  Mail,
  Send,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Sparkles,
  Search,
  FileCheck,
  Globe,
} from 'lucide-react';

export default function DesignSystemClient({ locale }: { locale: string }) {
  const [testInput, setTestInput] = useState('');
  const [testTextarea, setTestTextarea] = useState('');
  const [testSelect, setTestSelect] = useState('option-1');
  const [demoEmail, setDemoEmail] = useState('');
  const [demoMessage, setDemoMessage] = useState('');
  const [btnLoading, setBtnLoading] = useState(false);

  const lang: Language = locale === 'ar' || locale === 'en' ? locale : 'ku';
  const isRtl = lang === 'ku' || lang === 'ar';
  const t = translations[lang] || translations.ku;

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      lang={lang}
      className="min-h-screen bg-[#060D1A] text-slate-100 overflow-x-hidden w-full max-w-full"
    >
      <Navbar lang={lang} onLanguageChange={() => {}} t={t} onOpenContact={() => {}} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 space-y-16">
        <Breadcrumbs
          items={[
            {
              label:
                lang === 'ku'
                  ? 'سیستەمی دیزاین'
                  : lang === 'ar'
                  ? 'نظام التصميم'
                  : 'Design System',
            },
          ]}
        />
        {/* Header Section */}
        <section className="border-b border-[#102447] pb-8 text-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#102447] text-[#60A5FA] border border-[#193B73] rounded-md text-xs font-bold uppercase tracking-wider mb-3">
            IDG Design System • Nielsen #4 Standards
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
            {lang === 'ku'
              ? 'سیستەمی دیزاین و ستانداردەکان'
              : lang === 'ar'
              ? 'نظام التصميم والمعايير الموحدة'
              : 'IDG Sovereign Design System'}
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            {lang === 'ku'
              ? 'بەڵگەنامەی فەرمی بۆ تەواوی تۆکنەکانی ڕەنگ، پلەبەندی نوسین، دوگمە، کاردەکان، باجەکان، فۆڕم و ئایکۆنەکانی پلاتفۆرمەکە بەپێی ستانداردە جیهانییەکان.'
              : lang === 'ar'
              ? 'المرجع الرسمي الشامل لجميع عناصر الواجهة: رموز الألوان، مقاييس الخطوط، الأزرار، البطاقات، الشارات، حقول الإدخال، والأيقونات الموحدة.'
              : 'The canonical institutional reference for all UI tokens, typography scales, buttons, cards, badges, inputs, and icon conventions across IDG.'}
          </p>
        </section>

        {/* 1. Color Tokens Palette */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#102447] pb-3">
            <Sparkles className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">1. Color Tokens & Brand System</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card padding="sm" className="space-y-2">
              <div className="h-16 rounded-lg bg-[#060D1A] border border-[#102447] flex items-center justify-center font-mono text-xs text-slate-400">
                #060D1A
              </div>
              <div className="font-bold text-sm text-white">Primary 950 (Canvas)</div>
              <p className="text-xs text-slate-400">Root background canvas for pages.</p>
            </Card>

            <Card padding="sm" className="space-y-2">
              <div className="h-16 rounded-lg bg-[#0B172E] border border-[#102447] flex items-center justify-center font-mono text-xs text-slate-400">
                #0B172E
              </div>
              <div className="font-bold text-sm text-white">Primary 900 (Surface)</div>
              <p className="text-xs text-slate-400">Container, modal, card, & panel surface.</p>
            </Card>

            <Card padding="sm" className="space-y-2">
              <div className="h-16 rounded-lg bg-[#102447] border border-[#193B73] flex items-center justify-center font-mono text-xs text-slate-300">
                #102447
              </div>
              <div className="font-bold text-sm text-white">Primary 800 (Borders)</div>
              <p className="text-xs text-slate-400">Dividers, sub-containers, interactive borders.</p>
            </Card>

            <Card padding="sm" className="space-y-2">
              <div className="h-16 rounded-lg bg-[#1D5BD8] flex items-center justify-center font-mono text-xs text-white">
                #1D5BD8
              </div>
              <div className="font-bold text-sm text-white">Accent 600 (Primary Blue)</div>
              <p className="text-xs text-slate-400">Primary CTAs, focus rings, key highlights.</p>
            </Card>

            <Card padding="sm" className="space-y-2">
              <div className="h-16 rounded-lg bg-[#052e16] border border-[#059669]/40 flex items-center justify-center font-mono text-xs text-[#059669]">
                #059669
              </div>
              <div className="font-bold text-sm text-white">Status Emerald (Success/Active)</div>
              <p className="text-xs text-slate-400">Verified status, active stages, positive metrics.</p>
            </Card>

            <Card padding="sm" className="space-y-2">
              <div className="h-16 rounded-lg bg-[#451a03] border border-[#D97706]/40 flex items-center justify-center font-mono text-xs text-[#D97706]">
                #D97706
              </div>
              <div className="font-bold text-sm text-white">Status Gold (Warning/Pending)</div>
              <p className="text-xs text-slate-400">Pending review, risk analysis, alerts.</p>
            </Card>

            <Card padding="sm" className="space-y-2">
              <div className="h-16 rounded-lg bg-[#450a0a] border border-[#DC2626]/40 flex items-center justify-center font-mono text-xs text-[#DC2626]">
                #DC2626
              </div>
              <div className="font-bold text-sm text-white">Status Crimson (Error/Critical)</div>
              <p className="text-xs text-slate-400">Errors, validation alerts, source required.</p>
            </Card>

            <Card padding="sm" className="space-y-2">
              <div className="h-16 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center font-mono text-xs text-slate-300">
                #334155
              </div>
              <div className="font-bold text-sm text-white">Neutral Slate (Secondary)</div>
              <p className="text-xs text-slate-400">Subtle badges, metadata, secondary elements.</p>
            </Card>
          </div>
        </section>

        {/* 2. Typography Scale */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#102447] pb-3">
            <Scale className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">2. Typography Scale (Tailwind Canonical)</h2>
          </div>

          <Card padding="md" className="space-y-6 divide-y divide-[#102447]">
            <div className="pt-2 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <span className="font-mono text-xs text-slate-400">H1 · text-4xl / text-5xl · font-black</span>
              <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                Sovereign Digital Architecture (IDG)
              </span>
            </div>

            <div className="pt-4 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <span className="font-mono text-xs text-slate-400">H2 · text-2xl / text-3xl · font-bold</span>
              <span className="text-2xl sm:text-3xl font-bold text-white">
                National Single Window & Trade Corridors
              </span>
            </div>

            <div className="pt-4 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <span className="font-mono text-xs text-slate-400">H3 · text-xl / text-2xl · font-bold</span>
              <span className="text-xl sm:text-2xl font-bold text-slate-100">
                Applied AI Tuning in Kurdish and Arabic
              </span>
            </div>

            <div className="pt-4 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <span className="font-mono text-xs text-slate-400">Body · text-base · font-normal</span>
              <span className="text-base font-normal text-slate-300 max-w-xl">
                Transforming institutional fragmentation into dependable digital capabilities for Iraq through strict governance and data sovereignty.
              </span>
            </div>

            <div className="pt-4 flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <span className="font-mono text-xs text-slate-400">Small / Meta · text-xs / text-sm · font-medium</span>
              <span className="text-xs sm:text-sm font-medium text-slate-400">
                ISO-27001 Certified · In-Country Sovereign Data Hosting · Erbil Node 01
              </span>
            </div>
          </Card>
        </section>

        {/* 3. Button Component Showcase */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#102447] pb-3">
            <Send className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">3. Standard Button Component (`Button.tsx`)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card padding="md" className="space-y-4">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Button Variants</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary">Primary CTA</Button>
                <Button variant="secondary">Secondary Action</Button>
                <Button variant="ghost">Ghost Action</Button>
                <Button variant="danger">Danger Action</Button>
              </div>
            </Card>

            <Card padding="md" className="space-y-4">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Button Sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" size="sm">Small (sm)</Button>
                <Button variant="primary" size="md">Medium (md)</Button>
                <Button variant="primary" size="lg">Large (lg)</Button>
              </div>
            </Card>

            <Card padding="md" className="space-y-4">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Icon Positioning</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" icon={<Mail className="w-4 h-4" />} iconPosition="start">
                  Start Icon
                </Button>
                <Button variant="secondary" icon={<ArrowIcon className="w-4 h-4" />} iconPosition="end">
                  End Icon
                </Button>
              </div>
            </Card>

            <Card padding="md" className="space-y-4">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Interactive States</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="primary"
                  loading={btnLoading}
                  onClick={() => {
                    setBtnLoading(true);
                    setTimeout(() => setBtnLoading(false), 1500);
                  }}
                >
                  {btnLoading ? 'Processing...' : 'Click to Load'}
                </Button>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* 4. Card Component Showcase */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#102447] pb-3">
            <Building2 className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">4. Standard Card Component (`Card.tsx`)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="default" padding="md">
              <div className="font-bold text-white text-base mb-1">Default Card</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Standard background (#0B172E) and border (#102447). Used for lists and information sections.
              </p>
            </Card>

            <Card variant="elevated" padding="md">
              <div className="font-bold text-white text-base mb-1">Elevated Card</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Includes drop shadow and high contrast. Used for modals, floating dialogs, and emphasized metrics.
              </p>
            </Card>

            <Card variant="outlined" padding="md">
              <div className="font-bold text-white text-base mb-1">Outlined Card</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Transparent fill with accent border (#1D5BD8/40). Used for highlighted callouts.
              </p>
            </Card>
          </div>
        </section>

        {/* 5. Badge Component Showcase */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#102447] pb-3">
            <ShieldCheck className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">5. Unified Badges (`Badge.tsx` & `SovereignBadge.tsx`)</h2>
          </div>

          <Card padding="md" className="space-y-6">
            <div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Sovereign Badges by Variant</div>
              <div className="flex flex-wrap items-center gap-3">
                <SovereignBadge label="Primary Authority" variant="primary" size="md" />
                <SovereignBadge label="Verified / Active" variant="emerald" size="md" />
                <SovereignBadge label="Under Review" variant="gold" size="md" />
                <SovereignBadge label="Source Required" variant="crimson" size="md" />
                <SovereignBadge label="Neutral Classification" variant="neutral" size="md" />
              </div>
            </div>

            <div className="pt-4 border-t border-[#102447]">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Evidence Verification Badges</div>
              <div className="flex flex-wrap items-center gap-4">
                <EvidenceBadge status="verified" lang={lang} />
                <EvidenceBadge status="pending" lang={lang} />
                <EvidenceBadge status="source-required" lang={lang} />
              </div>
            </div>
          </Card>
        </section>

        {/* 6. Form Inputs Showcase */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#102447] pb-3">
            <CheckCircle2 className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">6. Standard Form Inputs (`.input-base` & Validated)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card padding="md" className="space-y-4">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Raw Input Elements (`.input-base`)</h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Standard Text Field</label>
                  <input
                    type="text"
                    value={testInput}
                    onChange={(e) => setTestInput(e.target.value)}
                    placeholder="Enter institutional inquiry..."
                    className="input-base"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Standard Select Dropdown</label>
                  <select
                    value={testSelect}
                    onChange={(e) => setTestSelect(e.target.value)}
                    className="input-base cursor-pointer"
                  >
                    <option value="option-1">Strategic Partnership (PPP)</option>
                    <option value="option-2">Iraq NSW Integration</option>
                    <option value="option-3">AI Gate Enterprise Deployment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">Standard Textarea</label>
                  <textarea
                    rows={3}
                    value={testTextarea}
                    onChange={(e) => setTestTextarea(e.target.value)}
                    placeholder="Document institutional scope..."
                    className="input-base"
                  />
                </div>
              </div>
            </Card>

            <Card padding="md" className="space-y-4">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider">Real-Time Validated Inputs</h3>

              <div className="space-y-4">
                <ValidatedInput
                  id="demo-email"
                  name="demoEmail"
                  type="email"
                  value={demoEmail}
                  onChange={setDemoEmail}
                  label="Institutional Email"
                  helperTooltip="Must be official domain e.g. name@institution.gov.iq"
                  required
                  placeholder="name@ministry.gov.iq"
                  validate={(v) => (!v.includes('@') ? 'Enter a valid institutional email' : null)}
                />

                <ValidatedTextarea
                  id="demo-message"
                  name="demoMessage"
                  value={demoMessage}
                  onChange={setDemoMessage}
                  label="Statement of Purpose"
                  required
                  rows={3}
                  maxLength={200}
                  showCharCount
                  placeholder="Describe verified field requirements..."
                  validate={(v) => (v.length < 10 ? 'Minimum 10 characters required' : null)}
                />
              </div>
            </Card>
          </div>
        </section>

        {/* 7. Icon Scale Showcase */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 border-b border-[#102447] pb-3">
            <Globe className="w-5 h-5 text-blue-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-white">7. Standard Lucide Icon Scale</h2>
          </div>

          <Card padding="md" className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
            <div className="p-4 rounded-lg bg-[#060D1A] border border-[#102447] flex flex-col items-center justify-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-mono text-xs text-slate-400">Small (w-3.5 h-3.5)</span>
              <span className="text-[10px] text-slate-500">Metadata & Inline Pills</span>
            </div>

            <div className="p-4 rounded-lg bg-[#060D1A] border border-[#102447] flex flex-col items-center justify-center gap-2">
              <Database className="w-4 h-4 text-emerald-400" />
              <span className="font-mono text-xs text-slate-400">Default (w-4 h-4)</span>
              <span className="text-[10px] text-slate-500">Body & Form Fields</span>
            </div>

            <div className="p-4 rounded-lg bg-[#060D1A] border border-[#102447] flex flex-col items-center justify-center gap-2">
              <Lock className="w-5 h-5 text-purple-400" />
              <span className="font-mono text-xs text-slate-400">Medium (w-5 h-5)</span>
              <span className="text-[10px] text-slate-500">Buttons & Modals</span>
            </div>

            <div className="p-4 rounded-lg bg-[#060D1A] border border-[#102447] flex flex-col items-center justify-center gap-2">
              <Building2 className="w-6 h-6 text-amber-400" />
              <span className="font-mono text-xs text-slate-400">Large (w-6 h-6)</span>
              <span className="text-[10px] text-slate-500">Section Headers</span>
            </div>

            <div className="p-4 rounded-lg bg-[#060D1A] border border-[#102447] flex flex-col items-center justify-center gap-2">
              <Network className="w-8 h-8 text-sky-400" />
              <span className="font-mono text-xs text-slate-400">XL (w-8 h-8)</span>
              <span className="text-[10px] text-slate-500">Hero & Major Feature</span>
            </div>
          </Card>
        </section>
      </main>

      <Footer t={t} isRtl={isRtl} onOpenContact={() => {}} />
    </div>
  );
}
