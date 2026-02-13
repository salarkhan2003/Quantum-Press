
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Globe, MapPin, Send, ChevronRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pb-24">
      <div className="container mx-auto px-6 pt-8">
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span className="text-gray-900 dark:text-white">Establish Uplink</span>
        </nav>
      </div>

      <div className="container mx-auto px-6 py-8">
        <h1 className="text-5xl md:text-7xl font-black uppercase mb-16 tracking-tighter text-gray-900 dark:text-white">Comm-Link.</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <p className="text-xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
              Have a lead on a breakthrough technology? Or want to partner with the world's most intelligent tech audience? Send us a signal.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gray-50 dark:bg-[#111] flex items-center justify-center border border-gray-100 dark:border-white/10 shadow-sm">
                  <Mail className="text-[#00E5FF]" size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-widest">General Signal</p>
                  <a href="mailto:hello@quantumpress.io" className="font-bold text-gray-900 dark:text-white hover:text-brand transition-colors">hello@quantumpress.io</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gray-50 dark:bg-[#111] flex items-center justify-center border border-gray-100 dark:border-white/10 shadow-sm">
                  <MapPin className="text-[#00E5FF]" size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-widest">Physical Hub</p>
                  <p className="font-bold text-gray-900 dark:text-white">77 Innovation Way, Neo-Tokyo, JP</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-gray-50 dark:bg-[#111] flex items-center justify-center border border-gray-100 dark:border-white/10 shadow-sm">
                  <Globe className="text-[#00E5FF]" size={20} />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 dark:text-gray-500 uppercase font-black tracking-widest">Satellite Nodes</p>
                  <p className="font-bold text-gray-900 dark:text-white">Berlin, San Francisco, Bangalore</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-400 dark:text-gray-500 tracking-[0.2em]">Full Name</label>
                <input type="text" className="w-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/10 p-4 focus:outline-none focus:border-[#00E5FF] transition-colors text-sm text-gray-900 dark:text-white" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-gray-400 dark:text-gray-500 tracking-[0.2em]">Signal Address (Email)</label>
                <input type="email" className="w-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/10 p-4 focus:outline-none focus:border-[#00E5FF] transition-colors text-sm text-gray-900 dark:text-white" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400 dark:text-gray-500 tracking-[0.2em]">Sector of Inquiry</label>
              <select className="w-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/10 p-4 focus:outline-none focus:border-[#00E5FF] transition-colors text-sm appearance-none text-gray-900 dark:text-white">
                <option>Editorial / News Tip</option>
                <option>Advertising / Partnerships</option>
                <option>Technical Support</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase text-gray-400 dark:text-gray-500 tracking-[0.2em]">Intelligence Payload</label>
              <textarea className="w-full bg-gray-50 dark:bg-[#111] border border-gray-200 dark:border-white/10 p-4 h-48 focus:outline-none focus:border-[#00E5FF] transition-colors text-sm resize-none text-gray-900 dark:text-white" placeholder="Your message..."></textarea>
            </div>
            <button type="submit" className="inline-flex items-center gap-3 bg-[#00E5FF] text-black px-10 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all shadow-xl">
              Initialize Transmission <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
