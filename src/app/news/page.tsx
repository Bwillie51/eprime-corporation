import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { sanityClient, urlFor } from '@/lib/sanity';

interface SanityNewsArticle {
  _id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  image: any;
}

// Data fetching helper running exclusively on the background server layout
async function getNewsData(): Promise<SanityNewsArticle[]> {
  try {
    return await sanityClient.fetch(`*[_type == "news"] | order(date desc)`);
  } catch (error) {
    console.error('Error fetching from Sanity:', error);
    return [];
  }
}

interface PageProps {
  searchParams: { id?: string };
}

export default async function NewsHubPage({ searchParams }: PageProps) {
  const articles = await getNewsData();
  const queryId = searchParams?.id;

  // Accessing the array item safely using bracket syntax to maintain state stability
  const activeId = queryId || (articles.length > 0 ? articles[0]._id : '');
  const selectedArticle = articles.find((item) => item._id === activeId);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header Banner */}
      <section className="bg-slate-900 text-white py-10 px-6 border-b border-slate-800 text-center">
        <div className="max-w-3xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-blue-400 font-bold">Media Center</span>
          <h1 className="text-3xl font-black tracking-tight">Corporate Press Feed</h1>
        </div>
      </section>

      {/* Main Grid Interface Area */}
      <main className="max-w-6xl mx-auto w-full px-4 py-8 lg:py-12 flex-grow">
        {articles.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-sm">
            No active press releases located in Sanity Studio yet.
          </div>
        ) : (
          <>
            {/* DESKTOP MODE SYSTEM: Stays completely as is for wider screens */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column Sidebar */}
              <div className="lg:col-span-5 space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1">All Available Bulletins</h2>
                <div className="space-y-3">
                  {articles.map((article) => {
                    const isCurrent = article._id === activeId;
                    return (
                      <Link
                        key={article._id}
                        href={`/news?id=${article._id}`}
                        scroll={false}
                        className={`block p-4 rounded-xl border transition-all text-left ${
                          isCurrent
                            ? 'bg-white border-blue-500 shadow-sm ring-1 ring-blue-500/20'
                            : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center space-x-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          <span>{article.category || 'Update'}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                        <h3 className={`text-sm font-bold tracking-tight leading-snug ${isCurrent ? 'text-blue-600' : 'text-slate-800'}`}>
                          {article.title}
                        </h3>
                        <p className="text-slate-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                          {article.summary}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Desktop Right Column Detail Viewer Card Panel */}
              {selectedArticle && (
                <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm p-8 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <span className="bg-blue-50 text-blue-600 text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md border border-blue-100">
                      {selectedArticle.category || 'Update'}
                    </span>
                    <span className="text-xs font-medium text-slate-400">{selectedArticle.date}</span>
                  </div>

                  {selectedArticle.image && (
                    <div className="relative w-full h-64 bg-slate-950 rounded-xl overflow-hidden border border-slate-100">
                      <Image 
                        src={urlFor(selectedArticle.image).url()} 
                        alt={selectedArticle.title} 
                        fill 
                        priority 
                        sizes="(max-w-768px) 100vw, 50vw"
                        className="object-contain p-6 bg-white" 
                      />
                    </div>
                  )}

                  <div className="space-y-4">
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">{selectedArticle.title}</h2>
                    <p className="text-sm font-semibold text-slate-700 leading-relaxed italic bg-slate-50 p-4 border-l-4 border-blue-500 rounded-r-xl">
                      {selectedArticle.summary}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line pt-2">{selectedArticle.content}</p>
                  </div>
                </div>
              )}
            </div>

            {/* MOBILE & TABLET MODE SYSTEM: Fixed Accordion Row with perfectly responsive triangle toggles */}
            <div className="block lg:hidden space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-1 mb-2">All Available Bulletins</h2>
              
              <div className="space-y-3">
                {articles.map((article) => {
                  const isOpen = article._id === queryId; // 🌟 Syncs open state strictly with the URL ID match
                  return (
                    <div 
                      key={article._id} 
                      className={`bg-white border rounded-xl overflow-hidden transition-all duration-300 ${
                        isOpen ? 'border-blue-500 shadow-md' : 'border-slate-200 shadow-sm'
                      }`}
                    >
                      {/* Clickable Row Header: Passing a clear toggle query state directly through the dynamic url */}
                      <Link 
                        href={isOpen ? `/news?id=` : `/news?id=${article._id}`}
                        scroll={false}
                        className={`block p-4 select-none transition-colors ${
                          isOpen ? 'bg-slate-50/80 border-b border-slate-100' : 'hover:bg-slate-50/50'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                          <div className="flex items-center space-x-2">
                            <span className={isOpen ? 'text-blue-600' : ''}>{article.category || 'Update'}</span>
                            <span>•</span>
                            <span>{article.date}</span>
                          </div>
                          
                          {/* Triangle indicator matching your exact layout styles */}
                          <span className={`text-xs font-bold px-1.5 py-0.5 rounded transition-transform ${isOpen ? 'text-blue-600' : 'text-slate-400'}`}>
                            {isOpen ? '▲' : '▼'}
                          </span>
                        </div>
                        
                        <h3 className={`text-sm font-bold tracking-tight leading-snug ${isOpen ? 'text-blue-600' : 'text-slate-800'}`}>
                          {article.title}
                        </h3>
                        
                        {!isOpen && (
                          <p className="text-slate-500 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                            {article.summary}
                          </p>
                        )}
                      </Link>

                      {/* Inline Expanded Dropdown Block */}
                      {isOpen && (
                        <div className="p-4 bg-white space-y-4 animate-in fade-in duration-200">
                          {article.image && (
                            <div className="relative w-full h-48 bg-slate-100 rounded-lg overflow-hidden border border-slate-100 mx-auto max-w-[280px]">
                              <Image 
                                src={urlFor(article.image).url()} 
                                alt={article.title} 
                                fill 
                                sizes="280px"
                                className="object-cover" 
                              />
                            </div>
                          )}

                          <div className="space-y-3">
                            <p className="text-xs font-semibold text-slate-700 leading-relaxed italic bg-slate-50 p-3 border-l-4 border-blue-500 rounded-r-lg">
                              {article.summary}
                            </p>
                            <p className="text-slate-600 text-xs leading-relaxed whitespace-pre-line">
                              {article.content}
                            </p>
                          </div>

                                                    {/* Bottom Row Close control for long articles */}
                          <div className="pt-2 flex justify-end">
                            <Link
                              href={`/news?id=`}
                              scroll={false}
                              className="flex items-center space-x-1 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg border border-slate-200 transition-colors"
                            >
                              <span>▲</span>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
