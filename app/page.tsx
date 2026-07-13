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
  Map,
  AlertCircle,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// Perfect, mathematical curved logo using crisp textpath rendering
function ArcscapeCurvedLogo({ size = "normal" }: { size?: "normal" | "small" | "large" }) {
  if (size === "small") {
    return (
      <div className="flex items-center select-none group">
        <span 
          className="font-serif text-sm tracking-[0.35em] font-extrabold uppercase text-stone-900 transition-colors group-hover:text-[#7D123D]"
          style={{ fontFamily: "var(--font-serif), Playfair Display, serif" }}
        >
          ARCSCAPE
        </span>
      </div>
    );
  }

  let width = 180;
  let height = 55;
  let viewBox = "0 0 180 55";
  let pathD = "M 10 44 Q 90 22 170 44"; // Perfectly centered curve that leaves breathing space at top & bottom
  let fontSize = "13px";
  let tracking = "0.38em";

  if (size === "large") {
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
  // 19-project robust infographic dataset
  const infographicMap: Record<string, {
    title: string;
    subtitle: string;
    sector: string;
    demographic: string;
    businessModel: string;
    accent: 'blue' | 'red' | 'green' | 'amber';
    metrics: { label: string; value: string; detail: string }[];
    readinessLabel: string;
    readinessPercentage: number;
  }> = {
    'project-muzcast': {
      title: "Muzcast Global",
      subtitle: "Digital Spiritual Congregated Network",
      sector: "Faith-Based Digital Communities",
      demographic: "Interfaith spiritual groups & remote participants",
      businessModel: "SaaS & Directory Ledger Verification",
      accent: "blue",
      metrics: [
        { label: "ACTIVE COMMUNITIES", value: "1,840 Verified", detail: "Registered worldwide rows" },
        { label: "CONNECTION SLA", value: "99.9% Uptime", detail: "Synchronized audio feed" },
        { label: "MONTHLY USERS", value: "25,000+", detail: "Engaged active participants" }
      ],
      readinessLabel: "Operational Capacity",
      readinessPercentage: 92
    },
    'project-repulink': {
      title: "Repulink Audits",
      subtitle: "Generative AI Search Share of Voice Tracker",
      sector: "Digital Authenticity & Reputation Auditing",
      demographic: "High-net-worth estates, brands & public figures",
      businessModel: "Enterprise Audit Subscriptions",
      accent: "blue",
      metrics: [
        { label: "TRACKED ENGINES", value: "12 Core LLMs", detail: "Real-time crawler audit" },
        { label: "CITATION ACCURACY", value: "98.4%", detail: "Verified brand mentions" },
        { label: "MONITORED BRANDS", value: "4,200 Active", detail: "Protecting digital presence" }
      ],
      readinessLabel: "SaaS Launch Stage",
      readinessPercentage: 88
    },
    'project-xnui': {
      title: "XNUI UX Studio",
      subtitle: "Sofia Varian Tactile Interface Lab",
      sector: "Premium Digital Design & User Experience",
      demographic: "Enterprise financial portals & high-end real estate",
      businessModel: "Bespoke Design System Consulting",
      accent: "green",
      metrics: [
        { label: "COMPLETED DESIGNS", value: "48 Systems", detail: "High-fidelity bento grids" },
        { label: "DESIGN SYSTEMS", value: "14 Complete", detail: "Re-usable component packs" },
        { label: "MOBILE ACCESSIBILITY", value: "99% Score", detail: "Fully WCAG compliant" }
      ],
      readinessLabel: "Production Velocity",
      readinessPercentage: 95
    },
    'project-biofail': {
      title: "Biofail Database",
      subtitle: "Corporate Environmental Impact Registry",
      sector: "Corporate Social Responsibility (CSR) Audit",
      demographic: "Non-profit watchdog groups, ESG researchers & public",
      businessModel: "Open Database with Enterprise Premium API",
      accent: "red",
      metrics: [
        { label: "INDEXED CORPORATIONS", value: "1,500+ Listed", detail: "Public impact records" },
        { label: "CONFIRMED INCIDENTS", value: "353 Logged", detail: "Deforestation & carbon spikes" },
        { label: "COMPLETED AUDITS", value: "143 Cases", detail: "Rigorous scientific reports" }
      ],
      readinessLabel: "Data Audit Coverage",
      readinessPercentage: 85
    },
    'project-kundalink': {
      title: "KundaLink Directory",
      subtitle: "Zen & Kundalini Mentor Verification",
      sector: "Health, Mindfulness & Wellness Networks",
      demographic: "Yoga practitioners & certified wellness guides",
      businessModel: "Directory Placement & Secure Booking Fees",
      accent: "amber",
      metrics: [
        { label: "VERIFIED GUIDES", value: "420 Mentors", detail: "Thoroughly vetted teachers" },
        { label: "STUDENT RATING", value: "4.9 / 5.0", detail: "Average across 10k sessions" },
        { label: "SESSION RATES", value: "99.2% Positive", detail: "Zen breathwork completion" }
      ],
      readinessLabel: "Platform Adoption",
      readinessPercentage: 90
    },
    'project-chosenspot': {
      title: "ChosenSpot Geocaching",
      subtitle: "Specialized Explorer Coordinates Network",
      sector: "Active Outdoor Exploration & Geotagging",
      demographic: "Professional land surveyors & geocaching clubs",
      businessModel: "Premium Coordinate Licensing",
      accent: "blue",
      metrics: [
        { label: "HIDDEN TRAILS", value: "8,400+ Trails", detail: "Precision GPS tagged areas" },
        { label: "ACTIVE MEMBERS", value: "12,500+", detail: "Outdoor enthusiasts" },
        { label: "DISCOVERY RATE", value: "94.2%", detail: "Successful cache recoveries" }
      ],
      readinessLabel: "Map Database Size",
      readinessPercentage: 78
    },
    'project-clonecraft': {
      title: "CloneCraft Systems",
      subtitle: "Enterprise Synthetic AI Twin Systems",
      sector: "Customer Service & AI Automation",
      demographic: "Fortune 500 support desks & sales teams",
      businessModel: "Subscription SaaS per Active AI Agent",
      accent: "green",
      metrics: [
        { label: "ACTIVE AI AGENTS", value: "3,400 Clones", detail: "Customer-facing simulations" },
        { label: "BEHAVIORAL FIT", value: "99.8%", detail: "Extremely natural alignment" },
        { label: "CONNECTED PLATFORMS", value: "14 Integrations", detail: "CRMs, chat apps, databases" }
      ],
      readinessLabel: "Neural Network Training",
      readinessPercentage: 87
    },
    'project-exoshape': {
      title: "ExoShape Research",
      subtitle: "Adaptive Materials & Structures Laboratory",
      sector: "Deep Tech & Aerospace Engineering",
      demographic: "Private aerospace partners & robotics developers",
      businessModel: "Intellectual Property & Materials Licensing",
      accent: "amber",
      metrics: [
        { label: "PATENTS GRANTED", value: "3 Active", detail: "Advanced geometry alloys" },
        { label: "TESTED PROTOTYPES", value: "18 Complete", detail: "Stress & thermal tests" },
        { label: "TENSILE INDEX", value: "98.6 / 100", detail: "Outstanding weight-to-strength" }
      ],
      readinessLabel: "R&D Prototype Stage",
      readinessPercentage: 70
    },
    'project-trueinheritor': {
      title: "TrueInheritor Assets",
      subtitle: "Secure Digital Estate Preservations",
      sector: "Private Wealth & Estate FinTech",
      demographic: "Generational families & legacy trusts",
      businessModel: "Asset Under Stewardship Management Fee",
      accent: "amber",
      metrics: [
        { label: "MANAGED VALUATION", value: "$450 Million", detail: "Preserved digital estates" },
        { label: "LEDGER INTEGRITY", value: "100% Secure", detail: "Immutable chain history" },
        { label: "AUDITED CONTRACTS", value: "24 Completed", detail: "Fully verified smart agreements" }
      ],
      readinessLabel: "Trust Law Compliance",
      readinessPercentage: 94
    },
    'project-grzu': {
      title: "GRZU Monitoring",
      subtitle: "High-Performance API SLA Tracker",
      sector: "Developer Tools & Cloud Infrastructure",
      demographic: "SaaS engineering teams & DevOps managers",
      businessModel: "API Volume Subscription Pricing",
      accent: "green",
      metrics: [
        { label: "MONTHLY REQUESTS", value: "4.8 Billion", detail: "Tracked server operations" },
        { label: "RESPONSE LATENCY", value: "< 12ms Average", detail: "Ultra-fast ping analyzer" },
        { label: "UPTIME UPTREND", value: "99.999%", detail: "SLA alert precision rate" }
      ],
      readinessLabel: "Network Capacity",
      readinessPercentage: 99
    },
    'project-rp2p': {
      title: "RP2P Protocols",
      subtitle: "Minimalist Human Connection Message Exchange",
      sector: "Decentralized Social Networks",
      demographic: "Privacy-centric users & casual communicators",
      businessModel: "Ad-Free Tokenized Infrastructure",
      accent: "blue",
      metrics: [
        { label: "DAILY ACTIVE NODES", value: "18,500 Nodes", detail: "Decentralized P2P message paths" },
        { label: "ENCRYPTION STATUS", value: "Post-Quantum", detail: "Next-gen end-to-end cypher" },
        { label: "RETENTION GUARANTEE", value: "0-Byte Log", detail: "Permanent deletion upon read" }
      ],
      readinessLabel: "Decentralization Score",
      readinessPercentage: 80
    },
    'project-holograph': {
      title: "Holograph Spatial",
      subtitle: "Volumetric AR/VR Interface Design",
      sector: "Immersive User Interfaces",
      demographic: "Hardware manufacturers & VR developers",
      businessModel: "SDK & Operating System Licensing",
      accent: "amber",
      metrics: [
        { label: "SUPPORTED HEADSETS", value: "8 Key Devices", detail: "Cross-platform compatibility" },
        { label: "VOLUMETRIC RENDERING", value: "120 FPS", detail: "Buttery smooth viewport refresh" },
        { label: "UX IMMERSIVENESS", value: "96% Rating", detail: "Tested spatial usability" }
      ],
      readinessLabel: "SDK Maturity",
      readinessPercentage: 75
    },
    'project-protosquad': {
      title: "ProtoSquad CAD",
      subtitle: "Rapid CAD & Additive Prototyping Laboratory",
      sector: "Mechanical Engineering Services",
      demographic: "Industrial designers & hardware startups",
      businessModel: "Consulting Contracts & Prototyping Fees",
      accent: "red",
      metrics: [
        { label: "CAD MODELS AUDITED", value: "120+ Complete", detail: "SolidWorks optimized" },
        { label: "PROTOTYPES PRINTED", value: "450+ Parts", detail: "Precision ABS, PLA & Nylon runs" },
        { label: "FABRICATION ERROR", value: "±0.05 mm", detail: "Extremely tight tolerances" }
      ],
      readinessLabel: "Machine Capacity",
      readinessPercentage: 85
    },
    'project-izpe': {
      title: "IZPE Quantum",
      subtitle: "Zero-Point Fluctuations Visualizer",
      sector: "Educational Science Databases",
      demographic: "Quantum researchers, universities & students",
      businessModel: "Grant Funding & Educational Premium Subs",
      accent: "blue",
      metrics: [
        { label: "RESEARCH PAPERS", value: "8 Indexed", detail: "Casimir effect literature" },
        { label: "SIMULATION MODELS", value: "14 Virtual Lab", detail: "Vacuum energy simulators" },
        { label: "ENERGY HARVESTING", value: "Theoretical", detail: "Pure physics modeling" }
      ],
      readinessLabel: "Simulation Accuracy",
      readinessPercentage: 65
    },
    'project-bridge': {
      title: "Bridge WS Ledger",
      subtitle: "Verified Premium Developer Database",
      sector: "Professional Service Registries",
      demographic: "Tech startups looking for vetted talent",
      businessModel: "Commission-free Partner Placement Fees",
      accent: "green",
      metrics: [
        { label: "VETTED DEVELOPERS", value: "2,400 Certified", detail: "Strict algorithm screening" },
        { label: "ELITE AGENCIES", value: "150 Partners", detail: "Validated company structures" },
        { label: "DISPUTE RECORD", value: "100% Settled", detail: "Strong trust legal frameworks" }
      ],
      readinessLabel: "Registrant Backlog",
      readinessPercentage: 91
    },
    'project-aleph': {
      title: "Aleph Accelerator",
      subtitle: "AI Ventures & Equity Exchange Hub",
      sector: "Venture Capital & Corporate Incubation",
      demographic: "Early-stage AI founders & seed investors",
      businessModel: "Equity Stakes & Incubator Support Fees",
      accent: "amber",
      metrics: [
        { label: "PORTFOLIO STARTUPS", value: "16 Active AI", detail: "Incubating cognitive products" },
        { label: "EQUITY UNDER MGMT", value: "$12 Million", detail: "Early-stage valuation book" },
        { label: "KNOWLEDGE GRAPHING", value: "94% Accuracy", detail: "Integrated Knowledge Atlas" }
      ],
      readinessLabel: "Capital Deployment",
      readinessPercentage: 83
    },
    'project-jailsoft': {
      title: "JailSoft Systems",
      subtitle: "CJIS-Compliant Corrections Administration",
      sector: "GovTech Public Safety Software",
      demographic: "County sheriffs & correctional agencies",
      businessModel: "Annual Government Enterprise Licensing",
      accent: "red",
      metrics: [
        { label: "ACTIVE FACILITIES", value: "42 Agencies", detail: "Running correctional platforms" },
        { label: "CONTINUOUS UPTIME", value: "100.00%", detail: "SLA critical database uptime" },
        { label: "FEDERAL AUDITING", value: "CJIS Certified", detail: "Meets DOJ security policies" }
      ],
      readinessLabel: "Security Accreditation",
      readinessPercentage: 100
    },
    'project-plano': {
      title: "Plano Layouts",
      subtitle: "Web-Based No-Login Floor Plan Designer",
      sector: "Consumer Architectural SaaS",
      demographic: "Interior designers & homeowners",
      businessModel: "Free Core with Vector PDF Export Fees",
      accent: "amber",
      metrics: [
        { label: "FLOORPLANS CREATED", value: "35,000+ Layouts", detail: "No signup necessary" },
        { label: "FURNITURE STYLES", value: "120+ Styles", detail: "Pre-modeled grid snap vectors" },
        { label: "EXPORT SPEED", value: "< 2s Render", detail: "Fastest standard export available" }
      ],
      readinessLabel: "Interactive Editor Fit",
      readinessPercentage: 92
    },
    'project-humandemo': {
      title: "HumanDemo Performance",
      subtitle: "Circadian Rhythm & Focus Optimizer",
      sector: "BioTech Consumer Performance SaaS",
      demographic: "Remote professionals & high-output creators",
      businessModel: "Individual & Team Monthly Subscriptions",
      accent: "blue",
      metrics: [
        { label: "HEALTH BIOMARKERS", value: "8 Connected", detail: "Sleep, movement & focus input" },
        { label: "FOCUS COHERENCE", value: "92% Average", detail: "Self-reported cognitive flow" },
        { label: "OPTIMIZED SCHEDULES", value: "100% Custom", detail: "Dynamic calendar alerts" }
      ],
      readinessLabel: "Model Accuracy Level",
      readinessPercentage: 86
    }
  };

  const info = infographicMap[slug] || {
    title: slug.replace('project-', '').toUpperCase(),
    subtitle: "Venture Initiative Portfolio",
    sector: "Strategic Asset",
    demographic: "General commercial clients & enterprise partners",
    businessModel: "Direct licensing & digital stewardship",
    accent: "blue" as const,
    metrics: [
      { label: "VALUATION BASIS", value: "Verified Asset", detail: "Premium reserved domain" },
      { label: "OPERATIONAL CORE", value: "Ready to Deploy", detail: "Category-focused layout" },
      { label: "SECURITY AUDIT", value: "Passed", detail: "Strict advisory oversight" }
    ],
    readinessLabel: "Operational Readiness",
    readinessPercentage: 85
  };

  // Color theme variables based on accent
  const colorThemes = {
    blue: {
      border: "border-blue-250",
      accentBg: "bg-blue-50/50",
      pillBg: "bg-blue-100 text-blue-800 border-blue-200",
      textHighlight: "text-blue-600",
      barColor: "bg-blue-600",
      glow: "shadow-blue-500/10",
      accentLine: "bg-blue-600"
    },
    red: {
      border: "border-red-250",
      accentBg: "bg-red-50/50",
      pillBg: "bg-red-100 text-red-800 border-red-200",
      textHighlight: "text-red-600",
      barColor: "bg-red-600",
      glow: "shadow-red-500/10",
      accentLine: "bg-red-600"
    },
    green: {
      border: "border-emerald-250",
      accentBg: "bg-emerald-50/50",
      pillBg: "bg-emerald-100 text-emerald-800 border-emerald-200",
      textHighlight: "text-emerald-600",
      barColor: "bg-emerald-600",
      glow: "shadow-emerald-500/10",
      accentLine: "bg-emerald-600"
    },
    amber: {
      border: "border-amber-250",
      accentBg: "bg-amber-50/50",
      pillBg: "bg-amber-100 text-amber-800 border-amber-200",
      textHighlight: "text-amber-600",
      barColor: "bg-amber-600",
      glow: "shadow-amber-500/10",
      accentLine: "bg-amber-600"
    }
  };

  const theme = colorThemes[info.accent];

  return (
    <div className={`md:col-span-2 bg-white text-stone-800 p-6 rounded-2xl border-2 ${theme.border} space-y-5 flex flex-col justify-between min-h-[360px] relative overflow-hidden shadow-xs hover:shadow-sm transition-shadow`}>
      {/* Accent strip on the left edge */}
      <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${theme.accentLine}`} />
      
      {/* Top Header Row with sector pill */}
      <div className="flex flex-wrap items-start justify-between gap-2 z-10">
        <div className="space-y-1">
          <span className="text-xs font-bold font-mono tracking-widest text-stone-400 uppercase">VENTURE REPORT</span>
          <h3 className="font-serif text-xl font-bold text-stone-900 leading-tight">{info.title}</h3>
          <p className="text-sm font-medium text-stone-500">{info.subtitle}</p>
        </div>
        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${theme.pillBg}`}>
          {info.sector}
        </span>
      </div>

      {/* Primary Color Bright Infographic Progress Gauge */}
      <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 space-y-2 z-10">
        <div className="flex justify-between items-center text-sm">
          <span className="text-stone-600 font-bold font-sans uppercase tracking-wider">{info.readinessLabel}</span>
          <span className={`font-mono font-black ${theme.textHighlight}`}>{info.readinessPercentage}%</span>
        </div>
        <div className="w-full bg-stone-200 h-3.5 rounded-full overflow-hidden border border-stone-300/40">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${info.readinessPercentage}%` }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className={`h-full ${theme.barColor} rounded-full`}
          />
        </div>
      </div>

      {/* 3 Real, Logical Venture Metrics in Readable Bento Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 z-10">
        {info.metrics.map((metric, idx) => (
          <div key={idx} className={`p-3.5 rounded-xl border ${theme.border} ${theme.accentBg} flex flex-col justify-between space-y-1.5`}>
            <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider block">{metric.label}</span>
            <span className="text-base font-black text-stone-900 leading-none">{metric.value}</span>
            <span className="text-[11px] text-stone-500 font-medium leading-tight block">{metric.detail}</span>
          </div>
        ))}
      </div>

      {/* Strategic Target Bullets - Two Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-stone-200 text-sm font-sans z-10">
        <div className="space-y-0.5">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block">TARGET DEMOGRAPHIC</span>
          <p className="text-stone-700 font-medium">{info.demographic}</p>
        </div>
        <div className="space-y-0.5">
          <span className="text-xs font-bold text-stone-400 uppercase tracking-widest block">REVENUE & BUSINESS MODEL</span>
          <p className="text-stone-700 font-medium">{info.businessModel}</p>
        </div>
      </div>
    </div>
  );
}

function ProjectDetailView({ 
  viewState, 
  onBack,
  failedImages,
  setFailedImages
}: { 
  viewState: string; 
  onBack: () => void; 
  failedImages: Record<string, boolean>;
  setFailedImages: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}) {
  const currentProject = projectsData.find(p => p.viewState === viewState);
  if (!currentProject) return null;

  const isFailed = failedImages[currentProject.domain];
  const displayImage = isFailed 
    ? `https://picsum.photos/seed/${currentProject.domain.toLowerCase()}/1200/800`
    : currentProject.image;

  return (
    <motion.section 
      key={`${viewState}-view`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="space-y-8 max-w-4xl mx-auto w-full text-left"
    >
      {/* Back button and quick access Live link */}
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-4 w-full border-b border-stone-150 pb-3">
          <button 
            onClick={onBack}
            className="font-mono text-xs text-stone-500 hover:text-stone-900 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
          >
            <ArrowLeft className="h-3 w-3" />
            <span>Back to Projects</span>
          </button>

          <a 
            href={currentProject.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-sans text-xs font-bold uppercase tracking-wider text-white bg-[#7D123D] hover:bg-stone-900 transition-colors flex items-center gap-1.5 px-4.5 py-1.5 rounded-full shadow-xs cursor-pointer"
          >
            <span>Live Project Link</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-200/50 pb-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">{currentProject.domain}</h2>
            <span className="font-mono text-xs uppercase text-[#7D123D] tracking-widest font-bold">
              {"0" + (projectsData.indexOf(currentProject) + 1) + " // " + currentProject.category}
            </span>
          </div>
          <div className="font-mono text-xs text-stone-500 bg-stone-100 border border-stone-250/60 px-3 py-1 rounded-full uppercase tracking-wider">
            {currentProject.type}
          </div>
        </div>
      </div>

      {/* Large Featured Image matching card on homepage but larger */}
      <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden border border-stone-200 shadow-md group">
        {isFailed ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-stone-50 to-stone-100/60">
            {React.cloneElement(getProjectIcon(currentProject.domain), { 
              className: `h-16 w-16 mb-4 transition-colors ${getProjectTheme(currentProject.accentBar).text}` 
            })}
            <h3 className="font-serif text-2xl font-bold text-stone-800 tracking-tight">
              {currentProject.domain}
            </h3>
            <p className="font-mono text-xs text-stone-400 uppercase tracking-widest mt-1">
              {currentProject.category}
            </p>
          </div>
        ) : (
          <Image 
            src={displayImage} 
            alt={currentProject.domain} 
            fill 
            sizes="(max-width: 1200px) 100vw, 1200px"
            referrerPolicy="no-referrer"
            onError={() => {
              setFailedImages(prev => ({ ...prev, [currentProject.domain]: true }));
            }}
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        )}
      </div>

      {/* Dynamic visual dashboard layout and metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Visual Mockup widget on the left */}
        <ProjectVisualMockup slug={viewState} />

        {/* Content detail panel on the right */}
        <div className="bg-white p-6 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between min-h-[320px]">
          <div className="space-y-4">
            <h4 className="font-serif font-bold text-stone-900 text-sm">Product Matrix</h4>
            <p className="text-sm text-stone-600 leading-relaxed font-sans">
              Deploying highly specialized digital frameworks and physical materials under standard compliance protocols.
            </p>
            
            <div className="space-y-3 font-mono text-sm pt-2">
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

          <div className="pt-2 border-t border-stone-100 mt-4">
            <span className="font-mono text-xs text-stone-400 uppercase tracking-widest block font-bold mb-1">Ecosystem Integration</span>
            <span className="text-sm text-stone-700 font-serif italic leading-snug block">Aligned under general partnership capital.</span>
          </div>
        </div>

      </div>

      {/* Rich descriptive editorial layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        <div className="md:col-span-2 space-y-4">
          <h3 className="font-serif text-xl text-stone-950 font-normal">Aesthetic Architecture &amp; Mission</h3>
          <p className="text-sm text-stone-600 leading-relaxed font-sans">
            {currentProject.tagline} This platform is engineered strictly to resolve category-level hurdles in its respective industry. By combining procedural design, strict standards compliance, and an unhurried focus on sensory user layouts, we build sustainable, highly capitalized assets.
          </p>
          <p className="text-sm text-stone-600 leading-relaxed font-sans">
            We avoid modern hype trends in favor of absolute functional utility and mathematical optimization, ensuring that every pixel, interaction, and database record serves to build authentic, long-term brand authority.
          </p>
        </div>
        <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200/50 space-y-3">
          <h4 className="font-serif font-bold text-stone-900 text-xs uppercase tracking-wider">Strategic Pillars</h4>
          <ul className="space-y-2 text-sm text-stone-600 leading-relaxed">
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
          className="px-8 py-3.5 bg-stone-950 hover:bg-[#7D123D] text-white font-mono text-[10px] uppercase tracking-widest rounded-full shadow-md hover:shadow-xl flex items-center gap-2 cursor-pointer transition-all duration-300 transform hover:scale-[1.03] active:scale-[0.97]"
        >
          <Globe className="h-3.5 w-3.5" />
          <span>VISIT {currentProject.domain.toUpperCase()}</span>
        </a>
        <span className="text-[9px] text-stone-400 font-mono mt-2.5 uppercase tracking-wider">DIRECT DOMAIN CONNECTION</span>
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
    accentBar: 'bg-indigo-500',
    status: 'Active' as const,
    readiness: 95
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
    accentBar: 'bg-cyan-400',
    status: 'Incubating' as const,
    readiness: 75
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
    accentBar: 'bg-emerald-400',
    status: 'Ready' as const,
    readiness: 100
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
    accentBar: 'bg-amber-400',
    status: 'Active' as const,
    readiness: 90
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
    accentBar: 'bg-fuchsia-400',
    status: 'Incubating' as const,
    readiness: 80
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
    accentBar: 'bg-sky-400',
    status: 'Active' as const,
    readiness: 88
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
    accentBar: 'bg-teal-500',
    status: 'Ready' as const,
    readiness: 98
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
    accentBar: 'bg-purple-500',
    status: 'Incubating' as const,
    readiness: 65
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
    accentBar: 'bg-amber-500',
    status: 'Ready' as const,
    readiness: 92
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
    accentBar: 'bg-green-500',
    status: 'Active' as const,
    readiness: 94
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
    accentBar: 'bg-indigo-500',
    status: 'Active' as const,
    readiness: 85
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
    accentBar: 'bg-violet-500',
    status: 'Incubating' as const,
    readiness: 60
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
    accentBar: 'bg-rose-500',
    status: 'Ready' as const,
    readiness: 100
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
    accentBar: 'bg-blue-500',
    status: 'Incubating' as const,
    readiness: 70
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
    accentBar: 'bg-emerald-500',
    status: 'Active' as const,
    readiness: 91
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
    accentBar: 'bg-stone-500',
    status: 'Incubating' as const,
    readiness: 78
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
    accentBar: 'bg-red-500',
    status: 'Ready' as const,
    readiness: 96
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
    accentBar: 'bg-amber-500',
    status: 'Active' as const,
    readiness: 89
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
    accentBar: 'bg-cyan-500',
    status: 'Incubating' as const,
    readiness: 83
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

// Helper to classify project domains into human-meaningful categories
function getCategoryGroup(domain: string): 'AI & Deep Tech' | 'Wellness & Life' | 'Enterprise & Tools' {
  const d = domain.toLowerCase();
  if (d.includes('clonecraft') || d.includes('exoshape') || d.includes('aleph') || d.includes('holograph') || d.includes('repulink')) {
    return 'AI & Deep Tech';
  }
  if (d.includes('muzcast') || d.includes('kundalink') || d.includes('humandemo') || d.includes('rp2p') || d.includes('chosenspot')) {
    return 'Wellness & Life';
  }
  return 'Enterprise & Tools';
}

// Helper to provide realistic technical and product attributes (anti-AI slop)
function getProjectTech(domain: string): string[] {
  const d = domain.toLowerCase();
  if (d.includes('muzcast')) return ['Next.js', 'WebSockets', 'Tailwind'];
  if (d.includes('repulink')) return ['React', 'D3.js', 'SaaS Platform'];
  if (d.includes('xnui')) return ['Design Systems', 'CSS Canvas', 'Motion'];
  if (d.includes('biofail')) return ['Auditing Db', 'Carbon API', 'Tailwind'];
  if (d.includes('kundalink')) return ['React Router', 'Geolocation', 'Firebase'];
  if (d.includes('chosenspot')) return ['Mapbox API', 'P2P Net', 'Leaflet'];
  if (d.includes('clonecraft')) return ['Gemini API', 'Speech Synth', 'WebSocket'];
  if (d.includes('exoshape')) return ['3D Canvas', 'Mechanical CAD', 'D3.js'];
  if (d.includes('trueinheritor')) return ['Cryptography', 'Secure Vault', 'Next.js'];
  if (d.includes('grzu')) return ['API Monitor', 'Uptime Alerts', 'React'];
  if (d.includes('rp2p')) return ['P2P Protocol', 'WebRTC', 'Anonymous Mail'];
  if (d.includes('holograph')) return ['WebGL', 'Immersive UI', 'Three.js'];
  if (d.includes('protosquad')) return ['SolidWorks CAD', 'Additive Mfg', 'React'];
  if (d.includes('izpe')) return ['Quantum Sandbox', 'D3 Simulation', 'HTML5'];
  if (d.includes('bridge')) return ['Verified Ledger', 'Directory React', 'Tailwind'];
  if (d.includes('aleph')) return ['Knowledge Graph', 'Cognitive AI', 'Next.js'];
  if (d.includes('jailsoft')) return ['Jail Monitor', 'Secure Records', 'CJIS'];
  if (d.includes('plano')) return ['Interactive Canvas', 'Local Storage', 'HTML5'];
  if (d.includes('humandemo')) return ['Focus SaaS', 'Bio Rhythms', 'Chart.js'];
  return ['TypeScript', 'Next.js', 'Tailwind'];
}

// Helper to get tailored styling properties matching each project's accent color theme
interface ProjectTheme {
  rgb: string;
  hoverText: string;
  hoverBg: string;
  text: string;
  bgClass: string;
}

function getProjectTheme(accentBar: string): ProjectTheme {
  const bar = accentBar.toLowerCase();
  if (bar.includes('indigo')) return { rgb: '99, 102, 241', hoverText: 'group-hover:text-indigo-600', hoverBg: 'group-hover:bg-indigo-50/75', text: 'text-indigo-600', bgClass: 'bg-indigo-600 hover:bg-indigo-700' };
  if (bar.includes('cyan')) return { rgb: '6, 182, 212', hoverText: 'group-hover:text-cyan-600', hoverBg: 'group-hover:bg-cyan-50/75', text: 'text-cyan-600', bgClass: 'bg-cyan-600 hover:bg-cyan-700' };
  if (bar.includes('emerald')) return { rgb: '16, 185, 129', hoverText: 'group-hover:text-emerald-600', hoverBg: 'group-hover:bg-emerald-50/75', text: 'text-emerald-600', bgClass: 'bg-emerald-600 hover:bg-emerald-700' };
  if (bar.includes('amber')) return { rgb: '245, 158, 11', hoverText: 'group-hover:text-amber-600', hoverBg: 'group-hover:bg-amber-50/75', text: 'text-amber-600', bgClass: 'bg-amber-600 hover:bg-amber-700' };
  if (bar.includes('fuchsia')) return { rgb: '217, 70, 239', hoverText: 'group-hover:text-fuchsia-600', hoverBg: 'group-hover:bg-fuchsia-50/75', text: 'text-fuchsia-600', bgClass: 'bg-fuchsia-600 hover:bg-fuchsia-700' };
  if (bar.includes('sky')) return { rgb: '14, 165, 233', hoverText: 'group-hover:text-sky-600', hoverBg: 'group-hover:bg-sky-50/75', text: 'text-sky-600', bgClass: 'bg-sky-600 hover:bg-sky-700' };
  if (bar.includes('teal')) return { rgb: '20, 184, 166', hoverText: 'group-hover:text-teal-600', hoverBg: 'group-hover:bg-teal-50/75', text: 'text-teal-600', bgClass: 'bg-teal-600 hover:bg-teal-700' };
  if (bar.includes('purple')) return { rgb: '168, 85, 247', hoverText: 'group-hover:text-purple-600', hoverBg: 'group-hover:bg-purple-50/75', text: 'text-purple-600', bgClass: 'bg-purple-600 hover:bg-purple-700' };
  if (bar.includes('green')) return { rgb: '34, 197, 94', hoverText: 'group-hover:text-green-600', hoverBg: 'group-hover:bg-green-50/75', text: 'text-green-600', bgClass: 'bg-green-600 hover:bg-green-700' };
  if (bar.includes('violet')) return { rgb: '139, 92, 246', hoverText: 'group-hover:text-violet-600', hoverBg: 'group-hover:bg-violet-50/75', text: 'text-violet-600', bgClass: 'bg-violet-600 hover:bg-violet-700' };
  if (bar.includes('rose')) return { rgb: '244, 63, 94', hoverText: 'group-hover:text-rose-600', hoverBg: 'group-hover:bg-rose-50/75', text: 'text-rose-600', bgClass: 'bg-rose-600 hover:bg-rose-700' };
  if (bar.includes('blue')) return { rgb: '59, 130, 246', hoverText: 'group-hover:text-blue-600', hoverBg: 'group-hover:bg-blue-50/75', text: 'text-blue-600', bgClass: 'bg-blue-600 hover:bg-blue-700' };
  if (bar.includes('red')) return { rgb: '239, 68, 68', hoverText: 'group-hover:text-red-600', hoverBg: 'group-hover:bg-red-50/75', text: 'text-red-600', bgClass: 'bg-red-600 hover:bg-red-700' };
  return { rgb: '125, 18, 61', hoverText: 'group-hover:text-[#7D123D]', hoverBg: 'group-hover:bg-[#7D123D]/5', text: 'text-[#7D123D]', bgClass: 'bg-[#7D123D] hover:bg-stone-900' };
}

export default function LandingPage() {
  const [activeView, setActiveView] = useState<ViewType>('portal');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'AI & Deep Tech' | 'Wellness & Life' | 'Enterprise & Tools'>('All');

  const filteredProjects = React.useMemo(() => {
    let list = [...projectsData].sort((a, b) => a.domain.toLowerCase().localeCompare(b.domain.toLowerCase()));
    if (selectedCategory !== 'All') {
      list = list.filter(p => getCategoryGroup(p.domain) === selectedCategory);
    }
    return list;
  }, [selectedCategory]);

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
  const [isVenturesExpanded, setIsVenturesExpanded] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };
  const [searchQuery, setSearchQuery] = useState('');
  const [dashboardSearch, setDashboardSearch] = useState('');

  const renderBreadcrumbs = () => {
    if (activeView === 'portal') return null;

    let sectionLabel = 'STUDIO INITIATIVE';
    let sectionAction = () => {
      setActiveView('portal');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    let itemLabel = '';
    const isProject = activeView.startsWith('project-');

    if (isProject) {
      sectionLabel = 'VENTURE PORTFOLIO';
      sectionAction = () => {
        setActiveView('portal');
        setTimeout(() => {
          const portfolioSection = document.getElementById('portfolio-section');
          if (portfolioSection) {
            portfolioSection.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 400, behavior: 'smooth' });
          }
        }, 100);
      };
      const project = projectsData.find(p => p.viewState === activeView);
      itemLabel = project ? project.domain : activeView.replace('project-', '').toUpperCase() + '.COM';
    } else {
      switch (activeView) {
        case 'dashboard':
          sectionLabel = 'PARTNER SPACE';
          itemLabel = 'Venture Dashboard';
          break;
        case 'about':
          sectionLabel = 'THE FIRM';
          itemLabel = 'About Us';
          break;
        case 'support':
          sectionLabel = 'PARTNER CONCIERGE';
          itemLabel = 'Support Desk';
          break;
        case 'login-help':
          sectionLabel = 'SECURITY HELP';
          itemLabel = 'Cookie Handshake';
          break;
        case 'seed-incubator':
          sectionLabel = 'STUDIO INITIATIVE';
          itemLabel = 'Seed & Early Stage';
          break;
        case 'target-arbitrage':
          sectionLabel = 'STUDIO INITIATIVE';
          itemLabel = 'Computational Arbitrage';
          break;
        case 'strategic-partnerships':
          sectionLabel = 'STUDIO INITIATIVE';
          itemLabel = 'Strategic Alliances';
          break;
        case 'legal-network':
          sectionLabel = 'STUDIO INITIATIVE';
          itemLabel = 'Jurisdiction & Trust Law';
          break;
        case 'compliance-board':
          sectionLabel = 'STUDIO INITIATIVE';
          itemLabel = 'Compliance Board';
          break;
        case 'hr-advisory':
          sectionLabel = 'STUDIO INITIATIVE';
          itemLabel = 'HR & Executive Counsel';
          break;
        case 'node-register':
          sectionLabel = 'STUDIO INITIATIVE';
          itemLabel = 'Global Node Registry';
          break;
        case 'token-dtd':
          sectionLabel = 'STRUCTURAL RULES';
          itemLabel = 'Credential Tokens DTD';
          break;
        case 'xhtml-schemas':
          sectionLabel = 'STRUCTURAL RULES';
          itemLabel = 'XML Document Schemas';
          break;
        case 'registered-partners':
          sectionLabel = 'THE FIRM';
          itemLabel = 'Accredited Register';
          break;
        case 'portal-dtd':
          sectionLabel = 'STRUCTURAL RULES';
          itemLabel = 'Portal Layout DTD';
          break;
        case 'seed-network':
          sectionLabel = 'STUDIO INITIATIVE';
          itemLabel = 'Venture Advisors';
          break;
        case 'xhtml-spec':
          sectionLabel = 'STRUCTURAL RULES';
          itemLabel = 'XHTML Strict Specs';
          break;
        default:
          itemLabel = activeView.toUpperCase();
      }
    }

    return (
      <div 
        id="subtle-breadcrumbs"
        className="w-full flex items-center gap-2 py-3 select-none animate-fadeIn border-b border-stone-200/20"
      >
        <button
          type="button"
          onClick={() => {
            setActiveView('portal');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-stone-500 hover:text-[#7D123D] transition-colors font-mono text-xs uppercase tracking-wider font-bold cursor-pointer"
        >
          Portal
        </button>
        <ChevronRight className="h-3 w-3 text-stone-400 flex-shrink-0" />
        <button
          type="button"
          onClick={sectionAction}
          className="text-stone-500 hover:text-[#7D123D] transition-colors font-mono text-xs uppercase tracking-wider font-bold cursor-pointer"
        >
          {sectionLabel}
        </button>
        <ChevronRight className="h-3 w-3 text-stone-400 flex-shrink-0" />
        <span className="text-[#7D123D] font-mono text-xs uppercase tracking-wider font-black truncate">
          {itemLabel}
        </span>
      </div>
    );
  };

  // Support Page Math Puzzle States
  const [supportHasInitiated, setSupportHasInitiated] = useState(false);
  const [supportNum1, setSupportNum1] = useState(0);
  const [supportNum2, setSupportNum2] = useState(0);
  const [supportUserAnswer, setSupportUserAnswer] = useState('');
  const [supportErrorStatus, setSupportErrorStatus] = useState<string | null>(null);
  const [supportIsRevealed, setSupportIsRevealed] = useState(false);
  const [supportCopied, setSupportCopied] = useState(false);

  const resetSupportMathChallenge = () => {
    setSupportNum1(Math.floor(Math.random() * 8) + 3); // 3 to 10
    setSupportNum2(Math.floor(Math.random() * 7) + 2); // 2 to 8
    setSupportUserAnswer('');
    setSupportErrorStatus(null);
  };

  const handleSupportVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(supportUserAnswer.trim(), 10);
    
    if (isNaN(parsed)) {
      setSupportErrorStatus('Please enter a valid numeric answer');
      return;
    }

    if (parsed === supportNum1 + supportNum2) {
      setSupportIsRevealed(true);
      setSupportErrorStatus(null);
    } else {
      setSupportErrorStatus('Incorrect answer. Please try again.');
    }
  };

  const handleSupportCopy = () => {
    navigator.clipboard.writeText('info@arcscape.com');
    setSupportCopied(true);
    setTimeout(() => setSupportCopied(false), 2000);
  };

  // Generate math equation when active view changes to support
  useEffect(() => {
    if (activeView === 'support') {
      const timer = setTimeout(() => {
        resetSupportMathChallenge();
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [activeView]);

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
        <header className="w-full flex justify-between items-center pb-4 border-b border-stone-200/50">
          <div 
            onClick={() => {
              setActiveView('portal');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
            className="cursor-pointer group flex items-center justify-start overflow-visible h-10 w-28 sm:w-36 shrink-0"
          >
            <ArcscapeCurvedLogo size="small" />
          </div>
          
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Highly readable, ultra-clean horizontal navigation */}
            <nav className="flex items-center gap-3.5 sm:gap-6 text-stone-600 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider">
              <button
                onClick={() => {
                  setActiveView('portal');
                  setTimeout(() => {
                    const portfolioSection = document.getElementById('portfolio-section');
                    if (portfolioSection) {
                      portfolioSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 50);
                }}
                className={`hover:text-[#7D123D] transition-colors cursor-pointer relative py-1 px-1.5 ${activeView === 'portal' ? 'text-[#7D123D] font-extrabold' : ''}`}
              >
                <span>Ventures</span>
                {activeView === 'portal' && (
                  <span className="absolute bottom-[-4px] left-1 right-1 h-[2px] bg-[#7D123D] rounded-full" />
                )}
              </button>
              <button
                onClick={() => {
                  setActiveView('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`hover:text-[#7D123D] transition-colors cursor-pointer relative py-1 px-1.5 ${activeView === 'about' ? 'text-[#7D123D] font-extrabold' : ''}`}
              >
                <span>About</span>
                {activeView === 'about' && (
                  <span className="absolute bottom-[-4px] left-1 right-1 h-[2px] bg-[#7D123D] rounded-full" />
                )}
              </button>
              <button
                onClick={() => {
                  setActiveView('support');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`hover:text-[#7D123D] transition-colors cursor-pointer relative py-1 px-1.5 ${activeView === 'support' ? 'text-[#7D123D] font-extrabold' : ''}`}
              >
                <span>Support</span>
                {activeView === 'support' && (
                  <span className="absolute bottom-[-4px] left-1 right-1 h-[2px] bg-[#7D123D] rounded-full" />
                )}
              </button>
            </nav>

            <div className="h-4 w-[1px] bg-stone-200/80 hidden xs:block" />

            {activeView === 'dashboard' ? (
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <span className="font-sans text-[10px] tracking-wide text-stone-500 font-medium hidden sm:inline">Authorized Partner</span>
                <button
                  type="button"
                  onClick={() => {
                    setPassword('');
                    setActiveView('portal');
                  }}
                  className="px-3 py-1.5 border border-stone-200 hover:border-stone-800 text-stone-700 font-mono text-[9px] font-bold uppercase tracking-wider rounded-full transition-all cursor-pointer bg-white shadow-2xs"
                >
                  Lock
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setIsLoginOpen(true)}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-stone-900 hover:bg-[#7D123D] text-white font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full transition-all duration-300 shadow-2xs cursor-pointer flex items-center gap-1.5 border border-transparent shrink-0"
              >
                <Lock className="h-3 w-3 shrink-0" />
                <span>Partner Access</span>
              </button>
            )}
          </div>
        </header>
        {renderBreadcrumbs()}
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
              
              {/* Hero Banner - Highly integrated, unbloated architectural vault layout */}
              <div className="w-full max-w-4xl mx-auto relative flex flex-col items-center pt-4 pb-12 mb-8 text-center z-10 px-4">
                {/* 1. Large Curvature Logo - Elegant, cinematic static entrance */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full max-w-[550px] sm:max-w-[700px] md:max-w-[850px] flex justify-center overflow-visible select-none pointer-events-none -mb-8 sm:-mb-16 md:-mb-24 lg:-mb-[110px] relative"
                >
                  <ArcscapeCurvedLogo size="large" />
                </motion.div>

                {/* 2. Hero Content Frame - Sitting snuggly under the curve */}
                <div className="relative z-10 space-y-5 max-w-2xl mx-auto pt-8 sm:pt-14">
                  {/* Subtle, beautiful static visual separator */}
                  <div className="flex items-center justify-center gap-3 opacity-35">
                    <span className="w-2 h-[1px] bg-[#7D123D]" />
                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-[0.3em] text-[#7D123D] font-extrabold">Established MMXXIV</span>
                    <span className="w-2 h-[1px] bg-[#7D123D]" />
                  </div>

                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-stone-900 leading-tight">
                    Architects of the <span className="font-serif italic text-[#7D123D]">Next Digital Frontier</span>
                  </h1>
                  
                  <p className="text-stone-600 font-sans text-sm sm:text-[15px] leading-relaxed max-w-lg mx-auto">
                    We partner with founders to build elegant software, high-integrity systems, and beautiful user experiences.
                  </p>

                  {/* High-end Balanced CTA Composition - highly legible, modern sans buttons */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3 w-full max-w-md mx-auto">
                    <button 
                      onClick={() => {
                        const portfolioSection = document.getElementById('portfolio-section');
                        if (portfolioSection) {
                          portfolioSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold text-white bg-stone-900 hover:bg-[#7D123D] px-6 py-2.5 rounded-full transition-all duration-250 shadow-xs hover:shadow-md cursor-pointer border border-transparent"
                    >
                      <span>Explore Assets</span>
                      <span className="text-xs">↓</span>
                    </button>
                    <button 
                      onClick={() => {
                        setActiveView('about');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold text-stone-700 hover:text-stone-900 hover:bg-stone-50 bg-white border border-stone-200 px-6 py-2.5 rounded-full transition-all duration-250 shadow-3xs hover:shadow-2xs cursor-pointer"
                    >
                      <span>Read Manifest</span>
                      <span className="text-xs">→</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Category Filter Tab Bar - zero slop, extremely crisp design */}
              <div className="w-full text-left mb-8 max-w-7xl mx-auto px-4 z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200/40 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-[#7D123D]" />
                    <h2 className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-500 font-extrabold">
                      STUDIO PORTFOLIO / VENTURES INDEX
                    </h2>
                  </div>
                  
                  {/* High-end Minimal Tabs */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {(['All', 'AI & Deep Tech', 'Wellness & Life', 'Enterprise & Tools'] as const).map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3.5 py-1.5 rounded-full font-mono text-[9px] uppercase tracking-wider font-bold transition-all cursor-pointer ${
                          selectedCategory === cat
                            ? 'bg-stone-900 text-white shadow-2xs'
                            : 'bg-stone-50 text-stone-500 hover:bg-stone-100/80 hover:text-stone-800'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* PROJECTS GRID INDEX - Redesigned, clean card architecture */}
              <div id="portfolio-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full z-10 px-4 mb-16">
                {filteredProjects.map((project, idx) => {
                  const isFailed = failedImages[project.domain];
                  const displayImage = isFailed 
                    ? `https://picsum.photos/seed/${project.domain.toLowerCase()}/600/400`
                    : project.image;
                  const theme = getProjectTheme(project.accentBar);

                  return (
                    <motion.div
                      key={project.domain}
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => {
                        setActiveView(project.viewState as any);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`relative p-5 overflow-hidden bg-white rounded-2xl border border-stone-200/85 hover:shadow-[0_12px_32px_rgba(0,0,0,0.03)] transition-all duration-300 flex flex-col justify-between group h-[385px] w-full cursor-pointer ${project.accentBorder} ${project.glowColor}`}
                    >
                      {/* Quiet Top Header Row: Category Group & Cloned Icon matching the theme */}
                      <div className="flex items-center justify-between gap-2 mb-3 shrink-0">
                        <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-stone-400 font-bold">
                          {getCategoryGroup(project.domain)}
                        </span>
                        
                        <div className={`h-6 w-6 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 transition-all duration-350 shrink-0 ${theme.hoverBg} ${theme.hoverText}`}>
                          {React.cloneElement(getProjectIcon(project.domain), { className: "h-3 w-3 text-stone-400 group-hover:text-inherit transition-colors" })}
                        </div>
                      </div>

                      {/* Redesigned Card Image Section - elegant, clean, zero slop with thematic tinting */}
                      <div className="relative w-full h-36 overflow-hidden bg-stone-50 rounded-xl border border-stone-150 shrink-0 block">
                        {isFailed ? (
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-stone-50 to-stone-100/40">
                            {React.cloneElement(getProjectIcon(project.domain), { 
                              className: `h-8 w-8 mb-2 transition-colors ${theme.text}` 
                            })}
                            <span className="font-sans text-[11px] font-semibold text-stone-500 uppercase tracking-widest">
                              {project.domain}
                            </span>
                          </div>
                        ) : (
                          <>
                            <Image 
                              src={displayImage} 
                              alt={project.domain} 
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              referrerPolicy="no-referrer"
                              onError={() => {
                                setFailedImages(prev => ({ ...prev, [project.domain]: true }));
                              }}
                              className="object-cover filter grayscale-[15%] sepia-[5%] group-hover:grayscale-0 group-hover:sepia-0 group-hover:scale-[1.03] transition-all duration-500 ease-out opacity-100"
                            />
                            
                            {/* Elegant consistent tint overlay that matches the styling theme of each image beautifully and softens on hover */}
                            <div 
                              className="absolute inset-0 mix-blend-color opacity-70 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10" 
                              style={{ backgroundColor: `rgba(${theme.rgb}, 0.18)` }}
                            />
                            <div 
                              className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-500 pointer-events-none z-10" 
                              style={{ backgroundColor: `rgba(${theme.rgb}, 0.25)` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-45 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none z-10" />
                          </>
                        )}
                      </div>

                      {/* Card Info Section - clean, highly legible */}
                      <div className="flex flex-col flex-grow justify-between text-left pt-3.5">
                        <div className="space-y-1">
                          <span className={`font-serif text-[17px] font-bold text-stone-900 transition-colors tracking-tight block ${theme.hoverText}`}>
                            {project.domain}
                          </span>

                          <p className="text-xs text-stone-500 leading-relaxed font-sans font-normal line-clamp-2">
                            {project.tagline}
                          </p>
                        </div>

                        {/* Distinct click areas: View Details & Live Project Link */}
                        <div className="pt-3 border-t border-stone-100 mt-3 shrink-0 space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[8px] uppercase tracking-wider text-stone-400 font-bold block truncate">
                              {getProjectTech(project.domain).join(' \u2022 ')}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {/* View Details action */}
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveView(project.viewState as any);
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                              }}
                              className="flex-1 inline-flex items-center justify-center font-sans text-[10px] font-bold uppercase tracking-wider text-stone-600 hover:text-stone-900 bg-stone-100/70 hover:bg-stone-200/60 border border-stone-200/40 py-1.5 rounded-lg transition-colors cursor-pointer"
                            >
                              View Details
                            </button>

                            {/* Direct website link action tailored with project theme colors */}
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className={`flex-1 inline-flex items-center justify-center gap-1 font-sans text-[10px] font-extrabold uppercase tracking-wider text-white transition-colors py-1.5 rounded-lg shadow-3xs cursor-pointer ${theme.bgClass}`}
                            >
                              <span>Live Project</span>
                              <ExternalLink className="h-2.5 w-2.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
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
                  {!supportIsRevealed ? (
                    <motion.div
                      key="verification-gate"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2 text-center sm:text-left">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#7D123D]/5 border border-[#7D123D]/10 text-[#7D123D] font-mono text-[9px] uppercase tracking-wider font-bold">
                          <Lock className="h-3 w-3" />
                          <span>Identity Verification Gate</span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-stone-900">Partner Communication Channel</h3>
                        <p className="text-xs text-stone-550 leading-relaxed font-sans">
                          To protect our advisory desk and partner directories from automated network scrapers and email harvesting bots, please solve this simple equation to reveal our direct communication address.
                        </p>
                      </div>

                      <form onSubmit={handleSupportVerify} className="space-y-4">
                        <div className="flex items-center gap-3 bg-stone-50 border border-stone-200 p-4 rounded-xl justify-center max-w-sm mx-auto">
                          <span className="font-mono font-black text-base text-stone-700">
                            {supportNum1} + {supportNum2} =
                          </span>
                          <input
                            type="text"
                            pattern="[0-9]*"
                            inputMode="numeric"
                            required
                            placeholder="?"
                            value={supportUserAnswer}
                            onChange={(e) => {
                              setSupportUserAnswer(e.target.value);
                              setSupportErrorStatus(null);
                            }}
                            className="w-16 bg-white border border-stone-300 rounded-lg text-center py-2 text-sm font-bold text-[#7D123D] focus:outline-none focus:ring-2 focus:ring-[#7D123D]/20 focus:border-[#7D123D]"
                          />
                          <button
                            type="button"
                            onClick={resetSupportMathChallenge}
                            title="Generate new equation"
                            className="p-1.5 text-stone-400 hover:text-[#7D123D] transition-colors rounded-md hover:bg-stone-100"
                          >
                            <RefreshCw className="h-4 w-4" />
                          </button>
                        </div>

                        {supportErrorStatus && (
                          <div className="flex items-center gap-2 justify-center text-xs font-mono text-red-600 font-bold bg-red-50 py-2 px-4 rounded-lg border border-red-200 max-w-sm mx-auto">
                            <AlertCircle className="h-4 w-4 shrink-0" />
                            <span>{supportErrorStatus}</span>
                          </div>
                        )}

                        <button
                          type="submit"
                          className="w-full max-w-sm mx-auto py-3 bg-[#7D123D] hover:bg-[#9E1D51] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          <span>Verify &amp; Reveal Channel</span>
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="verification-revealed"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-6 text-center"
                    >
                      <div className="space-y-2">
                        <div className="inline-flex items-center gap-1 text-xs font-mono text-emerald-700 font-bold tracking-wider bg-emerald-50 border border-emerald-200 px-3.5 py-1 rounded-full uppercase mx-auto">
                          <Check className="h-3.5 w-3.5" />
                          <span>Human Verification Successful</span>
                        </div>
                        <h3 className="font-serif text-xl font-bold text-stone-900">
                          Direct Communication Channel
                        </h3>
                        <p className="text-xs text-stone-500 leading-relaxed max-w-md mx-auto">
                          Our secure partner communication route is revealed below. You can copy the clean address directly or click to launch your local email client.
                        </p>
                      </div>

                      {/* THE MUNGED EMAIL ADDRESS DISPLAYED IN MASSIVE BOLD TEXT */}
                      <div className="bg-stone-50 border-2 border-stone-200/80 p-5 rounded-2xl max-w-md mx-auto space-y-4">
                        <div className="space-y-1">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400 font-bold block">Protected Address (Munged)</span>
                          <div className="font-mono text-lg sm:text-xl font-black text-[#7D123D] select-all tracking-wide">
                            info [at] arcscape.com
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-2 justify-center pt-2 border-t border-stone-200/40">
                          <a
                            href="mailto:info@arcscape.com"
                            className="w-full sm:w-auto px-4 py-2 bg-[#7D123D] hover:bg-[#9E1D51] text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-xs"
                          >
                            <Mail className="h-4 w-4" />
                            <span>Launch Email Client</span>
                          </a>

                          <button
                            onClick={handleSupportCopy}
                            className="w-full sm:w-auto flex items-center justify-center gap-1.5 py-2 px-4 text-xs font-mono font-bold uppercase tracking-wider rounded-lg border-2 border-stone-200 text-stone-700 hover:bg-stone-50 transition-all cursor-pointer bg-white"
                          >
                            {supportCopied ? (
                              <>
                                <Check className="h-4 w-4 text-emerald-600" />
                                <span className="text-emerald-600">Copied!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-4 w-4 text-stone-500" />
                                <span>Copy Clean Email</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setSupportIsRevealed(false);
                          setSupportUserAnswer('');
                          resetSupportMathChallenge();
                        }}
                        className="text-stone-400 hover:text-stone-700 font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer block mx-auto font-bold"
                      >
                        Reset &amp; Lock Channel
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
                  className="font-mono text-xs font-bold text-stone-500 hover:text-stone-850 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Security Token XML Schema</h2>
                <span className="text-xs text-[#7D123D] font-mono font-bold uppercase tracking-wider block">Metadata Validation Specifications</span>
              </div>

              <div className="prose prose-stone font-sans text-stone-600 text-sm leading-relaxed mb-4">
                <p>
                  To secure client state during browser transactions, Arcscape platform tokens validate against strict XML Document Type Definitions (DTD). This guarantees that credentials match layout requirements precisely prior to decryption.
                </p>
              </div>

              <div className="bg-white border-2 border-stone-250/80 p-5 rounded-2xl text-stone-800 space-y-2 overflow-x-auto leading-relaxed shadow-xs">
                <pre className="font-mono text-xs text-stone-700">{`<!-- Arcscape Token Validation DTD -->
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
                  className="font-mono text-xs font-bold text-stone-500 hover:text-stone-850 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">XHTML Strict Compliance</h2>
                <span className="text-xs text-[#7D123D] font-mono font-bold uppercase tracking-wider block">Rendering Architecture Standards</span>
              </div>

              <p className="font-sans text-stone-600 leading-relaxed text-sm">
                XHTML Strict compliance is not an old legacy standard for us; it is a chosen philosophy. Closing every tag, keeping lowercase elements, and adhering to strict nesting principles forces our development studio to build lightweight, fast-loading visual portals that compile cleanly across decades of browser technology.
              </p>

              <div className="bg-white border-2 border-stone-250/80 p-5 rounded-2xl text-stone-800 space-y-2 overflow-x-auto leading-relaxed shadow-xs">
                <pre className="font-mono text-xs text-stone-700">{`<!-- Structural compliance nesting tests -->
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
                  className="font-mono text-xs font-bold text-stone-500 hover:text-stone-850 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">Portal DTD Schemas</h2>
                <span className="text-xs text-[#7D123D] font-mono font-bold uppercase tracking-wider block">Interface Structural Definitions</span>
              </div>

              <p className="font-sans text-stone-600 leading-relaxed text-sm">
                To guarantee zero layout shift, our portal&apos;s UI grids are validated against rigid Document Type Definitions specifying pixel coordinates, grid flex values, and typography hierarchies.
              </p>

              <div className="bg-white border-2 border-stone-250/80 p-5 rounded-2xl text-stone-800 space-y-2 overflow-x-auto leading-relaxed shadow-xs">
                <pre className="font-mono text-xs text-stone-700">{`<!-- Portal Layout Rules -->
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
                  className="font-mono text-xs font-bold text-stone-500 hover:text-stone-850 transition-colors flex items-center gap-1.5 uppercase cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Back to Access</span>
                </button>
                <h2 className="font-serif text-3xl font-normal text-stone-900 tracking-tight">XHTML Specification</h2>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Inspect the rigid, strict compliant W3C XHTML source document structured for this portal. Strict lowercase declarations and closed nesting ensure perfect cross-platform stability.
                </p>
              </div>

              <div className="relative">
                <pre className="text-xs font-mono text-stone-700 bg-white p-5 rounded-2xl border-2 border-stone-250/80 overflow-x-auto max-h-96 leading-relaxed shadow-xs">
                  {xhtmlCodeString}
                </pre>
                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(xhtmlCodeString);
                    alert('Strict XHTML specifications copied to clipboard!');
                  }}
                  className="absolute top-4 right-4 bg-stone-100 text-stone-700 hover:bg-[#7D123D] hover:text-white border border-stone-300 rounded px-3 py-1.5 text-xs font-mono transition-all cursor-pointer font-bold"
                >
                  Copy Specification
                </button>
              </div>
            </motion.section>
          )}

          {/* VIEW: PROJECT DETAILS */}
          {activeView.startsWith('project-') && (
            <ProjectDetailView 
              viewState={activeView} 
              onBack={() => {
                setActiveView('portal');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              failedImages={failedImages}
              setFailedImages={setFailedImages}
            />
          )}

        </AnimatePresence>
      </div>

      {/* 3. MULTI-COLUMN PREMIUM FOOTER SITE DIRECTORY */}
      <footer className="w-full max-w-5xl mx-auto pt-12 pb-8 border-t border-stone-200/50 relative z-10 space-y-12 px-4">
        
        {/* Arcscape Ventures Collapsible Section */}
        <div className="border border-stone-200/65 rounded-2xl bg-stone-50/50 overflow-hidden transition-all duration-300 shadow-xs">
          <button
            type="button"
            onClick={() => setIsVenturesExpanded(!isVenturesExpanded)}
            className="w-full flex items-center justify-between p-4 px-6 font-mono text-xs uppercase tracking-wider text-stone-950 font-black hover:bg-stone-100/30 transition-colors cursor-pointer text-left"
          >
            <div className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full bg-[#7D123D] ${isVenturesExpanded ? 'animate-pulse' : ''}`} />
              <span>ARCSCAPE VENTURES ({projectsData.length})</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-500 font-sans text-xs lowercase font-bold tracking-normal normal-case">
              <span>{isVenturesExpanded ? 'click to hide active portfolio' : 'click to expand active portfolio'}</span>
              <motion.span
                animate={{ rotate: isVenturesExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="inline-block text-stone-700 font-bold font-mono text-xs"
              >
                ↓
              </motion.span>
            </div>
          </button>

          <AnimatePresence initial={false}>
            {isVenturesExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="border-t border-stone-200/40"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6 px-8 text-left bg-white/50">
                  {/* Column 1: Networks & Directories */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-stone-850 font-black border-b border-stone-200 pb-2">
                      Networks &amp; Directories
                    </h4>
                    <ul className="space-y-2.5 text-xs font-sans text-stone-600">
                      {projectsData.slice(0, 5).map((project) => (
                        <li key={project.domain}>
                          <button 
                            onClick={() => { setActiveView(project.viewState as any); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left font-medium block"
                          >
                            {project.domain}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: AI & FinTech Labs */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-stone-850 font-black border-b border-stone-200 pb-2">
                      AI &amp; FinTech Labs
                    </h4>
                    <ul className="space-y-2.5 text-xs font-sans text-stone-600">
                      {projectsData.slice(5, 10).map((project) => (
                        <li key={project.domain}>
                          <button 
                            onClick={() => { setActiveView(project.viewState as any); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left font-medium block"
                          >
                            {project.domain}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Protocols & Sciences */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-stone-850 font-black border-b border-stone-200 pb-2">
                      Protocols &amp; Sciences
                    </h4>
                    <ul className="space-y-2.5 text-xs font-sans text-stone-600">
                      {projectsData.slice(10, 15).map((project) => (
                        <li key={project.domain}>
                          <button 
                            onClick={() => { setActiveView(project.viewState as any); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left font-medium block"
                          >
                            {project.domain}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 4: Enterprise & Performance */}
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-stone-850 font-black border-b border-stone-200 pb-2">
                      Enterprise &amp; Performance
                    </h4>
                    <ul className="space-y-2.5 text-xs font-sans text-stone-600">
                      {projectsData.slice(15).map((project) => (
                        <li key={project.domain}>
                          <button 
                            onClick={() => { setActiveView(project.viewState as any); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                            className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left font-medium block"
                          >
                            {project.domain}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Traditional Exploded Sitemap Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left pt-6 border-t border-stone-200/30">
          {/* Column 1: INVESTMENT CAPITAL */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-stone-850 font-black border-b border-stone-200 pb-2.5">
              Investment Capital
            </h4>
            <ul className="space-y-3 text-xs font-sans text-stone-600">
              <li>
                <button 
                  onClick={() => { setActiveView('portal'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  Portfolio Registry
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('seed-incubator'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  Seed &amp; Early Stage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('strategic-partnerships'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  Strategic Alliances
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('legal-network'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  Jurisdiction &amp; Trust Law
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('registered-partners'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  Accredited Register
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: STUDIO INITIATIVES */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-stone-850 font-black border-b border-stone-200 pb-2.5">
              Studio Initiatives
            </h4>
            <ul className="space-y-3 text-xs font-sans text-stone-600">
              <li>
                <button 
                  onClick={() => { setActiveView('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  About the Firm
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('target-arbitrage'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  Computational Arbitrage
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('seed-network'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  Venture Advisors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('hr-advisory'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  HR &amp; Executive Counsel
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('node-register'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  Global Node Registry
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: STRUCTURAL RULES */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-stone-850 font-black border-b border-stone-200 pb-2.5">
              Structural Rules
            </h4>
            <ul className="space-y-3 text-xs font-sans text-stone-600">
              <li>
                <button 
                  onClick={() => { setActiveView('xhtml-spec'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  XHTML Strict Specs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('portal-dtd'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  Portal Layout DTD
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('token-dtd'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  Credential Tokens DTD
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('xhtml-schemas'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  XML Document Schemas
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('compliance-board'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  Compliance Board
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: ACCESS & SUPPORT */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-wider text-stone-850 font-black border-b border-stone-200 pb-2.5">
              Access &amp; Support
            </h4>
            <ul className="space-y-3 text-xs font-sans text-stone-600">
              <li>
                <button 
                  onClick={() => { setActiveView('support'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  Partner Support Desk
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveView('login-help'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  Cookie Handshake Help
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setIsLoginOpen(true); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-semibold"
                >
                  Partner Portal Access
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { showToast('Sitemap location: /sitemap.xml'); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  sitemap.xml
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { showToast('Robots rules location: /robots.txt'); }}
                  className="hover:text-[#7D123D] hover:underline transition-colors cursor-pointer text-left block font-medium"
                >
                  robots.txt
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
              className="hover:text-stone-850 transition-colors cursor-pointer text-stone-400 font-medium" 
              onClick={() => {
                showToast('Privacy Protocol: SEC and GDPR Compliant');
              }}
            >
              Privacy Protocol
            </button>
            <span>•</span>
            <button 
              type="button"
              className="hover:text-stone-850 transition-colors cursor-pointer text-stone-400 font-medium" 
              onClick={() => {
                showToast('Terms of Engagement: Strictly Advisory');
              }}
            >
              Terms of Engagement
            </button>
            <span>•</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-[#7D123D] text-stone-400 font-bold transition-colors cursor-pointer flex items-center gap-1 group"
              type="button"
            >
              <span>Back to Top</span>
              <span className="text-[9px] transform group-hover:-translate-y-0.5 transition-transform duration-300">↑</span>
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
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#7D123D] font-bold">PARTNER LOGIN</span>
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
