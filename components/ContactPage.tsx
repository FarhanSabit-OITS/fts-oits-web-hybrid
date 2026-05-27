import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Contact } from './Contact';
import { Testimonials } from './Testimonials';
import { AiAssistant } from './AiAssistant';
import { Mail, Terminal } from 'lucide-react';

interface ContactPageProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ theme, toggleTheme }) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-swiss-black text-slate-900 dark:text-swiss-white selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100 transition-colors duration-300 relative">
      <Header theme={theme} toggleTheme={toggleTheme} />
      
      <main className="pt-32">
        {/* Editorial Sub-Hero Header */}
        <section className="border-b border-slate-200 dark:border-slate-900 bg-white dark:bg-swiss-black py-20 relative overflow-hidden transition-colors duration-300">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-blue-50/90 dark:bg-blue-900/40 backdrop-blur-md rounded-full text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800 text-[10px] font-black uppercase tracking-widest shadow-sm">
                <Terminal size={14} className="animate-pulse" />
                <span>Start a Project</span>
              </div>
              
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-black text-slate-950 dark:text-white leading-[0.95] tracking-tighter drop-shadow-sm">
                Let’s create something<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  disruptive together.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-900 dark:text-slate-200 max-w-2xl font-bold leading-relaxed border-l-2 border-blue-600 pl-6 py-1">
                Have an ambitious idea or a complex scaling bottleneck? Drop us a line. Our engineering strategists will get back to you with a free consultation and project roadmap within 24 hours.
              </p>
            </div>
          </div>
        </section>

        {/* Embedded Contact section */}
        <Contact />

        {/* Embedded Testimonials section */}
        <Testimonials />
      </main>

      <Footer theme={theme} toggleTheme={toggleTheme} />
      <AiAssistant />
    </div>
  );
};
