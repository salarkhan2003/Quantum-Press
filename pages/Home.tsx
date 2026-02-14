
import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, ChevronLeft, ChevronRight, Hash } from 'lucide-react';
import { ARTICLES, CATEGORIES } from '../data';
import { ArticleCard } from '../components/ArticleCard';
import { CategorySlug } from '../types';
import { SEO } from '../components/SEO';

const Hero: React.FC = () => {
  const slides = ARTICLES.slice(0, 4); // Top breaking news
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const featured = slides[currentIndex];
  const cat = CATEGORIES.find(c => c.slug === featured.category);

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden group border-b border-gray-200 dark:border-white/5">
      <div className="absolute inset-0 transition-all duration-1000">
        <img 
          src={featured.featuredImage} 
          alt={featured.title} 
          className="w-full h-full object-cover brightness-[0.6] scale-105 group-hover:scale-100 transition-transform duration-[10000ms]" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0A0A0A] via-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 h-full flex items-end pb-24 relative z-10">
        <div className="max-w-4xl animate-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00E5FF]/20 border border-[#00E5FF]/30 backdrop-blur-md rounded-full mb-6">
            <Zap size={14} className="text-[#00E5FF]" />
            <span className="text-[10px] font-black text-[#00E5FF] uppercase tracking-[0.2em]">{cat?.name}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mb-6 text-gray-900 dark:text-white tracking-tighter italic">
            {featured.title}
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 line-clamp-2 max-w-2xl font-light">
            {featured.summary}
          </p>
          <div className="flex items-center gap-6">
            <Link 
              to={`/category/${featured.category}/${featured.slug}`} 
              className="inline-flex items-center gap-3 bg-[#00E5FF] text-black px-8 py-4 font-black uppercase text-xs tracking-[0.2em] hover:bg-black hover:text-white transition-all shadow-2xl"
            >
              Analyze Report <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 flex gap-2 z-20">
        <button onClick={prevSlide} className="p-3 bg-white/10 hover:bg-[#00E5FF] hover:text-black backdrop-blur-md text-white border border-white/20 transition-all">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="p-3 bg-white/10 hover:bg-[#00E5FF] hover:text-black backdrop-blur-md text-white border border-white/20 transition-all">
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export const Home: React.FC = () => {
  const trendingArticles = ARTICLES.filter(a => a.isTrending).slice(0, 4);
  const latestArticles = ARTICLES.slice(0, 10);

  return (
    <div className="space-y-24 pb-24">
      <SEO title="Deep Tech Intel" />
      <Hero />

      {/* Trending Section */}
      <section className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <TrendingUp className="text-[#00E5FF]" />
          <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-900 dark:text-white">Pulse Indicators</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingArticles.map((article, i) => (
            <div key={article.id} className="relative group">
              <span className="absolute -top-10 -left-4 text-9xl font-black text-gray-100 dark:text-white/[0.03] pointer-events-none">{i + 1}</span>
              <div className="relative pt-6">
                <ArticleCard article={article} variant="compact" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8 space-y-12">
          <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/5 pb-4">
             <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-900 dark:text-white">The Intelligence Log</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {latestArticles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-16">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 border-l-2 border-[#00E5FF] pl-4 text-gray-900 dark:text-white">Sector Hubs</h3>
            <div className="grid grid-cols-1 gap-2">
              {CATEGORIES.map(cat => (
                <Link 
                  key={cat.id} 
                  to={`/category/${cat.slug}`}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#111] hover:bg-[#00E5FF] hover:text-black transition-all group"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest">{cat.name}</span>
                  <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-[#00E5FF] p-8 text-black shadow-2xl">
            <h3 className="text-2xl font-black uppercase mb-4 leading-tight">Quantum Alert</h3>
            <p className="text-sm font-bold mb-6 opacity-80 italic">Anthropic $30B infusion triggers market re-valuation across the AI inference sector. Get the briefing.</p>
            <button className="w-full py-4 bg-black text-white font-black uppercase text-[10px] tracking-[0.2em] hover:bg-[#222]">Access Memo</button>
          </div>
        </aside>
      </section>
    </div>
  );
};
