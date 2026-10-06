import React, { useState } from 'react';
import { Phone, Sun, Moon, Menu, X } from 'lucide-react';

interface NavigationProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ theme, onToggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b transition-colors duration-200 border-slate-800/80 bg-slate-950/85 dark:border-slate-800/80 dark:bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#"
          className="text-xl md:text-2xl font-black tracking-tight text-white dark:text-white whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded-md"
        >
          Alaska Mechanical Inc
        </a>

        {/* Zone 2: 4-6 Clean Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a
            href="#about"
            className="hover:text-emerald-400 transition-colors duration-150 py-1"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:text-emerald-400 transition-colors duration-150 py-1"
          >
            Services
          </a>
          <a
            href="#hours"
            className="hover:text-emerald-400 transition-colors duration-150 py-1"
          >
            Hours
          </a>
          <a
            href="#location"
            className="hover:text-emerald-400 transition-colors duration-150 py-1"
          >
            Location
          </a>
          <a
            href="#booking"
            className="hover:text-emerald-400 transition-colors duration-150 py-1"
          >
            Booking
          </a>
        </nav>

        {/* Zone 3: Primary Actions (Theme toggle, Call, Book Now) */}
        <div className="flex items-center gap-3">
          {/* Theme Switcher */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-300" />}
          </button>

          {/* Direct Phone Call */}
          <a
            href="tel:+19073498502"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-700/80 rounded-lg hover:border-slate-500 hover:text-white transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>+1 907-349-8502</span>
          </a>

          {/* Primary Action Button */}
          <a
            href="#booking"
            className="inline-flex items-center px-4 py-2 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg shadow-sm hover:shadow transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
          >
            Book Now
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-5 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#hours"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Hours & Schedule
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Location & Facility
            </a>
            <a
              href="#booking"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-900 hover:text-emerald-400 transition-colors"
            >
              Book Service
            </a>
          </nav>
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
            <a
              href="tel:+19073498502"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+1 907-349-8502</span>
            </a>
            <span className="text-xs text-slate-500">Mon–Fri 7:30am–4pm</span>
          </div>
        </div>
      )}
    </header>
  );
};
