
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { CATEGORIES, ARTICLES } from '../data';
import { ArticleCard } from '../components/ArticleCard';

const FALLBACK_CAT = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600';
const ARTICLES_PER_PAGE = 10;

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [currentPage, setCurrentPage] = useState(1);
  
  const category = CATEGORIES.find(c => c.slug === categorySlug);
  const filteredArticles = ARTICLES.filter(a => a.category === categorySlug);

  useEffect(() => {
    setCurrentPage(1);
  }, [categorySlug]);

  if (!category) return <div className="container mx-auto px-6 py-24 text-gray-900 dark:text-white">Category not found</div>;

  // Pagination logic
  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

  return (
    <div className="pb-24">
      {/* Category Header */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden border-b border-gray-200 dark:border-white/10">
        <img 
          src={category.image} 
          alt={category.name} 
          onError={(e) => { e.currentTarget.src = FALLBACK_CAT; }}
          className="absolute inset-0 w-full h-full object-cover brightness-75 dark:brightness-50"
        />
        <div className="absolute inset-0 bg-white/70 dark:bg-[#0A0A0A]/70"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand mb-4">
            <Link to="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-gray-400 dark:text-gray-600" />
            <span className="text-gray-900 dark:text-white">Category</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase mb-4 tracking-tighter text-gray-900 dark:text-white">{category.name}</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl font-light italic">
            "{category.description}"
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          {currentArticles.length > 0 ? (
            <>
              {/* Featured in Category (Only on Page 1) */}
              {currentPage === 1 && (
                <div className="mb-16">
                   <ArticleCard article={currentArticles[0]} variant="horizontal" />
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {(currentPage === 1 ? currentArticles.slice(1) : currentArticles).map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
              
              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center pt-16 border-t border-gray-100 dark:border-white/5 gap-2">
                  <button 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-white/5 disabled:opacity-20 hover:text-brand transition-colors text-gray-600 dark:text-gray-400"
                  >
                    <ChevronLeft size={20}/>
                  </button>
                  
                  {Array.from({ length: totalPages }).map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => {
                        setCurrentPage(idx + 1);
                        window.scrollTo({ top: 400, behavior: 'smooth' });
                      }}
                      className={`w-10 h-10 flex items-center justify-center font-bold transition-all ${currentPage === idx + 1 ? 'bg-brand text-black' : 'bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-brand'}`}
                    >
                      {idx + 1}
                    </button>
                  ))}

                  <button 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-white/5 disabled:opacity-20 hover:text-brand transition-colors text-gray-600 dark:text-gray-400"
                  >
                    <ChevronRight size={20}/>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="py-12 text-center text-gray-500 italic">No articles yet in this sector.</div>
          )}
        </div>

        <aside className="space-y-12">
          <div className="bg-gray-50 dark:bg-[#111] p-8 border border-gray-200 dark:border-white/10 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-900 dark:text-white">Sector Spotlight</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Our {category.name} coverage is spearheaded by a team of specialized technical writers and former engineers. We prioritize technological feasibility and systemic impact over marketing hype.
            </p>
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/100?u=1" className="w-10 h-10 rounded-full border-2 border-white dark:border-black" />
              <img src="https://i.pravatar.cc/100?u=2" className="w-10 h-10 rounded-full border-2 border-white dark:border-black" />
              <img src="https://i.pravatar.cc/100?u=3" className="w-10 h-10 rounded-full border-2 border-white dark:border-black" />
            </div>
            <p className="text-[10px] text-gray-500 mt-4 uppercase font-bold">Our Editorial Board</p>
          </div>

          <div className="p-8 border border-[#00E5FF]/20 bg-[#00E5FF]/5 shadow-sm">
            <h3 className="text-lg font-black uppercase mb-4 text-gray-900 dark:text-white">Ad: Quantum Compute</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-6">Need more processing power for your {category.name} projects? Scalable cloud solutions for deep learning.</p>
            <button className="w-full py-3 bg-[#00E5FF] text-black text-xs font-black uppercase hover:bg-black hover:text-white transition-all shadow-lg">Start Scaling</button>
          </div>
        </aside>
      </div>
    </div>
  );
};
