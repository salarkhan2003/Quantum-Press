import { Article, Category, CategorySlug, Author } from './types';

export const CATEGORIES: Category[] = [
  { id: '1', name: 'AI & Machine Learning', slug: CategorySlug.AI, description: 'Neural networks, LLMs, and the cognitive computing revolution.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600' },
  { id: '5', name: 'Rail Tech', slug: CategorySlug.RAIL, description: 'High-speed rail, maglev, and urban transit systems.', image: 'https://images.unsplash.com/photo-1541427468627-a89a96e5c399?auto=format&fit=crop&q=80&w=1600' },
  { id: '12', name: 'Recruitment & Exams', slug: CategorySlug.RECRUITMENT_EXAMS, description: 'National exam cycles, academic logistics, and career gateways.', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1600' },
  { id: '3', name: 'Robotics', slug: CategorySlug.ROBOTICS, description: 'Humanoids, automation, and the robotics of physical labor.', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600' },
  { id: '4', name: 'EV & Mobility', slug: CategorySlug.EV_MOBILITY, description: 'Electrification, infrastructure, and autonomous transport.', image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1600' },
  { id: '6', name: 'Aerospace', slug: CategorySlug.AEROSPACE, description: 'Supersonic flight, heavy-lift rockets, and commercial space.', image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1600' },
  { id: '2', name: 'Startups & VC', slug: CategorySlug.STARTUPS, description: 'Market disruptors, unicorns, and the capital fueling innovation.', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1600' },
  { id: '10', name: 'Policy & Markets', slug: CategorySlug.MARKETS_POLICY, description: 'Global trade, regulatory frameworks, and macroeconomic shifts.', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1600' },
  { id: '7', name: 'Engineering', slug: CategorySlug.ENGINEERING, description: 'Advanced materials, semiconductor nodes, and mechanical design.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600' },
  { id: '8', name: 'Space & Quantum', slug: CategorySlug.SPACE_QUANTUM, description: 'Exploration of the deep cosmos and subatomic advantages.', image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1600' },
  { id: '9', name: 'Life Sciences', slug: CategorySlug.LIFE_SCIENCES, description: 'Genomics, biotechnology, and the future of human longevity.', image: 'https://images.unsplash.com/photo-1532187863486-abf91ad1b262?auto=format&fit=crop&q=80&w=1600' },
  { id: '11', name: 'Culture & Sports', slug: CategorySlug.CULTURE_SPORTS, description: 'Social trends, entertainment, and high-performance sports.', image: 'https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=1600' },
];

export const AUTHORS: Author[] = [
  { id: 'a1', name: 'Dr. Elena Vance', avatar: 'https://i.pravatar.cc/150?u=elena', bio: 'Senior AI Intelligence Specialist and Research Lead at Quantum Press.' },
  { id: 'a2', name: 'Marcus Sterling', avatar: 'https://i.pravatar.cc/150?u=marcus', bio: 'Aerospace & Heavy Engineering Correspondent.' },
  { id: 'a3', name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?u=sarah', bio: 'Tech Economics and Hardware Analyst.' },
  { id: 'a4', name: 'Jordan Hayes', avatar: 'https://i.pravatar.cc/150?u=jordan', bio: 'Global Affairs & Cultural Analyst.' }
];

export const ARTICLES: Article[] = [
  // --- RAIL TECH (EXPANDED) ---
  {
    id: 'rail-sc-maglev-l0',
    slug: 'japan-sc-maglev-l0-series-benchmark',
    title: 'SC-Maglev L0 Series: Japan Smashes Commercial Stability Benchmarks',
    summary: 'JR Central confirms successful 603 km/h long-duration tests with new superconducting magnets, paving the way for the 2027 Chuo Shinkansen opening.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Yamanashi, Japan — The L0 Series Maglev has achieved a new milestone in operational stability. During a 48-hour continuous run, the superconducting magnets maintained critical temperature within 0.001K, ensuring zero lift-drift at speeds exceeding 550 km/h.</p><h2>The Superconducting Advantage</h2><p>This success relies on the new "Niobium-Titanium 2.0" alloy, which allows for higher current densities in the levitation coils. Engineers are now focusing on the "Noise-Cancellation Shell" designed to mitigate the sonic impact of high-speed tunnel entries.</p>' },
      { type: 'code', language: 'rust', title: 'Levitation Feedback Control', code: `
// Magnetic Levitation Air-Gap Controller (Rust)
pub struct MaglevController {
    target_gap: f32, // Target gap in mm
    kp: f32,
    ki: f32,
}

impl MaglevController {
    pub fn compute_current(&self, current_gap: f32) -> f32 {
        let error = self.target_gap - current_gap;
        let adjustment = error * self.kp;
        adjustment.clamp(0.0, 1000.0) // Safe current limit in Amps
    }
}
      ` }
    ],
    category: CategorySlug.RAIL,
    authorId: 'a2',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=1200',
    tags: ['Maglev', 'Japan', 'Engineering', 'HSR'],
    isFeatured: true,
    isTrending: true
  },
  {
    id: 'rail-alstom-stilfold',
    slug: 'alstom-stilfold-origami-steel-partnership',
    title: 'Origami in Motion: Alstom Scales Stilfold curve-bending for Lighter Rail Frames',
    summary: 'Swedish "industrial origami" tech promises a 20% weight reduction in car structures.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Stockholm — Alstom has officially expanded its partnership with Swedish deep-tech firm Stilfold. The collaboration focuses on "Industrial Origami"—a proprietary technology that uses robotic curve-bending to create structural components from single sheets of high-strength steel.</p><h2>Lighter, Stronger, Greener</h2><p>By eliminating welding in critical frame segments, Stilfold reduces the heat-affected zones that typically lead to fatigue. "We are folding our way to a zero-carbon railway," says Stilfold CEO. The first commercial deployment is expected on regional French lines in 2027.</p>' },
      { type: 'code', language: 'python', title: 'Frame Stress Analysis', code: `
import math

def simulate_fold_stress(thickness, radius, angle):
    # Material: High Strength Steel (HSS)
    # Calculation for maximum stress at the fold radius
    yield_strength = 700e6 # 700 MPa
    strain = thickness / (2 * radius)
    stress = strain * 210e9 # Modulus of elasticity (Pa)
    
    is_safe = stress < yield_strength
    return {"stress_pa": stress, "safety": is_safe}

# Example: 5mm sheet, 15mm radius
print(simulate_fold_stress(0.005, 0.015, 90))
      ` }
    ],
    category: CategorySlug.RAIL,
    authorId: 'a2',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1541427468627-a89a96e5c399?auto=format&fit=crop&q=80&w=1200',
    tags: ['Alstom', 'Stilfold', 'RailEngineering', 'Sustainability'],
  },
  {
    id: 'rail-dutch-ns-it',
    slug: 'dutch-ns-it-sovereignty-backlash',
    title: 'Cyber Sovereignty: Dutch Railways Face Backlash Over US IT Migration',
    summary: 'The Dutch NS transition to a US-based cloud provider has triggered a national security probe into critical rail infrastructure data.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Utrecht — The Dutch national railway (NS) is navigating a political firestorm following the decision to migrate its entire real-time traffic management system to a US-based cloud provider.</p>' }
    ],
    category: CategorySlug.RAIL,
    authorId: 'a3',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1532102235608-dc8fc689c9ab?auto=format&fit=crop&q=80&w=1200',
    tags: ['DutchNS', 'CyberSecurity', 'Infrastructure'],
    isTrending: true
  },
  {
    id: 'rail-china-cr450-spring',
    slug: 'china-hsr-spring-festival-cr450-prototype',
    title: 'Spring Rush: China High-Speed Rail Powers Spring Festival with Tech Advances',
    summary: 'Network handles massive travel rush using intelligence leaps, including CR450 prototypes hitting 453 km/h.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Beijing — The annual Spring Festival travel rush is witnessing a technological showcase. The CR450 prototype has successfully completed high-capacity trials, maintaining 400+ km/h even with full passenger loads.</p>' }
    ],
    category: CategorySlug.RAIL,
    authorId: 'a3',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&q=80&w=1200',
    tags: ['ChinaRail', 'HSR', 'CR450'],
  },

  // --- STARTUPS & VC (EXPANDED) ---
  {
    id: 'startup-spinny-fidelity',
    slug: 'spinny-secures-170m-fidelity-accel',
    title: 'Used-Car Renaissance: Spinny Secures $170M from Fidelity/Accel',
    summary: 'India’s leading used-car platform attracts major US institutional capital, signaling a recovery in mobility-tech valuations.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Gurugram — Spinny has confirmed a $160–170 million funding round led by Fidelity and Accel. The capital infusion comes at a critical time as the Indian used-car market undergoes rapid professionalization.</p>' }
    ],
    category: CategorySlug.STARTUPS,
    authorId: 'a3',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1200',
    tags: ['Spinny', 'IndiaVC', 'Fidelity', 'MobilityTech'],
    isTrending: true
  },
  {
    id: 'startup-razorpay-ipo',
    slug: 'razorpay-ipo-shortlist-banks',
    title: 'Fintech Titan: Razorpay Reportedly Shortlists Banks for $700M IPO',
    summary: 'Axis Capital, Kotak, JP Morgan, and Citi are touted as lead managers for the highly anticipated listing.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Fintech giant Razorpay is moving closer to its public debut. Sources indicate the firm has shortlisted a consortium of global and domestic investment banks for a potential $700 million IPO in late 2026.</p>' }
    ],
    category: CategorySlug.STARTUPS,
    authorId: 'a3',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Razorpay', 'IPO', 'Fintech', 'Markets'],
  },
  {
    id: 'startup-idfy-series-f',
    slug: 'idfy-series-f-funding-global-expansion',
    title: 'Digital Trust: IDfy Secures ₹476 Crore in Series F to Fuel Global Growth',
    summary: 'Neo Asset Management leads the round as the global demand for AI-driven verification surges.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>IDfy has successfully closed a Series F round totaling ₹476 crore ($52 million). The company plans to use the funds to expand its footprint in South East Asia and the Middle East.</p>' }
    ],
    category: CategorySlug.STARTUPS,
    authorId: 'a3',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200',
    tags: ['IDfy', 'Verification', 'AI', 'SeriesF'],
  },

  // --- AI & MACHINE LEARNING (EXPANDED) ---
  {
    id: 'ai-anthropic-30b',
    slug: 'anthropic-30b-funding-round-valuation-380b',
    title: 'Anthropic’s $30B Funding Round Pushes Valuation to $380B',
    summary: 'US-based Anthropic closed a massive Series G round led by GIC and Coatue, doubling its valuation in under six months.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>San Francisco — Anthropic has finalized a historic $30 billion Series G round. This capital infusion, which includes significant participation from NVIDIA affiliates and Microsoft, sets the stage for the next decade of ethical AI development.</p>' },
      { type: 'code', language: 'python', title: 'Agentic Reasoning Simulator', code: `
class ClaudeAgent:
    def __init__(self, context):
        self.context = context

    def execute_chain_of_thought(self, prompt):
        # Simulated recursive thinking logic for Claude 4
        thoughts = [f"Analyzing: {prompt}"]
        for i in range(3):
            thoughts.append(f"Reasoning Step {i+1}: Synthesizing...")
        return thoughts

agent = ClaudeAgent("Global Market Intel")
print(agent.execute_chain_of_thought("Anthropic Valuation Impact"))
      ` }
    ],
    category: CategorySlug.AI,
    authorId: 'a1',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200',
    tags: ['Anthropic', 'AIFunding', 'Claude', 'VC'],
    isFeatured: true,
  },
  {
    id: 'ai-bytedance-infra',
    slug: 'bytedance-all-in-ai-infrastructure-billions',
    title: 'ByteDance Goes All-In on AI Infrastructure with Billions in Spending',
    summary: 'TikTok parent plans heavy 2026 investments in proprietary silicon to support 100M+ Doubao users.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Beijing — ByteDance is pivotally shifting its capital expenditure toward hardware sovereignty. The goal is to build a vertically integrated AI stack from chip design to social algorithm.</p>' }
    ],
    category: CategorySlug.AI,
    authorId: 'a1',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    tags: ['ByteDance', 'AIChips', 'ChinaTech'],
  },

  // --- ENGINEERING & INNOVATION (EXPANDED) ---
  {
    id: 'eng-etrnl-energy',
    slug: 'etrnl-energy-seed-funding-battery-tech',
    title: 'Battery Breakthrough: e-TRNL Energy Raises ₹27.4 Crore in Seed Round',
    summary: 'IAN Alpha Fund leads the investment in next-gen battery chemistries aimed at the high-performance EV market.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>e-TRNL Energy has secured ₹27.4 crore ($3M) to accelerate the prototyping of their "solid-liquid hybrid" battery cell. This technology promises 30% higher energy density than current LFP standards.</p>' }
    ],
    category: CategorySlug.ENGINEERING,
    authorId: 'a2',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200',
    tags: ['EnergyTech', 'Batteries', 'SeedFunding'],
  },
  {
    id: 'eng-six-sense-mobility',
    slug: 'six-sense-mobility-automotive-electronics',
    title: 'Localized Microchips: Six Sense Mobility Raises $4.8M for Noida Plant',
    summary: 'The startup aims to decentralize automotive electronics manufacturing in the South Asian corridor.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Noida — Six Sense Mobility is establishing a specialized automotive semiconductor assembly plant. The $4.8 million round will fund the installation of high-precision cleanrooms.</p>' }
    ],
    category: CategorySlug.ENGINEERING,
    authorId: 'a3',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    tags: ['Semiconductors', 'Automotive', 'NoidaTech'],
  },

  // --- AEROSPACE (EXPANDED) ---
  {
    id: 'aero-spacex-crew12',
    slug: 'spacex-crew-12-launches-successfully-iss',
    title: 'Orbital Routine: SpaceX Crew-12 Launches Successfully to ISS',
    summary: 'Four astronauts reached orbit Feb 13; docking Feb 14 restores full ISS crew.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Cape Canaveral — The SpaceX Crew-12 mission has successfully achieved orbital insertion. The crew includes NASA’s Meir and Hathaway, ESA’s Sophie Adenot, and Roscosmos’ Fedyaev.</p>' }
    ],
    category: CategorySlug.AEROSPACE,
    authorId: 'a2',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=1200',
    tags: ['SpaceX', 'NASA', 'ISS', 'Aerospace'],
    isFeatured: true,
  },
  {
    id: 'aero-orbex-funding',
    slug: 'orbex-funding-crisis-europe-rocket-push',
    title: 'Launch Hazard: Orbex Faces Funding Crisis in Europe’s Rocket Push',
    summary: 'The UK startup is reportedly out of cash, raising concerns for independent European launch capabilities.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Orbex is reportedly facing a severe liquidity crunch. Despite successful engine tests, the high burn rate of orbital development has outpaced its current capital runway.</p>' }
    ],
    category: CategorySlug.AEROSPACE,
    authorId: 'a2',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200',
    tags: ['Orbex', 'UKSpace', 'Funding'],
  },

  // --- POLICY & MARKETS (EXPANDED) ---
  {
    id: 'policy-trusted-tech-alliance',
    slug: 'trusted-tech-alliance-munich-security-conference',
    title: 'Tech Diplomacy: 16 Global Providers Form Trusted Tech Alliance',
    summary: 'Amazon, Anthropic, and others unite to establish shared principles for a "trusted technology stack" at Munich.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Munich — The Trusted Tech Alliance (TTA) has been formally announced. The group aims to standardize cybersecurity and AI safety protocols across the Western tech ecosystem.</p>' }
    ],
    category: CategorySlug.MARKETS_POLICY,
    authorId: 'a4',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1521791136064-7986c2959d1c?auto=format&fit=crop&q=80&w=1200',
    tags: ['TTA', 'Security', 'Policy', 'AI'],
  },
  {
    id: 'policy-rbi-acquisition-finance',
    slug: 'rbi-acquisition-finance-new-norms',
    title: 'Financial Guardrails: New RBI Norms for Acquisition Finance Set for April 1',
    summary: 'Updated regulations will impact how lenders and corporates structure large-scale deals in the 2026 fiscal year.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>The Reserve Bank of India has released a circular detailing stricter norms for acquisition financing, aiming to reduce systemic leverage.</p>' }
    ],
    category: CategorySlug.MARKETS_POLICY,
    authorId: 'a3',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=1200',
    tags: ['RBI', 'Finance', 'Regulation', 'India'],
  },

  // --- RECRUITMENT & EXAMS (PRESERVED) ---
  {
    id: 'f14-cbse-deadline',
    slug: 'cbse-2026-marks-upload-deadline-today',
    title: 'CBSE Urgent Alert: Final Deadline for Class X & XII Practical Marks Upload',
    summary: 'Today is the absolute final window for schools to synchronize internal assessment data for the 2026 session.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>New Delhi — The Central Board of Secondary Education (CBSE) portal is set to close at 23:59 IST today.</p>' }
    ],
    category: CategorySlug.RECRUITMENT_EXAMS,
    authorId: 'a3',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
    tags: ['CBSE', 'Exams2026', 'EducationIndia'],
    isTrending: true
  },
  {
    id: 'f14-india-post-gds',
    slug: 'india-post-gds-recruitment-schedule-closes',
    title: 'India Post GDS Recruitment: Registration Closes at 17:00 Today',
    summary: 'The massive GDS Online Engagement Schedule 1 – 2026 window terminates this evening.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Candidates have only a few hours left to finalize their applications for Gramin Dak Sevaks.</p>' }
    ],
    category: CategorySlug.RECRUITMENT_EXAMS,
    authorId: 'a4',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1566933293069-b55c7f326dd4?auto=format&fit=crop&q=80&w=1200',
    tags: ['IndiaPost', 'Recruitment', 'GovtJobs'],
  },

  // --- ROBOTICS (EXPANDED) ---
  {
    id: 'robot-hk-torque',
    slug: 'hong-kong-high-torque-mini-humanoids-debut',
    title: 'Micro-Muscle: High-Torque Mini Humanoids Debut in Hong Kong',
    summary: 'China’s High Torque Robotics showcased lightweight Mini Pi/Hi models with industrial-grade precision.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Hong Kong — The Pi/Hi series represents a breakthrough in small-scale robotics, offering sub-millimeter positioning accuracy in a form factor under 8kg.</p>' }
    ],
    category: CategorySlug.ROBOTICS,
    authorId: 'a2',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
    tags: ['Humanoids', 'HongKong', 'Robotics'],
    isTrending: true
  },
  {
    id: 'robot-siemens-humanoid',
    slug: 'siemens-uk-humanoid-factory-deployment',
    title: 'Automated Logistics: Siemens Deploys UK Humanoid in German Factory',
    summary: 'A proof-of-concept for autonomous tote-handling was completed successfully today.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Erlangen, Germany — The "Humanoid-1" unit successfully performed over 1,000 continuous pick-and-place operations without human intervention.</p>' }
    ],
    category: CategorySlug.ROBOTICS,
    authorId: 'a2',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&q=80&w=1200',
    tags: ['Siemens', 'Logistics', 'Robotics'],
  },

  // --- EV & MOBILITY (EXPANDED) ---
  {
    id: 'ev-global-january-sales',
    slug: 'global-ev-registrations-dip-january-2026',
    title: 'Market Shift: Global EV Registrations Dip 3% in January',
    summary: 'Benchmark data shows ~1.2M units sold; China’s tax changes cause localized slowdowns.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Global EV momentum hit a seasonal roadblock in January, with total registrations falling slightly to 1.2 million units.</p>' }
    ],
    category: CategorySlug.EV_MOBILITY,
    authorId: 'a3',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200',
    tags: ['EVSales', 'GlobalMarkets', 'AutoNews'],
  },

  // --- MARKETS: BLACK-SCHOLES SCHEMATIC ---
  {
    id: 'markets-black-scholes',
    slug: 'black-scholes-hedging-code-schematic',
    title: 'Code: Black-Scholes Delta Hedging for Tech Volatility',
    summary: 'A Python implementation for managing portfolio risk during high-frequency AI stock fluctuations.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>With AI stock volatility reaching record highs, delta hedging remains the primary mechanism for institutional stability.</p>' },
      { type: 'code', language: 'python', title: 'Delta Hedging Script', code: `
import math
from scipy.stats import norm

def black_scholes_delta(S, K, T, r, sigma):
    # S: Stock price, K: Strike, T: Time to expiry, r: risk-free rate, sigma: volatility
    d1 = (math.log(S / K) + (r + 0.5 * sigma**2) * T) / (sigma * math.sqrt(T))
    return norm.cdf(d1)

# Example: Hedging an NVDA option
delta = black_scholes_delta(850, 800, 0.5, 0.05, 0.4)
print(f"Hedge Ratio: {delta:.4f}")
      ` }
    ],
    category: CategorySlug.MARKETS_POLICY,
    authorId: 'a3',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1611974715853-2b8ef9597395?auto=format&fit=crop&q=80&w=1200',
    tags: ['QuantitativeFinance', 'Python', 'Hedging'],
  },

  // --- LIFE SCIENCES: GENOMIC MATCHING SCHEMATIC ---
  {
    id: 'life-sci-crispr-alignment',
    slug: 'crispr-genomic-alignment-regex-schematic',
    title: 'Code: Regex-Based Genomic Alignment for CRISPR Targeting',
    summary: 'Utilizing specialized regular expressions to identify PAM sites in synthetic DNA sequences.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Identifying the Protospacer Adjacent Motif (PAM) is crucial for CRISPR-Cas9 efficiency.</p>' },
      { type: 'code', language: 'python', title: 'PAM Site Finder', code: `
import re

def find_pam_sites(sequence):
    # Looking for NGG motif (where N is any nucleotide)
    pattern = r'(?=[ACGT]GG)'
    matches = [m.start() for m in re.finditer(pattern, sequence)]
    return matches

dna_seq = "ATGCGGCTAGCTAGCTAGGGG"
sites = find_pam_sites(dna_seq)
print(f"PAM sites found at indices: {sites}")
      ` }
    ],
    category: CategorySlug.LIFE_SCIENCES,
    authorId: 'a1',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1532187863486-abf91ad1b262?auto=format&fit=crop&q=80&w=1200',
    tags: ['Genomics', 'CRISPR', 'BioInformatics'],
  },

  // --- HISTORICAL ARCHIVE ---
  {
    id: 'f14-bnp-dhaka',
    slug: 'bangladesh-bnp-landslide-victory-2026',
    title: 'Landslide Victory: BNP to Form Government in Bangladesh After Historic Election',
    summary: 'The Tarique Rahman-led BNP claims a definitive win in the landmark 2026 elections.',
    content: '',
    contentBlocks: [
      { type: 'text', content: '<p>Dhaka — Saturday, Feb 14, 2026. The political landscape of South Asia has reached a turning point.</p>' }
    ],
    category: CategorySlug.MARKETS_POLICY,
    authorId: 'a4',
    date: '2026-02-14',
    featuredImage: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=1200',
    tags: ['Bangladesh', 'Election2026'],
  }
];
