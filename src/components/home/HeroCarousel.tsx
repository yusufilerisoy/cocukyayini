'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

interface HeroBanner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  linkUrl: string;
}

interface HeroCarouselProps {
  banners: HeroBanner[];
}

export default function HeroCarousel({ banners }: HeroCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % banners.length);
  }, [banners.length]);

  const prev = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  if (!banners.length) return null;

  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-gray-100" style={{ aspectRatio: '16/6' }}>
      {banners.map((banner, i) => (
        <Link
          key={banner.id}
          href={banner.linkUrl}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={banner.image}
            alt={banner.title}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <h2 className="text-white text-xl md:text-3xl font-extrabold mb-2 drop-shadow-lg">
              {banner.title}
            </h2>
            <p className="text-white/90 text-sm md:text-base max-w-2xl drop-shadow">
              {banner.subtitle}
            </p>
          </div>
        </Link>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={(e) => { e.preventDefault(); prev(); }}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/30 backdrop-blur flex items-center justify-center text-white hover:bg-white/50 transition-colors"
        aria-label="Önceki"
      >
        <HiChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={(e) => { e.preventDefault(); next(); }}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/30 backdrop-blur flex items-center justify-center text-white hover:bg-white/50 transition-colors"
        aria-label="Sonraki"
      >
        <HiChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.preventDefault(); setCurrent(i); }}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? 'bg-white w-6' : 'bg-white/50'
            }`}
            aria-label={`Slayt ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
