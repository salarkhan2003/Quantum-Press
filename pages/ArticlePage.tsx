
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Twitter, Linkedin, Facebook, Link2, Calendar, MessageSquare, ChevronRight, Copy, Check, Play, Maximize2, Hash, Layers } from 'lucide-react';
import { ARTICLES, AUTHORS, CATEGORIES } from '../data';
import { ArticleCard } from '../components/ArticleCard';
import { SEO } from '../components/SEO';
import { ContentBlock } from '../types';

const FALLBACK_ART = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600';

const CodeSnippet: React.FC<{ block: { language: string; code: string; title?: string } }> = ({ block }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(block.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-10 group overflow-hidden border border-gray-200 dark:border-white/10 rounded-lg bg-[#0D0D0D] shadow-2xl">
      <div className="flex items-center justify-between px-4 py-3 bg-[#1A1A1A] border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">
            {block.title || block.language}
          </span>
        </div>
        <button 
          onClick={handleCopy}
          className="p-1.5 hover:bg-white/5 rounded transition-colors text-gray-400 hover:text-[#00E5FF]"
          title="Copy Code"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <pre className="p-6 overflow-x-auto text-sm leading-relaxed scrollbar-thin scrollbar-thumb-white/10">
        <code className="text-gray-300 font-mono">
          {block.code}
        </code>
      </pre>
    </div>
  );
};

const VideoEmbed: React.FC<{ block: { provider: string; id: string; caption?: string } }> = ({ block }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const embedUrl = `https://www.youtube.com/embed/${block.id}?autoplay=1&mute=1`;

  return (
    <div className="my-12">
      <div className="relative aspect-video bg-black rounded-sm overflow-hidden shadow-2xl group">
        {!isPlaying ? (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <img 
              src={`https://img.youtube.com/vi/${block.id}/maxresdefault.jpg`}
              alt="Video thumbnail"
              className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <button 
              onClick={() => setIsPlaying(true)}
              className="relative w-20 h-20 flex items-center justify-center bg-brand text-black rounded-full shadow-2xl transform transition-all hover:scale-110 active:scale-95"
            >
              <Play size={32} fill="currentColor" />
            </button>
          </div>
        ) : (
          <iframe 
            src={embedUrl}
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      {block.caption && (
        <p className="mt-4 text-xs text-gray-500 dark:text-gray-600 italic text-center font-medium">
          {block.caption}
        </p>
      )}
    </div>
  );
};

export const ArticlePage: React.FC = () => {
  const { categorySlug, articleSlug } = useParams<{ categorySlug: string; articleSlug: string }>();
  const article = ARTICLES.find(a => a.slug === articleSlug);
  const author = AUTHORS.find(a => a.id === article?.authorId);
  const category = CATEGORIES.find(c => c.slug === categorySlug);
  
  // Logic to fetch up to 4 related articles from the same sector
  // If not enough in sector, backfill with trending to keep the grid full
  const relatedInSector = ARTICLES.filter(a => a.category === categorySlug && a.id !== article?.id);
  const backfill = ARTICLES.filter(a => a.category !== categorySlug && a.id !== article?.id && a.isTrending).slice(0, 4 - relatedInSector.length);
  const relatedArticles = [...relatedInSector, ...backfill].slice(0, 4);

  if (!article) return <div className="container mx-auto px-6 py-24 text-gray-900 dark:text-white text-center font-black uppercase tracking-widest">Archive Index Mismatch. Report Not Found.</div>;

  const renderBlocks = () => {
    if (!article.contentBlocks) {
      return (
        <div 
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      );
    }

    return article.contentBlocks.map((block, idx) => {
      switch (block.type) {
        case 'text':
          return (
            <div 
              key={idx}
              className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed mb-8"
              dangerouslySetInnerHTML={{ __html: block.content }}
            />
          );
        case 'image':
          return (
            <div key={idx} className={`my-16 ${block.fullWidth ? '-mx-6 md:-mx-12' : ''}`}>
              <figure className="relative group">
                <img 
                  src={block.url} 
                  alt={block.caption || 'Article image'} 
                  className="w-full h-auto shadow-2xl rounded-sm"
                  loading="lazy" 
                />
                <button className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm" aria-label="View Full Resolution">
                  <Maximize2 size={16} />
                </button>
                {block.caption && (
                  <figcaption className="mt-4 text-xs text-gray-500 dark:text-gray-600 italic text-center font-medium">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            </div>
          );
        case 'code':
          return <CodeSnippet key={idx} block={block} />;
        case 'video':
          return <VideoEmbed key={idx} block={block} />;
        default:
          return null;
      }
    });
  };

  return (
    <article className="pb-24 overflow-x-hidden">
      <SEO 
        title={article.title} 
        description={article.summary} 
        image={article.featuredImage} 
        type="article"
        articleData={article}
      />
      
      {/* Article Header */}
      <div className="container mx-auto px-6 mt-8">
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-brand transition-colors">Home</Link>
          <ChevronRight size={10} aria-hidden="true" />
          <Link to={`/category/${category?.slug}`} className="hover:text-brand transition-colors">{category?.name}</Link>
          <ChevronRight size={10} aria-hidden="true" />
          <span className="text-gray-900 dark:text-white truncate max-w-[150px] md:max-w-none" aria-current="page">{article.title}</span>
        </nav>

        <header className="max-w-4xl mb-12">
          <span className="bg-[#00E5FF] text-black text-[10px] px-2 py-1 font-black uppercase tracking-widest inline-block mb-6 shadow-sm">
            Deep-Tech Intelligence
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-[1.05] mb-8 text-gray-900 dark:text-white tracking-tighter italic">{article.title}</h1>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-gray-100 dark:border-white/5 py-8">
            <div className="flex items-center gap-4">
              <img src={author?.avatar} alt={author?.name} className="w-12 h-12 rounded-full border border-brand/20 shadow-md" />
              <div>
                <p className="text-sm font-bold text-gray-900 dark:text-white">{author?.name}</p>
                <div className="flex items-center gap-4 text-[10px] text-gray-500 dark:text-gray-600 uppercase font-bold tracking-widest mt-1">
                  <span className="flex items-center gap-1"><Calendar size={12}/> <time dateTime={article.date}>{article.date}</time></span>
                  <span className="flex items-center gap-1"><MessageSquare size={12}/> 14 Comments</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase text-gray-400 dark:text-gray-500 mr-2">Share</span>
              <button className="p-2 bg-gray-50 dark:bg-white/5 hover:bg-brand hover:text-black transition-all rounded-full text-gray-600 dark:text-white" aria-label="Share on Twitter"><Twitter size={16}/></button>
              <button className="p-2 bg-gray-50 dark:bg-white/5 hover:bg-brand hover:text-black transition-all rounded-full text-gray-600 dark:text-white" aria-label="Share on LinkedIn"><Linkedin size={16}/></button>
              <button className="p-2 bg-gray-50 dark:bg-white/5 hover:bg-brand hover:text-black transition-all rounded-full text-gray-600 dark:text-white" aria-label="Share on Facebook"><Facebook size={16}/></button>
              <button className="p-2 bg-gray-50 dark:bg-white/5 hover:bg-brand hover:text-black transition-all rounded-full text-gray-600 dark:text-white" aria-label="Copy Link"><Link2 size={16}/></button>
            </div>
          </div>
        </header>
      </div>

      {/* Hero Featured Image */}
      <div className="container mx-auto px-6 mb-16">
        <div className="aspect-video lg:aspect-[21/9] bg-gray-100 dark:bg-[#111] overflow-hidden rounded-sm shadow-2xl relative">
          <img 
            src={article.featuredImage} 
            alt={article.title} 
            loading="eager"
            onError={(e) => { e.currentTarget.src = FALLBACK_ART; }}
            className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-8">
          {/* Main Content Rendered via Blocks */}
          <div className="article-content-body">
            {renderBlocks()}
          </div>

          {/* Unified Tags Section (Home Page Style) */}
          <div className="mt-16 pt-12 border-t border-gray-100 dark:border-white/5">
            <div className="flex items-center gap-2 mb-6 text-gray-400">
               <Layers size={14} className="text-brand" />
               <span className="text-[10px] font-black uppercase tracking-widest">Intelligence Metadata</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map(tag => (
                <Link 
                  key={tag} 
                  to="/latest" 
                  className="flex items-center gap-1 px-4 py-2 bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/5 text-[10px] font-bold text-gray-600 dark:text-gray-400 uppercase tracking-widest hover:border-brand hover:text-brand transition-all group"
                >
                  <Hash size={12} className="opacity-40 group-hover:opacity-100" />
                  {tag}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 bg-gray-50 dark:bg-[#111] border-l-4 border-brand flex flex-col sm:flex-row gap-6 shadow-sm items-center sm:items-start">
             <img src={author?.avatar} alt={author?.name} className="w-20 h-20 rounded-full shadow-lg border-2 border-brand/10" />
             <div className="text-center sm:text-left">
               <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Lead Analyst: {author?.name}</h4>
               <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{author?.bio}</p>
               <button className="text-[10px] font-black uppercase text-brand hover:bg-brand hover:text-black border border-brand/20 px-4 py-2 transition-all">Full Disclosure History</button>
             </div>
          </div>

          {/* Engagement Section */}
          <section className="mt-24 border-t border-gray-100 dark:border-white/5 pt-12">
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 text-gray-900 dark:text-white">Engagement Archives</h3>
            <div className="space-y-8">
              <div className="p-6 bg-gray-50 dark:bg-[#111] rounded-sm">
                <p className="text-gray-400 text-xs italic mb-4">Establishing secure connection. No decryption required.</p>
                <textarea 
                  className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 p-4 h-24 focus:outline-none focus:border-brand text-sm text-gray-900 dark:text-white resize-none shadow-inner"
                  placeholder="Enter analyst perspective..."
                  aria-label="Add a comment"
                ></textarea>
                <div className="flex justify-end mt-4">
                  <button className="bg-brand text-black px-8 py-3 font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all shadow-md">Transmit Analysis</button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4">
          <div className="sticky top-24 space-y-16">
            <div className="p-8 bg-brand text-black shadow-2xl transform hover:-rotate-1 transition-transform">
              <h3 className="text-xl font-black uppercase mb-4 leading-tight">Quantum Alert</h3>
              <p className="text-sm font-medium mb-6 opacity-80 italic leading-relaxed">System monitoring indicates high volatility in {category?.name}. Technical briefs are updated in real-time.</p>
              <button className="w-full py-3 border-2 border-black font-black uppercase text-[10px] tracking-widest hover:bg-black hover:text-white transition-all">Access Deep Memo</button>
            </div>

            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-8 border-l-2 border-[#00E5FF] pl-4 text-gray-900 dark:text-white">Contextual Intel</h3>
              <div className="space-y-8">
                {relatedArticles.slice(0, 3).map(art => (
                  <ArticleCard key={art.id} article={art} variant="compact" />
                ))}
              </div>
            </div>

            <div className="p-8 border border-gray-200 dark:border-white/5 bg-gray-50 dark:bg-[#111]">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-4 text-gray-900 dark:text-white">Protocol Terminal</h4>
              <p className="text-[10px] text-gray-500 mb-6 uppercase font-bold tracking-widest">Available Streams: PDF / JSON / MARKDOWN</p>
              <button className="text-brand text-xs font-black uppercase hover:underline flex items-center gap-2">Request Offline Copy <Link2 size={12}/></button>
            </div>
          </div>
        </aside>
      </div>

      {/* Prominent Related Articles Bottom Section */}
      <section className="container mx-auto px-6 mt-32 pt-24 border-t border-gray-100 dark:border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-brand font-black uppercase text-[10px] tracking-[0.3em] mb-2 block">Continuous Feedback Loop</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 dark:text-white">Related Intelligence</h2>
          </div>
          <Link to={`/category/${category?.slug}`} className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500 hover:text-brand transition-colors">
            Sector Archives <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedArticles.map(art => (
            <div key={art.id} className="h-full">
              <ArticleCard article={art} />
            </div>
          ))}
          {relatedArticles.length === 0 && (
            <div className="col-span-full py-24 text-center text-gray-500 italic border border-dashed border-gray-200 dark:border-white/10 rounded-sm">
              End of indexed reports for this specific sector node.
            </div>
          )}
        </div>
      </section>
    </article>
  );
};
