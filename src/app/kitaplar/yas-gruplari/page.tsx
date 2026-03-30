import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { getBooks } from '@/lib/contentful';

const ageGroupSections = [
  { key: '1-3', label: '1-3 Ya\u015f' },
  { key: '3-6', label: '3-6 Ya\u015f' },
  { key: '6-8', label: '6-8 Ya\u015f' },
  { key: '8-12', label: '8-12 Ya\u015f' },
  { key: '13+', label: '13+ Ya\u015f' },
];

export default async function YasGruplariPage() {
  const books = await getBooks();
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Kitaplar', href: '/kitaplar' }, { label: 'Ya\u015f Gruplar\u0131' }]} />

      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Ya\u015f Gruplar\u0131</h1>
      <p className="text-sm text-gray-500 mb-8">
        \u00c7ocu\u011funuzun ya\u015f\u0131na uygun kitaplar\u0131 kolayca bulun.
      </p>

      {ageGroupSections.map((group) => {
        const groupBooks = books.filter(b => b.ageGroup === group.key);
        if (groupBooks.length === 0) return null;

        return (
          <section key={group.key} className="mb-12">
            <h2 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-primary/20 pb-2">
              {group.label}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
              {groupBooks.map((book) => (
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
          </section>
        );
      })}

      <div className="pb-12" />
    </div>
  );
}
