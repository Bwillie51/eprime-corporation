

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import whatsappIcon from '../assets/whatsappIcon.jpg';

// // 1. IMPORT ALL CORE STRUCTURAL UI LAYOUT COMPONENTS & TRACKERS:
import Header from '@/components/header';
import { GlobalFooter } from '@/components/ui/footer';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  // // Base URL configuration for absolute path resolutions
  metadataBase: new URL('https://eprimecorp.com'),

  title: {
    default: "ePrime Corporation Limited",
    template: "%s | ePrime Corporation Limited"
  },

  description: "Powering Enterprise. Enabling Growth. Multi-sector industrial infrastructure systems across Papua New Guinea.",
  keywords: ["ePrime", "ePrime Corporation", "Papua New Guinea", "PNG Business", "Civil Engineering PNG", "ICT Solutions Port Moresby", "Logistics and Freight", "Industrial Infrastructure",
    "prime", "corporation", "eprime", "e-prime", "Corporation", "eprime PNG", " eprime limited", "eprime corp", "eprime ltd", "eprime PNG", "eprime company", "eprime business", "eprime enterprise", "eprime industrial", "eprime infrastructure", "eprime engineering", "eprime technology", "eprime logistics", "eprime construction", "eprime civil works", "eprime ICT solutions", "eprime IT services", "eprime software development", "eprime digital solutions", "eprime consulting services", "eprime project management", "eprime supply chain management", "eprime business solutions", "eprime corporate services"
  ],

  // // Standard Canonical indexing references to prevent duplicate tracking penalties
  alternates: {
    canonical: 'https://eprimecorp.com',
  },

  // // Open Graph structure for Facebook, LinkedIn, and WhatsApp rich card generation
  openGraph: {
    title: "ePrime Corporation Limited",
    description: "Multi-sector industrial infrastructure systems powering enterprise and growth across Papua New Guinea.",
    url: 'https://eprimecorp.com',
    siteName: 'ePrime Corporation',
    locale: 'en_PG',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // // Ensure a 1200x630 pixel brand banner named og-image.png is inside your public/ folder!
        width: 1200,
        height: 630,
        alt: 'ePrime Corporation Limited Enterprise Portfolio Banner',
      },
    ],
  },

  // // Twitter / X Rich Card Rendering
  twitter: {
    card: 'summary_large_image',
    title: 'ePrime Corporation Limited',
    description: 'Multi-sector industrial infrastructure systems across Papua New Guinea.',
    images: ['/og-image.png'],
  },

  // // Device system configurations
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// // 2. Setup your WhatsApp details
const phoneNumber = "67573947844";
const message = encodeURIComponent("Hello, ePrime Corporation! I visited your website and would like to know more about your services.");
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // 🌟 Cryptographic Structured Schema Object: Instructs Google to build professional sitelinks, maps, and images
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://eprimecorp.com",
        "name": "ePrime Corporation Limited",
        "url": "https://eprimecorp.com",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://eprimecorp.com",
          "url": "https://eprimecorp.com", // // Google reads this absolute path to pull your search photo thumb!
          "caption": "ePrime Corporation Limited Logo"
        },
        "image": {
          "@id": "https://eprimecorp.com"
        },
        "sameAs": [
          "https://facebook.com",
          "https://linkedin.com",
          "https://instagram.com"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Henau Drive, Section 90, Allotment 07",
          "addressLocality": "NCD",
          "addressRegion": "Port Moresby",
          "postalCode": "111",
          "addressCountry": "PG"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://eprimecorp.com",
        "url": "https://eprimecorp.com",
        "name": "ePrime Corporation Limited",
        "description": "Multi-sector industrial infrastructure systems across Papua New Guinea.",
        "publisher": {
          "@id": "https://eprimecorp.com"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://eprimecorp.com{search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* 🌟 Inject the structured database map layout string directly into Google's reading crawling bots */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden antialiased`}>
        
        {/* // 2. RENDER THE HEADER NAVIGATION SYSTEM AT THE VERY TOP OF ALL PAGES */}
        <Header />

        {/* // Main Content Router Page Wrapper Frame */}
        <main className="flex-grow relative">
          {children}
        </main>

        {/* // Renders your polished corporate signature footer at the very bottom */}
        <GlobalFooter />
        {/* The whatsapp icon should be here */}
        {/* 3. Global Floating WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 hover:shadow-2xl"
        aria-label="Chat on WhatsApp"
      >
        <img 
          src={whatsappIcon.src} 
          alt="WhatsApp" 
          className="h-9 w-9 object-contain rounded-full" 
        />
      </a>

        {/* 📊 THE VERCEL ANALYTICS ENGINE (Silently measures incoming site traffic flows) */}
        <Analytics />
        
      </body>
    </html>
  );
}
