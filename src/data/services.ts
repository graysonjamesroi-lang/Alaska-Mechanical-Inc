export interface ServiceItem {
  id: string;
  name: string;
  category: 'Commercial & Construction' | 'Heating & Mechanical' | 'Plumbing & Piping' | 'Maintenance & Emergency' | 'Specialized & Healthcare';
  description: string;
  isMarquee?: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  // Commercial & Construction
  {
    id: 'design-build',
    name: 'Design Build/ Design Assist',
    category: 'Commercial & Construction',
    description: 'Collaborative engineering and pre-construction consulting optimizing system efficiency, constructability, and lifecycle costs.',
    isMarquee: true,
  },
  {
    id: 'full-design',
    name: 'Full Design',
    category: 'Commercial & Construction',
    description: 'Comprehensive engineering specifications, load calculations, and tailored mechanical blueprints for new developments.',
  },
  {
    id: 'project-plans',
    name: 'Project Plans',
    category: 'Commercial & Construction',
    description: 'Detailed sequencing, material schedules, and rigorous safety coordination for complex commercial mechanical jobs.',
  },
  {
    id: 'construction-projects',
    name: 'Construction Projects',
    category: 'Commercial & Construction',
    description: 'Turnkey mechanical installations for new commercial developments, multi-family complexes, and industrial sites across Alaska.',
  },
  {
    id: 'tenant-improvements',
    name: 'Tenant Improvements',
    category: 'Commercial & Construction',
    description: 'Precision mechanical reconfigurations, duct alterations, and plumbing build-outs for leased retail and office properties.',
  },
  {
    id: 'facility-improvements',
    name: 'Facility Improvements',
    category: 'Commercial & Construction',
    description: 'Capital infrastructure modernizations, efficiency retrofits, and capacity expansion for active facilities.',
  },
  {
    id: 'complete-system-change-out',
    name: 'Complete System Change Out',
    category: 'Commercial & Construction',
    description: 'Seamless decommission and modern replacement of aged mechanical infrastructure with minimal operational downtime.',
  },
  {
    id: 'projects-projects',
    name: 'Projects Projects',
    category: 'Commercial & Construction',
    description: 'Dedicated project management and master tradesperson execution tailored to specialized project scopes.',
  },
  {
    id: 'install-systems',
    name: 'Install Systems',
    category: 'Commercial & Construction',
    description: 'Rigorous equipment placement, piping tie-ins, and automated controls integration compliant with sub-arctic codes.',
  },

  // Heating & Mechanical
  {
    id: 'full-service-mechanical',
    name: 'Full Service Mechanical',
    category: 'Heating & Mechanical',
    description: 'End-to-end mechanical contracting covering commercial HVAC, hydronic loops, steam systems, and building automation.',
    isMarquee: true,
  },
  {
    id: 'mechanical-systems',
    name: 'Mechanical Systems',
    category: 'Heating & Mechanical',
    description: 'Heavy commercial chillers, air handlers, exhaust blowers, and engineered environmental control assemblies.',
  },
  {
    id: 'heating-improvements',
    name: 'Heating Improvements',
    category: 'Heating & Mechanical',
    description: 'Energy-saving boiler upgrades, zoned hydronic distributions, and high-efficiency radiant retrofits built for Alaska winters.',
  },
  {
    id: 'heating-servicing',
    name: 'Heating Servicing',
    category: 'Heating & Mechanical',
    description: 'Annual combusion analysis, burner calibrations, heat exchanger inspections, and seasonal tune-ups.',
  },
  {
    id: 'maintenance-boiler-room',
    name: 'Maintenance Boiler Room',
    category: 'Heating & Mechanical',
    description: 'Comprehensive commercial boiler room management, pressure vessel maintenance, manifold balancing, and safety relief testing.',
    isMarquee: true,
  },
  {
    id: 'gas-heater-installation',
    name: 'Gas Heater Installation',
    category: 'Heating & Mechanical',
    description: 'Certified natural gas and propane unit heater installation for industrial hangars, warehouses, and shops.',
  },
  {
    id: 'gas-line-repair',
    name: 'Gas Line Repair',
    category: 'Heating & Mechanical',
    description: 'Certified pressure leak detection, welded pipe repairs, and code-certified replacement of indoor and underground gas mains.',
  },

  // Plumbing & Piping
  {
    id: 'pipe-fabrication',
    name: 'Pipe Fabrication',
    category: 'Plumbing & Piping',
    description: 'Precision off-site and on-site pipe spool fabrication, ASME-certified welding, grooved and flanged process piping.',
    isMarquee: true,
  },
  {
    id: 'industrial-plumbing',
    name: 'Industrial Plumbing',
    category: 'Plumbing & Piping',
    description: 'Heavy industrial drainage, acid waste lines, grease interceptors, and high-volume process water piping.',
  },
  {
    id: 'residential-plumbing',
    name: 'Residential Plumbing',
    category: 'Plumbing & Piping',
    description: 'Premium plumbing installations, repipes, tankless water heating, and water treatment systems for residences.',
  },
  {
    id: 'plumbing-mechanical',
    name: 'Plumbing & Mechanical',
    category: 'Plumbing & Piping',
    description: 'Integrated plumbing and mechanical solutions coordinating potable supply, waste, vents, and hydronics in single delivery.',
  },
  {
    id: 'plumbing-and-heating',
    name: 'Plumbing And Heating',
    category: 'Plumbing & Piping',
    description: 'Dual-discipline diagnostics, unified system overhauls, and preventative balancing for multi-unit properties.',
  },
  {
    id: 'plumbing-fixtures',
    name: 'Plumbing Fixtures',
    category: 'Plumbing & Piping',
    description: 'Commercial specification fixtures, touchless commercial sensor valves, ADA-compliant suites, and residential luxury fittings.',
  },
  {
    id: 'bath-remodel',
    name: 'Bath Remodel',
    category: 'Plumbing & Piping',
    description: 'Complete plumbing rough-ins, drain relocations, custom walk-in shower valves, and luxury bathroom reconfigurations.',
  },
  {
    id: 'valve-replacement',
    name: 'Valve Replacement',
    category: 'Plumbing & Piping',
    description: 'Isolation valve replacements, pressure reducing valve (PRV) tuning, zone controls, and high-pressure steam valves.',
  },
  {
    id: 'water-wastewater',
    name: 'Water/Wastewater',
    category: 'Plumbing & Piping',
    description: 'Municipal-grade potable distribution, lift station servicing, wastewater separation, and stormwater drainage lines.',
  },

  // Maintenance & Emergency
  {
    id: 'emergency-service',
    name: 'Emergency Service',
    category: 'Maintenance & Emergency',
    description: 'Rapid response dispatch for catastrophic pipe bursts, freeze-ups, heating outages, and commercial gas leaks.',
    isMarquee: true,
  },
  {
    id: 'maintenance-and-repair',
    name: 'Maintenance And Repair',
    category: 'Maintenance & Emergency',
    description: 'Routine scheduled maintenance and emergency corrective repairs across all mechanical and plumbing apparatuses.',
  },
  {
    id: 'servicing-and-maintenance',
    name: 'Servicing And Maintenance',
    category: 'Maintenance & Emergency',
    description: 'Comprehensive preventative multi-point inspections protecting vital mechanical investments from premature failure.',
  },
  {
    id: 'preventative-maintenance-agreements',
    name: 'Preventative Maintenance Agreements',
    category: 'Maintenance & Emergency',
    description: 'Tailored commercial service contracts ensuring code compliance, priority dispatch status, and guaranteed response times.',
  },
  {
    id: 'leak-repair',
    name: 'Leak Repair',
    category: 'Maintenance & Emergency',
    description: 'Acoustic and thermal non-destructive leak detection, rapid water line isolation, and lasting repairs.',
  },
  {
    id: 'repair-replacement',
    name: 'Repair & Replacement',
    category: 'Maintenance & Emergency',
    description: 'Component-level rebuilding or complete replacement of failed circulating pumps, blowers, and expansion tanks.',
  },
  {
    id: 'backflow-testing',
    name: 'Backflow Testing And Maintenance',
    category: 'Maintenance & Emergency',
    description: 'State-certified cross-connection backflow prevention assembly testing, annual compliance reporting, and rebuilds.',
  },

  // Specialized & Healthcare
  {
    id: 'health-care',
    name: 'Health Care',
    category: 'Specialized & Healthcare',
    description: 'Cleanroom HVAC, negative pressure isolation rooms, hospital utility sanitization, and regulatory compliance.',
  },
  {
    id: 'medical-gas',
    name: 'Medical Gas',
    category: 'Specialized & Healthcare',
    description: 'NFPA 99 certified medical gas piping, vacuum lines, oxygen manifolds, and nitrous oxide distribution for clinical care.',
    isMarquee: true,
  },
];
