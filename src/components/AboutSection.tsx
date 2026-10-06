import React from 'react';
import { ShieldCheck, MapPin, Wrench, HardHat } from 'lucide-react';
import { APP_IMAGES } from '../assets/images';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Asset Gallery */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-xl group">
              <img
                src={APP_IMAGES.heroMechanical}
                alt="Alaska Mechanical Inc precision boiler and hydronic piping system"
                className="w-full h-80 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-slate-900/80 backdrop-blur-md rounded-xl border border-slate-700/60">
                <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Engineered in Anchorage, AK
                </p>
                <p className="text-xs text-slate-300 mt-0.5">
                  High-capacity hydronic manifolds, commercial heating, and certified process piping.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl overflow-hidden border border-slate-800 h-28 group">
                <img
                  src={APP_IMAGES.bentoPipeFabrication}
                  alt="Industrial pipe fabrication and welding in Anchorage workshop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-800 h-28 group">
                <img
                  src={APP_IMAGES.facilityExterior}
                  alt="Anchorage mechanical facility and fleet on Dimond D Cir"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-800 h-28 group">
                <img
                  src={APP_IMAGES.bentoBoilerRoom}
                  alt="Commercial boiler room maintenance and safety testing"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Scope */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
              Mechanical Contractor Profile
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight [text-wrap:balance]">
              Built for the Rigors of Alaska's Built Environment.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Operating out of Anchorage at 8540 Dimond D Cir, Alaska Mechanical Inc provides complete
              mechanical contracting across commercial, healthcare, industrial, and residential sectors.
              Sub-arctic infrastructure requires zero-margin-for-error engineering: freeze-proof distribution,
              high-efficiency boiler rooms, balance-verified ventilation, and certified medical gas networks.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Whether executing turnkey Design Build projects for new construction or delivering urgent
              boiler room maintenance during mid-winter sub-zero temperatures, our team delivers complete
              mechanical systems adhering to rigorous code compliance and precision craftsmanship.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
              <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40">
                <div className="flex items-center gap-2 mb-1.5 text-slate-200 font-semibold text-sm">
                  <HardHat className="w-4 h-4 text-emerald-400" />
                  <span>Licensed & Certified</span>
                </div>
                <p className="text-xs text-slate-400">
                  Full service mechanical contractor handling design, installation, backflow testing, and code approvals.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40">
                <div className="flex items-center gap-2 mb-1.5 text-slate-200 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span>Healthcare & Medical Gas</span>
                </div>
                <p className="text-xs text-slate-400">
                  Specialized NFPA 99 medical gas piping, hospital sanitary loops, and critical care infrastructure.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40">
                <div className="flex items-center gap-2 mb-1.5 text-slate-200 font-semibold text-sm">
                  <Wrench className="w-4 h-4 text-amber-400" />
                  <span>Custom Pipe Fabrication</span>
                </div>
                <p className="text-xs text-slate-400">
                  In-house spool fabrication, ASME coded welding, and industrial valve assembly.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-800/80 bg-slate-900/40">
                <div className="flex items-center gap-2 mb-1.5 text-slate-200 font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Anchorage Based</span>
                </div>
                <p className="text-xs text-slate-400">
                  Headquartered at 8540 Dimond D Cir with active service capacity across Southcentral Alaska.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
