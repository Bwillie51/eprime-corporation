'use client';

import React from 'react';
import { SectorLayout } from '@/components/sectors/sector-layout';

// Import the exact matching asset used for the main page preview card
import motorsHeaderBg from '../../../assets/ePrime_Logo.jpeg';

export default function MotorsPage() {
  return (
    <SectorLayout
      title="Car Sales & Dealerships"
      tagline="Keeping commercial enterprise and fleets moving onward."
      description="Sourcing and distributing premium light, commercial, and heavy-duty utility vehicle fleets tailored specifically for business networks, logistics systems, and regional environments."
      image={motorsHeaderBg}
    />
  );
}
