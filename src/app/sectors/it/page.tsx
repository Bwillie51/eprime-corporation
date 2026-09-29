'use client';

import React from 'react';
import { SectorLayout } from '@/components/sectors/sector-layout';

// Import the specific local photo choice you want as the background
import itHeaderBg from '@/assets/ePrime-BG.jpg'; // Adjust the path as necessary


export default function ITPage() {
  return (
        <SectorLayout
      title="Information Technology (ICT)"
      tagline="Engineering-led digital infrastructure and systems integration."
      description="Specializing in telecommunications, network architecture deployments, managed enterprise systems, security intelligence controls, and custom cloud solution strategies across corporate networks."
      image={itHeaderBg}
      project={{
        title: "",
        client: "",
        date: "",
        amount: "",
        description: ""
      }}
    />

  );
}
