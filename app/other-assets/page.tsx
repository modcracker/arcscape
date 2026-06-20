'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Search, 
  Globe, 
  ExternalLink,
  Tag, 
  Award,
  Sparkles,
  Layers,
  ArrowUpRight,
  TrendingUp
} from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioAssets } from './data';

export default function OtherAssetsPage() {
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Dynamically derive all categories for clean filters
  const tagsList = useMemo(() => {
    const list = new Set<string>();
    portfolioAssets.forEach(item => list.add(item.category));
    return ['All', ...Array.from(list)];
  }, []);

  // Filter items based on query and chosen tag
  const filteredAssets = useMemo(() => {
    return portfolioAssets.filter(item => {
      const matchesSearch = item.domain.toLowerCase().includes(search.toLowerCase()) || 
                            item.desc.toLowerCase().includes(search.toLowerCase()) ||
                            item.category.toLowerCase().includes(search.toLowerCase());
      const matchesTag = selectedTag === 'All' || item.category === selectedTag;
      return matchesSearch && matchesTag;
    });
  }, [search, selectedTag]);

  return (
    <div className="relative min-h-screen bg-[#FFFDFC] text-[#2C1820] font-sans antialiased selection:bg-[#FF3E74]/15">
      {/* Decorative grid pattern mimicking blueprint boards */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#F5C2D9_1px,transparent_1px),linear-gradient(to_bottom,#F5C2D9_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.05] pointer-events-none" />
      
      {/* Top Header */}
      <header className="relative z-10 border-b border-[#EBE1E4]/50 bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link 
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-mono font-bold text-[#7D123D] hover:text-[#FF3E74] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Arcscape.com</span>
          </Link>

          <div className="flex items-center gap-1.5 bg-[#FAF4F6] border border-[#EBE1E4] px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-[#7D123D]">
            <Award className="h-4 w-4 text-[#FF3E74]" />
            <span>Ventures Premium Holding Index</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pt-12 pb-8">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-[#FF3E74]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Digital Real Estate Registry</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tight text-[#7D123D]">
            Global Domain Portfolio
          </h1>
          <p className="text-[#2C1820]/70 text-base sm:text-lg leading-relaxed font-light">
            In addition to our flagship property <strong className="font-bold text-[#7D123D]">arcscape.com</strong>, we hold an elite roster of aged, category-defining internet real estate products. Browse each active asset below with direct web connection points.
          </p>
        </div>

        {/* Search and Filter Panel */}
        <div className="mt-12 bg-white border border-[#EBE1E4] rounded-2xl p-6 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            
            {/* Search input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#2C1820]/40" />
              <input 
                type="text"
                placeholder="Search domain directory, industries, keywords..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full text-sm pl-11 pr-4 py-3.5 rounded-2xl border border-[#EBE1E4] focus:outline-none focus:ring-2 focus:ring-[#FF3E74]/15 focus:border-[#FF3E74] transition-all bg-white"
              />
            </div>

            {/* Total assets tag count */}
            <div className="flex items-center justify-between md:justify-end gap-3 px-2 font-mono text-xs">
              <span className="text-[#2C1820]/60">Matching Assets:</span>
              <span className="bg-[#FAF4F6] border border-[#EBE1E4] text-[#7D123D] px-2.5 py-1 rounded-lg font-bold">
                {filteredAssets.length} of {portfolioAssets.length}
              </span>
            </div>

          </div>

          {/* Quick Filter Caps */}
          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#7D123D] font-bold block">Filter by Industry Sector</span>
            <div className="flex flex-wrap gap-1.5">
              {tagsList.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium font-mono transition-all duration-200 border ${
                    selectedTag === tag 
                      ? 'bg-[#7D123D] text-white border-[#7D123D] shadow-sm' 
                      : 'bg-white text-[#2C1820]/80 border-[#EBE1E4] hover:bg-[#FAF4F6] hover:text-[#7D123D]'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Domain Grid Listing */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pb-24">
        {filteredAssets.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssets.map((item, idx) => (
              <motion.div
                key={item.domain}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.6) }}
                className="bg-white border border-[#EBE1E4] rounded-2xl p-6 hover:shadow-md hover:border-[#FF3E74]/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Visual Accent ribbon */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF3E74]/20 to-transparent group-hover:from-[#FF3E74] transition-all duration-500" />
                
                <div className="space-y-4">
                  {/* Category Chip */}
                  <div className="flex items-center gap-1 text-xs font-mono text-[#FF3E74] uppercase tracking-wider font-semibold bg-[#FAF4F6] border border-[#EBE1E4]/50 px-2.5 py-0.5 rounded-md w-fit">
                    <Tag className="h-3 w-3" />
                    <span>{item.category}</span>
                  </div>

                  {/* Domain Name */}
                  <div className="space-y-1">
                    <Link href={`/other-assets/${item.domain}`}>
                      <h3 className="text-xl sm:text-2xl font-serif font-extrabold text-[#7D123D] tracking-tight hover:text-[#FF3E74] transition-colors relative inline-block cursor-pointer">
                        {item.domain}
                      </h3>
                    </Link>
                    <p className="text-sm text-[#2C1820]/75 font-sans leading-relaxed min-h-[50px]">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Secure links to inner dynamic page and actual outer domain itself */}
                <div className="border-t border-[#EBE1E4]/60 pt-4 mt-6 flex flex-col gap-3">
                  <div className="flex items-center justify-between text-xs">
                    <Link 
                      href={`/other-assets/${item.domain}`}
                      className="inline-flex items-center gap-1 font-mono font-bold text-[#FF3E74] hover:underline"
                    >
                      <Layers className="h-3.5 w-3.5" />
                      <span>View Pitch Deck</span>
                    </Link>
                    <span className="text-xs font-mono text-[#7D123D]/70 bg-[#FAF4F6] px-2 py-0.5 rounded border border-[#EBE1E4] font-bold uppercase tracking-wider">
                      {item.valuationTier.split(' ')[0]}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-[#EBE1E4]/40">
                    <div className="flex items-center gap-1.5">
                      <Globe className="h-3.5 w-3.5 text-[#2C1820]/40 group-hover:text-[#FF3E74] transition-colors" />
                      <span className="font-mono text-xs text-[#2C1820]/60 lowercase">https://{item.domain}</span>
                    </div>
                    
                    <a 
                      href={`https://${item.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#7D123D] group-hover:text-[#FF3E74] transition-colors bg-[#FAF4F6]/40 group-hover:bg-[#FAF4F6] px-2.5 py-1.5 rounded-xl border border-[#EBE1E4]"
                    >
                      <span>Visit Site</span>
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-[#EBE1E4] rounded-3xl p-12 text-center space-y-4 max-w-xl mx-auto">
            <span className="text-4xl text-[#FF3E74]">🔍</span>
            <h3 className="text-lg font-serif font-bold text-[#7D123D]">No Matching Assets Found</h3>
            <p className="text-sm text-[#2C1820]/70 font-sans leading-relaxed">
              We couldn&apos;t find any premium properties matching your keyword &ldquo;<strong className="font-semibold text-[#7D123D]">{search}</strong>&rdquo;. Try searching for general industries like &ldquo;SaaS&rdquo; or &ldquo;Tech&rdquo;.
            </p>
            <button 
              onClick={() => { setSearch(''); setSelectedTag('All'); }}
              className="px-4 py-2 bg-[#7D123D] hover:bg-[#FF3E74] text-white rounded-xl text-xs font-mono font-bold tracking-wider transition-colors"
            >
              Clear Custom Filters
            </button>
          </div>
        )}
      </section>

      {/* Minimalistic Footer */}
      <footer className="relative z-10 w-full bg-white border-t border-[#EBE1E4] py-12 text-[#2C1820]/60 text-xs font-mono">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-serif font-black text-sm text-[#7D123D] lowercase">arc<span className="text-[#FF3E74]">scape</span> portfolios</p>
            <p className="text-xs text-[#2C1820]/50">&copy; {new Date().getFullYear()} Arcscape Ventures. All premium rights reserved globally.</p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-[#7D123D] transition-colors">Flagship Portal</Link>
            <span>•</span>
            <a href="https://www.godaddy.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#7D123D] transition-colors">ICANN Escrow Protection</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
