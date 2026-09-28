import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';

import sector from './schemas/sector';
import project from './schemas/project';
import news from './schemas/news';
import team from './schemas/team';
import homeSettings from './schemas/home'; // 🌟 1. IMPORT THE NEW HOME FILE HERE

export default defineConfig({
  name: 'eprime-corporate-studio',
  title: 'ePrime Management Dashboard',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy_id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',
  plugins: [structureTool()],
  schema: {
    // 🌟 2. INJECT IT INTO THE REGISTRY ARRAY:
    types: [homeSettings, sector, project, news, team], 
  },
});
