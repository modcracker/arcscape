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
