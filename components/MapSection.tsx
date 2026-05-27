import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { ADDRESS } from '../constants';

export const MapSection: React.FC = () => {
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.123456789012!2d90.3644321!3d23.7431234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ0JzM1LjIiTiA5MMKwMjEnNTEuOSJF!5e0!3m2!1sen!2sbd!4v1234567890123`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

  return (
    <section className="w-full relative border-t border-b border-slate-200 dark:border-slate-800/80 bg-white dark:bg-swiss-black transition-colors duration-300">
      {/* Map Iframe Wrapper */}
      <div className="w-full h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden relative">
        <iframe
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="OITS Dhaka Studio Map Location"
          className="w-full h-full grayscale dark:invert-[0.9] dark:hue-rotate-180 hover:grayscale-0 dark:hover:invert-0 dark:hover:hue-rotate-0 transition-all duration-[1200ms] ease-out filter contrast-125 brightness-95"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
        
        {/* Floating Swiss-Modern Address Panel */}
        <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-auto md:max-w-md bg-white/90 dark:bg-swiss-black/95 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] border border-slate-200/80 dark:border-slate-800/80 shadow-2xl transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
              <MapPin size={20} />
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-1">Studio Location</p>
                <h4 className="text-lg font-black text-slate-950 dark:text-white leading-snug tracking-tight">OITS Dhaka</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2 font-medium">{ADDRESS}</p>
              </div>
              
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-slate-950 dark:bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] group"
              >
                Get Directions
                <Navigation size={12} className="transform rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
