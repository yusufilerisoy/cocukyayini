'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/shared/Breadcrumb';
import type { Book } from '@/lib/contentful';

const ageGroups = ['Tümü', '1-3', '3-6', '6-8', '8-12', '13+'];
const categories = ['Tümü', 'yeni-cikan', 'cok-satan', 'basucu'];
const categoryLabels: Record<string, string> = {
  'Tümü': 'Tümü',
  'yeni-cikan': 'Yeni Çıkanlar',
  'cok-satan': 'Çok Satanlar',
  'basucu': 'Başucu Kitapları',
};

export default function KitaplarClient({ books }: { books: Book[] }) {
  const [selectedAge, setSelectedAge] = useState('Tümü');
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  const filtered = books.filter((b) => {
    const ageMatch = selectedAge === 'Tümü' || b.ageGroup === selectedAge;
    const catMatch = selectedCategory === 'Tümü' || b.category === selectedCategory;
    return ageMatch && catMatch;
  });

  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Kitaplar & Yayınlar' }]} />

      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Kitaplar & Yayınlar</h1>
      <p className="text-sm text-gray-500 mb-6">
        Yaş gruplarına ve kategorilere göre kitapları keşfedin.
      </p>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <div>
          <label className="text-xs font-bold text-gray-600 block mb-2">Yaş Grubu</label>
          <div className="flex flex-wrap gap-2">
            {ageGroups.map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAge(age)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  selectedAge === age
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary/10'
                }`}
              >
                {age === 'Tümü' ? 'Tümü' : `${age} yaş`}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-xs font-bold text-gray-600 block mb-2">Kategori</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-primary/10'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 pb-12">
        {filtered.map((book) => (
          <Link
            key={book.id}
            href={`/kitaplar/${book.slug}`}
            className="group"
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
            <p className="text-[10px] text-gray-400">{book.publisher}</p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg font-semibold">Bu filtrelere uygun kitap bulunamadı.</p>
          <p className="text-sm mt-2">Farklı filtreler deneyebilirsiniz.</p>
        </div>
      )}
    </div>
  );
}
