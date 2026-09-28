'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { urlFor } from '@/lib/sanity';

interface ProjectData {
  title: string;
  client: string;
  date: string;
  amount: string;
  description: string;
  image?: any; // Dynamic image field added directly from Sanity CMS project schema
}

interface SectorLayoutProps {
  title: string;
  tagline: string;
  description: string;
  image: any;
  project: ProjectData | null;
}

export function SectorLayout({ title, tagline, description, image, project }: SectorLayoutProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Fallback structural configurations if fields are empty
  const projectTitle = project?.title || 'Operational Initiative Portfolio';
  const projectClient = project?.client || 'Pending Account Client';
  const projectDate = project?.date || 'Under Development';
  const projectAmount = project?.amount || 'K0.00';
  const projectDesc = project?.description || 'Project narrative and portfolio execution metrics are currently under operational assignment for this corporate division.';

  const shortText = projectDesc.slice(0, 110) + '...';

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Sector Hero Header with Dynamic Background Photo from Sanity */}
      <section className="relative bg-slate-950 text-white py-20 px-6 border-b border-slate-800 text-center overflow-hidden flex items-center justify-center min-h-[260px]">
        {image && (
          <Image 
            src={urlFor(image).url()} 
            alt={`${title} Banner Background`} 
            fill 
            priority 
            className="object-cover opacity-25 pointer-events-none select-none z-0" 
          />
        )}
        <div className="relative z-10 max-w-3xl mx-auto space-y-3">
          {/* <Link href="/" className="text-xs font-bold uppercase tracking-widest text-blue-400 hover:underline drop-shadow-md">
            ← Corporate Headquarters Hub
          </Link> */}
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white drop-shadow-md">{title}</h1>
          <p className="text-sm md:text-base text-slate-200 italic font-light drop-shadow-sm">"{tagline}"</p>
        </div>
      </section>

      {/* Two-Column Detail Layout Grid */}
      <main className="max-w-6xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Division Core Operations Info */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
            <div>
              <h2 className="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Division Operations</h2>
              <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">{description}</p>
            </div>
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-6 flex-1 sm:flex-none">
                <Link href="/contact">Inquire</Link>
              </Button>
              {/* <Button asChild variant="outline" className="border-slate-200 text-slate-600 font-medium text-xs uppercase tracking-wider px-6">
                <Link href="/">Back to Overview</Link>
              </Button> */}
            </div>
          </div>

          {/* RIGHT COLUMN: Latest Project Feature Card (100% Dynamic from Sanity CMS) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
            <div className="bg-slate-950 text-white px-5 py-3 border-b border-slate-800 flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Latest Project Taken</span>
              <span className="bg-blue-600/20 text-blue-400 text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-full border border-blue-500/30">Featured</span>
            </div>
            
            {/* Dynamic Project Image Block Loader */}
                        {/* Dynamic Project Image Block Loader */}
            <div className="relative w-full h-48 bg-slate-900 border-b border-slate-100">
              {project && project.image ? (
                <Image 
                  src={urlFor(project.image).url()} 
                  alt={projectTitle} 
                  fill 
                  className="object-cover" 
                />
              ) : (
                /* Safe generic background canvas fallback if no image is attached to the project document */
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-6 text-center">
                  <span className="text-xs text-slate-500 tracking-wide font-semibold uppercase">
                    ePrime Asset Visual Ready
                  </span>
                </div>
              )}
            </div>


            <div className="p-6 space-y-4 flex-grow">
              <h3 className="text-lg font-black text-slate-900 tracking-tight leading-tight">{projectTitle}</h3>
              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs border-y border-slate-100 py-3 bg-slate-50/50 px-3 rounded-lg">
                <div>
                  <span className="text-slate-400 block font-medium">Client Account</span>
                  <span className="text-slate-800 font-bold">{projectClient}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Date Logged</span>
                  <span className="text-slate-800 font-bold">{projectDate}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-400 block font-medium">Project Valuation Amount</span>
                  <span className="text-blue-700 font-black text-sm tracking-wide">{projectAmount}</span>
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block">Scope & Execution</span>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {projectDesc.length <= 110 ? projectDesc : (isExpanded ? projectDesc : shortText)}
                </p>
                {projectDesc.length > 110 && (
                  <button onClick={() => setIsExpanded(!isExpanded)} className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline focus:outline-none">
                    {isExpanded ? 'Read Less ▲' : 'Read More... ▼'}
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
