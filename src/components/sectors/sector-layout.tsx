'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';

interface ProjectData {
  title: string;
  client: string;
  date: string;
  amount: string;
  description: string;
  image?: any;
}

interface SectorLayoutProps {
  title: string;
  tagline: string;
  description: string;
  image: any;
  project?: ProjectData;
}

export function SectorLayout({ title, tagline, description, image, project }: SectorLayoutProps) {
  // Check if a valid project object with an actual title was passed
  const hasValidProject = project && project.title && project.title.trim() !== "";

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Sector Hero Header */}
      <section className="relative w-full h-[35vh] min-h-[280px] bg-slate-950 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          {image && (
            <Image
              src={typeof image === 'string' ? image : urlFor(image).url()}
              alt={title}
              fill
              priority
              className="object-cover object-center"
            />
          )}
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl space-y-2">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight drop-shadow">{title}</h1>
          <p className="text-sm md:text-base text-slate-200 font-light max-w-xl mx-auto drop-shadow-sm">{tagline}</p>
        </div>
      </section>

      {/* Main Narrative Split */}
      <section className="max-w-5xl mx-auto w-full px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900 tracking-tight uppercase border-b pb-2 border-slate-200">
            Operations Profile
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed font-light">{description}</p>
          
          <div className="pt-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-5 h-9 rounded shadow transition-colors"
            >
              Inquire
            </Link>
          </div>
        </div>

        {/* 🌟 SAFEGUARDED CASE STUDY BLOCK: Only renders if a real project with a title exists */}
        <div className="md:col-span-5">
          {hasValidProject ? (
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4">
              <span className="text-[10px] uppercase font-black text-blue-600 tracking-widest block">Featured Engagement</span>
              <h3 className="text-lg font-bold text-slate-900 tracking-tight">{project.title}</h3>
              
              <div className="space-y-2 text-xs border-y py-3 border-slate-100">
                <p className="text-slate-500"><strong className="text-slate-700 font-medium">Client:</strong> {project.client}</p>
                <p className="text-slate-500"><strong className="text-slate-700 font-medium">Timeline:</strong> {project.date}</p>
                {project.amount && <p className="text-slate-500"><strong className="text-slate-700 font-medium">Scale value:</strong> {project.amount}</p>}
              </div>

              <p className="text-slate-600 text-xs leading-relaxed font-light">{project.description}</p>
            </div>
          ) : (
            <div className="bg-slate-100 border border-dashed border-slate-200 rounded-xl p-8 text-center text-xs text-slate-400 font-light">
              Operational details and infrastructure specifications are updated dynamically via our Sanity dataset network.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
