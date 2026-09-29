


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { sanityClient, urlFor } from '@/lib/sanity';
import logoAsset from '../../assets/ePrime_Logo.jpeg';

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  sector: string;
  bio: string;
  image?: any;
}

async function getTeamData(): Promise<TeamMember[]> {
  try {
    return await sanityClient.fetch(`*[_type == "team"] | order(name asc){
      _id,
      name,
      role,
      sector,
      bio,
      image
    }`);
  } catch (error) {
    console.error('Error fetching team records from Sanity CMS:', error);
    return [];
  }
}

export default async function AboutPage() {
  const team = await getTeamData();

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner Layout */}
      <section className="relative bg-slate-950 text-white py-16 px-6 text-center border-b border-slate-800 overflow-hidden flex items-center justify-center min-h-[240px]">
        <Image
          src={logoAsset}
          alt="Corporate Team Banner Background"
          fill
          priority
          className="object-cover opacity-25 pointer-events-none select-none z-0"
        />
        <div className="relative z-10 max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-bold block drop-shadow">
            Corporate Family
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white drop-shadow-md">
            Our Professional Team
          </h1>
          <p className="text-slate-300 font-light text-sm max-w-xl mx-auto leading-relaxed drop-shadow">
            Meet the expert division specialists engineering commercial pathways and delivering high-tier standards across Papua New Guinea.
          </p>
        </div>
      </section>

      {/* Team Grid Workspace Container */}
      <main className="max-w-5xl mx-auto px-4 mt-16 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-slate-900">Division Specialists</h2>
          <p className="text-slate-500 text-sm">Every sector is managed by proven industrial leaders.</p>
        </div>

        {team.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-sm bg-white border border-slate-200 rounded-2xl shadow-sm">
            No profile records uploaded in Sanity Studio yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member._id} className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-start shadow-sm hover:shadow-md transition-shadow">
                
                {/* Profile Image Frame Block */}
                <div className="relative h-24 w-24 bg-slate-50 rounded-xl overflow-hidden border border-slate-200/60 shrink-0 mx-auto sm:mx-0 shadow-sm flex items-center justify-center">
                  {member.image ? (
                    <Image 
                      src={urlFor(member.image).url()} 
                      alt={`${member.name} Profile`} 
                      fill 
                      className="object-cover" 
                    />
                  ) : (
                    <Image 
                      src={logoAsset} 
                      alt="ePrime Default Corporate Logo Profile Fallback" 
                      fill 
                      className="object-contain p-3" 
                    />
                  )}
                </div>

                {/* Bio Details - Re-architected text wrapping fields */}
                <div className="space-y-3 flex-grow w-full text-center sm:text-left">
                  <div className="space-y-1.5">
                    {/* Category badge safely pinned on top with custom block formatting */}
                    <div className="inline-block bg-slate-100 text-slate-600 text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded border border-slate-200/60 mb-1">
                      {member.sector}
                    </div>
                    
                    <h3 className="text-lg font-black text-slate-900 tracking-tight leading-snug">
                      {member.name}
                    </h3>
                    
                    <p className="text-xs font-bold text-blue-600 leading-normal">
                      {member.role}
                    </p>
                  </div>

                  {/* Profile Narrative Description */}
                  <p className="text-slate-600 text-xs leading-relaxed border-t border-slate-100 pt-2 whitespace-pre-line">
                    {member.bio}
                  </p>
                </div>

              </div>
            ))}
          </div>
        )}

                <div className="text-center pt-8">
          {/* 🌟 FIXED: Moved layout styling directly onto the Link element to remove the type warning */}
          <Link 
            href="/" 
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 h-10 rounded-md shadow transition-colors text-sm"
          >
            Return
          </Link>
        </div>

      </main>
    </div>
  );
}
