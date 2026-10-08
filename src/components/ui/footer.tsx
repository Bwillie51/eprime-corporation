import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// 📡 SANITY CMS CONNECTOR: Matches your exact homepage dataset framework paths
import { sanityClient } from '@/lib/sanity'; 

// Import your local logo asset to serve as the visual anchor emblem
import logoAsset from '../../assets/ePrime_Logo.jpeg';

interface SectorData {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

// 📡 GROQ Database Fetch Routine
async function getCorporateSectors(): Promise<SectorData[]> {
  // Queries your custom Sanity schema for published, live divisions
  const query = `*[_type == "sector"] | order(title asc) {
    _id,
    title,
    slug
  }`;
  
  try {
    const data = await sanityClient.fetch(query);
    return data || [];
  } catch (error) {
    console.error("Failed to stream dynamic footer sectors:", error);
    return [];
  }
}

export async function GlobalFooter() {
  // Pulls your 6 active corporate divisions straight from Sanity live
  const sectors = await getCorporateSectors();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 px-6 mt-auto">
      {/* Upper Footer Segment Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
        
        {/* COLUMN 1: Brand Identity & Social Links */}
        <div className="md:col-span-4 space-y-5">
          <div className="flex items-center space-x-3">
            <div className="relative h-10 w-10 rounded-lg overflow-hidden border border-slate-800 bg-white shrink-0">
              <Image 
                src={logoAsset} 
                alt="ePrime Corporation Small Logo" 
                fill 
                className="object-contain p-1"
              />
            </div>
            <div>
              <h3 className="text-white text-base font-black tracking-tight leading-none">
                ePrime Corporation
              </h3>
              <span className="text-[10px] text-blue-500 font-bold tracking-widest block mt-1">
                Limited
              </span>
            </div>
          </div>
          
          <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
            Powering Enterprise. Enabling Growth. A leading multi-sector conglomerate engineered to deploy premium product supply networks and robust technical excellence infrastructure layers across Papua New Guinea.
          </p>

          <div className="space-y-1.5 pt-1">
            <h4 className="text-slate-600 text-[10px] font-extrabold uppercase tracking-wider">Connect Channels</h4>
            <div className="flex items-center space-x-3">
              <Link href="https://www.facebook.com/profile.php?id=61582208888740" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors" title="Facebook Connect">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </Link>

              {/* LinkedIn Icon */}
              <Link href="https://www.linkedin.com/company/eprime-corp" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors" title="LinkedIn Profile">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </Link>

              {/* Instagram Icon */}
              <Link href="https://www.instagram.com/eprime_corporation_limited?stkn=MXNqc2V1eWwxbW5rdg==" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors" title="Instagram Gallery">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.5.16 5.26 1.96 5.42 5.42.06 1.27.07 1.64.07 4.85s-.01 3.58-.07 4.85c-.16 3.45-1.93 5.26-5.42 5.42-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.48-.16-5.26-1.94-5.42-5.42-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85c.16-3.48 1.94-5.26 5.42-5.42 1.27-.06 1.64-.07 4.85-.07m0-2c-3.26 0-3.67.01-4.95.07-4.14.19-6.43 2.48-6.62 6.62-.06 1.28-.07 1.69-.07 4.95s.01 3.67.07 4.95c.19 4.14 2.48 6.43 6.62 6.62 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.14-.19 6.43-2.48 6.62-6.62.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.19-4.14-2.48-6.43-6.62-6.62-1.28-.06-1.69-.07-4.95-.07zM12 5.83a6.17 6.17 0 1 0 6.17 6.17A6.17 6.17 0 0 0 12 5.83zm0 10.17a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-11.41a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z"/>
                </svg>
              </Link>

              {/* TikTok Icon */}
              {/* <Link href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors" title="TikTok Media Feed">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.53 2c.1 4.04 3.01 6.88 6.96 7.15v3.47a9.92 9.92 0 0 1-4.73-1.85V16A6.5 6.5 0 1 1 8.24 9.5a6.45 6.45 0 0 1 4.3 1.65V2h-.01z"/>
                </svg>
              </Link> */}
            </div>
          </div>
        </div>

        {/* COLUMN 2: Corporate Hub Links */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-slate-200 text-xs font-bold uppercase tracking-wider">Corporate Hub</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/" className="hover:text-blue-500 hover:underline transition-colors block">Headquarters</Link></li>
            <li><Link href="/about" className="hover:text-blue-500 hover:underline transition-colors block">Our Executive Team</Link></li>
            <li><Link href="/news" className="hover:text-blue-500 hover:underline transition-colors block">Media Center Feed</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500 hover:underline transition-colors block">Contact Inquiries</Link></li>
          </ul>
        </div>

        {/* COLUMN 3: Dynamic Active Sectors Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-slate-200 text-xs font-bold uppercase tracking-wider">Active Sectors</h4>
          <ul className="space-y-2 text-xs">
            {sectors.length > 0 ? (
              sectors.map((sector) => (
                <li key={sector._id}>
                  {/* 🌟 AUTOMATED DYNAMIC LINK ROUTING */}
                  <Link 
                    href={`/sectors/${sector.slug.current}`}
                    className="text-slate-400 hover:text-blue-500 hover:underline transition-colors block font-medium"
                  >
                    {sector.title}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-slate-500 italic">No active sectors loaded.</li>
            )}

            {/* Static Placeholders */}
            <li className="pt-2 border-t border-slate-900">
              <span className="text-slate-600 block text-[10px] uppercase tracking-wider font-extrabold">Upcoming Operations</span>
            </li>
            <li><span className="text-slate-600 cursor-not-allowed opacity-50 block">Financial Services (Not yet active)</span></li>
            <li><span className="text-slate-600 cursor-not-allowed opacity-50 block">Mining & Minerals (Not yet active)</span></li>
          </ul>
        </div>

        {/* COLUMN 4: Corporate Address & Details */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-slate-200 text-xs font-bold uppercase tracking-wider">Address</h4>
          <ul className="space-y-3 text-xs leading-relaxed">
            <li className="text-slate-400">
              Henau Drive, Section 90, Allotment 07,<br />
              NCD, 111, Papua New Guinea
            </li>
            <li className="flex items-center space-x-2 pt-1 border-t border-slate-900">
              <svg className="w-3.5 h-3.5 text-slate-500 shrink-0 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.27c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.27 1.02l-2.2 2.2z"/></svg>
              <span className="text-slate-400 font-medium">+675 3947844 | +675 78285135</span>
            </li>
            <li className="flex items-center space-x-2 pt-1 border-t border-slate-900">
              <svg className="w-3.5 h-3.5 text-slate-500 shrink-0 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <Link href="mailto:ednol.prime@gmail.com" className="hover:text-blue-500 hover:underline break-all">ednol.prime@gmail.com</Link> | 
              <Link href="mailto:support@eprimecorp.com" className="hover:text-blue-500 hover:underline break-all">support@eprimecorp.com</Link>
            </li>
            <li className="flex items-center space-x-2 pt-1 border-t border-slate-900">
              <svg className="w-3.5 h-3.5 text-slate-500 shrink-0 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
              <Link href="https://eprimecorp.com" className="text-blue-500 font-bold hover:underline tracking-tight">www.eprimecorp.com</Link>
            </li>
          </ul>
        </div>

      </div>

      {/* LOWER FOOTER: Copyright Statements & Developer Signoff Panel */}
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between mt-10 pt-6 text-[11px] text-slate-600 space-y-4 sm:space-y-0 border-t border-slate-900/50">
        <div>
          &copy; {currentYear} ePrime Corporation Limited. All Rights Reserved.
        </div>
        
        {/* BiiXoft Signature Anchor Badge */}
        <div className="bg-slate-900/40 border border-slate-900 px-3 py-1.5 rounded-md text-slate-500 text-[10px] tracking-wide">
          Engineered & Developed by <span className="text-blue-500 font-black tracking-tight hover:text-blue-400 cursor-default transition-colors">BiiXoft</span>
        </div>
      </div>
    </footer>
  );
}







