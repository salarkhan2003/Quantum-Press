
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { ARTICLES, CATEGORIES } from '../data';
import { ArticleCard } from '../components/ArticleCard';
import { CategorySlug } from '../types';

const FALLBACK_HERO = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600';
const ARTICLES_PER_PAGE = 10;

const Hero: React.FC = () => {
  const featured = ARTICLES.find(a => a.isFeatured) || ARTICLES[0];
  const cat = CATEGORIES.find(c => c.slug === featured.category);

  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-end overflow-hidden border-b border-gray-200 dark:border-white/10">
      <img 
        src={featured.featuredImage} 
        alt={featured.title} 
        onError={(e) => { e.currentTarget.src = FALLBACK_HERO; }}
        className="absolute inset-0 w-full h-full object-cover brightness-75 dark:brightness-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0A0A0A] via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00E5FF]/20 border border-[#00E5FF]/30 backdrop-blur-md rounded-full mb-6">
             <Zap size={14} className="text-[#00E5FF]" />
             <span className="text-[10px] font-bold text-[#00E5FF] uppercase tracking-widest">Editor's Pick: {cat?.name}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-900 dark:text-white">
            <Link to={`/category/${featured.category}/${featured.slug}`} className="hover:text-[#00E5FF] transition-colors">
              {featured.title}
            </Link>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 line-clamp-2 max-w-2xl font-light">
            {featured.summary}
          </p>
          <Link 
            to={`/category/${featured.category}/${featured.slug}`} 
            className="inline-flex items-center gap-3 bg-[#00E5FF] text-black px-8 py-4 font-black uppercase text-sm tracking-widest hover:bg-black hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl"
          >
            Read Full Intelligence <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export const Home: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const trendingArticles = ARTICLES.filter(a => a.isTrending).slice(0, 4);
  
  // Pagination logic for Latest Intelligence
  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const latestArticlesPage = ARTICLES.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(ARTICLES.length / ARTICLES_PER_PAGE);

  return (
    <div className="space-y-24 pb-24">
      <Hero />

      {/* Trending Section */}
      <section className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-10 border-b border-gray-200 dark:border-white/5 pb-4">
          <TrendingUp className="text-[#00E5FF]" />
          <h2 className="text-xl font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white">Trending Now</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingArticles.map((article, i) => (
            <div key={article.id} className="relative group">
              {/* Subtle background number to avoid clashing with text in light mode */}
              <span className="absolute -top-6 -left-2 text-8xl font-black text-gray-100 dark:text-white/5 group-hover:text-brand/10 transition-colors pointer-events-none select-none z-0">
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
      <section className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <div className="flex items-center justify-between mb-8 border-b border-gray-200 dark:border-white/5 pb-4">
            <h2 className="text-xl font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white">The Latest Intelligence</h2>
            <div className="flex items-center gap-4">
               <button 
                 onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                 disabled={currentPage === 1}
                 className="p-1 hover:text-[#00E5FF] disabled:opacity-20 transition-colors text-gray-600 dark:text-gray-400"
               >
                 <ChevronLeft size={20}/>
               </button>
               <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Page {currentPage} of {totalPages}</span>
               <button 
                 onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                 disabled={currentPage === totalPages}
                 className="p-1 hover:text-[#00E5FF] disabled:opacity-20 transition-colors text-gray-600 dark:text-gray-400"
               >
                 <ChevronRight size={20}/>
               </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {latestArticlesPage.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>

          {/* Pagination Buttons for Grid */}
          <div className="flex justify-center pt-12 border-t border-gray-100 dark:border-white/5 gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentPage(idx + 1);
                  window.scrollTo({ top: document.getElementById('latest-section')?.offsetTop || 800, behavior: 'smooth' });
                }}
                className={`w-10 h-10 font-bold transition-all ${currentPage === idx + 1 ? 'bg-brand text-black' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-brand'}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <div className="w-full h-32 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/10 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[#00E5FF]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="z-10 text-center">
              <span className="text-[10px] text-gray-500 dark:text-gray-600 uppercase tracking-widest block mb-1">Sponsored</span>
              <div className="text-lg font-bold text-gray-900 dark:text-white">NEXT-GEN NEURAL SERVERS</div>
              <button className="mt-2 text-[10px] font-bold text-[#00E5FF] border-b border-[#00E5FF] hover:text-brand">Learn More</button>
            </div>
          </div>
        </div>

        <aside className="space-y-16">
          {/* Categories Sidebar */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 border-l-2 border-[#00E5FF] pl-4 text-gray-900 dark:text-white">Sector Hubs</h3>
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
          </div>

          {/* Newsletter Box */}
          <div className="bg-[#00E5FF] p-8 text-black shadow-2xl">
            <h3 className="text-2xl font-black leading-tight mb-4 uppercase">Direct Line to the Future</h3>
            <p className="text-sm font-medium mb-6">Join 50,000+ engineers, founders, and scientists receiving our weekly deep-tech analysis.</p>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-4 py-3 bg-white text-black text-sm mb-4 focus:outline-none placeholder:text-gray-400 font-bold border-none"
            />
            <button className="w-full py-3 bg-black text-white font-bold uppercase tracking-widest text-xs hover:bg-[#222] transition-colors">
              Initialize Subscription
            </button>
            <p className="mt-4 text-[10px] opacity-60 font-medium">By subscribing, you agree to our Terms of Use and Privacy Policy.</p>
          </div>

          {/* Sidebar Ad */}
          <div className="aspect-[4/5] bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/10 flex flex-col items-center justify-center p-6 text-center shadow-sm">
            <span className="text-[10px] text-gray-500 dark:text-gray-600 uppercase mb-4">Space Ad Zone</span>
            <div className="text-2xl font-black mb-4 text-gray-900 dark:text-white uppercase tracking-tighter">Lunar Mining 2027</div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">Join the first private helium-3 extraction consortium. Slots limited.</p>
            <img 
              src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=600" 
              className="w-full grayscale brightness-75 dark:brightness-50 mb-6 rounded-sm" 
              alt="Ad" 
              onError={(e) => { e.currentTarget.src = FALLBACK_HERO; }}
            />
            <button className="text-[10px] font-bold border border-gray-900 dark:border-white/20 px-6 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all uppercase tracking-widest text-gray-900 dark:text-white">Apply Now</button>
          </div>
        </aside>
      </section>

      {/* Category Highlights (Horizontal) */}
      <section className="bg-gray-50 dark:bg-[#111] py-24 border-y border-gray-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-white">AI Frontier</h2>
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
