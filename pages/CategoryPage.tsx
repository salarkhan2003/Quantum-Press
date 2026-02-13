
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { CATEGORIES, ARTICLES } from '../data';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';

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

  if (!category) return <div className="container mx-auto px-6 py-24 text-gray-900 dark:text-white text-center">Sector not found in our indices.</div>;

  const indexOfLastArticle = currentPage * ARTICLES_PER_PAGE;
  const indexOfFirstArticle = indexOfLastArticle - ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);

  return (
    <div className="pb-24">
      <SEO 
        title={`${category.name} Intel`} 
        description={`Deep-dive technical reports and latest news in ${category.name}. From physical principles to market application.`}
        image={category.image}
      />
      
      <div className="relative h-[40vh] min-h-[300px] flex items-center overflow-hidden border-b border-gray-200 dark:border-white/10">
        <img 
          src={category.image} 
          alt={category.name} 
          loading="eager"
          onError={(e) => { e.currentTarget.src = FALLBACK_CAT; }}
          className="absolute inset-0 w-full h-full object-cover brightness-75 dark:brightness-50"
        />
        <div className="absolute inset-0 bg-white/70 dark:bg-[#0A0A0A]/70"></div>
        <div className="container mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-brand mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} className="text-gray-400 dark:text-gray-600" />
            <span className="text-gray-900 dark:text-white">Sector</span>
          </nav>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {currentArticles.map(article => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
              
              {totalPages > 1 && (
                <nav className="flex justify-center pt-16 border-t border-gray-100 dark:border-white/5 gap-2" aria-label="Pagination">
                  <button 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-white/5 disabled:opacity-20 hover:text-brand transition-colors text-gray-600 dark:text-gray-400"
                    aria-label="Previous Page"
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
                      aria-label={`Go to page ${idx + 1}`}
                      aria-current={currentPage === idx + 1 ? 'page' : undefined}
                    >
                      {idx + 1}
                    </button>
                  ))}

                  <button 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 flex items-center justify-center bg-gray-100 dark:bg-white/5 disabled:opacity-20 hover:text-brand transition-colors text-gray-600 dark:text-gray-400"
                    aria-label="Next Page"
                  >
                    <ChevronRight size={20}/>
                  </button>
                </nav>
              )}
            </>
          ) : (
            <div className="py-12 text-center text-gray-500 italic">No reports indexed in this sector.</div>
          )}
        </div>

        <aside className="space-y-12">
          <div className="bg-gray-50 dark:bg-[#111] p-8 border border-gray-200 dark:border-white/10 shadow-sm">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-6 text-gray-900 dark:text-white">Sector Spotlight</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Our {category.name} coverage is spearheaded by former industry engineers and research scientists.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};
