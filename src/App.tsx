import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { HoursBanner } from './components/HoursBanner';
import { AboutSection } from './components/AboutSection';
import { ServicesBento } from './components/ServicesBento';
import { LocationSection } from './components/LocationSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { FloatingBookButton } from './components/FloatingBookButton';
import { getAlaskaBusinessStatus, OperatingStatus } from './utils/operatingHours';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [status, setStatus] = useState<OperatingStatus>(getAlaskaBusinessStatus());
  const [selectedService, setSelectedService] = useState<string>('Complete System Change Out');

  // Sync theme with html class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
    }
  }, [theme]);

  // Live timer for Anchorage business status (updates every second)
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(getAlaskaBusinessStatus());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${theme === 'dark' ? 'bg-slate-950 text-slate-100 aurora-bg-dark' : 'bg-slate-50 text-slate-900 aurora-bg-light'}`}>
      {/* Top Bar Contract (3 zones) */}
      <Navigation theme={theme} onToggleTheme={toggleTheme} />

      <main id="main-content">
        {/* Cinematic 3D Hero */}
        <Hero status={status} />

        {/* Live Operating Status & Anchorage Clock */}
        <HoursBanner status={status} />

        {/* About Alaska Mechanical Inc */}
        <AboutSection />

        {/* Bento-Grid & 34 Services Directory */}
        <ServicesBento onSelectService={(svc) => setSelectedService(svc)} />

        {/* Anchorage Facility & Location */}
        <LocationSection />

        {/* Interactive Booking Section */}
        <BookingSection
          selectedService={selectedService}
          onServiceChange={(svc) => setSelectedService(svc)}
        />
      </main>

      {/* Quiet Professional Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingBookButton />
    </div>
  );
}
