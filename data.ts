
import { Article, Category, CategorySlug, Author } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'AI & Machine Learning', slug: CategorySlug.AI, description: 'The frontiers of neural networks and cognitive computing.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600' },
  { id: '2', name: 'Startups & VC', slug: CategorySlug.STARTUPS, description: 'Tracking the next generation of unicorns and market disruptors.', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1600' },
  { id: '3', name: 'Robotics', slug: CategorySlug.ROBOTICS, description: 'Humanoids, automation, and the future of physical labor.', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600' },
  { id: '4', name: 'EV & Mobility', slug: CategorySlug.EV_MOBILITY, description: 'Electric propulsion and the electrification of everything.', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1600' },
  { id: '5', name: 'Rail Tech', slug: CategorySlug.RAIL, description: 'High-speed rail, maglev, and urban transit innovations.', image: 'https://images.unsplash.com/photo-1541427468627-a89a96e5c399?auto=format&fit=crop&q=80&w=1600' },
  { id: '6', name: 'Aerospace', slug: CategorySlug.AEROSPACE, description: 'Supersonic travel and the next era of commercial flight.', image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1600' },
  { id: '7', name: 'Engineering', slug: CategorySlug.ENGINEERING, description: 'Material science and mechanical breakthroughs.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600' },
  { id: '8', name: 'Space & Quantum', slug: CategorySlug.SPACE_QUANTUM, description: 'Beyond Earth and into the subatomic realm.', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1600' },
];

export const AUTHORS: Author[] = [
  { id: 'a1', name: 'Dr. Elena Vance', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Senior AI Researcher and Tech Journalist.' },
  { id: 'a2', name: 'Marcus Sterling', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Aerospace engineer turned investigative reporter.' },
  { id: 'a3', name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Specialist in Quantum Computing and Hardware.' }
];

export const ARTICLES: Article[] = [
  {
    id: 'art1',
    slug: 'neural-link-breakthrough-human-cognition',
    title: 'The Neural Link: Bridging the Gap Between Silicon and Synapse',
    summary: 'A new breakthrough in non-invasive neural interfaces promises to revolutionize how we interact with artificial intelligence.',
    content: `
      <p>The boundary between human thought and digital computation is thinner than ever. Today, researchers at the Quantum Neural Labs announced a breakthrough in non-invasive neural interfaces that could change everything.</p>
      <h2>The Mechanism of Action</h2>
      <p>Using a novel material known as "Quantum Mesh," the device can interpret synaptic firing patterns from outside the skull with 99.8% accuracy.</p>
      <p>Experts suggest that this could lead to a future where keyboards and touchscreens are obsolete.</p>
    `,
    category: CategorySlug.AI,
    authorId: 'a1',
    date: '2026-05-12',
    featuredImage: 'https://images.unsplash.com/photo-1620712943543-bcc4628c9759?auto=format&fit=crop&q=80&w=1200',
    tags: ['AI', 'Neuroscience', 'Tech Ethics'],
    isFeatured: true,
    isTrending: true
  },
  {
    id: 'art2',
    slug: 'starship-mars-landing-window',
    title: 'Starship 2026: The Critical Window for the First Mars Landing',
    summary: 'SpaceX prepares for the most ambitious launch in human history as the orbital alignment for Mars approaches.',
    content: '<p>The countdown to Mars has begun. Engineers are working around the clock to ensure the latest iteration of Starship is ready.</p>',
    category: CategorySlug.SPACE_QUANTUM,
    authorId: 'a2',
    date: '2026-04-20',
    featuredImage: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1200',
    tags: ['SpaceX', 'Mars', 'Exploration'],
    isTrending: true
  },
  {
    id: 'art3',
    slug: 'solid-state-battery-ev-revolution',
    title: 'Solid State Batteries: The 1,000-Mile EV Reality',
    summary: 'A startup in Tokyo claims to have solved the stability issues of solid-state electrolytes, promising double the range of current Teslas.',
    content: '<p>Range anxiety may soon be a relic of the past. The latest results show a stable discharge cycle over 5,000 uses.</p>',
    category: CategorySlug.EV_MOBILITY,
    authorId: 'a3',
    date: '2026-06-01',
    featuredImage: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200',
    tags: ['EV', 'Batteries', 'Sustainability'],
    isFeatured: true
  },
  {
    id: 'art4',
    slug: 'robotics-humanoid-workers-construction',
    title: 'Humanoid Robots Join the High-Rise Construction Boom',
    summary: 'Autonomous humanoid workers are being deployed in Neo-Tokyo to handle dangerous structural welding tasks.',
    content: '<p>The sound of construction sites is changing. Alongside the roar of cranes is the rhythmic hum of hydraulic servos.</p>',
    category: CategorySlug.ROBOTICS,
    authorId: 'a1',
    date: '2026-03-15',
    featuredImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Robotics', 'Automation', 'Construction']
  },
  {
    id: 'art5',
    slug: 'hypersonic-rail-vancouver-mexico',
    title: 'The Pan-American Hypersonic Rail: Vancouver to Mexico in 4 Hours',
    summary: 'A new consortium of engineering firms has proposed a vacuum-sealed maglev system spanning the entire West Coast.',
    content: '<p>Imagine breakfast in Vancouver and lunch in Mexico City. That is the promise of the PAC-Maglev project.</p>',
    category: CategorySlug.RAIL,
    authorId: 'a2',
    date: '2026-02-28',
    featuredImage: 'https://images.unsplash.com/photo-1541427468627-a89a96e5c399?auto=format&fit=crop&q=80&w=1200',
    tags: ['Rail', 'Maglev', 'Infrastructure']
  },
  {
    id: 'art6',
    slug: 'quantum-computing-cryptography-breakdown',
    title: 'Quantum Advantage Reached: Is Encryption Dead?',
    summary: 'IBM researchers demonstrate a 10,000-qubit processor capable of factoring traditional RSA-2048 keys in minutes.',
    content: '<p>The "Quantum Apocalypse" for cybersecurity may have arrived earlier than predicted.</p>',
    category: CategorySlug.SPACE_QUANTUM,
    authorId: 'a3',
    date: '2026-05-25',
    featuredImage: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200',
    tags: ['Quantum', 'Security', 'IBM']
  },
  {
    id: 'art7',
    slug: 'vertical-farming-engineering-scaling',
    title: 'Engineering the Perfect Harvest: AI-Driven Vertical Farms',
    summary: 'How mechanical engineering is solving the energy density problem of indoor agriculture.',
    content: '<p>Feeding 10 billion people requires more than just soil; it requires precision engineering.</p>',
    category: CategorySlug.ENGINEERING,
    authorId: 'a1',
    date: '2026-06-10',
    featuredImage: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1200',
    tags: ['Engineering', 'Agriculture', 'AI']
  },
  {
    id: 'art8',
    slug: 'the-rise-of-fusion-startups',
    title: 'The Fusion Renaissance: 5 Startups to Watch in 2026',
    summary: 'Venture capital is pouring billions into modular fusion reactors. Here are the companies leading the charge.',
    content: '<p>Nuclear fusion has been "30 years away" for half a century. But in 2026, the timeline is finally shrinking.</p>',
    category: CategorySlug.STARTUPS,
    authorId: 'a2',
    date: '2026-06-15',
    featuredImage: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200',
    tags: ['Startups', 'Energy', 'Fusion']
  },
  // Additional articles for pagination
  { id: 'art9', slug: 'autonomous-drones-logistics', title: 'Autonomous Drones: The Final Mile of Urban Logistics', summary: 'New FAA regulations open the skies for widespread drone delivery in 2026.', content: '<p>Delivery times are dropping to minutes as drone swarms take to the sky.</p>', category: CategorySlug.ROBOTICS, authorId: 'a1', date: '2026-06-18', featuredImage: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=1200', tags: ['Drones', 'Logistics'] },
  { id: 'art10', slug: 'maglev-urban-transit-expansion', title: 'Urban Maglev: Reimagining the City Commute', summary: 'Cities are turning to magnetic levitation for silent, efficient public transport.', content: '<p>The future of city travel is frictionless and floating.</p>', category: CategorySlug.RAIL, authorId: 'a2', date: '2026-06-20', featuredImage: 'https://images.unsplash.com/photo-1556139902-7367723b7e9e?auto=format&fit=crop&q=80&w=1200', tags: ['Maglev', 'Cities'] },
  { id: 'art11', slug: 'quantum-sensors-autonomous-mining', title: 'Quantum Sensors in Deep Sea Autonomous Mining', summary: 'Quantum-scale sensitivity is unlocking rare earth minerals beneath the ocean floor.', content: '<p>Mining at the bottom of the ocean requires more than just machines; it requires quantum precision.</p>', category: CategorySlug.SPACE_QUANTUM, authorId: 'a3', date: '2026-06-22', featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200', tags: ['Mining', 'Quantum'] },
  { id: 'art12', slug: 'ai-code-generation-future', title: 'The End of Coding? AI and the No-Code Revolution', summary: 'Large Language Models are now writing 90% of production code in Silicon Valley.', content: '<p>Software engineering is evolving from writing syntax to defining intent.</p>', category: CategorySlug.AI, authorId: 'a1', date: '2026-06-24', featuredImage: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=1200', tags: ['AI', 'Coding'] }
];
