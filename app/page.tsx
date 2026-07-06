'use client';

import React, { useState, useEffect, useRef } from 'react';
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
  X
} from 'lucide-react';

// Perfect, mathematical curved logo using crisp textpath rendering
function ArcscapeCurvedLogo({ size = "normal" }: { size?: "normal" | "small" | "large" }) {
  let width = 160;
  let height = 55;
  let viewBox = "0 0 180 55";
  let pathD = "M 10 45 Q 90 8 170 45";
  let fontSize = "14px";
  let tracking = "0.38em";

  if (size === "small") {
    width = 120;
    height = 42;
    viewBox = "0 0 130 42";
    pathD = "M 8 35 Q 65 8 122 35";
    fontSize = "11px";
    tracking = "0.32em";
  } else if (size === "large") {
    // Exactly 4 times larger in scale for breathtaking, premium visual weight
    width = 2160;
    height = 640;
    viewBox = "0 0 2160 640";
    pathD = "M 60 500 Q 1080 60 2100 500";
    fontSize = "152px";
    tracking = "0.45em";
  }

  return (
    <div className="flex items-center justify-center w-full overflow-visible">
      <svg 
        viewBox={viewBox} 
        style={{ width: "100%", maxWidth: `${width}px`, height: "auto" }} 
        className={`select-none pointer-events-none overflow-visible ${
          size === 'small' ? '' : 'drop-shadow-[0_2px_5px_rgba(0,0,0,0.45)]'
        }`}
      >
        <defs>
          {/* Liquid Chrome gradient mimicking high-end 3D metallic curvature with intense reflective bands (diagonal light sweeps) */}
          <linearGradient id={`chromeGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0c0d10" />
            <stop offset="12%" stopColor="#f5f7fa" />
            <stop offset="25%" stopColor="#3d414a" />
            <stop offset="38%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#050608" />
            <stop offset="62%" stopColor="#e1e6eb" />
            <stop offset="78%" stopColor="#555a65" />
            <stop offset="90%" stopColor="#fafafc" />
            <stop offset="100%" stopColor="#101115" />
          </linearGradient>

          {/* Intense neon cyan glow filter to simulate high-end reverse-lit channel letter sign halo */}
          <filter id={`cyanGlowFilter-${size}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation={size === "large" ? "2.5" : "1.0"} result="blur" />
            <feComponentTransfer in="blur" result="brightGlow">
              <feFuncA type="linear" slope="1.2" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode in="brightGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Highly sophisticated SVG Filter to create a chiseled polished chrome/silver bevel (from the 'S' image) */}
          <filter id={`chromeBevelFilter-${size}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceAlpha" stdDeviation={size === "large" ? "1.2" : "0.3"} result="blur" />
            <feComponentTransfer in="blur" result="sculptedBevel">
              <feFuncA type="table" tableValues="0 0.1 0.4 0.8 0.95 1.0" />
            </feComponentTransfer>
            <feSpecularLighting in="sculptedBevel" surfaceScale={size === "large" ? "3" : "1"} specularConstant="2.2" specularExponent="35" lightingColor="#ffffff" result="spec">
              <feDistantLight azimuth="135" elevation="45" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceAlpha" operator="in" result="maskedSpecular" />
            <feComposite in="SourceGraphic" in2="maskedSpecular" operator="arithmetic" k1="0" k2="1.0" k3="1.25" k4="0" result="lit" />
          </filter>

          {/* Highly sophisticated specular shine filter for realistic glass/gloss top-coat reflection */}
          <filter id={`glassShine-${size}`} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation={size === "large" ? "2.5" : "0.4"} result="blur" />
            <feSpecularLighting in="blur" surfaceScale={size === "large" ? "3.5" : "1"} specularConstant="1.1" specularExponent="55" lightingColor="#ffffff" result="spec">
              <feDistantLight azimuth="135" elevation="65" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceAlpha" operator="in" />
          </filter>
        </defs>
        
        <path id={`curve-${size}`} d={pathD} fill="none" stroke="transparent" />

        {/* Flat style for small size, 3D chrome logic for normal, hybrid complex logic for large */}
        {size === "small" ? (
          <text 
            className="font-sans uppercase font-black" 
            style={{ 
              fontSize, 
              letterSpacing: tracking, 
              fill: "#111111",
              fontWeight: 950 
            }}
            dx="0"
            dy="0"
          >
            <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
              arcscape
            </textPath>
          </text>
        ) : size === "normal" ? (
          <>
            {/* 1. Neon Cyan Backlight Glow (from the 'M' sign) */}
            <text 
              className="font-sans uppercase font-black" 
              style={{ 
                fontSize, 
                letterSpacing: tracking, 
                fill: "#00f5ff",
                stroke: "#00f5ff",
                strokeWidth: "1.8px",
                strokeLinejoin: "round",
                fontWeight: 950,
                filter: `url(#cyanGlowFilter-${size})`,
                opacity: 0.85
              }}
              dx="0"
              dy="1.0"
            >
              <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
                arcscape
              </textPath>
            </text>

            {/* 2. Sharp matte black backing */}
            <text 
              className="font-sans uppercase font-black" 
              style={{ 
                fontSize, 
                letterSpacing: tracking, 
                fill: "#06070a",
                fontWeight: 950 
              }}
              dx="0"
              dy="0.8"
            >
              <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
                arcscape
              </textPath>
            </text>

            {/* 3. Liquid Chrome Face with Silver Bevel (from the 'S' image) */}
            <text 
              className="font-sans uppercase font-black" 
              style={{ 
                fontSize, 
                letterSpacing: tracking, 
                fill: `url(#chromeGradient-${size})`,
                stroke: `url(#chromeGradient-${size})`,
                strokeWidth: "0.35px",
                strokeLinejoin: "round",
                fontWeight: 950,
                filter: `url(#chromeBevelFilter-${size})`
              }}
              dx="0"
              dy="0"
            >
              <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
                arcscape
              </textPath>
            </text>
          </>
        ) : (
          <>
            {/* LARGE SIZE COMBINED STYLE: HIGH-SHINE LIQUID CHROME FRONT ON MATTE-BLACK EXTRUSION WITH NEON CYAN HALO GLOW */}
            
            {/* 1. Subtle Neon Cyan Backlight Halo Glow (from the 'M' sign) */}
            <text 
              className="font-sans uppercase" 
              style={{ 
                fontSize, 
                letterSpacing: tracking, 
                fill: "#00f5ff",
                stroke: "#00f5ff",
                strokeWidth: "2.5px",
                strokeLinejoin: "round",
                fontWeight: 950,
                filter: `url(#cyanGlowFilter-${size})`,
                opacity: 0.5
              }}
              dx="0"
              dy="3"
            >
              <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
                arcscape
              </textPath>
            </text>

            {/* Staggered double cyan-blue core glow for realistic sign flare */}
            <text 
              className="font-sans uppercase" 
              style={{ 
                fontSize, 
                letterSpacing: tracking, 
                fill: "#00bfff",
                stroke: "#00bfff",
                strokeWidth: "0.8px",
                strokeLinejoin: "round",
                fontWeight: 950,
                filter: `url(#cyanGlowFilter-${size})`,
                opacity: 0.5
              }}
              dx="0"
              dy="3"
            >
              <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
                arcscape
              </textPath>
            </text>

            {/* 2. Sleek Matte Black Channel Extrusion Sides (from the 'M' sign) - 15 crisp, clean isometric stacked layers */}
            {Array.from({ length: 15 }).map((_, index) => {
              // Flat isometric offsets
              const dxValue = ((15 - index) * 0.8).toFixed(1);
              const dyValue = ((15 - index) * 1.2).toFixed(1);
              
              // Dark matte charcoal/slate gray with very subtle shading for that elegant concrete/wall sign realism
              const ratio = index / 14;
              const grayVal = Math.round(8 + ratio * 14); // super dark, deep matte charcoal range: 8 to 22
              const fillHex = `rgb(${grayVal}, ${grayVal + 1}, ${grayVal + 3})`;
              return (
                <text 
                  key={index}
                  className="font-sans uppercase" 
                  style={{ 
                    fontSize, 
                    letterSpacing: tracking, 
                    fill: fillHex,
                    stroke: fillHex,
                    strokeWidth: "1.5px", // To guarantee solid, gapless side-walls
                    strokeLinejoin: "round",
                    fontWeight: 950
                  }}
                  dx={dxValue}
                  dy={dyValue}
                >
                  <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
                    arcscape
                  </textPath>
                </text>
              );
            })}

            {/* 3. Solid Deep Black boundary core to prevent bleeding and crisp-separate chrome face from matte sides */}
            <text 
              className="font-sans uppercase" 
              style={{ 
                fontSize, 
                letterSpacing: tracking, 
                fill: "#050508",
                stroke: "#050508",
                strokeWidth: "3.5px",
                strokeLinejoin: "round",
                fontWeight: 950
              }}
              dx="0"
              dy="0"
            >
              <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
                arcscape
              </textPath>
            </text>

            {/* 4. Highly Polished Liquid Chrome Bevel Base Rim (from the 'S' sign) */}
            <text 
              className="font-sans uppercase" 
              style={{ 
                fontSize, 
                letterSpacing: tracking, 
                fill: "none",
                stroke: `url(#chromeGradient-${size})`,
                strokeWidth: "4.5px",
                strokeLinejoin: "round",
                fontWeight: 950,
                filter: `url(#chromeBevelFilter-${size})`
              }}
              dx="0"
              dy="0"
            >
              <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
                arcscape
              </textPath>
            </text>

            {/* 5. Glistening Mirror Liquid Chrome Core Face (from the 'S' sign) */}
            <text 
              className="font-sans uppercase" 
              style={{ 
                fontSize, 
                letterSpacing: tracking, 
                fill: `url(#chromeGradient-${size})`,
                stroke: "#050508",
                strokeWidth: "1.2px",
                strokeLinejoin: "round",
                fontWeight: 950
              }}
              dx="0"
              dy="0"
            >
              <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
                arcscape
              </textPath>
            </text>

            {/* 6. Realistic specular top-coat overlay gloss */}
            <text 
              className="font-sans uppercase pointer-events-none opacity-25" 
              style={{ 
                fontSize, 
                letterSpacing: tracking, 
                fill: "#ffffff",
                filter: `url(#glassShine-${size})`,
                fontWeight: 950
              }}
              dx="0"
              dy="0"
            >
              <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">
                arcscape
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
      <div className="md:col-span-2 bg-stone-900 text-stone-100 p-6 rounded-2xl border border-stone-800 space-y-4 flex flex-col justify-between h-80 relative overflow-hidden group shadow-md">
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-emerald-400 flex items-center gap-1.5 bg-emerald-950/40 rounded-bl-xl border-l border-b border-emerald-900/30">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>SYS_ONLINE: 342 NODES</span>
        </div>

        <div className="space-y-1 z-10">
          <span className="font-mono text-[8px] text-rose-400 font-bold uppercase tracking-widest">AUDIO_STREAM_TRANSCODER</span>
          <h3 className="font-serif text-xl font-normal text-stone-100">Live Decentralized Waveform</h3>
        </div>

        {/* Waveform bars */}
        <div className="flex items-end gap-1 h-32 w-full pb-2 z-10">
          {Array.from({ length: 28 }).map((_, i) => {
            const duration = 0.5 + (i % 6) * 0.12;
            return (
              <motion.div
                key={i}
                animate={{ height: ["10px", `${20 + (i * 4) % 55}px`, "6px", `${12 + (i * 6) % 75}px`, "10px"] }}
                transition={{ repeat: Infinity, duration, ease: "easeInOut" }}
                className="flex-1 bg-gradient-to-t from-[#7D123D] via-[#9E1D51] to-rose-400 rounded-t-xs"
              />
            );
          })}
        </div>

        <div className="flex justify-between items-center z-10 font-mono text-[9px] text-stone-400 pt-3 border-t border-stone-800/60">
          <span>CODEC: 24-BIT FLAC LOSSLESS</span>
          <span>P2P RETRIEVAL BITRATE: 1411 KBPS</span>
        </div>
      </div>
    );
  }

  if (slug === 'project-repulink') {
    return (
      <div className="md:col-span-2 bg-stone-100 p-6 rounded-2xl border border-stone-200 space-y-4 flex flex-col justify-between h-80 relative overflow-hidden group shadow-xs">
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-indigo-500 flex items-center gap-1.5 bg-indigo-50 rounded-bl-xl border-l border-b border-indigo-100">
          <Wifi className="h-3 w-3" />
          <span>NFC TRANSCEIVER ENGAGED</span>
        </div>

        <div className="space-y-1">
          <span className="font-mono text-[8px] text-stone-400 font-bold uppercase tracking-widest">TAP_BOOSTER_HARDWARE</span>
          <h3 className="font-serif text-xl font-normal text-stone-900">Physical NFC Review Station</h3>
        </div>

        {/* NFC Card Mockup */}
        <div className="flex justify-center items-center h-32 w-full">
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="w-56 h-28 bg-gradient-to-br from-stone-800 to-stone-900 rounded-xl border border-stone-700 p-4 flex flex-col justify-between shadow-md relative overflow-hidden"
          >
            {/* Wooden ring effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,24,0.06)_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />
            
            <div className="flex justify-between items-start z-10">
              <span className="font-mono text-[8px] text-amber-500/80 font-bold">REPULINK v2.1</span>
              <div className="flex gap-0.5 text-amber-400 text-[10px]">★★★★★</div>
            </div>

            <div className="text-center py-1 z-10">
              <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400 block">Google Review Portal</span>
              <span className="font-serif text-xs font-normal text-white block mt-0.5">(( Tap Phone To Review ))</span>
            </div>

            <div className="flex justify-between items-center z-10 text-stone-500 text-[7px] font-mono border-t border-stone-800 pt-1.5">
              <span>NFC DYNAMIC LINK</span>
              <span>100% ORGANIC LP</span>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-between items-center font-mono text-[9px] text-stone-500 pt-3 border-t border-stone-200">
          <span>HARDWARE: SOLID WALNUT BASE</span>
          <span>COMPLIANCE: GOOGLE BUSINESS TOS</span>
        </div>
      </div>
    );
  }

  if (slug === 'project-xnui') {
    return (
      <div className="md:col-span-2 bg-stone-950 text-stone-100 p-6 rounded-2xl border border-stone-900 space-y-4 flex flex-col justify-between h-80 relative overflow-hidden group shadow-md">
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-sky-400 flex items-center gap-1.5 bg-sky-950/40 rounded-bl-xl border-l border-b border-sky-900/30">
          <FileCode className="h-3 w-3" />
          <span>SCHEMA_STATUS: VALIDATED</span>
        </div>

        <div className="space-y-1 z-10">
          <span className="font-mono text-[8px] text-sky-400 font-bold uppercase tracking-widest">XML_PARSER_COMPILE</span>
          <h3 className="font-serif text-xl font-normal text-stone-100">Strict XHTML Declarations</h3>
        </div>

        {/* Code block */}
        <div className="flex-1 bg-stone-900/60 p-3 rounded-lg border border-stone-800 font-mono text-[9px] text-sky-350 overflow-y-auto leading-relaxed max-h-36 select-none">
          <div className="text-stone-500">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</div>
          <div>&lt;<span className="text-rose-400">xnui:Canvas</span> <span className="text-amber-300">id</span>=&quot;viewport_main&quot; <span className="text-amber-300">width</span>=&quot;100%&quot;&gt;</div>
          <div className="pl-3">&lt;<span className="text-rose-400">xnui:BevelExtrusion</span> <span className="text-amber-300">depth</span>=&quot;6px&quot; <span className="text-amber-300">ambient</span>=&quot;0.45&quot;&gt;</div>
          <div className="pl-6">&lt;<span className="text-rose-400">xnui:Typography</span> <span className="text-amber-300">font</span>=&quot;Space Grotesk&quot;&gt;Arcscape&lt;/<span className="text-rose-400">xnui:Typography</span>&gt;</div>
          <div className="pl-3">&lt;/<span className="text-rose-400">xnui:BevelExtrusion</span>&gt;</div>
          <div>&lt;/<span className="text-rose-400">xnui:Canvas</span>&gt;</div>
        </div>

        <div className="flex justify-between items-center z-10 font-mono text-[9px] text-stone-500 pt-3 border-t border-stone-900">
          <span>PARSING LAYOUT SHIFT (CLS): 0.000</span>
          <span>W3C COMPLIANT SPEC</span>
        </div>
      </div>
    );
  }

  if (slug === 'project-biofail') {
    return (
      <div className="md:col-span-2 bg-[#0e0707] text-rose-100 p-6 rounded-2xl border border-rose-950/50 space-y-4 flex flex-col justify-between h-80 relative overflow-hidden group shadow-md">
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-rose-500 flex items-center gap-1.5 bg-rose-950/20 rounded-bl-xl border-l border-b border-rose-950/30">
          <AlertTriangle className="h-3 w-3 animate-pulse" />
          <span>VIRAL CONTAINMENT BREACH: LEVEL 4</span>
        </div>

        <div className="space-y-1 z-10">
          <span className="font-mono text-[8px] text-rose-500 font-bold uppercase tracking-widest">BIOSURVIVAL_CORE_STATUS</span>
          <h3 className="font-serif text-xl font-normal text-rose-100">Crumbling Subterranean Laboratories</h3>
        </div>

        {/* Gritty interface mockup */}
        <div className="bg-rose-950/10 p-3 rounded-lg border border-rose-950/40 font-mono text-[10px] text-rose-550 space-y-1.5 relative">
          <div className="absolute top-3 right-3 h-2 w-2 rounded-full bg-red-500 animate-ping" />
          <div className="flex justify-between border-b border-rose-950/30 pb-1">
            <span>[ SYSTEM STATE: ALERT ]</span>
            <span className="font-bold">DECAY INDEX: 45.2%</span>
          </div>
          <div className="text-[9px] text-rose-600 leading-snug">
            &gt; LOG EXCERPT: SEC_CORE_OFFLINE. VIRAL MUTAGEN AGENT B-04 HAS SATURATED THE LOWER VENTILATION DUCTS. BIOHAZARD PROTOCOLS ENGAGED. 12 SECURITY TURRETS IN SECTOR-B REMAIN HOSTILE.
          </div>
        </div>

        <div className="flex justify-between items-center z-10 font-mono text-[9px] text-rose-700 pt-3 border-t border-rose-950/30">
          <span>MUTATION RATIO: V-STABILIZED</span>
          <span>FLOOR DEPTH: -450 METERS</span>
        </div>
      </div>
    );
  }

  if (slug === 'project-dentalgigs') {
    return (
      <div className="md:col-span-2 bg-stone-100 p-6 rounded-2xl border border-stone-200 space-y-4 flex flex-col justify-between h-80 relative overflow-hidden group shadow-xs">
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-emerald-600 flex items-center gap-1.5 bg-emerald-50 rounded-bl-xl border-l border-b border-emerald-100">
          <CheckCircle2 className="h-3 w-3" />
          <span>4,890 LICENSED PROFESSIONALS</span>
        </div>

        <div className="space-y-1">
          <span className="font-mono text-[8px] text-[#7D123D] font-bold uppercase tracking-widest">TEMPORARY_PLACEMENT_GRID</span>
          <h3 className="font-serif text-xl font-normal text-stone-900">On-Demand Dental Gig Planner</h3>
        </div>

        {/* Gig posts checklist */}
        <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
          <div className="bg-white p-2.5 rounded-lg border border-stone-200 flex justify-between items-center">
            <div className="space-y-0.5">
              <span className="font-mono text-[8px] uppercase tracking-wider text-stone-400 block">Elite Dental Care // Hygienist</span>
              <span className="text-xs font-serif font-bold text-stone-900">Tomorrow, 8:00 AM - 5:00 PM</span>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs font-bold text-[#7D123D] block">$75 / hr</span>
              <span className="font-mono text-[7px] uppercase text-emerald-600 font-bold block">★ License Verified</span>
            </div>
          </div>

          <div className="bg-white p-2.5 rounded-lg border border-stone-200/60 flex justify-between items-center opacity-70">
            <div className="space-y-0.5">
              <span className="font-mono text-[8px] uppercase tracking-wider text-stone-400 block">Lakeside Dentistry // Assistant</span>
              <span className="text-xs font-serif font-bold text-stone-900">Friday, 9:00 AM - 3:00 PM</span>
            </div>
            <div className="text-right">
              <span className="font-mono text-xs font-bold text-stone-800 block">$42 / hr</span>
              <span className="font-mono text-[7px] uppercase text-emerald-600 font-bold block">★ Credentialed</span>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center font-mono text-[9px] text-stone-500 pt-3 border-t border-stone-200">
          <span>MATCH LATENCY: ~14 MINUTES</span>
          <span>STRIPE DIRECT DEPOSIT PAYMENTS</span>
        </div>
      </div>
    );
  }

  if (slug === 'project-kundalink') {
    return (
      <div className="md:col-span-2 bg-[#FAF6F0] p-6 rounded-2xl border border-[#EDE2D4] space-y-4 flex flex-col justify-between h-80 relative overflow-hidden group shadow-xs">
        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-stone-500 flex items-center gap-1.5 bg-white/60 rounded-bl-xl border-l border-b border-[#EDE2D4]">
          <Activity className="h-3 w-3 text-amber-600" />
          <span>SADHANA RESONANCE COMPILING</span>
        </div>

        <div className="space-y-1">
          <span className="font-mono text-[8px] text-amber-600 font-bold uppercase tracking-widest">KUNDALINI_BREATHWORK_HARMONY</span>
          <h3 className="font-serif text-xl font-normal text-stone-800">Breath Aura Connection</h3>
        </div>

        {/* Pulsing mandala layout */}
        <div className="flex justify-center items-center h-32 w-full relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
            className="w-24 h-24 rounded-full border border-dashed border-amber-300 flex items-center justify-center opacity-80"
          >
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center"
            >
              <div className="w-8 h-8 rounded-full border border-dashed border-amber-400" />
            </motion.div>
          </motion.div>
          
          <div className="absolute font-mono text-[8px] text-amber-700 tracking-wider text-center py-1">
            <span>AJNA SHIELDS</span>
            <span className="block text-[7px] text-stone-400 mt-0.5">Amrit Vela (Early Sadhana)</span>
          </div>
        </div>

        <div className="flex justify-between items-center font-mono text-[9px] text-[#A67C52] pt-3 border-t border-[#EDE2D4]">
          <span>MATCHING MATRIX: AURA LEVEL &amp; SPIRITUAL PATHS</span>
          <span>100% SECURE NETWORK</span>
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
  | 'project-dentalgigs'
  | 'project-kundalink'
  | 'project-chosenspot';

const projectsData = [
  {
    viewState: 'project-muzcast' as const,
    domain: 'Muzcast.com',
    category: 'AUDIO SYNDICATION',
    tagline: 'Decentralized Web3 music and podcast syndication protocol.',
    type: 'WEB3 PLATFORM',
    url: 'https://muzcast.com'
  },
  {
    viewState: 'project-repulink' as const,
    domain: 'repulink.com',
    category: 'REPUTATION HARDWARE',
    tagline: 'NFC and instant SMS business review boosters and analytics.',
    type: 'SAAS + HARDWARE',
    url: 'https://repulink.com'
  },
  {
    viewState: 'project-xnui' as const,
    domain: 'xnui.com',
    category: 'UI DESIGN SYSTEM',
    tagline: 'Next-generation XML strict, high-performance procedural user interfaces.',
    type: 'DEV TOOLKIT',
    url: 'https://xnui.com'
  },
  {
    viewState: 'project-biofail' as const,
    domain: 'biofail.com',
    category: 'GAMING STUDIO',
    tagline: 'Gritty biopunk survival action and scientific mutation thriller.',
    type: 'INTERACTIVE PLAY',
    url: 'https://biofail.com'
  },
  {
    viewState: 'project-dentalgigs' as const,
    domain: 'dentalgigs.com',
    category: 'HEALTHCARE STAFFING',
    tagline: 'On-demand temporary shifts matching credentialed dental professionals.',
    type: 'MARKETPLACE SAAS',
    url: 'https://dentalgigs.com'
  },
  {
    viewState: 'project-kundalink' as const,
    domain: 'kundalink.com',
    category: 'SPIRITUAL SOCIAL',
    tagline: 'Matchmaking, mentoring and conscious networking for Kundalini practitioners.',
    type: 'COMMUNITY SOCIAL',
    url: 'https://kundalink.com'
  },
  {
    viewState: 'project-chosenspot' as const,
    domain: 'chosenspot.com',
    category: 'HERITAGE PUBLISHING',
    tagline: 'Digital media, regional guide and real estate showcase in Canandaigua, NY.',
    type: 'REGIONAL MEDIA',
    url: 'https://chosenspot.com'
  }
];

export default function LandingPage() {
  const [activeView, setActiveView] = useState<ViewType>('portal');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    <main className="relative min-h-screen bg-stone-50/20 text-stone-900 font-sans flex flex-col justify-between p-4 sm:p-8 md:p-12 overflow-x-hidden">
      
      {/* Subtle pure aesthetic background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e0_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-0" />

      {/* Modern Top Header Row */}
      <header className="w-full max-w-5xl mx-auto flex justify-between items-center z-20 pb-4 border-b border-stone-200/40">
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

      {/* 2. DYNAMIC MAIN BODY ROUTER */}
      <div className="flex-1 w-full max-w-5xl mx-auto py-8 z-10 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          
          {/* VIEW: PORTAL (HOME PAGE WITH CLOUDS AND PROJECTS INDEX) */}
          {activeView === 'portal' && (
            <motion.section 
              key="portal-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center max-w-5xl mx-auto w-full py-2 relative"
            >
              
              {/* Logo container with delicate SVG clouds faded behind the logo */}
              <div className="w-full relative flex flex-col items-center pt-10 pb-14 overflow-visible">
                
                {/* Beautiful, faded artful SVG clouds behind the logo fading down */}
                <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden flex items-center justify-center">
                  {/* Top skies soft blue gradient */}
                  <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#e0f2fe]/40 via-[#f5f5f4]/25 to-transparent blur-3xl rounded-full opacity-80" />

                  {/* SVG cloud line art & ambient shapes - increased opacity and stroke visibility */}
                  <svg className="w-full max-w-5xl h-64 text-stone-300/80 overflow-visible" viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.85" />
                        <stop offset="50%" stopColor="#f1f5f9" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
                      </linearGradient>
                      <linearGradient id="cloudGradB" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f5f5f4" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#fafaf9" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    
                    {/* Cloud Shape A - Filled with soft slate/stone gradient and contoured with subtle stroke */}
                    <motion.g
                      animate={{
                        x: mousePosition.x * 25,
                        y: mousePosition.y * 12,
                      }}
                      transition={{ type: "spring", stiffness: 60, damping: 25, mass: 0.8 }}
                    >
                      <path 
                        d="M100,180 C120,130 180,120 220,150 C250,110 320,110 350,140 C380,90 470,90 500,140 C520,110 570,110 590,140 C620,100 680,100 710,130 C740,80 820,80 850,130 C880,110 930,120 950,160 C980,160 990,200 970,220 C950,240 50,240 20,220 C10,200 50,180 100,180 Z" 
                        fill="url(#cloudGrad)" 
                        stroke="#cbd5e1" 
                        strokeWidth="1"
                      />
                    </motion.g>
                    
                    {/* Cloud Shape B (smaller offset background cloud with dotted line style) */}
                    <motion.g
                      animate={{
                        x: mousePosition.x * -12,
                        y: mousePosition.y * -6,
                      }}
                      transition={{ type: "spring", stiffness: 60, damping: 25, mass: 0.8 }}
                    >
                      <path 
                        d="M200,120 C230,80 300,70 340,100 C370,60 440,60 470,90 C500,50 570,50 600,90 C620,70 660,75 680,100 C710,60 770,65 800,95 C820,80 860,85 880,110" 
                        stroke="#94a3b8" 
                        strokeWidth="1.5" 
                        strokeLinecap="round" 
                        strokeDasharray="4,4" 
                        className="opacity-40" 
                      />
                    </motion.g>

                    {/* Cloud Shape C (soft bottom fading clouds) */}
                    <motion.g
                      animate={{
                        x: mousePosition.x * 40,
                        y: mousePosition.y * 18,
                      }}
                      transition={{ type: "spring", stiffness: 60, damping: 25, mass: 0.8 }}
                    >
                      <path 
                        d="M50,220 C100,190 170,195 220,220 C280,180 360,180 410,215 C460,175 550,180 600,215 C650,180 720,180 770,215 C820,190 880,195 920,220" 
                        fill="url(#cloudGradB)" 
                        stroke="#e2e8f0" 
                        strokeWidth="1.5" 
                      />
                    </motion.g>
                  </svg>
                </div>

                {/* Central Logo - moved higher up and centered */}
                <div className="text-center z-10 w-full flex justify-center">
                  <ArcscapeCurvedLogo size="large" />
                </div>
              </div>

              {/* Header Title for PROJECTS section */}
              <div className="text-center mb-10 select-none z-10">
                <h2 className="font-mono text-[9px] uppercase tracking-[0.35em] text-stone-400 font-bold mb-1">
                  INCUBATED PORTFOLIO
                </h2>
                <span className="text-[10px] text-stone-400 font-serif italic">Category-defining digital networks &amp; private startups</span>
              </div>

              {/* PROJECTS GRID INDEX */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-5xl mx-auto z-10 px-4 mb-16">
                {projectsData.map((project, idx) => (
                  <motion.div
                    key={project.domain}
                    whileHover={{ y: -4, boxShadow: "0 10px 24px rgba(0,0,0,0.03)" }}
                    onClick={() => setActiveView(project.viewState)}
                    className="bg-white/90 backdrop-blur-xs p-5 rounded-xl border border-stone-200/80 hover:border-stone-850 transition-all duration-300 cursor-pointer flex flex-col justify-between group h-44 shadow-xs"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-[8px] uppercase text-stone-400 font-bold tracking-wider">
                          {"0" + (idx + 1) + " // " + project.category}
                        </span>
                        <span className="text-[9px] font-mono text-stone-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 flex items-center gap-0.5 font-bold text-[#7D123D]">
                          EXPLORE <ChevronRight className="h-3 w-3" />
                        </span>
                      </div>
                      
                      <div>
                        <h3 className="font-serif text-lg font-normal text-stone-900 group-hover:text-[#7D123D] transition-colors tracking-tight">
                          {project.domain}
                        </h3>
                        <p className="text-[11px] text-stone-500 line-clamp-2 leading-relaxed pt-0.5 font-serif italic">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[8px] font-mono text-stone-400 font-bold">
                      <span className="uppercase tracking-wider">{project.type}</span>
                      <span className="text-stone-300 font-light">EST. 2026</span>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.section>
          )}

          {/* VIEW: PROJECT DETAILS DYNAMIC ROUTER */}
          {activeView.startsWith('project-') && (
            <ProjectDetailView 
              viewState={activeView} 
              onBack={() => setActiveView('portal')} 
            />
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

      {/* 3. FOOTER REGISTRY WITH REMOVED EVU MENTIONS */}
      <footer className="w-full max-w-5xl mx-auto pt-8 border-t border-stone-200/50 relative z-10">
        
        {/* Bottom footer row with small logo and small grey text */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4 text-[10px] font-mono text-stone-400 py-2">
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
                alert('Sitemap location: /sitemap.xml');
              }}
            >
              sitemap.xml
            </button>
            <span>•</span>
            <button 
              type="button"
              className="hover:text-stone-800 transition-colors cursor-pointer text-stone-400" 
              onClick={() => {
                alert('Robots rules location: /robots.txt');
              }}
            >
              robots.txt
            </button>
          </div>
        </div>

      </footer>

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

              <p className="text-[11px] text-stone-400 leading-relaxed font-serif italic">
                Authorized venture partners, advisory mentors, and liquid providers may enter access tokens below.
              </p>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="modal_gatekey" className="font-mono text-[8px] uppercase tracking-wider text-stone-400 block font-bold">
                    Access Code
                  </label>
                  <div className="relative flex items-center rounded-xl border border-stone-200 bg-stone-50/50 px-3 py-2 focus-within:border-stone-800 focus-within:bg-white transition-all">
                    <Lock className="h-3 w-3 text-stone-400 mr-2 shrink-0" />
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
                      className="w-full bg-transparent text-xs font-mono placeholder-stone-300 focus:outline-none"
                    />
                  </div>
                </div>

                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-[9px] font-mono uppercase tracking-wider text-red-500 font-bold flex items-center gap-1"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span>Invalid Access Key</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="flex gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsLoginOpen(false)}
                    className="flex-1 px-3 py-2 border border-stone-200 hover:bg-stone-50 text-stone-600 font-mono text-[9px] uppercase tracking-wider rounded-xl transition-all cursor-pointer font-bold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="flex-1 px-3 py-2 bg-stone-900 hover:bg-stone-850 text-white font-mono text-[9px] uppercase tracking-wider rounded-xl transition-all cursor-pointer font-bold flex items-center justify-center gap-1 shadow-sm"
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

              <div className="pt-2 border-t border-stone-100 flex justify-between items-center text-[7px] font-mono text-stone-400">
                <span>TLS_ENC_PORT_3000</span>
                <span>SHA-255 AUTHENTICATION</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </main>
  );
}
