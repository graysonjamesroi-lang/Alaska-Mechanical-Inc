import React from 'react';
import { MapPin, Navigation, Phone, ExternalLink, Clock } from 'lucide-react';
import { APP_IMAGES } from '../assets/images';

export const LocationSection: React.FC = () => {
  const addressQuery = encodeURIComponent('8540 Dimond D Cir, Anchorage, AK 99515');
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;

  return (
    <section id="location" className="py-20 md:py-28 border-b border-slate-900 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Facility Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
              Facility & Headquarters
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight [text-wrap:balance]">
              Anchorage Operations & Fabrication Hub.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed font-normal">
              Alaska Mechanical Inc operates from our primary facility in South Anchorage, strategically positioned
              for rapid fleet dispatch across the Anchorage Municipality, Chugiak-Eagle River, the Mat-Su Borough,
              and remote commercial projects across Alaska.
            </p>

            <div className="space-y-4 pt-2">
              {/* Address Block */}
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Physical Address
                  </div>
                  <div className="text-sm font-bold text-white mt-1">
                    8540 Dimond D Cir
                  </div>
                  <div className="text-xs text-slate-300">
                    Anchorage, AK 99515, United States
                  </div>
                </div>
              </div>

              {/* Hours & Phone Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-start gap-3">
                  <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Business Hours
                    </div>
                    <div className="text-xs font-bold text-slate-200 mt-1">
                      Mon–Fri: 7:30 AM – 4:00 PM
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Main Dispatch
                    </div>
                    <a
                      href="tel:+19073498502"
                      className="text-xs font-bold text-emerald-400 hover:text-emerald-300 mt-1 inline-block"
                    >
                      +1 907-349-8502
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-colors"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps / Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-75" />
              </a>
            </div>
          </div>

          {/* Right Column: Stylized Visual Map Representation */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden p-6 relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80 mb-4">
                <div>
                  <div className="text-xs font-semibold text-slate-300">
                    South Anchorage Industrial Corridor
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    61.1275° N, 149.8824° W · Dimond D Cir
                  </div>
                </div>
                <span className="text-xs font-medium text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  HQ Facility
                </span>
              </div>

              {/* High-res Facility Visual with Map Overlay */}
              <div className="relative rounded-xl overflow-hidden h-72 border border-slate-800">
                <img
                  src={APP_IMAGES.facilityExterior}
                  alt="Alaska Mechanical Inc headquarters facility and fleet in Anchorage Alaska"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-700/70 text-xs">
                    <span className="text-emerald-400 font-semibold">Service Coverage:</span>
                    <span className="text-slate-300 ml-1.5">Anchorage, Mat-Su Valley & Statewide AK</span>
                  </div>
                </div>
              </div>

              {/* Service Areas Note */}
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-xs text-slate-400 font-medium pt-2">
                <div className="py-2 rounded-lg bg-slate-900/70 border border-slate-800/60">
                  Anchorage Metro
                </div>
                <div className="py-2 rounded-lg bg-slate-900/70 border border-slate-800/60">
                  Mat-Su Borough
                </div>
                <div className="py-2 rounded-lg bg-slate-900/70 border border-slate-800/60">
                  Statewide Commercial
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
