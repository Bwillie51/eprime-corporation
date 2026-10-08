
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

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
const message = encodeURIComponent("Hello! I visited your website and would like to know more about your services.");
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
          "url": "https://eprimecorp.com",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden antialiased`}>
        
        {/* // RENDER THE HEADER NAVIGATION SYSTEM AT THE VERY TOP OF ALL PAGES */}
        <Header />

        {/* // Main Content Router Page Wrapper Frame */}
        <main className="flex-grow relative">
          {children}

          {/* 🟢 FIXED FLOATING WHATSAPP BUTTON (Using your exact phone data parameters) */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:bg-[#128C7E] hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.66.986 3.288 1.479 4.884 1.48 5.364 0 9.728-4.341 9.73-9.676.002-2.585-1.004-5.014-2.833-6.845-1.83-1.83-4.26-2.836-6.853-2.837-5.372 0-9.74 4.344-9.743 9.677-.001 1.714.463 3.39 1.342 4.869l-.988 3.605 3.693-.968z" />
            </svg>
          </a>
        </main>

        {/* // Renders your polished corporate signature footer at the very bottom */}
        <GlobalFooter />

        {/* 📊 THE VERCEL ANALYTICS ENGINE (Silently measures incoming site traffic flows) */}
        <Analytics />
        
      </body>
    </html>
  );
}
