import React from 'react';
import Link from 'next/link';

const SECTORS = [
  { id: 'construction', name: 'Construction & Civil', desc: 'Infrastructure development and civil engineering projects.' },
  { id: 'it', name: 'Information Technology', desc: 'Enterprise networks, digital architecture, and infrastructure.' },
  { id: 'finance', name: 'Finance & Investments', desc: 'Financial consulting, asset development, and investment paths.' },
  { id: 'retail', name: 'Retail Networks', desc: 'Supply chains, commercial distribution, and retail operations.' },
  { id: 'carsales', name: 'Car Sales & Dealerships', desc: 'Commercial transit infrastructure and vehicle logistics.' },
  { id: 'logistics', name: 'Logistics & Freight', desc: 'End-to-end transportation and distribution networks.' }
];

export function SectorGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-10">
        <h3 className="text-2xl font-bold text-slate-900">Our Corporate Divisions</h3>
        <p className="text-slate-500 text-sm mt-1">Explore our diversified commercial operations.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SECTORS.map((sector) => (
          <Link key={sector.id} href={`/sectors/${sector.id}`} className="group block">
            <div className="h-full p-6 bg-white border border-slate-200 rounded-xl transition-all duration-200 hover:border-blue-500 hover:shadow-md">
              <h4 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                {sector.name}
              </h4>
              <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                {sector.desc}
              </p>
              <span className="text-xs font-semibold text-blue-600 mt-4 inline-block group-hover:underline">
                Explore Sector →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
