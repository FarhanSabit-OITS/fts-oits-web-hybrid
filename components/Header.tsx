import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Home, ChevronDown } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom Logo Component for reusability within Header
  const BrandLogo = () => (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shrink-0" aria-hidden="true">
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="header-logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="42" fill="none" stroke="url(#header-logo-gradient)" strokeWidth="7" />
          <path d="M38 32 H48 V68 H38 Z" fill="url(#header-logo-gradient)" />
          <path d="M54 32 H84 V41 H74 V68 H64 V41 H54 Z" fill="url(#header-logo-gradient)" />
        </svg>
      </div>
      <span className="text-base xs:text-xl sm:text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-blue-500 dark:from-blue-400 dark:via-blue-300 dark:to-blue-200 filter drop-shadow-sm">
        {COMPANY_NAME}
      </span>
    </div>
  );

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled 
          ? 'bg-white/95 dark:bg-swiss-black/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-900 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 flex items-center justify-between">
        <Link 
          to="/"
          className="group hover:opacity-90 transition-opacity min-w-0" 
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label={`${COMPANY_NAME} homepage`}
        >
          <BrandLogo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 xl:gap-2" aria-label="Main site navigation">
          <ul className="flex items-center gap-1 xl:gap-2" role="list">
            <li>
              <Link 
                to="/"
                className={`px-3 xl:px-4 py-2 rounded-full text-sm font-medium hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-slate-800 transition-all duration-300 active:scale-95 flex items-center justify-center ${
                  isActive('/') ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                <Home size={18} aria-label="Home" />
              </Link>
            </li>

            {/* Services Dropdown Menu Item */}
            <li className="relative group/dropdown">
              <button 
                className={`px-3 xl:px-4 py-2 rounded-full text-sm font-medium hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-slate-800 transition-all duration-300 active:scale-95 flex items-center gap-1.5 ${
                  isActive('/services') || isActive('/workflow') ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                <span>Services</span>
                <ChevronDown size={14} className="group-hover/dropdown:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Dropdown Box */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-2xl bg-white dark:bg-swiss-black border border-slate-200 dark:border-slate-900 shadow-2xl p-2 opacity-0 scale-95 pointer-events-none group-hover/dropdown:opacity-100 group-hover/dropdown:scale-100 group-hover/dropdown:pointer-events-auto transition-all duration-300 origin-top z-50">
                <Link 
                  to="/services"
                  className={`block px-4 py-3 text-xs font-black uppercase tracking-wider rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors ${
                    isActive('/services') ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-slate-800/50' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Services Home
                </Link>
                <Link 
                  to="/workflow"
                  className={`block px-4 py-3 text-xs font-black uppercase tracking-wider rounded-xl hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors ${
                    isActive('/workflow') ? 'text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-slate-800/50' : 'text-slate-700 dark:text-slate-300'
                  }`}
                >
                  Agile Workflow
                </Link>
              </div>
            </li>

            <li>
              <Link 
                to="/portfolio"
                className={`px-3 xl:px-4 py-2 rounded-full text-sm font-medium hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-slate-800 transition-all duration-300 active:scale-95 ${
                  isActive('/portfolio') ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                Portfolio
              </Link>
            </li>

            <li>
              <Link 
                to="/about"
                className={`px-3 xl:px-4 py-2 rounded-full text-sm font-medium hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-slate-800 transition-all duration-300 active:scale-95 ${
                  isActive('/about') ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                About Us
              </Link>
            </li>

            <li>
              <Link 
                to="/contact"
                className={`px-3 xl:px-4 py-2 rounded-full text-sm font-medium hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-slate-800 transition-all duration-300 active:scale-95 ${
                  isActive('/contact') ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          
          <div className="ml-2 pl-2 border-l border-slate-200 dark:border-slate-700 flex items-center gap-2">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:rotate-12"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
             >
                {theme === 'dark' ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
             </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={20} aria-hidden="true" /> : <Moon size={20} aria-hidden="true" />}
          </button>
          
          <button 
            className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-navigation"
          className="absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 md:hidden p-6 shadow-2xl animate-in slide-in-from-top-2 duration-300 overflow-y-auto max-h-[85vh] no-scrollbar"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation overlay"
        >
          <nav className="flex flex-col gap-2">
            <ul className="flex flex-col gap-2" role="list">
              <li>
                <Link 
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95 block ${
                    isActive('/') ? 'text-blue-600 dark:text-blue-400 font-bold bg-blue-50/30 dark:bg-slate-800/30' : 'text-slate-800 dark:text-slate-100'
                  }`}
                >
                  Home
                </Link>
              </li>

              {/* Mobile Services Accordion */}
              <li>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full px-4 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95 flex items-center justify-between text-left text-slate-800 dark:text-slate-100"
                >
                  <span>Services</span>
                  <ChevronDown size={18} className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Accordion Sub-list */}
                <div className={`pl-6 overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen ? 'max-h-40 opacity-100 py-1' : 'max-h-0 opacity-0 pointer-events-none'
                }`}>
                  <Link 
                    to="/services"
                    onClick={() => { setIsMobileMenuOpen(false); }}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all ${
                      isActive('/services') ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    Services Home
                  </Link>
                  <Link 
                    to="/workflow"
                    onClick={() => { setIsMobileMenuOpen(false); }}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all ${
                      isActive('/workflow') ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    Agile Workflow
                  </Link>
                </div>
              </li>

              <li>
                <Link 
                  to="/portfolio"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95 block ${
                    isActive('/portfolio') ? 'text-blue-600 dark:text-blue-400 font-bold bg-blue-50/30 dark:bg-slate-800/30' : 'text-slate-800 dark:text-slate-100'
                  }`}
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link 
                  to="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95 block ${
                    isActive('/about') ? 'text-blue-600 dark:text-blue-400 font-bold bg-blue-50/30 dark:bg-slate-800/30' : 'text-slate-800 dark:text-slate-100'
                  }`}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link 
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all active:scale-95 block ${
                    isActive('/contact') ? 'text-blue-600 dark:text-blue-400 font-bold bg-blue-50/30 dark:bg-slate-800/30' : 'text-slate-800 dark:text-slate-100'
                  }`}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};
