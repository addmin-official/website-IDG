'use client';

import React from 'react';
import { TranslationData } from '@/lib/translations';
import { ShieldCheck } from 'lucide-react';

interface FooterProps {
  t: TranslationData;
  onOpenContact: () => void;
}

export default function Footer({ t, onOpenContact }: FooterProps) {
  return (
    <footer className="bg-slate-950 text-slate-400 py-14 text-sm border-t border-slate-800" id="corporate-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top summary row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-10 border-b border-slate-800/80">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-slate-800 text-white flex items-center justify-center font-bold text-sm tracking-wider">
                IDG
              </div>
              <span className="font-bold text-white text-base">
                {t.companyName}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.footer.parentDesc}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition-colors" id="footer-link-about">
              {t.footer.links.about}
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors" id="footer-link-portfolio">
              {t.nav.portfolio}
            </a>
            <a href="#governance" className="hover:text-white transition-colors" id="footer-link-governance">
              {t.footer.links.governance}
            </a>
            <a href="#careers" className="hover:text-white transition-colors" id="footer-link-careers">
              {t.footer.links.careers}
            </a>
            <a href="#contact" className="hover:text-white transition-colors text-blue-400 font-semibold" id="footer-link-contact">
              {t.footer.links.contact}
            </a>
          </div>
        </div>

        {/* Bottom copyright and legal note */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4 text-center md:text-right">
          <p id="footer-copyright-text">
            {t.footer.rights}
          </p>
          <div className="flex items-center gap-2 text-slate-500">
            <ShieldCheck className="w-4 h-4 text-blue-500 inline" />
            <span>Sovereign Venture Studio & Enterprise Operating Architecture • Baghdad, Iraq</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
