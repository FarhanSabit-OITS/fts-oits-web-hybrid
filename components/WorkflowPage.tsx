import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Process } from './Process';
import { Services } from './Services';
import { AiAssistant } from './AiAssistant';
import { ShieldCheck, Terminal, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WorkflowPageProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const WorkflowPage: React.FC<WorkflowPageProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 transition-colors duration-300 relative">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main className="pt-32">
        {/* Editorial Sub-Hero Header */}
        <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-20 relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-50/90 dark:bg-blue-900/40 backdrop-blur-md rounded-full text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800 text-[10px] font-black uppercase tracking-widest shadow-sm">
                <Terminal size={14} className="animate-pulse" />
                <span>Our Engineering Workflow</span>
              </div>
              
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black text-slate-950 dark:text-white leading-[0.95] tracking-tighter drop-shadow-sm">
                The Agile lifecycle behind<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  each digital success.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-900 dark:text-slate-200 max-w-2xl font-bold leading-relaxed border-l-2 border-blue-600 pl-6 py-1">
                Learn how we move rapidly from initial strategy discovery and interactive wireframing through high-performance sprint development to bulletproof QA and automated cloud deployments.
              </p>
            </div>
          </div>
        </section>

        {/* Embedded Process (Workflow) section */}
        <Process />

        {/* Embedded Services section (Tech Stack explorer) */}
        <Services />

        {/* Editorial CTA Section */}
        <section className="py-24 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
          <div className="container mx-auto px-6 text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-sm font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">// START YOUR METRICS DISRUPTION</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-950 dark:text-white tracking-tighter leading-tight max-w-4xl mx-auto">
              Ready to build something uncompromisingly fast?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto font-medium text-base sm:text-lg">
              Get in touch with our engineering strategists today for a free architecture review and roadmap.
            </p>
            <div className="pt-4">
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-950 dark:bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-2xl dark:hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                GET A FREE ESTIMATE <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer theme={theme} toggleTheme={toggleTheme} />
      <AiAssistant />
    </div>
  );
};
