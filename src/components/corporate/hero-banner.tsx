'use client';

import React from 'react';

export function HeroBanner() {
  // Temporary static background image. Later, this URL array will be mapped out via Sanity CMS.
  const staticImage = 'https://unsplash.com';

  return (
    <section className="relative w-full h-[55vh] min-h-[400px] bg-slate-900 overflow-hidden flex items-center justify-center">
      
      {/* Background Image Layer holding an elegant low-opacity tint overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 transform scale-100 transition-transform duration-700"
        style={{ backgroundImage: `url('${staticImage}')` }}
      />

      {/* Corporate Branding Floating Layout */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 space-y-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-md">
          ePrime Corporation Limited
        </h1>
        <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light drop-shadow-sm">
          Powering Enterprise. Enabling Growth.
        </p>
      </div>

    </section>
  );
}
