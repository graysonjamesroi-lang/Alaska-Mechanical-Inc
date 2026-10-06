import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Address */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-xl font-black tracking-tight text-white block">
              Alaska Mechanical Inc
            </span>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Full-service mechanical contractor delivering commercial plumbing, heavy piping fabrication,
              boiler room maintenance, and medical gas infrastructure across Anchorage and Alaska.
            </p>

            <div className="space-y-2 pt-2 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>8540 Dimond D Cir, Anchorage, AK 99515, United States</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="tel:+19073498502"
                  className="font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  +1 907-349-8502 (Click to Call)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Monday – Friday: 7:30 AM – 4:00 PM AKST</span>
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">
                  About Anchorage Operations
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  34 Mechanical Capabilities
                </a>
              </li>
              <li>
                <a href="#hours" className="hover:text-emerald-400 transition-colors">
                  Live Operating Hours & Status
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-emerald-400 transition-colors">
                  Facility & Map Directions
                </a>
              </li>
              <li>
                <a href="#booking" className="hover:text-emerald-400 transition-colors">
                  Schedule Project Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Emergency */}
          <div className="md:col-span-4 space-y-3">
            <div className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Compliance & Emergency Dispatch
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Certified mechanical contracting adhering to Alaska building codes, ASME pressure piping protocols,
              and NFPA 99 healthcare facility requirements.
            </p>
            <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div className="text-[11px] text-slate-300">
                <span className="font-semibold text-white">Confidential Inquiries:</span> Client project documentation and specifications are handled strictly via encrypted internal workflows.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
          <div>
            © {new Date().getFullYear()} Alaska Mechanical Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Anchorage, AK 99515</span>
            <span>·</span>
            <span>Licensed Mechanical Contractor</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
