
import { Article, Category, CategorySlug, Author } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'AI & Machine Learning', slug: CategorySlug.AI, description: 'Neural networks, LLMs, and the cognitive computing revolution.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600' },
  { id: '2', name: 'Startups & VC', slug: CategorySlug.STARTUPS, description: 'Market disruptors, unicorns, and the capital fueling innovation.', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1600' },
  { id: '3', name: 'Robotics', slug: CategorySlug.ROBOTICS, description: 'Humanoids, automation, and the robotics of physical labor.', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600' },
  { id: '4', name: 'EV & Mobility', slug: CategorySlug.EV_MOBILITY, description: 'Electrification, infrastructure, and autonomous transport.', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1600' },
  { id: '5', name: 'Rail Tech', slug: CategorySlug.RAIL, description: 'High-speed rail, maglev, and urban transit systems.', image: 'https://images.unsplash.com/photo-1541427468627-a89a96e5c399?auto=format&fit=crop&q=80&w=1600' },
  { id: '6', name: 'Aerospace', slug: CategorySlug.AEROSPACE, description: 'Supersonic flight, heavy-lift rockets, and commercial space.', image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1600' },
  { id: '7', name: 'Engineering', slug: CategorySlug.ENGINEERING, description: 'Advanced materials, semiconductor nodes, and mechanical design.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600' },
  { id: '8', name: 'Space & Quantum', slug: CategorySlug.SPACE_QUANTUM, description: 'Exploration of the deep cosmos and subatomic advantages.', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1600' },
];

export const AUTHORS: Author[] = [
  { id: 'a1', name: 'Dr. Elena Vance', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Senior AI Intelligence Specialist and Research Lead at Quantum Press.' },
  { id: 'a2', name: 'Marcus Sterling', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Aerospace & Heavy Engineering Correspondent with a focus on orbital infrastructure.' },
  { id: 'a3', name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Tech Economics and Hardware Analyst covering the global semiconductor war.' }
];

export const ARTICLES: Article[] = [
  {
    id: 'n1',
    slug: 'anthropic-30b-funding-valuation',
    title: 'Global AI Funding Surge: Anthropic Closes Massive $30B Round',
    summary: 'In the largest private tech round of the decade, Anthropic has raised $30B at a $380B valuation, signaling a global shift toward agentic AI infrastructure.',
    content: 'Full report follows in structured blocks.',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>Quantum Press Intelligence — February 13, 2026. Anthropic has solidified its position as a titan of the AI era, closing a staggering $30 billion funding round. This influx of capital brings the company's valuation to a historic $380 billion, signaling a massive bet by investors on the future of enterprise AI orchestration.</p>
          <h2>The Shift to Agentic Workflows</h2>
          <p>Market analysts suggest this funding will be used primarily to scale Anthropic's "Claude for Enterprise" suite, directly challenging OpenAI's dominance in the corporate sector. Unlike previous years focused on "chat," 2026 is the year of the <strong>Autonomous Agent</strong>.</p>
          <p>The round saw participation from major sovereign wealth funds and existing tech giants, reflecting a global belief that AI is transitioning from experimental chat tools to the core infrastructure of the modern economy.</p>
        `
      },
      {
        type: 'code',
        language: 'typescript',
        title: 'Claude Agent SDK v4.6 - Workflow Initialization',
        code: `import { ClaudeAgent } from '@anthropic/core';

const agent = new ClaudeAgent({
  identity: 'Strategic Analyst',
  permissions: ['market-data', 'revenue-modeling']
});

await agent.execute('Optimize Q3 supply chain logistics for 200 nodes');`
      }
    ],
    category: CategorySlug.STARTUPS,
    authorId: 'a1',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1611974715853-2b8ef9597395?auto=format&fit=crop&q=80&w=1200',
    tags: ['Anthropic', 'AI Economy', 'Venture Capital'],
    isFeatured: true,
    isTrending: true
  },
  {
    id: 'n2',
    slug: 'alibaba-rynnbrain-open-source-robotics',
    title: 'Alibaba Enters Physical AI with RynnBrain Open-Source Model',
    summary: 'Chinese tech giant Alibaba has launched RynnBrain, a foundational model designed for embodied AI, accelerating the robotics push in Asia-Pacific.',
    content: 'Full report follows in structured blocks.',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>Chinese tech giant Alibaba launched RynnBrain, advancing embodied AI and robotics integration—highlighting Asia's push in real-world AI applications beyond software. RynnBrain is designed to solve the "last mile" of robotics: translating high-level reasoning into precise, real-time physical actions.</p>
          <h2>Advancing Embodied AI</h2>
          <p>The open-source foundational model is specifically tuned for humanoid and industrial robotics, bridging the gap between LLMs and motor control. It represents a significant step in the convergence of software intelligence and physical hardware.</p>
        `
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
        caption: 'The RynnBrain architecture integrates visual perception with low-latency motor instructions.',
        fullWidth: true
      }
    ],
    category: CategorySlug.AI,
    authorId: 'a1',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1200',
    tags: ['Alibaba', 'Embodied AI', 'Open Source'],
    isTrending: true
  },
  {
    id: 'n3',
    slug: 'arianespace-ariane-64-heavy-success',
    title: 'Heavy Lift Milestone: Arianespace Ariane 64 Successfully Deploys Amazon Satellites',
    summary: 'Europe reclaims its orbital supremacy as the Ariane 64 heavy-lift rocket successfully deploys 32 satellites for Amazon\'s Project Kuiper.',
    content: 'Full report follows in structured blocks.',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>Europe's heavy-lift rocket milestone boosts commercial space access. In a flawless mission from the Guiana Space Centre, the first Ariane 64 flight deployed 32 LEO satellites for Amazon’s Project Kuiper constellation. This success marks a pivotal moment for Arianespace and the European aerospace sector, re-establishing a robust heavy-lift capability.</p>
          <p>Amazon's satellite network aims to compete with SpaceX's Starlink by providing global broadband coverage. This deployment is the first of many scheduled launches designed to populate the constellation throughout 2026 and 2027.</p>
        `
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1200',
        caption: 'Ariane 64 liftoff from the Kourou spaceport, February 2026.',
        fullWidth: false
      }
    ],
    category: CategorySlug.AEROSPACE,
    authorId: 'a2',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1200',
    tags: ['Arianespace', 'SpaceX', 'Kuiper'],
    isTrending: true
  },
  {
    id: 'n4',
    slug: 'applied-materials-2nm-chip-advances',
    title: 'Moore\'s Law Lives: Applied Materials Unveils sub-2nm Transistor Advances',
    summary: 'New systems improve energy-efficient Gate-All-Around (GAA) transistors, paving the way for the next generation of hyper-efficient AI silicon.',
    content: 'Full report follows in structured blocks.',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>Applied Materials revealed new materials and deposition systems specifically designed for the sub-2nm node. These "Gate-All-Around" (GAA) advances are critical for reducing the energy footprint of massive AI data centers. The new systems enhance GAA efficiency, marking a US breakthrough for faster, cooler next-gen processors.</p>
          <p>The innovation focuses on ultra-thin dielectric materials which reduce signal loss and heat. These engineering feats aim to solve the physical limitations of current silicon architectures as AI demand continues to skyrocket.</p>
        `
      }
    ],
    category: CategorySlug.ENGINEERING,
    authorId: 'a3',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    tags: ['Semiconductors', 'Applied Materials', '2nm'],
    isFeatured: true
  },
  {
    id: 'n5',
    slug: 'ev-market-reset-phase-2026',
    title: 'The EV Reset: Global Sales Top 17M as Market Fundamentals Strengthen',
    summary: 'Despite policy shifts, the global EV market enters a "Reset" phase focused on refinement, solid-state batteries, and vehicle-to-home (V2H) resilience.',
    content: 'Full report follows in structured blocks.',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>The global electric vehicle landscape is entering a critical "Reset" period. After years of explosive growth driven by early adopters and aggressive subsidies, the market is maturing into a phase defined by engineering refinement and long-term infrastructure stability.</p>
          <h2>The Solid-State Promise</h2>
          <p>2026 marks the first year where pilot-scale solid-state battery production has reached commercial viability. Manufacturers are reporting energy densities up to 500 Wh/kg, effectively doubling the range of standard passenger vehicles while simultaneously reducing fire risks and charging times to under 10 minutes.</p>
          <p>Furthermore, the integration of Vehicle-to-Home (V2H) technology has turned EVs into mobile energy storage units, providing a crucial layer of grid resilience in the face of increasing climate-driven power fluctuations.</p>
        `
      }
    ],
    category: CategorySlug.EV_MOBILITY,
    authorId: 'a3',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200',
    tags: ['EV', 'BYD', 'Tesla', 'V2H'],
    isTrending: true
  },
  {
    id: 'n6',
    slug: 'cohere-arr-ipo-momentum',
    title: 'Cohere Surpasses $240M ARR, Eyes Public Markets',
    summary: 'The enterprise AI specialist has hit revenue milestones early, fueling speculation of a late-2026 IPO supported by Nvidia and Salesforce.',
    content: 'Full report follows in structured blocks.',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>Cohere has emerged as the definitive leader in the "Secure Enterprise AI" niche. By focusing exclusively on corporate data privacy and highly-tunable RAG (Retrieval-Augmented Generation) architectures, they have managed to outpace generic LLM providers in high-stakes sectors like finance and law.</p>
          <h2>Fiscal Telemetry</h2>
          <p>With an Annual Recurring Revenue exceeding $240 million, the company is now demonstrating a sustainable path to profitability that separates it from pure research labs. Internal sources suggest that a Q4 2026 IPO is being actively modeled, with major strategic backing from Nvidia ensuring a stable supply of compute for their scaling inference fleet.</p>
        `
      }
    ],
    category: CategorySlug.STARTUPS,
    authorId: 'a2',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200',
    tags: ['Cohere', 'IPO', 'Enterprise AI'],
    isTrending: true
  },
  {
    id: 'n7',
    slug: 'china-humanoid-robots-lunar-new-year',
    title: 'Cultural Robotics: Humanoids Lead Lunar New Year Celebrations in Beijing',
    summary: 'Ahead of the holiday, startups like Booster Robotics showcased humanoid bots in traditional attire, highlighting China\'s push in consumer-facing robotics.',
    content: 'Full report follows in structured blocks.',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>The streets of Beijing’s Haidian district served as a testing ground for the world’s most advanced humanoid socialization algorithms this week. Booster Robotics deployed over 50 "Gen-3" units to assist with holiday crowd control and cultural storytelling.</p>
          <p>These units utilize a new "Social-Net" architecture that allows for sub-100ms latency in natural language processing and gesture mimicry. Unlike industrial humanoids, these robots are designed for soft interactions, featuring compliant joint actuators that prioritize human safety in dense environments.</p>
          <p>This deployment is seen as a major milestone in China's stated goal of achieving mass humanoid adoption by 2030, moving from factory floors into the public social fabric.</p>
        `
      }
    ],
    category: CategorySlug.ROBOTICS,
    authorId: 'a1',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1200',
    tags: ['China Tech', 'Humanoids', 'CNY2026'],
  },
  {
    id: 'n8',
    slug: 'wabtec-dellner-couplers-acquisition',
    title: 'Rail Consolidation: Wabtec Acquires Dellner Couplers in Passenger Expansion',
    summary: 'The Swedish acquisition strengthens global safety-critical train connections as Wabtec prepares for the US rail modernization boom.',
    content: 'Full report follows in structured blocks.',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>Wabtec's acquisition of Sweden-based Dellner Couplers marks a major consolidation in the safety-critical rail components market. As high-speed rail projects proliferate across the globe, the demand for integrated, ultra-resilient connection systems has reached an all-time high.</p>
          <h2>Engineering Synergies</h2>
          <p>Dellner’s proprietary energy-absorption technology for passenger couplers is considered the industry gold standard. By integrating these systems into Wabtec’s digital signaling and braking platforms, the combined entity can offer a "closed-loop" safety environment for 300km/h+ transit systems.</p>
          <p>This deal is strategically timed to coincide with the anticipated US Rail Modernization Act, which is expected to unlock billions in funding for inter-city high-speed infrastructure in the Northeast and California corridors.</p>
        `
      }
    ],
    category: CategorySlug.RAIL,
    authorId: 'a2',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1541427468627-a89a96e5c399?auto=format&fit=crop&q=80&w=1200',
    tags: ['Railtech', 'Wabtec', 'M&A'],
  },
  {
    id: 'n9',
    slug: 'orbital-quantum-supremacy-2026',
    title: 'Zero-G Coherence: Orbital Quantum Computer Achieves Record Qubit Stability',
    summary: 'Quantum Press exclusive: A microgravity-optimized superconducting processor has maintained coherence for 3 hours, a 10x improvement over terrestrial benchmarks.',
    content: 'Full report follows in structured blocks.',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>In a breakthrough that could redefine the geography of computation, the "Aether-1" processor aboard the International Space Hub has achieved a state of long-form coherence previously thought impossible.</p>
          <p>By utilizing the natural vacuum and thermal isolation of orbit, combined with the lack of mechanical micro-vibrations common on Earth, the 4,000-qubit system operated continuously for 180 minutes. This provides a clear roadmap for the deployment of "Quantum Server Satellites" designed to handle the encryption loads of the global financial network.</p>
        `
      }
    ],
    category: CategorySlug.SPACE_QUANTUM,
    authorId: 'a1',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200',
    tags: ['Quantum', 'Space Computing', 'Qubits'],
    isFeatured: true
  },
  {
    id: 'n10',
    slug: 'graphene-superstructure-tokyo-tower',
    title: 'Materials Revolution: First Graphene-Reinforced Vertical Superstructure Tops Out',
    summary: 'Tokyo\'s newest sky-node utilizes graphene-infused concrete and carbon fiber tendons to reduce structural weight by 40% while doubling seismic resilience.',
    content: 'Full report follows in structured blocks.',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>The completion of the "Graphene Spire" in Tokyo represents a watershed moment for civil engineering. Traditional steel-and-concrete skeletons are reaching their physical limits for height and seismic endurance; the infusion of 2D materials like graphene offers a path forward.</p>
          <p>The building’s core utilizes a proprietary "Nano-Concrete" that requires 50% less water to cure and provides 3x the compressive strength of standard mixtures. Engineers predict that this material stack will allow for the construction of "Kilometer-Towers" by 2035, effectively solving urban density issues in earthquake-prone regions.</p>
        `
      }
    ],
    category: CategorySlug.ENGINEERING,
    authorId: 'a3',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    tags: ['Materials Science', 'Architecture', 'Graphene'],
  },
  {
    id: 'n11',
    slug: 'boston-dynamics-atlas-2-leak',
    title: 'Robotics Intel: Leaked Specs for Atlas Gen-2 Reveal Hydraulic-Free Design',
    summary: 'The next generation of the world\'s most famous humanoid appears to be fully electric, utilizing high-torque actuators for unprecedented agility.',
    content: 'Full report follows in structured blocks.',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>Internal documents leaked from Boston Dynamics suggest a radical departure for the Atlas platform. The "Gen-2" unit has completely stripped its iconic hydraulic manifolds in favor of a proprietary electric actuator system.</p>
          <p>This shift allows for a significantly slimmer silhouette and, more importantly, a 300% increase in battery life. While hydraulics provided the raw power for the "Atlas Backflip," the new electric system offers the precision required for fine motor skills—the missing link for the humanoid’s transition from the lab into the household service sector.</p>
        `
      }
    ],
    category: CategorySlug.ROBOTICS,
    authorId: 'a2',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Boston Dynamics', 'Atlas', 'Actuators'],
    isTrending: true
  },
  {
    id: 'n12',
    slug: 'lunar-gateway-habitat-pressurization',
    title: 'Lunar Gateway Update: Habitat Module Successfully Sustains Atmosphere',
    summary: 'The Gateway Station has completed its first full-pressure test, paving the way for the first permanent human residents in lunar orbit by early 2027.',
    content: 'Full report follows in structured blocks.',
    contentBlocks: [
      {
        type: 'text',
        content: `
          <p>NASA and its international partners have confirmed that the "HALO" (Habitation and Logistics Outpost) module has successfully maintained a breathable atmosphere for a continuous 30-day window.</p>
          <p>This test verifies the integrity of the station’s advanced shielding and life-support recycled loop. With this milestone achieved, the Artemis IV mission is officially cleared for a multi-month orbital residency, marking the start of a permanent human presence in the vicinity of the Moon.</p>
        `
      }
    ],
    category: CategorySlug.AEROSPACE,
    authorId: 'a2',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200',
    tags: ['Artemis', 'NASA', 'Lunar Gateway'],
  }
];
