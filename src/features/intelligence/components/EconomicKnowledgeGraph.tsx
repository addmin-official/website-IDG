'use client';

import React, { useState, useRef, useMemo, useCallback } from 'react';
import {
  Download,
  Printer,
  RotateCcw,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Shield,
  Anchor,
  Truck,
  Building2,
  Boxes,
  FileCheck2,
  ExternalLink,
  Layers,
  ChevronRight,
  ChevronLeft,
  X,
  Info,
} from 'lucide-react';
import { GraphNode, GraphLink, Locale } from '../types';
import {
  GRAPH_NODES,
  GRAPH_LINKS,
  NODE_LAYOUT_COORDINATES,
  NODE_TYPE_LABELS,
  NODE_STATUS_LABELS,
  LINK_TYPE_LABELS,
  getNodeLabel,
  getNodeDescription,
  getLinkLabel,
} from '../data';

interface EconomicKnowledgeGraphProps {
  locale: Locale;
  className?: string;
}

const UI_TEXT: Record<
  Locale,
  {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    filterAll: string;
    filterPorts: string;
    filterCustoms: string;
    filterAuthorities: string;
    filterCommodities: string;
    filterBottlenecks: string;
    legendTitle: string;
    detailsTitle: string;
    noSelection: string;
    clickPrompt: string;
    connectionsTitle: string;
    inboundConnections: string;
    outboundConnections: string;
    noConnections: string;
    downloadPng: string;
    printReport: string;
    resetView: string;
    nodeCount: string;
    linkCount: string;
    bottleneckCount: string;
    statusLabel: string;
    typeLabel: string;
    clearSelection: string;
    sovereignNotice: string;
    exporting: string;
  }
> = {
  ku: {
    title: 'تۆڕی زانیاری و پەیوەندییە ئابوورییەکان',
    subtitle: 'نەخشەی کارلێککاری پەیوەندی نێوان بەندەرەکان، گومرگ، ڕێڕەوە بازرگانییەکان، و سیاسەتە نیشتمانییەکان',
    searchPlaceholder: 'گەڕان بەدوای دەروازە، بەندەر، دەستە، کاڵا...',
    filterAll: 'هەموو بەشەکان',
    filterPorts: 'بەندەرە دەریاییەکان',
    filterCustoms: 'گومرگ و دەروازەکان',
    filterAuthorities: 'دەسەڵاتە فیدراڵییەکان',
    filterCommodities: 'کاڵا ستراتیژییەکان',
    filterBottlenecks: 'خاڵە لەمپەرەکان (Bottlenecks)',
    legendTitle: 'ڕێبەری هێماکان و ڕەنگەکان',
    detailsTitle: 'زانیاری و بەڵگەنامەی دەروازە',
    noSelection: 'هیچ بەشێک دیاری نەکراوە',
    clickPrompt: 'کلیک لەسەر هەر هێمایەکی گرافەکە بکە بۆ بینینی پەیوەندییە کارگێڕی و لۆجستییەکان.',
    connectionsTitle: 'پەیوەندییە ڕاستەوخۆکان',
    inboundConnections: 'پەیوەندییە هاتوووەکان (Inbound)',
    outboundConnections: 'پەیوەندییە دەرچووەکان (Outbound)',
    noConnections: 'هیچ پەیوەندییەکی ڕاستەوخۆ بەردەست نییە',
    downloadPng: 'داگرتنی وێنەی PNG',
    printReport: 'چاپکردنی ڕاپۆرت',
    resetView: 'گێڕانەوەی بنەڕەت',
    nodeCount: 'خاڵی سەروەری',
    linkCount: 'ڕێڕەوی پەیوەندیدار',
    bottleneckCount: 'خاڵی قەرەباڵغی چاودێریکراو',
    statusLabel: 'دۆخی کارپێکردن',
    typeLabel: 'پۆلێنبەندی دامەزراوەیی',
    clearSelection: 'لابردنی دیاریکردن',
    sovereignNotice: 'تەواوی شیکارییەکان لە ناوخۆی ژێرخانی سەروەری عێراق دەمێننەوە و ناکەونە بەر دەستی هیچ لایەنێکی دەرەکی.',
    exporting: 'ئامادەکردنی وێنە...',
  },
  ar: {
    title: 'الشبكة المعرفية للعلاقات الاقتصادية',
    subtitle: 'مخطط بياني تفاعلي يربط الموانئ، المنافذ الجمركية، الممرات اللوجستية، والسياسات الاتحادية',
    searchPlaceholder: 'البحث في المنافذ، الموانئ، الهيئات، والسلع...',
    filterAll: 'كافة المنظومة',
    filterPorts: 'الموانئ البحرية',
    filterCustoms: 'المنافذ والجمارك',
    filterAuthorities: 'الهيئات الاتحادية',
    filterCommodities: 'السلع الاستراتيجية',
    filterBottlenecks: 'نقاط الاختناق (Bottlenecks)',
    legendTitle: 'دليل الرموز والحالات التشغيلية',
    detailsTitle: 'ملف العقدة والبيانات اللوجستية',
    noSelection: 'لم يتم تحديد أي عقدة',
    clickPrompt: 'انقر على أي عقدة في الشبكة لاستعراض ارتباطاتها التشغيلية والقانونية.',
    connectionsTitle: 'الارتباطات المباشرة',
    inboundConnections: 'المسارات الواردة (Inbound)',
    outboundConnections: 'المسارات الصادرة (Outbound)',
    noConnections: 'لا توجد مسارات مباشرة مسجلة',
    downloadPng: 'تحميل مخطط PNG',
    printReport: 'طباعة التقرير',
    resetView: 'إعادة الضبط',
    nodeCount: 'عقدة سيادية',
    linkCount: 'مساراً مترابطاً',
    bottleneckCount: 'نقطة اختناق مرصودة',
    statusLabel: 'الحالة التشغيلية',
    typeLabel: 'التصنيف المؤسسي',
    clearSelection: 'إلغاء التحديد',
    sovereignNotice: 'كافة البيانات والتحليلات الجيواقتصادية محفوظة على السحابة السيادية الوطنية للعراق بنسبة ١٠٠٪.',
    exporting: 'جاري إنشاء المخطط...',
  },
  en: {
    title: 'Economic Knowledge Graph',
    subtitle: 'Interactive relational network mapping ports, customs terminals, strategic trade corridors, and federal regulatory policies',
    searchPlaceholder: 'Search nodes, ports, customs, commodities...',
    filterAll: 'All Entities',
    filterPorts: 'Maritime Ports',
    filterCustoms: 'Customs & Corridors',
    filterAuthorities: 'Federal Authorities',
    filterCommodities: 'Strategic Commodities',
    filterBottlenecks: 'Monitored Bottlenecks',
    legendTitle: 'Legend & System Status',
    detailsTitle: 'Entity Dossier & Telemetry',
    noSelection: 'No Node Selected',
    clickPrompt: 'Click on any entity in the network graph to inspect regulatory dependencies and logistics flows.',
    connectionsTitle: 'Direct Dependencies & Corridors',
    inboundConnections: 'Inbound Feeds',
    outboundConnections: 'Outbound Discharges',
    noConnections: 'No direct links registered',
    downloadPng: 'Download PNG',
    printReport: 'Print Dossier',
    resetView: 'Reset Graph',
    nodeCount: 'Sovereign Nodes',
    linkCount: 'Governed Corridors',
    bottleneckCount: 'Monitored Bottlenecks',
    statusLabel: 'Operational State',
    typeLabel: 'Institutional Domain',
    clearSelection: 'Clear Selection',
    sovereignNotice: 'All relationship mapping and trade telemetry reside exclusively on sovereign national infrastructure within Iraqi jurisdiction.',
    exporting: 'Generating PNG...',
  },
};

export default function EconomicKnowledgeGraph({
  locale,
  className = '',
}: EconomicKnowledgeGraphProps) {
  const isRtl = locale === 'ku' || locale === 'ar';
  const t = UI_TEXT[locale] || UI_TEXT.en;

  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  const [hoveredLinkId, setHoveredLinkId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isExporting, setIsExporting] = useState<boolean>(false);

  const svgRef = useRef<SVGSVGElement | null>(null);

  // Map nodes with positions
  const positionedNodes = useMemo(() => {
    return GRAPH_NODES.map((node) => {
      const coords = NODE_LAYOUT_COORDINATES[node.id] || { x: 500, y: 300 };
      return {
        ...node,
        x: coords.x,
        y: coords.y,
      };
    });
  }, []);

  const nodesById = useMemo(() => {
    const map = new Map<string, typeof positionedNodes[0]>();
    for (const node of positionedNodes) {
      map.set(node.id, node);
    }
    return map;
  }, [positionedNodes]);

  // Filtered nodes based on search & filter category
  const filteredNodeIds = useMemo(() => {
    return new Set(
      positionedNodes
        .filter((node) => {
          // Category filter
          if (activeFilter === 'ports' && node.type !== 'port') return false;
          if (
            activeFilter === 'customs' &&
            node.type !== 'customs_office' &&
            node.type !== 'corridor'
          )
            return false;
          if (
            activeFilter === 'authorities' &&
            node.type !== 'organization' &&
            node.type !== 'regulation'
          )
            return false;
          if (activeFilter === 'commodities' && node.type !== 'commodity')
            return false;
          if (activeFilter === 'bottlenecks' && node.status !== 'bottleneck')
            return false;

          // Search query
          if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase().trim();
            const label = getNodeLabel(node, locale).toLowerCase();
            const desc = getNodeDescription(node, locale).toLowerCase();
            const id = node.id.toLowerCase();
            return label.includes(q) || desc.includes(q) || id.includes(q);
          }

          return true;
        })
        .map((n) => n.id)
    );
  }, [positionedNodes, activeFilter, searchQuery, locale]);

  // Selected node details & connected links
  const selectedNode = useMemo(() => {
    if (!selectedNodeId) return null;
    return nodesById.get(selectedNodeId) || null;
  }, [selectedNodeId, nodesById]);

  // Connected node IDs when a node is selected or hovered
  const activeFocusId = selectedNodeId || hoveredNodeId;
  const connectedNodeIds = useMemo(() => {
    if (!activeFocusId) return null;
    const ids = new Set<string>([activeFocusId]);
    for (const link of GRAPH_LINKS) {
      if (link.source === activeFocusId) ids.add(link.target);
      if (link.target === activeFocusId) ids.add(link.source);
    }
    return ids;
  }, [activeFocusId]);

  // Direct connections for selected node
  const selectedConnections = useMemo(() => {
    if (!selectedNodeId) return { inbound: [], outbound: [] };
    const inbound = GRAPH_LINKS.filter((l) => l.target === selectedNodeId).map(
      (link) => ({
        link,
        partnerNode: nodesById.get(link.source),
      })
    );
    const outbound = GRAPH_LINKS.filter((l) => l.source === selectedNodeId).map(
      (link) => ({
        link,
        partnerNode: nodesById.get(link.target),
      })
    );
    return { inbound, outbound };
  }, [selectedNodeId, nodesById]);

  // Handle node selection
  const handleNodeClick = useCallback((id: string) => {
    setSelectedNodeId((prev) => (prev === id ? null : id));
  }, []);

  // Handle PNG export
  const handleDownloadPng = useCallback(async () => {
    if (!svgRef.current) return;
    try {
      setIsExporting(true);
      const svgElement = svgRef.current;
      const svgString = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgString], {
        type: 'image/svg+xml;charset=utf-8',
      });
      const URL = window.URL || window.webkitURL || window;
      const blobUrl = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 2000;
        canvas.height = 1320;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Dark background
        ctx.fillStyle = '#060D1A';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw image scaled
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Watermark header
        ctx.fillStyle = '#10B981';
        ctx.font = 'bold 28px sans-serif';
        ctx.fillText(
          'IRAQ DIGITAL GATEWAY (IDG) — ECONOMIC KNOWLEDGE GRAPH',
          40,
          50
        );
        ctx.fillStyle = '#94A3B8';
        ctx.font = '20px sans-serif';
        ctx.fillText(
          `Classification: Sovereign Enterprise Document | Exported: ${new Date().toISOString()}`,
          40,
          85
        );

        const pngUrl = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = `idg-economic-knowledge-graph-${locale}.png`;
        downloadLink.href = pngUrl;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(blobUrl);
        setIsExporting(false);
      };
      img.onerror = () => {
        setIsExporting(false);
      };
      img.src = blobUrl;
    } catch {
      setIsExporting(false);
    }
  }, [locale]);

  // Handle print
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // Reset graph
  const handleReset = useCallback(() => {
    setSelectedNodeId(null);
    setHoveredNodeId(null);
    setSearchQuery('');
    setActiveFilter('all');
  }, []);

  // Node icon helper
  const getNodeIcon = (type: GraphNode['type']) => {
    switch (type) {
      case 'port':
        return <Anchor className="w-4 h-4 text-emerald-400" />;
      case 'customs_office':
        return <Shield className="w-4 h-4 text-emerald-400" />;
      case 'corridor':
        return <Truck className="w-4 h-4 text-amber-400" />;
      case 'commodity':
        return <Boxes className="w-4 h-4 text-sky-400" />;
      case 'regulation':
        return <FileCheck2 className="w-4 h-4 text-teal-400" />;
      case 'organization':
        return <Building2 className="w-4 h-4 text-emerald-300" />;
      default:
        return <Layers className="w-4 h-4 text-emerald-400" />;
    }
  };

  const getStatusColor = (status: GraphNode['status']) => {
    switch (status) {
      case 'active':
        return {
          stroke: '#10B981',
          fill: '#064E3B',
          glow: 'rgba(16, 185, 129, 0.45)',
          text: 'text-emerald-400',
          bg: 'bg-emerald-950/70 border-emerald-500/40',
        };
      case 'bottleneck':
        return {
          stroke: '#F59E0B',
          fill: '#78350F',
          glow: 'rgba(245, 158, 11, 0.45)',
          text: 'text-amber-400',
          bg: 'bg-amber-950/70 border-amber-500/40',
        };
      case 'restricted':
        return {
          stroke: '#EF4444',
          fill: '#7F1D1D',
          glow: 'rgba(239, 68, 68, 0.45)',
          text: 'text-rose-400',
          bg: 'bg-rose-950/70 border-rose-500/40',
        };
      case 'offline':
      default:
        return {
          stroke: '#6B7280',
          fill: '#1F2937',
          glow: 'rgba(107, 114, 128, 0.2)',
          text: 'text-zinc-400',
          bg: 'bg-zinc-900 border-zinc-700',
        };
    }
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`relative w-full text-slate-100 ${className}`}
    >
      {/* ── Top Sovereign Stats Bar ── */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="bg-[#0B172E]/80 border border-emerald-500/20 backdrop-blur-md rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-emerald-400 tracking-tight">
              8
            </div>
            <div className="text-xs text-slate-400 font-medium">{t.nodeCount}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Building2 className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-[#0B172E]/80 border border-emerald-500/20 backdrop-blur-md rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-sky-400 tracking-tight">
              10
            </div>
            <div className="text-xs text-slate-400 font-medium">{t.linkCount}</div>
          </div>
          <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400">
            <Layers className="w-5 h-5" />
          </div>
        </div>

        <div className="bg-[#0B172E]/80 border border-amber-500/30 backdrop-blur-md rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-amber-400 tracking-tight">
              1
            </div>
            <div className="text-xs text-slate-400 font-medium">
              {t.bottleneckCount}
            </div>
          </div>
          <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <AlertTriangle className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* ── Toolbar: Search, Filters, and Export Buttons ── */}
      <div className="mb-4 bg-[#0B172E]/90 border border-emerald-500/20 rounded-xl p-3 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 print:hidden">
        {/* Search */}
        <div className="relative flex-1 min-w-[240px]">
          <Search
            className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 ${
              isRtl ? 'right-3' : 'left-3'
            }`}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className={`w-full bg-[#060D1A] border border-slate-700/60 rounded-lg text-sm text-slate-200 placeholder-slate-500 py-2 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all ${
              isRtl ? 'pr-9 pl-4' : 'pl-9 pr-4'
            }`}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className={`absolute top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 ${
                isRtl ? 'left-3' : 'right-3'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center flex-wrap gap-1.5">
          {[
            { id: 'all', label: t.filterAll },
            { id: 'ports', label: t.filterPorts },
            { id: 'customs', label: t.filterCustoms },
            { id: 'authorities', label: t.filterAuthorities },
            { id: 'commodities', label: t.filterCommodities },
            { id: 'bottlenecks', label: t.filterBottlenecks },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                activeFilter === tab.id
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-sm shadow-emerald-500/10'
                  : 'bg-[#060D1A]/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            title={t.resetView}
            className="p-2 text-slate-400 hover:text-emerald-400 bg-[#060D1A] border border-slate-800 hover:border-emerald-500/40 rounded-lg transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={handleDownloadPng}
            disabled={isExporting}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 rounded-lg transition-all disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            <span>{isExporting ? t.exporting : t.downloadPng}</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg transition-all"
          >
            <Printer className="w-4 h-4" />
            <span>{t.printReport}</span>
          </button>
        </div>
      </div>

      {/* ── Main Canvas & Details Split View ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* SVG Canvas Container */}
        <div
          className={`lg:col-span-8 bg-[#060D1A] border border-emerald-500/20 rounded-2xl overflow-hidden relative shadow-2xl shadow-emerald-950/20`}
        >
          {/* Subtle sovereign backdrop grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(#10B981 1px, transparent 1px), radial-gradient(#10B981 1px, #060D1A 1px)',
              backgroundSize: '40px 40px',
              backgroundPosition: '0 0, 20px 20px',
            }}
          />

          {/* Canvas SVG */}
          <svg
            ref={svgRef}
            viewBox="0 0 1000 660"
            className="w-full h-auto block select-none"
            role="img"
            aria-label={t.title}
          >
            <defs>
              {/* Radial gradient background for canvas export */}
              <radialGradient id="canvasBgGlow" cx="50%" cy="50%" r="65%">
                <stop offset="0%" stopColor="#0B172E" />
                <stop offset="100%" stopColor="#060D1A" />
              </radialGradient>

              {/* Node glow filters */}
              <filter id="emeraldGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="8"
                  floodColor="#10B981"
                  floodOpacity="0.6"
                />
              </filter>
              <filter id="amberGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="8"
                  floodColor="#F59E0B"
                  floodOpacity="0.7"
                />
              </filter>
              <filter id="focusGlow" x="-60%" y="-60%" width="220%" height="220%">
                <feDropShadow
                  dx="0"
                  dy="0"
                  stdDeviation="12"
                  floodColor="#34D399"
                  floodOpacity="0.8"
                />
              </filter>

              {/* Arrow Markers for Directed Links */}
              <marker
                id="arrow-emerald"
                viewBox="0 0 10 10"
                refX="28"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#10B981" />
              </marker>
              <marker
                id="arrow-dimmed"
                viewBox="0 0 10 10"
                refX="28"
                refY="5"
                markerWidth="6"
                markerHeight="6"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#334155" />
              </marker>
              <marker
                id="arrow-highlight"
                viewBox="0 0 10 10"
                refX="28"
                refY="5"
                markerWidth="7"
                markerHeight="7"
                orient="auto-start-reverse"
              >
                <path d="M 0 1 L 10 5 L 0 9 z" fill="#34D399" />
              </marker>
            </defs>

            {/* Background Rect for Image Export */}
            <rect width="1000" height="660" fill="url(#canvasBgGlow)" />

            {/* Subtle Federal / Maritime Zone Labels */}
            <text
              x="200"
              y="60"
              fill="#334155"
              fontSize="12"
              fontWeight="bold"
              letterSpacing="2"
              textAnchor="middle"
            >
              {locale === 'en'
                ? 'OVERLAND BORDER CORRIDORS'
                : locale === 'ku'
                ? 'دەروازە وشکانییەکان'
                : 'المنافذ البرية'}
            </text>
            <text
              x="500"
              y="60"
              fill="#10B981"
              opacity="0.4"
              fontSize="12"
              fontWeight="bold"
              letterSpacing="2"
              textAnchor="middle"
            >
              {locale === 'en'
                ? 'FEDERAL REGULATORY CORE'
                : locale === 'ku'
                ? 'ناوەندی حوکمڕانی فیدراڵی'
                : 'المركز الاتحادي السيادي'}
            </text>
            <text
              x="800"
              y="60"
              fill="#334155"
              fontSize="12"
              fontWeight="bold"
              letterSpacing="2"
              textAnchor="middle"
            >
              {locale === 'en'
                ? 'MARITIME & STRATEGIC RESERVES'
                : locale === 'ku'
                ? 'بەندەری دەریایی و یەدەگ'
                : 'الموانئ البحرية والاحتياطي'}
            </text>

            {/* ── Directed Graph Links ── */}
            <g className="links-layer">
              {GRAPH_LINKS.map((link, idx) => {
                const source = nodesById.get(link.source);
                const target = nodesById.get(link.target);
                if (!source || !target) return null;

                const linkId = `${link.source}->${link.target}`;
                const isHovered = hoveredLinkId === linkId;
                const isConnectedToFocus =
                  activeFocusId &&
                  (link.source === activeFocusId || link.target === activeFocusId);
                const isDimmed =
                  activeFocusId && !isConnectedToFocus && !isHovered;

                // Bezier curve control point calculation
                const dx = target.x - source.x;
                const dy = target.y - source.y;
                const midX = (source.x + target.x) / 2;
                const midY = (source.y + target.y) / 2;
                // Add a small curve offset
                const offsetFactor = (idx % 2 === 0 ? 1 : -1) * 20;
                const cx = midX - (dy / Math.hypot(dx, dy || 1)) * offsetFactor;
                const cy = midY + (dx / Math.hypot(dx, dy || 1)) * offsetFactor;

                const pathData = `M ${source.x} ${source.y} Q ${cx} ${cy} ${target.x} ${target.y}`;

                let strokeColor = '#10B981';
                let strokeWidth = 1.5;
                let strokeOpacity = 0.5;
                let markerUrl = 'url(#arrow-emerald)';

                if (isConnectedToFocus || isHovered) {
                  strokeColor = '#34D399';
                  strokeWidth = 2.8;
                  strokeOpacity = 0.95;
                  markerUrl = 'url(#arrow-highlight)';
                } else if (isDimmed) {
                  strokeColor = '#334155';
                  strokeWidth = 1;
                  strokeOpacity = 0.2;
                  markerUrl = 'url(#arrow-dimmed)';
                }

                return (
                  <g
                    key={linkId}
                    className="transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredLinkId(linkId)}
                    onMouseLeave={() => setHoveredLinkId(null)}
                  >
                    {/* Wider transparent hit-area for easier hover */}
                    <path
                      d={pathData}
                      fill="none"
                      stroke="transparent"
                      strokeWidth="16"
                    />
                    {/* Visible line */}
                    <path
                      d={pathData}
                      fill="none"
                      stroke={strokeColor}
                      strokeWidth={strokeWidth}
                      strokeOpacity={strokeOpacity}
                      strokeDasharray={
                        link.type === 'depends_on' ? '4 3' : undefined
                      }
                      markerEnd={markerUrl}
                    />

                    {/* Edge Label Badge on hover or focus */}
                    {(isHovered || isConnectedToFocus) && (
                      <g transform={`translate(${cx}, ${cy})`}>
                        <rect
                          x={-75}
                          y={-12}
                          width={150}
                          height={24}
                          rx={12}
                          fill="#0B172E"
                          stroke={isConnectedToFocus ? '#10B981' : '#475569'}
                          strokeWidth="1"
                        />
                        <text
                          textAnchor="middle"
                          y={4}
                          fontSize="10"
                          fill="#E2E8F0"
                          fontWeight="600"
                        >
                          {getLinkLabel(link, locale)}
                        </text>
                      </g>
                    )}
                  </g>
                );
              })}
            </g>

            {/* ── Graph Nodes ── */}
            <g className="nodes-layer">
              {positionedNodes.map((node) => {
                const isSelected = selectedNodeId === node.id;
                const isHovered = hoveredNodeId === node.id;
                const isMatchingFilter = filteredNodeIds.has(node.id);
                const isConnected =
                  connectedNodeIds && connectedNodeIds.has(node.id);

                const statusStyle = getStatusColor(node.status);

                // Opacity logic
                let opacity = 1;
                if (!isMatchingFilter) {
                  opacity = 0.25;
                } else if (activeFocusId && !isConnected) {
                  opacity = 0.25;
                }

                const nodeRadius = isSelected ? 30 : 25;

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    className="cursor-pointer transition-transform duration-300"
                    opacity={opacity}
                    onClick={() => handleNodeClick(node.id)}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onMouseLeave={() => setHoveredNodeId(null)}
                  >
                    {/* Animated Outer Pulse for active or bottleneck */}
                    {(node.status === 'active' ||
                      node.status === 'bottleneck') && (
                      <circle
                        r={nodeRadius + 8}
                        fill="none"
                        stroke={statusStyle.stroke}
                        strokeOpacity="0.3"
                        strokeWidth="1.5"
                        className="animate-pulse"
                      />
                    )}

                    {/* Highlight Aura when selected */}
                    {isSelected && (
                      <circle
                        r={nodeRadius + 14}
                        fill="none"
                        stroke="#34D399"
                        strokeWidth="2"
                        strokeDasharray="4 2"
                        filter="url(#focusGlow)"
                      />
                    )}

                    {/* Main Node Circle */}
                    <circle
                      r={nodeRadius}
                      fill={statusStyle.fill}
                      stroke={statusStyle.stroke}
                      strokeWidth={isSelected ? 3.5 : 2}
                      filter={
                        isSelected
                          ? 'url(#focusGlow)'
                          : node.status === 'bottleneck'
                          ? 'url(#amberGlow)'
                          : 'url(#emeraldGlow)'
                      }
                    />

                    {/* Inner Type Indicator Circle */}
                    <circle
                      r={nodeRadius - 8}
                      fill="#060D1A"
                      stroke={statusStyle.stroke}
                      strokeWidth="1"
                      strokeOpacity="0.8"
                    />

                    {/* Small Status Dot */}
                    <circle
                      cx={nodeRadius * 0.7}
                      cy={-nodeRadius * 0.7}
                      r={4.5}
                      fill={statusStyle.stroke}
                      stroke="#060D1A"
                      strokeWidth="1.5"
                    />

                    {/* Node Label Text */}
                    <text
                      y={nodeRadius + 20}
                      textAnchor="middle"
                      fill={isSelected ? '#34D399' : '#F8FAFC'}
                      fontSize={isSelected ? '13' : '12'}
                      fontWeight={isSelected ? 'bold' : '600'}
                      className="transition-all"
                      style={{
                        paintOrder: 'stroke',
                        stroke: '#060D1A',
                        strokeWidth: '4px',
                        strokeLinejoin: 'round',
                      }}
                    >
                      {getNodeLabel(node, locale)}
                    </text>

                    {/* Node Type Subtitle */}
                    <text
                      y={nodeRadius + 34}
                      textAnchor="middle"
                      fill="#94A3B8"
                      fontSize="9.5"
                      fontWeight="500"
                      style={{
                        paintOrder: 'stroke',
                        stroke: '#060D1A',
                        strokeWidth: '3px',
                      }}
                    >
                      {NODE_TYPE_LABELS[node.type][locale]}
                    </text>
                  </g>
                );
              })}
            </g>
          </svg>

          {/* Quick Legend floating at bottom left */}
          <div
            className={`absolute bottom-3 ${
              isRtl ? 'right-3' : 'left-3'
            } bg-[#060D1A]/90 border border-slate-800 rounded-lg p-2.5 backdrop-blur-md text-[11px] flex flex-col gap-1.5 shadow-lg pointer-events-none`}
          >
            <div className="font-semibold text-slate-300 mb-0.5">
              {t.legendTitle}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
              <span className="text-slate-300">
                {NODE_STATUS_LABELS.active[locale]}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50" />
              <span className="text-slate-300">
                {NODE_STATUS_LABELS.bottleneck[locale]}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-0.5 border-t border-dashed border-emerald-400" />
              <span className="text-slate-400">
                {LINK_TYPE_LABELS.depends_on[locale]}
              </span>
            </div>
          </div>
        </div>

        {/* ── Details Side Panel ── */}
        <div className="lg:col-span-4 bg-[#0B172E]/90 border border-emerald-500/20 rounded-2xl p-5 backdrop-blur-md flex flex-col justify-between shadow-xl">
          {selectedNode ? (
            <div className="space-y-4">
              {/* Header with Title and Clear Button */}
              <div className="flex items-start justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                      {selectedNode.id}
                    </span>
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${
                        getStatusColor(selectedNode.status).bg
                      } ${getStatusColor(selectedNode.status).text}`}
                    >
                      {NODE_STATUS_LABELS[selectedNode.status][locale]}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                    {getNodeIcon(selectedNode.type)}
                    <span>{getNodeLabel(selectedNode, locale)}</span>
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedNodeId(null)}
                  title={t.clearSelection}
                  className="p-1 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Type Category Badge */}
              <div className="flex items-center justify-between text-xs text-slate-400 bg-[#060D1A]/70 px-3 py-2 rounded-lg border border-slate-800">
                <span>{t.typeLabel}:</span>
                <span className="text-emerald-300 font-medium">
                  {NODE_TYPE_LABELS[selectedNode.type][locale]}
                </span>
              </div>

              {/* Localized Description */}
              <div className="text-sm text-slate-300 leading-relaxed bg-[#060D1A]/40 p-3.5 rounded-xl border border-slate-800/80">
                {getNodeDescription(selectedNode, locale)}
              </div>

              {/* Direct Connections (Inbound & Outbound) */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  {t.connectionsTitle}
                </div>

                {/* Inbound */}
                {selectedConnections.inbound.length > 0 && (
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-medium text-emerald-400">
                      {t.inboundConnections} ({selectedConnections.inbound.length})
                    </div>
                    {selectedConnections.inbound.map(({ link, partnerNode }) => (
                      <button
                        key={`${link.source}->${link.target}`}
                        onClick={() =>
                          partnerNode && handleNodeClick(partnerNode.id)
                        }
                        className="w-full text-start p-2 rounded-lg bg-[#060D1A]/60 hover:bg-emerald-950/30 border border-slate-800/80 hover:border-emerald-500/30 transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2 text-xs">
                          {isRtl ? (
                            <ChevronLeft className="w-3.5 h-3.5 text-emerald-400 group-hover:-translate-x-0.5 transition-transform" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
                          )}
                          <span className="text-slate-200 font-medium">
                            {partnerNode ? getNodeLabel(partnerNode, locale) : link.source}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-normal">
                          {getLinkLabel(link, locale)}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Outbound */}
                {selectedConnections.outbound.length > 0 && (
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-medium text-sky-400">
                      {t.outboundConnections} ({selectedConnections.outbound.length})
                    </div>
                    {selectedConnections.outbound.map(({ link, partnerNode }) => (
                      <button
                        key={`${link.source}->${link.target}`}
                        onClick={() =>
                          partnerNode && handleNodeClick(partnerNode.id)
                        }
                        className="w-full text-start p-2 rounded-lg bg-[#060D1A]/60 hover:bg-sky-950/30 border border-slate-800/80 hover:border-sky-500/30 transition-all flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-2 text-xs">
                          {isRtl ? (
                            <ChevronLeft className="w-3.5 h-3.5 text-sky-400 group-hover:-translate-x-0.5 transition-transform" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-sky-400 group-hover:translate-x-0.5 transition-transform" />
                          )}
                          <span className="text-slate-200 font-medium">
                            {partnerNode ? getNodeLabel(partnerNode, locale) : link.target}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 font-normal">
                          {getLinkLabel(link, locale)}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                {selectedConnections.inbound.length === 0 &&
                  selectedConnections.outbound.length === 0 && (
                    <div className="text-xs text-slate-500 italic p-2">
                      {t.noConnections}
                    </div>
                  )}
              </div>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400 space-y-3">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Info className="w-8 h-8" />
              </div>
              <div className="font-semibold text-slate-200">
                {t.noSelection}
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                {t.clickPrompt}
              </p>
            </div>
          )}

          {/* Sovereign Audit Note */}
          <div className="mt-6 pt-3 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-start gap-2">
            <Shield className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
            <span>{t.sovereignNotice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
