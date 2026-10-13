'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

// Import your local logo asset to serve as the visual anchor emblem fallback
import logoAsset from '../../assets/ePrime_Logo.jpeg';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  sector: string;
  bio: string;
  image?: any;
}

export default function TeamGridClient({ team }: { team: TeamMember[] }) {
  // Use React state tracking to keep all bios initially hidden/compacted
  const [expandedMemberId, setExpandedMemberId] = useState<string | null>(null);

  if (team.length === 0) {
    return (
      <div className="text-center py-12 text-slate-400 text-sm bg-white border border-slate-200 rounded-2xl shadow-sm">
        No profile records uploaded in Sanity Studio yet.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {team.map((member) => {
        const isExpanded = expandedMemberId === member._id;

        return (
          <div
            key={member._id}
            onClick={() => setExpandedMemberId(isExpanded ? null : member._id)}
            className={`bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md cursor-pointer transition-all duration-300 flex flex-col h-full group ${
              isExpanded ? 'ring-2 ring-blue-500 sm:col-span-2' : 'hover:border-blue-400 hover:-translate-y-0.5'
            }`}
          >
            {/* Upper Section: Core Profile Information Card Grid Layout */}
            <div className={`flex flex-col items-center text-center ${isExpanded ? 'sm:flex-row sm:text-left sm:items-start sm:space-x-5' : 'space-y-4'}`}>
              
              {/* Profile Image Frame Block Layout */}
              <div className="relative h-28 w-28 rounded-xl overflow-hidden border border-slate-100 bg-slate-50 shrink-0 shadow-inner">
                {member.image ? (
                  <Image
                    src={urlFor(member.image).url()}
                    alt={`${member.name} Profile`}
                    fill
                    className="object-cover grayscale-[15%] group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <Image
                    src={logoAsset}
                    alt="ePrime Default Corporate Logo Profile Fallback"
                    fill
                    className="object-contain p-3 opacity-40 bg-slate-100"
                  />
                )}
              </div>

              {/* Bio Details text fields layout */}
              <div className="flex-grow space-y-1 mt-2 sm:mt-0 w-full">
                <div className="inline-block text-[9px] font-black uppercase tracking-wider text-blue-600 bg-blue-50/80 px-2 py-0.5 rounded border border-blue-100/50">
                  {member.sector || 'General Group'}
                </div>
                <h3 className="text-sm font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-slate-500 text-[11px] font-semibold leading-tight">
                  {member.role}
                </p>
              </div>
            </div>

            {/* Downward Expandable Panel Section Layer (Reveals complete bio only if card is toggled active!) */}
            <div 
              className={`transition-all duration-300 overflow-hidden ${
                isExpanded ? 'max-h-[1000px] opacity-100 mt-5 pt-4 border-t border-slate-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-xl border border-slate-100">
                {member.bio}
              </p>
            </div>

            {/* Bottom Visual Action Indicator Bar */}
            <div className="mt-auto pt-3 w-full border-t border-slate-100/80 flex items-center justify-center text-slate-400 group-hover:text-blue-500 transition-colors text-[10px] font-bold uppercase tracking-wider space-x-1">
              <span>{isExpanded ? '' : ''}</span>
              <svg 
                className={`w-3.5 h-3.5 transform transition-transform duration-300 ${isExpanded ? 'rotate-180 text-blue-500' : 'group-hover:translate-x-0.5'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

          </div>
        );
      })}
    </div>
  );
}
