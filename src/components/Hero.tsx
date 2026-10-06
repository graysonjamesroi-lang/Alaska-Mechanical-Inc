import React, { useState } from 'react';
import { MechanicalScene } from './3d/MechanicalScene';
import { OperatingStatus } from '../utils/operatingHours';
import { ArrowDown, Phone, ShieldCheck, Wrench, Clock, Box, Image as ImageIcon } from 'lucide-react';
import { APP_IMAGES } from '../assets/images';

interface HeroProps {
  status: OperatingStatus;
}

export const Hero: React.FC<HeroProps> = ({ status }) => {
  const [visualMode, setVisualMode] = useState<'3d' | 'photo'>('3d');
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden border-b border-slate-900 bg-slate-950">
      {/* Aurora Ambient Backdrop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-20 w-[580px] h-[580px] rounded-full bg-emerald-500/10 blur-[130px]" />
        <div className="absolute top-1/3 -right-28 w-[640px] h-[640px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute -bottom-24 left-1/3 w-[500px] h-[500px] rounded-full bg-indigo-500/08 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Kinetic Typography & Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed status line (Zero-pill discipline) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
              <span className="flex items-center gap-1.5">
                <span
                  className={`w-2 h-2 rounded-full ${
                    status.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                  }`}
                  aria-hidden="true"
                />
                <span className={status.isOpen ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
                  {status.statusText}
                </span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>{status.currentTimeString}</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-300">Anchorage, AK</span>
            </div>

            {/* Primary Headline with text-wrap: balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              Sub-Arctic Mechanical Systems Engineered for Extreme Demands.
            </h1>

            {/* Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Alaska Mechanical Inc is Anchorage’s trusted mechanical contractor delivering comprehensive
              commercial plumbing, precision pipe fabrication, industrial boiler rooms, and medical gas
              systems across the Last Frontier.
            </p>

            {/* Core Capability Line (Editorial unboxed metadata) */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5 text-slate-200">
                <Wrench className="w-3.5 h-3.5 text-emerald-400" />
                <span>Commercial & Industrial Contracting</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>ASME & NFPA 99 Medical Gas Compliant</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span className="flex items-center gap-1.5 text-slate-200">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Emergency Service Response</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#booking"
                className="px-6 py-3.5 text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-emerald-900/60 transition-all duration-150 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                Schedule Consultation
              </a>
              <a
                href="tel:+19073498502"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 rounded-xl transition-all duration-150 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call +1 907-349-8502</span>
              </a>
              <a
                href="#services"
                className="px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-white transition-colors duration-150 whitespace-nowrap"
              >
                View 34 Specialized Services ↓
              </a>
            </div>
          </div>

          {/* Right Column: Interactive 3D Transmission Manifold / Photo Visual */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full h-[440px] md:h-[540px] relative rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm shadow-2xl">
              {/* Top View Mode Switcher */}
              <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between text-[11px] text-slate-300">
                <span className="font-semibold text-slate-200 tracking-wide uppercase">
                  {visualMode === '3d' ? '3D Hydraulic Manifold' : 'Anchorage Mechanical Plant'}
                </span>
                
                {/* Segmented view controls */}
                <div className="flex items-center gap-1 bg-slate-950/80 p-0.5 rounded-lg border border-slate-800 backdrop-blur-md">
                  <button
                    type="button"
                    onClick={() => setVisualMode('3d')}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      visualMode === '3d'
                        ? 'bg-slate-800 text-emerald-400 shadow-sm border border-slate-700'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Box className="w-3 h-3" />
                    <span>3D Model</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setVisualMode('photo')}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-medium transition-colors ${
                      visualMode === 'photo'
                        ? 'bg-slate-800 text-emerald-400 shadow-sm border border-slate-700'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <ImageIcon className="w-3 h-3" />
                    <span>Facility</span>
                  </button>
                </div>
              </div>

              {/* View Content: 3D Scene or Real Mechanical Photography */}
              {visualMode === '3d' ? (
                <MechanicalScene />
              ) : (
                <div className="relative w-full h-full">
                  <img
                    src={APP_IMAGES.heroMechanical}
                    alt="Alaska Mechanical Inc industrial boiler and hydronic piping system in Anchorage"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute bottom-14 left-5 right-5 p-3.5 bg-slate-900/85 backdrop-blur-md rounded-xl border border-slate-700/60">
                    <div className="text-xs font-semibold text-emerald-400">
                      Commercial Boiler & Hydronic Loops
                    </div>
                    <div className="text-[11px] text-slate-300 mt-0.5">
                      ASME-compliant high-output distribution engineered for Alaska freeze cycles.
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom spec bar */}
              <div className="absolute bottom-4 left-5 right-5 z-20 flex items-center justify-between text-xs text-slate-400 pointer-events-none bg-slate-950/80 backdrop-blur-md py-2 px-3 rounded-lg border border-slate-800/60">
                <span>{visualMode === '3d' ? 'Refraction & Flow Simulator' : '8540 Dimond D Cir Shop'}</span>
                <span className="text-emerald-400 font-mono tabular-nums">7.5 kVA Hydronic Core</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden md:flex items-center gap-1 text-[11px] text-slate-500 font-medium">
        <span>Scroll to explore facility & capabilities</span>
        <ArrowDown className="w-3 h-3 text-emerald-400 animate-bounce" />
      </div>
    </section>
  );
};
