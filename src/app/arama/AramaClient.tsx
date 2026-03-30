'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';
import type { Article, Book } from '@/lib/contentful';

function SearchResults({ articles, books }: { articles: Article[]; books: Book[] }) {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.toLowerCase() || '';

  const matchedArticles = query
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.excerpt.toLowerCase().includes(query) ||
          a.category.toLowerCase().includes(query) ||
          a.tags.some((t) => t.toLowerCase().includes(query))
      )
    : [];

  const matchedBooks = query
    ? books.filter(
        (b) =>
          b.title.toLowerCase().includes(query) ||
          b.author.name.toLowerCase().includes(query) ||
          b.publisher.toLowerCase().includes(query) ||
          b.tags.some((t) => t.toLowerCase().includes(query))
      )
    : [];

  const totalResults = matchedArticles.length + matchedBooks.length;

  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Arama' }]} />

      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Arama Sonuçları</h1>
      {query ? (
        <p className="text-sm text-gray-500 mb-8">
          &ldquo;{searchParams.get('q')}&rdquo; için <strong>{totalResults}</strong> sonuç bulundu.
        </p>
      ) : (
        <p className="text-sm text-gray-500 mb-8">Aramak istediğiniz kelimeyi yazın.</p>
      )}

      {/* Articles */}
      {matchedArticles.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Yazılar ({matchedArticles.length})</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {matchedArticles.map((article) => (
              <Link
                key={article.id}
                href={`/haberler/${article.slug}`}
                className="block bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors mb-1">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Books */}
      {matchedBooks.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Kitaplar ({matchedBooks.length})</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {matchedBooks.map((book) => (
              <Link
                key={book.id}
                href={`/kitaplar/${book.slug}`}
                className="block bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-1.5 right-1.5 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                    {book.ageGroup}
                  </span>
                </div>
                <div className="p-2">
                  <h4 className="text-xs font-bold text-gray-800 line-clamp-2">{book.title}</h4>
                  <p className="text-[11px] text-gray-400">{book.author.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {query && totalResults === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-sm">
            &ldquo;{searchParams.get('q')}&rdquo; ile eşleşen sonuç bulunamadı.
          </p>
          <p className="text-gray-400 text-xs mt-2">Farklı anahtar kelimeler deneyin.</p>
        </div>
      )}
    </div>
  );
}

export default function AramaClient({ articles, books }: { articles: Article[]; books: Book[] }) {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center text-gray-400">Yükleniyor...</div>}>
      <SearchResults articles={articles} books={books} />
    </Suspense>
  );
}
