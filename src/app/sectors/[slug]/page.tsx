import React from 'react';
import { notFound } from 'next/navigation';
import { sanityClient } from '@/lib/sanity';
import { SectorLayout } from '@/components/sectors/sector-layout';

interface ProjectData {
  title: string;
  client: string;
  date: string;
  amount: string;
  description: string;
  image?: any; // Ensuring TypeScript maps the incoming asset object safely
}

interface SectorPageData {
  _id: string;
  name: string;
  tagline: string;
  description: string;
  image: any;
  featuredProject: ProjectData | null;
}

// High-speed data engine gathering matching sector descriptions and linked featured projects
async function getSectorData(slug: string): Promise<SectorPageData | null> {
  try {
    const query = `*[_type == "sector" && slug.current == $slug][0]{
      _id,
      name,
      tagline,
      description,
      image,
      "featuredProject": *[_type == "project" && references(^._id)] | order(date desc)[0]{
        title,
        client,
        date,
        amount,
        description,
        image // 🌟 FIX: Telling Sanity to pull the image file data out of the database array!
      }
    }`;
    
    return await sanityClient.fetch(query, { slug });
  } catch (error) {
    console.error('Error compiling sub-sector details from Sanity:', error);
    return null;
  }
}

interface PageProps {
  params: { slug: string };
}

export default async function DynamicSectorPage({ params }: PageProps) {
  const sector = await getSectorData(params.slug);

  // If a slug path configuration is not found inside your dashboard, throw a standard clean 404
  if (!sector) {
    notFound();
  }

  return (
    <SectorLayout
      title={sector.name}
      tagline={sector.tagline}
      description={sector.description}
      image={sector.image}
      project={sector.featuredProject || undefined} // 🌟 FIXED: Convert any null data
    />
  );
}
