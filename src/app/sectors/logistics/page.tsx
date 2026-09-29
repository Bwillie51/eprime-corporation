'use client';

import React from 'react';
import { SectorLayout } from '@/components/sectors/sector-layout';

// Import the exact matching asset used for the main page preview card
import logisticsHeaderBg from '../../../assets/ePrime_Logo.jpeg';

export default function LogisticsPage() {
  return (
        <SectorLayout
      title="Logistics & Freight"
      tagline="Reliable, secure tracking from point of dispatch to final delivery."
      description="Driving end-to-end multi-modal supply chains, freight handling systems, asset distribution tracking, warehousing layers, and critical cargo networks safely across regions."
      image={logisticsHeaderBg}
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
