'use client';

import React, { useState } from 'react';
import { TranslationData } from '@/lib/translations';
import { ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

interface GovernanceProps {
  t: TranslationData;
  isRtl: boolean;
}

export default function Governance({ t, isRtl }: GovernanceProps) {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [showCaseStudies, setShowCaseStudies] = useState(true);

  const gov = t.governance;
  const cases = gov.cases || [];
  const currentCase = cases[activeCaseIndex] || cases[0];

  const steps = currentCase
    ? [
        {
          key: 'context',
          label: isRtl ? '١. بارودۆخ (Context)' : '1. Context',
          value: currentCase.context,
          color: 'border-[#102447] bg-[#060D1A] text-slate-200',
          badgeColor: 'bg-[#102447] text-slate-300',
        },
        {
          key: 'evidence',
          label: isRtl ? '٢. بەڵگە (Evidence)' : '2. Evidence',
          value: currentCase.evidence,
          color: 'border-[#193B73] bg-[#060D1A] text-slate-200',
          badgeColor: 'bg-[#102447] text-blue-400',
        },
        {
          key: 'decision',
          label: isRtl ? '٣. بڕیار (Decision)' : '3. Decision',
          value: currentCase.decision,
          color: 'border-[#059669]/40 bg-[#060D1A] text-slate-200 font-medium',
          badgeColor: 'bg-[#052e16] text-[#059669]',
        },
        {
          key: 'impact',
          label: isRtl ? '٤. کاریگەری (Impact)' : '4. Impact',
          value: currentCase.impact,
          color: 'border-[#6366f1]/40 bg-[#060D1A] text-slate-200',
          badgeColor: 'bg-[#1e1b4b] text-indigo-300',
        },
        {
          key: 'risk',
          label: isRtl ? '٥. مەترسی و سنووردارکردن (Risk)' : '5. Risk & Mitigation',
          value: currentCase.risk,
          color: 'border-[#D97706]/40 bg-[#060D1A] text-slate-200',
          badgeColor: 'bg-[#451a03] text-[#D97706]',
        },
        {
          key: 'nextStep',
          label: isRtl ? '٦. هەنگاوی داهاتوو (Next Step)' : '6. Next Step',
          value: currentCase.nextStep,
          color: 'border-[#1D5BD8] bg-[#060D1A] text-slate-100',
          badgeColor: 'bg-[#102447] text-blue-400',
        },
      ]
    : [];

  return (
    <div
      className="bg-[#060D1A] text-slate-100 min-h-screen font-sans w-full overflow-hidden"
      dir={isRtl ? 'rtl' : 'ltr'}
      id="governance-container"
    >
      {/* Hero Section */}
      <section className="bg-[#0B172E] text-white py-12 md:py-20 border-b border-[#102447]" id="governance">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-slate-100"
            id="governance-hero-title"
          >
            {gov.heroTitle}
          </h1>
          <p
            className="text-base md:text-lg text-slate-300 max-w-3xl leading-relaxed"
            id="governance-hero-desc"
          >
            {gov.heroDesc}
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section
        className="py-12 md:py-20 bg-[#060D1A] border-b border-[#102447]"
        id="governance-values-section"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 md:mb-12"
            id="governance-values-title"
          >
            {gov.valuesTitle}
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            id="governance-values-grid"
          >
            {gov.values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#0B172E] rounded-xl border border-[#102447] hover:border-[#1D5BD8] transition"
                id={`gov-value-card-${idx}`}
              >
                <h3 className="text-xl font-bold text-slate-100 mb-3">{val.title}</h3>
                <p className="text-sm md:text-base text-slate-400 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance Architecture Table */}
      <section className="py-12 md:py-20 bg-[#060D1A]" id="governance-architecture-section">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <h2
            className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 md:mb-12"
            id="governance-architecture-title"
          >
            {gov.architectureTitle}
          </h2>

          <div className="overflow-x-auto shadow-xs rounded-xl border border-[#102447] bg-[#0B172E]">
            <table
              className="min-w-full bg-[#0B172E] rounded-xl overflow-hidden"
              id="governance-architecture-table"
            >
              <thead className="bg-[#060D1A] text-slate-200 border-b border-[#102447]">
                <tr>
                  <th
                    className={`py-4 px-6 font-semibold text-sm md:text-base ${
                      isRtl ? 'text-right' : 'text-left'
                    } w-1/5`}
                  >
                    {gov.tableHeaders.domain}
                  </th>
                  <th
                    className={`py-4 px-6 font-semibold text-sm md:text-base ${
                      isRtl ? 'text-right' : 'text-left'
                    } w-2/5`}
                  >
                    {gov.tableHeaders.principle}
                  </th>
                  <th
                    className={`py-4 px-6 font-semibold text-sm md:text-base ${
                      isRtl ? 'text-right' : 'text-left'
                    } w-2/5`}
                  >
                    {gov.tableHeaders.mechanism}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#102447]">
                {gov.domains.map((item, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#102447]/50 transition"
                    id={`gov-domain-row-${idx}`}
                  >
                    <td className="py-4 px-6 font-bold text-slate-100 align-top whitespace-nowrap text-sm md:text-base">
                      {item.domain}
                    </td>
                    <td className="py-4 px-6 text-slate-300 text-sm md:text-base leading-relaxed align-top">
                      {item.principle}
                    </td>
                    <td className="py-4 px-6 text-slate-300 text-sm md:text-base leading-relaxed align-top">
                      {item.mechanism}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Interactive Institutional Case Studies Toggle */}
          {cases.length > 0 && (
            <div className="mt-12 pt-10 border-t border-[#102447]" id="governance-case-studies">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-widest px-3 py-1 bg-[#102447] border border-[#193B73] rounded-md mb-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>Evidence-Based Case Dossier</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-slate-100">
                    {gov.caseStudiesHeading}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 mt-1 max-w-3xl">
                    {gov.caseStudiesSubheading}
                  </p>
                </div>
                <button
                  onClick={() => setShowCaseStudies(!showCaseStudies)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-[#0B172E] hover:bg-[#102447] border border-[#102447] rounded-lg text-slate-200 transition shrink-0 self-start sm:self-center cursor-pointer"
                  id="btn-toggle-cases"
                >
                  {showCaseStudies ? (
                    <>
                      <span>{isRtl ? 'داخستنی کەیسەکان' : 'Collapse Cases'}</span>
                      <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      <span>{isRtl ? 'نیشاندانی کەیسەکان' : 'Expand Cases'}</span>
                      <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {showCaseStudies && (
                <div className="mt-6 space-y-6">
                  {/* Case selection tabs */}
                  <div className="flex flex-wrap gap-2" id="governance-case-tabs">
                    {cases.map((item, idx) => {
                      const isActive = idx === activeCaseIndex;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setActiveCaseIndex(idx)}
                          className={`text-xs sm:text-sm font-semibold py-2 px-4 rounded-lg border transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#1D5BD8] text-white border-[#1D5BD8] shadow-xs'
                              : 'bg-[#0B172E] text-slate-300 border-[#102447] hover:bg-[#102447]'
                          }`}
                          id={`btn-case-tab-${item.id}`}
                        >
                          <span className="opacity-60 text-xs mr-1 ml-1">{item.category} •</span>
                          <span>{item.title}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* 6-Stage Corporate Blueprint Chain */}
                  <div
                    className="bg-[#0B172E] rounded-2xl border border-[#102447] p-6 sm:p-8 shadow-2xs"
                    id="governance-case-blueprint"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#102447] gap-2 mb-6">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-[#102447] px-2.5 py-0.5 rounded border border-[#193B73]">
                          {currentCase.category}
                        </span>
                        <h4 className="text-lg md:text-xl font-bold text-slate-100 mt-2">
                          {currentCase.title}
                        </h4>
                      </div>
                      <div className="text-xs text-slate-400 font-mono">
                        IDG-GOV-REF-0{activeCaseIndex + 1}
                      </div>
                    </div>

                    <div
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      id="governance-steps-grid"
                    >
                      {steps.map((step, idx) => (
                        <div
                          key={step.key}
                          className={`p-4 rounded-xl border flex flex-col justify-between ${step.color} shadow-2xs`}
                          id={`gov-step-${step.key}`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span
                                className={`text-xs font-bold px-2 py-0.5 rounded ${step.badgeColor}`}
                              >
                                {step.label}
                              </span>
                              <span className="text-xs opacity-50 font-mono">{idx + 1}/6</span>
                            </div>
                            <p className="text-xs sm:text-sm leading-relaxed">{step.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
