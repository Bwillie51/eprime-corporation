'use client';

import React from 'react';
import { Studio } from 'sanity';
import config from '../../../../sanity.config';

export default function StudioDashboardPage() {
  return (
    <div className="fixed inset-0 z-50 bg-white">
      <Studio config={config} />
    </div>
  );
}
