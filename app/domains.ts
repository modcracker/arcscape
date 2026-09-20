export interface DomainData {
  slug: string;
  domain: string;
  name: string;
  price: string;
  tagline: string;
  description: string;
  industry: string;
  keywords: string[];
  features: string[];
  imageSeed: string;
}

export const brandingDomains: DomainData[] = [
  {
    slug: "landscaping",
    domain: "arcscape.com/landscaping",
    name: "Arcscape Landscaping & Biophilic Design",
    price: "30,000",
    tagline: "Visionary landscape frameworks and biophilic environmental designs.",
    description: "Activate arcscape.com as an elite biophilic garden and modern landscape design firm. Instantly position your brand at the absolute forefront of high-end private estates, luxurious botanical installations, and premium hospitality resortscaping.",
    industry: "Landscape Architecture & Estate Planning",
    keywords: ["arcscape landscaping", "biophilic design", "resort landscaping architecture", "luxury outdoor design", "gardens"],
    features: [
      "Unparalleled authority for premier landscape architects",
      "Matches modern organic structural trends of indoor-outdoor integration",
      "Establishes immediate high-end client trust in a $100B luxury market"
    ],
    imageSeed: "landscaping"
  },
  {
    slug: "spatial",
    domain: "arcscape.com/spatial",
    name: "Arcscape Spatial Systems",
    price: "30,000",
    tagline: "Volumetric space intelligence and immersive 3D architectural engines.",
    description: "Unleash arcscape.com as a cutting-edge spatial computing software suite, interactive 3D platform, or immersive virtual reality agency. Build real-time digital twin simulations, user-friendly interior floor plan builders, and immersive walkthrough apps under a highly memorable, tech-forward brand.",
    industry: "Spatial Tech & Virtual Reality Engines",
    keywords: ["arcscape spatial", "spatial computing systems", "3d architectural walkthrough", "vr design plugins", "metaverse maps"],
    features: [
      "Dynamic, tech-forward positioning for heavy SaaS or immersive web apps",
      "Direct conceptual synergy with Apple Vision Pro, Meta Quest, and Unreal Engine tools",
      "Saves years of authority building compared to non-premium abstract names"
    ],
    imageSeed: "workspace"
  },
  {
    slug: "retreats",
    domain: "arcscape.com/retreats",
    name: "Arcscape Nature Sanctuaries",
    price: "30,000",
    tagline: "Bespoke sustainable cabins, organic eco-resorts, and deep wilderness retreats.",
    description: "Launch arcscape.com as a premium sustainable cabin builder, pre-fabricated getaway brand, or an eco-hospitality booking portal. Build high-end off-grid modular shelters and eco-resorts in absolute aesthetic harmony with surrounding nature.",
    industry: "Eco-Hospitality & Modular Cabins",
    keywords: ["arcscape retreats", "luxury eco resorts", "sustainable mini cabins", "off-grid nature lodgings", "glamping design"],
    features: [
      "Captivating brand concept targeting the high-margin glamping and eco-hotel sectors",
      "Appeals directly to premium, sustainability-minded luxury travelers",
      "Evokes immediate imagery of comfort, structural elegance, and nature escape"
    ],
    imageSeed: "cabin"
  },
  {
    slug: "urban",
    domain: "arcscape.com/urban",
    name: "Arcscape Intelligent Cities",
    price: "30,000",
    tagline: "Micro-communitarian layouts, green transit networks, and carbon-negative urban planning.",
    description: "Position arcscape.com as a flagship smart-city consultancy, civic platform, or mixed-use transit-oriented development real estate holding. Craft clean pedestrian corridors, dense timber-framed towers, and high-performance urban infrastructure.",
    industry: "Smart Cities & Urban Design",
    keywords: ["arcscape urban", "smart city software", "civic space planners", "transit oriented developments", "suburban microgrids"],
    features: [
      "Signature brand presence for high-level civic and corporate initiatives",
      "Perfect naming structure for municipal software pipelines and geospatial dashboards",
      "Establishes a legacy-tier corporate identity focused on dense sustainable design"
    ],
    imageSeed: "urban"
  },
  {
    slug: "parametric",
    domain: "arcscape.com/parametric",
    name: "Arcscape Parametric Labs",
    price: "30,000",
    tagline: "Mathematical structural convergence, procedural design, and carbon-neutral frameworks.",
    description: "Deploy arcscape.com as an elite parametric design studio or general computational CAD software suite. Help developers calculate optimal load vector geometries, generate carbon-negative structural meshes, and export highly efficient CNC milling shapes.",
    industry: "Parametric Architecture & CAD Modeling",
    keywords: ["arcscape parametric", "volumetric grid calculations", "carbon neutral building", "generative architecture meshes", "computational CAD analytics"],
    features: [
      "Highly targeted for advanced procedural design and computational structural software",
      "Leverages extreme mathematical precision to establish brand expertise from day one",
      "Highly aligned with modern robotic timber and raw-masonry pre-fabrication workflows"
    ],
    imageSeed: "geometry"
  },
  {
    slug: "coastal",
    domain: "arcscape.com/coastal",
    name: "Arcscape Marine Architecture",
    price: "30,000",
    tagline: "Premium coastal private estates, salt-resistant layouts, and waterfront engineering.",
    description: "Utilize arcscape.com to scale a world-class seaside architectural design firm, waterfront resort agency, or marine engineering platform. Architect high-end luxury beachfront villas, infinity deck frameworks, and custom coastal defenses.",
    industry: "Waterfront Design & Coastal Architecture",
    keywords: ["arcscape coastal", "coastal retreat property", "waterfront villa layout", "saltproof deck boards", "aquatic design consulting"],
    features: [
      "Prestigious positioning for high-net-worth coastline estate developers and yachtsmen",
      "Direct technical framing for marine environments with high salt, tidal, and wind loads",
      "Conveys premium durability, sweeping panoramic optics, and top-tier aesthetic value"
    ],
    imageSeed: "coastal"
  }
];
export interface PortfolioDomain {
  domain: string;
  description: string;
  comingSoon?: boolean;
  hidden?: boolean;
}

export const portfolioDomains: PortfolioDomain[] = [
  {
    domain: "DentalGigs",
    description:
      "Connect dental professionals with dental offices needing staff, shifts and opportunities.",
  },
  {
    domain: "APTMATE",
    description:
      "Help tenants find compatible roommates and help landlords find available rooms.",
  },
  {
    domain: "Razor.NYC",
    description:
      "Connect customers with barbers for discovery and appointment booking.",
  },
  {
    domain: "Hyper.NYC",
    description:
      "Connect people to play pickleball and other recreational sports through matchmaking, games, tournaments, rankings and championships. Start with pickleball.",
  },
  {
    domain: "Brat.cc",
    description:
      "Profile successful women and female founders, giving them visibility, recognition and promotional opportunities.",
  },
  {
    domain: "Suds.cc",
    description:
      "Provide convenient laundry pickup, cleaning and delivery for busy New Yorkers through partner laundromats.",
  },
  {
    domain: "SiteBae.com",
    description:
      "Build fast, affordable websites for small businesses and professionals, with ongoing maintenance.",
  },
  {
    domain: "Muse.NYC",
    description:
      "Curate premium museum, cultural, dining, dating and private experiences for individuals, couples and corporate clients.",
  },
  {
    domain: "Hemup",
    description:
      "Connect people needing tailoring, alterations or sewing work with local tailors and seamstresses who offer the service.",
  },
  {
    domain: "Broplem",
    description: "Coming Soon",
    comingSoon: true,
  },
  {
    domain: "ApplianceCraft",
    description:
      "Provide appliance repair, maintenance and installation services.",
  },
  {
    domain: "CannaChef",
    description:
      "Develop cannabis-focused culinary and educational experiences where legally permitted.",
  },
  {
    domain: "Kushgram",
    description:
      "Help users discover and review legal cannabis products, brands and experiences where permitted.",
  },
  {
    domain: "TrueInheritor",
    description: "Coming Soon",
    comingSoon: true,
  },
  {
    domain: "Plano.com",
    description: "Excluded / Pending",
    hidden: true,
  },
  {
    domain: "Queap.com",
    description: "Coming Soon",
    comingSoon: true,
  },
  {
    domain: "Orangite.com",
    description:
      "A discovery and commerce platform dedicated to orange products, fashion, accessories and lifestyle.",
  },
  {
    domain: "Stir.cc",
    description:
      "Connect cyclists for organized rides, friendships, food and social experiences.",
  },
  {
    domain: "BLK.cc",
    description:
      "Help people discover and support Black-owned businesses, services, products and events.",
  },
  {
    domain: "DynaSpace.com",
    description:
      "Make it easier to find and book coworking, meeting, creative and event spaces.",
  },
  {
    domain: "Swan.NYC",
    description:
      "Create memorable proposals, date nights, birthdays, anniversaries and premium celebrations in New York.",
  },
  {
    domain: "AquaMarvel",
    description:
      "Connect aquarium owners with aquarium cleaning and maintenance providers who offer the service.",
  },
];