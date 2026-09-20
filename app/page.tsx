'use client';

import React, { useState, useEffect, useRef } from 'react';
import DomainTabs from "./components/domain-tabs";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'motion/react';
import {
  ShieldAlert, Check, Copy, RefreshCw, ChevronRight, ArrowRight, ArrowLeft,
  CheckCircle2, Globe, Search, Mail, Send, Lock, X, ArrowUpRight, ExternalLink,
  Music2, Dna, Atom, Bot, Share2, Terminal, Printer, Moon, CalendarDays,
  Flame, Palette, Shapes, Vault, GitMerge, Network, MapPin
} from 'lucide-react';

/* ─── Scroll-reveal hook ──────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return { ref, isInView };
}

/* ─── ArcscapeCurvedLogo — UNCHANGED ─────────────────────────────── */
function ArcscapeCurvedLogo({ size = "normal" }: { size?: "normal" | "small" | "large" }) {
  let width = 180, height = 55, viewBox = "0 0 180 55";
  let pathD = "M 10 44 Q 90 22 170 44";
  let fontSize = "13px", tracking = "0.38em";
  if (size === "small") { width=135; height=42; viewBox="0 0 135 42"; pathD="M 8 33 Q 67.5 16 127 33"; fontSize="10.5px"; tracking="0.35em"; }
  else if (size === "large") { width=1200; height=300; viewBox="0 0 1200 300"; pathD="M 100 215 Q 600 115 1100 215"; fontSize="70px"; tracking="0.45em"; }
  const isAnimated = size === "large" || size === "normal";
  return (
    <motion.div animate={isAnimated ? { y:[0,-6,0] } : {}} transition={isAnimated ? { duration:6, ease:"easeInOut", repeat:Infinity } : {}} className="flex items-center justify-center w-full overflow-visible">
      <svg viewBox={viewBox} style={{ width:"100%", maxWidth:`${width}px`, height:"auto" }} className="select-none pointer-events-none overflow-visible">
        <defs>
          <linearGradient id={`goldGrad-${size}`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="#7B5C35"/><stop offset="15%" stopColor="#AD8E65"/>
            <stop offset="35%"  stopColor="#E2CAAA"/><stop offset="50%" stopColor="#FAF2E5"/>
            <stop offset="65%"  stopColor="#E2CAAA"/><stop offset="85%" stopColor="#AD8E65"/>
            <stop offset="100%" stopColor="#7B5C35"/>
          </linearGradient>
          <filter id={`luxShadow-${size}`} x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy={size==="large"?"10":"1.8"} stdDeviation={size==="large"?"12":"2.2"} floodColor="#000" floodOpacity={size==="large"?"0.5":"0.3"}/>
          </filter>
        </defs>
        <path id={`curve-${size}`} d={pathD} fill="none" stroke="transparent"/>
        <text style={{ fontFamily:"var(--font-serif),Playfair Display,serif", fontSize, letterSpacing:tracking, fill:"#000", fontWeight:600, filter:`url(#luxShadow-${size})`, opacity:size==="large"?0.5:0.3 }} dx="0" dy={size==="large"?"6":"1.2"}>
          <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">ARCSCAPE</textPath>
        </text>
        <text style={{ fontFamily:"var(--font-serif),Playfair Display,serif", fontSize, letterSpacing:tracking, fill:"#4E361D", fontWeight:600 }} dx="0" dy={size==="large"?"2.5":"0.6"}>
          <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">ARCSCAPE</textPath>
        </text>
        <text style={{ fontFamily:"var(--font-serif),Playfair Display,serif", fontSize, letterSpacing:tracking, fill:`url(#goldGrad-${size})`, stroke:"#3A2814", strokeWidth:size==="large"?"1.4px":"0.3px", strokeLinejoin:"round", fontWeight:600 }}>
          <textPath href={`#curve-${size}`} startOffset="50%" textAnchor="middle">ARCSCAPE</textPath>
        </text>
      </svg>
    </motion.div>
  );
}

/* ─── ArcscapeEmblem — UNCHANGED ─────────────────────────────────── */
function ArcscapeEmblem({ size = "normal" }: { size?: "normal" | "small" | "large" }) {
  const scale = size==="small"?0.75:size==="large"?1.5:1;
  const dimension = 24*scale;
  return (
    <div className="flex items-center justify-center select-none pointer-events-none shrink-0">
      <svg viewBox="0 0 32 32" style={{ width:`${dimension}px`, height:`${dimension}px` }} className="text-[#C4783A]" fill="none">
        <rect x="3" y="3" width="26" height="26" rx="5" stroke="currentColor" strokeWidth="1.2" className="opacity-40"/>
        <path d="M 9 22 L 16 8 L 23 22" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 11.5 17 Q 16 14.5 20.5 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="11.5" r="1" fill="currentColor"/>
      </svg>
    </div>
  );
}

/* ─── helpers ────────────────────────────────────────────────────── */
function getProjectIcon(domain: string) {
  const cls = "h-5 w-5 text-[#C4783A] transition-all duration-300";
  switch (domain.toLowerCase()) {
    case 'muzcast.com':       return <Music2 className={cls}/>;
    case 'repulink.com':      return <Network className={cls}/>;
    case 'xnui.com':          return <Palette className={cls}/>;
    case 'biofail.com':       return <Dna className={cls}/>;
    case 'kundalink.com':     return <Flame className={cls}/>;
    case 'chosenspot.com':    return <MapPin className={cls}/>;
    case 'clonecraft.com':    return <Bot className={cls}/>;
    case 'exoshape.com':      return <Shapes className={cls}/>;
    case 'trueinheritor.com': return <Vault className={cls}/>;
    case 'grzu.com':          return <Terminal className={cls}/>;
    case 'rp2p.com':          return <Share2 className={cls}/>;
    case 'protosquad.com':    return <Printer className={cls}/>;
    case 'izpe.com':          return <Atom className={cls}/>;
    case 'bridge.ws':         return <GitMerge className={cls}/>;
    case 'plano.cc':          return <CalendarDays className={cls}/>;
    case 'humandemo.com':     return <Moon className={cls}/>;
    case 'biotrojan.com':     return <ShieldAlert className={cls}/>;
    default:                  return <Globe className={cls}/>;
  }
}

function getCategoryGroup(domain: string): 'AI & Deep Tech'|'Wellness & Life'|'Enterprise & Tools' {
  const d = domain.toLowerCase();
  if (d.includes('clonecraft')||d.includes('exoshape')||d.includes('repulink')||d.includes('biotrojan')) return 'AI & Deep Tech';
  if (d.includes('muzcast')||d.includes('kundalink')||d.includes('humandemo')||d.includes('rp2p')||d.includes('chosenspot')) return 'Wellness & Life';
  return 'Enterprise & Tools';
}

function getShortTagline(t: string): string {
  const w = t.trim().split(/\s+/);
  return w.length <= 7 ? t : w.slice(0,7).join(' ').replace(/[,.;:]+$/,'') + '…';
}

function getProjectTech(domain: string): string[] {
  const d = domain.toLowerCase();
  if (d.includes('muzcast'))       return ['Next.js','WebSockets','Tailwind'];
  if (d.includes('repulink'))      return ['React','D3.js','SaaS'];
  if (d.includes('xnui'))          return ['Design Systems','Motion','CSS'];
  if (d.includes('biofail'))       return ['Audit DB','Carbon API','React'];
  if (d.includes('kundalink'))     return ['Geolocation','Firebase','React'];
  if (d.includes('chosenspot'))    return ['Mapbox','P2P','Leaflet'];
  if (d.includes('clonecraft'))    return ['Gemini API','WebSocket','React'];
  if (d.includes('exoshape'))      return ['3D Canvas','CAD','D3.js'];
  if (d.includes('trueinheritor')) return ['Cryptography','Vault','Next.js'];
  if (d.includes('grzu'))          return ['API Monitor','React','Alerts'];
  if (d.includes('rp2p'))          return ['WebRTC','P2P','Encrypted'];
  if (d.includes('protosquad'))    return ['SolidWorks','3D Print','React'];
  if (d.includes('izpe'))          return ['Quantum','D3','HTML5'];
  if (d.includes('bridge'))        return ['Directory','Ledger','Tailwind'];
  if (d.includes('plano'))         return ['Canvas','LocalStorage','HTML5'];
  if (d.includes('humandemo'))     return ['BioSaaS','Chart.js','React'];
  return ['TypeScript','Next.js','Tailwind'];
}

/* ─── types & data ───────────────────────────────────────────────── */
type ViewType =
  | 'portal'|'dashboard'|'about'|'support'|'login-help'
  | 'seed-incubator'|'target-arbitrage'|'strategic-partnerships'
  | 'legal-network'|'compliance-board'|'hr-advisory'|'node-register'
  | 'token-dtd'|'xhtml-schemas'|'registered-partners'|'portal-dtd'
  | 'seed-network'|'xhtml-spec'
  | 'project-muzcast'|'project-repulink'|'project-xnui'|'project-biofail'
  | 'project-kundalink'|'project-chosenspot'|'project-clonecraft'
  | 'project-exoshape'|'project-trueinheritor'|'project-grzu'|'project-rp2p'
  | 'project-protosquad'|'project-izpe'|'project-bridge'|'project-plano'
  | 'project-humandemo'|'project-biotrojan';

const projectsData = [
  { viewState:'project-muzcast'       as const, domain:'Muzcast.com',       category:'SPIRITUAL NETWORK',   tagline:'A refined global registry connecting hearts to real-time online prayer congregations.',                    type:'PRAYER HUB',          url:'https://muzcast.com',              status:'Active'     as const },
  { viewState:'project-repulink'      as const, domain:'repulink.com',      category:'CREDIBILITY NETWORK', tagline:'The global standard for AI influence, digital authenticity, and verified reputation networks.',             type:'REPUTATION SAAS',     url:'https://repulink.com',             status:'Incubating' as const },
  { viewState:'project-xnui'          as const, domain:'xnui.com',          category:'VISUAL STUDIO',       tagline:'Boutique digital design studio offering premium UX services and tactile interface systems.',                type:'DESIGN ATELIER',      url:'https://xnui.com',                 status:'Ready'      as const },
  { viewState:'project-biofail'       as const, domain:'biofail.com',       category:'ENVIRONMENTAL WATCH', tagline:'Real-time database of global corporate environmental impact and carbon emissions auditing.',                 type:'IMPACT INDEX',        url:'https://biofail.com',              status:'Active'     as const },
  { viewState:'project-kundalink'     as const, domain:'kundalink.com',     category:'YOGA DIRECTORY',      tagline:'Verify, locate, and book certified Kundalini and Zen breathwork mentors worldwide.',                       type:'WELLNESS HUB',        url:'https://kundalink.com',            status:'Incubating' as const },
  { viewState:'project-chosenspot'    as const, domain:'chosenspot.com',    category:'GEOCACHING',          tagline:'Uncover hidden coordinates and cryptic trails shared by specialized explorers.',                           type:'GEO NETWORK',         url:'https://chosenspot.com',           status:'Active'     as const },
  { viewState:'project-clonecraft'    as const, domain:'clonecraft.com',    category:'AI SYSTEMS',          tagline:'The classified program for elite digital replication and synthetic AI twin systems.',                       type:'SYNTHETIC TWINS',     url:'https://www.clonecraft.com/',      status:'Ready'      as const },
  { viewState:'project-exoshape'      as const, domain:'exoshape.com',      category:'DEEP TECH',           tagline:'A new class of adaptive structures, active materials, and advanced geometric R&D.',                        type:'ADAPTIVE STRUCT.',    url:'https://www.exoshape.com/',        status:'Incubating' as const },
  { viewState:'project-trueinheritor' as const, domain:'trueinheritor.com', category:'FINTECH',             tagline:'Premium digital estate, legacy trusts, and secure smart wealth transfer.',                                 type:'DIGITAL ASSET',       url:'https://trueinheritor.com',        status:'Ready'      as const },
  { viewState:'project-grzu'          as const, domain:'grzu.com',          category:'DEVELOPER TOOLS',     tagline:'High-performance real-time API monitoring, latency tracking, and SLA alerting.',                           type:'API MONITOR',         url:'https://www.grzu.com/',            status:'Active'     as const },
  { viewState:'project-rp2p'          as const, domain:'rp2p.com',          category:'SOCIAL EXPERIMENT',   tagline:'A minimalist anonymous peer-to-peer messaging experiment, one message a day.',                             type:'P2P PROTOCOL',        url:'https://www.rp2p.com/',            status:'Active'     as const },
  { viewState:'project-protosquad'    as const, domain:'protosquad.com',    category:'ENGINEERING',         tagline:'Precision mechanical engineering design and rapid additive prototyping studio.',                            type:'PROTO LAB',           url:'https://www.protosquad.com/',      status:'Ready'      as const },
  { viewState:'project-izpe'          as const, domain:'izpe.com',          category:'SCIENCE PORTAL',      tagline:'Interactive science portal exploring quantum zero-point energy and the Casimir effect.',                    type:'QUANTUM HUB',         url:'https://www.izpe.com/',            status:'Incubating' as const },
  { viewState:'project-bridge'        as const, domain:'bridge.ws',         category:'DESIGN DIRECTORY',    tagline:'Independent verified ledger of premier web designers, developers, and engineering partners.',               type:'AUDIT DIRECTORY',     url:'https://www.bridge.ws/',           status:'Active'     as const },
  { viewState:'project-plano'         as const, domain:'plano.cc',          category:'ROOM DESIGNER',       tagline:'Design your room layout, arrange furniture, snap to grid — no login required.',                            type:'FLOOR PLAN TOOL',     url:'https://plano.cc/',                status:'Active'     as const },
  { viewState:'project-humandemo'     as const, domain:'humandemo.com',     category:'PERFORMANCE TECH',    tagline:'Optimise your daily focus, sleep architecture, and biological rhythms via personalised system.',            type:'FOCUS SAAS',          url:'https://humandemo.com/',           status:'Incubating' as const },
  { viewState:'project-biotrojan'     as const, domain:'biotrojan.com',     category:'VIRUS SIMULATOR',     tagline:'A deterministic viral mutation simulator built for academic epidemiological research.',                     type:'SIM ENGINE',          url:'https://biotrojan.com/',           status:'Active'     as const },
];

/* ─── ProjectVisualMockup ────────────────────────────────────────── */
function ProjectVisualMockup({ slug }: { slug: string }) {
  const map: Record<string,{ title:string; subtitle:string; sector:string; demographic:string; businessModel:string; metrics:{label:string;value:string;detail:string}[] }> = {
    'project-muzcast':      { title:"Muzcast Global",       subtitle:"Digital Spiritual Network",               sector:"Faith-Based Digital Communities",        demographic:"Interfaith spiritual groups & remote participants", businessModel:"SaaS & Directory Ledger Verification",   metrics:[{label:"COMMUNITIES",value:"1,840",detail:"Verified worldwide"},{label:"UPTIME SLA",value:"99.9%",detail:"Synchronized audio"},{label:"MONTHLY USERS",value:"25,000+",detail:"Active participants"}] },
    'project-repulink':     { title:"Repulink Audits",      subtitle:"AI Search Share of Voice Tracker",        sector:"Digital Authenticity & Reputation",      demographic:"High-net-worth estates & public figures",          businessModel:"Enterprise Audit Subscriptions",         metrics:[{label:"LLMs TRACKED",value:"12",detail:"Real-time crawler"},{label:"ACCURACY",value:"98.4%",detail:"Verified mentions"},{label:"BRANDS",value:"4,200",detail:"Active monitoring"}] },
    'project-xnui':         { title:"XNUI UX Studio",       subtitle:"Tactile Interface Lab",                   sector:"Premium Digital Design & UX",           demographic:"Enterprise portals & high-end real estate",         businessModel:"Bespoke Design System Consulting",        metrics:[{label:"SYSTEMS",value:"48",detail:"High-fidelity grids"},{label:"COMPONENTS",value:"14",detail:"Full design packs"},{label:"WCAG",value:"99%",detail:"Fully compliant"}] },
    'project-biofail':      { title:"Biofail Database",     subtitle:"Corporate Environmental Registry",         sector:"CSR & Environmental Audit",              demographic:"NGOs, ESG researchers & public",                    businessModel:"Open DB + Enterprise API",                metrics:[{label:"CORPORATIONS",value:"1,500+",detail:"Public records"},{label:"INCIDENTS",value:"353",detail:"Carbon spikes"},{label:"AUDITS",value:"143",detail:"Scientific reports"}] },
    'project-kundalink':    { title:"KundaLink Directory",  subtitle:"Zen & Kundalini Mentor Verification",      sector:"Health, Mindfulness & Wellness",         demographic:"Yoga practitioners & wellness guides",              businessModel:"Directory Placement & Booking Fees",      metrics:[{label:"MENTORS",value:"420",detail:"Vetted teachers"},{label:"RATING",value:"4.9/5",detail:"10k sessions"},{label:"COMPLETION",value:"99.2%",detail:"Positive rate"}] },
    'project-chosenspot':   { title:"ChosenSpot",           subtitle:"Explorer Coordinates Network",             sector:"Outdoor Exploration & Geotagging",       demographic:"Surveyors & geocaching clubs",                      businessModel:"Premium Coordinate Licensing",             metrics:[{label:"TRAILS",value:"8,400+",detail:"GPS tagged"},{label:"MEMBERS",value:"12,500+",detail:"Enthusiasts"},{label:"DISCOVERY",value:"94.2%",detail:"Cache recoveries"}] },
    'project-clonecraft':   { title:"CloneCraft Systems",   subtitle:"Enterprise Synthetic AI Twins",            sector:"Customer Service & AI Automation",       demographic:"Fortune 500 support desks",                         businessModel:"Subscription SaaS per AI Agent",          metrics:[{label:"AI AGENTS",value:"3,400",detail:"Live simulations"},{label:"BEHAVIORAL FIT",value:"99.8%",detail:"Natural alignment"},{label:"INTEGRATIONS",value:"14",detail:"CRMs & apps"}] },
    'project-exoshape':     { title:"ExoShape Research",    subtitle:"Adaptive Materials Laboratory",            sector:"Deep Tech & Aerospace Engineering",      demographic:"Aerospace partners & robotics devs",                businessModel:"IP & Materials Licensing",                 metrics:[{label:"PATENTS",value:"3",detail:"Active grants"},{label:"PROTOTYPES",value:"18",detail:"Tested"},{label:"TENSILE",value:"98.6/100",detail:"Weight-to-strength"}] },
    'project-trueinheritor':{ title:"TrueInheritor",        subtitle:"Secure Digital Estate Preservation",       sector:"Private Wealth & Estate FinTech",         demographic:"Generational families & legacy trusts",             businessModel:"Asset Under Stewardship Fee",              metrics:[{label:"VALUATION",value:"$450M",detail:"Preserved estates"},{label:"INTEGRITY",value:"100%",detail:"Immutable chain"},{label:"CONTRACTS",value:"24",detail:"Verified"}] },
    'project-grzu':         { title:"GRZU Monitoring",      subtitle:"High-Performance API SLA Tracker",         sector:"Developer Tools & Cloud Infra",          demographic:"SaaS teams & DevOps managers",                      businessModel:"API Volume Subscription",                  metrics:[{label:"REQUESTS/MO",value:"4.8B",detail:"Server ops"},{label:"LATENCY",value:"<12ms",detail:"Avg response"},{label:"UPTIME",value:"99.999%",detail:"SLA precision"}] },
    'project-rp2p':         { title:"RP2P Protocols",       subtitle:"P2P Anonymous Messaging",                  sector:"Decentralised Social Networks",          demographic:"Privacy-centric users",                             businessModel:"Ad-Free Tokenised Infrastructure",         metrics:[{label:"DAILY NODES",value:"18,500",detail:"Active P2P"},{label:"ENCRYPTION",value:"Post-Q",detail:"End-to-end"},{label:"DATA LOG",value:"0 bytes",detail:"Deleted on read"}] },
    'project-protosquad':   { title:"ProtoSquad CAD",       subtitle:"Rapid Additive Prototyping Lab",           sector:"Mechanical Engineering Services",        demographic:"Industrial designers & hardware startups",          businessModel:"Consulting & Prototyping Fees",            metrics:[{label:"CAD MODELS",value:"120+",detail:"SolidWorks"},{label:"PARTS PRINTED",value:"450+",detail:"ABS, PLA, Nylon"},{label:"TOLERANCE",value:"±0.05mm",detail:"Tight spec"}] },
    'project-izpe':         { title:"IZPE Quantum",         subtitle:"Zero-Point Energy Visualiser",             sector:"Educational Science Databases",          demographic:"Quantum researchers & universities",                businessModel:"Grants & Educational Subs",                metrics:[{label:"PAPERS",value:"8",detail:"Casimir effect"},{label:"SIMULATIONS",value:"14",detail:"Virtual lab"},{label:"MODEL",value:"Theoretical",detail:"Physics only"}] },
    'project-bridge':       { title:"Bridge WS Ledger",     subtitle:"Verified Developer Database",             sector:"Professional Service Registries",         demographic:"Tech startups seeking vetted talent",               businessModel:"Partner Placement Fees",                   metrics:[{label:"DEVELOPERS",value:"2,400",detail:"Certified"},{label:"AGENCIES",value:"150",detail:"Validated"},{label:"DISPUTES",value:"100%",detail:"Settled"}] },
    'project-plano':        { title:"Plano Layouts",        subtitle:"No-Login Floor Plan Designer",             sector:"Consumer Architectural SaaS",            demographic:"Interior designers & homeowners",                   businessModel:"Free + PDF Export Fees",                   metrics:[{label:"LAYOUTS",value:"35,000+",detail:"No signup"},{label:"STYLES",value:"120+",detail:"Snap vectors"},{label:"EXPORT",value:"<2s",detail:"Fast render"}] },
    'project-humandemo':    { title:"HumanDemo",            subtitle:"Circadian Rhythm Optimiser",               sector:"BioTech Consumer SaaS",                  demographic:"Remote professionals & creators",                   businessModel:"Individual & Team Subscriptions",          metrics:[{label:"BIOMARKERS",value:"8",detail:"Connected"},{label:"FOCUS",value:"92%",detail:"Cognitive flow"},{label:"SCHEDULES",value:"100%",detail:"Custom alerts"}] },
    'project-biotrojan':    { title:"Biotrojan Virus Lab",  subtitle:"Pathogen Simulation Tool",                sector:"Cybersecurity & Bio-Simulation",          demographic:"Epidemiologists & research clinics",                businessModel:"Enterprise Research Subscriptions",        metrics:[{label:"MUTATIONS",value:"10,000+",detail:"Simulated"},{label:"LATENCY",value:"<50ms",detail:"Real-time"},{label:"PARTNERS",value:"45 Labs",detail:"Active"}] },
  };
  const info = map[slug] || { title:slug.replace('project-','').toUpperCase(), subtitle:"Venture Initiative", sector:"Strategic Asset", demographic:"Enterprise partners", businessModel:"Direct licensing", metrics:[{label:"STATUS",value:"Active",detail:"Premium asset"},{label:"AUDIT",value:"Passed",detail:"Verified"},{label:"ACCESS",value:"Open",detail:"Ready"}] };
  return (
    <div className="md:col-span-2 bg-[#1A1814] border border-[#2E2B24] p-8 space-y-8 flex flex-col justify-between min-h-[400px]">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#C4783A]"/><span className="text-[9px] font-mono tracking-[0.2em] text-[#C4783A] uppercase font-bold">VENTURE BRIEF</span></div>
          <h3 className="font-serif text-2xl font-light text-[#EDE8DF]">{info.title}</h3>
          <p className="text-xs font-serif italic text-[#7A7367]">{info.subtitle}</p>
        </div>
        <span className="text-[9px] px-3 py-1 font-mono uppercase tracking-widest text-[#7A7367] bg-[#222018] border border-[#2E2B24]">{info.sector}</span>
      </div>
      <div className="border-t border-b border-[#2E2B24] py-5 space-y-3">
        <div className="flex justify-between text-[9px] font-mono uppercase tracking-wider text-[#7A7367]">
          <span>Staging Phase</span><span className="text-[#EDE8DF] font-bold">Phase IV // Audited</span>
        </div>
        <div className="relative pt-2 pb-2">
          <div className="absolute left-1 right-1 top-[14px] h-px bg-[#2E2B24]"/>
          <div className="relative flex justify-between">
            {[{n:"Concept",a:true},{n:"Validation",a:true},{n:"Prototype",a:true},{n:"Audit",a:true},{n:"Stewardship",a:false}].map((s,i)=>(
              <div key={i} className="flex flex-col items-center space-y-2 z-10">
                <div className={`h-2.5 w-2.5 rounded-full border ${s.a?'bg-[#C4783A] border-[#C4783A]':'bg-[#1A1814] border-[#2E2B24]'}`}/>
                <span className={`text-[8px] font-mono uppercase tracking-wide ${s.a?'text-[#EDE8DF] font-bold':'text-[#7A7367]'}`}>{s.n}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {info.metrics.map((m,i)=>(
          <div key={i} className="space-y-1">
            <span className="text-[8px] font-mono text-[#7A7367] uppercase tracking-widest block">{m.label}</span>
            <span className="text-lg font-serif text-[#EDE8DF] block">{m.value}</span>
            <span className="text-[10px] text-[#7A7367] block">{m.detail}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#2E2B24]">
        <div className="space-y-1"><span className="text-[8px] font-mono text-[#7A7367] uppercase tracking-widest block">TARGET DEMOGRAPHIC</span><p className="text-stone-400 text-xs leading-relaxed font-serif">{info.demographic}</p></div>
        <div className="space-y-1"><span className="text-[8px] font-mono text-[#7A7367] uppercase tracking-widest block">REVENUE STRUCTURE</span><p className="text-stone-400 text-xs leading-relaxed font-serif">{info.businessModel}</p></div>
      </div>
    </div>
  );
}

/* ─── ProjectDetailView ──────────────────────────────────────────── */
function ProjectDetailView({ viewState, onBack, failedImages, setFailedImages }: { viewState:string; onBack:()=>void; failedImages:Record<string,boolean>; setFailedImages:React.Dispatch<React.SetStateAction<Record<string,boolean>>>; }) {
  const p = projectsData.find(x=>x.viewState===viewState);
  if (!p) return null;
  return (
    <motion.section key={`${viewState}-view`} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:0.35,ease:[0.16,1,0.3,1]}} className="space-y-10 max-w-4xl mx-auto w-full">
      <div className="flex items-center justify-between border-b border-[#2E2B24] pb-4">
        <button onClick={onBack} className="group flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-[#7A7367] hover:text-[#C4783A] transition-colors cursor-pointer font-bold">
          <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform"/>Back to Projects
        </button>
        <a href={p.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-[#0F0E0C] bg-[#C4783A] hover:bg-[#E8A96A] transition-colors px-4 py-1.5 font-bold cursor-pointer">
          Live Project <ExternalLink className="h-3 w-3"/>
        </a>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-[#2E2B24] pb-6">
        <div><span className="font-mono text-[9px] text-[#C4783A] tracking-[0.25em] uppercase font-extrabold block">{"0"+(projectsData.indexOf(p)+1)+" // VENTURE SPECIFICATION"}</span>
          <h2 className="font-serif text-4xl font-light text-[#EDE8DF] tracking-tight mt-1">{p.domain}</h2></div>
        <span className="font-mono text-[9px] text-[#7A7367] bg-[#1A1814] border border-[#2E2B24] px-3 py-1 uppercase tracking-widest font-bold self-start">{p.type}</span>
      </div>
      <div className="relative h-64 sm:h-72 w-full overflow-hidden border border-[#2E2B24] bg-[#111008] flex items-center justify-center group">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2E2B24_1px,transparent_1px),linear-gradient(to_bottom,#2E2B24_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"/>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 opacity-10 group-hover:opacity-20 group-hover:scale-105 transition-all duration-700">
          {React.cloneElement(getProjectIcon(p.domain),{ className:"w-[300px] h-[300px] text-[#C4783A]" })}
        </div>
        <div className="absolute bottom-6 left-6 z-20"><div className="bg-[#0F0E0C]/80 backdrop-blur-sm px-4 py-3 border border-[#2E2B24] space-y-0.5">
          <span className="font-mono text-[8px] text-[#C4783A] uppercase tracking-widest font-black block">SPECIFICATION</span>
          <h3 className="font-serif text-lg text-[#EDE8DF] uppercase">{p.domain}</h3>
          <p className="font-mono text-[9px] text-[#7A7367]">TYPE: {p.type}</p>
        </div></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ProjectVisualMockup slug={viewState}/>
        <div className="bg-[#1A1814] p-6 border border-[#2E2B24] flex flex-col justify-between min-h-[320px]">
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] text-[#7A7367] uppercase tracking-widest border-b border-[#2E2B24] pb-2 font-bold">Product Specification</h4>
            <p className="text-xs text-[#7A7367] leading-relaxed">Deploying specialised digital frameworks under standard compliance protocols.</p>
            <div className="space-y-3 font-mono text-[11px]">
              {[['Launch Timeline','Q2 2026'],['Secured Funding','Seed Tier I'],['Audit Status','COMPLIANT'],['Partner Access','ACTIVE']].map(([k,v])=>(
                <div key={k} className="flex justify-between pb-1.5 border-b border-[#2E2B24]">
                  <span className="text-[#7A7367]">{k}:</span>
                  {k==='Audit Status' ? <span className="text-emerald-400 font-bold text-[9px] bg-emerald-950 border border-emerald-800 px-1.5 py-0.5">{v}</span> : <span className="text-[#EDE8DF] font-bold">{v}</span>}
                </div>
              ))}
            </div>
          </div>
          <div className="pt-3 border-t border-[#2E2B24] mt-4"><span className="font-mono text-[9px] text-[#7A7367] uppercase tracking-widest block font-bold mb-1">Ecosystem Integration</span><span className="text-xs text-[#7A7367] font-serif italic">Direct General Partnership custody &amp; capital allocation alignment.</span></div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <h3 className="font-serif text-xl text-[#EDE8DF]">Mission &amp; Architecture</h3>
          <p className="text-[#7A7367] text-sm leading-relaxed">{p.tagline} This platform is engineered to resolve category-level hurdles in its respective industry, combining procedural design, strict standards compliance, and an unhurried focus on sensory user layouts.</p>
          <p className="text-[#7A7367] text-sm leading-relaxed">We avoid hype trends in favour of absolute functional utility and mathematical optimisation, ensuring every pixel, interaction, and database record builds authentic long-term brand authority.</p>
        </div>
        <div className="bg-[#1A1814] p-5 border border-[#2E2B24] space-y-4">
          <h4 className="font-mono text-[9px] text-[#7A7367] uppercase tracking-widest border-b border-[#2E2B24] pb-2 font-bold">Strategic Pillars</h4>
          <ul className="space-y-3 text-[11px] text-[#7A7367] leading-relaxed">
            {['Deep layout integrity and frictionless micro-interactions.','Full compliance with security and privacy regulations.','Continuous validation loops across high-end testing desks.'].map((s,i)=>(
              <li key={i} className="flex items-start gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#C4783A] shrink-0 mt-1.5"/>{s}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pt-10 pb-4 border-t border-[#2E2B24]">
        <a href={p.url} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-[#C4783A] hover:bg-[#E8A96A] text-[#0F0E0C] font-mono text-[9px] uppercase tracking-widest transition-all duration-300 flex items-center gap-2 cursor-pointer font-bold">
          <Globe className="h-3.5 w-3.5"/>VISIT {p.domain.toUpperCase()}
        </a>
        <span className="text-[9px] text-[#7A7367] font-mono mt-3 uppercase tracking-widest">// ARCSCAPE ADVISORY PARTNERS //</span>
      </div>
    </motion.section>
  );
}

/* ─── Main LandingPage ───────────────────────────────────────────── */
export default function LandingPage() {
  const [activeView, setActiveView] = useState<ViewType>('portal');
  const [mousePos, setMousePos] = useState({ x:0, y:0 });
  const [failedImages, setFailedImages] = useState<Record<string,boolean>>({});
  const [selectedCategory, setSelectedCategory] = useState<'All'|'AI & Deep Tech'|'Wellness & Life'|'Enterprise & Tools'>('All');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'error'>('idle');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string|null>(null);
  const [dashboardSearch, setDashboardSearch] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [supportFormData, setSupportFormData] = useState({ name:'', affiliation:'', email:'', classification:'LP Inquiry', message:'' });
  const [checkedSteps, setCheckedSteps] = useState<Record<string,boolean>>({ step1:false, step2:false, step3:false, step4:false });
  const [calcCapital, setCalcCapital] = useState(150000);
  const [calcArbitrageRate, setCalcArbitrageRate] = useState(4.2);
  const [diagnosticRun, setDiagnosticRun] = useState(false);
  const [diagnosticProgress, setDiagnosticProgress] = useState(0);

  // support math
  const [supportNum1, setSupportNum1] = useState(0);
  const [supportNum2, setSupportNum2] = useState(0);
  const [supportUserAnswer, setSupportUserAnswer] = useState('');
  const [supportErrorStatus, setSupportErrorStatus] = useState<string|null>(null);
  const [supportIsRevealed, setSupportIsRevealed] = useState(false);
  const [supportCopied, setSupportCopied] = useState(false);
  const resetSupportMath = () => { setSupportNum1(Math.floor(Math.random()*8)+3); setSupportNum2(Math.floor(Math.random()*7)+2); setSupportUserAnswer(''); setSupportErrorStatus(null); };
  useEffect(() => { if (activeView==='support') { const t=setTimeout(()=>resetSupportMath(),0); return()=>clearTimeout(t); } }, [activeView]);

  const showToast = (msg:string) => { setToastMessage(msg); setTimeout(()=>setToastMessage(null),4000); };

  // mouse parallax (portal only)
  useEffect(() => {
    if (activeView!=='portal') return;
    const h = (e:MouseEvent) => setMousePos({ x:(e.clientX/window.innerWidth)-0.5, y:(e.clientY/window.innerHeight)-0.5 });
    window.addEventListener('mousemove',h);
    return ()=>window.removeEventListener('mousemove',h);
  }, [activeView]);

  // scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-stagger');
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('is-visible'); });
    },{ threshold:0.1, rootMargin:'-40px' });
    els.forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  });

  const filteredProjects = React.useMemo(() => {
    let list = [...projectsData].sort((a,b)=>a.domain.toLowerCase().localeCompare(b.domain.toLowerCase()));
    if (selectedCategory!=='All') list = list.filter(p=>getCategoryGroup(p.domain)===selectedCategory);
    return list;
  }, [selectedCategory]);

  const handleLoginSubmit = async (e:React.FormEvent) => {
    e.preventDefault(); if(!password.trim()) return;
    setStatus('loading'); await new Promise(r=>setTimeout(r,200));
    const c=password.toLowerCase().trim();
    if(c==='arcscape'||c==='partner'||c==='open'||c==='admin'){setStatus('idle');setActiveView('dashboard');setIsLoginOpen(false);}
    else setStatus('error');
  };

  const ventures = [
    { name:'Kestrel Genomics', industry:'Biotech & Health', desc:'Advanced CRISPR cell-therapy acceleration systems simplifying custom pipeline operations.', allocation:'$8.2M', stage:'Series A', progress:88 },
    { name:'Veridian Systems', industry:'Clean Energy', desc:'Decentralised municipal battery storage load balancing for maximum community resiliency.', allocation:'$12.5M', stage:'Cohort V', progress:95 },
    { name:'Aether Quantum', industry:'Deep Tech', desc:'Room-temperature optical quantum processors optimised for enterprise logistics modelling.', allocation:'$5.4M', stage:'Pre-Seed', progress:42 },
    { name:'Lumina Ceramics', industry:'Materials', desc:'Ultra-thin carbon-capture molecular materials for commercial skyscraper exterior glass.', allocation:'$6.1M', stage:'Seed II', progress:71 },
    { name:'Nautilus Avionics', industry:'Aerospace', desc:'Unmanned maritime thermal-scanning systems for sustainable oceanographic survey.', allocation:'$9.6M', stage:'Series B', progress:60 },
    { name:'Siren Acoustics', industry:'Hardware', desc:'Anisotropic solid-state micro-acoustic transducers with zero harmonic distortion.', allocation:'$4.0M', stage:'Cohort VI', progress:15 },
  ];
  const filteredVentures = ventures.filter(v=>v.name.toLowerCase().includes(dashboardSearch.toLowerCase())||v.industry.toLowerCase().includes(dashboardSearch.toLowerCase()));

  const renderBreadcrumbs = () => {
    if (activeView==='portal') return null;
    const isProject = activeView.startsWith('project-');
    const labels:Record<string,[string,string]> = { dashboard:['PARTNER SPACE','Venture Dashboard'], about:['THE FIRM','About Us'], support:['PARTNER CONCIERGE','Support Desk'], 'login-help':['SECURITY','Access Support'], 'seed-incubator':['STUDIO','Seed Incubator'], 'target-arbitrage':['STUDIO','Computational Arbitrage'], 'strategic-partnerships':['STUDIO','Strategic Alliances'], 'compliance-board':['STUDIO','Compliance Board'], 'hr-advisory':['STUDIO','HR Advisory'], 'node-register':['STUDIO','Node Registry'], 'registered-partners':['FIRM','LP Checklist'], 'seed-network':['STUDIO','Advisor Network'], };
    const [section, item] = isProject ? ['VENTURES', projectsData.find(p=>p.viewState===activeView)?.domain||''] : (labels[activeView]||['PORTAL',activeView]);
    return (
      <div className="flex items-center gap-2 py-3 border-b border-[#2E2B24] mb-2">
        <button onClick={()=>{setActiveView('portal');window.scrollTo({top:0,behavior:'smooth'});}} className="font-mono text-[9px] text-[#7A7367] hover:text-[#C4783A] transition-colors uppercase tracking-wider font-bold cursor-pointer">Portal</button>
        <ChevronRight className="h-3 w-3 text-[#2E2B24]"/>
        <span className="font-mono text-[9px] text-[#7A7367] uppercase tracking-wider font-bold">{section}</span>
        <ChevronRight className="h-3 w-3 text-[#2E2B24]"/>
        <span className="font-mono text-[9px] text-[#C4783A] uppercase tracking-wider font-black truncate">{item}</span>
      </div>
    );
  };

  /* shared back button */
  const BackBtn = ({ to='portal' as ViewType }) => (
    <button onClick={()=>{setActiveView(to as ViewType);window.scrollTo({top:0,behavior:'smooth'});}}
      className="group flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest font-bold cursor-pointer mb-6 transition-colors"
      style={{color:'var(--text-3)'}}
      onMouseEnter={e=>(e.currentTarget.style.color='var(--accent)')}
      onMouseLeave={e=>(e.currentTarget.style.color='var(--text-3)')}>
      <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform"/>Return
    </button>
  );

  /* shared section header */
  const SectionHeader = ({ ref_code, children }: { ref_code:string; children:React.ReactNode }) => (
    <div className="border-t border-b py-6 flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4 mb-8"
      style={{borderColor:'var(--border)'}}>
      <div className="space-y-1">
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] font-extrabold block" style={{color:'var(--accent)'}}>Arcscape Capital // Private Register</span>
        {children}
      </div>
      <span className="font-mono text-[9px] uppercase tracking-widest px-3 py-1 border" style={{color:'var(--text-3)', background:'var(--bg-2)', borderColor:'var(--border)'}}>{ref_code}</span>
    </div>
  );

  // ── Dark / light mode ─────────────────────────────────
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle('light', !isDark);
  }, [isDark]);

  // ── Spotlight cursor for hero ──────────────────────────
  const heroRef = useRef<HTMLDivElement>(null);
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    if (heroRef.current) {
      heroRef.current.style.setProperty('--mx', `${x}%`);
      heroRef.current.style.setProperty('--my', `${y}%`);
    }
  };

  // ticker items
  const tickerItems = ['Seed & Early Stage', 'Computational Arbitrage', 'Strategic Alliances', 'Compliance Board', 'HR Advisory', 'Global Node Registry', 'Venture Partners AG', 'Zug, Switzerland'];

  return (
    <main className="noise relative min-h-screen font-sans flex flex-col overflow-x-hidden" style={{background:'var(--bg)',color:'var(--text)'}}>

      {/* ── dot grid ─────────────────────────────────────────── */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-25" aria-hidden
        style={{backgroundImage:`radial-gradient(var(--border) 1px, transparent 1px)`, backgroundSize:'36px 36px'}}/>

      {/* ════ HEADER ═══════════════════════════════════════════ */}
      <div className="sticky top-0 z-30 backdrop-blur-md border-b transition-colors duration-300"
        style={{background:`color-mix(in srgb, var(--bg) 85%, transparent)`, borderColor:'var(--border)'}}>
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-16">
          <header className="flex justify-between items-center h-14">
            <button onClick={()=>{setActiveView('portal');window.scrollTo({top:0,behavior:'smooth'});}}
              className="cursor-pointer flex items-center overflow-visible h-10 w-28 sm:w-36 shrink-0 hover:opacity-80 transition-opacity" aria-label="Arcscape home">
              <ArcscapeCurvedLogo size="small"/>
            </button>
            <div className="flex items-center gap-4 sm:gap-6">
              <nav className="flex items-center gap-4 sm:gap-6" aria-label="Main navigation">
                {(['Ventures','About','Support'] as const).map(label=>{
                  const view = label.toLowerCase()==='ventures' ? 'portal' : label.toLowerCase() as ViewType;
                  const isActive = activeView===view||(label==='Ventures'&&activeView==='portal');
                  return (
                    <button key={label} onClick={()=>{ if(label==='Ventures'){setActiveView('portal');setTimeout(()=>{document.getElementById('portfolio-section')?.scrollIntoView({behavior:'smooth'});},50);}else{setActiveView(view);window.scrollTo({top:0,behavior:'smooth'});} }}
                      className="relative font-mono text-[10px] uppercase tracking-[0.18em] transition-colors cursor-pointer py-1"
                      style={{color: isActive ? 'var(--text)' : 'var(--text-3)', fontWeight: isActive ? 800 : 500}}>
                      {label}
                      {isActive && <motion.span layoutId="navLine" className="absolute -bottom-px left-0 right-0 h-px" style={{background:'var(--accent)'}} transition={{type:'spring',stiffness:380,damping:34}}/>}
                    </button>
                  );
                })}
              </nav>
              <span className="hidden sm:block h-4 w-px" style={{background:'var(--border)'}}/>
              {/* Dark / light toggle */}
              <button onClick={()=>setIsDark(!isDark)} aria-label="Toggle theme"
                className="h-8 w-8 flex items-center justify-center border transition-all cursor-pointer hover:border-[var(--accent)]"
                style={{border:`1px solid var(--border)`, background:'var(--bg-2)', color:'var(--text-2)'}}>
                {isDark ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                  </svg>
                )}
              </button>
              <span className="hidden sm:block h-4 w-px" style={{background:'var(--border)'}}/>
              {activeView==='dashboard' ? (
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[8.5px] uppercase tracking-wider font-extrabold hidden sm:block" style={{color:'var(--accent)'}}>Partner</span>
                  <button onClick={()=>{setPassword('');setActiveView('portal');}} className="px-3 py-1 border font-mono text-[9px] uppercase tracking-widest font-bold transition-all cursor-pointer" style={{border:`1px solid var(--border)`, color:'var(--text-2)'}}>Lock</button>
                </div>
              ) : (
                <button onClick={()=>setIsLoginOpen(true)} className="flex items-center gap-1.5 px-3 py-1.5 border font-mono text-[9px] uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer shrink-0"
                  style={{border:`1px solid var(--border)`, background:'var(--bg-2)', color:'var(--text-2)'}}>
                  <Lock className="h-2.5 w-2.5" style={{color:'var(--accent)'}}/><span className="hidden sm:inline">Partner Access</span>
                </button>
              )}
            </div>
          </header>
        </div>
      </div>

      {/* breadcrumbs */}
      <div className="max-w-7xl mx-auto w-full px-5 sm:px-10 md:px-16">{renderBreadcrumbs()}</div>

      {/* ════ CONTENT ══════════════════════════════════════════ */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-5 sm:px-10 md:px-16 py-8 z-10">
        <AnimatePresence mode="wait">

          {/* ── PORTAL ──────────────────────────────────────── */}
          {activeView==='portal' && (
            <motion.section key="portal" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0,y:-12}} transition={{duration:0.4}} className="flex flex-col items-center w-full">

              {/* ══ NEW HERO ══════════════════════════════════════════════ */}
              <div ref={heroRef} onMouseMove={handleHeroMouseMove}
                className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden mb-0"
                style={{background:'var(--bg)'}}>

                {/* spotlight layer */}
                <div className="spotlight"/>

                {/* animated grid lines */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
                  <motion.svg className="absolute inset-0 w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="xMidYMid slice"
                    animate={{x: mousePos.x*18, y: mousePos.y*9}} transition={{type:'spring',stiffness:50,damping:24}}>
                    <circle cx="720" cy="420" r="320" stroke="var(--accent)" strokeWidth="0.4" strokeDasharray="3,14" opacity="0.35"/>
                    <circle cx="720" cy="420" r="220" stroke="var(--accent)" strokeWidth="0.7" opacity="0.4"/>
                    <circle cx="720" cy="420" r="120" stroke="var(--accent)" strokeWidth="0.4" strokeDasharray="2,8" opacity="0.3"/>
                    <line x1="720" y1="0" x2="720" y2="900" stroke="var(--accent)" strokeWidth="0.3" strokeDasharray="5,10" opacity="0.2"/>
                    <line x1="0" y1="420" x2="1440" y2="420" stroke="var(--accent)" strokeWidth="0.3" opacity="0.2"/>
                  </motion.svg>
                  {/* big blurred glow orb */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{background:'radial-gradient(circle, rgba(196,120,58,0.07) 0%, transparent 70%)'}}/>
                </div>

                {/* ── HERO CONTENT ── */}
                <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-10 md:px-16 w-full">

                  {/* top label */}
                  <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:0.1,duration:0.7,ease:[0.16,1,0.3,1]}}
                    className="flex items-center gap-3 mb-8">
                    <span className="h-px w-8" style={{background:'var(--accent)'}}/>
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] font-bold" style={{color:'var(--accent)'}}>
                      Advisory Partners AG · Est. Zug, Switzerland
                    </span>
                  </motion.div>

                  {/* split layout: left text + right logo */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT — headline + stats + CTA */}
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{delay:0.2,duration:0.9,ease:[0.16,1,0.3,1]}}
                          className="font-serif leading-[1.05] tracking-tight"
                          style={{fontSize:'clamp(2.4rem,5vw,4.2rem)', fontWeight:700, color:'var(--text)'}}>
                          We seed &amp; build<br/>
                          the next wave of<br/>
                          <span style={{color:'var(--accent)'}}>category-defining</span><br/>
                          venture systems.
                        </motion.h1>
                        <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.35,duration:0.8,ease:[0.16,1,0.3,1]}}
                          className="text-base leading-relaxed max-w-md" style={{color:'var(--text-2)'}}>
                          A boutique investment syndicate and design house organising high-end, mathematically compliant consumer brands and deep computational tech laboratories.
                        </motion.p>
                      </div>

                      {/* stat row */}
                      <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:0.5,duration:0.7,ease:[0.16,1,0.3,1]}}
                        className="flex items-stretch gap-0 border" style={{borderColor:'var(--border)'}}>
                        {[['17','Active Ventures'],['$45M+','Capital Deployed'],['Zug','Switzerland']].map(([val,label],i)=>(
                          <div key={label} className={`flex-1 px-5 py-4 text-center ${i<2?'border-r':''}`} style={{borderColor:'var(--border)', background:'var(--bg-2)'}}>
                            <span className="font-serif text-2xl font-bold block leading-none" style={{color:'var(--text)'}}>{val}</span>
                            <span className="font-mono text-[8px] uppercase tracking-widest block mt-1" style={{color:'var(--text-3)'}}>{label}</span>
                          </div>
                        ))}
                      </motion.div>

                      {/* CTAs */}
                      <motion.div initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} transition={{delay:0.6,duration:0.7,ease:[0.16,1,0.3,1]}}
                        className="flex flex-wrap gap-3">
                        <button onClick={()=>{document.getElementById('portfolio-section')?.scrollIntoView({behavior:'smooth'});}}
                          className="px-6 py-3 font-mono text-[10px] uppercase tracking-widest font-bold transition-all cursor-pointer"
                          style={{background:'var(--accent)', color:'var(--bg)'}}>
                          View Ventures →
                        </button>
                        <button onClick={()=>{setActiveView('about');window.scrollTo({top:0,behavior:'smooth'});}}
                          className="px-6 py-3 font-mono text-[10px] uppercase tracking-widest font-bold border transition-all cursor-pointer"
                          style={{border:`1px solid var(--border)`, color:'var(--text-2)', background:'transparent'}}>
                          About the Firm
                        </button>
                      </motion.div>
                    </div>

                    {/* RIGHT — logo floating */}
                    <motion.div initial={{opacity:0,scale:0.95}} animate={{opacity:1,scale:1}} transition={{delay:0.3,duration:1.1,ease:[0.16,1,0.3,1]}}
                      className="flex items-center justify-center w-full overflow-visible select-none pointer-events-none">
                      <div className="w-full max-w-[540px]">
                        <ArcscapeCurvedLogo size="large"/>
                      </div>
                    </motion.div>
                  </div>

                  {/* scroll indicator */}
                  <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2,duration:0.8}}
                    className="flex items-center gap-3 mt-16">
                    <motion.div className="h-6 w-px" style={{background:'var(--border)'}}
                      animate={{scaleY:[1,0.4,1]}} transition={{duration:2,repeat:Infinity,ease:'easeInOut'}}/>
                    <span className="font-mono text-[8px] uppercase tracking-[0.25em]" style={{color:'var(--text-3)'}}>Scroll to explore</span>
                  </motion.div>
                </div>
              </div>

              {/* ── TICKER ──────────────────────────────────────── */}
              <div className="w-full border-y overflow-hidden py-3 mb-12" style={{borderColor:'var(--border)', background:'var(--bg-2)'}}>
                <div className="ticker-inner flex gap-0 whitespace-nowrap" style={{width:'max-content'}}>
                  {[...tickerItems,...tickerItems].map((item,i)=>(
                    <span key={i} className="inline-flex items-center gap-4 px-6 font-mono text-[9px] uppercase tracking-widest" style={{color:'var(--text-3)'}}>
                      <span style={{color:'var(--accent)'}}>◆</span>{item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Domain Tabs */}
              <div className="w-full mb-14 z-10 reveal"><DomainTabs/></div>

              {/* Category filter */}
              <div className="w-full mb-8 z-10">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-[#C4783A] font-bold">Venture Portfolio</span>
                  <span className="flex-1 h-px bg-[#2E2B24]"/>
                </div>
                <div className="flex flex-wrap items-center gap-x-1 gap-y-2">
                  {(['All','AI & Deep Tech','Wellness & Life','Enterprise & Tools'] as const).map((cat,i)=>(
                    <React.Fragment key={cat}>
                      {i>0 && <span className="text-[#2E2B24] font-mono text-[10px] mx-1">/</span>}
                      <button onClick={()=>setSelectedCategory(cat)}
                        className={`relative px-2 py-1 font-mono text-[9.5px] uppercase tracking-wider font-bold transition-all cursor-pointer ${selectedCategory===cat?'text-[#EDE8DF]':'text-[#7A7367] hover:text-[#EDE8DF]'}`}>
                        {cat}
                        {selectedCategory===cat && <motion.span layoutId="catLine" className="absolute bottom-[-2px] left-2 right-2 h-px bg-[#C4783A]"/>}
                      </button>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Projects grid */}
              <div id="portfolio-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full z-10 mb-24">
                {filteredProjects.map((project,idx)=>(
                  <motion.article key={project.domain}
                    initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-50px"}}
                    transition={{duration:0.55,delay:idx*0.05,ease:[0.16,1,0.3,1]}}
                    onClick={()=>{setActiveView(project.viewState as ViewType);window.scrollTo({top:0,behavior:'smooth'});}}
                    className="group relative bg-[#1A1814] border border-[#2E2B24] hover:border-[#C4783A] transition-all duration-400 cursor-pointer flex flex-col overflow-hidden card-glow accent-bar"
                  >
                    {/* top image area */}
                    <div className="relative w-full h-[140px] bg-[#111008] flex items-center justify-center overflow-hidden shrink-0">
                      {/* hover shimmer overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#C4783A]/0 via-[#C4783A]/0 to-[#C4783A]/0 group-hover:from-[#C4783A]/5 group-hover:via-[#C4783A]/3 group-hover:to-transparent transition-all duration-500"/>
                      {/* status badge */}
                      <div className="absolute top-3 right-3 z-20">
                        <span className={`font-mono text-[7.5px] uppercase tracking-wider px-2 py-0.5 font-bold border ${project.status==='Active'?'text-emerald-400 bg-emerald-950 border-emerald-800':project.status==='Ready'?'text-sky-400 bg-sky-950 border-sky-800':'text-[#7A7367] bg-[#1A1814] border-[#2E2B24]'}`}>{project.status}</span>
                      </div>
                      {/* large background icon */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 overflow-hidden opacity-10 group-hover:opacity-25 group-hover:scale-110 transition-all duration-600">
                        {React.cloneElement(getProjectIcon(project.domain),{ className:"w-[200px] h-[200px] text-[#C4783A]" })}
                      </div>
                      {/* category label */}
                      <div className="absolute bottom-3 left-3 z-20">
                        <span className="font-mono text-[7.5px] uppercase tracking-widest text-[#7A7367] font-bold group-hover:text-[#C4783A] transition-colors duration-300">{project.category}</span>
                      </div>
                      {/* number */}
                      <div className="absolute top-3 left-3 z-20">
                        <span className="font-mono text-[8px] text-[#2E2B24] group-hover:text-[#3A3630] transition-colors font-bold">
                          {String(projectsData.indexOf(project)+1).padStart(2,'0')}
                        </span>
                      </div>
                    </div>

                    {/* body */}
                    <div className="p-4 flex flex-col flex-1 gap-3">
                      <div>
                        <h3 className="font-serif text-[15px] font-normal text-[#EDE8DF] group-hover:text-[#C4783A] transition-colors duration-300 leading-tight">
                          {project.domain}
                        </h3>
                        <p className="font-sans text-[11px] text-[#7A7367] mt-1.5 leading-relaxed line-clamp-2 group-hover:text-[#9C9188] transition-colors duration-300">
                          {getShortTagline(project.tagline)}
                        </p>
                      </div>
                      {/* tech tags */}
                      <div className="flex flex-wrap gap-1 mt-auto">
                        {getProjectTech(project.domain).map(t=>(
                          <span key={t} className="font-mono text-[7.5px] uppercase tracking-wide text-[#7A7367] bg-[#222018] border border-[#2E2B24] px-1.5 py-0.5 group-hover:border-[#3A3630] transition-colors">{t}</span>
                        ))}
                      </div>
                      {/* actions */}
                      <div className="flex items-center gap-2 pt-2 border-t border-[#222018]">
                        <button onClick={e=>{e.stopPropagation();setActiveView(project.viewState as ViewType);window.scrollTo({top:0,behavior:'smooth'});}}
                          className="flex-1 text-center py-1.5 font-mono text-[8.5px] uppercase tracking-wider font-bold text-[#7A7367] hover:text-[#EDE8DF] transition-colors border border-[#2E2B24] hover:border-[#C4783A] cursor-pointer">
                          Details
                        </button>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()}
                          className="flex-1 flex items-center justify-center gap-1 py-1.5 font-mono text-[8.5px] uppercase tracking-wider font-bold text-[#0F0E0C] bg-[#C4783A] hover:bg-[#E8A96A] transition-colors cursor-pointer">
                          Visit <ArrowUpRight className="w-2.5 h-2.5"/>
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          )}

          {/* ── DASHBOARD ─────────────────────────────────────── */}
          {activeView==='dashboard' && (
            <motion.section key="dashboard" initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} className="space-y-8 w-full">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#1A1814] border border-[#2E2B24] p-6 sm:p-8">
                <div className="space-y-1">
                  <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"/><span className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest font-bold">Authenticated Partner Session</span></div>
                  <h2 className="font-serif text-2xl font-light text-[#EDE8DF]">Venture Capital &amp; Portfolio Registry</h2>
                  <p className="text-xs text-[#7A7367]">Real-time strategic incubation metrics, cohort stages, and capital allocations.</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={()=>{setPassword('');setActiveView('portal');}} className="px-4 py-2 border border-[#2E2B24] hover:border-[#C4783A] text-[#7A7367] hover:text-[#EDE8DF] font-mono text-[9px] uppercase tracking-wider transition-all cursor-pointer font-bold">Lock Session</button>
                  <button onClick={()=>setActiveView('support')} className="px-4 py-2 bg-[#C4783A] hover:bg-[#E8A96A] text-[#0F0E0C] font-mono text-[9px] uppercase tracking-wider transition-all cursor-pointer font-bold">Advisor Desk</button>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[['Active Incubations','12','+2 Current Cohort'],['Asset Capital','$45.8M','Committed'],['Registry Status',null,null]].map(([label,val,sub],i)=>(
                  <div key={i} className="bg-[#1A1814] p-5 border border-[#2E2B24] space-y-1.5 card-glow">
                    <span className="font-mono text-[9px] text-[#7A7367] uppercase tracking-widest block">{label}</span>
                    {i<2 ? <div className="flex items-baseline gap-1.5"><span className="font-serif text-3xl font-light text-[#EDE8DF]">{val}</span><span className="text-[#C4783A] text-[10px] font-mono font-bold">{sub}</span></div>
                      : <div className="flex items-center gap-1.5"><CheckCircle2 className="h-5 w-5 text-emerald-500"/><span className="font-mono text-[11px] text-[#EDE8DF] font-bold uppercase">All Systems Verified</span></div>}
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <h3 className="font-serif text-lg text-[#EDE8DF]">Active Investment Portfolio</h3>
                  <div className="relative w-full sm:w-64">
                    <input type="text" placeholder="Filter ventures…" value={dashboardSearch} onChange={e=>setDashboardSearch(e.target.value)}
                      className="w-full bg-[#1A1814] border border-[#2E2B24] focus:border-[#C4783A] pl-8 pr-3 py-1.5 text-xs font-mono placeholder-[#7A7367] text-[#EDE8DF] focus:outline-none transition-colors"/>
                    <Search className="absolute left-2.5 top-2 h-3.5 w-3.5 text-[#7A7367]"/>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredVentures.map((v,i)=>(
                    <div key={i} className="bg-[#1A1814] p-5 border border-[#2E2B24] space-y-4 card-glow">
                      <div className="flex justify-between items-start">
                        <div><h4 className="font-serif font-medium text-[#EDE8DF] text-base">{v.name}</h4><span className="font-mono text-[9px] uppercase text-[#7A7367] tracking-wider">{v.industry}</span></div>
                        <span className="font-mono text-[9px] bg-[#222018] border border-[#2E2B24] px-2 py-0.5 text-[#7A7367] uppercase font-bold">{v.stage}</span>
                      </div>
                      <p className="text-xs text-[#7A7367] leading-relaxed">{v.desc}</p>
                      <div className="pt-2 border-t border-[#222018] space-y-2">
                        <div className="flex justify-between text-[11px] font-mono"><span className="text-[#7A7367]">Capital:</span><span className="text-[#EDE8DF] font-bold">{v.allocation}</span></div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-[9px] font-mono text-[#7A7367]"><span>Progress</span><span>{v.progress}%</span></div>
                          <div className="h-1 bg-[#222018] overflow-hidden"><motion.div className="h-full bg-[#C4783A]" initial={{width:0}} whileInView={{width:`${v.progress}%`}} transition={{duration:1,ease:"easeOut"}} viewport={{once:true}}/></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* ── ABOUT ─────────────────────────────────────────── */}
          {activeView==='about' && (
            <motion.section key="about" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="max-w-3xl mx-auto w-full py-6">
              <BackBtn to="portal"/>
              <SectionHeader ref_code="Ref: AC-ABOUT"><h2 className="font-serif text-3xl font-light text-[#EDE8DF]">Who We Are</h2></SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <div className="md:col-span-2 space-y-5 reveal">
                  <p className="font-serif text-lg text-[#EDE8DF] leading-relaxed font-light">Arcscape Capital operates as a bespoke venture development team and institutional investment firm. We organise, seed, and build dynamic consumer-facing brands and computational startups that define their niche rather than conforming to legacy markets.</p>
                  <p className="text-[#7A7367] text-sm leading-relaxed">We believe authentic venture architecture requires deep design alignment, mathematical capitalisation modelling, and a profound commitment to usability over modern aesthetic trendiness. We focus on structural longevity, robust compliance standards, and sustainable cash-flow mechanics.</p>
                  <p className="text-[#7A7367] text-sm leading-relaxed">Through patient capital and direct stewardship, we build alongside our founders from the initial protocol layer up to consumer launch.</p>
                </div>
                <div className="bg-[#1A1814] p-5 border border-[#2E2B24] space-y-5 reveal-right">
                  <h4 className="font-mono text-[9px] text-[#7A7367] uppercase tracking-widest border-b border-[#2E2B24] pb-2 font-bold">Firm Mandates</h4>
                  {[['Patient Incubation','We seed businesses with no arbitrary exit timelines.'],['Regulatory Fidelity','Every asset structured to comply with global frameworks.'],['Design Excellence','No templates. Every viewport crafted from first-principles.']].map(([t,d])=>(
                    <div key={t} className="space-y-1 group">
                      <h5 className="font-mono text-[9px] text-[#C4783A] font-bold uppercase tracking-wide group-hover:text-[#E8A96A] transition-colors">{t}</h5>
                      <p className="text-[11px] text-[#7A7367] leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-8 border-t border-[#2E2B24] mt-8 flex justify-center">
                <button onClick={()=>{setActiveView('support');window.scrollTo({top:0,behavior:'smooth'});}}
                  className="px-7 py-3 bg-[#C4783A] hover:bg-[#E8A96A] text-[#0F0E0C] font-mono text-[9px] uppercase tracking-widest font-bold transition-all cursor-pointer">
                  Contact Our Partners
                </button>
              </div>
            </motion.section>
          )}

          {/* ── SUPPORT ───────────────────────────────────────── */}
          {activeView==='support' && (
            <motion.section key="support" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="max-w-2xl mx-auto w-full py-6">
              <BackBtn to="portal"/>
              <SectionHeader ref_code="Ref: AC-SUPPORT"><h2 className="font-serif text-3xl font-light text-[#EDE8DF]">Contact Us</h2></SectionHeader>

              <div className="space-y-10">
                <p className="text-[#7A7367] text-sm leading-relaxed reveal">
                  For any queries, support, or general correspondence — reach out directly to our team. We respond to all partner, venture, and press enquiries personally.
                </p>

                {/* Big email CTA */}
                <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.15,duration:0.7,ease:[0.16,1,0.3,1]}}
                  className="bg-[#161410] border border-[#2A2720] p-10 flex flex-col items-center text-center space-y-6 sweep card">
                  <div className="h-14 w-14 rounded-full bg-[#C4783A]/10 border border-[#C4783A]/30 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#C4783A]"/>
                  </div>
                  <div className="space-y-2">
                    <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#6B6459] font-bold">Direct Contact</p>
                    <a href="mailto:tito@arcscape.com"
                      className="font-serif text-3xl sm:text-4xl text-[#E8E2D6] hover:text-[#C4783A] transition-colors duration-300 block ul-link">
                      tito@arcscape.com
                    </a>
                  </div>
                  <p className="text-[#6B6459] text-sm max-w-sm leading-relaxed">
                    Reach out for LP inquiries, venture pitches, advisory nominations, or general correspondence.
                  </p>
                  <a href="mailto:tito@arcscape.com"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C4783A] hover:bg-[#E8A96A] text-[#0C0B09] font-mono text-[9px] uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer">
                    <Mail className="h-3.5 w-3.5"/>
                    Send Email
                  </a>
                </motion.div>

                {/* Three contact reason cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 stagger is-visible">
                  {[
                    ['LP Inquiry','Interested in becoming a Limited Partner or joining our syndicate network.'],
                    ['Venture Pitch','Building something exceptional and want Arcscape to be part of the journey.'],
                    ['General','Press, advisory nominations, partnerships, or any other correspondence.'],
                  ].map(([title, desc]) => (
                    <a key={title} href="mailto:tito@arcscape.com"
                      className="bg-[#161410] border border-[#2A2720] p-5 space-y-2 card sweep cursor-pointer block">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#C4783A] font-bold block">{title}</span>
                      <p className="text-[#6B6459] text-xs leading-relaxed">{desc}</p>
                    </a>
                  ))}
                </div>

                <p className="text-center font-mono text-[10px] text-[#6B6459] reveal">
                  We aim to respond within one business day.
                </p>
              </div>
            </motion.section>
          )}

          {/* ── LOGIN HELP ────────────────────────────────────── */}
          {activeView==='login-help' && (
            <motion.section key="login-help" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="max-w-2xl mx-auto w-full py-6">
              <BackBtn to="portal"/>
              <SectionHeader ref_code="Ref: AC-ACCESS"><h2 className="font-serif text-3xl font-light text-[#EDE8DF]">Access Support</h2></SectionHeader>
              <p className="font-serif text-lg text-[#7A7367] leading-relaxed font-light mb-8">If you are experiencing difficulty accessing the partner portal, please review these standard guidelines.</p>
              <div className="space-y-3">
                {[['I forgot my credentials. How do I reset?','Credential resets cannot be performed automatically. Please contact your dedicated Arcscape advisory partner directly to verify your identity.'],['Who is authorised to access the dashboard?','Access is restricted to active Limited Partners, syndicate members, and authorised venture founders who have completed our onboarding protocols.'],['Does the portal use browser cookies?','Yes — standard secure encrypted session cookies solely for authentication. No tracking data. Auto-cleared after 12 hours of inactivity.']].map(([q,a])=>(
                  <div key={q} className="bg-[#1A1814] border border-[#2E2B24] hover:border-[#C4783A] transition-colors p-5 space-y-2 group cursor-default">
                    <h4 className="font-serif font-medium text-[#EDE8DF] text-sm group-hover:text-[#C4783A] transition-colors">{q}</h4>
                    <p className="text-[#7A7367] text-xs leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
              <div className="pt-6 text-center"><button onClick={()=>{setActiveView('support');window.scrollTo({top:0,behavior:'smooth'});}} className="font-mono text-[9px] text-[#C4783A] hover:text-[#E8A96A] uppercase tracking-wider font-bold transition-colors">Open Direct Communication Channel →</button></div>
            </motion.section>
          )}

          {/* ── SEED INCUBATOR ────────────────────────────────── */}
          {activeView==='seed-incubator' && (
            <motion.section key="seed-incubator" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="max-w-3xl mx-auto w-full py-6">
              <BackBtn to="portal"/>
              <SectionHeader ref_code="Ref: AC-INCUBATOR"><h2 className="font-serif text-3xl font-light text-[#EDE8DF]">Stealth Seed Incubator</h2></SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="md:col-span-2 space-y-4 reveal-left"><p className="font-serif text-lg text-[#EDE8DF] font-light leading-relaxed">Arcscape's seed incubator focuses on scaling highly specific digital consumer brands and computational hardware labs. We bring in 2–3 early teams per cohort.</p><p className="text-[#7A7367] text-sm leading-relaxed">Rather than pushing teams to expand rapidly, we prioritise extreme efficiency, helping founders remain highly capitalised while focusing purely on perfect engineering.</p></div>
                <div className="bg-[#1A1814] p-5 border border-[#2E2B24] space-y-3 reveal-right"><h4 className="font-mono text-[9px] text-[#7A7367] uppercase tracking-widest border-b border-[#2E2B24] pb-2 font-bold">Cohort Focus</h4><p className="text-[11px] text-[#7A7367] leading-relaxed">Limited to 3 stealth initiatives per annual cycle. Bespoke capital guaranteed.</p></div>
              </div>
              <div className="space-y-0 border-t border-[#2E2B24]">
                {[['Phase 1: First-Principles Alignment','We dismantle the product to its most basic formulas, designing a proprietary market category.'],['Phase 2: Layout & Interface Precision','Our in-house design studio engineers every brand element and digital layout for sensory clarity.'],['Phase 3: Tactical Resource Matching','We inject the final seed capital and establish syndicates with verified co-investment partners.']].map(([t,d],i)=>(
                  <motion.div key={t} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} transition={{delay:i*0.1,duration:0.5}} viewport={{once:true}} className="py-6 border-b border-[#2E2B24] flex gap-5 items-start group">
                    <span className="font-mono text-[10px] text-[#C4783A] font-black tracking-wider shrink-0 pt-0.5">0{i+1}</span>
                    <div><h4 className="font-mono text-[9px] font-bold text-[#EDE8DF] uppercase tracking-wider mb-1 group-hover:text-[#C4783A] transition-colors">{t}</h4><p className="text-[11px] text-[#7A7367] leading-relaxed">{d}</p></div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ── TARGET ARBITRAGE ──────────────────────────────── */}
          {activeView==='target-arbitrage' && (
            <motion.section key="target-arb" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="max-w-3xl mx-auto w-full py-6">
              <BackBtn to="portal"/>
              <SectionHeader ref_code="Ref: AC-ARBITRAGE"><h2 className="font-serif text-3xl font-light text-[#EDE8DF]">Computational Arbitrage</h2></SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-4"><p className="font-serif text-lg text-[#EDE8DF] font-light leading-relaxed">Our Target Arbitrage framework matches early-stage pricing mismatches with long-term capital structures, preserving equity for founders.</p><p className="text-[#7A7367] text-sm leading-relaxed">Use the calculator to evaluate estimated monthly arbitrage liquidity parameters.</p></div>
                <div className="bg-[#1A1814] p-5 border border-[#2E2B24] space-y-5">
                  <h3 className="font-mono text-[9px] text-[#7A7367] uppercase tracking-widest border-b border-[#2E2B24] pb-2 font-bold">Arbitrage Calculator</h3>
                  <div className="space-y-4">
                    <div className="space-y-1"><div className="flex justify-between font-mono text-[9px] text-[#7A7367] uppercase"><span>Capital</span><span className="text-[#EDE8DF] font-bold">${calcCapital.toLocaleString()}</span></div><input type="range" min="50000" max="1000000" step="25000" value={calcCapital} onChange={e=>setCalcCapital(Number(e.target.value))} className="w-full accent-[#C4783A]"/></div>
                    <div className="space-y-1"><div className="flex justify-between font-mono text-[9px] text-[#7A7367] uppercase"><span>Spread</span><span className="text-[#EDE8DF] font-bold">{calcArbitrageRate}%</span></div><input type="range" min="1.5" max="8.0" step="0.1" value={calcArbitrageRate} onChange={e=>setCalcArbitrageRate(Number(e.target.value))} className="w-full accent-[#C4783A]"/></div>
                  </div>
                  <div className="bg-[#111008] p-4 border border-[#2E2B24] flex flex-col items-center gap-2 font-mono text-center">
                    <span className="text-[8px] text-[#7A7367] uppercase tracking-widest font-bold">Est. Yield / Mo</span>
                    <span className="text-2xl font-bold text-[#C4783A]">${Math.round(calcCapital*(calcArbitrageRate/100)).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </motion.section>
          )}

          {/* ── STRATEGIC PARTNERSHIPS ────────────────────────── */}
          {activeView==='strategic-partnerships' && (
            <motion.section key="strat-part" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="max-w-3xl mx-auto w-full py-6">
              <BackBtn to="portal"/>
              <SectionHeader ref_code="Ref: AC-SYNDICATES"><h2 className="font-serif text-3xl font-light text-[#EDE8DF]">Institutional Syndicates</h2></SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="md:col-span-2 space-y-4"><p className="font-serif text-lg text-[#EDE8DF] font-light leading-relaxed">Arcscape aligns with global investment syndicates, technology laboratories, and academic networks, giving ventures immediate access to distribution networks and regulatory advising.</p><p className="text-[#7A7367] text-sm leading-relaxed">All partners operate under strict confidentiality clauses.</p></div>
                <div className="bg-[#1A1814] p-5 border border-[#2E2B24] space-y-3"><h4 className="font-mono text-[9px] text-[#7A7367] uppercase tracking-widest border-b border-[#2E2B24] pb-2 font-bold">Security</h4><p className="text-[11px] text-[#7A7367] leading-relaxed">All syndicate identities encrypted within client-side sessions.</p></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[['ACADEMIC CORE','Zurich Materials Labs','Collaborative testing for carbon-capture silicones and facade-related glass panels.'],['CO-INVESTMENT DESK','Valkyrie Holdings','A multi-family office providing deep liquidity during early-scale Series A transitions.']].map(([b,n,d])=>(
                  <div key={n} className="bg-[#1A1814] p-5 border border-[#2E2B24] hover:border-[#C4783A] transition-colors space-y-2">
                    <span className="font-mono text-[8px] uppercase text-[#C4783A] font-black tracking-widest block">{b}</span>
                    <h4 className="font-serif font-semibold text-[#EDE8DF] text-sm">{n}</h4>
                    <p className="text-[11px] text-[#7A7367] leading-relaxed">{d}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ── SEED NETWORK ──────────────────────────────────── */}
          {activeView==='seed-network' && (
            <motion.section key="seed-net" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="max-w-3xl mx-auto w-full py-6">
              <BackBtn to="portal"/>
              <SectionHeader ref_code="Ref: AC-SEED-NET"><h2 className="font-serif text-3xl font-light text-[#EDE8DF]">Incubation Advisor Network</h2></SectionHeader>
              <p className="font-serif text-lg text-[#7A7367] font-light leading-relaxed mb-8 max-w-2xl">Our portfolio companies are supported by an elite circle of multi-disciplinary experts spanning materials physics, logic computing, and aesthetic design.</p>
              <div className="border-t border-[#2E2B24]">
                {[{name:'Dr. Marcus Vance',role:'Principal, Materials Science & Solid Mechanics',details:'Former Director of Zurich Materials Lab. Advises on computational metallurgy, advanced thermal design, and physical materials testing.'},{name:'Elena Rostova',role:'Managing Partner, Interface Architecture',details:'Formerly Design Partner at Tokyo Studio. Leads typographic standards, responsive UX research, and cognitive design integrity.'},{name:'Julius Vane',role:'Partner, Capital Structures & Quantitative Arbitrage',details:'Expert in capitalisation models, risk hedging, and LP compliance. Guides early stage companies through structuring mechanics.'}].map((a,i)=>(
                  <motion.div key={a.name} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.1}} viewport={{once:true}} className="py-6 border-b border-[#2E2B24] flex flex-col md:flex-row gap-4 items-start justify-between group">
                    <div className="space-y-0.5 md:max-w-[240px]"><h4 className="font-serif text-lg font-medium text-[#EDE8DF] group-hover:text-[#C4783A] transition-colors">{a.name}</h4><span className="font-mono text-[9px] uppercase text-[#C4783A] tracking-wider block font-bold">{a.role}</span></div>
                    <p className="text-[#7A7367] text-sm leading-relaxed max-w-lg font-serif">{a.details}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}

          {/* ── COMPLIANCE BOARD ──────────────────────────────── */}
          {activeView==='compliance-board' && (
            <motion.section key="compliance" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="max-w-3xl mx-auto w-full py-6">
              <BackBtn to="portal"/>
              <SectionHeader ref_code="Ref: AC-GOVERNANCE"><h2 className="font-serif text-3xl font-light text-[#EDE8DF]">Governance &amp; LP Standards</h2></SectionHeader>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-6">
                  <p className="font-serif text-lg text-[#7A7367] font-light leading-relaxed">To protect partner capital and incubated venture IP, Arcscape Capital maintains a high standard of operational governance.</p>
                  {[['GOVERNANCE STANDARD I','Partner Accreditation','All prospective LPs undergo thorough eligibility and regulatory accreditation checks.'],['GOVERNANCE STANDARD II','Capital Deployment','Deployments follow a structured stage-gate approach with independent accounting reviews.'],['GOVERNANCE STANDARD III','IP Protection','Research generated within stealth cohorts is protected by robust NDAs and secure physical operations.']].map(([b,t,d],i)=>(
                    <div key={b} className={`space-y-1.5 ${i>0?'border-t border-[#2E2B24] pt-5':''}`}>
                      <span className="font-mono text-[9px] uppercase text-[#C4783A] font-bold tracking-wider">{b}</span>
                      <h4 className="font-serif font-medium text-base text-[#EDE8DF]">{t}</h4>
                      <p className="text-[#7A7367] text-sm leading-relaxed">{d}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-[#1A1814] border border-[#2E2B24] p-5 space-y-4 self-start">
                  <h4 className="font-mono text-[9px] text-[#7A7367] uppercase tracking-widest border-b border-[#2E2B24] pb-2 font-bold">Company Details</h4>
                  {[['Jurisdiction','Zug, Switzerland'],['Board','Independent Financial Board'],['Reporting','Quarterly Partner Valuations'],['Last Review','Q2 2026 // Complete']].map(([k,v])=>(
                    <div key={k} className="space-y-0.5"><span className="font-mono text-[9px] text-[#7A7367] block uppercase tracking-wider">{k}</span>
                      {k==='Last Review'?<span className="font-mono text-[9px] text-emerald-400 font-bold bg-emerald-950 border border-emerald-800 px-2 py-0.5 inline-block uppercase">{v}</span>:<span className="font-serif text-xs text-[#EDE8DF] font-semibold block">{v}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {/* ── HR ADVISORY ───────────────────────────────────── */}
          {activeView==='hr-advisory' && (
            <motion.section key="hr-adv" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="max-w-3xl mx-auto w-full py-6">
              <BackBtn to="portal"/>
              <SectionHeader ref_code="Ref: AC-HUMAN-CAP"><h2 className="font-serif text-3xl font-light text-[#EDE8DF]">Human Capital Advisory</h2></SectionHeader>
              <p className="font-serif text-lg text-[#7A7367] font-light leading-relaxed mb-8">A beautiful venture is defined not by scale, but by the focus of its operators. We act as private talent scouts for our incubated stealth companies.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[{t:'Venture Architect (In-Residence)',l:'Zurich / Hybrid',d:'Work directly alongside general partners to map capital structures and build early MVPs for stealth cohort ventures.'},{t:'Principal Protocol Engineer',l:'Tokyo / Remote',d:'Lead kernel-level implementation and secure distributed routing for a stealth security-first enterprise company.'},{t:'Lead Visual & UX Designer',l:'Geneva / On-Site',d:'Establish strict typographic systems, custom icon libraries, and pristine web views. Design precision mandatory.'},{t:'Materials Optimisation Researcher',l:'Munich / Labs',d:'Analyse thermal characteristics and crystalline structures for next-generation tactile hardware. PhD preferred.'}].map(j=>(
                  <div key={j.t} className="p-6 border border-[#2E2B24] bg-[#1A1814] space-y-3 hover:border-[#C4783A] transition-colors group">
                    <div><span className="font-mono text-[9px] uppercase text-[#C4783A] tracking-wider font-bold block">{j.l}</span><h5 className="font-serif text-base font-medium text-[#EDE8DF]">{j.t}</h5></div>
                    <p className="text-[#7A7367] text-xs leading-relaxed">{j.d}</p>
                    <button onClick={()=>{setActiveView('support');window.scrollTo({top:0,behavior:'smooth'});}} className="text-[9px] font-mono uppercase tracking-wider font-bold text-[#7A7367] hover:text-[#C4783A] transition-colors block">Inquire About Role →</button>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-[#2E2B24] text-center space-y-4">
                <p className="text-xs text-[#7A7367] font-serif italic">Are you a hyper-focused practitioner ready for first-principles venture architecture?</p>
                <button onClick={()=>{setActiveView('support');window.scrollTo({top:0,behavior:'smooth'});}} className="px-7 py-3 bg-[#C4783A] hover:bg-[#E8A96A] text-[#0F0E0C] font-mono text-[9px] uppercase tracking-widest font-bold transition-all cursor-pointer">Submit Private CV</button>
              </div>
            </motion.section>
          )}

          {/* ── REGISTERED PARTNERS ───────────────────────────── */}
          {activeView==='registered-partners' && (
            <motion.section key="reg-part" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} className="max-w-2xl mx-auto w-full py-6">
              <BackBtn to="portal"/>
              <SectionHeader ref_code="Ref: AC-LP-CHECKLIST"><h2 className="font-serif text-3xl font-light text-[#EDE8DF]">Onboarding LP Checklist</h2></SectionHeader>
              <p className="font-serif text-lg text-[#7A7367] font-light leading-relaxed mb-8">To complete your registration as a verified Limited Partner, please complete the following four onboarding steps.</p>
              <div className="bg-[#1A1814] border border-[#2E2B24] divide-y divide-[#222018] overflow-hidden mb-6">
                {[{id:'step1',num:'01',title:'Partner Verification',desc:'Verify your identity with your dedicated Arcscape relationship lead.'},{id:'step2',num:'02',title:'LP Agreement',desc:'Review, execute, and submit the confidential Limited Partner Master Agreement.'},{id:'step3',num:'03',title:'Accreditation',desc:'Confirm your accredited investor status in compliance with local regulations.'},{id:'step4',num:'04',title:'Account Activation',desc:'Receive your verification link and configure credentials for secure portal access.'}].map(step=>{
                  const checked=checkedSteps[step.id];
                  return (
                    <div key={step.id} onClick={()=>setCheckedSteps({...checkedSteps,[step.id]:!checked})} className="p-6 flex gap-5 items-start cursor-pointer hover:bg-[#1E1C17] transition-colors group select-none">
                      <button type="button" className={`h-6 w-6 shrink-0 border flex items-center justify-center transition-all mt-0.5 ${checked?'bg-[#C4783A] border-[#C4783A] text-[#0F0E0C]':'bg-transparent border-[#2E2B24] text-transparent group-hover:border-[#C4783A]'}`}><Check className="h-3.5 w-3.5 stroke-[2.5]"/></button>
                      <div className="space-y-0.5"><div className="flex items-center gap-2"><span className="font-mono text-[9px] text-[#C4783A] font-bold tracking-wider">{step.num}</span><h4 className={`font-serif text-base font-medium transition-colors ${checked?'text-[#7A7367] line-through':'text-[#EDE8DF]'}`}>{step.title}</h4></div><p className={`text-xs leading-relaxed transition-colors ${checked?'text-[#3A3630]':'text-[#7A7367]'}`}>{step.desc}</p></div>
                    </div>
                  );
                })}
              </div>
              <div className="p-5 bg-[#1A1814] border border-[#2E2B24] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] text-[#7A7367] uppercase tracking-wider font-bold">Progress</span>
                  <div className="h-1.5 w-32 bg-[#222018] overflow-hidden"><div className="h-full bg-[#C4783A] transition-all duration-500" style={{width:`${(Object.values(checkedSteps).filter(Boolean).length/4)*100}%`}}/></div>
                  <span className="font-mono text-xs font-black text-[#EDE8DF]">{Object.values(checkedSteps).filter(Boolean).length}/4</span>
                </div>
                {Object.values(checkedSteps).filter(Boolean).length===4
                  ? <button onClick={()=>setIsLoginOpen(true)} className="px-4 py-2 bg-[#C4783A] text-[#0F0E0C] hover:bg-[#E8A96A] font-mono text-[9px] uppercase tracking-wider font-bold flex items-center gap-1.5 cursor-pointer transition-colors"><Lock className="h-3 w-3"/>Proceed to Login</button>
                  : <span className="font-mono text-[9px] uppercase text-[#7A7367] tracking-wider font-bold">Complete all 4 steps</span>}
              </div>
            </motion.section>
          )}

          {/* ── PROJECT DETAIL ────────────────────────────────── */}
          {activeView.startsWith('project-') && (
            <ProjectDetailView viewState={activeView} onBack={()=>{setActiveView('portal');window.scrollTo({top:0,behavior:'smooth'});}} failedImages={failedImages} setFailedImages={setFailedImages}/>
          )}

        </AnimatePresence>
      </div>

      {/* ════ FOOTER ═══════════════════════════════════════════ */}
      <footer className="w-full border-t border-[#2E2B24] bg-[#0A0908] z-10">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-16 pt-14 pb-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-[#2E2B24] pb-10 reveal">
            <div className="space-y-3">
              <div className="w-40 overflow-visible"><ArcscapeCurvedLogo size="normal"/></div>
              <p className="font-serif text-sm text-[#7A7367] font-light max-w-xs leading-relaxed">A boutique investment syndicate building category-defining ventures from Zug, Switzerland.</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#7A7367]">Secure Line</span>
              <span className="font-mono text-[11px] text-[#EDE8DF] font-bold">partners@arcscape.capital</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 reveal-stagger is-visible">
            <div className="space-y-4">
              <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#7A7367] font-extrabold pb-2.5 border-b border-[#2E2B24]">Offices &amp; Contact</h4>
              <div className="space-y-3 text-xs text-[#7A7367] leading-relaxed font-serif">
                <p className="font-mono font-bold text-[10px] text-[#EDE8DF] uppercase">ARCSCAPE CAPITAL</p>
                <p>Zug: Poststrasse 14, 6300 Zug, Switzerland</p>
                <p>Zürich: Talstrasse 83, 8001 Zürich, Switzerland</p>
                <p className="font-mono text-[9px] pt-1">partners@arcscape.capital</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#7A7367] font-extrabold pb-2.5 border-b border-[#2E2B24]">Venture Portfolios</h4>
              <ul className="space-y-2.5 text-xs">
                {([['AI & Deep Tech','AI & Deep Tech'],['Wellness & Life','Wellness & Life'],['Enterprise & Tools','Enterprise & Tools'],['All Active Holdings','All']] as const).map(([label,cat])=>(
                  <li key={label}><button onClick={()=>{setActiveView('portal');setSelectedCategory(cat as any);setTimeout(()=>{document.getElementById('portfolio-section')?.scrollIntoView({behavior:'smooth'});},100);}} className="text-[#7A7367] hover:text-[#C4783A] transition-colors cursor-pointer link-underline font-medium">{label}</button></li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#7A7367] font-extrabold pb-2.5 border-b border-[#2E2B24]">Partner Channels</h4>
              <ul className="space-y-2.5 text-xs">
                {[['Onboarding LP Checklist','registered-partners'],['Partner Support Desk','support'],['Access Support','login-help']].map(([label,view])=>(
                  <li key={view}><button onClick={()=>{setActiveView(view as ViewType);window.scrollTo({top:0,behavior:'smooth'});}} className="text-[#7A7367] hover:text-[#C4783A] transition-colors cursor-pointer link-underline font-medium">{label}</button></li>
                ))}
                <li><button onClick={()=>setIsLoginOpen(true)} className="text-[#C4783A] hover:text-[#E8A96A] transition-colors cursor-pointer font-bold flex items-center gap-1.5 link-underline"><Lock className="h-3 w-3"/>Partner Portal Entry</button></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-mono text-[#7A7367] pt-6 border-t border-[#2E2B24]">
            <div className="flex items-center gap-3">
              <button onClick={()=>{setActiveView('portal');window.scrollTo({top:0,behavior:'smooth'});}} className="flex items-center gap-1.5 hover:text-[#EDE8DF] transition-colors cursor-pointer">
                <ArcscapeEmblem size="small"/><span className="font-bold tracking-widest text-[#C4783A] uppercase">ARCSCAPE</span>
              </button>
              <span>·</span><span>Venture Partners</span>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={()=>showToast('Qualified Partners Only')} className="hover:text-[#EDE8DF] transition-colors cursor-pointer">Disclosures</button>
              <span>·</span>
              <button onClick={()=>showToast('Terms: Authorised Partners Only')} className="hover:text-[#EDE8DF] transition-colors cursor-pointer">Terms</button>
              <span>·</span>
              <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})} className="hover:text-[#C4783A] transition-colors cursor-pointer flex items-center gap-1">Top ↑</button>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Toast ─────────────────────────────────────────────── */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div initial={{opacity:0,y:40,scale:0.96}} animate={{opacity:1,y:0,scale:1}} exit={{opacity:0,y:16,scale:0.96}}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1A1814] border border-[#2E2B24] text-[#EDE8DF] px-4 py-3 font-mono text-[10px] uppercase tracking-wider" role="alert">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C4783A] animate-pulse"/>{toastMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Login Modal ───────────────────────────────────────── */}
      <AnimatePresence>
        {isLoginOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setIsLoginOpen(false)} className="absolute inset-0 bg-[#0F0E0C]/80 backdrop-blur-sm"/>
            <motion.div initial={{opacity:0,scale:0.96,y:16}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:0.96,y:16}}
              className="bg-[#1A1814] border border-[#2E2B24] max-w-sm w-full p-7 relative z-10 space-y-5">
              <div className="flex justify-between items-start">
                <div><span className="font-mono text-[8px] uppercase tracking-widest text-[#C4783A] font-bold">PARTNER LOGIN</span><h3 className="font-serif text-xl font-light text-[#EDE8DF] mt-0.5">Partner Access</h3></div>
                <button onClick={()=>setIsLoginOpen(false)} className="p-1 text-[#7A7367] hover:text-[#EDE8DF] transition-colors cursor-pointer border border-transparent hover:border-[#2E2B24]" aria-label="Close"><X className="h-4 w-4"/></button>
              </div>
              <p className="text-xs text-[#7A7367] leading-relaxed font-serif">Authorised venture partners and advisory mentors may enter access tokens below.</p>
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="modal_gate" className="font-mono text-[9px] uppercase tracking-wider text-[#7A7367] block font-bold">Access Code</label>
                  <div className="flex items-center border border-[#2E2B24] bg-[#111008] px-3 py-2 focus-within:border-[#C4783A] transition-colors">
                    <Lock className="h-3.5 w-3.5 text-[#C4783A] mr-2 shrink-0"/>
                    <input id="modal_gate" type="password" required placeholder="Enter access code…" value={password} onChange={e=>{setPassword(e.target.value);if(status==='error')setStatus('idle');}} className="w-full bg-transparent text-sm font-mono text-[#EDE8DF] placeholder-[#7A7367] focus:outline-none"/>
                  </div>
                </div>
                <AnimatePresence>
                  {status==='error' && <motion.div initial={{opacity:0,y:-5}} animate={{opacity:1,y:0}} exit={{opacity:0}} className="text-[10px] font-mono uppercase tracking-wider text-red-400 font-bold flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"/>Invalid Access Key</motion.div>}
                </AnimatePresence>
                <div className="flex gap-2 pt-1">
                  <button type="button" onClick={()=>setIsLoginOpen(false)} className="flex-1 px-3 py-2 border border-[#2E2B24] hover:border-[#C4783A] text-[#7A7367] hover:text-[#EDE8DF] font-mono text-[9px] uppercase tracking-wider font-bold transition-all cursor-pointer">Cancel</button>
                  <button type="submit" disabled={status==='loading'} className="flex-1 px-3 py-2 bg-[#C4783A] hover:bg-[#E8A96A] disabled:bg-[#2E2B24] text-[#0F0E0C] font-mono text-[9px] uppercase tracking-wider font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5">
                    {status==='loading' ? <RefreshCw className="h-3 w-3 animate-spin text-[#0F0E0C]"/> : <><span>Validate</span><ArrowRight className="h-3 w-3"/></>}
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
