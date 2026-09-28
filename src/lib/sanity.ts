import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url'; // 🌟 FIX: Updated named import line

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-03-24',
  useCdn: false,
});

// 🌟 FIX: Swapping out the old builder call for the modern named function builder
const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
