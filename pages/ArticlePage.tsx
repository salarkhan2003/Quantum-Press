
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Link2, Calendar, User, MessageSquare, ChevronRight, Share2 } from 'lucide-react';
import { ARTICLES, AUTHORS, CATEGORIES } from '../data';
import { ArticleCard } from '../components/ArticleCard';

const FALLBACK_ART = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600';

export const ArticlePage: React.FC = () => {
  const { categorySlug, articleSlug } = useParams<{ categorySlug: string; articleSlug: string }>();
  const article = ARTICLES.find(a => a.slug === articleSlug);
  const author = AUTHORS.find(a => a.id === article?.authorId);
  const category = CATEGORIES.find(c => c.slug === categorySlug);
  const related = ARTICLES.filter(a => a.category === categorySlug && a.id !== article?.id).slice(0, 3);

  if (!article) return <div className="container mx-auto px-6 py-24 text-gray-900 dark:text-white">Report not found in archives.</div>;

  return (
    <article className="pb-24">
      {/* Article Header */}
      <div className="container mx-auto px-6 mt-8">
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to={`/category/${category?.slug}`} className="hover:text-brand transition-colors">{category?.name}</Link>
          <ChevronRight size={10} />
          <span className="text-gray-900 dark:text-white truncate max-w-[150px] md:max-w-none">{article.title}</span>
        </nav>

        <header className="max-w-4xl mb-12">
          <span className="bg-[#00E5FF] text-black text-[10px] px-2 py-1 font-black uppercase tracking-widest inline-block mb-6 shadow-sm">
            Deep-Tech Intelligence
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-8 text-gray-900 dark:text-white tracking-tight">{article.title}</h1>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-gray-100 dark:border-white/5 py-8">
            <div className="flex items-center gap-4">
              <img src={author?.avatar} alt={author?.name} className="w-12 h-12 rounded-full border border-brand/20 shadow-md" />
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{author?.name}</p>
                <div className="flex items-center gap-4 text-[10px] text-gray-500 dark:text-gray-600 uppercase font-bold tracking-widest mt-1">
                  <span className="flex items-center gap-1"><Calendar size={12}/> {article.date}</span>
                  <span className="flex items-center gap-1"><MessageSquare size={12}/> 14 Comments</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase text-gray-400 dark:text-gray-500 mr-2">Share</span>
              <button className="p-2 bg-gray-50 dark:bg-white/5 hover:bg-brand hover:text-black transition-all rounded-full text-gray-600 dark:text-white"><Twitter size={16}/></button>
              <button className="p-2 bg-gray-50 dark:bg-white/5 hover:bg-brand hover:text-black transition-all rounded-full text-gray-600 dark:text-white"><Linkedin size={16}/></button>
              <button className="p-2 bg-gray-50 dark:bg-white/5 hover:bg-brand hover:text-black transition-all rounded-full text-gray-600 dark:text-white"><Facebook size={16}/></button>
              <button className="p-2 bg-gray-50 dark:bg-white/5 hover:bg-brand hover:text-black transition-all rounded-full text-gray-600 dark:text-white"><Link2 size={16}/></button>
            </div>
          </div>
        </header>
      </div>

      {/* Featured Image */}
      <div className="container mx-auto px-6 mb-16">
        <div className="aspect-video lg:aspect-[21/9] bg-gray-100 dark:bg-[#111] overflow-hidden rounded-sm shadow-xl">
          <img 
            src={article.featuredImage} 
            alt={article.title} 
            onError={(e) => { e.currentTarget.src = FALLBACK_ART; }}
            className="w-full h-full object-cover" 
          />
        </div>
        <p className="mt-4 text-xs text-gray-500 italic text-center">Fig 1.1: {article.title} visual representation. Source: Quantum Press Visual Assets.</p>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-8">
          <div 
            className="prose prose-lg max-w-none dark:prose-invert
              prose-h2:text-3xl prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tight prose-h2:mt-12 prose-h2:mb-6 text-gray-900 dark:text-white
              prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-8
              prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-bold
              prose-a:text-brand prose-a:no-underline hover:prose-a:underline
            "
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Ad Placeholder (Mid-Article) */}
          <div className="my-16 p-8 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/10 flex flex-col items-center justify-center text-center shadow-sm">
            <span className="text-[10px] text-gray-400 dark:text-gray-600 uppercase mb-4 tracking-[0.3em]">Commercial Intelligence</span>
            <div className="text-xl font-black mb-2 uppercase text-gray-900 dark:text-white">Your Data, Quantized.</div>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mb-6 leading-relaxed">The only cloud provider using topological qubits for zero-latency inference.</p>
            <button className="bg-white dark:bg-white text-black px-8 py-3 text-xs font-black uppercase tracking-widest hover:bg-brand transition-colors shadow-lg">Start Free Trial</button>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-16 pt-8 border-t border-gray-100 dark:border-white/5">
            {article.tags.map(tag => (
              <span key={tag} className="text-[10px] font-black uppercase bg-gray-100 dark:bg-[#1A1A1A] px-3 py-1 text-gray-500 dark:text-gray-400 hover:text-brand cursor-pointer transition-colors">#{tag}</span>
            ))}
          </div>

          {/* Author Bio */}
          <div className="mt-16 p-8 bg-gray-50 dark:bg-[#111] border-l-4 border-brand flex gap-6 shadow-sm">
             <img src={author?.avatar} className="w-16 h-16 rounded-full shadow-md" />
             <div>
               <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">About {author?.name}</h4>
               <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{author?.bio}</p>
               <div className="flex gap-4">
                 <Twitter size={14} className="text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors" />
                 <Linkedin size={14} className="text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer transition-colors" />
               </div>
             </div>
          </div>

          {/* Comments Section */}
          <section className="mt-24">
            <h3 className="text-2xl font-black uppercase mb-12 flex items-center gap-3 text-gray-900 dark:text-white">
              Comm-Link <span className="text-gray-400 dark:text-gray-600 text-lg">/ 14</span>
            </h3>
            
            <div className="space-y-12">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-[#222] flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 p-4 shadow-inner">
                    <textarea placeholder="Share your insight..." className="w-full bg-transparent resize-none h-24 focus:outline-none text-sm text-gray-900 dark:text-white"></textarea>
                  </div>
                  <button className="mt-4 px-8 py-3 bg-brand text-black text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white transition-all shadow-md">Transmit</button>
                </div>
              </div>

              {/* Sample Comment */}
              <div className="flex gap-4">
                 <img src="https://i.pravatar.cc/100?u=user1" className="w-10 h-10 rounded-full shadow-sm" />
                 <div className="flex-1">
                   <div className="flex items-center justify-between mb-2">
                     <span className="font-bold text-sm text-gray-900 dark:text-white">TechAnalyst_2026</span>
                     <span className="text-[10px] text-gray-400 dark:text-gray-500 font-bold uppercase">2 hours ago</span>
                   </div>
                   <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                     The scalability of the Quantum Mesh material is still questionable under atmospheric pressure. I'd love to see the peer-reviewed data on the signal-to-noise ratio in urban environments.
                   </p>
                   <button className="mt-3 text-[10px] text-brand font-bold uppercase tracking-widest hover:underline">Reply</button>
                 </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-16">
          <div className="sticky top-24">
            <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 border-l-2 border-[#00E5FF] pl-4 text-gray-900 dark:text-white">Related Intelligence</h3>
            <div className="space-y-8">
              {related.map(art => (
                <ArticleCard key={art.id} article={art} variant="compact" />
              ))}
            </div>

            <div className="mt-16 p-8 bg-brand text-black shadow-2xl">
              <h4 className="text-xl font-black uppercase leading-tight mb-4">The Quantum Brief</h4>
              <p className="text-xs font-bold mb-6">Our daily AI-curated summary of global deep-tech movements.</p>
              <input type="email" placeholder="Email" className="w-full bg-white text-black p-4 text-xs mb-3 focus:outline-none placeholder:text-gray-400 font-bold border-none" />
              <button className="w-full bg-black text-white text-[10px] font-black py-4 uppercase tracking-widest hover:bg-[#222] transition-all">Connect</button>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
};
