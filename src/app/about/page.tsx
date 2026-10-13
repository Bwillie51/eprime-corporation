import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { sanityClient, urlFor } from '@/lib/sanity';
import TeamGridClient from './TeamGridClient'; // 🌟 We import the client engine handler here

// Import your local logo asset to serve as the visual anchor emblem fallback
import logoAsset from '../../assets/ePrime_Logo.jpeg';

export const metadata: Metadata = {
  title: 'Division Specialists | ePrime Corporation Limited',
  description: 'Meet the expert division specialists engineering commercial pathways and delivering high-tier standards across Papua New Guinea.',
};

interface TeamMember {
  _id: string;
  name: string;
  role: string;
  sector: string;
  bio: string;
  image?: any;
}

// 📡 GROQ Database Fetch Routine: Chronologically ordered by creation timestamp!
async function getTeamData(): Promise<TeamMember[]> {
  try {
    // 🌟 FIXED: Changed order(name asc) to order(_createdAt asc) so members added first ALWAYS appear first!
    const data = await sanityClient.fetch(`*[_type == "team"] | order(_createdAt asc){
      _id,
      name,
      role,
      sector,
      bio,
      image
    }`);
    return data || [];
  } catch (error) {
    console.error("Error fetching team records from Sanity CMS:", error);
    return [];
  }
}

// 📦 Main Production Server Entry Route Export
export default async function AboutPage() {
  const teamData = await getTeamData();

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* Header Banner Layout Section Container */}
      <section className="relative bg-slate-950 text-white py-16 px-6 text-center border-b border-slate-800 overflow-hidden min-h-[240px] flex flex-col items-center justify-center">
        <div className="absolute inset-0 opacity-25 pointer-events-none select-none z-0">
          <Image src={logoAsset} alt="Corporate Team Banner Background" fill className="object-cover blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-blue-400 block drop-shadow">
            Corporate Family
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white drop-shadow-md">
            Our Professional Team
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed max-w-xl mx-auto drop-shadow-sm">
            Meet the expert division specialists engineering commercial pathways and delivering high-tier standards across Papua New Guinea.
          </p>
        </div>
      </section>

      {/* Main Specialized Specialists Layout Directory Grid Container */}
      <main className="max-w-5xl mx-auto px-4 pt-16 space-y-12">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">Division Specialists</h2>
          <p className="text-slate-500 text-xs font-medium">Every sector is managed by proven industrial leaders.</p>
        </div>

        {/* Instantiates the responsive interactive client grid wrapper frame layer */}
        <TeamGridClient team={teamData} />

        {/* Global Return Link Primitive Controls Section */}
        {/* <div className="text-center pt-8">
          <Link href="/" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 h-11 text-xs uppercase tracking-wider rounded-lg shadow-sm transition-colors duration-200">
            Return Headquarters
          </Link>
        </div> */}
      </main>

    </div>
  );
}
