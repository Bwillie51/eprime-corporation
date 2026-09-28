// import React from 'react';
// import type { Metadata } from 'next';
// import Footer from '@/components/footer';
// import Header from '@/components/header';
// import './globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 🌟 1. IMPORT ALL CORE STRUCTURAL UI LAYOUT COMPONENTS:
import Header from '@/components/header'; // Make sure your folder path casing matches exactly (e.g. Header Component)
import { GlobalFooter } from "@/components/ui/footer"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ePrime Corporation Limited",
  description: "Powering Enterprise. Enabling Growth. Multi-sector industrial infrastructure systems across Papua New Guinea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden antialiased`}>
        
        {/* 🌟 2. RENDER THE HEADER NAVIGATION SYSTEM AT THE VERY TOP OF ALL PAGES */}
        <Header />
        
        {/* Main Content Router Page Wrapper Frame */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Renders your polished corporate signature footer at the very bottom */}
        <GlobalFooter />
        
      </body>
    </html>
  );
}
