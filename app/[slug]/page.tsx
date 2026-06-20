import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { 
  ArrowRight, 
  ShieldCheck, 
  Compass, 
  Globe, 
  TrendingUp, 
  Layers, 
  Sparkles,
  ExternalLink,
  Tag,
  Briefcase,
  Grid,
  ChevronRight,
  ArrowLeft
} from 'lucide-react';
import { brandingDomains, DomainData } from '../domains';
import InquiryForm from '../components/inquiry-form';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 1. GENERATE STATIC PARAMS FOR STATIC COMPILATION OF ALL 41 PAGES
export async function generateStaticParams() {
  return brandingDomains.map((item) => ({
    slug: item.slug,
  }));
}

// 2. GENERATE COMPREHENSIVE SEO METADATA FOR EACH INDIVIDUAL PAGE
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = brandingDomains.find((d) => d.slug === slug);
  if (!item) return {};

  return {
    title: `${item.name} | Arcscape Brand Curation Pitch`,
    description: `${item.name} (${item.domain}): Explore this high-fidelity concept pitch demonstrating how the premium domain arcscape.com can be activated in this industry segment. Acquire the flagship domain for $30,000.`,
    keywords: [
      ...item.keywords,
      "arcscape brand concept",
      "arcscape domain authority",
      "premium domain positioning",
      "brand activation playbook",
      "premium domain showcase"
    ],
    openGraph: {
      title: `${item.name} | Arcscape Proposal`,
      description: item.description,
      images: [
        {
          url: `https://picsum.photos/seed/${item.imageSeed}/1200/630`,
          width: 1200,
          height: 630,
          alt: `${item.name} Concept Showcase`,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.name} | Arcscape Design Strategy`,
      description: item.description,
      images: [`https://picsum.photos/seed/${item.imageSeed}/1200/630`],
    }
  };
}

export default async function DomainDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = brandingDomains.find((d) => d.slug === slug);

  // Fallback to Next.js 404 page if dynamic slug is not pre-registered in our portfolio
  if (!item) {
    notFound();
  }

  // Create unique Structured Schema Data (JSON-LD) for SEO crawlers (Search Grounding)
  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": item.name,
    "image": `https://picsum.photos/seed/${item.imageSeed}/1200/630`,
    "description": item.description,
    "brand": {
      "@type": "Brand",
      "name": "Arcscape Master Series"
    },
    "category": "Architectural Design & Landscaping Blueprints",
    "offers": {
      "@type": "Offer",
      "price": item.price.replace(",", ""),
      "priceCurrency": "USD",
      "valueAddedTaxIncluded": "false",
      "priceValidUntil": "2027-12-31",
      "url": `https://arcscape.com/${item.slug}`,
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "seller": {
        "@type": "Organization",
        "name": "Arcscape Ventures"
      }
    }
  };

  // Get a few other similar divisions for organic internal sitemap linking (highly optimized SEO crawl cross-references)
  const currentIndex = brandingDomains.findIndex(d => d.slug === slug);
  const totalItems = brandingDomains.length;
  const relatedAssets: DomainData[] = [];
  
  for (let i = 1; i <= 4; i++) {
    const nextIdx = (currentIndex + i) % totalItems;
    relatedAssets.push(brandingDomains[nextIdx]);
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-[#FFF5F8]">
      
      {/* 3. INJECT SEMANTIC STRUCTURED JSON-LD SCHEMA FOR SEARCH ENGINES */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        id={`schema-${item.slug}`}
      />

      {/* BACKGROUND GRAPHIC LINES */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f9e8ef_1px,transparent_1px),linear-gradient(to_bottom,#f9e8ef_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_75%,transparent_100%)] pointer-events-none opacity-40 z-0" />

      {/* MINI HERO HEADER BAR */}
      <header className="relative z-10 w-full max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 pt-6 pb-4 border-b border-[#EBE1E4]">
        <Link 
          href="/"
          className="group inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#7D123D] hover:text-[#FF3E74] transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Flagship Showcase</span>
        </Link>
        <div className="flex items-center gap-1.5 text-xs font-mono text-[#7D123D] font-semibold tracking-wider bg-[#FFF0F5] px-3 py-1.5 rounded-full border border-[#FAF4F6]">
          <span className="h-2 w-2 rounded-full bg-[#FF3E74] inline-block animate-pulse" />
          <span>Premium Brand Concept</span>
        </div>
      </header>

      {/* DETAIL CONTENT LAYOUT */}
      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 flex-1 flex flex-col lg:flex-row gap-10 items-stretch">
        
        {/* LEFT COLUMN: CRITICAL METRIC & VALUE NARRATIVE */}
        <div className="flex-1 flex flex-col justify-between space-y-8">
          <div className="space-y-6">
            
            {/* SUB-INDUSTRY HEADER */}
            <div className="inline-flex bg-white border border-[#EBE1E4] px-4 py-1.5 rounded-full shadow-sm items-center gap-2">
              <Briefcase className="h-4 w-4 text-[#FF3E74]" />
              <span className="font-mono text-xs tracking-wider uppercase font-bold text-[#7D123D]">
                {item.industry}
              </span>
            </div>

            {/* DOMAIN TITLING */}
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#FF3E74] block tracking-wide font-semibold uppercase bg-white border border-[#EBE1E4] px-3.5 py-1.5 rounded-md self-start w-fit">
                Concept Positioning: <span className="underline">{item.domain}</span>
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-[#7D123D] leading-tight">
                {item.name}
              </h1>
              <p className="font-serif italic text-lg sm:text-xl text-[#7D123D]/80 font-medium leading-relaxed max-w-2xl">
                &ldquo;{item.tagline}&rdquo;
              </p>
              <p className="text-sm sm:text-base text-[#2C1820]/90 leading-relaxed font-sans font-light max-w-2xl bg-white/40 p-4 rounded-xl border border-[#EBE1E4]/40">
                {item.description}
              </p>
            </div>

            {/* DOMAIN APPRAISAL CHECKLIST / DETAILS */}
            <div className="bg-white border border-[#EBE1E4] rounded-2xl p-6 shadow-sm space-y-4 max-w-2xl">
              <h2 className="font-serif font-extrabold text-[#7D123D] text-lg border-b border-[#EBE1E4]/40 pb-2">
                Brand Positioning Metrics
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <span className="font-mono text-xs tracking-wider text-[#FF85A7] uppercase block">Primary Domain</span>
                  <span className="font-sans font-bold text-sm text-[#2C1820]">{item.domain}</span>
                </div>
                <div>
                  <span className="font-mono text-xs tracking-wider text-[#FF85A7] uppercase block">Positioning Tier</span>
                  <span className="font-sans font-bold text-sm text-[#2C1820]">Flagship Elite</span>
                </div>
                <div>
                  <span className="font-mono text-xs tracking-wider text-[#FF85A7] uppercase block">Acquisition Status</span>
                  <span className="font-sans font-bold text-sm text-[#2C1820]">Available</span>
                </div>
                <div>
                  <span className="font-mono text-xs tracking-wider text-[#FF85A7] uppercase block">Search Fit</span>
                  <span className="font-sans font-bold text-sm text-[#2C1820]">Exact Category</span>
                </div>
                <div>
                  <span className="font-mono text-xs tracking-wider text-[#FF85A7] uppercase block">Symmetry Score</span>
                  <span className="font-sans font-bold text-sm text-[#2C1820]">Exceptional</span>
                </div>
                <div>
                  <span className="font-mono text-xs tracking-wider text-[#FF85A7] uppercase block">Security Protocol</span>
                  <span className="font-sans font-bold text-sm text-[#2C1820]">GoDaddy Escrow</span>
                </div>
              </div>
            </div>

          </div>

          {/* METATAGGED HIGHLIGHTED WORDS FOR SEO */}
          <div className="space-y-3 border-t border-[#EBE1E4] pt-5 max-w-2xl">
            <span className="font-mono text-xs tracking-wider uppercase text-[#7D123D] font-bold block">Portfolio Tags Registry</span>
            <div className="flex flex-wrap gap-2">
              {item.keywords.map((tag) => (
                <div key={tag} className="inline-flex items-center gap-1 bg-white border border-[#EBE1E4] px-3 py-1 rounded-md text-xs font-mono text-[#7D123D]">
                  <Tag className="h-3 w-3 text-[#FF3E74]" />
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: DIRECT ACQUISITION CARD WITH PRODUCT OFFERS */}
        <div className="w-full lg:w-[380px] shrink-0 flex flex-col justify-center">
          <InquiryForm blueprintName={item.name} blueprintCode={item.domain} price={item.price} />
        </div>
      </main>

      {/* MULTI-PAGE SITEMAP CONNECTIONS (INTERNAL CRAWLER PATHWAYS) */}
      <section className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 border-t border-[#EBE1E4]">
        <div className="space-y-6">
          <div className="flex justify-between items-center animate-fade-in">
            <span className="font-mono text-xs tracking-wider uppercase text-[#7D123D] font-bold block">
              Explore Other Brand Concepts
            </span>
            <Link 
              href="/"
              className="text-xs font-mono text-[#FF3E74] hover:underline flex items-center gap-0.5 font-bold"
            >
              View Strategic Hub <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {relatedAssets.map((asset) => (
              <Link 
                href={`/${asset.slug}`} 
                key={asset.slug}
                className="group bg-white border border-[#EBE1E4] hover:border-[#FF3E74]/40 p-5 rounded-xl transition-all hover:shadow-md hover:-translate-y-0.5 duration-300 flex flex-col justify-between"
              >
                <div className="space-y-1">
                  <h3 className="font-serif font-black text-[#7D123D] text-base group-hover:text-[#FF3E74] transition-colors leading-tight">
                    {asset.name}
                  </h3>
                  <span className="font-mono text-xs uppercase text-gray-500 block tracking-wider font-semibold">
                    {asset.domain}
                  </span>
                  <p className="text-xs text-[#2C1820]/80 line-clamp-2 leading-relaxed mt-1">
                    {asset.tagline}
                  </p>
                </div>
                <div className="pt-3 flex justify-between items-center border-t border-[#EBE1E4]/40 mt-3 text-xs font-mono">
                  <span className="text-[#FF85A7] font-bold">Acquisition</span>
                  <span className="text-[#FF3E74] flex items-center gap-0.5 font-semibold uppercase text-xs group-hover:underline">
                    View Concept <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND FOOTER */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 border-t border-[#EBE1E4] flex flex-col sm:flex-row justify-between items-center text-center gap-4">
        <span className="font-mono text-xs uppercase text-[#7D123D]/80 tracking-wide font-semibold">
          © 2026 ARCSCAPE PORTFOLIO GROUP • SECURED DIGITALLY
        </span>
        <div className="flex gap-4 text-xs font-mono text-[#FF3E74] uppercase tracking-wider font-semibold">
          <Link href="/" className="hover:underline">Flagship Domain</Link>
          <span>•</span>
          <Link href="/other-assets" className="hover:underline">Other Holdings</Link>
          <span>•</span>
          <Link href="/#registry" className="hover:underline">Concept Index</Link>
        </div>
      </footer>

    </div>
  );
}
