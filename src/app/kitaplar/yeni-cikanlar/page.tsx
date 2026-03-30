import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { getBooksByCategory } from '@/lib/contentful';

export default async function YeniCikanlarPage() {
  const filtered = await getBooksByCategory('yeni-cikan');

  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Kitaplar', href: '/kitaplar' }, { label: 'Yeni Çıkanlar' }]} />

      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Yeni Çıkanlar</h1>
      <p className="text-sm text-gray-500 mb-8">
        Çocuk edebiyatında en yeni yayınları keşfedin.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 pb-12">
        {filtered.map((book) => (
          <Link key={book.id} href={`/kitaplar/${book.slug}`} className="group">
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
          <p className="text-lg font-semibold">Bu kategoride henüz kitap bulunmuyor.</p>
        </div>
      )}

      <div className="text-center pb-12">
        <Link
          href="/kitaplar"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          Tüm kitapları keşfet &rarr;
        </Link>
      </div>
    </div>
  );
}
