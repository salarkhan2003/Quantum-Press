
export enum CategorySlug {
  AI = 'ai-machine-learning',
  STARTUPS = 'startups',
  ROBOTICS = 'robotics',
  EV_MOBILITY = 'ev-mobility',
  RAIL = 'rail-tech',
  AEROSPACE = 'aerospace',
  ENGINEERING = 'engineering',
  SPACE_QUANTUM = 'space-quantum'
}

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
  content: string;
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
