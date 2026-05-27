import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Services } from './Services';
import { AiAssistant } from './AiAssistant';
import { Layers, Terminal, Sparkles } from 'lucide-react';

interface ServicesPageProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-swiss-black text-slate-900 dark:text-swiss-white selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 transition-colors duration-300 relative">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main className="pt-32">
        {/* Editorial Sub-Hero Header */}
        <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-20 relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-50/90 dark:bg-blue-900/40 backdrop-blur-md rounded-full text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800 text-[10px] font-black uppercase tracking-widest shadow-sm">
                <Terminal size={14} className="animate-pulse" />
                <span>Our Capabilities Matrix</span>
              </div>
              
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black text-slate-950 dark:text-white leading-[0.95] tracking-tighter drop-shadow-sm">
                Industrial-grade solutions,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  engineered to scale.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-900 dark:text-slate-200 max-w-2xl font-bold leading-relaxed border-l-2 border-blue-600 pl-6 py-1">
                We leverage modern cloud-native architectures, strict TypeScript compiler safety, and microservices patterns to deliver software that outperforms and outlasts.
              </p>
            </div>
          </div>
        </section>

        {/* Embedded Services section */}
        <Services />
      </main>

      <Footer theme={theme} toggleTheme={toggleTheme} />
      <AiAssistant />
    </div>
  );
};
