import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import whatsappIcon from '../assets/WhatsappIcon.jpg';


// 1. IMPORT ALL CORE STRUCTURAL UI LAYOUT COMPONENTS:
import Header from '@/components/header'; 
import { GlobalFooter } from '@/components/ui/footer';

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  // 🌟 Base URL configuration for absolute path resolutions
  metadataBase: new URL('https://eprimecorp.com'),
  
  title: {
    default: "ePrime Corporation Limited",
    template: "%s | ePrime Corporation Limited"
  },
  description: "Powering Enterprise. Enabling Growth. Multi-sector industrial infrastructure systems across Papua New Guinea.",
  keywords: ["ePrime", "ePrime Corporation", "Papua New Guinea", "PNG Business", "Civil Engineering PNG", "ICT Solutions Port Moresby", "Logistics and Freight", "Industrial Infrastructure"],
  
  // 📄 Standard Canonical indexing references to prevent duplicate tracking penalties
  alternates: {
    canonical: 'https://eprimecorp.com',
  },

  // 🌐 Open Graph structure for Facebook, LinkedIn, and WhatsApp rich card generation
  openGraph: {
    title: "ePrime Corporation Limited",
    description: "Multi-sector industrial infrastructure systems powering enterprise and growth across Papua New Guinea.",
    url: 'https://eprimecorp.com',
    siteName: 'ePrime Corporation',
    locale: 'en_PG',
    type: 'website',
    images: [
      {
        url: '/og-image.png', // 🎨 Tip: Drop a 1200x630 pixel brand banner named og-image.png into your public/ folder later!
        width: 1200,
        height: 630,
        alt: 'ePrime Corporation Limited Enterprise Portfolio Banner',
      },
    ],
  },

  // 🐦 Twitter / X Rich Card Rendering
  twitter: {
    card: 'summary_large_image',
    title: 'ePrime Corporation Limited',
    description: 'Multi-sector industrial infrastructure systems across Papua New Guinea.',
    images: ['/og-image.png'],
  },

  // 📱 Device system configurations
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

// 2. Setup your WhatsApp details
  const phoneNumber = "67573947844"; // Replace with your actual phone number in international format (without '+' or spaces)
  const message = encodeURIComponent("Hello! I visited your website and would like to know more about your services.");
  
  // FIXED LINE: Added the required forward slash and the dollar sign ($) for JavaScript evaluation
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden antialiased`}>
        
        {/* 2. RENDER THE HEADER NAVIGATION SYSTEM AT THE VERY TOP OF ALL PAGES */}
        <Header />

        {/* Main Content Router Page Wrapper Frame */}
        <main className="flex-grow relative">
          {children}

          {/* 🟢 FLOATING WHATSAPP CHAT BUTTON */}
          {/* FIXED: Hardcoded your exact Papua New Guinea number directly into the universal API path string string to eliminate compiler template string bugs */}
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
        </main>

        {/* Renders your polished corporate signature footer at the very bottom */}
        <GlobalFooter />
        
      </body>
    </html>
  );
}
