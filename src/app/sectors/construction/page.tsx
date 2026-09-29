'use client';

import React from 'react';
import { SectorLayout } from '@/components/sectors/sector-layout';

// Import the exact matching asset used for the main page preview card
import constructionHeaderBg from '../../../assets/ePrime-BG.jpg';

export default function ConstructionPage() {
  return (
        <SectorLayout
      title="Construction & Civil"
      tagline="Building strong infrastructure footprints across Papua New Guinea."
      description="Our construction division focuses on large-scale infrastructure, commercial frameworks, structural engineering projects, and local community developments."
      image={constructionHeaderBg}
      project={[]} // 🌟 FIXED: Passed an empty array placeholder to satisfy the required type field property
    />

  );
}
