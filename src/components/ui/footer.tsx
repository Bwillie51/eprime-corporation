import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import your local logo asset to serve as the visual anchor emblem
import logoAsset from '../../assets/ePrime_Logo.jpeg';

export function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 px-6 mt-auto">
      {/* Upper Footer Segment Grid Map */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
        
        {/* Column 1: Brand Logo Identity & Social Network Media Connections */}
        <div className="md:col-span-4 space-y-5">
          <div className="flex items-center space-x-3">
            <div className="relative h-10 w-10 rounded-lg overflow-hidden border border-slate-800 bg-white shrink-0">
              <Image 
                src={logoAsset} 
                alt="ePrime Corporation Small Logo Asset" 
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

          {/* Responsive Social Media SVG Vector Group Links */}
          <div className="space-y-1.5 pt-1">
            <h4 className="text-slate-600 text-[10px] font-extrabold uppercase tracking-wider">Connect Channels</h4>
            <div className="flex items-center space-x-3">
              
              {/* Facebook Icon */}
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

        {/* Column 2: Core Directory & Information Hub Links */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="text-slate-200 text-xs font-bold uppercase tracking-wider">Corporate Hub</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/" className="hover:text-blue-500 hover:underline transition-colors block">
                Headquarters
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500 hover:underline transition-colors block">
                Our Executive Team
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-blue-500 hover:underline transition-colors block">
                Media Center Feed
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500 hover:underline transition-colors block">
                Contact Inquiries
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Full Directory of Dynamic Sector Channels */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-slate-200 text-xs font-bold uppercase tracking-wider">Active Sectors</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/sectors/eprime-techfusion" className="hover:text-blue-500 hover:underline transition-colors block font-medium">
                Information Technology
              </Link>
            </li>
            <li>
              <Link href="/sectors/eprime-advisory-services" className="hover:text-blue-500 hover:underline transition-colors block font-medium">
                Corporate Advisory
              </Link>
            </li>
            <li>
              <Link href="/sectors/construction" className="text-slate-600 hover:text-blue-500 hover:underline transition-colors block">
                Civil & Construction
              </Link>
            </li>
            <li>
              <Link href="/sectors/logistics" className="text-slate-600 hover:text-blue-500 hover:underline transition-colors block">
                Logistics & Supply
              </Link>
            </li>
            <li>
              <Link href="/sectors/motors" className="text-slate-600 hover:text-blue-500 hover:underline transition-colors block">
                Transport & Motors
              </Link>
            </li>
            <li>
              <Link href="/sectors/retail" className="text-slate-600 hover:text-blue-500 hover:underline transition-colors block">
                Retail Distribution
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Headquarters Registry Office Coordinates Block */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-slate-200 text-xs font-bold uppercase tracking-wider">Address</h4>
          <div className="space-y-3.5 text-xs leading-relaxed">
            
            <div className="flex items-start space-x-2">
              <span className="text-blue-500 shrink-0 select-none"></span>
              <p className="text-slate-400">
                Henau Drive, Section 90, Allotment 07,<br />
                NCD, 111, Papua New Guinea<br />
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-blue-500 shrink-0 select-none">📞</span>
              <p className="text-slate-400 font-semibold">
                +675 3947844 &nbsp;|&nbsp; +675 78285135
              </p>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-blue-500 shrink-0 select-none">✉️</span>
              <p className="text-slate-400">
                ednol.prime@gmail.com &nbsp;|&nbsp; services@eprimecorp.com
              </p>
              
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-blue-500 shrink-0 select-none">🌐</span>

              <p>
              <Link href="https://www.eprimecorp.com/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-500 transition-colors" title="Instagram Gallery">
               www.eprimecorp.com 
            
              </Link>
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Lower Sub-Footer Legal & Developer Signatures Strip */}
      <div className="max-w-6xl mx-auto pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-4">
        <p>© {currentYear} ePrime Corporation Limited. All Rights Reserved.</p>
        
        {/* BiiXoft Professional Agency Credit Seal */}
        <div className="flex items-center space-x-1.5 text-slate-700 bg-slate-950 px-3 py-1 rounded border border-slate-900 shadow-sm">
          <span>Engineered & Developed by</span>
          <Link 
            href="https://bii-xoft-website.vercel.app/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 font-black hover:text-blue-400 hover:underline transition-colors tracking-wide"
          >
            BiiXoft
          </Link>
        </div>
      </div>
    </footer>
  );
}
