
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

  // Close menus on route change
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
      art.summary.toLowerCase().includes(term) ||
      art.content.toLowerCase().includes(term)
    ).slice(0, 5);
  }, [searchTerm]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-[#0A0A0A]/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Zap className="text-[#00E5FF] group-hover:scale-110 transition-transform" size={28} />
          <span className="text-xl font-extrabold tracking-tighter uppercase text-gray-900 dark:text-white">Quantum Press</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link to="/latest" className="text-sm font-bold text-[#00E5FF] uppercase tracking-widest hover:text-gray-900 dark:hover:text-white transition-colors">Latest</Link>
          {CATEGORIES.slice(0, 4).map(cat => (
            <Link 
              key={cat.id} 
              to={`/category/${cat.slug}`}
              className="text-sm font-medium hover:text-[#00E5FF] transition-colors text-gray-600 dark:text-gray-300"
            >
              {cat.name}
            </Link>
          ))}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium hover:text-[#00E5FF] text-gray-600 dark:text-gray-300 transition-colors">
              More Sectors <ChevronDown size={14} />
            </button>
            <div className="absolute left-0 top-full mt-2 w-56 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all transform translate-y-2 group-hover:translate-y-0 shadow-2xl overflow-hidden">
              {CATEGORIES.slice(4).map(cat => (
                <Link 
                  key={cat.id} 
                  to={`/category/${cat.slug}`}
                  className="block px-4 py-3 text-xs font-semibold hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#00E5FF] text-gray-700 dark:text-gray-400 border-b border-gray-100 dark:border-white/5 last:border-0"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <button onClick={toggleTheme} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors text-gray-600 dark:text-gray-300" title="Toggle Theme">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setSearchOpen(true)} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors text-gray-600 dark:text-gray-300" title="Search Archives">
            <Search size={20} />
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-full transition-colors text-gray-600 dark:text-gray-300">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-[73px] bg-white dark:bg-[#0A0A0A] z-40 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col p-8 gap-6 h-full overflow-y-auto">
          <Link to="/latest" className="text-2xl font-black text-[#00E5FF] uppercase border-b border-gray-100 dark:border-white/5 pb-2">Latest Intel</Link>
          {CATEGORIES.map(cat => (
            <Link key={cat.id} to={`/category/${cat.slug}`} className="text-2xl font-bold border-b border-gray-100 dark:border-white/5 pb-2 text-gray-900 dark:text-white hover:text-brand transition-colors">
              {cat.name}
            </Link>
          ))}
          <Link to="/about" className="text-lg font-bold text-gray-500">About Quantum Press</Link>
          <Link to="/contact" className="text-lg font-bold text-gray-500">Contact Newsroom</Link>
          <div className="flex gap-6 pt-6 border-t border-gray-100 dark:border-white/5 mt-auto">
            <Twitter className="text-gray-400 hover:text-[#00E5FF]" />
            <Linkedin className="text-gray-400 hover:text-[#00E5FF]" />
            <Github className="text-gray-400 hover:text-[#00E5FF]" />
          </div>
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
              placeholder="Search the future..." 
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-b-2 border-gray-200 dark:border-white/20 text-3xl md:text-5xl font-bold py-4 focus:outline-none focus:border-[#00E5FF] transition-colors text-gray-900 dark:text-white"
            />
            <p className="mt-4 text-gray-500 text-sm">Real-time indexing enabled. Search across titles, summaries, and full technical reports.</p>
            
            <div className="mt-12 space-y-6 overflow-y-auto max-h-[60vh] pr-4">
              {searchResults.length > 0 ? (
                searchResults.map(art => (
                  <div key={art.id} onClick={() => setSearchOpen(false)}>
                    <ArticleCard article={art} variant="compact" />
                  </div>
                ))
              ) : searchTerm ? (
                <div className="py-12 text-center text-gray-400">
                   <p className="text-xl font-bold mb-2">No intelligence found.</p>
                   <p className="text-sm">Try broader keywords or browse by sector.</p>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#0A0A0A] border-t border-gray-200 dark:border-white/10 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <Zap className="text-[#00E5FF]" size={24} />
              <span className="text-lg font-extrabold uppercase tracking-widest text-gray-900 dark:text-white">Quantum Press</span>
            </Link>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
              The premier destination for engineering-led tech journalism. Deciphering the complexities of AI, Space, and the Quantum realm since 2024.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-5 h-5 text-gray-400 hover:text-[#00E5FF] transition-colors"><Twitter size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-5 h-5 text-gray-400 hover:text-[#00E5FF] transition-colors"><Linkedin size={20} /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="w-5 h-5 text-gray-400 hover:text-[#00E5FF] transition-colors"><Github size={20} /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-5 h-5 text-gray-400 hover:text-[#00E5FF] transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 text-sm uppercase tracking-widest border-b border-brand w-fit pb-1">Sectors</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              {CATEGORIES.slice(0, 6).map(cat => (
                <li key={cat.id}><Link to={`/category/${cat.slug}`} className="hover:text-brand transition-colors font-medium">{cat.name}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 text-sm uppercase tracking-widest border-b border-brand w-fit pb-1">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500 dark:text-gray-400">
              <li><Link to="/about" className="hover:text-brand font-medium">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand font-medium">Contact Newsroom</Link></li>
              <li><Link to="/about" className="hover:text-brand font-medium">Editorial Values</Link></li>
              <li><Link to="/" className="hover:text-brand font-medium">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-brand font-medium">Advertise with Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 dark:text-white font-bold mb-6 text-sm uppercase tracking-widest border-b border-brand w-fit pb-1">Intelligence List</h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed font-medium">Join 50k+ technical professionals receiving our deep-dive reports every Thursday.</p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Secure email" 
                className="bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#00E5FF] w-full text-gray-900 dark:text-white shadow-inner"
              />
              <button className="bg-[#00E5FF] text-black px-4 font-black text-xs uppercase hover:bg-black hover:text-white transition-all shadow-md">Join</button>
            </form>
            <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-widest font-bold">Encrypted Delivery</p>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-400 dark:text-gray-600 uppercase tracking-[0.2em] font-bold">
          <p>© 2026 Quantum Press. Synthesizing the Future.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-[#00E5FF] transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-[#00E5FF] transition-colors">Cookie Policy</Link>
            <a href="/rss.xml" className="hover:text-[#00E5FF] transition-colors">RSS Feed</a>
          </div>
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
    <div className="min-h-screen flex flex-col selection:bg-brand selection:text-black">
      <Header />
      <main className="flex-grow pt-24 bg-white dark:bg-[#0A0A0A]">
        {children}
      </main>
      <Footer />
      
      {/* Ad Space Sticky Placeholder */}
      <div className="fixed bottom-4 right-4 z-40 hidden xl:block animate-in slide-in-from-bottom-4 duration-1000">
        <div className="w-64 h-24 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 rounded flex flex-col items-center justify-center p-4 shadow-2xl group transition-all hover:scale-105">
          <span className="text-[10px] text-gray-400 dark:text-gray-600 uppercase mb-2 tracking-widest font-bold">Deep Ad Zone</span>
          <div className="text-center font-black text-sm text-[#00E5FF] group-hover:text-brand-light">QUANTUM COMPUTE INC.</div>
          <div className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 italic">Rent Qubits Starting at $0.05/sec</div>
        </div>
      </div>
      
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 left-6 z-40 p-3 bg-gray-100 dark:bg-white/5 hover:bg-[#00E5FF] hover:text-black rounded-full transition-all backdrop-blur-md shadow-lg text-gray-600 dark:text-white group"
        title="Ascend to Top"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
};
