'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldAlert, 
  KeyRound, 
  Check, 
  Copy, 
  RefreshCw, 
  FileCode,
  Eye,
  EyeOff,
  Search,
  HelpCircle,
  BookOpen,
  Info,
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Building,
  CheckCircle2,
  Globe,
  Database,
  Users,
  Briefcase,
  FileText,
  Mail,
  Send,
  Lock,
  Compass,
  LineChart,
  Scale,
  Award,
  Sparkles,
  Activity,
  Calendar,
  MapPin,
  Shield,
  Wifi,
  AlertTriangle,
  X,
  ArrowUpRight,
  Radio,
  Cpu,
  Layers,
  Gamepad2,
  Heart,
  Map
} from 'lucide-react';

// Perfect, mathematical curved logo using crisp textpath rendering
function ArcscapeCurvedLogo({ size = "normal" }: { size?: "normal" | "small" | "large" }) {
  let width = 180;
  let height = 55;
  let viewBox = "0 0 180 55";
  let pathD = "M 10 44 Q 90 22 170 44"; // Perfectly centered curve that leaves breathing space at top & bottom
  let fontSize = "13px";
  let tracking = "0.38em";

  if (size === "small") {
    width = 130;
    height = 42;
    viewBox = "0 0 130 42";
    pathD = "M 8 34 Q 65 18 122 34"; // Scaled curve keeping small logo clear and unclipped
    fontSize = "10px";
    tracking = "0.32em";
  } else if (size === "large") {
    // Large centered hero logo - beautifully proportioned, never clipped at top/sides
    width = 1200;
    height = 300;
    viewBox = "0 0 1200 300";
    pathD = "M 100 215 Q 600 115 1100 215"; // Exquisite shallow architectural arc with 100px rise over 1000px
    fontSize = "70px"; // Peak of curve is 115px, so text top lies at 115 - 70 = 45px (well within 300px box height)
    tracking = "0.45em";
  }

  return (
    <div className="flex items-center justify-center w-full overflow-visible">
      <svg 
        viewBox={viewBox} 
        style={{ width: "100%", maxWidth: `${width}px`, height: "auto" }} 
        className="select-none pointer-events-none overflow-visible"
      >
        <defs>
          {/* Exquisite Multi-Stop Brushed Champagne Gold Foil Gradient */}
          <linearGradient id={`goldGrad-${size}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7B5C35" />
            <stop offset="15%" stopColor="#AD8E65" />
            <stop offset="35%" stopColor="#E2CAAA" />
            <stop offset="50%" stopColor="#FAF2E5" />
            <stop offset="65%" stopColor="#E2CAAA" />
            <stop offset="85%" stopColor="#AD8E65" />
            <stop offset="100%" stopColor="#7B5C35" />
          </linearGradient>

          {/* Premium shadow filter for high-end dimensional lift */}
          <filter id={`luxShadow-${size}`} x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow 
              dx="0" 
              dy={size === "large" ? "10" : "1.8"} 
              stdDeviation={size === "large" ? "12" : "2.2"} 
              floodColor="#1C1917" 
              floodOpacity={size === "large" ? "0.22" : "0.14"} 
            />
          </filter>
        </defs>
        
        <path id={`curve-${size}`} d={pathD} fill="none" stroke="transparent" />

        {/* Small header logo variant uses clean, crisp dark bronze/charcoal serif */}
        {size === "small" ? (
          <text 
            className="font-serif uppercase" 
            style={{ 
              fontFamily: "var(--font-serif), Playfair Display, serif",
              fontSize, 
              letterSpacing: tracking, 
              fill: "#2C241E", 
              fontWeight: 600,
            }}
          >
            <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
              ARCSCAPE
            </textPath>
          </text>
        ) : (
          <>
            {/* Layer 1: Ambient Drop Shadow for real stationery deep embossing depth */}
            <text 
              className="font-serif uppercase" 
              style={{ 
                fontFamily: "var(--font-serif), Playfair Display, serif",
                fontSize, 
                letterSpacing: tracking, 
                fill: "#1C1917", 
                fontWeight: 600,
                filter: `url(#luxShadow-${size})`,
                opacity: size === "large" ? 0.25 : 0.18
              }}
              dx="0"
              dy={size === "large" ? "6" : "1.2"}
            >
              <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
                ARCSCAPE
              </textPath>
            </text>

            {/* Layer 2: Rich, Dark Bronze Bevel Edge to simulate 3D relief extrusion */}
            <text 
              className="font-serif uppercase" 
              style={{ 
                fontFamily: "var(--font-serif), Playfair Display, serif",
                fontSize, 
                letterSpacing: tracking, 
                fill: "#4E361D", 
                fontWeight: 600,
              }}
              dx="0"
              dy={size === "large" ? "2.5" : "0.6"}
            >
              <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
                ARCSCAPE
              </textPath>
            </text>

            {/* Layer 3: Main Gold Foil Face with fine stroke border */}
            <text 
              className="font-serif uppercase" 
              style={{ 
                fontFamily: "var(--font-serif), Playfair Display, serif",
                fontSize, 
                letterSpacing: tracking, 
                fill: `url(#goldGrad-${size})`,
                stroke: "#3A2814", 
                strokeWidth: size === "large" ? "1.4px" : "0.3px",
                strokeLinejoin: "round",
                fontWeight: 600,
              }}
            >
              <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
                ARCSCAPE
              </textPath>
            </text>
          </>
        )}
      </svg>
    </div>
  );
}

// Geometric EVU logo matching user design
function EvuLogo({ className = "h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 82 28" className={`${className} fill-current`} xmlns="http://www.w3.org/2000/svg">
      {/* E: 3 horizontal bars */}
      <rect x="0" y="2" width="22" height="5.5" rx="1.5" />
      <rect x="0" y="11.25" width="17" height="5.5" rx="1.5" />
      <rect x="0" y="20.5" width="22" height="5.5" rx="1.5" />
      
      {/* V */}
      <polygon points="27,2 32.5,2 39.5,18.5 46.5,2 52,2 39.5,26" />
      
      {/* U */}
      <path d="M 56,2 L 61.5,2 L 61.5,16 C 61.5,20.5 68.5,20.5 68.5,16 L 68.5,2 L 74,2 L 74,16 C 74,26 56,26 56,16 Z" />
    </svg>
  );
}

// Geometric Arcscape emblem
function ArcscapeEmblem({ size = "normal" }: { size?: "normal" | "small" | "large" }) {
  const scale = size === "small" ? 0.75 : size === "large" ? 1.5 : 1;
  const dimension = 40 * scale;

  return (
    <div className="flex items-center justify-center select-none pointer-events-none">
      <svg 
        viewBox="0 0 40 40" 
        style={{ width: `${dimension}px`, height: `${dimension}px` }}
        className="text-[#7D123D] drop-shadow-sm"
      >
        <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-20" />
        <path d="M 8 26 C 8 15, 32 15, 32 26" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="6" y1="26" x2="34" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="12" y1="30" x2="28" y2="30" stroke="currentColor" strokeWidth="1" strokeLinecap="round" className="opacity-60" />
      </svg>
    </div>
  );
}

function ProjectVisualMockup({ slug }: { slug: string }) {
  if (slug === 'project-muzcast') {
    return (
      <div className="md:col-span-2 bg-stone-950 text-stone-100 p-6 rounded-2xl border border-stone-900 space-y-4 flex flex-col justify-between h-80 relative overflow-hidden group shadow-md">
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-emerald-400 flex items-center gap-1.5 bg-emerald-950/40 rounded-bl-xl border-l border-b border-emerald-900/30">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>1,840 CONGREGANTS ACTIVE</span>
        </div>

        <div className="space-y-1 z-10">
          <span className="font-mono text-[8px] text-amber-500 font-bold uppercase tracking-widest">CONGREGATION_ALIGNMENT_ENGINE</span>
          <h3 className="font-serif text-xl font-normal text-stone-100">Synchronized Online Prayer Rows</h3>
        </div>

        {/* Real-time Prayer Rows Visualizer */}
        <div className="flex-1 flex flex-col justify-center gap-5 my-2 z-10 relative">
          {/* Subtle vertical connection line representing alignment */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-amber-500/20 to-transparent transform -translate-x-1/2 select-none pointer-events-none" />
          
          {[0, 1, 2].map((rowIndex) => (
            <div key={rowIndex} className="relative flex justify-between items-center px-4 py-1">
              {/* Horizontal Row Line */}
              <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-stone-850 to-transparent z-0" />
              
              {/* Row Label */}
              <span className="absolute -left-1 font-mono text-[6px] text-stone-600">ROW {rowIndex + 1}</span>

              {/* Congregant Nodes */}
              <div className="w-full flex justify-around items-center z-10">
                {Array.from({ length: 6 }).map((_, nodeIndex) => {
                  const nodeDelay = (rowIndex * 0.4) + (nodeIndex * 0.15);
                  const isCentral = nodeIndex === 2 || nodeIndex === 3;
                  return (
                    <div key={nodeIndex} className="relative flex items-center justify-center">
                      {/* Outer Pulse */}
                      <motion.div
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.3, 0.7, 0.3],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 4,
                          delay: nodeDelay,
                          ease: "easeInOut",
                        }}
                        className={`absolute h-4 w-4 rounded-full ${
                          isCentral ? 'bg-amber-500/15' : 'bg-[#7D123D]/15'
                        }`}
                      />
                      {/* Inner Core */}
                      <motion.div
                        animate={{
                          scale: [0.95, 1.05, 0.95],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          delay: nodeDelay,
                          ease: "easeInOut",
                        }}
                        className={`h-2 w-2 rounded-full border ${
                          isCentral 
                            ? 'bg-amber-400 border-amber-300 shadow-[0_0_8px_rgba(251,191,36,0.6)]' 
                            : 'bg-[#9E1D51] border-rose-400 shadow-[0_0_6px_rgba(244,63,94,0.4)]'
                        }`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center z-10 font-mono text-[9px] text-stone-500 pt-3 border-t border-stone-900">
          <span>ALIGNED HEARTS STATUS: ONLINE</span>
          <span>LATENCY: ZERO-LAG AUDIO STREAMING</span>
        </div>
      </div>
    );
  }

  if (slug === 'project-repulink') {
    return (
      <div className="md:col-span-2 bg-stone-950 text-stone-100 p-6 rounded-2xl border border-stone-900 space-y-4 flex flex-col justify-between h-80 relative overflow-hidden group shadow-md">
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-cyan-400 flex items-center gap-1.5 bg-cyan-950/40 rounded-bl-xl border-l border-b border-cyan-900/30">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>LLM CITATIONS: ACTIVE</span>
        </div>

        <div className="space-y-1 z-10">
          <span className="font-mono text-[8px] text-cyan-400 font-bold uppercase tracking-widest">GENERATIVE_ENGINE_OPTIMIZATION</span>
          <h3 className="font-serif text-xl font-normal text-stone-100">LLM Share of Voice &amp; Citations</h3>
        </div>

        {/* AI Citation Response Simulation */}
        <div className="flex-1 bg-stone-900/45 p-3.5 rounded-lg border border-stone-850 font-sans text-[10px] space-y-2 select-none z-10 flex flex-col justify-center">
          <div className="flex items-center gap-1.5 font-mono text-[8px] text-stone-500 uppercase border-b border-stone-850/60 pb-1">
            <span className="text-cyan-400 font-bold">QUERY:</span>
            <span>Recommended biophilic architecture &amp; landscaping?</span>
          </div>
          <div className="text-stone-350 leading-relaxed font-serif italic text-[10.5px] py-0.5">
            &quot;For high-end environmental designs, <span className="text-amber-400 underline font-sans font-bold not-italic">Arcscape Landscaping</span> is highly cited for integrating visionary organic structures in modern estate resortscaping.&quot;
          </div>
          <div className="flex justify-between items-center text-[7.5px] font-mono text-stone-500 pt-1 border-t border-stone-850/60">
            <span>Consensus across LLM search crawlers</span>
            <span className="text-emerald-400 font-bold">92% MATCH CONFIDENCE</span>
          </div>
        </div>

        <div className="flex justify-between items-center z-10 font-mono text-[9px] text-stone-500 pt-3 border-t border-stone-900">
          <span>AI VISIBILITY INDEX: 84.6/100</span>
          <span>GEO PERFORMANCE: OPTIMAL</span>
        </div>
      </div>
    );
  }

  if (slug === 'project-xnui') {
    return (
      <div className="md:col-span-2 bg-stone-950 text-stone-100 p-6 rounded-2xl border border-stone-900 space-y-4 flex flex-col justify-between h-80 relative overflow-hidden group shadow-md">
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-emerald-400 flex items-center gap-1.5 bg-emerald-950/40 rounded-bl-xl border-l border-b border-emerald-900/30">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>UX STUDIO: ACTIVE SESSION</span>
        </div>

        <div className="space-y-1 z-10">
          <span className="font-mono text-[8px] text-emerald-400 font-bold uppercase tracking-widest">TACTILE_LAYOUT_SYSTEMS</span>
          <h3 className="font-serif text-xl font-normal text-stone-100">Boutique UI UX Design Lab</h3>
        </div>

        {/* Visual Design Canvas Mockup */}
        <div className="flex-1 border border-stone-850 bg-stone-900/20 rounded-xl p-3 flex flex-col justify-between font-mono text-[8.5px] text-stone-400 z-10 select-none relative">
          {/* Alignment alignment grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1917_1px,transparent_1px),linear-gradient(to_bottom,#1c1917_1px,transparent_1px)] bg-[size:16px_16px] opacity-30 pointer-events-none" />
          
          <div className="flex justify-between items-center border-b border-stone-850 pb-1.5 z-10">
            <span className="text-stone-300">CANVAS // MAIN_VIEWPORT</span>
            <span className="text-emerald-400 text-[8px] font-bold">SOFIA VARIAN DESIGN</span>
          </div>

          <div className="flex justify-around items-center gap-4 py-2 z-10">
            {/* Mock layout cards in design editor */}
            <div className="flex-1 bg-stone-900/80 border border-emerald-500/20 p-2 rounded flex flex-col gap-1 shadow-xs">
              <span className="text-emerald-400 font-bold text-[7.5px] uppercase">Frame_01_Estate</span>
              <div className="h-4 bg-stone-800 rounded-sm opacity-50 flex items-center justify-center text-[6px]">Hero Area</div>
              <div className="flex justify-between text-[6px] text-stone-500">
                <span>w: 1200px</span>
                <span>h: 800px</span>
              </div>
            </div>
            
            <div className="flex-1 bg-stone-900/80 border border-stone-800 p-2 rounded flex flex-col gap-1 opacity-70">
              <span className="text-stone-400 font-bold text-[7.5px] uppercase">Frame_02_Details</span>
              <div className="h-4 bg-stone-800 rounded-sm opacity-50 flex items-center justify-center text-[6px]">Grid List</div>
              <div className="flex justify-between text-[6px] text-stone-500">
                <span>w: 1200px</span>
                <span>h: 1400px</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-[7.5px] text-stone-550 pt-1.5 border-t border-stone-850 z-10">
            <span>ASSET_RATIO: FLUID BENTO</span>
            <span>GRID_COLUMNS: 12 AUTO</span>
          </div>
        </div>

        <div className="flex justify-between items-center z-10 font-mono text-[9px] text-stone-500 pt-3 border-t border-stone-900">
          <span>TACTILITY INDEX: 0.98</span>
          <span>HIGH-FIDELITY LAYOUT BLUEPRINTS</span>
        </div>
      </div>
    );
  }

  if (slug === 'project-biofail') {
    return (
      <div className="md:col-span-2 bg-[#0e0707] text-amber-100 p-6 rounded-2xl border border-amber-950/40 space-y-4 flex flex-col justify-between h-80 relative overflow-hidden group shadow-md">
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-amber-400 flex items-center gap-1.5 bg-amber-950/20 rounded-bl-xl border-l border-b border-amber-950/30">
          <AlertTriangle className="h-3 w-3 animate-pulse text-amber-500" />
          <span>REAL-TIME EMISSIONS AUDIT MONITOR</span>
        </div>

        <div className="space-y-1 z-10">
          <span className="font-mono text-[8px] text-amber-500 font-bold uppercase tracking-widest">CORPORATE_DESTRUCTION_INDEX</span>
          <h3 className="font-serif text-xl font-normal text-amber-50">Impact Registry &amp; Audit Database</h3>
        </div>

        {/* Environment Audit Dossier Mockup */}
        <div className="bg-stone-950/80 p-3.5 rounded-lg border border-amber-950/30 font-mono text-[9px] text-stone-300 space-y-2 relative z-10">
          <div className="flex justify-between border-b border-amber-950/20 pb-1.5 items-center">
            <span className="text-amber-400 font-bold">[ DOSSIER #084: HUMMER CORP ]</span>
            <span className="bg-amber-950/40 text-amber-400 border border-amber-900/30 px-1 rounded text-[7.5px]">SECTOR: AUTOMOTIVE</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[8px]">
            <div className="space-y-0.5">
              <span className="text-stone-500 block">DEFORESTATION</span>
              <span className="font-sans text-xs text-amber-250 font-bold">353 Hectares Cleared</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-stone-500 block">CARBON EMISSIONS</span>
              <span className="font-sans text-xs text-amber-250 font-bold">143 Megatonnes</span>
            </div>
          </div>
          <div className="text-[7.5px] text-stone-500 leading-snug pt-1 border-t border-stone-900 flex justify-between">
            <span>Scope 1/2 Direct Logistics Impact</span>
            <span className="text-amber-500">12 Pending Case Audits</span>
          </div>
        </div>

        <div className="flex justify-between items-center z-10 font-mono text-[9px] text-amber-800/80 pt-3 border-t border-amber-950/20">
          <span>COAL GRID OVERREACH INDEX: +17%</span>
          <span>SOURCE: OPEN-SOURCE INTELLIGENCE</span>
        </div>
      </div>
    );
  }

  // Custom technical blueprint details for all 11 new dynamic projects
  const getBlueprintDetails = (slug: string) => {
    switch (slug) {
      case 'project-clonecraft':
        return {
          title: 'CLONECRAFT DUPLICATION ENGINE',
          badge: 'MOD INSTALLED',
          motto: 'JAMEZO97 AUTOMATED CLONES',
          metrics: [
            { label: 'MINECRAFT COMPATIBILITY', value: 'v1.12.2 / v1.8' },
            { label: 'CUSTOMIZABLE ENTITIES', value: 'ACTIVE' },
            { label: 'CLONE BEHAVIOR PROTOCOLS', value: 'CONFIGURED' },
            { label: 'MOD LOADER FRAMEWORK', value: 'FORGE COMPLIANT' }
          ]
        };
      case 'project-exoshape':
        return {
          title: 'CONMED EXOSHAPE FIXATION DEVICE',
          badge: 'SURGICAL CLEARANCE',
          motto: 'ORTHOPEDIC SURGICAL SYSTEMS',
          metrics: [
            { label: 'PULL-OUT TENSILE STRENGTH', value: '480 N' },
            { label: 'MATERIAL FORMULATION', value: 'ALL-PEEK FASTENER' },
            { label: 'ANATOMICAL FIXATION SITES', value: 'TIBIAL & FEMORAL' },
            { label: 'SUTURE ANCHOR COHERENCE', value: 'OPTIMAL' }
          ]
        };
      case 'project-trueinheritor':
        return {
          title: 'TRUE INHERITOR DIGITAL ARCHIVE',
          badge: 'DOMAIN RESERVED',
          motto: 'PREMIUM ASSET PORTFOLIO',
          metrics: [
            { label: 'DOMAIN BRAND VALUATION', value: 'PREMIUM ASSET' },
            { label: 'CHARACTER LENGTH INDEX', value: '13 LETTERS' },
            { label: 'DEVELOPMENT STATUS', value: 'INCUBATING' },
            { label: 'FINTECH BRAND POTENTIAL', value: 'HIGH' }
          ]
        };
      case 'project-grzu':
        return {
          title: 'GRZU 4-LETTER DIGITAL DOMAIN',
          badge: 'DOMAIN RESERVED',
          motto: 'PREMIUM ASSET PORTFOLIO',
          metrics: [
            { label: 'CHARACTER LENGTH INDEX', value: '4 LETTERS (LLLL)' },
            { label: 'BRANDABILITY MATRIX', value: 'ULTRA-HIGH' },
            { label: 'MEMORABILITY INDEX', value: '9.8 / 10.0' },
            { label: 'DEVELOPMENT STATUS', value: 'INCUBATING' }
          ]
        };
      case 'project-rp2p':
        return {
          title: 'RP2P DECENTRALIZED OVERLAY',
          badge: 'DOMAIN RESERVED',
          motto: 'PREMIUM ASSET PORTFOLIO',
          metrics: [
            { label: 'CHARACTER LENGTH INDEX', value: '5 CHARS (CVCVC)' },
            { label: 'NETWORK TECH BRANDING', value: 'OPTIMAL' },
            { label: 'DEVELOPMENT STATUS', value: 'INCUBATING' },
            { label: 'PEER-TO-PEER POTENTIAL', value: 'MAXIMUM' }
          ]
        };
      case 'project-holograph':
        return {
          title: 'HOLOGRAPH OMNICHAIN PROTOCOL',
          badge: 'MAINNET ACTIVE',
          motto: 'EVM-COMPATIBLE MULTICHAIN',
          metrics: [
            { label: 'CROSS-CHAIN BRIDGE SPEED', value: '< 12 SEC' },
            { label: 'OMNICHAIN NFT MINTING', value: 'VERIFIED' },
            { label: 'SMART CONTRACT STANDARD', value: 'ERC-721 / ERC-1155' },
            { label: 'BLOCKCHAIN COVERAGE RANGE', value: 'EVM NETWORKS' }
          ]
        };
      case 'project-protosquad':
        return {
          title: 'PROTOSQUAD ENGINEERING LAB',
          badge: 'STUDIO ACTIVE',
          motto: 'JOHN BOEZI MECHANICAL DESIGN',
          metrics: [
            { label: 'CAD MODELING SUITES', value: 'SOLIDWORKS / CNC' },
            { label: 'ADDITIVE PROTOTYPING', value: 'MULTIMATERIAL' },
            { label: 'FABRICATION CAPABILITIES', value: 'PRECISION MILLING' },
            { label: 'CONSULTATIVE DESIGN DESK', value: 'OPERATIONAL' }
          ]
        };
      case 'project-izpe':
        return {
          title: 'IZPE 4-LETTER BRANDABLE KEY',
          badge: 'DOMAIN RESERVED',
          motto: 'PREMIUM ASSET PORTFOLIO',
          metrics: [
            { label: 'CHARACTER LENGTH INDEX', value: '4 LETTERS (LLLL)' },
            { label: 'BASQUE REGION RELEVANCE', value: 'HIGH' },
            { label: 'ENGINEERING BRAND ABILITY', value: 'OPTIMAL' },
            { label: 'DEVELOPMENT STATUS', value: 'INCUBATING' }
          ]
        };
      case 'project-bridge':
        return {
          title: 'BRIDGEWEBS WEBSITE PORTAL',
          badge: 'SAAS OPERATIONAL',
          motto: 'CONTRACT BRIDGE CLUB BUILDER',
          metrics: [
            { label: 'ACTIVE BRIDGE CLUB WEBSITES', value: '3,500+ CLUBS' },
            { label: 'SCORING SOFTWARE INTEGRATION', value: 'COMPATIBLE' },
            { label: 'RESULTS PUBLISHING DELAY', value: '0 ms (IMMEDIATE)' },
            { label: 'DUPLICATE BRIDGE SYSTEMS', value: 'SUPPORTED' }
          ]
        };
      case 'project-aleph':
        return {
          title: 'OCCRP ALEPH INVESTIGATIVE TOOL',
          badge: 'PUBLIC ACCESS',
          motto: 'OPEN-SOURCE RECORD INDEXING',
          metrics: [
            { label: 'INDEXED ARCHIVES & LEAKS', value: 'BILLIONS OF ITEMS' },
            { label: 'DEVELOPER CONSORTIUM', value: 'OCCRP SUPPORTED' },
            { label: 'CROSS-SOURCE COHERENCE', value: 'NOMINAL' },
            { label: 'INVESTIGATIVE DATA CLUSTERS', value: 'VERIFIED' }
          ]
        };
      case 'project-jailsoft':
        return {
          title: 'JAILSOFT CORRECTIONS DATABASE',
          badge: 'SYSTEM ACTIVE',
          motto: 'ENTERPRISE JAIL MANAGEMENT',
          metrics: [
            { label: 'OFFENDER RECORDS TRACKING', value: 'ACTIVE' },
            { label: 'BOOKING & LOGGING SYSTEM', value: 'VERIFIED' },
            { label: 'FACILITY SECURITY COHERENCE', value: 'NOMINAL' },
            { label: 'ADMINISTRATIVE USER CORES', value: 'MULTI-TENANT' }
          ]
        };
      default:
        return {
          title: 'TECHNICAL CORE SCHEMATIC',
          badge: 'STANDBY',
          motto: 'ARCSCAPE VENTURE LABS',
          metrics: [
            { label: 'SYSTEM COHERENCE RATE', value: '100%' },
            { label: 'REDUNDANCY COEFFICIENT', value: '1.0' },
            { label: 'BANDWIDTH ALLOCATION', value: 'FLUID' },
            { label: 'AUTHENTICATION GATEWAY', value: 'ACTIVE' }
          ]
        };
    }
  };

  // Check if this slug is a custom dynamic blueprint project
  const isBlueprintSlug = [
    'project-clonecraft',
    'project-exoshape',
    'project-trueinheritor',
    'project-grzu',
    'project-rp2p',
    'project-holograph',
    'project-protosquad',
    'project-izpe',
    'project-bridge',
    'project-aleph',
    'project-jailsoft'
  ].includes(slug);

  if (isBlueprintSlug) {
    const bp = getBlueprintDetails(slug);
    return (
      <div className="md:col-span-2 bg-stone-950 text-stone-100 p-6 rounded-2xl border border-stone-900 space-y-4 flex flex-col justify-between h-80 relative overflow-hidden group shadow-md">
        {/* Blueprint Header */}
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-amber-500 flex items-center gap-1.5 bg-amber-950/40 rounded-bl-xl border-l border-b border-amber-900/30">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span>{bp.badge}</span>
        </div>

        <div className="space-y-1 z-10">
          <span className="font-mono text-[8px] text-amber-500 font-bold uppercase tracking-widest">{bp.motto}</span>
          <h3 className="font-serif text-xl font-normal text-stone-150">{bp.title}</h3>
        </div>

        {/* Blueprint CAD Schematic Simulator */}
        <div className="flex-1 border border-stone-850/70 bg-stone-900/20 rounded-xl p-3.5 flex items-center gap-5 z-10 relative select-none overflow-hidden">
          {/* Engineering millimeter grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1c1917_1px,transparent_1px),linear-gradient(to_bottom,#1c1917_1px,transparent_1px)] bg-[size:12px_12px] opacity-25 pointer-events-none" />
          
          {/* Center alignment vectors */}
          <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-amber-500/10 border-dashed" />
          
          {/* Animated radar/scope indicator */}
          <div className="w-1/3 h-full flex items-center justify-center relative shrink-0">
            <div className="absolute h-20 w-20 rounded-full border border-amber-500/20" />
            <div className="absolute h-14 w-14 rounded-full border border-amber-500/30 border-dashed animate-[spin_10s_linear_infinite]" />
            <div className="absolute h-6 w-6 rounded-full border border-amber-500/40" />
            <div className="absolute h-1.5 w-1.5 bg-amber-400 rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            
            {/* Sweeping radar arm line */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute origin-center h-10 w-[1px] bg-gradient-to-t from-transparent to-amber-500/60 top-[calc(50%-40px)]"
            />
          </div>

          {/* Dynamic numeric metrics */}
          <div className="flex-1 grid grid-cols-2 gap-x-4 gap-y-3 font-mono text-[8.5px] text-stone-400 border-l border-stone-850/60 pl-4 py-1">
            {bp.metrics.map((m, i) => (
              <div key={i} className="space-y-0.5">
                <span className="text-stone-500 uppercase text-[7px] block tracking-wider">{m.label}</span>
                <span className="text-stone-200 font-bold block">{m.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Blueprint Footer */}
        <div className="flex justify-between items-center z-10 font-mono text-[9px] text-stone-500 pt-3 border-t border-stone-900">
          <span>SCHEMATIC CORE VERSION: V3.42</span>
          <span>REAL-TIME EMULATOR: NOMINAL</span>
        </div>
      </div>
    );
  }

  if (slug === 'project-kundalink') {
    return (
      <div className="md:col-span-2 bg-[#FAF6F0] p-6 rounded-2xl border border-[#EDE2D4] space-y-4 flex flex-col justify-between h-80 relative overflow-hidden group shadow-xs">
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-[#A67C52] flex items-center gap-1.5 bg-white/60 rounded-bl-xl border-l border-b border-[#EDE2D4]">
          <Heart className="h-3 w-3 text-amber-600 animate-pulse" />
          <span>MENTOR_NETWORK_ONLINE</span>
        </div>

        <div className="space-y-1">
          <span className="font-mono text-[8px] text-amber-600 font-bold uppercase tracking-widest">KUNDALINI_ZEN_TEACHERS</span>
          <h3 className="font-serif text-xl font-normal text-stone-800">Spiritual Teacher Directory</h3>
        </div>

        {/* Directory profile mockup */}
        <div className="flex-1 flex gap-3 items-center justify-center z-10 py-1">
          <div className="bg-white p-3 rounded-xl border border-[#EDE2D4] flex gap-3 max-w-xs shadow-xs w-full">
            {/* Avatar block with mandala design */}
            <div className="h-10 w-10 rounded-full bg-amber-50 border border-amber-200 shrink-0 flex items-center justify-center font-serif text-amber-700 font-bold text-xs">
              ॐ
            </div>
            <div className="space-y-1 text-left w-full">
              <div className="flex justify-between items-center w-full">
                <span className="font-serif text-xs font-bold text-stone-800">Pritam Singh</span>
                <span className="bg-amber-100 text-amber-800 text-[6.5px] px-1 rounded uppercase tracking-wider font-mono">Certified</span>
              </div>
              <p className="text-[9px] text-stone-400 font-sans leading-tight">Expert Kundalini Yoga &amp; Amrit Vela Sadhana Guide.</p>
              <div className="flex justify-between text-[7px] font-mono text-stone-500 pt-1 border-t border-stone-100">
                <span>VIBE MATCH: 98%</span>
                <span>LOS ANGELES, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center font-mono text-[9px] text-[#A67C52] pt-3 border-t border-[#EDE2D4]">
          <span>ZEN &amp; KUNDALINI DIRECTORY REGISTER</span>
          <span>100% SECURE MENTOR MATCH</span>
        </div>
      </div>
    );
  }

  if (slug === 'project-chosenspot') {
    return (
      <div className="md:col-span-2 bg-stone-100 p-6 rounded-2xl border border-stone-200 space-y-4 flex flex-col justify-between h-80 relative overflow-hidden group shadow-xs">
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-[#7D123D] flex items-center gap-1.5 bg-white rounded-bl-xl border-l border-b border-stone-200">
          <MapPin className="h-3 w-3" />
          <span>CANANDAIGUA LAKE, NY</span>
        </div>

        <div className="space-y-1">
          <span className="font-mono text-[8px] text-stone-500 font-bold uppercase tracking-widest">FINGER_LAKES_HERITAGE_ARCHIVE</span>
          <h3 className="font-serif text-xl font-normal text-stone-900">Fine Lakeside Living &amp; Media</h3>
        </div>

        {/* Bento grid scenic columns */}
        <div className="grid grid-cols-2 gap-3 h-32">
          <div className="bg-white p-3 rounded-lg border border-stone-200/80 flex flex-col justify-between font-serif">
            <div>
              <h4 className="text-xs font-bold text-stone-900 leading-snug">Cottage Rental Directory</h4>
              <p className="text-[10px] text-stone-400 pt-0.5 leading-snug font-sans">Curated listings for premium lakeside cabins.</p>
            </div>
            <span className="font-mono text-[8px] uppercase tracking-wider text-[#7D123D] font-bold block mt-1">Bookings Open &gt;</span>
          </div>

          <div className="bg-white p-3 rounded-lg border border-stone-200/80 flex flex-col justify-between font-serif">
            <div>
              <h4 className="text-xs font-bold text-stone-900 leading-snug">Artisan Vineyard Map</h4>
              <p className="text-[10px] text-stone-400 pt-0.5 leading-snug font-sans">Organic wine tasting tours around the lake.</p>
            </div>
            <span className="font-mono text-[8px] uppercase tracking-wider text-[#7D123D] font-bold block mt-1">View Itinerary &gt;</span>
          </div>
        </div>

        <div className="flex justify-between items-center font-mono text-[9px] text-stone-500 pt-3 border-t border-stone-200">
          <span>SENECA: THE CHOSEN SPOT OF WATERWAYS</span>
          <span>15.5 MILES OF PURE BASIN OPTICS</span>
        </div>
      </div>
    );
  }

  return null;
}

function ProjectDetailView({ 
  viewState, 
  onBack 
}: { 
  viewState: string; 
  onBack: () => void; 
}) {
  const currentProject = projectsData.find(p => p.viewState === viewState);
  if (!currentProject) return null;

  return (
    <motion.section 
      key={`${viewState}-view`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-8 max-w-4xl mx-auto w-full"
    >
      {/* Back button and title */}
      <div className="space-y-2">
        <button 
          onClick={onBack}
          className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
        >
          <ArrowLeft className="h-3 w-3" />
          <span>Back to Projects</span>
        </button>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-100 pb-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">{currentProject.domain}</h2>
            <span className="font-mono text-[9px] uppercase text-[#7D123D] tracking-widest font-bold">
              {"0" + (projectsData.indexOf(currentProject) + 1) + " // " + currentProject.category}
            </span>
          </div>
          <div className="font-mono text-[10px] text-stone-400 bg-stone-50 border border-stone-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
            {currentProject.type}
          </div>
        </div>
      </div>

      {/* Dynamic visual dashboard layout and metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Visual Mockup widget on the left */}
        <ProjectVisualMockup slug={viewState} />

        {/* Content detail panel on the right */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between h-80">
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-stone-900 text-sm">Product Matrix</h4>
            <p className="text-[11px] text-stone-400 leading-relaxed font-sans">
              Deploying highly specialized digital frameworks and physical materials under standard compliance protocols.
            </p>
            
            <div className="space-y-3 font-mono text-[10px] pt-2">
              <div className="flex justify-between pb-1.5 border-b border-stone-100">
                <span className="text-stone-400">Launch Timeline:</span>
                <span className="text-stone-800 font-bold">Q2 2026</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-stone-100">
                <span className="text-stone-400">Secured Funding:</span>
                <span className="text-stone-800 font-bold">Seed Tier I</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-stone-100">
                <span className="text-stone-400">Audit Status:</span>
                <span className="text-emerald-600 font-bold">COMPLIANT</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-stone-100">
                <span className="text-stone-400">Partner Access:</span>
                <span className="text-stone-800 font-bold">ACTIVE</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <span className="font-mono text-[8px] text-stone-400 uppercase tracking-widest block font-bold mb-1">Ecosystem Integration</span>
            <span className="text-xs text-stone-700 font-serif italic leading-snug block">Aligned under general partnership capital.</span>
          </div>
        </div>

      </div>

      {/* Rich descriptive editorial layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        <div className="md:col-span-2 space-y-4">
          <h3 className="font-serif text-xl text-stone-950 font-normal">Aesthetic Architecture &amp; Mission</h3>
          <p className="text-xs text-stone-500 leading-relaxed font-sans">
            {currentProject.tagline} This platform is engineered strictly to resolve category-level hurdles in its respective industry. By combining procedural design, strict standards compliance, and an unhurried focus on sensory user layouts, we build sustainable, highly capitalized assets.
          </p>
          <p className="text-xs text-stone-500 leading-relaxed font-sans">
            We avoid modern hype trends in favor of absolute functional utility and mathematical optimization, ensuring that every pixel, interaction, and database record serves to build authentic, long-term brand authority.
          </p>
        </div>
        <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/50 space-y-3">
          <h4 className="font-serif font-bold text-stone-900 text-xs uppercase tracking-wider">Strategic Pillars</h4>
          <ul className="space-y-2 text-[11px] text-stone-500 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7D123D] shrink-0 mt-1.5" />
              <span>Deep layout integrity and frictionless micro-interactions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7D123D] shrink-0 mt-1.5" />
              <span>Full compliance with security and privacy regulations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7D123D] shrink-0 mt-1.5" />
              <span>Continuous validation loops across high-end testing desks.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Central Call To Action at Bottom Center */}
      <div className="flex flex-col items-center justify-center pt-12 pb-4">
        <a 
          href={currentProject.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-8 py-3.5 bg-stone-950 hover:bg-[#7D123D] text-white font-mono text-[10px] uppercase tracking-widest rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer duration-300 animate-bounce"
        >
          <Globe className="h-3.5 w-3.5" />
          <span>VISIT {currentProject.domain.toUpperCase()}</span>
        </a>
        <span className="text-[9px] text-stone-400 font-mono mt-2.5 uppercase tracking-wider">SECURE VENTURE GATEWAY ACTIVE</span>
      </div>
    </motion.section>
  );
}

// Types of views in our dynamic single-page system
type ViewType = 
  | 'portal' 
  | 'dashboard'
  | 'about' 
  | 'support' 
  | 'login-help' 
  | 'seed-incubator' 
  | 'target-arbitrage' 
  | 'strategic-partnerships' 
  | 'legal-network' 
  | 'compliance-board' 
  | 'hr-advisory' 
  | 'node-register' 
  | 'token-dtd' 
  | 'xhtml-schemas' 
  | 'registered-partners' 
  | 'portal-dtd' 
  | 'seed-network' 
  | 'xhtml-spec'
  | 'project-muzcast'
  | 'project-repulink'
  | 'project-xnui'
  | 'project-biofail'
  | 'project-kundalink'
  | 'project-chosenspot'
  | 'project-clonecraft'
  | 'project-exoshape'
  | 'project-trueinheritor'
  | 'project-grzu'
  | 'project-rp2p'
  | 'project-holograph'
  | 'project-protosquad'
  | 'project-izpe'
  | 'project-bridge'
  | 'project-aleph'
  | 'project-jailsoft'
  | 'project-plano'
  | 'project-humandemo';

const projectsData = [
  {
    viewState: 'project-muzcast' as const,
    domain: 'Muzcast.com',
    category: 'SPIRITUAL NETWORK',
    tagline: 'A refined global registry of active spiritual rows connecting isolated hearts to real-time online prayer congregations.',
    type: 'PRAYER CONGREGATION HUB',
    url: 'https://muzcast.com',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-indigo-600',
    accentBorder: 'group-hover:border-indigo-500/40',
    accentText: 'group-hover:text-indigo-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(99,102,241,0.25)]',
    accentBar: 'bg-indigo-500'
  },
  {
    viewState: 'project-repulink' as const,
    domain: 'repulink.com',
    category: 'CREDIBILITY NETWORK',
    tagline: 'The global standard for AI influence, digital authenticity, and verified reputation networks.',
    type: 'REPUTATION SAAS',
    url: 'https://repulink.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-cyan-500',
    accentBorder: 'group-hover:border-cyan-400/40',
    accentText: 'group-hover:text-cyan-200',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(34,211,238,0.25)]',
    accentBar: 'bg-cyan-400'
  },
  {
    viewState: 'project-xnui' as const,
    domain: 'xnui.com',
    category: 'VISUAL STUDIO',
    tagline: 'Boutique digital design studio led by Sofia Varian, offering premium UX services and tactile interface systems.',
    type: 'UX & DESIGN ATELIER',
    url: 'https://xnui.com',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-emerald-500',
    accentBorder: 'group-hover:border-emerald-400/40',
    accentText: 'group-hover:text-emerald-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(52,211,153,0.25)]',
    accentBar: 'bg-emerald-400'
  },
  {
    viewState: 'project-biofail' as const,
    domain: 'biofail.com',
    category: 'ENVIRONMENTAL WATCH',
    tagline: 'Definitive real-time database of global corporate environmental impact, forest clearing, and carbon emissions auditing.',
    type: 'ENVIRONMENTAL IMPACT INDEX',
    url: 'https://biofail.com',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-amber-500',
    accentBorder: 'group-hover:border-amber-400/40',
    accentText: 'group-hover:text-amber-200',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(245,158,11,0.25)]',
    accentBar: 'bg-amber-400'
  },
  {
    viewState: 'project-kundalink' as const,
    domain: 'kundalink.com',
    category: 'YOGA DIRECTORY',
    tagline: 'Verify, locate, and book certified Kundalini and Zen breathwork mentors worldwide.',
    type: 'TEACHER & RESOURCE CENTER',
    url: 'https://kundalink.com',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-fuchsia-500',
    accentBorder: 'group-hover:border-fuchsia-400/40',
    accentText: 'group-hover:text-fuchsia-200',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(217,70,239,0.25)]',
    accentBar: 'bg-fuchsia-400'
  },
  {
    viewState: 'project-chosenspot' as const,
    domain: 'chosenspot.com',
    category: 'GEOCACHING',
    tagline: 'Uncover hidden parameters, secret coordinates, and cryptic trails shared by a community of specialized explorers.',
    type: 'GEOCACHING NETWORK',
    url: 'https://chosenspot.com',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-sky-500',
    accentBorder: 'group-hover:border-sky-400/40',
    accentText: 'group-hover:text-sky-200',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(14,165,233,0.25)]',
    accentBar: 'bg-sky-400'
  },
  {
    viewState: 'project-clonecraft' as const,
    domain: 'clonecraft.com',
    category: 'AI SYSTEMS',
    tagline: 'The classified program for elite digital replication, AI clones, and synthetic twin systems.',
    type: 'SYNTHETIC TWIN PLATFORM',
    url: 'https://www.clonecraft.com/',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-teal-600',
    accentBorder: 'group-hover:border-teal-500/40',
    accentText: 'group-hover:text-teal-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(20,184,166,0.25)]',
    accentBar: 'bg-teal-500'
  },
  {
    viewState: 'project-exoshape' as const,
    domain: 'exoshape.com',
    category: 'DEEP TECH',
    tagline: 'A new class of adaptive structures, active materials, and advanced geometric R&D programs.',
    type: 'ADAPTIVE STRUCTURES',
    url: 'https://www.exoshape.com/',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-purple-600',
    accentBorder: 'group-hover:border-purple-500/40',
    accentText: 'group-hover:text-purple-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(168,85,247,0.25)]',
    accentBar: 'bg-purple-500'
  },
  {
    viewState: 'project-trueinheritor' as const,
    domain: 'trueinheritor.com',
    category: 'FINTECH PORTFOLIO',
    tagline: 'Premium digital estate, legacy trusts, and secure smart wealth transfer brandable asset.',
    type: 'DIGITAL ASSET',
    url: 'https://trueinheritor.com',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-amber-600',
    accentBorder: 'group-hover:border-amber-500/40',
    accentText: 'group-hover:text-amber-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(245,158,11,0.25)]',
    accentBar: 'bg-amber-500'
  },
  {
    viewState: 'project-grzu' as const,
    domain: 'grzu.com',
    category: 'DEVELOPER TOOLS',
    tagline: 'High-performance, real-time API monitoring, latency tracking, and instant SLA uptime alerting.',
    type: 'API MONITORING PLATFORM',
    url: 'https://www.grzu.com/',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-green-600',
    accentBorder: 'group-hover:border-green-500/40',
    accentText: 'group-hover:text-green-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(34,197,94,0.25)]',
    accentBar: 'bg-green-500'
  },
  {
    viewState: 'project-rp2p' as const,
    domain: 'rp2p.com',
    category: 'SOCIAL EXPERIMENT',
    tagline: 'A minimalist anonymous peer-to-peer messaging experiment: send one message, receive one back once a day.',
    type: 'P2P PROTOCOL',
    url: 'https://www.rp2p.com/',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-indigo-600',
    accentBorder: 'group-hover:border-indigo-500/40',
    accentText: 'group-hover:text-indigo-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(99,102,241,0.25)]',
    accentBar: 'bg-indigo-500'
  },
  {
    viewState: 'project-holograph' as const,
    domain: 'holograph.cc',
    category: 'SPATIAL TECH',
    tagline: 'A stealth-mode spatial technology enterprise interface built around immersive volumetric realities.',
    type: 'SPATIAL SYSTEMS',
    url: 'https://www.holograph.cc/',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-violet-600',
    accentBorder: 'group-hover:border-violet-500/40',
    accentText: 'group-hover:text-violet-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(139,92,246,0.25)]',
    accentBar: 'bg-violet-500'
  },
  {
    viewState: 'project-protosquad' as const,
    domain: 'protosquad.com',
    category: 'ENGINEERING',
    tagline: 'Precision mechanical engineering design, rapid additive prototyping, and SolidWorks CAD modeling studio.',
    type: 'PROTOTYPING LAB',
    url: 'https://www.protosquad.com/',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-rose-600',
    accentBorder: 'group-hover:border-rose-500/40',
    accentText: 'group-hover:text-rose-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(244,63,94,0.25)]',
    accentBar: 'bg-rose-500'
  },
  {
    viewState: 'project-izpe' as const,
    domain: 'izpe.com',
    category: 'SCIENCE PORTAL',
    tagline: 'An interactive science portal exploring quantum zero-point energy, vacuum fluctuations, and the Casimir effect.',
    type: 'QUANTUM RESEARCH HUB',
    url: 'https://www.izpe.com/',
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-blue-600',
    accentBorder: 'group-hover:border-blue-500/40',
    accentText: 'group-hover:text-blue-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(59,130,246,0.25)]',
    accentBar: 'bg-blue-500'
  },
  {
    viewState: 'project-bridge' as const,
    domain: 'bridge.ws',
    category: 'DESIGN DIRECTORY',
    tagline: 'An independent database and verified ledger of premier web designers, software developers, and engineering partners.',
    type: 'SYSTEM AUDIT DIRECTORY',
    url: 'https://www.bridge.ws/',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-emerald-600',
    accentBorder: 'group-hover:border-emerald-500/40',
    accentText: 'group-hover:text-emerald-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(16,185,129,0.25)]',
    accentBar: 'bg-emerald-500'
  },
  {
    viewState: 'project-aleph' as const,
    domain: 'aleph.cc',
    category: 'AI INCUBATOR',
    tagline: 'A high-performance incubator for AI transformation, strategic equity exchange, and cognitive Knowledge Atlas.',
    type: 'AI ACCELERATOR PLATFORM',
    url: 'https://www.aleph.cc/',
    image: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-stone-600',
    accentBorder: 'group-hover:border-stone-500/40',
    accentText: 'group-hover:text-stone-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(120,113,108,0.25)]',
    accentBar: 'bg-stone-500'
  },
  {
    viewState: 'project-jailsoft' as const,
    domain: 'jailsoft.com',
    category: 'GOVERNMENT TECH',
    tagline: 'High-uptime jail management software (JMS), secure prisoner records, and CJIS-compliant corrections technology platforms.',
    type: 'JAIL MANAGEMENT SYSTEMS',
    url: 'https://www.jailsoft.com/',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-red-600',
    accentBorder: 'group-hover:border-red-500/40',
    accentText: 'group-hover:text-red-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(220,38,38,0.25)]',
    accentBar: 'bg-red-500'
  },
  {
    viewState: 'project-plano' as const,
    domain: 'plano.cc',
    category: 'ROOM DESIGNER',
    tagline: 'Design your room layout, arrange furniture, snap to grid, and auto-save instantly with no login required.',
    type: 'FREE FLOOR PLAN DESIGNER',
    url: 'https://plano.cc/',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-amber-600',
    accentBorder: 'group-hover:border-amber-500/40',
    accentText: 'group-hover:text-amber-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(245,158,11,0.25)]',
    accentBar: 'bg-amber-500'
  },
  {
    viewState: 'project-humandemo' as const,
    domain: 'humandemo.com',
    category: 'PERFORMANCE TECH',
    tagline: 'Optimize your daily focus, sleep architecture, and biological rhythms via a personalized performance system.',
    type: 'FOCUS PERFORMANCE SAAS',
    url: 'https://humandemo.com/',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80',
    accentBg: 'group-hover:bg-cyan-600',
    accentBorder: 'group-hover:border-cyan-500/40',
    accentText: 'group-hover:text-cyan-300',
    glowColor: 'group-hover:shadow-[0_15px_30px_rgba(6,182,212,0.25)]',
    accentBar: 'bg-cyan-500'
  }
];

function getProjectIcon(domain: string) {
  const cn = "h-4.5 w-4.5 text-stone-600 group-hover:text-[#7D123D] transition-colors duration-300";
  switch (domain.toLowerCase()) {
    case 'muzcast.com':
      return <Users className={cn} />;
    case 'repulink.com':
      return <Cpu className={cn} />;
    case 'xnui.com':
      return <Layers className={cn} />;
    case 'biofail.com':
      return <Gamepad2 className={cn} />;
    case 'kundalink.com':
      return <Heart className={cn} />;
    case 'chosenspot.com':
      return <Map className={cn} />;
    case 'clonecraft.com':
      return <Sparkles className={cn} />;
    case 'exoshape.com':
      return <Layers className={cn} />;
    case 'trueinheritor.com':
      return <Lock className={cn} />;
    case 'grzu.com':
      return <Activity className={cn} />;
    case 'rp2p.com':
      return <Radio className={cn} />;
    case 'holograph.cc':
      return <Compass className={cn} />;
    case 'protosquad.com':
      return <Building className={cn} />;
    case 'izpe.com':
      return <Cpu className={cn} />;
    case 'bridge.ws':
      return <ArrowUpRight className={cn} />;
    case 'aleph.cc':
      return <LineChart className={cn} />;
    case 'jailsoft.com':
      return <Shield className={cn} />;
    case 'plano.cc':
      return <Compass className={cn} />;
    case 'humandemo.com':
      return <Users className={cn} />;
    default:
      return <Globe className={cn} />;
  }
}

export default function LandingPage() {
  const [activeView, setActiveView] = useState<ViewType>('portal');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (activeView !== 'portal') return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeView]);

  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [loadingMessage, setLoadingMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [dashboardSearch, setDashboardSearch] = useState('');
  
  // Support Page States
  const [supportName, setSupportName] = useState('');
  const [supportEmail, setSupportEmail] = useState('');
  const [supportType, setSupportType] = useState('access');
  const [supportMessage, setSupportMessage] = useState('');
  const [supportSuccess, setSupportSuccess] = useState(false);

  // Diagnostic checklist state for Help Page
  const [diagnosticRun, setDiagnosticRun] = useState(false);
  const [diagnosticProgress, setDiagnosticProgress] = useState(0);

  // Dynamic calculator state for Arbitrage Page
  const [calcCapital, setCalcCapital] = useState(150000);
  const [calcArbitrageRate, setCalcArbitrageRate] = useState(4.2);

  // Global Node Registry map status pinger simulations
  const [nodePingStates, setNodePingStates] = useState<Record<string, 'syncing' | 'synced'>>({
    'tokyo': 'synced',
    'geneva': 'synced',
    'london': 'synced',
    'new-york': 'synced'
  });

  const passwordInputRef = useRef<HTMLInputElement>(null);

  const focusPasswordBox = () => {
    setActiveView('portal');
    setTimeout(() => {
      if (passwordInputRef.current) {
        passwordInputRef.current.focus();
        passwordInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    setStatus('loading');
    setLoadingMessage('HANDSHAKE...');
    await new Promise(resolve => setTimeout(resolve, 200));

    const cleanedPass = password.toLowerCase().trim();
    if (cleanedPass === 'arcscape' || cleanedPass === 'partner' || cleanedPass === 'open' || cleanedPass === 'admin') {
      setStatus('idle');
      setActiveView('dashboard');
      setIsLoginOpen(false);
    } else {
      setStatus('error');
    }
  };

  const handleResetForm = () => {
    setPassword('');
    setStatus('idle');
    setTimeout(focusPasswordBox, 100);
  };

  // Mock global node registry simulation
  const triggerPingNode = (nodeKey: string) => {
    setNodePingStates(prev => ({ ...prev, [nodeKey]: 'syncing' }));
    setTimeout(() => {
      setNodePingStates(prev => ({ ...prev, [nodeKey]: 'synced' }));
    }, 1200);
  };

  // Run a browser diagnostics check
  const runDiagnostics = () => {
    setDiagnosticRun(true);
    setDiagnosticProgress(10);
    const interval = setInterval(() => {
      setDiagnosticProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 15;
      });
    }, 150);
  };

  // Raw XHTML STRICT mock payload for the specification page
  const xhtmlCodeString = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
  <title>Arcscape Venture Platform</title>
  <meta http-equiv="Content-Type" content="application/xhtml+xml; charset=utf-8" />
  <style type="text/css">
    body { background: #fcfbfa; color: #1c1917; font-family: "Plus Jakarta Sans", sans-serif; margin: 0; padding: 0; }
    .canvas { max-width: 480px; margin: 100px auto; padding: 40px; background: #ffffff; border: 1px solid #e7e5e4; border-radius: 24px; text-align: center; }
    h1 { font-family: "Playfair Display", serif; font-size: 24px; color: #1c1917; font-weight: 400; margin-bottom: 8px; }
    p { font-size: 13px; color: #57534e; line-height: 1.6; }
    .btn-key { background: #7d123d; color: #ffffff; padding: 12px 24px; border-radius: 9999px; text-decoration: none; font-size: 11px; font-family: "JetBrains Mono", monospace; letter-spacing: 0.15em; text-transform: uppercase; display: inline-block; }
  </style>
</head>
<body>
  <div class="canvas">
    <h1>Arcscape Capital</h1>
    <p>We incubate, fund, and scale the next wave of high-end, category-defining consumer and deep tech ventures under rigid layout rendering principles.</p>
    <div style="margin-top: 24px;">
      <a href="#access" class="btn-key">Request Token</a>
    </div>
  </div>
</body>
</html>`;

  // Sample ventures for our gorgeous dynamic dashboard
  const ventures = [
    { name: 'Kestrel Genomics', industry: 'Biotech & Health', desc: 'Advanced CRISPR cell-therapy acceleration systems simplifying custom pipeline operations.', allocation: '$8.2M', stage: 'Series A', progress: 88, status: 'Active' },
    { name: 'Veridian Systems', industry: 'Clean Energy', desc: 'Decentralized municipal battery storage load balancing for maximum community resiliency.', allocation: '$12.5M', stage: 'Cohort V', progress: 95, status: 'Active' },
    { name: 'Aether Quantum', industry: 'Deep Tech', desc: 'Room-temperature optical quantum processors optimized for enterprise logistics modeling.', allocation: '$5.4M', stage: 'Pre-Seed', progress: 42, status: 'Pending Approval' },
    { name: 'Lumina Ceramics', industry: 'Materials', desc: 'Ultra-thin carbon-capture molecular materials integrated into commercial skyscraper exterior glass.', allocation: '$6.1M', stage: 'Seed II', progress: 71, status: 'Active' },
    { name: 'Nautilus Avionics', industry: 'Aerospace', desc: 'Unmanned maritime thermal-scanning systems for real-time sustainable oceanographic survey.', allocation: '$9.6M', stage: 'Series B', progress: 60, status: 'In Review' },
    { name: 'Siren Acoustics', industry: 'Hardware', desc: 'Anisotropic solid-state micro-acoustic transducers with zero harmonic distortion values.', allocation: '$4.0M', stage: 'Cohort VI', progress: 15, status: 'Active' }
  ];

  const filteredVentures = ventures.filter(v => 
    v.name.toLowerCase().includes(dashboardSearch.toLowerCase()) ||
    v.industry.toLowerCase().includes(dashboardSearch.toLowerCase()) ||
    v.desc.toLowerCase().includes(dashboardSearch.toLowerCase())
  );

  return (
    <main className="relative min-h-screen bg-[#FAF8F4] text-stone-900 font-sans flex flex-col justify-between overflow-x-hidden">
      
      {/* Subtle pure aesthetic background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e0_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-0" />

      {/* Beautiful, ultra-premium geometric architectural blueprint graphic stretching full screen width at the top of the portal page */}
      {activeView === 'portal' && (
        <div className="absolute top-0 left-0 right-0 h-[480px] md:h-[540px] z-0 select-none pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Soft ambient backdrops */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F4] via-[#F3EFE9]/85 to-[#FAF8F4]" />
          <div className="absolute w-[800px] h-[360px] top-12 rounded-full bg-[#FAF0E4]/60 blur-[120px] mix-blend-multiply" />

          {/* Architectural Blueprint SVG spanning full-width */}
          <svg className="w-full h-full min-w-[1440px] overflow-visible" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Millimeter engineering graph grid pattern */}
              <pattern id="millimeterGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E6DDD2" strokeWidth="0.5" />
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#D3C5B1" strokeWidth="0.8" opacity="0.45" />
              </pattern>
            </defs>

            {/* Millimeter grid layer */}
            <rect width="100%" height="100%" fill="url(#millimeterGrid)" opacity="0.65" />

            {/* Interactive concentric layout grid that moves subtly with the cursor */}
            <motion.g
              animate={{
                x: mousePosition.x * 24,
                y: mousePosition.y * 12,
              }}
              transition={{ type: "spring", stiffness: 65, damping: 28, mass: 0.7 }}
            >
              {/* Central focus compass grid (concentric blueprint circles centered at 720, 140) */}
              <circle cx="720" cy="140" r="280" stroke="#A48660" strokeWidth="0.8" strokeDasharray="4,8" opacity="0.55" />
              <circle cx="720" cy="140" r="200" stroke="#7C5F3B" strokeWidth="1.2" opacity="0.65" />
              <circle cx="720" cy="140" r="140" stroke="#7C5F3B" strokeWidth="0.8" strokeDasharray="3,6" opacity="0.6" />
              <circle cx="720" cy="140" r="80" stroke="#5C462D" strokeWidth="1.0" opacity="0.75" />
              <circle cx="720" cy="140" r="30" stroke="#5C462D" strokeWidth="0.6" strokeDasharray="1,3" opacity="0.5" />
              
              {/* Vertical and horizontal alignment lines */}
              <line x1="720" y1="0" x2="720" y2="320" stroke="#7C5F3B" strokeWidth="0.8" strokeDasharray="6,6" opacity="0.65" />
              <line x1="120" y1="140" x2="1320" y2="140" stroke="#7C5F3B" strokeWidth="0.6" opacity="0.55" />
              
              {/* Grid helper axes */}
              <line x1="420" y1="20" x2="420" y2="300" stroke="#A48660" strokeWidth="0.5" strokeDasharray="3,6" opacity="0.45" />
              <line x1="1020" y1="20" x2="1020" y2="300" stroke="#A48660" strokeWidth="0.5" strokeDasharray="3,6" opacity="0.45" />
            </motion.g>

            {/* Trademark sweeping arch contours with subtle opposite motion for rich parallax depth */}
            <motion.g
              animate={{
                x: mousePosition.x * -14,
                y: mousePosition.y * -7,
              }}
              transition={{ type: "spring", stiffness: 50, damping: 24 }}
            >
              {/* Majestic vaulting arches */}
              <path 
                d="M 120 320 Q 720 40 1320 320" 
                stroke="#5C462D" 
                strokeWidth="2.2" 
                opacity="0.85"
              />
              <path 
                d="M 180 320 Q 720 80 1260 320" 
                stroke="#7C5F3B" 
                strokeWidth="1.2" 
                strokeDasharray="8,8"
                opacity="0.7"
              />
              <path 
                d="M 60 320 Q 720 10 1380 320" 
                stroke="#A48660" 
                strokeWidth="0.8" 
                strokeDasharray="2,4"
                opacity="0.5"
              />
            </motion.g>
          </svg>
        </div>
      )}

      {/* Modern Top Header Row */}
      <div className="w-full z-20 px-4 sm:px-10 md:px-16 pt-4 sm:pt-6 md:pt-8">
        <header className="w-full flex justify-between items-center pb-4 border-b border-stone-200/40">
          <div 
            onClick={() => setActiveView('portal')} 
            className="cursor-pointer group flex items-center justify-start overflow-visible w-32 sm:w-36 h-10"
          >
            <ArcscapeCurvedLogo size="small" />
          </div>
          
          <div>
            {activeView === 'dashboard' ? (
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse hidden sm:inline" />
                <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-600 font-bold hidden sm:inline">AUTHENTICATED LP</span>
                <button
                  type="button"
                  onClick={() => {
                    setPassword('');
                    setActiveView('portal');
                  }}
                  className="px-3 py-1 border border-stone-200 hover:border-stone-800 text-stone-700 font-mono text-[9px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer bg-white"
                >
                  Lock
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsLoginOpen(true)}
                className="px-3.5 py-1.5 bg-stone-900 hover:bg-stone-850 text-white font-mono text-[9px] font-bold uppercase tracking-wider rounded-lg transition-all shadow-xs cursor-pointer flex items-center gap-1.5"
              >
                <Lock className="h-2.5 w-2.5" />
                <span>Partner Access</span>
              </button>
            )}
          </div>
        </header>
      </div>

      {/* 2. DYNAMIC MAIN BODY ROUTER */}
      <div className="flex-1 w-full px-4 sm:px-10 md:px-16 py-8 z-10 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          
          {/* VIEW: PORTAL (HOME PAGE WITH CLOUDS AND PROJECTS INDEX) */}
          {activeView === 'portal' && (
            <motion.section 
              key="portal-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center w-full py-2 relative"
            >
              
              {/* Hero Banner with beautiful central spacing - background is now top-level full-width */}
              <div className="w-full relative flex flex-col items-center pt-8 pb-10 mb-8 overflow-visible z-10">
                {/* Central Logo - z-index ensures it renders perfectly on top of lines */}
                <div className="text-center z-10 w-full flex justify-center mb-6">
                  <ArcscapeCurvedLogo size="large" />
                </div>

                {/* Header Title for PROJECTS section inside the hero */}
                <div className="text-center select-none z-10 relative">
                  <h2 className="font-mono text-[9px] uppercase tracking-[0.35em] text-stone-500 font-bold mb-1">
                    INCUBATED PORTFOLIO
                  </h2>
                  <span className="text-[10px] text-stone-500 font-serif italic">
                    Category-defining digital networks &amp; private startups
                  </span>
                </div>
              </div>

              {/* PROJECTS GRID INDEX */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full z-10 px-4 mb-16">
                {projectsData.map((project, idx) => {
                  const isFailed = failedImages[project.domain];
                  const displayImage = isFailed 
                    ? `https://picsum.photos/seed/${project.domain.toLowerCase()}/600/400`
                    : project.image;

                  return (
                    <motion.a
                      key={project.domain}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -8, scale: 1.015 }}
                      className={`relative overflow-hidden p-5 rounded-xl border border-white/10 ${project.accentBorder} transition-all duration-500 cursor-pointer flex flex-col justify-between group h-52 shadow-md ${project.glowColor}`}
                    >
                      {/* Top primary color accent line bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1 z-20 ${project.accentBar} opacity-90 transition-all duration-500 group-hover:h-2`} />

                      {/* Top Metadata Row */}
                      <div className="relative z-10 w-full flex justify-between items-start">
                        <span className="font-mono text-[8px] uppercase tracking-wider text-stone-200 font-extrabold px-1.5 py-0.5 rounded bg-black/40 backdrop-blur-xs border border-white/5">
                          {project.category}
                        </span>
                        
                        <div className="h-6 w-6 rounded-full bg-black/40 backdrop-blur-xs border border-white/5 flex items-center justify-center text-white/80 group-hover:text-white group-hover:border-white/20 transition-all duration-300">
                          {React.cloneElement(getProjectIcon(project.domain), { className: "h-3 w-3 text-white/80 group-hover:text-white transition-colors" })}
                        </div>
                      </div>

                      {/* Background Image - highly visible, bright and crisp */}
                      <div className="absolute inset-0 z-0">
                        <Image 
                          src={displayImage} 
                          alt={project.domain} 
                          fill 
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          referrerPolicy="no-referrer"
                          onError={() => {
                            setFailedImages(prev => ({ ...prev, [project.domain]: true }));
                          }}
                          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-[0.85] group-hover:brightness-[1.0] contrast-105"
                        />
                        {/* Rich bottom-focused dark scrim for perfect readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-0" />
                      </div>

                      {/* Content - highly legible text overlay */}
                      <div className="relative z-10 w-full flex flex-col gap-1 mt-auto text-left">
                        <h3 className={`font-serif text-lg sm:text-xl font-extrabold text-white ${project.accentText} transition-colors tracking-tight drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.85)] flex items-center gap-1`}>
                          <span>{project.domain}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 shrink-0 transform translate-y-0.5 group-hover:translate-y-0 group-hover:translate-x-0.5" />
                        </h3>
                        <p className="text-[12px] sm:text-[13px] text-stone-200/95 leading-snug font-sans font-medium tracking-wide line-clamp-2 pr-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
                          {project.tagline}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

            </motion.section>
          )}

          {/* VIEW: PRIVATE VENTURE DASHBOARD (UNLOCKED STATE) */}
          {activeView === 'dashboard' && (
            <motion.section 
              key="dashboard-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="space-y-8 w-full"
            >
              
              {/* Dashboard Hero Block */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200/80 shadow-sm">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-mono text-[10px] text-emerald-600 uppercase tracking-widest font-bold">Authenticated Partner Session</span>
                  </div>
                  <h2 className="font-serif text-2xl font-normal text-stone-900 tracking-tight">Venture Capital &amp; Portfolio Registry</h2>
                  <p className="text-xs text-stone-400">Review real-time strategic incubation metrics, cohort development stages, and capital allocations.</p>
                </div>
                
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setPassword('');
                      setActiveView('portal');
                    }}
                    className="px-4 py-2 border border-stone-200 hover:bg-stone-50 text-stone-700 font-mono text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                  >
                    Lock Session
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveView('support')}
                    className="px-4 py-2 bg-[#7D123D] hover:bg-[#9E1D51] text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all shadow-sm cursor-pointer"
                  >
                    Advisor Desk
                  </button>
                </div>
              </div>

              {/* Statistical summary widgets */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-xl border border-stone-200/60 shadow-xs space-y-1.5">
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">Active Incubations</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-3xl font-medium text-stone-900">12</span>
                    <span className="text-emerald-600 text-xs font-mono font-bold">+2 Current Cohort</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-200/60 shadow-xs space-y-1.5">
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">Incubated Asset Capital</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-3xl font-medium text-stone-900">$45.8M</span>
                    <span className="text-stone-400 text-[10px] font-mono">Committed Funds</span>
                  </div>
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-200/60 shadow-xs space-y-1.5">
                  <span className="font-mono text-[10px] text-stone-400 uppercase tracking-widest block">Registry Status</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                    <span className="font-mono text-[11px] text-stone-700 font-bold uppercase">All Systems Verified</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Venture Search, Filtering, and List */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <h3 className="font-serif text-lg text-stone-900">Active Investment Portfolio</h3>
                  
                  {/* Dashboard custom filter input */}
                  <div className="relative w-full sm:w-64">
                    <input
                      type="text"
                      placeholder="Filter ventures, stages or markets..."
                      value={dashboardSearch}
                      onChange={(e) => setDashboardSearch(e.target.value)}
                      className="w-full bg-white border border-stone-200 rounded-lg pl-8 pr-3 py-1.5 text-xs font-mono placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#7D123D] focus:border-[#7D123D] transition-all"
                    />
                    <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-stone-400" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredVentures.length > 0 ? (
                    filteredVentures.map((v, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs space-y-4 flex flex-col justify-between hover:border-[#7D123D]/30 transition-all duration-300">
                        <div className="space-y-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <h4 className="font-serif font-semibold text-stone-900 text-base">{v.name}</h4>
                              <span className="font-mono text-[9px] uppercase text-stone-400 tracking-wider block">{v.industry}</span>
                            </div>
                            <span className="font-mono text-[10px] bg-stone-50 border border-stone-200 px-2 py-0.5 rounded text-stone-700 uppercase font-bold">{v.stage}</span>
                          </div>
                          <p className="text-xs text-stone-500 leading-relaxed">{v.desc}</p>
                        </div>

                        <div className="pt-2 border-t border-stone-100 space-y-2.5">
                          <div className="flex justify-between text-[11px] font-mono">
                            <span className="text-stone-400">Allocated Capital:</span>
                            <span className="text-stone-800 font-bold">{v.allocation}</span>
                          </div>
                          
                          {/* Progress/Cohort Development bar */}
                          <div className="space-y-1">
                            <div className="flex justify-between text-[9px] font-mono text-stone-400">
                              <span>Structuring Milestones</span>
                              <span>{v.progress}%</span>
                            </div>
                            <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                              <div className="h-full bg-[#7D123D]" style={{ width: `${v.progress}%` }} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-1 md:col-span-2 bg-stone-50 p-8 rounded-xl border border-dashed border-stone-200 text-center space-y-2">
                      <p className="text-sm font-serif text-stone-600">No portfolio companies matched your query</p>
                      <p className="text-xs text-stone-400">Try searching for other parameters or reset the filter query.</p>
                      <button 
                        type="button" 
                        onClick={() => setDashboardSearch('')}
                        className="font-mono text-[10px] text-[#7D123D] underline font-bold"
                      >
                        Reset Filter
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </motion.section>
          )}

          {/* VIEW: ABOUT */}
          {activeView === 'about' && (
            <motion.section 
              key="about-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8 max-w-3xl mx-auto w-full"
            >
              <div className="space-y-3">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Who We Are</h2>
                <p className="text-sm text-stone-500 font-serif italic">Crafting lasting value through patient capital, absolute design honesty, and operational precision.</p>
              </div>

              <div className="prose prose-stone text-stone-700 text-sm leading-relaxed space-y-4">
                <p>
                  Arcscape Capital operates as a bespoke venture development team and institutional investment firm. We organize, seed, and build dynamic consumer-facing brands and computational startups that define their niche rather than conforming to legacy markets.
                </p>
                <p>
                  We believe that authentic venture architecture requires deep design alignment, mathematical capitalization modeling, and a profound commitment to usability over modern aesthetic trendiness. We avoid the hollow noise of high-velocity funding hype, focusing instead on structural longevity, robust compliance standards, and sustainable cash-flow mechanics.
                </p>
              </div>

              {/* Three Pillars Bento Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="bg-white p-5 rounded-xl border border-stone-200/80 space-y-2">
                  <Compass className="h-5 w-5 text-[#7D123D]" />
                  <h4 className="font-serif font-semibold text-stone-900 text-sm">Patient Incubation</h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    We seed businesses with no arbitrary exit timelines, prioritizing organic cash growth and market resiliency.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-200/80 space-y-2">
                  <Scale className="h-5 w-5 text-[#7D123D]" />
                  <h4 className="font-serif font-semibold text-stone-900 text-sm">Regulatory Fidelity</h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    Every asset is structured to comply perfectly with modern global security and intellectual framework matrices.
                  </p>
                </div>
                <div className="bg-white p-5 rounded-xl border border-stone-200/80 space-y-2">
                  <Award className="h-5 w-5 text-[#7D123D]" />
                  <h4 className="font-serif font-semibold text-stone-900 text-sm">Design Excellence</h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    No template layouts or lazy designs. Every viewport and code asset is crafted from first-principles typography.
                  </p>
                </div>
              </div>

              <div className="pt-6 text-center">
                <button
                  type="button"
                  onClick={() => setActiveView('support')}
                  className="px-6 py-2.5 bg-[#7D123D] hover:bg-[#9E1D51] text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all shadow-sm cursor-pointer"
                >
                  Contact Our Partners
                </button>
              </div>
            </motion.section>
          )}

          {/* VIEW: SUPPORT DESK (INTERACTIVE FORM) */}
          {activeView === 'support' && (
            <motion.section 
              key="support-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8 max-w-2xl mx-auto w-full"
            >
              <div className="space-y-2 text-center sm:text-left">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Advisor Support Desk</h2>
                <p className="text-xs text-stone-500">Contact our general partner desks, request token assistance, or submit venture prospectuses.</p>
              </div>

              <div className="bg-white rounded-2xl border border-stone-200/85 p-6 sm:p-8 shadow-sm">
                <AnimatePresence mode="wait">
                  {!supportSuccess ? (
                    <motion.form 
                      key="support-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSupportSuccess(true);
                      }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label htmlFor="sup-name" className="font-mono text-[9px] uppercase tracking-wider text-stone-400 block font-bold">Your Name</label>
                          <input 
                            id="sup-name"
                            required={true}
                            type="text" 
                            placeholder="Alex Mercer"
                            value={supportName}
                            onChange={(e) => setSupportName(e.target.value)}
                            className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#7D123D]"
                          />
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="sup-email" className="font-mono text-[9px] uppercase tracking-wider text-stone-400 block font-bold">Email Address</label>
                          <input 
                            id="sup-email"
                            required={true}
                            type="email" 
                            placeholder="alex@mercer.com"
                            value={supportEmail}
                            onChange={(e) => setSupportEmail(e.target.value)}
                            className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#7D123D]"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="sup-type" className="font-mono text-[9px] uppercase tracking-wider text-stone-400 block font-bold">Inquiry Routing</label>
                        <select 
                          id="sup-type"
                          value={supportType}
                          onChange={(e) => setSupportType(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#7D123D]"
                        >
                          <option value="access">Access Token Verification &amp; Diagnostics</option>
                          <option value="incubation">Seed Incubation Cohort Applications</option>
                          <option value="partner">Limited Partner Syndicates</option>
                          <option value="legal">Governance &amp; DTD Compliance Inquiry</option>
                        </select>
                      </div>

                      <div className="space-y-1">
                        <label htmlFor="sup-msg" className="font-mono text-[9px] uppercase tracking-wider text-stone-400 block font-bold">Message / Proposal</label>
                        <textarea 
                          id="sup-msg"
                          rows={4}
                          required={true}
                          placeholder="Please provide details of your portfolio company, credential request, or compliance question..."
                          value={supportMessage}
                          onChange={(e) => setSupportMessage(e.target.value)}
                          className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2.5 text-xs font-sans focus:outline-none focus:ring-1 focus:ring-[#7D123D] resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3 bg-[#7D123D] hover:bg-[#9E1D51] text-white font-mono text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all duration-300 shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Send className="h-3.5 w-3.5" />
                        <span>Send Support Request</span>
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="support-success"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-6 space-y-4"
                    >
                      <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100">
                        <Check className="h-6 w-6" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-serif font-semibold text-stone-900 text-lg">Inquiry Successfully Routed</h4>
                        <p className="text-xs text-stone-500 leading-relaxed max-w-[340px] mx-auto">
                          Thank you, <span className="font-bold text-stone-800">{supportName}</span>. Your request has been logged and assigned to the appropriate Arcscape desk. An advisor will reach out to you within 24 business hours.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          setSupportSuccess(false);
                          setSupportName('');
                          setSupportEmail('');
                          setSupportMessage('');
                        }}
                        className="px-6 py-2 border border-stone-200 text-stone-700 hover:bg-stone-50 font-mono text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer"
                      >
                        New Inquiry
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion FAQ Area */}
              <div className="space-y-3 pt-4">
                <h3 className="font-serif text-lg text-stone-900">Desk Guidelines FAQ</h3>
                <div className="space-y-2.5">
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/50 space-y-1">
                    <h4 className="font-serif font-bold text-stone-800 text-xs">How do I obtain an access token?</h4>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Tokens are issued exclusively via formal partner invitations or direct Limited Partner distributions. We do not distribute credentials publicly.
                    </p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/50 space-y-1">
                    <h4 className="font-serif font-bold text-stone-800 text-xs">Can anyone pitch our incubation cohorts?</h4>
                    <p className="text-xs text-stone-500 leading-relaxed">
                      Yes. While invite-led teams receive automatic routing priority, any venture focusing on deep design optimization, materials engineering, or computational logic may submit pitches here.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* VIEW: LOGIN HELP (DIAGNOSTIC TEST) */}
          {activeView === 'login-help' && (
            <motion.section 
              key="login-help-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-2xl mx-auto w-full"
            >
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Onboarding &amp; Login Support</h2>
                <p className="text-xs text-stone-500">Solve local credential token loading, handshake latency, or secure schema mismatches.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="bg-white p-6 rounded-xl border border-stone-200/80 space-y-3">
                  <h3 className="font-serif font-semibold text-stone-900 text-sm">Step-by-Step Recovery</h3>
                  <ul className="space-y-3 font-mono text-[11px] text-stone-500">
                    <li className="flex items-start gap-2">
                      <span className="h-4 w-4 rounded-full bg-stone-100 text-[#7D123D] flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">1</span>
                      <span>Locate the 12-digit security code distributed in your original LP onboarding packet.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-4 w-4 rounded-full bg-stone-100 text-[#7D123D] flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">2</span>
                      <span>Verify that secure cookie handshakes and javascript sessions are enabled on your browser settings.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-4 w-4 rounded-full bg-stone-100 text-[#7D123D] flex items-center justify-center font-bold text-[9px] shrink-0 mt-0.5">3</span>
                      <span>Ensure you aren&apos;t behind severe corporate VPN blocks that intercept client schema handshakes.</span>
                    </li>
                  </ul>
                </div>

                {/* Diagnostic Run Module */}
                <div className="bg-white p-6 rounded-xl border border-stone-200/80 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif font-semibold text-stone-900 text-sm">Connection Diagnostic</h3>
                    <p className="text-xs text-stone-400 leading-relaxed">
                      Evaluate local networking state and secure browser environment variables.
                    </p>
                  </div>

                  {!diagnosticRun ? (
                    <button
                      type="button"
                      onClick={runDiagnostics}
                      className="w-full mt-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-mono text-[9px] font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer text-center"
                    >
                      Run Local Diagnostics
                    </button>
                  ) : (
                    <div className="space-y-3 mt-4">
                      <div className="flex justify-between font-mono text-[10px] text-stone-500">
                        <span>Running tests...</span>
                        <span>{diagnosticProgress}%</span>
                      </div>
                      <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                        <div className="h-full bg-[#7D123D] transition-all duration-300" style={{ width: `${diagnosticProgress}%` }} />
                      </div>
                      
                      {diagnosticProgress >= 100 && (
                        <div className="bg-stone-50 p-3 rounded-lg font-mono text-[9px] text-stone-500 space-y-1">
                          <div className="flex justify-between"><span className="text-stone-400">Cookie Protocol:</span><span className="text-emerald-600 font-bold">READY</span></div>
                          <div className="flex justify-between"><span className="text-stone-400">HTTPS Encryption:</span><span className="text-emerald-600 font-bold">ACTIVE</span></div>
                          <div className="flex justify-between"><span className="text-stone-400">Handshake Frame:</span><span className="text-stone-800 font-bold">STANDBY</span></div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.section>
          )}

          {/* VIEW: SEED INCUBATOR */}
          {activeView === 'seed-incubator' && (
            <motion.section 
              key="seed-incubator-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-2xl mx-auto w-full"
            >
              <div className="space-y-1">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Stealth Seed Incubator</h2>
                <span className="font-mono text-[9px] uppercase text-[#7D123D] tracking-widest font-bold">Zero-to-One Program Blueprint</span>
              </div>

              <div className="prose prose-stone text-xs leading-relaxed space-y-4 text-stone-600">
                <p>
                  Arcscape&apos;s seed incubator focuses on scaling highly specific digital consumer brands and computational hardware labs. We bring in 2 to 3 early teams per cohort, providing high-touch visual strategy, strict compliance support, and unhurried design loops.
                </p>
                <p>
                  Rather than pushing teams to expand team size rapidly, we prioritize extreme efficiency, helping founders remain highly capitalized while focusing purely on perfect engineering.
                </p>
              </div>

              {/* Cohort Journey Timeline */}
              <div className="space-y-4 pt-4">
                <h3 className="font-serif text-base text-stone-800">The 3-Phase Development Loop</h3>
                <div className="space-y-3 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-stone-100">
                  <div className="relative pl-7 space-y-1">
                    <span className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full bg-[#7D123D]" />
                    <h4 className="font-serif font-semibold text-stone-900 text-xs">Phase 1: First-Principles Alignment</h4>
                    <p className="text-[11px] text-stone-500 leading-relaxed">
                      We dismantle the product to its most basic physical or mathematical formulas, designing a proprietary market category.
                    </p>
                  </div>
                  <div className="relative pl-7 space-y-1">
                    <span className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full bg-[#7D123D]" />
                    <h4 className="font-serif font-semibold text-stone-900 text-xs">Phase 2: Layout &amp; Interface Precision</h4>
                    <p className="text-[11px] text-stone-500 leading-relaxed">
                      Our in-house design studio engineers every brand element, packaging layer, and digital layout for sensory clarity.
                    </p>
                  </div>
                  <div className="relative pl-7 space-y-1">
                    <span className="absolute left-1.5 top-1.5 h-3 w-3 rounded-full bg-[#7D123D]" />
                    <h4 className="font-serif font-semibold text-stone-900 text-xs">Phase 3: Tactical Resource Matching</h4>
                    <p className="text-[11px] text-stone-500 leading-relaxed">
                      We inject the final seed capital and establish strategic syndicates with verified co-investment partners.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* VIEW: TARGET ARBITRAGE (INTERACTIVE CALCULATOR) */}
          {activeView === 'target-arbitrage' && (
            <motion.section 
              key="target-arbitrage-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-2xl mx-auto w-full"
            >
              <div className="space-y-1">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Arbitrage Mechanics</h2>
                <span className="font-mono text-[9px] uppercase text-[#7D123D] tracking-widest font-bold">Capital Risk Hedging Models</span>
              </div>

              <div className="prose prose-stone text-xs leading-relaxed space-y-3 text-stone-600">
                <p>
                  Our Target Arbitrage framework matches early-stage pricing mismatches with long-term capital structures. By leveraging short-term consumer traction statistics against multi-year institutional asset cycles, we preserve equity structures for founders.
                </p>
                <p>
                  Use the calculator below to evaluate estimated monthly arbitrage liquidity parameters based on committed pre-seed capital injections.
                </p>
              </div>

              {/* Dynamic interactive calculator widget */}
              <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs space-y-5">
                <h3 className="font-serif text-sm font-semibold text-stone-900 border-b border-stone-100 pb-2">Arbitrage Efficiency Calculator</h3>
                
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between font-mono text-[10px] text-stone-500">
                      <span>Committed Capital Fund</span>
                      <span className="text-stone-900 font-bold">${calcCapital.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" 
                      min="50000" 
                      max="1000000" 
                      step="25000"
                      value={calcCapital}
                      onChange={(e) => setCalcCapital(Number(e.target.value))}
                      className="w-full accent-[#7D123D]"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between font-mono text-[10px] text-stone-500">
                      <span>Monthly Arbitrage Spread</span>
                      <span className="text-stone-900 font-bold">{calcArbitrageRate}%</span>
                    </div>
                    <input 
                      type="range" 
                      min="1.5" 
                      max="8.0" 
                      step="0.1"
                      value={calcArbitrageRate}
                      onChange={(e) => setCalcArbitrageRate(Number(e.target.value))}
                      className="w-full accent-[#7D123D]"
                    />
                  </div>
                </div>

                <div className="bg-stone-50 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-3 font-mono">
                  <div className="text-center sm:text-left">
                    <span className="text-[9px] text-stone-400 uppercase tracking-widest block">Estimated Cash Yield / Mo</span>
                    <span className="text-xl font-bold text-[#7D123D]">${Math.round((calcCapital * (calcArbitrageRate / 100))).toLocaleString()}</span>
                  </div>
                  <div className="text-center sm:text-right">
                    <span className="text-[9px] text-stone-400 uppercase tracking-widest block">Capital Buffer Coverage</span>
                    <span className="text-sm font-bold text-stone-800">{(calcArbitrageRate * 1.85).toFixed(1)}x</span>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* VIEW: STRATEGIC PARTNERSHIPS */}
          {activeView === 'strategic-partnerships' && (
            <motion.section 
              key="strategic-partnerships-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-2xl mx-auto w-full"
            >
              <div className="space-y-1">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Institutional Syndicates</h2>
                <span className="font-mono text-[9px] uppercase text-[#7D123D] tracking-widest font-bold">Global Strategic Alliances</span>
              </div>

              <div className="prose prose-stone text-xs leading-relaxed space-y-4 text-stone-600">
                <p>
                  Arcscape aligns strictly with established global investment syndicates, technology laboratories, and academic networks. These deep connections give our incubated ventures immediate doors into distribution networks, hardware prototyping facilities, and regulatory advising systems.
                </p>
                <p>
                  Our partners operate under strict confidentiality clauses, facilitating smooth corporate handshakes during crucial seed and scale iterations.
                </p>
              </div>

              {/* Partners Directory Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-4 rounded-xl border border-stone-200/80 space-y-1.5">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-stone-400 font-bold block">Academic Core</span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Zurich Materials Labs</h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    Collaborative technical testing for carbon-capture silicones and facade-related glass panels.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200/80 space-y-1.5">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-stone-400 font-bold block">Co-Investment Desk</span>
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Valkyrie Holdings</h4>
                  <p className="text-[11px] text-stone-500 leading-relaxed">
                    A multi-family office providing deep liquidity during early-scale Series A transitions.
                  </p>
                </div>
              </div>
            </motion.section>
          )}

          {/* VIEW: LEGAL NETWORK */}
          {activeView === 'legal-network' && (
            <motion.section 
              key="legal-network-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-2xl mx-auto w-full font-serif"
            >
              <div className="space-y-1">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-2xl text-stone-900 font-normal">Regulatory &amp; Legal Network</h2>
                <span className="font-mono text-[9px] uppercase text-stone-400 tracking-wider block">Institutional Compliance Advisory</span>
              </div>

              <div className="prose prose-stone text-xs leading-relaxed space-y-4 text-stone-600 font-sans">
                <p>
                  Arcscape Capital and its associated ventures operate strictly within global security structures. This portal is provided as an information network strictly for accredited and limited partners.
                </p>
                <p>
                  Nothing contained within this portal should be construed as an invitation to invest or a public offering of securities. Complete offering documents are only distributed following strict partner validation protocols and formal General Partner sign-offs.
                </p>
                <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/50 space-y-1">
                  <span className="font-mono text-[9px] uppercase font-bold text-[#7D123D] block">Governance Policy Notice</span>
                  <p className="text-[11px] text-stone-500">
                    All compliance parameters are overseen by our independent audit board. Detailed quarterly investment statements are archived in our secure Swiss server register.
                  </p>
                </div>
              </div>
            </motion.section>
          )}

          {/* VIEW: COMPLIANCE BOARD */}
          {activeView === 'compliance-board' && (
            <motion.section 
              key="compliance-board-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-2xl mx-auto w-full"
            >
              <div className="space-y-1">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Governance Board</h2>
                <span className="font-mono text-[9px] uppercase text-[#7D123D] tracking-widest font-bold">Risk Management &amp; Oversight</span>
              </div>

              <div className="prose prose-stone text-xs leading-relaxed space-y-4 text-stone-600">
                <p>
                  Our independent Compliance Board enforces risk management benchmarks across all incubated projects and partner portfolios. By conducting regular audits and keeping clear ledger registries, we guarantee capital safety.
                </p>
                <p>
                  The board meets monthly to evaluate asset allocations, risk buffers, and general cohort compliance variables under standard international guidelines.
                </p>
              </div>
            </motion.section>
          )}

          {/* VIEW: HR & ADVISORY */}
          {activeView === 'hr-advisory' && (
            <motion.section 
              key="hr-advisory-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-2xl mx-auto w-full"
            >
              <div className="space-y-1">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Talent &amp; Advisors</h2>
                <span className="font-mono text-[9px] uppercase text-[#7D123D] tracking-widest font-bold">Human Capital Network</span>
              </div>

              <div className="prose prose-stone text-xs leading-relaxed space-y-4 text-stone-600">
                <p>
                  We believe beautiful companies are built by hyper-focused individuals. Arcscape maintains an exclusive roster of engineering advisors, structural materials experts, and legal strategists who are deployed dynamically to help our portfolio companies.
                </p>
                <p>
                  If you are a builder looking for deep alignment and unhurried focus, we are always recruiting Partners-in-Residence.
                </p>
              </div>
            </motion.section>
          )}

          {/* VIEW: GLOBAL NODE REGISTER (INTERACTIVE SIMULATED MAP WIDGET) */}
          {activeView === 'node-register' && (
            <motion.section 
              key="node-register-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-2xl mx-auto w-full"
            >
              <div className="space-y-1">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Portal Network Registry</h2>
                <span className="font-mono text-[9px] uppercase text-stone-400 tracking-wider block">Global Server and Secure Data Hubs</span>
              </div>

              <div className="prose prose-stone text-xs leading-relaxed space-y-3 text-stone-600">
                <p>
                  Arcscape&apos;s digital infrastructure is distributed across four private hosting registers to ensure zero downtime and perfect layout transmission.
                </p>
                <p>
                  Click any global registry below to simulate real-time synchronization checks with our main network.
                </p>
              </div>

              {/* Simulated Map / Node List Widget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs flex justify-between items-center">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-stone-400 block">NODE_A // TOKYO</span>
                    <h4 className="font-serif font-bold text-stone-900 text-sm">APAC East Register</h4>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-600">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{nodePingStates.tokyo === 'synced' ? 'Synchronized' : 'Syncing...'}</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    disabled={nodePingStates.tokyo === 'syncing'}
                    onClick={() => triggerPingNode('tokyo')}
                    className="p-2 bg-stone-50 hover:bg-stone-100 rounded-lg border border-stone-200 cursor-pointer"
                  >
                    <RefreshCw className={`h-4 w-4 text-stone-600 ${nodePingStates.tokyo === 'syncing' ? 'animate-spin' : ''}`} />
                  </button>
                </div>

                <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs flex justify-between items-center">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-stone-400 block">NODE_B // GENEVA</span>
                    <h4 className="font-serif font-bold text-stone-900 text-sm">Europe West Register</h4>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-600">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{nodePingStates.geneva === 'synced' ? 'Synchronized' : 'Syncing...'}</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    disabled={nodePingStates.geneva === 'syncing'}
                    onClick={() => triggerPingNode('geneva')}
                    className="p-2 bg-stone-50 hover:bg-stone-100 rounded-lg border border-stone-200 cursor-pointer"
                  >
                    <RefreshCw className={`h-4 w-4 text-stone-600 ${nodePingStates.geneva === 'syncing' ? 'animate-spin' : ''}`} />
                  </button>
                </div>

                <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs flex justify-between items-center">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-stone-400 block">NODE_C // LONDON</span>
                    <h4 className="font-serif font-bold text-stone-900 text-sm">UK Capital Register</h4>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-600">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{nodePingStates.london === 'synced' ? 'Synchronized' : 'Syncing...'}</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    disabled={nodePingStates.london === 'syncing'}
                    onClick={() => triggerPingNode('london')}
                    className="p-2 bg-stone-50 hover:bg-stone-100 rounded-lg border border-stone-200 cursor-pointer"
                  >
                    <RefreshCw className={`h-4 w-4 text-stone-600 ${nodePingStates.london === 'syncing' ? 'animate-spin' : ''}`} />
                  </button>
                </div>

                <div className="bg-white p-5 rounded-xl border border-stone-200/80 shadow-xs flex justify-between items-center">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] text-stone-400 block">NODE_D // NEW YORK</span>
                    <h4 className="font-serif font-bold text-stone-900 text-sm">US East Register</h4>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-emerald-600">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{nodePingStates.new_york === 'synced' ? 'Synchronized' : 'Syncing...'}</span>
                    </span>
                  </div>
                  <button
                    type="button"
                    disabled={nodePingStates.new_york === 'syncing'}
                    onClick={() => triggerPingNode('new_york')}
                    className="p-2 bg-stone-50 hover:bg-stone-100 rounded-lg border border-stone-200 cursor-pointer"
                  >
                    <RefreshCw className={`h-4 w-4 text-stone-600 ${nodePingStates.new_york === 'syncing' ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>
            </motion.section>
          )}

          {/* VIEW: TOKEN DTD (DOCUMENT TYPE DEFINITIONS) */}
          {activeView === 'token-dtd' && (
            <motion.section 
              key="token-dtd-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-2xl mx-auto w-full font-mono text-xs"
            >
              <div className="space-y-1 font-sans">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Security Token XML Schema</h2>
                <span className="text-[10px] text-[#7D123D] font-mono uppercase tracking-widest block">Metadata Validation Specifications</span>
              </div>

              <div className="prose prose-stone font-sans text-stone-500 text-xs leading-relaxed mb-4">
                <p>
                  To secure client state during browser transactions, Arcscape platform tokens validate against strict XML Document Type Definitions (DTD). This guarantees that credentials match layout requirements precisely prior to decryption.
                </p>
              </div>

              <div className="bg-stone-900 p-4 rounded-xl border border-stone-800 text-stone-300 space-y-2 overflow-x-auto leading-relaxed">
                <pre>{`<!-- Arcscape Token Validation DTD -->
<!ELEMENT securityToken (credential, clientInfo, metadata)>
<!ATTLIST securityToken
          id ID #REQUIRED
          version CDATA #FIXED "1.0">
<!ELEMENT credential (#PCDATA)>
<!ELEMENT clientInfo (timestamp, environment)>
<!ELEMENT timestamp (#PCDATA)>
<!ELEMENT environment (#PCDATA)>
<!ELEMENT metadata (partnerLevel, deskRouting)>
<!ELEMENT partnerLevel (#PCDATA)>
<!ELEMENT deskRouting (#PCDATA)>`}</pre>
              </div>
            </motion.section>
          )}

          {/* VIEW: XHTML SCHEMAS */}
          {activeView === 'xhtml-schemas' && (
            <motion.section 
              key="xhtml-schemas-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-2xl mx-auto w-full font-mono text-xs"
            >
              <div className="space-y-1 font-sans">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">XHTML Strict Compliance</h2>
                <span className="text-[10px] text-[#7D123D] uppercase tracking-widest block">Rendering Architecture Standards</span>
              </div>

              <p className="font-sans text-stone-500 leading-relaxed text-xs">
                XHTML Strict compliance is not an old legacy standard for us; it is a chosen philosophy. Closing every tag, keeping lowercase elements, and adhering to strict nesting principles forces our development studio to build lightweight, fast-loading visual portals that compile cleanly across decades of browser technology.
              </p>

              <div className="bg-stone-900 p-4 rounded-xl border border-stone-800 text-stone-300 space-y-2 overflow-x-auto leading-relaxed">
                <pre>{`<!-- Structural compliance nesting tests -->
<div class="validator-node">
  <p class="strict-block">
    <strong>Verification Loop:</strong> Approved rendering structures must be closed.
  </p>
</div>`}</pre>
              </div>
            </motion.section>
          )}

          {/* VIEW: REGISTERED PARTNERS */}
          {activeView === 'registered-partners' && (
            <motion.section 
              key="registered-partners-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-2xl mx-auto w-full"
            >
              <div className="space-y-1">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Onboarding Desk</h2>
                <span className="font-mono text-[9px] uppercase text-[#7D123D] tracking-widest font-bold">New Partner Checklist</span>
              </div>

              <div className="bg-white p-6 rounded-xl border border-stone-200/80 shadow-xs space-y-4">
                <p className="text-xs text-stone-500 leading-relaxed">
                  Welcome to Arcscape. Verified portfolio founders and Limited Partners receive automatic onboarding materials. Below is the primary checklist to establish access nodes.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-stone-900 text-xs">Credential Token Provision</h4>
                      <p className="text-[11px] text-stone-500">Your venture lead will issue a private token in person or via offline keys.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-stone-900 text-xs">Regulatory Document Signature</h4>
                      <p className="text-[11px] text-stone-500">Submit signed Limited Partner disclosures through our legal routing desks.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif font-bold text-stone-900 text-xs">Technical Syncing</h4>
                      <p className="text-[11px] text-stone-500">Establish encrypted endpoints with our Zurich or New York registry nodes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* VIEW: PORTAL DTD */}
          {activeView === 'portal-dtd' && (
            <motion.section 
              key="portal-dtd-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-2xl mx-auto w-full font-mono text-xs"
            >
              <div className="space-y-1 font-sans">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Portal DTD Schemas</h2>
                <span className="text-[10px] text-[#7D123D] block uppercase tracking-widest">Interface Structural Definitions</span>
              </div>

              <p className="font-sans text-stone-500 leading-relaxed text-xs">
                To guarantee zero layout shift, our portal&apos;s UI grids are validated against rigid Document Type Definitions specifying pixel coordinates, grid flex values, and typography hierarchies.
              </p>

              <div className="bg-stone-900 p-4 rounded-xl border border-stone-800 text-stone-300 space-y-2 overflow-x-auto leading-relaxed">
                <pre>{`<!-- Portal Layout Rules -->
<!ELEMENT portalView (header, heroArea, footerRegistry)>
<!ATTLIST portalView
          theme (light|warm) "warm">
<!ELEMENT header (logo, navBar)>
<!ELEMENT heroArea (badge, heading, inputField)>
<!ELEMENT footerRegistry (logoContainer, linksGrid, copyrights)>`}</pre>
              </div>
            </motion.section>
          )}

          {/* VIEW: SEED NETWORK */}
          {activeView === 'seed-network' && (
            <motion.section 
              key="seed-network-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-2xl mx-auto w-full"
            >
              <div className="space-y-1">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Venture Advisors</h2>
                <span className="font-mono text-[9px] uppercase text-[#7D123D] tracking-widest font-bold">Incubation Mentor List</span>
              </div>

              <p className="text-xs text-stone-500 leading-relaxed">
                Our seed advisor network links active founders with veteran materials scientists, software architects, and product strategists who help with zero-to-one design hurdles.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl border border-stone-200/80 space-y-1">
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Marcus Vance</h4>
                  <span className="font-mono text-[9px] uppercase text-stone-400 block">Lead Advisor // Systems</span>
                  <p className="text-[11px] text-stone-500 leading-relaxed pt-1">Helping founders deploy clean municipal grids and micro-acoustic models.</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200/80 space-y-1">
                  <h4 className="font-serif font-bold text-stone-900 text-sm">Elena Rostova</h4>
                  <span className="font-mono text-[9px] uppercase text-stone-400 block">Partner // Design Studio</span>
                  <p className="text-[11px] text-stone-500 leading-relaxed pt-1">Overseeing first-principles brand development and user-interface optimization.</p>
                </div>
              </div>
            </motion.section>
          )}

          {/* VIEW: XHTML SPECIFICATION VIEWER */}
          {activeView === 'xhtml-spec' && (
            <motion.section 
              key="xhtml-spec-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 max-w-2xl mx-auto w-full"
            >
              <div className="space-y-2">
                <button 
                  onClick={() => setActiveView('portal')}
                  className="font-mono text-[10px] text-stone-400 hover:text-stone-800 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3 w-3" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">XHTML Specification</h2>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Inspect the rigid, strict compliant W3C XHTML source document structured for this portal. Strict lowercase declarations and closed nesting ensure perfect cross-platform stability.
                </p>
              </div>

              <div className="relative">
                <pre className="text-[10px] sm:text-[11px] font-mono text-stone-300 bg-stone-900 p-4 rounded-xl border border-stone-800 overflow-x-auto max-h-96 leading-relaxed">
                  {xhtmlCodeString}
                </pre>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(xhtmlCodeString);
                    alert('Strict XHTML specifications copied to clipboard!');
                  }}
                  className="absolute top-3 right-3 bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white border border-stone-700 rounded px-2.5 py-1 text-[10px] font-mono transition-all cursor-pointer"
                >
                  Copy Specification
                </button>
              </div>
            </motion.section>
          )}

        </AnimatePresence>
      </div>

      {/* 3. MULTI-COLUMN PREMIUM FOOTER SITE DIRECTORY */}
      <footer className="w-full max-w-5xl mx-auto pt-12 pb-8 border-t border-stone-200/50 relative z-10 space-y-10">
        
        {/* Four Column Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-left">
          {/* Column 1: Incubation Program */}
          <div className="space-y-3">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-stone-900 font-extrabold border-b border-stone-200/50 pb-1.5">
              Incubation Hub
            </h4>
            <ul className="space-y-2 text-[11px] font-sans text-stone-500">
              <li>
                <button 
                  onClick={() => { setActiveView('seed-incubator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-stone-900 hover:underline transition-colors cursor-pointer text-left font-medium"
                >
                  Stealth Seed Incubator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('seed-network'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-stone-900 hover:underline transition-colors cursor-pointer text-left font-medium"
                >
                  Venture Advisors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('registered-partners'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-stone-900 hover:underline transition-colors cursor-pointer text-left font-medium"
                >
                  Partner Onboarding
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: Capital & Governance */}
          <div className="space-y-3">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-stone-900 font-extrabold border-b border-stone-200/50 pb-1.5">
              Risk &amp; Mechanics
            </h4>
            <ul className="space-y-2 text-[11px] font-sans text-stone-500">
              <li>
                <button 
                  onClick={() => { setActiveView('target-arbitrage'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-stone-900 hover:underline transition-colors cursor-pointer text-left font-medium"
                >
                  Arbitrage Mechanics
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('compliance-board'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-stone-900 hover:underline transition-colors cursor-pointer text-left font-medium"
                >
                  Governance Board
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('strategic-partnerships'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-stone-900 hover:underline transition-colors cursor-pointer text-left font-medium"
                >
                  Institutional Syndicates
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Network & Specs */}
          <div className="space-y-3">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-stone-900 font-extrabold border-b border-stone-200/50 pb-1.5">
              Advisory &amp; Specs
            </h4>
            <ul className="space-y-2 text-[11px] font-sans text-stone-500">
              <li>
                <button 
                  onClick={() => { setActiveView('hr-advisory'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-stone-900 hover:underline transition-colors cursor-pointer text-left font-medium"
                >
                  Human Capital &amp; HR
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('node-register'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-stone-900 hover:underline transition-colors cursor-pointer text-left font-medium"
                >
                  Portal Network Registry
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('xhtml-spec'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-stone-900 hover:underline transition-colors cursor-pointer text-left font-medium"
                >
                  XHTML Strict Spec
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Schemas & Tokens */}
          <div className="space-y-3">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-stone-900 font-extrabold border-b border-stone-200/50 pb-1.5">
              Validations
            </h4>
            <ul className="space-y-2 text-[11px] font-sans text-stone-500">
              <li>
                <button 
                  onClick={() => { setActiveView('token-dtd'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-stone-900 hover:underline transition-colors cursor-pointer text-left font-medium"
                >
                  Security Token DTD
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('portal-dtd'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-stone-900 hover:underline transition-colors cursor-pointer text-left font-medium"
                >
                  Portal Layout DTD
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('xhtml-schemas'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-stone-900 hover:underline transition-colors cursor-pointer text-left font-medium"
                >
                  XHTML Schemas
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer row with small logo and small grey text */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4 text-[10px] font-mono text-stone-400 pt-8 border-t border-stone-100/60">
          <div className="flex items-center gap-3">
            <a 
              href="https://evu.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-stone-800 transition-colors cursor-pointer flex items-center"
              title="EVU Venture Studio"
            >
              <EvuLogo className="h-3 w-auto text-stone-500 opacity-85 hover:opacity-100 transition-opacity" />
            </a>
            <span>•</span>
            <span>Venture Capital &amp; Incubation Studio</span>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <button 
              type="button"
              className="hover:text-stone-800 transition-colors cursor-pointer text-stone-400" 
              onClick={() => {
                showToast('Sitemap location: /sitemap.xml');
              }}
            >
              sitemap.xml
            </button>
            <span>•</span>
            <button 
              type="button"
              className="hover:text-stone-800 transition-colors cursor-pointer text-stone-400" 
              onClick={() => {
                showToast('Robots rules location: /robots.txt');
              }}
            >
              robots.txt
            </button>
          </div>
        </div>

      </footer>

      {/* 5. FLOATING PREMIUM TOAST */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-stone-900 border border-stone-800 text-stone-100 px-4 py-3 rounded-xl shadow-xl font-mono text-[11px] uppercase tracking-wider"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. PARTNER LOGIN MODAL DIALOG */}
      <AnimatePresence>
        {isLoginOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop blurring effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsLoginOpen(false)}
              className="absolute inset-0 bg-stone-900/40 backdrop-blur-xs"
            />

            {/* Modal Body Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="bg-white border border-stone-200/80 rounded-2xl max-w-sm w-full p-6 shadow-2xl relative z-10 space-y-4 font-sans text-stone-900 text-left"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#7D123D] font-bold">SECURE GATEWAY</span>
                  <h3 className="font-serif text-lg font-normal">Partner Access</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLoginOpen(false)}
                  className="p-1 text-stone-400 hover:text-stone-800 transition-colors cursor-pointer rounded-lg border border-transparent hover:border-stone-100"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <p className="text-[12px] text-stone-600 leading-relaxed font-serif">
                Authorized venture partners, advisory mentors, and liquid providers may enter access tokens below.
              </p>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="modal_gatekey" className="font-mono text-[9px] uppercase tracking-wider text-stone-600 block font-bold">
                    Access Code
                  </label>
                  <div className="relative flex items-center rounded-xl border border-stone-300 bg-white px-3 py-2 focus-within:border-stone-800 focus-within:ring-1 focus-within:ring-stone-800 transition-all">
                    <Lock className="h-3.5 w-3.5 text-stone-500 mr-2 shrink-0" />
                    <input
                      id="modal_gatekey"
                      type="password"
                      required
                      placeholder="Enter access code..."
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      className="w-full bg-transparent text-sm font-mono text-stone-900 placeholder-stone-400 focus:outline-none"
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-[10px] font-mono uppercase tracking-wider text-red-600 font-bold flex items-center gap-1.5"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                      <span>Invalid Access Key</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsLoginOpen(false)}
                    className="flex-1 px-3 py-2 border border-stone-300 hover:border-stone-800 text-stone-700 hover:text-stone-900 font-mono text-[10px] uppercase tracking-wider rounded-xl transition-all cursor-pointer font-bold bg-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex-1 px-3 py-2 bg-stone-900 hover:bg-stone-800 disabled:bg-stone-400 text-white font-mono text-[10px] uppercase tracking-wider rounded-xl transition-all cursor-pointer font-bold flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    {status === 'loading' ? (
                      <RefreshCw className="h-3 w-3 animate-spin" />
                    ) : (
                      <>
                        <span>Validate</span>
                        <ArrowRight className="h-3 w-3" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
