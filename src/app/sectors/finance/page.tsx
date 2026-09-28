'use client';

import React from 'react';
import { SectorLayout } from '@/components/sectors/sector-layout';

// Import the exact matching asset used for the main page preview card
import financeHeaderBg from '../../../assets/ePrime-BG.jpg';

export default function FinancePage() {
  return (
    <SectorLayout
      title="Finance & Investments"
      tagline="Securing financial health and commercial paths forward."
      description="Providing professional corporate advisory, financial pathway setups, commercial investment strategies, microfinance structures, and capital management designed to empower growth."
      image={financeHeaderBg}
    />
  );
}
