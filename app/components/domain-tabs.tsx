"use client";

import { useState } from "react";
import { portfolioDomains } from "../domains";

export default function DomainTabs() {
  const visibleDomains = portfolioDomains.filter((domain) => !domain.hidden);

  const [activeDomain, setActiveDomain] = useState(visibleDomains[0]?.domain);

  const selectedDomain = visibleDomains.find(
    (domain) => domain.domain === activeDomain
  );

  return (
    <div className="w-full">
      <div className="flex gap-2 overflow-x-auto border-b border-stone-200 pb-2">
        {visibleDomains.map((domain) => (
          <button
            key={domain.domain}
            onClick={() => setActiveDomain(domain.domain)}
            className={`whitespace-nowrap px-4 py-2 text-[10px] uppercase tracking-[0.12em] transition-all ${
              activeDomain === domain.domain
                ? "border-b-2 border-[#7D123D] text-stone-950 font-bold"
                : "text-stone-500 hover:text-stone-950"
            }`}
          >
            {domain.domain}
          </button>
        ))}
      </div>

      {selectedDomain && (
        <div className="mt-6 border border-stone-200 p-6">
          <div className="mb-2 text-xs uppercase tracking-[0.15em] text-stone-500">
            {selectedDomain.comingSoon ? "Coming Soon" : "Business Concept"}
          </div>

          <h2 className="text-2xl font-semibold text-stone-950">
            {selectedDomain.domain}
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-6 text-stone-600">
            {selectedDomain.description}
          </p>
        </div>
      )}
    </div>
  );
}