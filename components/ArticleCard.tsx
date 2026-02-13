
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowUpRight } from 'lucide-react';
import { Article } from '../types';
import { CATEGORIES } from '../data';

interface ArticleCardProps {
  article: Article;
  variant?: 'large' | 'compact' | 'horizontal';
}

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800';

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = FALLBACK_IMAGE;
};

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, variant = 'large' }) => {
  const category = CATEGORIES.find(c => c.slug === article.category);

  if (variant === 'compact') {
    return (
      <Link to={`/category/${article.category}/${article.slug}`} className="group flex gap-4 border-b border-gray-100 dark:border-white/5 pb-4">
        <div className="flex-1">
          <span className="text-[10px] uppercase font-bold text-[#00E5FF] tracking-widest">{category?.name}</span>
          <h4 className="text-base font-bold leading-snug group-hover:text-[#00E5FF] transition-colors mt-1 line-clamp-2 text-gray-900 dark:text-white">
            {article.title}
          </h4>
        </div>
        <div className="w-20 h-20 flex-shrink-0 bg-gray-100 dark:bg-[#111] rounded overflow-hidden">
          <img 
            src={article.featuredImage} 
            alt={article.title} 
            onError={handleImageError}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
          />
        </div>
      </Link>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Link to={`/category/${article.category}/${article.slug}`} className="group flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 aspect-video bg-gray-100 dark:bg-[#111] overflow-hidden rounded-sm">
           <img 
            src={article.featuredImage} 
            alt={article.title} 
            onError={handleImageError}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
        </div>
        <div className="md:w-2/3 py-2">
          <span className="text-[10px] uppercase font-bold text-[#00E5FF] tracking-widest">{category?.name}</span>
          <h3 className="text-2xl font-bold mt-2 group-hover:text-[#00E5FF] transition-colors text-gray-900 dark:text-white">{article.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm line-clamp-2 leading-relaxed">{article.summary}</p>
          <div className="mt-4 flex items-center gap-4 text-xs text-gray-500 font-medium">
            <span className="flex items-center gap-1"><Clock size={12} /> {article.date}</span>
            <span className="flex items-center gap-1 hover:text-brand transition-colors">Read Article <ArrowUpRight size={12} /></span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/category/${article.category}/${article.slug}`} className="group block h-full">
      <div className="relative aspect-video bg-gray-100 dark:bg-[#111] overflow-hidden rounded-sm">
        <img 
          src={article.featuredImage} 
          alt={article.title} 
          onError={handleImageError}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#00E5FF] text-black text-[10px] px-2 py-1 font-black uppercase tracking-widest shadow-lg">
            {category?.name}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-bold leading-tight group-hover:text-[#00E5FF] transition-colors text-gray-900 dark:text-white">
          {article.title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm line-clamp-2 leading-relaxed">
          {article.summary}
        </p>
        <div className="mt-4 flex items-center gap-4 text-[10px] text-gray-500 dark:text-gray-600 font-bold uppercase tracking-widest">
           <span>{article.date}</span>
           <span className="w-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full"></span>
           <span className="group-hover:text-gray-900 dark:group-hover:text-white transition-colors">Read Full Tech Report</span>
        </div>
      </div>
    </Link>
  );
};
