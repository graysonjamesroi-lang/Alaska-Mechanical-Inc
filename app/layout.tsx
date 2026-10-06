import type { Metadata } from 'next';
import React from 'react';
import '../src/index.css';

export const metadata: Metadata = {
  title: 'Alaska Mechanical Inc – Commercial & Industrial Mechanical Contractor',
  description:
    'Alaska Mechanical Inc is a premier mechanical contractor in Anchorage, AK specializing in commercial, industrial, and residential plumbing, heating, piping, and HVAC solutions.',
  keywords: [
    'Alaska Mechanical Inc',
    'Anchorage mechanical contractor',
    'commercial plumbing Alaska',
    'pipe fabrication Anchorage',
    'industrial boiler room maintenance',
    'medical gas installation',
    'backflow testing Anchorage',
  ],
  authors: [{ name: 'Alaska Mechanical Inc' }],
  metadataBase: new URL(process.env.APP_URL || 'https://alaskamechanical.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Alaska Mechanical Inc',
    title: 'Alaska Mechanical Inc – Commercial & Industrial Mechanical Contractor',
    description:
      'Commercial, industrial, and residential mechanical contracting in Anchorage, Alaska. Expert pipe fabrication, boiler rooms, plumbing, and 24/7 emergency response.',
    images: [
      {
        url: '/assets/images/hero_mechanical_engineering_1791314901858.jpg',
        width: 1200,
        height: 675,
        alt: 'Alaska Mechanical Inc industrial and commercial systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alaska Mechanical Inc – Anchorage Mechanical Contractor',
    description:
      'Mechanical contracting, pipe fabrication, boiler maintenance, and industrial plumbing in Anchorage, AK. Call +1 907-349-8502.',
    images: ['/assets/images/hero_mechanical_engineering_1791314901858.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MechanicalContractor',
  name: 'Alaska Mechanical Inc',
  image: '/assets/images/hero_mechanical_engineering_1791314901858.jpg',
  telephone: '+1-907-349-8502',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8540 Dimond D Cir',
    addressLocality: 'Anchorage',
    addressRegion: 'AK',
    postalCode: '99515',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 61.1275,
    longitude: -149.8824,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:30',
      closes: '16:00',
    },
  ],
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Anchorage & Greater Alaska',
  },
  priceRange: '$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-300">
        {children}
      </body>
    </html>
  );
}
