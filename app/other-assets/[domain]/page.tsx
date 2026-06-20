import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ArrowLeft, 
  Globe, 
  Tag, 
  Award,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  TrendingUp,
  Coins,
  Compass,
  CheckCircle,
  HelpCircle,
  MessageSquare,
  Layers
} from 'lucide-react';
import { portfolioAssets, AssetData } from '../data';
import InquiryForm from '../../components/inquiry-form';

interface PageProps {
  params: Promise<{ domain: string }>;
}

// 1. Static parameter compilation for full SSG deployment compatibility
export async function generateStaticParams() {
  return portfolioAssets.map((item) => ({
    domain: item.domain,
  }));
}

// 2. Comprehensive SEO metadata injection dynamically customized per domain
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { domain } = await params;
  const decodedDomain = decodeURIComponent(domain);
  const item = portfolioAssets.find((a) => a.domain.toLowerCase() === decodedDomain.toLowerCase());
  if (!item) return {};

  return {
    title: `Acquire ${item.domain} | Premium Venture Asset Pitch`,
    description: `Activate ${item.domain} in the ${item.category} sector. View our elite development blueprints, suggested activations, and estimated keyword CPC savings of ${item.cpcSaving}.`,
    keywords: [
      item.domain,
      `${item.domain} for sale`,
      `${item.category} domain`,
      "digital brand activation",
      "premium domain acquisition"
    ]
  };
}

export default async function OtherAssetDetailPage({ params }: PageProps) {
  const { domain } = await params;
  const decodedDomain = decodeURIComponent(domain);
  const item = portfolioAssets.find((a) => a.domain.toLowerCase() === decodedDomain.toLowerCase());

  if (!item) {
    notFound();
  }

  // Get dynamic JSON-LD SEO Schema
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": item.domain,
    "description": item.desc,
    "category": item.category,
    "brand": {
      "@type": "Brand",
      "name": "Arcscape Portfolio Series"
    },
    "offers": {
      "@type": "Offer",
      "url": `https://arcscape.com/other-assets/${item.domain}`,
      "priceCurrency": "USD",
      "price": "Inquire",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Arcscape Ventures"
      }
    }
  };

  // Extract other similar assets to build cohesive internal navigation (highly performant SEO crawl trees)
  const currentIndex = portfolioAssets.findIndex(a => a.domain === item.domain);
  const totalAssets = portfolioAssets.length;
  const recommendedAssets: AssetData[] = [];
  
  for (let i = 1; i <= 3; i++) {
    const nextIdx = (currentIndex + i) % totalAssets;
    recommendedAssets.push(portfolioAssets[nextIdx]);
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FFFDFC] text-[#2C1820] font-sans selection:bg-[#FF3E74]/15 antialiased">
      
      {/* Dynamic structured JSON-LD for crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        id={`schema-other-${item.domain}`}
      />

      {/* Modern blueprint background grid dots */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#EBE1E4_1px,transparent_1px),linear-gradient(to_bottom,#EBE1E4_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.04] pointer-events-none z-0" />

      {/* Header bar */}
      <header className="relative z-10 w-full border-b border-[#EBE1E4] bg-white/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <Link 
            href="/other-assets"
            className="group inline-flex items-center gap-2 text-sm font-mono font-bold text-[#7D123D] hover:text-[#FF3E74] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Holdings</span>
          </Link>

          <div className="flex items-center gap-1.5 bg-[#FAF4F6] border border-[#EBE1E4] px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold text-[#7D123D]">
            <Layers className="h-3.5 w-3.5 text-[#FF3E74]" />
            <span>Strategic Use-Case Manual</span>
          </div>
        </div>
      </header>

      {/* Main Pitch Content */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 py-12 md:py-20 flex-1 flex flex-col lg:flex-row gap-12 items-stretch">
        
        {/* Left Section: Extensive domain specs and pitch content */}
        <div className="flex-1 space-y-10">
          
          <div className="space-y-6">
            
            {/* Category tag */}
            <div className="inline-flex bg-[#FAF4F6] border border-[#EBE1E4] px-3.5 py-1.5 rounded-xl items-center gap-2 text-xs font-mono font-bold text-[#FF3E74]">
              <Tag className="h-4 w-4" />
              <span>{item.category}</span>
            </div>

            {/* Title & Domain Presentation */}
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF3E74] bg-[#FAF4F6] border border-[#EBE1E4] px-3 py-1 rounded-lg font-semibold block w-fit">
                PORTFOLIO ASSET SPECIFICATION
              </span>
              
              <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-[#7D123D] leading-none">
                {item.domain}
              </h1>

              <p className="font-serif italic text-lg sm:text-2xl text-[#FF3E74] tracking-tight">
                &ldquo;{item.tagline}&rdquo;
              </p>

              <p className="text-[#2C1820]/80 text-base sm:text-lg leading-relaxed font-light font-sans max-w-3xl">
                {item.desc}
              </p>
            </div>

            {/* Direct Domain Link Outbound Action to satisfy specific requirement */}
            <div className="pt-2">
              <a 
                href={`https://${item.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#7D123D] hover:bg-[#FF3E74] text-white px-5 py-3 rounded-2xl text-sm font-mono font-bold tracking-wider transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Navigate to https://{item.domain}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="text-xs text-[#2C1820]/50 font-mono mt-2 pl-1">
                * Links directly to the asset domain itself to verify nameservers and certificate registration.
              </p>
            </div>

          </div>

          {/* Value Highlights Cards Grid */}
          <div className="space-y-4 pt-4 border-t border-[#EBE1E4]">
            <h2 className="font-serif font-black text-[#7D123D] text-lg sm:text-xl flex items-center gap-2">
              <Award className="h-5 w-5 text-[#FF3E74]" />
              <span>Core Investment Pillars</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {item.highlights.map((highlight, index) => (
                <div key={index} className="bg-white border border-[#EBE1E4] p-5 rounded-2xl shadow-sm space-y-2 relative overflow-hidden">
                  <div className="absolute top-2.5 right-2.5 text-xs font-mono text-gray-300 font-bold">
                    [0{index + 1}]
                  </div>
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <p className="text-xs text-[#2C1820]/90 leading-relaxed font-sans">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Custom Market Activation Blueprints */}
          <div className="bg-white border border-[#EBE1E4] rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-wider font-bold text-[#FF3E74]">strategic playbook</span>
              <h2 className="font-serif font-black text-[#7D123D] text-lg sm:text-xl">
                Suggested Activations & Brand Concepts
              </h2>
              <p className="text-xs text-gray-500 font-sans">
                Explore three potential modern activation playbooks designed for this brand:
              </p>
            </div>

            <div className="space-y-4">
              {item.suggestedActivations.map((act, index) => (
                <div key={index} className="flex gap-4 items-start p-4 hover:bg-[#FAF4F6] rounded-2xl transition-all duration-200">
                  <div className="h-7 w-7 rounded-lg bg-[#FAF4F6] border border-[#EBE1E4] flex items-center justify-center font-mono text-xs font-bold text-[#7D123D] shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-sans text-[#2C1820]/90 leading-relaxed font-light">
                      {act}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Appraisal Metrics block */}
          <div className="border-t border-[#EBE1E4] pt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono">
            <div className="bg-white p-4 rounded-xl border border-[#EBE1E4]">
              <span className="text-xs text-gray-500 block uppercase font-bold">Aesthetic Vibe</span>
              <span className="text-xs text-[#7D123D] font-bold block mt-1 capitalize">{item.vibe}</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#EBE1E4]">
              <span className="text-xs text-gray-500 block uppercase font-bold">Valuation Tier</span>
              <span className="text-xs text-[#7D123D] font-bold block mt-1">{item.valuationTier}</span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#EBE1E4]">
              <span className="text-xs text-gray-500 block uppercase font-bold">CPC Keyword Bid</span>
              <span className="text-xs text-emerald-700 font-bold block mt-1 flex items-center gap-1">
                <TrendingUp className="h-3.5 w-3.5" /> {item.cpcSaving}
              </span>
            </div>
            <div className="bg-white p-4 rounded-xl border border-[#EBE1E4]">
              <span className="text-xs text-gray-500 block uppercase font-bold">Handoff Mode</span>
              <span className="text-xs text-[#7D123D] font-bold block mt-1 flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" /> Instant Escrow
              </span>
            </div>
          </div>

        </div>

        {/* Right Section: Direct Acquisition Contact Form Card */}
        <div className="w-full lg:w-[380px] shrink-0 flex flex-col justify-start">
          <div className="sticky top-6">
            <InquiryForm 
              blueprintName={`${item.domain} Asset Acquisition`} 
              blueprintCode={item.domain} 
              price="Custom Quote" 
            />
          </div>
        </div>

      </main>

      {/* Suggested internal cross navigation to other portfolio assets */}
      <section className="relative z-10 w-full bg-white border-t border-[#EBE1E4] py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#FF3E74] font-bold block">portfolio integration</span>
              <h2 className="font-serif font-black text-[#7D123D] text-lg sm:text-2xl">
                Explore Alternative Roster Assets
              </h2>
            </div>
            <Link 
              href="/other-assets"
              className="font-mono text-xs font-bold text-[#FF3E74] hover:underline flex items-center gap-1.5"
            >
              <span>Browse All 37 Domains</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {recommendedAssets.map((asset) => (
              <Link 
                href={`/other-assets/${asset.domain}`} 
                key={asset.domain}
                className="group bg-white border border-[#EBE1E4] hover:border-[#FF3E74]/40 p-6 rounded-2xl transition-all hover:shadow-md hover:-translate-y-0.5 duration-300 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-xs font-mono text-[#FF3E74] uppercase tracking-wider font-semibold bg-[#FAF4F6] px-2 py-0.5 rounded-md w-fit">
                    {asset.category}
                  </div>
                  <h3 className="font-serif font-black text-[#7D123D] group-hover:text-[#FF3E74] text-lg transition-colors leading-tight">
                    {asset.domain}
                  </h3>
                  <p className="text-xs text-[#2C1820]/75 line-clamp-2 leading-relaxed font-sans font-light">
                    {asset.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#EBE1E4]/40 mt-4 flex justify-between items-center text-xs font-mono font-bold">
                  <span className="text-gray-400 capitalize">{asset.vibe.split(', ')[0]} theme</span>
                  <span className="text-[#FF3E74] group-hover:underline">View Blueprint →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer bar */}
      <footer className="relative z-10 w-full bg-white border-t border-[#EBE1E4] py-10 text-xs font-mono text-gray-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-center">
          <span className="font-serif font-black text-sm text-[#7D123D] lowercase">
            arc<span className="text-[#FF3E74]">scape</span> portfolios
          </span>
          <div className="flex gap-4 text-xs font-mono font-bold uppercase text-[#FF3E74]">
            <Link href="/" className="hover:underline">Flagship Portal</Link>
            <span>•</span>
            <Link href="/other-assets" className="hover:underline">Strategic Registry</Link>
          </div>
        </div>
      </footer>

    </div>
  );
}
