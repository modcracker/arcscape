'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink, 
  Globe, 
  Trees, 
  Plane, 
  Compass, 
  Layers,
  Award,
  Tag,
  Search,
  ChevronRight,
  ChevronDown,
  TrendingUp,
  Clock,
  HelpCircle,
  Mail,
  Check,
  Copy,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import { brandingDomains } from './domains';

export default function LandingPage() {
  const godaddyUrl = 'https://www.godaddy.com/domainsearch/find?domainToCheck=arcscape.com';
  
  // State for filtering and searching the associated premium domains
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  // Footer Interactive Math Desk Challenge state
  const [fInitiated, setFInitiated] = useState(false);
  const [fNum1, setFNum1] = useState(0);
  const [fNum2, setFNum2] = useState(0);
  const [fAnswer, setFAnswer] = useState('');
  const [fStatus, setFStatus] = useState<string | null>(null);
  const [fRevealed, setFRevealed] = useState(false);
  const [fCopied, setFCopied] = useState(false);

  const resetFooterChallenge = () => {
    setFNum1(Math.floor(Math.random() * 8) + 3); // 3 to 10
    setFNum2(Math.floor(Math.random() * 7) + 2); // 2 to 8
    setFAnswer('');
    setFStatus(null);
  };

  // Initialize equations safely on client mount
  React.useEffect(() => {
    const timer = setTimeout(() => {
      resetFooterChallenge();
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleFooterVerify = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(fAnswer.trim(), 10);
    if (isNaN(parsed)) {
      setFStatus('Please enter a valid number');
      return;
    }
    if (parsed === fNum1 + fNum2) {
      setFRevealed(true);
      setFStatus(null);
    } else {
      setFStatus('Incorrect value! Try again.');
    }
  };

  const handleFooterCopy = () => {
    navigator.clipboard.writeText('info@arcscape.com');
    setFCopied(true);
    setTimeout(() => setFCopied(false), 2000);
  };

  // Dynamic grouping of premium industries
  const industries = ['All', 'Spatial Tech & CAD', 'Landscape & Coastal Design', 'Eco-Cabins & Sustainable Cities'];

  // Filter premium domains datasets
  const filteredDomains = brandingDomains.filter(domain => {
    const matchesSearch = domain.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          domain.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          domain.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (selectedIndustry === 'All') return matchesSearch;
    if (selectedIndustry === 'Spatial Tech & CAD') {
      return matchesSearch && (domain.industry.includes('Spatial') || domain.industry.includes('Parametric') || domain.industry.includes('CAD'));
    }
    if (selectedIndustry === 'Landscape & Coastal Design') {
      return matchesSearch && (domain.industry.includes('Landscape') || domain.industry.includes('Coastal') || domain.industry.includes('Waterfront'));
    }
    if (selectedIndustry === 'Eco-Cabins & Sustainable Cities') {
      return matchesSearch && (domain.industry.includes('Eco') || domain.industry.includes('Cities') || domain.industry.includes('Urban') || domain.industry.includes('Cabins'));
    }
    return matchesSearch;
  });

  return (
    // THE EDITORIAL OUT_BORDER FRAME - Classic premium crimson frame
    <div className="relative min-h-screen flex flex-col bg-[#FFF5F8]">
      
      {/* RETRO GRID BACKGROUND - Precise micro-grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9e8ef_1px,transparent_1px),linear-gradient(to_bottom,#f9e8ef_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none opacity-55 z-0" />

      {/* GLOWING GRADIENT LIGHT BLOBS FOR MASSIVE COLOR RICHNESS SITEWIDE */}
      <div className="absolute top-[3%] left-[-10%] w-[45rem] h-[45rem] rounded-full bg-gradient-to-tr from-[#FF3E74]/15 via-[#FF85A7]/8 to-[#7D123D]/3 blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[35%] right-[-15%] w-[50rem] h-[50rem] rounded-full bg-gradient-to-br from-[#FF3E74]/12 via-[#FF85A7]/6 to-[#F5C2D9]/3 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-[#FF85A7]/12 via-[#7D123D]/5 to-[#FFF0F5]/2 blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[45rem] h-[45rem] rounded-full bg-gradient-to-br from-[#7D123D]/14 via-[#FF3E74]/10 to-[#FF85A7]/3 blur-3xl pointer-events-none z-0" />

      {/* EXQUISITE STICKY/RELATIVE NAVIGATION BAR */}
      <nav id="navbar" className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#FFFDFE]/85 border-b border-[#F7E1EB]/60 px-4 py-3.5 transition-all duration-300 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          <div className="w-full md:w-auto flex items-center justify-between gap-2">
            {/* BRAND/LOGO AREA */}
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                strokeWidth="3" 
                strokeLinecap="round" 
                className="h-6 w-6 group-hover:scale-115 transition-transform duration-300 shrink-0 select-none"
              >
                {/* Outer high-contrast arc base */}
                <path d="M4 20V11C4 6.58 7.58 3 12 3C16.42 3 20 6.58 20 11V20" stroke="#F5C2D9" />
                {/* Secondary vibrant core arc */}
                <path d="M7 20V11C7 8.24 9.24 6 12 6C14.76 6 17 8.24 17 11V20" stroke="#FF3E74" />
                {/* Inner precise brand accent arch */}
                <path d="M10 20V11C10 9.9 10.9 9 12 9C13.1 9 14 9.9 14 11V20" stroke="#7D123D" />
              </svg>
              <span className="font-serif text-xl font-black text-[#7D123D] tracking-tight lowercase">
                arcscape<span className="text-[#FF3E74]">.</span>com
              </span>
            </Link>

            {/* LIVE INDICATOR */}
            <div className="flex items-center gap-1.5 bg-[#FAF4F6] border border-[#EBE1E4] px-3 py-1 rounded-full">
              <span className="h-2 w-2 rounded-full bg-[#FF3E74] inline-block animate-pulse shrink-0" />
              <span className="font-mono text-xs text-[#7D123D] font-semibold uppercase tracking-wider">Aged Verified</span>
            </div>
          </div>

          {/* DESKTOP NAV ITEMS */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-1.5 p-1 bg-[#FFF5F8]/40 border border-[#FAF4F6] rounded-full">
              {/* MEGA MENU 1: ASSET INFORMATION */}
              <div className="relative group">
                <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#7D123D] hover:text-[#FF3E74] hover:bg-white transition-all duration-300 cursor-pointer">
                  <span>Asset Details</span>
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 text-[#FF3E74]" />
                </button>
                
                <div className="absolute left-0 mt-2 w-72 rounded-2xl bg-white border border-[#EBE1E4] shadow-xl p-3.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="space-y-2">
                    <span className="block font-mono text-xs uppercase tracking-wider text-[#FF85A7] font-bold border-b border-[#EBE1E4] pb-1.5">Value Propositions</span>
                    
                    <a href="#hero" className="block p-2 rounded-xl hover:bg-[#FAF4F6] transition-all group/item">
                      <span className="block text-xs font-bold text-[#7D123D] group-hover/item:text-[#FF3E74] transition-colors">Flagship Overview</span>
                      <span className="block text-xs text-[#2C1820]/75 leading-normal font-sans mt-0.5">Registered first in 2003, high-recall asset representing structure & spatial luxury.</span>
                    </a>

                    <a href="#appraisal" className="block p-2 rounded-xl hover:bg-[#FAF4F6] transition-all group/item">
                      <span className="block text-xs font-bold text-[#7D123D] group-hover/item:text-[#FF3E74] transition-colors">Appraisal Report</span>
                      <span className="block text-xs text-[#2C1820]/75 leading-normal font-sans mt-0.5">EstiBot benchmark, comparative domain analytics, and score sheets.</span>
                    </a>

                    <a href="#registry" className="block p-2 rounded-xl hover:bg-[#FAF4F6] transition-all group/item">
                      <span className="block text-xs font-bold text-[#7D123D] group-hover/item:text-[#FF3E74] transition-colors">Complementary Assets</span>
                      <span className="block text-xs text-[#2C1820]/75 leading-normal font-sans mt-0.5">Explore matching high-value premium assets available in our domain pool.</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* MEGA MENU 2: APPLICATIONS */}
              <div className="relative group">
                <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#7D123D] hover:text-[#FF3E74] hover:bg-white transition-all duration-300 cursor-pointer">
                  <span>Applications</span>
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 text-[#FF3E74]" />
                </button>
                
                <div className="absolute left-0 mt-2 w-72 rounded-2xl bg-white border border-[#EBE1E4] shadow-xl p-3.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="space-y-2">
                    <span className="block font-mono text-xs uppercase tracking-wider text-[#FF85A7] font-bold border-b border-[#EBE1E4] pb-1.5">Mockups & Use Cases</span>
                    
                    <a href="#usecases" className="block p-2 rounded-xl hover:bg-[#FAF4F6] transition-all group/item">
                      <span className="block text-xs font-bold text-[#7D123D] group-hover/item:text-[#FF3E74] transition-colors">Brand Concepts</span>
                      <span className="block text-xs text-[#2C1820]/75 leading-normal font-sans mt-0.5">Interactive spatial architecture simulations and conceptual design systems.</span>
                    </a>

                    <a href="#verticals" className="block p-2 rounded-xl hover:bg-[#FAF4F6] transition-all group/item">
                      <span className="block text-xs font-bold text-[#7D123D] group-hover/item:text-[#FF3E74] transition-colors">Industry Verticals</span>
                      <span className="block text-xs text-[#2C1820]/75 leading-normal font-sans mt-0.5">Case scenarios mapped directly to architectural designs, retreat cabins, & VR.</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* MEGA MENU 3: ACQUISITION */}
              <div className="relative group">
                <button className="flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-[#7D123D] hover:text-[#FF3E74] hover:bg-white transition-all duration-300 cursor-pointer">
                  <span>Acquisition</span>
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 text-[#FF3E74]" />
                </button>
                
                <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white border border-[#EBE1E4] shadow-xl p-3.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100 translate-y-2 group-hover:translate-y-0 z-50">
                  <div className="space-y-2">
                    <span className="block font-mono text-xs uppercase tracking-wider text-[#FF85A7] font-bold border-b border-[#EBE1E4] pb-1.5">Purchase Escrow Info</span>
                    
                    <a href="#escrow" className="block p-2 rounded-xl hover:bg-[#FAF4F6] transition-all group/item">
                      <span className="block text-xs font-bold text-[#7D123D] group-hover/item:text-[#FF3E74] transition-colors">Secure Escrow Model</span>
                      <span className="block text-xs text-[#2C1820]/75 leading-normal font-sans mt-0.5">Automated handover protocol completed reliably in under 24 hours.</span>
                    </a>

                    <a href={godaddyUrl} target="_blank" rel="noreferrer" className="block p-2 rounded-xl hover:bg-[#FAF4F6] transition-all group/item">
                      <span className="block text-xs font-bold text-[#7D123D] group-hover/item:text-[#FF3E74] transition-colors inline-flex items-center gap-1">
                        <span>GoDaddy Direct Buyout</span>
                        <ExternalLink className="h-3.5 w-3.5 inline text-[#FF3E74]" />
                      </span>
                      <span className="block text-xs text-[#2C1820]/75 leading-normal font-sans mt-0.5">Instant buyout options handled seamlessly by the world&apos;s leading registrar.</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* DIRECT ACCESS INTEGRATION */}
            <a 
              href={godaddyUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-[#FF3E74] hover:bg-[#7D123D] text-white text-[10.5px] font-mono font-black uppercase tracking-wider rounded-full shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Buy on GoDaddy</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* MOBILE RESPONSIVE SCROLL ROW */}
          <div className="flex md:hidden items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none w-full max-w-full">
            <a href="#hero" className="shrink-0 px-2.5 py-1 bg-[#FFF0F5] border border-[#F5C2D9] rounded-full text-[9px] font-mono tracking-wider font-extrabold text-[#7D123D] uppercase">Flagship</a>
            <a href="#usecases" className="shrink-0 px-2.5 py-1 bg-[#FFF0F5] border border-[#F5C2D9] rounded-full text-[9px] font-mono tracking-wider font-extrabold text-[#7D123D] uppercase">Mockups</a>
            <a href="#appraisal" className="shrink-0 px-2.5 py-1 bg-[#FFF0F5] border border-[#F5C2D9] rounded-full text-[9px] font-mono tracking-wider font-extrabold text-[#7D123D] uppercase">Appraisal</a>
            <a href="#verticals" className="shrink-0 px-2.5 py-1 bg-[#FFF0F5] border border-[#F5C2D9] rounded-full text-[9px] font-mono tracking-wider font-extrabold text-[#7D123D] uppercase">Verticals</a>
            <a href="#escrow" className="shrink-0 px-2.5 py-1 bg-[#FFF0F5] border border-[#F5C2D9] rounded-full text-[9px] font-mono tracking-wider font-extrabold text-[#7D123D] uppercase">Escrow</a>
            <a href="#registry" className="shrink-0 px-2.5 py-1 bg-[#FFF0F5] border border-[#F5C2D9] rounded-full text-[9px] font-mono tracking-wider font-extrabold text-[#7D123D] uppercase">Concepts</a>
            <a 
              href={godaddyUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="shrink-0 px-3 py-1 bg-[#FF3E74] text-white rounded-full text-[9px] font-mono tracking-wider font-extrabold uppercase flex items-center gap-1 shadow-sm"
            >
              <span>GoDaddy Buyout</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

        </div>
      </nav>

      {/* CINEMATIC ARTISTIC HERO SECTION WITH FULL BANNER COVER BACKGROUND */}
      <main id="hero" className="relative z-10 w-full min-h-[600px] lg:min-h-[680px] border-b border-[#F5C2D9]/40 py-16 md:py-24 scroll-mt-24 overflow-hidden flex items-center">
        
        {/* Full Image Background of the Train Journey (Picsum arcscape_hero seed) */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://picsum.photos/seed/arcscape_hero/1920/1080" 
            alt="Arcscape cinematic architectural perspective" 
            fill
            priority
            sizes="100vw"
            className="object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Elegant Dark Vignette & Rose/Wine Gradient Overlay for Pristine Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#211016]/95 via-[#2C1820]/85 to-[#7D123D]/30" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
            {/* LEFT SIDE: PRESTIGIOUS LOGO, KEY VALUES AND COPY */}
            <div className="flex-1 space-y-8 text-center lg:text-left">
              
              <div className="space-y-6">
                
                {/* Aged .com Authority Ribbon */}
                <div className="inline-flex bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full items-center gap-2 shadow-inner">
                  <Award className="h-4.5 w-4.5 text-[#FF3E74]" />
                  <span className="font-mono text-[10.5px] tracking-wider uppercase font-extrabold text-[#FFC0D3]">
                    Aged .com authority since 2003
                  </span>
                </div>

                {/* Elegant Brand logotype */}
                <div className="space-y-4">
                  <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight text-white leading-none lowercase">
                    arc<span className="text-[#FF3E74]">scape</span><span className="text-white/40 font-sans text-3xl font-light align-baseline">.com</span>
                  </h1>

                  <p className="font-serif italic text-xl sm:text-3xl text-[#FF85A7] tracking-tight leading-relaxed max-w-xl mx-auto lg:mx-0">
                    &ldquo;Where architecture, space, and perspective converge.&rdquo;
                  </p>

                  <p className="text-white/80 text-base sm:text-lg leading-relaxed font-sans max-w-xl font-light mx-auto lg:mx-0">
                    A peerless, venerable .com domain identity tailored for world-class architectural design bureaus, sustainable urban development leaders, or premium spatial computing platforms.
                  </p>
                </div>

              </div>

              {/* THREE CORE BRAND VALUES FOR CLEANLINESS AND UTILITY */}
              <div className="space-y-4 max-w-xl mx-auto lg:mx-0 pt-2 border-t border-white/10">
                <div className="flex items-start gap-3.5 text-left">
                  <div className="h-5.5 w-5.5 bg-[#FF3E74] text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow">
                    <span className="text-[10px] font-black">✓</span>
                  </div>
                  <p className="text-sm font-sans text-white/90">
                    <strong className="font-semibold text-white">Elite .com Authority:</strong> Instantly signals standard-setting market leadership and worldwide corporate trust.
                  </p>
                </div>
                <div className="flex items-start gap-3.5 text-left">
                  <div className="h-5.5 w-5.5 bg-[#FF3E74] text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow">
                    <span className="text-[10px] font-black">✓</span>
                  </div>
                  <p className="text-sm font-sans text-white/90">
                    <strong className="font-semibold text-white">Breathtaking Brandability:</strong> Elegant dual-concept blend fusing structural <span className="italic text-[#FF85A7]">Arc</span> with panoramic <span className="italic text-[#FF85A7]">Scape</span>.
                  </p>
                </div>
                <div className="flex items-start gap-3.5 text-left">
                  <div className="h-5.5 w-5.5 bg-[#FF3E74] text-white rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow">
                    <span className="text-[10px] font-black">✓</span>
                  </div>
                  <p className="text-sm font-sans text-white/90">
                    <strong className="font-semibold text-white">Multi-Segment Mastery:</strong> Perfectly adapts to design studios, smart city software, high-end cabin escapes, or VR apps.
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT SIDE: HIGH-CONTRAST SECURE BUYOUT BOARD */}
            <div className="w-full lg:w-[420px] shrink-0">
              <div className="bg-[#1C0D12]/75 backdrop-blur-xl border border-white/10 rounded-[36px] p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden flex flex-col justify-between">
                
                {/* Decorative gold/pink light flare back of panel */}
                <div className="absolute top-0 right-0 h-32 w-32 bg-[#FF3E74] opacity-[0.06] rounded-bl-full pointer-events-none" />

                <div className="space-y-2">
                  <div className="inline-flex bg-[#FF3E74]/15 border border-[#FF3E74]/30 text-[#FF85A7] font-mono text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md">
                    Verified Premium Sale
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Acquire arcscape.com</h2>
                  <p className="text-xs text-white/70 font-sans leading-relaxed">
                    Own this legacy brand instantly. Safe checkout and automated transfer brokerages are executed immediately by <strong className="font-semibold text-white">GoDaddy Registrar</strong>.
                  </p>
                </div>

                {/* Pricing panel with pulsing secure dot */}
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl relative overflow-hidden">
                  <div className="absolute top-2.5 right-3 flex items-center gap-1.5 opacity-80">
                    <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-ping" />
                    <span className="font-mono text-[7px] text-emerald-400 uppercase tracking-wider font-extrabold">READY FOR HANDOVER</span>
                  </div>
                  
                  <span className="font-mono text-[8.5px] tracking-widest uppercase text-[#FF85A7] block font-bold leading-none mb-2">SECURE CONTRACT BUYOUT VALUE</span>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-serif text-4xl sm:text-5xl font-black text-white tracking-tight">$30,000</span>
                    <span className="font-mono text-xs text-[#FF85A7] font-extrabold">USD</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1.5 text-[8.5px] text-white/45 font-mono">
                    <span>• No escrow fees</span>
                    <span>• Pre-verified with GoDaddy transfer protocol</span>
                  </div>
                </div>

                {/* Immediate CTA Box */}
                <div className="space-y-4">
                  <a 
                    id="main-purchase-anchor"
                    href={godaddyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-sans font-extrabold tracking-wider text-white uppercase rounded-2xl group bg-gradient-to-br from-[#FF1493] via-[#FF3E74] to-[#7D123D] transition-transform duration-300 hover:scale-[1.01]"
                  >
                    <span className="w-full relative px-6 py-4.5 bg-[#7D123D] rounded-[14px] group-hover:bg-opacity-0 transition-colors duration-300 flex items-center justify-center gap-2">
                      <span>Secure Checkout at GoDaddy</span>
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </a>

                  {/* Certified Escrow Trust Seal */}
                  <div className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-start gap-3">
                    <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div className="text-left">
                      <p className="text-[10px] font-mono font-bold tracking-wider text-emerald-300 uppercase leading-none">Safe Escrow Agreement</p>
                      <p className="text-[10px] text-white/60 font-sans mt-0.5 leading-relaxed">
                        Funds held securely by registrar escrow until domain transfer completes. 100% transfer success guarantee.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/15 pt-4 flex flex-col items-center justify-center gap-2">
                  <span className="text-[10.5px] text-white/60 font-sans leading-relaxed text-center">
                    Prefer structured bank-wire installments? Use our safe contact form down below.
                  </span>
                  
                  <div className="flex items-center gap-4 text-[9px] font-mono uppercase tracking-wider text-[#FF85A7] font-bold">
                    <a href="#registry" className="hover:text-white transition-colors">Complete Portfolio</a>
                    <span>•</span>
                    <a href="#appraisal" className="hover:text-white transition-colors">Valuation Metrics</a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>

      {/* SECTION A: USE CASES WITH GORGEOUS DESIGN IMAGES */}
      <section id="usecases" className="relative z-10 w-full bg-gradient-to-br from-[#FFFDFE] via-[#FFF9FA] to-[#FFF3F6] py-16 md:py-20 border-b border-[#F5C2D9]/40 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex bg-[#FFF0F5] border border-[#F5C2D9] px-3.5 py-1.5 rounded-full items-center gap-1.5">
              <Sparkles className="h-4 w-4 text-[#FF3E74]" />
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#7D123D] font-black">
                Visual Brand Mockups & Concepts
              </span>
            </div>
            <h2 className="font-serif font-black text-[#7D123D] text-3xl sm:text-4xl">
              Brand Positioning Applications
            </h2>
            <p className="text-sm text-[#2C1820]/85 font-sans max-w-2xl font-light">
              See how <span className="font-semibold text-[#7D123D]">arcscape.com</span> positions your corporate identity at the absolute pinnacle of high-value industry segments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* USE CASE 1 */}
            <div className="bg-[#FFFDFE] border border-[#F5C2D9]/70 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative overflow-hidden h-48 w-full">
                  <Image 
                    src="https://picsum.photos/seed/spatial-design/800/450" 
                    alt="Spatial simulation & VR architectural designs" 
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#7D123D] text-white text-xs font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded z-10">
                    VR & CAD Studio
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-serif font-extrabold text-[#7D123D] text-lg">Next-Gen Spatial Software</h3>
                  <p className="text-xs text-[#2C1820]/85 leading-relaxed font-sans font-light">
                    Establish unmatched domain authority for web-based CAD applications, real-time procedural geometry plugins, or architectural walkthrough render engines.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-[#EBE1E4]/40 mt-2 bg-[#FFFDFE]">
                <span className="font-mono text-xs text-[#FF3E74] uppercase block font-semibold">Target Segment</span>
                <span className="text-xs font-sans text-gray-500">Spatial Interactive Computing</span>
              </div>
            </div>

            {/* USE CASE 2 */}
            <div className="bg-[#FFFDFE] border border-[#F5C2D9]/70 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative overflow-hidden h-48 w-full">
                  <Image 
                    src="https://picsum.photos/seed/modern-architecture/800/450" 
                    alt="Luxury estate landscaping and structural gardens" 
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#7D123D] text-white text-xs font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded z-10">
                    Bespoke Landscape Design
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-serif font-extrabold text-[#7D123D] text-lg">High-End Landscaping Architecture</h3>
                  <p className="text-xs text-[#2C1820]/85 leading-relaxed font-sans font-light">
                    Position your boutique design studio or design-build collective with a name that is instantly memorable and embodies high-contrast luxury styling.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-[#EBE1E4]/40 mt-2 bg-[#FFFDFE]">
                <span className="font-mono text-xs text-[#FF3E74] uppercase block font-semibold">Target Segment</span>
                <span className="text-xs font-sans text-gray-500">Bespoke Design Practitioners</span>
              </div>
            </div>

            {/* USE CASE 3 */}
            <div className="bg-[#FFFDFE] border border-[#F5C2D9]/70 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="relative overflow-hidden h-48 w-full">
                  <Image 
                    src="https://picsum.photos/seed/forest-cabin/800/450" 
                    alt="Luxury geometric cabin retreat in prime nature" 
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#7D123D] text-white text-xs font-mono tracking-wider font-semibold uppercase px-2.5 py-1 rounded z-10">
                    Eco Glamping & Resorts
                  </div>
                </div>
                <div className="p-5 space-y-2">
                  <h3 className="font-serif font-extrabold text-[#7D123D] text-lg">Designer Organic Cabins</h3>
                  <p className="text-xs text-[#2C1820]/85 leading-relaxed font-sans font-light">
                    Build a national network of off-grid architectural cabin rentals, organic nature glamping domes, or biophilic boutique travel portals.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 border-t border-[#EBE1E4]/40 mt-2 bg-[#FFFDFE]">
                <span className="font-mono text-xs text-[#FF3E74] uppercase block font-semibold">Target Segment</span>
                <span className="text-xs font-sans text-gray-500">Premium Sustainable Escapes</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION B: BRAND APPRAISAL & VALUATIVE METRICS */}
      <section id="appraisal" className="relative z-10 w-full bg-gradient-to-tr from-[#FFEAF1] via-[#FFF5F8] to-[#FFE5EE] py-16 md:py-20 border-b border-[#F5C2D9]/40 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-[#FFFDFE]/80 backdrop-blur-sm border border-[#F5C2D9] rounded-3xl p-6 sm:p-8 shadow-md space-y-8">
          
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-[#FAF4F6] border border-[#EBE1E4] px-4 py-1.5 rounded-full">
              <TrendingUp className="h-4 w-4 text-[#FF3E74]" />
              <span className="font-mono text-xs tracking-wider uppercase font-semibold text-[#7D123D]">
                Premium Domain Appraisal
              </span>
            </div>
            <h2 className="font-serif font-black text-[#7D123D] text-2xl sm:text-3xl uppercase">
              valuation metrics appraisal
            </h2>
            <p className="text-xs text-[#2C1820]/80 font-sans max-w-2xl font-light">
              Objective analytics compiled under standard premium domain assessment guidelines. Why arcscape.com commands supreme value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="border-l-2 border-[#FF3E74] pl-4 space-y-1">
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#FF85A7] font-bold block">Aged Trust</span>
              <span className="text-lg font-serif font-black text-[#7D123D]">23 Years Aged</span>
              <p className="text-[11px] text-gray-500 font-sans leading-relaxed">
                Registered in 2003. Older domains carry established network search engine trust scores and legacy authority rankings.
              </p>
            </div>

            <div className="border-l-2 border-[#FF3E74] pl-4 space-y-1">
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#FF85A7] font-bold block">Character Count</span>
              <span className="text-lg font-serif font-black text-[#7D123D]">8 Letters</span>
              <p className="text-[11px] text-gray-500 font-sans leading-relaxed">
                Ultra-short length. Premium double-syllable noun combination allows frictionless global brand recall.
              </p>
            </div>

            <div className="border-l-2 border-[#FF3E74] pl-4 space-y-1">
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#FF85A7] font-bold block">Pronunciation</span>
              <span className="text-lg font-serif font-black text-[#7D123D]">High Phonetic Flow</span>
              <p className="text-[11px] text-gray-500 font-sans leading-relaxed">
                Passes the voice-search-relevance check. Clear phonetic elements with zero awkward spelling variables.
              </p>
            </div>

            <div className="border-l-2 border-[#FF3E74] pl-4 space-y-1">
              <span className="font-mono text-[9px] tracking-widest uppercase text-[#FF85A7] font-bold block">Extension Power</span>
              <span className="text-lg font-serif font-black text-[#7D123D]">Top Tier .com</span>
              <p className="text-[11px] text-gray-500 font-sans leading-relaxed">
                The undisputed standard for corporate finance, trust, organic ranking, and direct navigation traffic.
              </p>
            </div>

          </div>
        </div>
        </div>
      </section>

      {/* SECTION C: DIRECT VISUAL INDUSTRY VERTICALS */}
      <section id="verticals" className="relative z-10 w-full bg-gradient-to-tl from-[#FFFDFE] via-[#FFFAF0] to-[#FFF9F2] py-16 md:py-20 border-b border-[#F5C2D9]/40 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          <div className="text-center md:text-left space-y-1.5">
            <span className="font-mono text-xs uppercase tracking-wider text-[#FF3E74] font-bold block">Core Domain Verticals</span>
            <h2 className="font-serif font-black text-[#7D123D] text-2xl">Tailored Business Alignments</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-[#FFFDFE] border border-[#F5C2D9] rounded-2xl p-5 space-y-2">
              <div className="h-9 w-9 bg-[#FFF0F5] border border-[#F5C2D9] text-[#FF3E74] rounded-xl flex items-center justify-center">
                <Trees className="h-5 w-5" />
              </div>
              <h3 className="font-serif font-bold text-[#7D123D] text-lg">Architectural Scaping</h3>
              <p className="text-xs text-[#2C1820]/80 leading-relaxed font-sans">
                The premier moniker for high-end residential landscaping designers, horticultural firms, and modern spatial designs.
              </p>
            </div>

            <div className="bg-[#FFFDFE] border border-[#F5C2D9] rounded-2xl p-5 space-y-2">
              <div className="h-9 w-9 bg-[#FFF0F5] border border-[#F5C2D9] text-[#FF3E74] rounded-xl flex items-center justify-center">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="font-serif font-bold text-[#7D123D] text-lg">Spatial Technologies</h3>
              <p className="text-xs text-[#2C1820]/80 leading-relaxed font-sans">
                Superb alignment with immersive web engines, AR/VR studios designing architectural environments, and real-time simulations.
              </p>
            </div>

            <div className="bg-[#FFFDFE] border border-[#F5C2D9] rounded-2xl p-5 space-y-2">
              <div className="h-9 w-9 bg-[#FFF0F5] border border-[#F5C2D9] text-[#FF3E74] rounded-xl flex items-center justify-center">
                <Plane className="h-5 w-5" />
              </div>
              <h3 className="font-serif font-bold text-[#7D123D] text-lg">Luxury Hideaways</h3>
              <p className="text-xs text-[#2C1820]/80 leading-relaxed font-sans">
                An inspired brand identity for minimalist nature cabins, designer escape retreats, eco glamping networks, or retreat resorts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: SECURE ESCROW PROTOCOL TIMELINE */}
      <section id="escrow" className="relative z-10 w-full bg-gradient-to-br from-[#FFF5F8] via-[#FFEBF2] to-[#FFF0F5] py-16 md:py-20 border-b border-[#F5C2D9]/40 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex items-center gap-1.5 bg-[#FAF4F6] border border-[#EBE1E4] px-4 py-1.5 rounded-full">
              <ShieldCheck className="h-4 w-4 text-[#FF3E74]" />
              <span className="font-mono text-xs tracking-wider uppercase font-semibold text-[#7D123D]">
                100% Guaranteed Transaction
              </span>
            </div>
            <h2 className="font-serif font-black text-[#7D123D] text-3xl lowercase">
              custody transfer timeline
            </h2>
            <p className="text-xs text-[#2C1820]/80 font-sans max-w-2xl font-light">
              We leverage GoDaddy registrar automatic escrow verification systems to broker safe, risk-free domain acquisitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* STEP 1 */}
            <div className="bg-white border border-[#EBE1E4] p-6 rounded-2xl relative shadow-sm">
              <span className="absolute -top-3 -right-3 h-8 w-8 bg-[#7D123D] text-white border-2 border-white flex items-center justify-center rounded-full font-mono text-xs font-bold shadow-sm">
                01
              </span>
              <div className="space-y-2 mt-2">
                <span className="font-mono text-xs tracking-wider text-[#FF85A7] uppercase block font-semibold">Initiation</span>
                <h4 className="font-serif font-bold text-[#7D123D] text-base">Select Secure Buyout</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                  Clicking purchase routes you directly to the verified GoDaddy escrow buyout page for arcscape.com.
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="bg-white border border-[#EBE1E4] p-6 rounded-2xl relative shadow-sm">
              <span className="absolute -top-3 -right-3 h-8 w-8 bg-[#7D123D] text-white border-2 border-white flex items-center justify-center rounded-full font-mono text-xs font-bold shadow-sm">
                02
              </span>
              <div className="space-y-2 mt-2">
                <span className="font-mono text-xs tracking-wider text-[#FF85A7] uppercase block font-semibold">Escrow Deposit</span>
                <h4 className="font-serif font-bold text-[#7D123D] text-base">Funding Verification</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                  GoDaddy secures your purchase amount in an independent, neutral escrow holding vault for complete safety.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="bg-white border border-[#EBE1E4] p-6 rounded-2xl relative shadow-sm">
              <span className="absolute -top-3 -right-3 h-8 w-8 bg-[#7D123D] text-white border-2 border-white flex items-center justify-center rounded-full font-mono text-xs font-bold shadow-sm">
                03
              </span>
              <div className="space-y-2 mt-2">
                <span className="font-mono text-xs tracking-wider text-[#FF85A7] uppercase block font-semibold">Ownership Swap</span>
                <h4 className="font-serif font-bold text-[#7D123D] text-base">Instant Custody Shift</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                  The registry records are reassigned. The domain name is pushed directly to your account immediately.
                </p>
              </div>
            </div>

            {/* STEP 4 */}
            <div className="bg-white border border-[#EBE1E4] p-6 rounded-2xl relative shadow-sm">
              <span className="absolute -top-3 -right-3 h-8 w-8 bg-[#7D123D] text-white border-2 border-white flex items-center justify-center rounded-full font-mono text-xs font-bold shadow-sm">
                04
              </span>
              <div className="space-y-2 mt-2">
                <span className="font-mono text-xs tracking-wider text-[#FF85A7] uppercase block font-semibold">Disbursal</span>
                <h4 className="font-serif font-bold text-[#7D123D] text-base">Release of Funds</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-light">
                  Only after you verify ownership is complete is the payment finalized. Total process duration represents under 24 hours.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PORTFOLIO SEARCH & DIRECTORY PLATFORM */}
      <section id="registry" className="relative z-10 w-full bg-gradient-to-b from-[#FFFDFE] via-[#FFFAF0] to-[#FFF5F8] py-16 md:py-20 border-b border-[#F5C2D9]/40 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          
          {/* HEADER NARRATIVE */}
          <div className="text-center md:text-left space-y-2">
            <div className="inline-flex bg-[#FAF4F6] border border-[#EBE1E4] px-4 py-1.5 rounded-full items-center gap-1.5 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-[#FF3E74]" />
              <span className="font-mono text-xs tracking-wider uppercase font-semibold text-[#7D123D]">
                Strategic Brand Activation Models
              </span>
            </div>
            <h2 className="font-serif font-black text-[#7D123D] text-3xl sm:text-4xl">
              Explore Arcscape Positioning Concepts
            </h2>
            <p className="text-sm text-[#2C1820]/80 font-sans max-w-2xl font-light">
              Discover how the premier name <span className="font-semibold text-[#7D123D]">arcscape.com</span> can be activated across high-value markets. Below are 6 pre-visualized brand positionings illustrating the ultimate potential and premium versatility of the domain.
            </p>
          </div>

          {/* RESEARCH FILTER ACTION CONTROL BOX */}
          <div className="bg-white border border-[#EBE1E4] rounded-2xl p-4 sm:p-6 shadow-sm space-y-4 flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 border-opacity-65">
            
            {/* TEXT SEARCH */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#FF85A7]" />
              <input 
                type="text"
                placeholder="Search brand keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#EBE1E4] rounded-xl pl-10 pr-4 py-2.5 text-xs font-sans text-[#2C1820] focus:outline-none focus:ring-1 focus:ring-[#FF3E74] focus:border-[#FF3E74] transition-all bg-opacity-70"
              />
            </div>

            {/* INDUSTRY FILTER PILLS */}
            <div className="flex flex-wrap gap-1.5 items-center">
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono tracking-wide uppercase transition-all duration-200 border cursor-pointer ${
                    selectedIndustry === ind 
                      ? 'bg-[#7D123D] border-[#7D123D] text-white font-semibold shadow-sm' 
                      : 'bg-white border-[#EBE1E4] text-[#7D123D] hover:bg-[#FAF4F6] hover:border-[#FF3E74]/40'
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>

          </div>

          {/* DYNAMIC RESULTS CARDS GRID */}
          {filteredDomains.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {filteredDomains.map((item, idx) => (
                <Link 
                  href={`/${item.slug}`}
                  key={item.slug}
                  className="group bg-white border border-[#EBE1E4] hover:border-[#FF3E74]/40 rounded-2xl p-5 block transition-all hover:shadow-lg hover:-translate-y-1 duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 h-12 w-12 bg-[#FF3E74] opacity-0 group-hover:opacity-[0.03] rounded-bl-full transition-opacity pointer-events-none" />

                  <div className="space-y-3 flex flex-col justify-between h-full">
                    <div className="space-y-1">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-serif font-black text-lg sm:text-lg text-[#7D123D] group-hover:text-[#FF3E74] transition-colors tracking-tight leading-snug">
                          {item.name}
                        </h3>
                        <span className="font-mono text-xs text-[#FF3E74] font-bold border border-[#EBE1E4] bg-[#FAF4F6] px-2 py-0.5 rounded uppercase shrink-0 tracking-wider">
                          Proposal
                        </span>
                      </div>
                      <span className="font-mono text-xs text-[#FF85A7] uppercase tracking-wider block font-semibold">
                        {item.industry}
                      </span>
                      <p className="text-xs text-[#2C1820]/80 leading-relaxed font-sans font-light line-clamp-2">
                        {item.tagline}
                      </p>
                    </div>

                    <div className="flex justify-between items-end border-t border-[#EBE1E4]/40 pt-3 mt-1.5 text-xs font-mono">
                      <div className="flex flex-col">
                        <span className="text-xs uppercase tracking-wider text-[#FF85A7] font-semibold">Concept route</span>
                        <span className="text-xs font-sans font-bold text-[#7D123D]">{item.domain}</span>
                      </div>
                      <div className="text-[#FF3E74] flex items-center gap-0.5 group-hover:underline font-semibold text-xs uppercase shrink-0 pb-0.5">
                        <span>Explore Pitch</span>
                        <ChevronRight className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-[#FFFDFE] border border-dashed border-[#F5C2D9] rounded-2xl p-12 text-center text-sm font-sans text-gray-500">
              No matching brand concepts found. Try a different keyword query!
            </div>
          )}

        </div>
      </section>

      {/* PROFESSIONAL MULTI-COLUMN CLIENT-PERSISTENT FOOTER WITH COMPREHENSIVE DEAL DESK */}
      <footer className="relative z-10 w-full mt-24 bg-[#FFFDFE] border-t border-[#F5C2D9]/40 pt-16 pb-12 overflow-hidden animate-fadeIn">
        
        {/* Colorful accent line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF3E74] via-[#FF85A7] to-[#7D123D]" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* TOP MULTI-COLUMN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10 border-b border-[#F7E1EB] mb-8 relative z-10">
          
          {/* BRAND COLUMN & DEAL INQUIRY DESK (Takes 6 cols of 12) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <Link href="/" className="flex items-center gap-2 group cursor-pointer justify-start">
                <svg 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  className="h-6.5 w-6.5 group-hover:scale-115 transition-transform duration-300 shrink-0 select-none"
                >
                  {/* Outer high-contrast arc base */}
                  <path d="M4 20V11C4 6.58 7.58 3 12 3C16.42 3 20 6.58 20 11V20" stroke="#F5C2D9" />
                  {/* Secondary vibrant core arc */}
                  <path d="M7 20V11C7 8.24 9.24 6 12 6C14.76 6 17 8.24 17 11V20" stroke="#FF3E74" />
                  {/* Inner precise brand accent arch */}
                  <path d="M10 20V11C10 9.9 10.9 9 12 9C13.1 9 14 9.9 14 11V20" stroke="#7D123D" />
                </svg>
                <span className="font-serif text-2xl font-black text-[#7D123D] tracking-tight lowercase">
                  arcscape<span className="text-[#FF3E74]">.</span>com
                </span>
              </Link>
              <p className="text-xs text-[#2C1820]/85 font-sans leading-relaxed">
                An aged high-recall Tier-1 global digital asset representing structure, landscape, eco retreats, and spatial immersive innovations. Registered first in 2003. Secure escrow protection guarantees risk-free asset handling.
              </p>
            </div>

            {/* SPAM-PROOF DEAL DESK COMPONENT */}
            <div className="bg-white border border-[#EBE1E4] p-6 rounded-2xl space-y-4 shadow-sm relative overflow-hidden transition-all duration-300">
              <div className="absolute top-0 right-0 h-16 w-16 bg-[#FF3E74]/5 rounded-bl-full pointer-events-none" />
              
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5">
                  <Mail className="h-4 w-4 text-[#FF3E74]" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[#7D123D] font-bold">Direct Deal Desk</span>
                </div>
                <h4 className="font-serif font-extrabold text-[#7D123D] text-sm">
                  Want to Negotiate Directly?
                </h4>
                <p className="text-xs text-[#2C1820]/80 font-sans leading-relaxed">
                  Avoid external registry margin fees. Click below to verify your session and obtain our validated direct contact channel.
                </p>
              </div>

              {!fInitiated ? (
                <button
                  type="button"
                  onClick={() => setFInitiated(true)}
                  className="w-full py-2.5 bg-white hover:bg-[#FAF4F6] border-2 border-[#7D123D]/35 hover:border-[#FF3E74] text-[#7D123D] hover:text-[#FF3E74] font-mono text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="h-4 w-4" />
                  <span>Negotiate Direct Purchase</span>
                </button>
              ) : !fRevealed ? (
                <form onSubmit={handleFooterVerify} className="space-y-3 animate-fadeIn">
                  <div className="flex flex-col sm:flex-row items-stretch gap-2.5">
                    <div className="bg-white border border-[#EBE1E4] rounded-xl px-3 py-2 flex items-center justify-between gap-4">
                      <span className="font-mono text-xs text-[#7D123D] font-black select-none shrink-0">
                        {fNum1} + {fNum2} = ?
                      </span>
                      <input 
                        type="text"
                        placeholder="SUM"
                        value={fAnswer}
                        onChange={(e) => setFAnswer(e.target.value)}
                        className="w-16 bg-transparent border-none text-right font-mono text-sm text-[#7D123D] placeholder-gray-300 focus:outline-none focus:ring-0 p-0"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      className="bg-gradient-to-r from-[#FF3E74] to-[#7D123D] hover:from-[#FF1493] hover:to-[#FF3E74] text-white font-mono text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
                    >
                      <span>Unlock Inbox</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>

                  {fStatus && (
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#FF3E74] font-bold">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span>{fStatus}</span>
                    </div>
                  )}
                </form>
              ) : (
                <div className="bg-white border text-left border-[#FF3E74]/35 p-3 rounded-xl flex items-center justify-between gap-4 animate-fadeIn">
                  <div className="flex items-center gap-2.5">
                    <div className="h-8 w-8 rounded-full bg-[#FAF4F6] flex items-center justify-center text-[#FF3E74] shrink-0">
                      <Check className="h-4.5 w-4.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-mono uppercase tracking-wider text-[#FF85A7] font-semibold">Verified Inbox</span>
                      <a 
                        href="mailto:info@arcscape.com?subject=Inquiry regarding arcscape.com domain name" 
                        className="text-xs font-mono font-bold text-[#7D123D] hover:text-[#FF3E74] transition-colors underline decoration-dotted"
                      >
                        info@arcscape.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button 
                      type="button"
                      onClick={handleFooterCopy}
                      className="p-2 rounded-lg bg-[#FAF4F6] text-[#7D123D] hover:bg-[#FF3E74] hover:text-white transition-all cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {fCopied ? (
                        <Check className="h-3.5 w-3.5" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                    <button 
                      type="button"
                      onClick={resetFooterChallenge}
                      className="p-2 rounded-lg bg-[#FAF4F6] text-[#2C1820]/40 hover:bg-gray-100 transition-all cursor-pointer"
                      title="Reset spam guard"
                    >
                      <RefreshCw className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* QUICK NAVIGATION (Takes 3 cols of 12) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs tracking-wider uppercase text-[#FF85A7] font-semibold block border-b border-[#EBE1E4] pb-1.5">
              Flagship Directory
            </span>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <a href="#hero" className="text-[#7D123D] hover:text-[#FF3E74] hover:pl-1 transition-all duration-200 font-bold inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-[#FF3E74] rounded-full" />
                  <span>Interactive Pitch</span>
                </a>
              </li>
              <li>
                <a href="#usecases" className="text-[#7D123D] hover:text-[#FF3E74] hover:pl-1 transition-all duration-200 font-bold inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-[#FF3E74] rounded-full" />
                  <span>Visual Concept Mockups</span>
                </a>
              </li>
              <li>
                <a href="#appraisal" className="text-[#7D123D] hover:text-[#FF3E74] hover:pl-1 transition-all duration-200 font-bold inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-[#FF3E74] rounded-full" />
                  <span>Appraisal Metrics Sheet</span>
                </a>
              </li>
              <li>
                <a href="#verticals" className="text-[#7D123D] hover:text-[#FF3E74] hover:pl-1 transition-all duration-200 font-bold inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-[#FF3E74] rounded-full" />
                  <span>Industry Verticals</span>
                </a>
              </li>
              <li>
                <a href="#escrow" className="text-[#7D123D] hover:text-[#FF3E74] hover:pl-1 transition-all duration-200 font-bold inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-[#FF3E74] rounded-full" />
                  <span>Escrow Transfer Protocol</span>
                </a>
              </li>
              <li>
                <a href="#registry" className="text-[#7D123D] hover:text-[#FF3E74] hover:pl-1 transition-all duration-200 font-semibold inline-flex items-center gap-1.5">
                  <span className="h-1 w-1 bg-[#FF3E74] rounded-full" />
                  <span>Domain Activation Registry</span>
                </a>
              </li>
            </ul>
          </div>

          {/* PARTNER REGISTRY CHANNELS & SEARCH SYSTEM LINKS (Takes 3 cols of 12) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs tracking-wider uppercase text-[#FF85A7] font-semibold block border-b border-[#EBE1E4] pb-1.5">
              Secure Portals
            </span>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <Link href="/other-assets" className="text-[#7D123D] hover:text-[#FF3E74] font-extrabold flex items-center gap-1.5 hover:pl-1 transition-all">
                  <span>Alternative Roster Assets</span>
                  <Layers className="h-3 w-3 text-[#FF3E74]" />
                </Link>
              </li>
              <li>
                <a href={godaddyUrl} target="_blank" rel="noreferrer" className="text-[#7D123D] hover:text-[#FF3E74] font-extrabold flex items-center gap-1 hover:pl-1 transition-all">
                  <span>GoDaddy Direct Buyout</span>
                  <ExternalLink className="h-3 w-3 inline" />
                </a>
              </li>
              <li>
                <Link href="/sitemap.xml" className="text-[#7D123D]/80 hover:text-[#FF3E74] font-mono text-xs flex items-center gap-1 hover:pl-1 transition-all">
                  <span>sitemap.xml</span>
                  <ExternalLink className="h-2.5 w-2.5 inline" />
                </Link>
              </li>
              <li>
                <Link href="/robots.txt" className="text-[#7D123D]/80 hover:text-[#FF3E74] font-mono text-xs flex items-center gap-1 hover:pl-1 transition-all">
                  <span>robots.txt</span>
                  <ExternalLink className="h-2.5 w-2.5 inline" />
                </Link>
              </li>
            </ul>

            <div className="bg-white border border-dashed border-[#EBE1E4] p-3 rounded-xl space-y-1">
              <span className="font-mono text-xs tracking-wider uppercase text-[#FF85A7] block font-semibold">Escrow Escort</span>
              <p className="text-xs text-[#2C1820]/75 font-sans leading-relaxed">
                We safely transfer domains worldwide in &lt;24 hrs via automated DNS pushing.
              </p>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-4 relative z-10 pt-2">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <span className="font-mono text-xs uppercase text-[#7D123D]/90 tracking-wide font-semibold">
              © 2026 ARCSCAPE.COM • BRAND HOLDINGS
            </span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span className="font-sans text-xs text-[#2C1820]/80">
              under premium escrow protection
            </span>
          </div>
          
          {/* DESIGN CREDENTIAL LINK */}
          <div className="text-xs text-[#7D123D] font-mono leading-relaxed font-bold uppercase tracking-wider">
            <span>design by </span>
            <a 
              href="https://feelize.com/start" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#FF3E74] hover:underline underline-offset-2 hover:text-[#7D123D] transition-all font-black cursor-pointer"
            >
              feelize ai
            </a>
          </div>
        </div>
        </div>
      </footer>
    </div>
  );
}
