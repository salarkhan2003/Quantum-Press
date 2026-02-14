
export enum CategorySlug {
  AI = 'ai-machine-learning',
  STARTUPS = 'startups',
  ROBOTICS = 'robotics',
  EV_MOBILITY = 'ev-mobility',
  RAIL = 'rail-tech',
  AEROSPACE = 'aerospace',
  ENGINEERING = 'engineering',
  SPACE_QUANTUM = 'space-quantum',
  LIFE_SCIENCES = 'life-sciences',
  MARKETS_POLICY = 'markets-policy',
  CULTURE_SPORTS = 'culture-sports',
  RECRUITMENT_EXAMS = 'recruitment-exams'
}

export type ContentBlock = 
  | { type: 'text'; content: string }
  | { type: 'image'; url: string; caption?: string; fullWidth?: boolean }
  | { type: 'video'; provider: 'youtube' | 'vimeo' | 'html5'; id: string; caption?: string }
  | { type: 'code'; language: string; code: string; title?: string };

export interface Category {
  id: string;
  name: string;
  slug: CategorySlug;
  description: string;
  image: string;
}

export interface Author {
  id: string;
  name: string;
  avatar: string;
  bio: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string; // Legacy support
  contentBlocks?: ContentBlock[]; // New structured content
  category: CategorySlug;
  authorId: string;
  date: string;
  featuredImage: string;
  tags: string[];
  isFeatured?: boolean;
  isTrending?: boolean;
}

export interface Comment {
  id: string;
  author: string;
  date: string;
  content: string;
}
