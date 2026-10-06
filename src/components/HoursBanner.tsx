import React from 'react';
import { OperatingStatus } from '../utils/operatingHours';
import { Clock, Phone, AlertCircle, Calendar } from 'lucide-react';

interface HoursBannerProps {
  status: OperatingStatus;
}

export const HoursBanner: React.FC<HoursBannerProps> = ({ status }) => {
  return (
    <section id="hours" className="relative py-12 border-b border-slate-900 bg-slate-950/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 md:p-8 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Column 1: Live Status & Anchorage Time */}
            <div className="md:col-span-5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>Anchorage Local Time & Operating Status</span>
              </div>
              <div className="flex items-baseline gap-3">
                <span className="text-2xl md:text-3xl font-black text-white font-mono tabular-nums">
                  {status.currentTimeString}
                </span>
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold ${
                    status.isOpen
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}
                >
                  {status.statusText}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {status.nextChangeText}
              </p>
            </div>

            {/* Column 2: Official Working Hours Schedule */}
            <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-slate-800/80 pt-4 md:pt-0 md:pl-6 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Operating Timings</span>
              </div>
              <div className="text-sm font-semibold text-slate-200">
                Monday – Friday: 7:30 AM – 4:00 PM
              </div>
              <div className="text-xs text-slate-500">
                Saturday – Sunday: Closed for standard appointments
              </div>
            </div>

            {/* Column 3: Emergency Dispatch Call-out */}
            <div className="md:col-span-3 border-t md:border-t-0 md:border-l border-slate-800/80 pt-4 md:pt-0 md:pl-6 flex flex-col justify-center">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 mb-2">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Emergency Service</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">
                Critical heating outage or pipe failure? Direct phone dispatch.
              </p>
              <a
                href="tel:+19073498502"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>+1 907-349-8502</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
