import React from 'react';
import { Calendar, Phone } from 'lucide-react';

export const FloatingBookButton: React.FC = () => {
  const scrollToBooking = () => {
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2">
      {/* Quick Phone Call (Mobile quick action) */}
      <a
        href="tel:+19073498502"
        aria-label="Call Alaska Mechanical Inc"
        className="sm:hidden flex items-center justify-center w-11 h-11 rounded-full bg-slate-900 border border-slate-700 text-emerald-400 shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
      >
        <Phone className="w-4 h-4" />
      </a>

      {/* Floating Book Button */}
      <button
        type="button"
        onClick={scrollToBooking}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs shadow-2xl shadow-emerald-950/60 transition-transform duration-150 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Now</span>
      </button>
    </div>
  );
};
