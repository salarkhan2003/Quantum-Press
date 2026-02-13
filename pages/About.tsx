
import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Target, ShieldCheck, Cpu, ChevronRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Breadcrumbs */}
      <div className="container mx-auto px-6 pt-8">
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand transition-colors">Home</Link>
          <ChevronRight size={10} />
          <span className="text-gray-900 dark:text-white">About the Press</span>
        </nav>
      </div>

      <section className="container mx-auto px-6 py-16 text-center max-w-4xl">
        <Zap className="text-[#00E5FF] mx-auto mb-8 animate-pulse" size={48} />
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 italic text-gray-900 dark:text-white">Where Future Tech Speaks.</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 font-light leading-relaxed">
          Quantum Press is the definitive news source for the deep-tech ecosystem. We translate complex engineering breakthroughs into actionable intelligence for the next century.
        </p>
      </section>

      <div className="bg-gray-50 dark:bg-[#111] py-24 border-y border-gray-100 dark:border-white/5">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-6">
            <div className="w-12 h-12 bg-brand/10 flex items-center justify-center rounded-lg">
              <Target className="text-brand" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              To accelerate human progress by providing rigorous, technical analysis of the technologies that will define our future—from quantum supremacy to interstellar travel.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 bg-brand/10 flex items-center justify-center rounded-lg">
              <ShieldCheck className="text-brand" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest text-gray-900 dark:text-white">Editorial Integrity</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              We refuse clickbait. Every article undergoes a rigorous fact-check by subject matter experts. Our funding comes from dedicated readers and mission-aligned advertisers.
            </p>
          </div>
          <div className="space-y-6">
            <div className="w-12 h-12 bg-brand/10 flex items-center justify-center rounded-lg">
              <Cpu className="text-brand" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-widest text-gray-900 dark:text-white">Tech Stack</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              We don't just write about tech; we use it. Quantum Press is powered by decentralized hosting and AI-assisted research tools to ensure speed and resilience.
            </p>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-6 py-24">
        <h2 className="text-3xl font-black uppercase mb-16 text-center text-gray-900 dark:text-white">Contact Archives</h2>
        <div className="max-w-xl mx-auto space-y-8">
           <div className="flex justify-between items-center py-6 border-b border-gray-100 dark:border-white/10 group">
             <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">Press Inquiries</span>
             <a href="mailto:press@quantumpress.io" className="font-bold text-brand hover:text-gray-900 dark:hover:text-white transition-colors">press@quantumpress.io</a>
           </div>
           <div className="flex justify-between items-center py-6 border-b border-gray-100 dark:border-white/10 group">
             <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">Editorial Pitches</span>
             <a href="mailto:newsroom@quantumpress.io" className="font-bold text-brand hover:text-gray-900 dark:hover:text-white transition-colors">newsroom@quantumpress.io</a>
           </div>
           <div className="flex justify-between items-center py-6 border-b border-gray-100 dark:border-white/10 group">
             <span className="text-gray-500 font-bold uppercase text-xs tracking-widest">Advertising</span>
             <a href="mailto:ad-ops@quantumpress.io" className="font-bold text-brand hover:text-gray-900 dark:hover:text-white transition-colors">ad-ops@quantumpress.io</a>
           </div>
        </div>
      </section>
    </div>
  );
};
