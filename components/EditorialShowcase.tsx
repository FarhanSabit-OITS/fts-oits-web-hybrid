import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UNIFIED_SERVICES, UNIFIED_PORTFOLIO, COMPANY_NAME, TAGLINE } from "../constants";
import { ArrowUpRight, Terminal, Shield, ArrowRight, Eye, HardDrive, Cpu, Layers } from "lucide-react";
import { Link } from "react-router-dom";

// Secure local navigator connection interfaces
interface NetworkInformation extends EventTarget {
  readonly saveData: boolean;
  readonly effectiveType: "2g" | "3g" | "4g";
}

export default function EditorialShowcase() {
  const memoizedServices = useMemo(() => UNIFIED_SERVICES, []);
  const memoizedPortfolio = useMemo(() => UNIFIED_PORTFOLIO, []);
  const [activeFilter, setActiveFilter] = useState("ALL");

  const categories = useMemo(() => {
    return ["ALL", ...new Set(memoizedPortfolio.map((item) => item.category))];
  }, [memoizedPortfolio]);

  const filteredItems = useMemo(() => {
    if (activeFilter === "ALL") return memoizedPortfolio;
    return memoizedPortfolio.filter((item) => item.category === activeFilter);
  }, [memoizedPortfolio, activeFilter]);

  // Connection-aware asset preloader
  const handlePrefetchAsset = (webmPath: string) => {
    const nav = navigator as Navigator & { connection?: NetworkInformation };
    if (nav.connection) {
      if (nav.connection.saveData || ["2g", "3g"].includes(nav.connection.effectiveType)) {
        return; // Suppress downloads on cellular limits
      }
    }

    if (!document.querySelector(`link[href="${webmPath}"]`)) {
      const link = document.createElement("link");
      link.rel = "prefetch";
      link.as = "video";
      link.href = webmPath;
      document.head.appendChild(link);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-swiss-black min-h-screen text-swiss-white selection:bg-swiss-accent font-sans selection:text-white"
    >
      {/* Editorial Header Badge */}
      <div className="border-b border-swiss-white/10 px-6 py-4 flex justify-between items-center bg-swiss-black/80 backdrop-blur-md sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3">
          <Terminal className="w-4 h-4 text-swiss-accent animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-swiss-muted hover:text-white transition-colors">
            {COMPANY_NAME.toUpperCase()} // EDITORIAL_SHOWCASE
          </span>
        </Link>
        <div className="flex items-center gap-2 font-mono text-[10px] bg-swiss-white/5 border border-swiss-white/10 px-3 py-1 uppercase text-swiss-accent rounded-sm">
          <Shield className="w-3.5 h-3.5" /> SECURE_STACK_ACTIVE
        </div>
      </div>

      {/* Swiss-Modern Kinetic Hero Section */}
      <section className="editorial-container flex flex-col justify-center min-h-[80vh] relative">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8"
        >
          <span className="text-swiss-accent font-mono text-xs tracking-widest uppercase flex items-center gap-2">
            <Cpu className="w-3 h-3 text-swiss-accent" /> // DETERMINISTIC SYSTEM ARCHITECTURE
          </span>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] glow-headline max-w-5xl">
            DIGITAL MASTERY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-swiss-white to-swiss-muted">
              UNCOMPROMISING SPEED
            </span>
          </h1>
          <p className="text-swiss-muted max-w-xl text-base md:text-lg tracking-tight font-light leading-relaxed">
            Architecting ultra-responsive, highly optimized digital systems for global innovators. Industrial strength deployment balanced with absolute visual intent.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link to="/" className="premium-cta bg-swiss-white text-swiss-black hover:bg-swiss-accent hover:text-white border-transparent">
              RETURN TO CORE PLATFORM <ArrowRight className="w-3.5 h-3.5 shrink-0" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Dynamic Faceted Portfolio Pre-fetching Grid */}
      <section className="border-t border-swiss-white/10 bg-swiss-black py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-swiss-white/10 pb-6">
            <div>
              <span className="font-mono text-xs text-swiss-accent tracking-widest block mb-2">
                // SYSTEM TELEMETRY
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-white">REACTIVE FRONTIERS</h2>
            </div>
            
            {/* Precision Navigation Chips */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`font-mono text-[9px] tracking-widest uppercase px-4 py-2 border transition-all duration-300 ${
                    activeFilter === cat
                      ? "border-swiss-accent text-swiss-accent bg-swiss-accent/5 shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                      : "border-swiss-white/10 text-swiss-muted hover:border-swiss-white/30 hover:text-swiss-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout supporting popLayout animations */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 layout-stable-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((project) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onMouseEnter={() => handlePrefetchAsset(project.media.webm)}
                  className="border border-swiss-white/10 bg-swiss-black group relative flex flex-col justify-between h-96 p-6 overflow-hidden transition-all duration-500 hover:border-swiss-accent/30 hover:shadow-premium-glow"
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center font-mono text-[9px] tracking-widest text-swiss-muted">
                      <span>{project.category}</span>
                      <span className="flex items-center gap-1 text-swiss-accent uppercase">
                        <HardDrive className="w-2.5 h-2.5" /> {project.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold tracking-tight uppercase text-white">
                      {project.title}
                    </h3>
                    <p className="text-swiss-muted text-xs tracking-tight leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Adaptive Video Stream Container */}
                  <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-swiss-black pointer-events-none">
                    <video
                      src={project.media.webm}
                      poster={project.media.poster}
                      loop
                      muted
                      playsInline
                      autoPlay
                      className="w-full h-full object-cover mix-blend-luminosity brightness-75 scale-105 group-hover:scale-100 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-swiss-black via-swiss-black/40 to-transparent" />
                  </div>

                  {/* Footnotes Display Wrapper */}
                  <div className="relative z-10 pt-4 border-t border-swiss-white/5 flex justify-between items-center bg-swiss-black/40 backdrop-blur-sm">
                    <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="font-mono text-[9px] bg-swiss-white/5 px-2.5 py-1 text-swiss-white/80 border border-swiss-white/5 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="font-mono text-[9px] tracking-widest uppercase text-white flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <Eye className="w-3.5 h-3.5 text-swiss-accent" /> VIEW_SYSTEM
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Premium Swiss-Modern Capabilities Layer */}
      <section className="border-t border-swiss-white/10 bg-swiss-black py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="font-mono text-xs text-swiss-accent tracking-widest block mb-12">
            // CAPABILITIES_MATRIX
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {memoizedServices.map((service) => (
              <div
                key={service.id}
                className="border border-swiss-white/10 p-8 space-y-4 group transition-all duration-500 hover:border-swiss-accent/40 hover:shadow-premium-glow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold tracking-tight uppercase">
                      {service.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-swiss-muted group-hover:text-swiss-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                  <p className="text-swiss-muted text-xs tracking-tight leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <ul className="pt-6 space-y-2.5 border-t border-swiss-white/5 mt-4">
                  {service.extendedFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="font-mono text-[10px] text-swiss-white/70 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-swiss-accent rounded-full" />
                      {feature.toUpperCase()}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Footer Grid */}
      <footer className="border-t border-swiss-white/10 bg-swiss-black py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-mono text-[10px] tracking-widest text-swiss-white">
              © 2026 {COMPANY_NAME.toUpperCase()} // ALL_SYSTEMS_OPERATIONAL
            </p>
            <p className="text-[10px] text-swiss-muted font-light tracking-tight uppercase">
              {TAGLINE}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="font-mono text-[9px] uppercase tracking-widest text-swiss-accent border border-swiss-accent/20 px-5 py-2.5 bg-swiss-accent/5 transition-all duration-300 hover:bg-swiss-accent hover:text-white hover:shadow-premium-glow"
            >
              RETURN TO CORE
            </Link>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
