
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, ChevronLeft, ChevronRight, Hash, Play, Pause } from 'lucide-react';
import { ARTICLES, CATEGORIES } from '../data';
import { ArticleCard } from '../components/ArticleCard';
import { CategorySlug } from '../types';
import { SEO } from '../components/SEO';

const FALLBACK_HERO = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600';
const ARTICLES_PER_PAGE = 10;
const ROTATION_INTERVAL = 3000;

const Hero: React.FC = () => {
  const slides = ARTICLES.slice(0, 6); // Featuring the top 6 reports in the carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  // Fix: Use ReturnType<typeof setTimeout> instead of NodeJS.Timeout to avoid namespace issues in browser environment
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, [slides.length]);

  useEffect(() => {
    if (!isPaused) {
      const interval = 30; // 30ms for smooth progress bar
      const increment = (interval / ROTATION_INTERVAL) * 100;
      
      const pTimer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            nextSlide();
            return 0;
          }
          return prev + increment;
        });
      }, interval);

      return () => clearInterval(pTimer);
    }
  }, [isPaused, nextSlide]);

  const featured = slides[currentIndex];
  const cat = CATEGORIES.find(c => c.slug === featured.category);

  return (
    <section 
      className="relative h-[85vh] min-h-[650px] overflow-hidden border-b border-gray-200 dark:border-white/10 group" 
      aria-label="Featured Intelligence Carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slide Content */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img 
              src={slide.featuredImage} 
              alt={slide.title} 
              loading={index === 0 ? "eager" : "lazy"}
              onError={(e) => { e.currentTarget.src = FALLBACK_HERO; }}
              className={`absolute inset-0 w-full h-full object-cover brightness-75 dark:brightness-50 transition-transform duration-[10000ms] ease-linear ${index === currentIndex ? 'scale-110' : 'scale-100'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0A0A0A] via-transparent to-transparent"></div>
            
            <div className="container mx-auto px-6 h-full flex items-end pb-24 relative z-20">
              <div className={`max-w-3xl transform transition-all duration-700 delay-300 ${index === currentIndex ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00E5FF]/20 border border-[#00E5FF]/30 backdrop-blur-md rounded-full mb-6">
                   <Zap size={14} className="text-[#00E5FF]" />
                   <span className="text-[10px] font-bold text-[#00E5FF] uppercase tracking-widest">
                     Intel Sector: {CATEGORIES.find(c => c.slug === slide.category)?.name}
                   </span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-900 dark:text-white tracking-tighter">
                  <Link to={`/category/${slide.category}/${slide.slug}`} className="hover:text-[#00E5FF] transition-colors line-clamp-3 italic">
                    {slide.title}
                  </Link>
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 line-clamp-2 max-w-2xl font-light">
                  {slide.summary}
                </p>
                <div className="flex items-center gap-6">
                  <Link 
                    to={`/category/${slide.category}/${slide.slug}`} 
                    className="inline-flex items-center gap-3 bg-[#00E5FF] text-black px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl"
                  >
                    Analyze Report <ArrowRight size={18} />
                  </Link>
                  <div className="hidden sm:flex items-center gap-3 text-gray-400">
                    {isPaused ? <Pause size={16} /> : <Play size={16} />}
                    <span className="text-[10px] font-black uppercase tracking-widest">Archive Stream {currentIndex + 1}/{slides.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-6 z-30 pointer-events-none">
        <button 
          onClick={prevSlide}
          className="p-4 bg-black/20 hover:bg-[#00E5FF] hover:text-black text-white backdrop-blur-md border border-white/10 rounded-full transition-all opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 pointer-events-auto"
          aria-label="Previous Report"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-4 bg-black/20 hover:bg-[#00E5FF] hover:text-black text-white backdrop-blur-md border border-white/10 rounded-full transition-all opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 pointer-events-auto"
          aria-label="Next Report"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress & Pips */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="h-1 bg-gray-200 dark:bg-white/10 w-full">
          <div 
            className="h-full bg-[#00E5FF] transition-all duration-30 ease-linear shadow-[0_0_10px_#00E5FF]" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="container mx-auto px-6 py-4 flex justify-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrentIndex(i); setProgress(0); }}
              className={`h-1.5 transition-all duration-300 ${currentIndex === i ? 'w-12 bg-[#00E5FF]' : 'w-4 bg-gray-300 dark:bg-white/20 hover:bg-[#00E5FF]/50'}`}
              aria-label={`Go to slide ${i + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const trendingArticles = ARTICLES.filter(a => a.isTrending).slice(0, 4);
  
  // Extract all unique tags for the trending cloud
  const allTags = Array.from(new Set(ARTICLES.flatMap(a => a.tags))).slice(0, 15);

  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const latestArticlesPage = ARTICLES.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(ARTICLES.length / ARTICLES_PER_PAGE);

  return (
    <div className="space-y-24 pb-24">
      <SEO 
        title="Deep Tech Intel & Engineering Insights" 
        description="The latest reports on AI, Space exploration, Robotics, and Advanced Engineering. Bridging the gap between silicon and synapse."
      />
      <Hero />

      {/* Trending Section */}
      <section className="container mx-auto px-6" aria-labelledby="trending-title">
        <div className="flex items-center gap-3 mb-10 border-b border-gray-200 dark:border-white/5 pb-4">
          <TrendingUp className="text-[#00E5FF]" />
          <h2 id="trending-title" className="text-xl font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white">Trending Now</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingArticles.map((article, i) => (
            <div key={article.id} className="relative group">
              <span className="absolute -top-6 -left-2 text-8xl font-black text-gray-100 dark:text-white/5 group-hover:text-brand/10 transition-colors pointer-events-none select-none z-0" aria-hidden="true">
                0{i + 1}
              </span>
              <div className="relative pt-8 z-10">
                 <ArticleCard article={article} variant="compact" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Grid & Sidebar Layout */}
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16" id="latest-section">
        <div className="lg:col-span-2 space-y-12">
          <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-white/5 pb-4">
            <h2 className="text-xl font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white">The Latest Intelligence</h2>
            <nav className="flex items-center gap-4" aria-label="Pagination">
               <button 
                 onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                 disabled={currentPage === 1}
                 className="p-1 hover:text-[#00E5FF] disabled:opacity-20 transition-colors text-gray-600 dark:text-gray-400"
                 aria-label="Previous Page"
               >
                 <ChevronLeft size={20}/>
               </button>
               <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Page {currentPage} of {totalPages}</span>
               <button 
                 onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                 disabled={currentPage === totalPages}
                 className="p-1 hover:text-[#00E5FF] disabled:opacity-20 transition-colors text-gray-600 dark:text-gray-400"
                 aria-label="Next Page"
               >
                 <ChevronRight size={20}/>
               </button>
            </nav>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {latestArticlesPage.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          <div className="flex justify-center pt-12 border-t border-gray-100 dark:border-white/5 gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentPage(idx + 1);
                  window.scrollTo({ top: document.getElementById('latest-section')?.offsetTop || 800, behavior: 'smooth' });
                }}
                className={`w-10 h-10 font-bold transition-all ${currentPage === idx + 1 ? 'bg-brand text-black' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-brand'}`}
                aria-label={`Go to page ${idx + 1}`}
                aria-current={currentPage === idx + 1 ? 'page' : undefined}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>

        <aside className="space-y-16">
          <nav aria-labelledby="sectors-title">
            <h3 id="sectors-title" className="text-xs font-black uppercase tracking-[0.2em] mb-8 border-l-2 border-[#00E5FF] pl-4 text-gray-900 dark:text-white">Sector Hubs</h3>
            <div className="grid grid-cols-1 gap-2">
              {CATEGORIES.map(cat => (
                <Link 
                  key={cat.id} 
                  to={`/category/${cat.slug}`}
                  className="flex items-center justify-between p-4 bg-gray-50 dark:bg-[#111] hover:bg-gray-100 dark:hover:bg-[#1A1A1A] transition-colors border border-gray-200 dark:border-white/5 group"
                >
                  <span className="font-bold text-sm text-gray-900 dark:text-white">{cat.name}</span>
                  <ArrowRight size={16} className="text-gray-400 dark:text-gray-600 group-hover:text-[#00E5FF] group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </nav>

          <section aria-labelledby="trending-tags-title">
            <h3 id="trending-tags-title" className="text-xs font-black uppercase tracking-[0.2em] mb-8 border-l-2 border-[#00E5FF] pl-4 text-gray-900 dark:text-white">Trending Topics</h3>
            <div className="flex flex-wrap gap-2">
              {allTags.map(tag => (
                <Link 
                  key={tag} 
                  to="/latest" 
                  className="px-3 py-1.5 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/5 text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest hover:border-brand hover:text-brand transition-all flex items-center gap-1"
                >
                  <Hash size={10} className="opacity-40" /> {tag}
                </Link>
              ))}
            </div>
          </section>

          <div className="bg-[#00E5FF] p-8 text-black shadow-2xl">
            <h3 className="text-2xl font-black leading-tight mb-4 uppercase">Direct Line to the Future</h3>
            <p className="text-sm font-medium mb-6">Join 50,000+ engineers, founders, and scientists receiving our weekly deep-tech analysis.</p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                className="w-full px-4 py-3 bg-white text-black text-sm focus:outline-none placeholder:text-gray-400 font-bold border-none"
                aria-label="Email Address"
              />
              <button className="w-full py-3 bg-black text-white font-bold uppercase tracking-widest text-xs hover:bg-[#222] transition-colors">
                Initialize Subscription
              </button>
            </form>
            <p className="mt-4 text-[10px] opacity-60 font-medium">Verified professional list. No spam.</p>
          </div>
        </aside>
      </section>

      <section className="bg-gray-50 dark:bg-[#111] py-24 border-y border-gray-100 dark:border-white/5" aria-labelledby="ai-title">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 id="ai-title" className="text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white">AI Frontier</h2>
            <Link to="/category/ai-machine-learning" className="flex items-center gap-2 font-bold text-sm text-[#00E5FF] hover:text-brand">Explore All AI <ArrowRight size={16}/></Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {ARTICLES.filter(a => a.category === CategorySlug.AI).slice(0, 2).map(article => (
              <ArticleCard key={article.id} article={article} variant="horizontal" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
