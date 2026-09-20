"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioDomains } from "../domains";

export default function DomainTabs() {
  const visibleDomains = portfolioDomains.filter((d) => !d.hidden);
  const [activeDomain, setActiveDomain] = useState(visibleDomains[0]?.domain);
  const selectedDomain = visibleDomains.find((d) => d.domain === activeDomain);

  return (
    <div className="w-full">
      {/* label row */}
      <div className="flex items-center gap-4 mb-5">
        <span className="font-mono text-[9px] uppercase tracking-[0.28em] font-bold" style={{color:'var(--accent)'}}>
          Domain Portfolio
        </span>
        <span className="flex-1 h-px" style={{background:'var(--border)'}} />
        <span className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{color:'var(--text-3)'}}>
          {visibleDomains.length} concepts
        </span>
      </div>

      {/* tab strip */}
      <div className="tabs-scroll flex overflow-x-auto border-b" style={{borderColor:'var(--border)'}}>
        {visibleDomains.map((domain) => {
          const isActive = activeDomain === domain.domain;
          return (
            <button
              key={domain.domain}
              onClick={() => setActiveDomain(domain.domain)}
              className="relative whitespace-nowrap px-4 py-2.5 font-mono text-[9.5px] uppercase tracking-[0.14em] transition-colors duration-200 cursor-pointer shrink-0"
              style={{ color: isActive ? 'var(--text)' : 'var(--text-3)', fontWeight: isActive ? 700 : 500 }}
            >
              {domain.domain}
              {isActive && (
                <motion.span
                  layoutId="domainTabLine"
                  className="absolute bottom-0 left-0 right-0 h-[1.5px]"
                  style={{ background: 'var(--accent)' }}
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* content panel */}
      <AnimatePresence mode="wait">
        {selectedDomain && (
          <motion.div
            key={selectedDomain.domain}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="border border-t-0"
            style={{ background: 'var(--bg-2)', borderColor: 'var(--border)' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto]">
              <div className="p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-2">
                  {selectedDomain.comingSoon ? (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.2em] font-bold" style={{color:'var(--text-3)'}}>
                      <span className="h-1.5 w-1.5 rounded-full" style={{background:'var(--text-3)'}} />
                      Coming Soon
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[8.5px] uppercase tracking-[0.2em] font-bold" style={{color:'var(--accent)'}}>
                      <span className="h-1.5 w-1.5 rounded-full" style={{background:'var(--accent)'}} />
                      Business Concept
                    </span>
                  )}
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight leading-none" style={{color:'var(--text)'}}>
                  {selectedDomain.domain}
                </h2>
                {selectedDomain.comingSoon ? (
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] font-semibold mt-3" style={{color:'var(--text-3)'}}>
                    Details forthcoming — check back soon.
                  </p>
                ) : (
                  <p className="text-sm leading-relaxed mt-1 max-w-2xl" style={{color:'var(--text-2)'}}>
                    {selectedDomain.description}
                  </p>
                )}
              </div>
              <div className="hidden md:flex items-center justify-center px-8 border-l" style={{borderColor:'var(--border)'}}>
                <span className="font-serif text-6xl font-bold select-none leading-none" style={{color:'var(--bg-3)'}}>
                  {String(visibleDomains.findIndex((d) => d.domain === selectedDomain.domain) + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
