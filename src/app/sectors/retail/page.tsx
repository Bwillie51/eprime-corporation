'use client';

import React from 'react';
import { SectorLayout } from '@/components/sectors/sector-layout';

// Import the exact matching asset used for the main page preview card
import retailHeaderBg from '../../../assets/ePrime_Logo.jpeg';

export default function RetailPage() {
  return (
    <SectorLayout
      title="Retail Networks"
      tagline="Committed to delivering quality consumer products and trade."
      description="Managing reliable wholesale supply integrations, regional commercial trade nodes, consumer merchandise pipelines, and dynamic modern point-of-sale inventory networks."
      image={retailHeaderBg}
    />
  );
}
