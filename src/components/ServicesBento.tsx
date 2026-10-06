import React, { useState, useMemo } from 'react';
import { SERVICES_DATA, ServiceItem } from '../data/services';
import { Search, Flame, Droplets, Building2, Stethoscope, ChevronRight } from 'lucide-react';
import { APP_IMAGES } from '../assets/images';

interface ServicesBentoProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Commercial & Construction',
    'Heating & Mechanical',
    'Plumbing & Piping',
    'Maintenance & Emergency',
    'Specialized & Healthcare',
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((svc) => {
      const matchesCategory = activeCategory === 'All' || svc.category === activeCategory;
      const matchesQuery =
        svc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        svc.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const handleBookService = (name: string) => {
    onSelectService(name);
    const bookingElement = document.getElementById('booking');
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-emerald-400 tracking-wider uppercase mb-2">
            Contracting Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight [text-wrap:balance]">
            34 Specialized Mechanical, Piping & HVAC Services.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed font-normal">
            From complete system change outs and industrial medical gas distribution to municipal backflow testing
            and commercial boiler room servicing.
          </p>
        </div>

        {/* Bento Grid: 4 Marquee Capability Spotlights */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          {/* Card 1: Pipe Fabrication & Welded Spools (Col 7) */}
          <div className="md:col-span-7 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between relative group hover:border-slate-700 transition-colors">
            <div className="relative z-10 space-y-3 max-w-lg">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Industrial & Commercial
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Pipe Fabrication & System Assembly
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                ASME-standard on-site and pre-fabricated spool piping, custom manifold tie-ins, welded steel and
                grooved mechanical distribution for heavy commercial and industrial infrastructure.
              </p>
              <button
                type="button"
                onClick={() => handleBookService('Pipe Fabrication')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 pt-2 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Request Pipe Fabrication</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden h-48 border border-slate-800/80">
              <img
                src={APP_IMAGES.bentoPipeFabrication}
                alt="Industrial pipe fabrication workshop"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Card 2: Commercial Boiler Room Maintenance (Col 5) */}
          <div className="md:col-span-5 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between relative group hover:border-slate-700 transition-colors">
            <div className="relative z-10 space-y-3">
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                Heating Systems
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Boiler Room Servicing & Overhauls
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Critical heating assurance: combustion analysis, boiler change outs, hydronic zone balancing,
                and safety valve testing engineered for harsh Alaskan freeze seasons.
              </p>
              <button
                type="button"
                onClick={() => handleBookService('Maintenance Boiler Room')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 pt-2 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Schedule Boiler Servicing</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden h-48 border border-slate-800/80">
              <img
                src={APP_IMAGES.bentoBoilerRoom}
                alt="Commercial boiler room maintenance"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Card 3: Medical Gas & Healthcare Facilities (Col 5) */}
          <div className="md:col-span-5 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between relative group hover:border-slate-700 transition-colors">
            <div className="relative z-10 space-y-3">
              <div className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">
                Specialized Infrastructure
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Medical Gas & Health Care Systems
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Certified NFPA 99 medical gas distribution, clinical vacuum systems, cleanroom negative pressure
                HVAC, and hospital sanitary plumbing installations.
              </p>
              <button
                type="button"
                onClick={() => handleBookService('Medical Gas')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 pt-2 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Consult on Medical Gas</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden h-48 border border-slate-800/80">
              <img
                src={APP_IMAGES.bentoMedicalGas}
                alt="Healthcare medical gas distribution panel"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Card 4: Design Build / Design Assist & Complete Change Out (Col 7) */}
          <div className="md:col-span-7 rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 p-6 sm:p-8 flex flex-col justify-between relative group hover:border-slate-700 transition-colors">
            <div className="relative z-10 space-y-3 max-w-lg">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Full-Lifecycle Engineering
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Design Build / Complete System Change Out
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Turnkey engineering from preliminary project plans and full design to mechanical system demolition,
                retrofits, and commissioning with minimal facility interruption.
              </p>
              <button
                type="button"
                onClick={() => handleBookService('Design Build/ Design Assist')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 pt-2 group-hover:translate-x-0.5 transition-transform"
              >
                <span>Inquire About Design Build</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden h-48 border border-slate-800/80">
              <img
                src={APP_IMAGES.bentoDesignBuild}
                alt="Mechanical engineering design build and 3D BIM modeling"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Specialized Capability Visual Showcase */}
        <div className="mb-16 rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
            <div>
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Certified Trade Disciplines
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                Precision Equipment & Field Craftsmanship
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Specialized infrastructure executed by master plumbers, certified welders, and HVAC technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950/60 group">
              <div className="h-36 overflow-hidden">
                <img
                  src={APP_IMAGES.industrialPlumbingValves}
                  alt="Industrial plumbing, backflow assemblies and pressure valves"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3.5">
                <div className="text-xs font-bold text-white">Backflow & Industrial Valves</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Certified testing, PRV balancing & water systems</div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950/60 group">
              <div className="h-36 overflow-hidden">
                <img
                  src={APP_IMAGES.heatingGasCombustion}
                  alt="Commercial gas heating boilers and digital diagnostic manifolds"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3.5">
                <div className="text-xs font-bold text-white">Gas Boilers & Combustion</div>
                <div className="text-[11px] text-slate-400 mt-0.5">High-efficiency condensing units & gas line repair</div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950/60 group">
              <div className="h-36 overflow-hidden">
                <img
                  src={APP_IMAGES.bentoPipeFabrication}
                  alt="ASME pipe fabrication and welded process loops"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3.5">
                <div className="text-xs font-bold text-white">Pipe Fabrication & Welds</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Custom spool fabrication & structural piping</div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-slate-800/80 bg-slate-950/60 group">
              <div className="h-36 overflow-hidden">
                <img
                  src={APP_IMAGES.bentoMedicalGas}
                  alt="NFPA 99 medical gas panels and cleanroom hospital piping"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-3.5">
                <div className="text-xs font-bold text-white">Medical Gas & Healthcare</div>
                <div className="text-[11px] text-slate-400 mt-0.5">NFPA 99 verified clinical distribution</div>
              </div>
            </div>
          </div>
        </div>

        {/* All 34 Services Explorer with Search & Filter Tabs */}
        <div className="border-t border-slate-800/80 pt-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white">
                Comprehensive Services Directory
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Explore all 34 licensed mechanical and plumbing capabilities.
              </p>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400"
              />
            </div>
          </div>

          {/* Interactive Category Filter Tabs (Zero-pill discipline: Segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-800 mb-8 overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-slate-800 text-emerald-400 shadow-sm border border-slate-700'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredServices.map((service: ServiceItem) => (
              <div
                key={service.id}
                className="p-5 rounded-xl border border-slate-800/80 bg-slate-900/40 hover:bg-slate-900/70 hover:border-slate-700 transition-all duration-150 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[11px] font-medium text-slate-400 mb-1.5">
                    {service.category}
                  </div>
                  <h4 className="text-base font-semibold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {service.name}
                  </h4>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <div className="pt-4 mt-2 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">Anchorage & Statewide</span>
                  <button
                    type="button"
                    onClick={() => handleBookService(service.name)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Request</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12 border border-dashed border-slate-800 rounded-xl">
              <p className="text-sm text-slate-400">No services matching "{searchQuery}".</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('All');
                }}
                className="mt-3 text-xs font-semibold text-emerald-400 hover:underline"
              >
                Clear search filter
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
