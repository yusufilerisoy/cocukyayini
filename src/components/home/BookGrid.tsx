'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { useRef } from 'react';

interface Book {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  author: { name: string };
  publisher: string;
  ageGroup: string;
}

interface BookGridProps {
  books: Book[];
  title?: string;
}

export default function BookGrid({ books, title = 'Kitaplar' }: BookGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-extrabold text-gray-900">{title}</h2>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="Sola kaydır"
          >
            <HiChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
            aria-label="Sağa kaydır"
          >
            <HiChevronRight className="w-4 h-4" />
          </button>
          <Link
            href="/kitaplar"
            className="text-primary text-sm font-semibold hover:underline ml-2"
          >
            Tümü &rarr;
          </Link>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-2 px-2"
      >
        {books.map((book) => (
          <Link
            key={book.id}
            href={`/kitaplar/${book.slug}`}
            className="flex-shrink-0 w-36 md:w-44 group"
          >
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow mb-2">
              <Image
                src={book.coverImage}
                alt={book.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 right-2 bg-primary/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {book.ageGroup}
              </div>
            </div>
            <h4 className="text-xs font-bold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">
              {book.title}
            </h4>
            <p className="text-[11px] text-gray-500">{book.author.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
