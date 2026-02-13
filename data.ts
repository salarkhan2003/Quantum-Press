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
  { id: '9', name: 'Life Sciences', slug: CategorySlug.LIFE_SCIENCES, description: 'Genomics, biotechnology, and the future of human longevity.', image: 'https://images.unsplash.com/photo-1532187863486-abf91ad1b262?auto=format&fit=crop&q=80&w=1600' },
  { id: '10', name: 'Policy & Markets', slug: CategorySlug.MARKETS_POLICY, description: 'Global trade, regulatory frameworks, and macroeconomic shifts.', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1600' },
  { id: '11', name: 'Culture & Sports', slug: CategorySlug.CULTURE_SPORTS, description: 'Social trends, entertainment, and high-performance sports.', image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1600' },
];

export const AUTHORS: Author[] = [
  { id: 'a1', name: 'Dr. Elena Vance', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Senior AI Intelligence Specialist and Research Lead at Quantum Press.' },
  { id: 'a2', name: 'Marcus Sterling', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Aerospace & Heavy Engineering Correspondent with a focus on orbital infrastructure.' },
  { id: 'a3', name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Tech Economics and Hardware Analyst covering the global semiconductor war.' },
  { id: 'a4', name: 'Jordan Hayes', avatar: 'https://i.pravatar.cc/150?u=jordan', bio: 'Global Affairs & Cultural Analyst tracking the intersection of policy and tech.' }
];

export const ARTICLES: Article[] = [
  {
    id: 'h1',
    slug: 'openai-softbank-60b-funding-talks',
    title: 'OpenAI Eyes $60B Ambition in Massive SoftBank Funding Talk',
    summary: 'In a bid to outpace rivals, OpenAI is reportedly discussing an additional $30B infusion from SoftBank to fuel its planetary-scale compute requirements.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Quantum Press Finance — February 14, 2026. The capital landscape of Artificial General Intelligence has shifted into a new, astronomical gear. Internal sources suggest OpenAI is currently in final-stage negotiations with Masayoshi Son’s SoftBank Group for a capital infusion totaling $30 billion.</p><h2>The Stargate Infrastructure</h2><p>This funding is primarily earmarked for "Project Stargate," a joint venture aimed at creating a global network of specialized AI data centers. These facilities are rumored to utilize next-generation liquid cooling and dedicated nuclear energy small modular reactors (SMRs) to handle the massive thermal output of trillion-parameter model training.</p><p>If the deal closes, OpenAI’s total available liquid capital for the 2026-2027 fiscal year would exceed $60 billion, placing it in a unique position to out-bid competitors for H200 and Blackwell GPU allocations.</p>' }
    ],
    category: CategorySlug.STARTUPS,
    authorId: 'a3',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9bb5?auto=format&fit=crop&q=80&w=1200',
    tags: ['OpenAI', 'SoftBank', 'Venture Capital', 'AGI'],
    isFeatured: true,
    isTrending: true
  },
  {
    id: 'h2',
    slug: 'india-first-ai-factory-nvidia-dsu',
    title: 'India\'s First "AI Factory": NVIDIA and DSU Launch ₹175Cr Strategic Hub',
    summary: 'A landmark partnership aims to train 20,000 students in generative AI and humanoid robotics, marking a major shift in the global silicon landscape.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Bengaluru, India — In a move that signals India\'s transition from a software-service hub to a deep-tech powerhouse, NVIDIA has partnered with Dayananda Sagar University (DSU) to establish the nation\'s first "AI Factory."</p><h2>Empowering the Humanoid Era</h2><p>The ₹175 crore facility will house a dedicated cluster of NVIDIA GH200 Grace Hopper Superchips, providing the compute necessary for large-scale robotics simulations. The primary goal is to skill 20,000 students in the specific disciplines of generative physical AI and humanoid kinemantics.</p><p>"We are moving beyond code and into embodied intelligence," said a university spokesperson during the inauguration today.</p>' }
    ],
    category: CategorySlug.AI,
    authorId: 'a1',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=1200',
    tags: ['NVIDIA', 'India Tech', 'AI Factory', 'Education'],
    isFeatured: true,
    isTrending: true
  },
  {
    id: 'h3',
    slug: 'un-ai-panel-oversight-princeton',
    title: 'Global Oversight: Princeton Scientists Join UN Independent AI Scientific Panel',
    summary: 'The United Nations formalizes its AI governance structure by appointing top researchers to oversee global risks and ethical frameworks.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>United Nations — The quest for a global framework on AI safety has reached a critical milestone. The U.N. Secretary-General today announced the appointment of two premier computer scientists from Princeton University to the newly established Independent International Scientific Panel on AI.</p><h2>Setting the Scientific Standard</h2><p>The panel is designed to provide an objective, data-driven assessment of AI capabilities, independent of corporate marketing cycles. Key areas of focus include the prevention of autonomous bio-weapon synthesis and the preservation of democratic discourse in the age of generative misinformation.</p><p>This panel will hold its first plenary session in Geneva next month to draft the "Universal Safety Baseline for Agentic Systems."</p>' }
    ],
    category: CategorySlug.AI,
    authorId: 'a1',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1507537362145-5f031c228192?auto=format&fit=crop&q=80&w=1200',
    tags: ['United Nations', 'AI Ethics', 'Governance', 'Princeton'],
    isFeatured: true,
    isTrending: true
  },
  {
    id: 'b1',
    slug: 'modi-global-growth-engine-2026',
    title: 'Global Growth Engine: PM Modi Declares India the Driver of World Progress',
    summary: 'At the Global Business Summit, India is projected to account for 16% of global growth in 2026 as new ministry hubs open in Delhi.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>New Delhi — Prime Minister Narendra Modi delivered a keynote address today at the ET Now Global Business Summit, framing India as the essential gear in the machine of global economic stability.</p><h2>The 16% Milestone</h2><p>With a projected 16% contribution to global growth this fiscal year, India is outpacing many traditional developed economies. To support this rapid expansion, the Prime Minister inaugurated the "Seva Teerth" and "Kartavya Bhavan" ministry complexes. These digital-first facilities replace legacy colonial-era infrastructure and are designed to streamline bureaucratic processing using AI-assisted administrative tools.</p>' }
    ],
    category: CategorySlug.MARKETS_POLICY,
    authorId: 'a4',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1200',
    tags: ['India', 'Economy', 'GlobalGrowth', 'Policy'],
    isFeatured: true,
    isTrending: true
  },
  {
    id: 'b2',
    slug: 'rsa-encryption-quantum-breakthrough',
    title: 'RSA Decryption Crisis: New Quantum Architecture Slashes Qubit Requirements',
    summary: 'A landmark study reveals a tenfold reduction in the hardware needed to crack RSA-2048 encryption.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Quantum researchers have sent shockwaves through the cybersecurity community today with the publication of the "Pinnacle Architecture." This new quantum circuit design theoretically reduces the qubit count required for Shor’s Algorithm by an order of magnitude.</p><h2>Cracking RSA-2048</h2><p>Previously, it was estimated that millions of error-corrected qubits would be needed to break standard RSA-2048 encryption. The new findings suggest that with "Pinnacle Architecture," fewer than 100,000 qubits could achieve the same result. Iceberg Quantum has already claimed their upcoming 128k qubit processor will be ready for benchmarking by Q4 2026.</p>' }
    ],
    category: CategorySlug.SPACE_QUANTUM,
    authorId: 'a1',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
    tags: ['Quantum', 'Encryption', 'CyberSecurity', 'RSA'],
    isFeatured: true,
    isTrending: true
  },
  {
    id: 'b3',
    slug: 'ovarian-cancer-elenagen-success',
    title: 'Life Extension: Elenagen Trial Doubles Ovarian Cancer Survival Rates',
    summary: 'Mid-stage trials report median survival exceeding 25 months for platinum-resistant patients, a major milestone in oncology.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>The oncology sector is celebrating a significant victory against one of the most difficult-to-treat cancers. Mid-stage clinical trials for the drug Elenagen have yielded results that far exceed industry expectations.</p><h2>Doubling Survival</h2><p>Patients with platinum-resistant ovarian cancer—traditionally a very poor prognosis group—saw their median survival rate double to over 25 months when Elenagen was added to standard chemotherapy. The drug works by disrupting the mitochondrial shielding used by tumor cells to resist treatment, effectively "unmasking" the cancer for the immune system.</p>' }
    ],
    category: CategorySlug.LIFE_SCIENCES,
    authorId: 'a1',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1579154235602-3c2ae24ae241?auto=format&fit=crop&q=80&w=1200',
    tags: ['Oncology', 'Biotech', 'ClinicalTrials', 'Elenagen'],
    isFeatured: true,
    isTrending: true
  },
  {
    id: 'b4',
    slug: 'bangladesh-bnp-election-victory',
    title: 'Bangladesh Power Shift: BNP Claims Historic Victory; PM Modi Congratulates Tarique Rahman',
    summary: 'A major geopolitical transition in South Asia as the BNP takes the lead in historic elections.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Dhaka, Bangladesh — The geopolitical map of South Asia has been redrawn following the historic election victory of the Bangladesh Nationalist Party (BNP). Tarique Rahman is expected to be sworn in as Prime Minister shortly.</p><h2>Diplomatic Reset</h2><p>Indian Prime Minister Narendra Modi was among the first global leaders to offer congratulations, emphasizing the need for continued cooperation on regional security and energy corridor development. Analysts suggest this shift may lead to a reset in Bangladesh’s approach to both regional trade and international climate funding initiatives.</p>' }
    ],
    category: CategorySlug.MARKETS_POLICY,
    authorId: 'a4',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=1200',
    tags: ['Bangladesh', 'Elections', 'Geopolitics', 'Asia'],
    isTrending: true
  },
  {
    id: 'b5',
    slug: 'zimbabwe-stun-australia-t20wc',
    title: 'T20 World Cup Shock: Zimbabwe Stun Cricket Giants Australia by 23 Runs',
    summary: 'A massive upset in the tournament standings as Zimbabwe delivers a clinical performance against the favorites.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>In what is already being called the biggest upset in T20 World Cup history, Zimbabwe has defeated Australia by a clear 23-run margin. The match, held in front of a capacity crowd, saw Zimbabwe’s bowlers dismantle the Australian top order with clinical precision.</p><h2>The Winning Strategy</h2><p>Utilizing a "spin-heavy" approach on a dry surface, Zimbabwe successfully choked the scoring rate in the middle overs. This victory completely reshapes the tournament standings, putting Australia in a "must-win" position for their remaining group stage matches.</p>' }
    ],
    category: CategorySlug.CULTURE_SPORTS,
    authorId: 'a4',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&q=80&w=1200',
    tags: ['Cricket', 'T20WC', 'Sports', 'Zimbabwe'],
    isTrending: true
  },
  {
    id: 'b6',
    slug: 'hkust-calcium-ion-battery',
    title: 'Beyond Lithium: HKUST Unveils High-Performance Calcium-Ion Battery',
    summary: 'The new design offers a cheaper and safer alternative for grid-scale energy storage and future electric vehicles.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Scientists at the Hong Kong University of Science and Technology (HKUST) have unveiled a breakthrough in battery chemistry that could solve the lithium scarcity crisis. Their new calcium-ion battery achieves energy densities comparable to mid-range lithium-ion cells while utilizing far more abundant raw materials.</p><h2>Engineering the Grid</h2><p>The calcium-ion design is inherently safer, with a much higher thermal runway threshold, making it ideal for massive stationary energy storage systems used by national power grids. Pilot production is expected to begin in early 2027.</p>' }
    ],
    category: CategorySlug.ENGINEERING,
    authorId: 'a3',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=1200',
    tags: ['Batteries', 'EnergyStorage', 'Materials', 'HKUST'],
    isTrending: true
  },
  {
    id: 'n1',
    slug: 'anthropic-30b-funding-valuation',
    title: 'Global AI Funding Surge: Anthropic Closes Massive $30B Round',
    summary: 'In the largest private tech round of the decade, Anthropic has raised $30B at a $380B valuation.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Anthropic has solidified its status as a foundational pillar of the AI economy. By closing a $30 billion round at a historic $380 billion valuation, the company is signaling its intent to build an end-to-end proprietary infrastructure for agentic AI.</p><h2>Securing the Supply Chain</h2><p>The funding will primarily support the acquisition of dedicated compute clusters and the expansion of Anthropic\'s "Constitutional AI" research, aimed at creating safer, more steerable models for enterprise use cases in regulated industries.</p>' }
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
    summary: 'Chinese tech giant Alibaba has launched RynnBrain, a foundational model designed for embodied AI.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Alibaba Cloud has disrupted the robotics world with "RynnBrain," the first truly high-parameter open-source model optimized specifically for humanoid motor control and physical environment reasoning.</p><h2>Bridging Software and Steel</h2><p>Unlike traditional LLMs, RynnBrain is trained on massive datasets of physical interactions, allowing it to predict tactile feedback and joint torques with sub-millisecond accuracy. The open-sourcing of this model is expected to accelerate the development of affordable consumer-grade humanoid assistants across the globe.</p>' }
    ],
    category: CategorySlug.ROBOTICS,
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
    summary: 'Europe reclaims its orbital supremacy as the Ariane 64 successfully deploys 32 satellites for Project Kuiper.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Kourou, French Guiana — Arianespace has successfully launched the maiden commercial flight of the Ariane 64 heavy-lift rocket. The mission, critical for Amazon\'s Project Kuiper, deployed 32 satellites into low Earth orbit with pinpoint precision.</p><h2>Restoring European Access</h2><p>The success of the Ariane 64 is a major boost for the European Space Agency (ESA), ending a period of reliance on American launch providers for heavy payloads. The rocket features an upgraded Vulcain 2.1 engine and 4 solid rocket boosters, providing the highest lift capacity in Arianespace history.</p>' }
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
    summary: 'New systems improve energy-efficient Gate-All-Around (GAA) transistors for hyper-efficient AI silicon.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Applied Materials has revealed a new suite of deposition and etch systems that make high-yield sub-2nm semiconductor manufacturing a reality. The focus is on perfecting the "Gate-All-Around" (GAA) transistor architecture.</p><h2>Managing the Nanoscale</h2><p>The new "Vera-2" platform allows for atomic-level precision in the formation of dielectric layers, significantly reducing electron leakage and heat generation. This engineering breakthrough is essential for the next generation of AI chips, which require extreme power efficiency to operate in massive data center environments.</p>' }
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
    summary: 'The global EV market enters a "Reset" phase focused on solid-state batteries and vehicle-to-home (V2H) resilience.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>The electric vehicle market has entered a "Reset" phase in 2026. While growth rates have stabilized, the quality and integration of EV technology have reached a new level of maturity.</p><h2>The Resilience Hub</h2><p>Modern EVs are no longer just transport; they are mobile power storage units. 2026 marks the mass adoption of Vehicle-to-Home (V2H) technology, allowing owners to power their residences during peak pricing or grid outages, effectively turning the global car fleet into a decentralized energy buffer.</p>' }
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
    summary: 'Enterprise AI specialist hit revenue milestones early, fueling speculation of a late-2026 IPO.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Cohere has emerged as the clear winner in the enterprise LLM market. By hitting $240 million in Annual Recurring Revenue (ARR), the company has proven that there is a massive appetite for secure, privacy-first AI solutions in the corporate world.</p><h2>Strategic IPO</h2><p>Market analysts predict a Q4 2026 IPO for Cohere. Unlike consumer-focused labs, Cohere’s business model is built on high-margin enterprise contracts and strategic partnerships with cloud giants, providing a clear path to profitability that investors are eagerly anticipating.</p>' }
    ],
    category: CategorySlug.STARTUPS,
    authorId: 'a2',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200',
    tags: ['Cohere', 'IPO', 'Enterprise AI'],
    isTrending: true
  },
  {
    id: 'n8',
    slug: 'wabtec-dellner-couplers-acquisition',
    title: 'Rail Consolidation: Wabtec Acquires Dellner Couplers in Passenger Expansion',
    summary: 'Swedish acquisition strengthens global safety-critical train connections for the US modernization boom.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Wabtec Corporation has successfully acquired Dellner Couplers, the Swedish leader in safety-critical rail connection systems. This move significantly expands Wabtec’s footprint in the global passenger transit market.</p><h2>Unifying the Corridor</h2><p>The acquisition is strategically timed to support the massive rail modernization projects underway in North America and Western Europe. Dellner’s advanced automatic coupler systems are essential for the high-frequency "virtual-coupling" technology that allows trains to operate at much closer headways, effectively doubling line capacity.</p>' }
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
    summary: 'A microgravity-optimized superconducting processor has maintained coherence for 3 hours.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Exclusive Report — The first "Orbital Node" quantum computer, operated by SpaceQ, has achieved a coherence time of 180 minutes—a ten-fold increase over ground-based superconducting systems.</p><h2>The Thermal Advantage</h2><p>By operating in the natural 3-Kelvin vacuum of space, the processor avoids the mechanical micro-vibrations and electromagnetic interference common on Earth. This breakthrough suggests that the next generation of cryptographic processing and drug discovery simulation will happen in low Earth orbit satellites.</p>' }
    ],
    category: CategorySlug.SPACE_QUANTUM,
    authorId: 'a1',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200',
    tags: ['Quantum', 'Space Computing', 'Qubits'],
    isFeatured: true
  },
  {
    id: 'n11',
    slug: 'boston-dynamics-atlas-2-leak',
    title: 'Robotics Intel: Leaked Specs for Atlas Gen-2 Reveal Hydraulic-Free Design',
    summary: 'Iconic humanoid appears to be fully electric, utilizing high-torque actuators for agility.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Internal engineering diagrams leaked today suggest that Boston Dynamics is retiring the hydraulic legacy of the Atlas humanoid. The "Gen-2" platform appears to be entirely electric.</p><h2>High-Torque Actuators</h2><p>The new design utilizes proprietary high-torque electric actuators at every joint, allowing for much finer motor control and silent operation. This transition is essential for Atlas to move from a research platform to a commercially viable assistant for hospital and logistics environments.</p>' }
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
    summary: 'Habitat completed its first full-pressure test, paving the way for residents in lunar orbit.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>NASA’s Lunar Gateway station has passed its most critical safety test yet. The HALO (Habitation and Logistics Outpost) module was successfully pressurized to full sea-level atmosphere for a 48-hour continuous window.</p><h2>Safe Haven</h2><p>This test verifies the structural integrity of the composite hull and the performance of the closed-loop life support system. With this milestone, the station is now officially cleared to receive the first permanent human residents by late 2027, marking the start of a permanent lunar orbital economy.</p>' }
    ],
    category: CategorySlug.AEROSPACE,
    authorId: 'a2',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200',
    tags: ['Artemis', 'NASA', 'Lunar Gateway'],
  },
  {
    id: 'b13',
    slug: 'indonesia-growth-surge-prabowo',
    title: 'Indonesia Economic Surge: President Prabowo Targets Record Consumption Targets',
    summary: 'Indonesia is set to exceed 2026 targets, driven by domestic consumption and flagship social programs.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Jakarta — President Prabowo Subianto announced today that Indonesia\'s economic growth is on track to significantly exceed its 2026 targets. The surge is attributed to a massive increase in domestic consumption, spurred by the successful rollout of the "Free Nutritional Meals" program for students.</p><h2>Regional Leadership</h2><p>This program has not only improved health outcomes but has also injected billions into the local agricultural and logistics sectors, creating a robust internal circular economy that insulates Indonesia from global export fluctuations.</p>' }
    ],
    category: CategorySlug.MARKETS_POLICY,
    authorId: 'a4',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Indonesia', 'MacroEconomy', 'Prabowo'],
  },
  {
    id: 'b14',
    slug: 'ricoh-valuetech-chilean-acquisition',
    title: 'Fintech M&A: Ricoh Acquires ValueTech to Expand LatAm Automation Presence',
    summary: 'Major move to scale digital services in Latin America through Chilean automation expertise.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Ricoh has finalized the acquisition of ValueTech, a premier Chilean automation firm specializing in fintech middleware. This $800 million deal marks Ricoh’s largest investment in the South American market to date.</p><h2>Unlocking Digital LatAm</h2><p>By integrating ValueTech’s proprietary AI invoice processing and banking connectors, Ricoh aims to provide a unified digital services platform for the rapidly growing small-to-medium enterprise (SME) sector across Chile, Brazil, and Colombia.</p>' }
    ],
    category: CategorySlug.STARTUPS,
    authorId: 'a3',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200',
    tags: ['M&A', 'Fintech', 'Ricoh', 'ValueTech'],
  },
  {
    id: 'b15',
    slug: 'winter-olympics-drone-nbc',
    title: 'Winter Olympics 2026: NBC Showcases Unprecedented Drone Spectacle',
    summary: 'A new era of sports broadcasting with drone-led alpine tracking.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Milan-Cortina 2026 — NBC Sports has unveiled its "AeroView" broadcast suite, utilizing swarm drone technology to follow alpine skiers at speeds exceeding 140km/h. This provides a viewing angle previously impossible with stationary cameras.</p><h2>Immersive Winter</h2><p>The drone swarm uses a decentralized AI coordination layer to ensure safety while maintaining a consistent 2-meter proximity to the athletes. This immersive coverage has already set record viewership numbers for the opening week of the games.</p>' }
    ],
    category: CategorySlug.CULTURE_SPORTS,
    authorId: 'a4',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Olympics', 'Broadcasting', 'Drones'],
  },
  {
    id: 'b16',
    slug: 'mohamed-salah-gerrard-record',
    title: 'Liverpool Milestone: Mohamed Salah Levels Steven Gerrard’s Goal Record',
    summary: 'Egyptian star etches his name further into Anfield history.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Liverpool FC legend Mohamed Salah has reached a historic milestone, scoring his 186th goal for the club to level Steven Gerrard’s all-time record. The goal came in a crucial Champions League quarter-final match at Anfield.</p><h2>The Legacy Continues</h2><p>Salah’s consistency over the last decade has cemented his place as one of the greatest players in Premier League history. Klopp, in a post-match interview, described him as "the most professional athlete I have ever coached."</p>' }
    ],
    category: CategorySlug.CULTURE_SPORTS,
    authorId: 'a4',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1200',
    tags: ['Salah', 'Liverpool', 'Football'],
  },
  {
    id: 'b17',
    slug: 'bollywood-ranveer-rohit-threats',
    title: 'Security Probe: Threats Sent to Ranveer Singh and Rohit Shetty',
    summary: 'Authorities investigate gang-linked audio threats targeting high-profile Indian cinema actors.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Mumbai Police have launched a high-priority investigation into a series of threatening audio messages sent to actor Ranveer Singh and director Rohit Shetty. The threats are allegedly linked to a major transnational organized crime syndicate.</p><h2>Cyber-Forensics Enabled</h2><p>Authorities are using advanced digital footprinting and voice synthesis detection to verify the origin of the clips. Security around film sets in suburban Mumbai has been tightened as a precautionary measure while the investigation remains ongoing.</p>' }
    ],
    category: CategorySlug.CULTURE_SPORTS,
    authorId: 'a4',
    date: '2026-02-13',
    featuredImage: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1200',
    tags: ['Bollywood', 'Security', 'RanveerSingh'],
  }
];