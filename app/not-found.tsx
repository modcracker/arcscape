'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { Compass, ArrowRight } from 'lucide-react';

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
  }

  return (
    <div className="flex items-center justify-center w-full overflow-visible">
      <svg 
        viewBox={viewBox} 
        style={{ width: "100%", maxWidth: `${width}px`, height: "auto" }} 
        className="select-none pointer-events-none overflow-visible"
      >
        <path id={`curve-${size}`} d={pathD} fill="none" stroke="transparent" />
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
      </svg>
    </div>
  );
}

export default function NotFound() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(5);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse parallax movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // 5 Second countdown
  useEffect(() => {
    if (countdown <= 0) {
      router.push('/');
      return;
    }
    const timer = setTimeout(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [countdown, router]);

  const handleRedirectNow = () => {
    router.push('/');
  };

  return (
    <main className="relative min-h-screen bg-stone-50/20 text-stone-900 font-sans flex flex-col justify-between p-6 sm:p-12 overflow-x-hidden">
      {/* Subtle pure aesthetic background grids */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e5e0_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none z-0" />

      {/* Branded Header */}
      <header className="w-full max-w-5xl mx-auto flex justify-between items-center z-20 pb-4 border-b border-stone-200/40">
        <div 
          onClick={handleRedirectNow}
          className="cursor-pointer group flex items-center justify-start overflow-visible w-32 sm:w-36 h-10"
        >
          <ArcscapeCurvedLogo size="small" />
        </div>
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-stone-400 font-bold">ROUTE SHIELD ACTIVE</span>
        </div>
      </header>

      {/* Main content with floating elements and countdown */}
      <div className="flex-1 flex flex-col items-center justify-center relative py-12 z-10">
        {/* Parallax clouds in the background */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden flex items-center justify-center">
          {/* Top skies soft blue gradient */}
          <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-[#e0f2fe]/40 via-[#f5f5f4]/25 to-transparent blur-3xl rounded-full opacity-80" />

          {/* SVG cloud line art with parallax */}
          <svg className="w-full max-w-4xl h-64 text-stone-300/80 overflow-visible" viewBox="0 0 1000 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e2e8f0" stopOpacity="0.85" />
                <stop offset="50%" stopColor="#f1f5f9" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="cloudGradB" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5f5f4" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#fafaf9" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            
            <motion.g
              animate={{
                x: mousePosition.x * 20,
                y: mousePosition.y * 10,
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
            
            <motion.g
              animate={{
                x: mousePosition.x * -10,
                y: mousePosition.y * -5,
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

            <motion.g
              animate={{
                x: mousePosition.x * 30,
                y: mousePosition.y * 15,
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

        {/* Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md bg-white/95 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-stone-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] text-center relative z-10"
        >
          {/* Subtle Accent Compass Icon */}
          <div className="mx-auto w-12 h-12 rounded-full bg-red-50/60 border border-red-100 flex items-center justify-center mb-6">
            <Compass className="h-5 w-5 text-stone-800 animate-[spin_8s_linear_infinite]" />
          </div>

          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#7D123D] font-bold">
            ERROR_CODE: 404_VOID
          </span>

          <h1 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mt-3 mb-4 tracking-tight">
            Enclave Not Found
          </h1>

          <p className="text-stone-500 font-sans text-xs sm:text-[13px] leading-relaxed mb-8 max-w-xs mx-auto">
            The requested digital vector or venture environment resides outside our active registry of verified portfolios.
          </p>

          {/* Countdown timer visual */}
          <div className="border-t border-stone-100 pt-6 mb-8">
            <div className="flex justify-between text-[10px] font-mono text-stone-400 uppercase tracking-widest font-semibold mb-2">
              <span>Initiating Auto-Transit</span>
              <span>{countdown}s</span>
            </div>
            {/* Progress bar */}
            <div className="h-1 w-full bg-stone-100 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-stone-900"
                initial={{ width: "100%" }}
                animate={{ width: `${(countdown / 5) * 100}%` }}
                transition={{ duration: 1, ease: "linear" }}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleRedirectNow}
            className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Return to Secure Portal</span>
            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-stone-200/40 pt-4 z-20">
        <div className="flex items-center gap-4 text-[9px] font-mono text-stone-400 font-bold uppercase tracking-wider">
          <span>LATITUDE: 404</span>
          <span className="text-stone-200">{"//"}</span>
          <span>LONGITUDE: VOID</span>
        </div>
        <div className="font-mono text-[9px] text-stone-400/80 uppercase tracking-wider text-center sm:text-right">
          © {new Date().getFullYear()} Arcscape Capital. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
