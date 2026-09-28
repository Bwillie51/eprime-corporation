'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Using your existing local corporate assets as temporary news image placeholders
import newsPlaceholder from '../../assets/ePrime_Logo.jpeg';
import logoPlaceholder from '../../assets/ePrime_Logo.jpeg';



export const LATEST_NEWS_DATA = [
  {
    id: 'news-1',
    title: 'ePrime TechFusion Expands Digital Infrastructure Footprint',
    date: 'September 2026',
    category: 'Announcements',
    summary: 'Our ICT subsidiary has successfully scaled network deployments and Starlink connectivity frameworks across regional sectors, driving enterprise systems integration to new heights.',
    content: 'ePrime TechFusion has reached an operational milestone by accelerating the deployment of specialized digital ground infrastructure systems. This expansion introduces robust satellite multi-kit environments to remote institutional complexes, reinforcing healthcare data streams and public safety nodes. Moving forward, the infrastructure roadmap intends to expand high-reliability data grids into key commercial mining and civil operational sectors.',
    image: newsPlaceholder
  },
  {
    id: 'news-2',
    title: 'New Fleet Logistics Operations Launched',
    date: 'August 2026',
    category: 'Operations',
    summary: 'The logistics and motors divisions have finalized an integrated freight tracking system alongside a new commercial utility fleet lineup to optimize heavy distribution routes.',
    content: 'To sustain the growing demand for inter-provincial product movements, ePrime Corporation Limited has finalized the procurement of heavy fleet assets managed under unified tracking automation layers. This technical optimization streamlines distribution channels for regional consumer hubs, reducing turnaround timelines by up to 25%. Advanced monitoring packages ensure real-time security tracking across demanding remote paths.',
    image: logoPlaceholder
  }
];

export function NewsSection() {
  return (
    <section className="w-full bg-slate-50 border-t border-b border-slate-200 py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-blue-600 font-bold">Stay Updated</span>
          <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">Latest News & Media</h3>
          <p className="text-slate-500 text-sm max-w-md mx-auto">Insights, press releases, and milestones from across our corporate divisions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LATEST_NEWS_DATA.map((item) => (
            <div key={item.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row">
              <div className="relative w-full sm:w-44 h-44 bg-slate-950 shrink-0">
                <Image src={item.image} alt={item.title} fill className="object-cover opacity-90 p-2 bg-white" />
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider">
                    <span className="text-blue-600">{item.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400">{item.date}</span>
                  </div>
                  {/* Make Title interactive */}
                  <Link href={`/news?id=${item.id}`}>
                    <h4 className="text-base font-black text-slate-900 tracking-tight leading-snug hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                  </Link>
                  <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">{item.summary}</p>
                </div>

                <div className="pt-4">
                  {/* Corrected active Link node */}
                  <Link href={`/news?id=${item.id}`} className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline inline-block">
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
