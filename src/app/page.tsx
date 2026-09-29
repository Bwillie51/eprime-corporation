import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { sanityClient, urlFor } from '@/lib/sanity';
import { HomeHeroSlider } from '@/components/corporate/home-hero-slider';

// Local asset fallback layer
import defaultCorporateBg from '../assets/ePrime_Logo.jpeg';

interface SanitySector {
  _id: string;
  name: string;
  slug: { current: string };
  tagline: string;
  description: string;
  image: any;
}

interface SanityNewsPreview {
  _id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: any;
}

// Data fetching helper running exclusively on the background server layout
async function getHomeDashboardData() {
  try {
    const sectorQuery = `*[_type == "sector"] | order(name asc)`;
    const newsQuery = `*[_type == "news"] | order(date desc)[0..1]`; // Grabs top 2 latest stories
    
    // Querying the background slideshow array directly from your home configuration settings document
    const homeConfigQuery = `*[_type == "homeSettings"]{
      title,
      tagline,
      brandPromise,
      backgroundSlideshow
    }`;

    const [sectors, news, homeConfig] = await Promise.all([
      sanityClient.fetch<SanitySector[]>(sectorQuery),
      sanityClient.fetch<SanityNewsPreview[]>(newsQuery),
      sanityClient.fetch<any[]>(homeConfigQuery),
    ]);

    // 🌟 FIX: Unwrap the array object safely using index position [0] as requested [HdKms3]
    const homeSettings = homeConfig && homeConfig.length > 0 ? homeConfig[0] : null;

    return { sectors, news, homeSettings };
  } catch (error) {
    console.error('Error fetching home dashboard data from Sanity:', error);
    return { sectors: [], news: [], homeSettings: null };
  }
}

export default async function HomePage() {
  const { sectors, news, homeSettings } = await getHomeDashboardData();

  // Dynamic content mappings fallback on your local string defaults if empty
  const heroTitle = homeSettings?.title || 'ePrime Corporation Limited';
  const heroTagline = homeSettings?.tagline || 'Powering Enterprise. Enabling Growth.';
  const brandPromiseText = homeSettings?.brandPromise || 'We are committed to delivering quality products and Services';
  const slideshowImages = homeSettings?.backgroundSlideshow || [];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section with Dynamic Auto-Sliding Cross-fade Background from Sanity */}
      <section className="relative w-full h-[45vh] min-h-[350px] bg-slate-950 overflow-hidden flex items-center justify-center border-b border-slate-800">
        
        {/* Dynamic sliding canvas injected safely beneath your typography layer */}
        <HomeHeroSlider 
          sanityImages={slideshowImages} 
          fallbackImage={defaultCorporateBg} 
        />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-md">
            {heroTitle}
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-sm">
            {heroTagline}
          </p>
        </div>
      </section>

      {/* Brand Tagline Banner */}
      <div className="w-full bg-slate-950 text-white py-8 px-4 border-y border-slate-800 text-center">
        <div className="max-w-6xl mx-auto space-y-1">
          <span className="text-xs uppercase tracking-widest text-blue-500 font-bold">Our Brand Promise</span>
          <h2 className="text-xl md:text-2xl font-light italic text-slate-200">
            "{brandPromiseText}"
          </h2>
        </div>
      </div>

      {/* Who We Are Summary */}
      <section className="w-full bg-white border-b border-slate-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-blue-600 font-bold">Enterprise Overview</span>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Who We Are</h3>
          </div>
          <p className="text-slate-600 text-base leading-relaxed max-w-3xl mx-auto">
            ePrime Corporation Limited is a premium multi-sector conglomerate dedicated to deploying end-to-end technical excellence, reliable commercial infrastructure, and premium product supply networks across Papua New Guinea. Through engineering-led approaches and standards-based execution layers, we serve critical industries spanning infrastructure development, network systems, corporate finance pathways, and supply chains.
          </p>
                    <div className="pt-2">
            {/* 🌟 FIXED: Replaced Button with a cleanly styled Link tag to bypass the compilation type error */}
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center border border-blue-200 text-blue-600 hover:bg-blue-50 font-bold px-6 h-10 rounded-md transition-colors text-sm"
            >
              Meet Our Professional Team →
            </Link>
          </div>

        </div>
      </section>

      {/* Dynamic Corporate Divisions Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16 w-full">
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-slate-900">Our Corporate Divisions</h3>
          <p className="text-slate-500 text-sm mt-1">Explore our diversified commercial operations.</p>
        </div>
        
        {sectors.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-sm bg-white border border-slate-200 rounded-2xl shadow-sm max-w-sm mx-auto">
            No divisions populated inside Sanity Studio yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector) => (
              <div key={sector._id} className="bg-white border border-slate-200 rounded-xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div className="relative w-full h-40 bg-slate-950">
                  {sector.image ? (
                    <Image 
                      src={urlFor(sector.image).url()} 
                      alt={sector.name} 
                      fill 
                      className="object-cover opacity-80" 
                    />
                  ) : (
                    <Image 
                      src={defaultCorporateBg} 
                      alt={sector.name} 
                      fill 
                      className="object-cover opacity-30" 
                    />
                  )}
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-slate-800">{sector.name}</h4>
                    <p className="text-slate-600 text-sm mt-2 leading-relaxed line-clamp-3">{sector.description}</p>
                  </div>
                                    <div className="mt-6">
                    {/* 🌟 FIXED: Replaced Button with a cleanly styled Link tag to completely clear the asChild warning */}
                    <Link 
                      href={`/sectors/${sector.slug?.current || ''}`}
                      className="inline-flex items-center justify-center w-full border border-blue-200 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-medium px-4 h-10 rounded-md transition-colors text-sm"
                    >
                      Explore Sector →
                    </Link>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      {/* Dynamic Latest News Section */}
      <section className="w-full bg-slate-100 border-t border-b border-slate-200 py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-blue-600 font-bold">Stay Updated</span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">Latest News & Media</h3>
          </div>

          {news.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-sm bg-white border border-slate-200 rounded-2xl shadow-sm max-w-sm mx-auto">No updates published yet.</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {news.map((item) => (
                <div key={item._id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-44 h-44 bg-slate-950 shrink-0">
                    {item.image && (
                      <Image src={urlFor(item.image).url()} alt={item.title} fill className="object-cover opacity-90 p-2 bg-white" />
                    )}
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        <span className="text-blue-600">{item.category || 'Update'}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                      </div>
                      <Link href={`/news?id=${item._id}`}>
                        <h4 className="text-base font-black text-slate-900 tracking-tight leading-snug hover:text-blue-600 transition-colors">{item.title}</h4>
                      </Link>
                      <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">{item.summary}</p>
                    </div>
                    <div className="pt-4">
                      <Link href={`/news?id=${item._id}`} className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline inline-block">
                        Read Article →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Main Corporate Contact Link */}
      <div className="text-center py-16 bg-white border-t border-slate-100">
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-6 text-sm uppercase tracking-wider rounded-xl shadow-md">
          <Link href="/contact">Open General Group Inquiries</Link>
        </Button>
      </div>
    </div>
  );
}
