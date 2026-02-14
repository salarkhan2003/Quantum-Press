
import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Github, Twitter, Linkedin, Youtube, Zap, ArrowUp, Sun, Moon, ChevronDown } from 'lucide-react';
import { CATEGORIES, ARTICLES } from '../data';
import { ArticleCard } from './ArticleCard';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    setIsOpen(false);
    setSearchOpen(false);
    setSearchTerm('');
  }, [location]);

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    const term = searchTerm.toLowerCase();
    return ARTICLES.filter(art => 
      art.title.toLowerCase().includes(term) || 
      art.summary.toLowerCase().includes(term)
    ).slice(0, 5);
  }, [searchTerm]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Zap className="text-[#00E5FF] group-hover:scale-110 transition-transform" size={24} />
          <span className="text-xl font-extrabold tracking-tighter uppercase text-gray-900 dark:text-white">Quantum Press</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/latest" className="text-[11px] font-black text-[#00E5FF] uppercase tracking-[0.2em] hover:text-gray-900 dark:hover:text-white transition-colors">Latest</Link>
          {CATEGORIES.slice(0, 5).map(cat => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.slug}`}
              className="text-[11px] font-bold uppercase tracking-widest hover:text-[#00E5FF] transition-colors text-gray-600 dark:text-gray-300"
            >
              {cat.name}
            </Link>
          ))}
          <div className="relative group">
            <button className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-widest hover:text-[#00E5FF] text-gray-600 dark:text-gray-300 transition-colors">
              Sectors <ChevronDown size={14} />
            </button>
            <div className="absolute left-0 top-full mt-2 w-56 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all transform translate-y-2 group-hover:translate-y-0 shadow-2xl overflow-hidden">
              {CATEGORIES.slice(5).map(cat => (
                <Link 
                  key={cat.id} 
                  to={`/category/${cat.slug}`}
                  className="block px-4 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#00E5FF] text-gray-700 dark:text-gray-400 border-b border-gray-100 dark:border-white/5 last:border-0"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button onClick={toggleTheme} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors text-gray-600 dark:text-gray-300">
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setSearchOpen(true)} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors text-gray-600 dark:text-gray-300">
            <Search size={18} />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors text-gray-600 dark:text-gray-300">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[73px] bg-white dark:bg-[#0A0A0A] z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col p-8 gap-6 h-full overflow-y-auto">
          {CATEGORIES.map(cat => (
            <Link key={cat.id} to={`/category/${cat.slug}`} className="text-xl font-black uppercase tracking-widest border-b border-gray-100 dark:border-white/5 pb-2 text-gray-900 dark:text-white">
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-white dark:bg-[#0A0A0A] z-[60] flex flex-col items-center p-6 animate-in fade-in duration-300">
          <div className="w-full flex justify-end mb-12">
            <button onClick={() => setSearchOpen(false)} className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <X size={32} />
            </button>
          </div>
          <div className="w-full max-w-2xl">
            <input 
              type="text" 
              placeholder="Query Archives..." 
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-b-2 border-gray-200 dark:border-white/20 text-3xl md:text-5xl font-black uppercase py-4 focus:outline-none focus:border-[#00E5FF] transition-colors text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-white/10"
            />
            <div className="mt-12 space-y-6">
              {searchResults.map(art => (
                <div key={art.id} onClick={() => setSearchOpen(false)}>
                  <ArticleCard article={art} variant="compact" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#0A0A0A] border-t border-gray-200 dark:border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Zap className="text-[#00E5FF]" size={24} />
              <span className="text-lg font-black uppercase tracking-tighter text-gray-900 dark:text-white">Quantum Press</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
              Synthesizing deep-tech intelligence for the engineering-led economy.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-[#00E5FF]">Sectors</h4>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {CATEGORIES.slice(0, 4).map(cat => (
                <li key={cat.id}><Link to={`/category/${cat.slug}`} className="hover:text-white transition-colors">{cat.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-[#00E5FF]">Terminal</h4>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/latest" className="hover:text-white transition-colors">Archives</Link></li>
            </ul>
          </div>
          <div>
             <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-6 text-[#00E5FF]">Subscribe</h4>
             <form className="flex" onSubmit={(e) => e.preventDefault()}>
               <input type="email" placeholder="Secure email" className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 px-4 py-2 text-xs w-full focus:outline-none focus:border-[#00E5FF]" />
               <button className="bg-[#00E5FF] text-black px-4 py-2 font-black text-[10px] uppercase">JOIN</button>
             </form>
          </div>
        </div>
        <div className="border-t border-gray-100 dark:border-white/5 pt-8 flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
          <p>© 2026 Quantum Press. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 bg-white dark:bg-[#0A0A0A]">
        {children}
      </main>
      <Footer />
      
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 z-40 p-3 bg-gray-100 dark:bg-white/5 hover:bg-[#00E5FF] hover:text-black rounded-full transition-all text-gray-600 dark:text-white"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
};
