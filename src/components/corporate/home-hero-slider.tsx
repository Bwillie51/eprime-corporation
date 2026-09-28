'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface HomeHeroSliderProps {
  sanityImages: any[] | null;
  fallbackImage: any;
}

export function HomeHeroSlider({ sanityImages, fallbackImage }: HomeHeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🌟 FIX: Strictly filter out any broken images that lack an asset reference block
  const slides = Array.isArray(sanityImages) && sanityImages.length > 0
    ? sanityImages.filter((slide) => slide && (slide.asset || slide._ref))
    : null;

  useEffect(() => {
    if (!slides || slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [slides]);

  // Fallback layout if no valid images are found or if an unconfigured object is passed
  if (!slides || slides.length === 0) {
    return (
      <Image
        src={fallbackImage}
        alt="ePrime Corporation Background Fallback"
        fill
        priority
        className="object-cover object-center opacity-30 pointer-events-none select-none"
      />
    );
  }

  return (
    <>
      {slides.map((slide: any, index: number) => {
        const isCurrent = index === currentIndex;
        
        // Wrap rendering in a try-catch safety layer just to be absolutely certain it never crashes
        let imageUrl = '';
        try {
          imageUrl = urlFor(slide).url();
        } catch (err) {
          console.error("Skipping unresolvable slide frame entry asset:", err);
          return null;
        }

        if (!imageUrl) return null;

        return (
          <div
            key={slide._key || index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isCurrent ? 'opacity-30 z-0' : 'opacity-0 z-[-1]'
            }`}
          >
            <Image
              src={imageUrl}
              alt={`ePrime Background Slide ${index + 1}`}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center pointer-events-none select-none"
            />
          </div>
        );
      })}
    </>
  );
}
