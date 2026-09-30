'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/ePrime_Logo.jpeg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-50 px-6 py-4 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-md border border-slate-100">
            <Image src={Logo} alt="ePrime Corporation Logo" fill className="object-contain" />
          </div>
          <span className="font-extrabold tracking-tight text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
            ePrime <span className="text-blue-600">Corporation</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
          <Link href="/" className="text-slate-600 hover:text-blue-600 transition-colors">Home</Link>
          <Link href="/about" className="text-slate-600 hover:text-blue-600 transition-colors">About Us</Link>
          {/* New Interactive News Tab at the Top */}
          <Link href="/news" className="text-slate-600 hover:text-blue-600 transition-colors">News & Updates</Link>
          
          {/* 🌟 ADDED: Direct desktop link to the embedded Sanity CMS Studio Login dashboard */}
          <Link href="/studio" className="text-slate-600 hover:text-blue-600 transition-colors">
            Login
          </Link>

          <Link href="/contact" className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-xs uppercase tracking-wider font-bold transition-all shadow-sm">
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-50">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer Dropdown Panel */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-slate-100 flex flex-col space-y-3 bg-white px-2">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-700 hover:text-blue-600 py-1">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-700 hover:text-blue-600 py-1">About Us</Link>
          <Link href="/news" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-700 hover:text-blue-600 py-1">News & Updates</Link>
          
          {/* 🌟 ADDED: Mobile link to the embedded Sanity CMS Studio Login dashboard */}
          <Link href="/studio" onClick={() => setIsOpen(false)} className="text-sm font-medium text-slate-700 hover:text-blue-600 py-1">
            Login
          </Link>

          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-center text-xs font-bold uppercase tracking-wider text-white bg-blue-600 py-2.5 rounded-lg shadow-sm">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
