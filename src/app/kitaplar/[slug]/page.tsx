import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Sidebar from '@/components/shared/Sidebar';
import { getBooks, getBookBySlug } from '@/lib/contentful';

export async function generateStaticParams() {
  const books = await getBooks();
  return books.map((book) => ({ slug: book.slug }));
}

export default async function BookDetailPage({ params }: { params: { slug: string } }) {
  const books = await getBooks();
  const book = (await getBookBySlug(params.slug)) || books[0];

  return (
    <div className="container mx-auto px-4">
      <Breadcrumb
        items={[
          { label: 'Kitaplar', href: '/kitaplar' },
          { label: book.title },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-8 pb-12">
        <div className="flex-1">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Book Cover */}
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-lg">
                <Image src={book.coverImage} alt={book.title} fill className="object-cover" />
              </div>
              {/* Buy Links */}
              <div className="mt-4 space-y-2">
                {Object.entries(book.buyLinks).map(([store, url]) => (
                  <a
                    key={store}
                    href={url}
                    className="block w-full text-center bg-primary text-white text-sm font-bold py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    {store.charAt(0).toUpperCase() + store.slice(1)}&apos;dan Satın Al
                  </a>
                ))}
              </div>
            </div>

            {/* Book Info */}
            <div className="flex-1">
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                {book.ageGroup} yaş
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                {book.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{book.author.name}</p>

              {/* Book Meta */}
              <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <h3 className="text-sm font-bold text-gray-800 mb-3">Kitap Bilgileri</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-gray-400">Yayınevi:</span>
                    <span className="ml-2 text-gray-700 font-medium">{book.publisher}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Yaş Grubu:</span>
                    <span className="ml-2 text-gray-700 font-medium">{book.ageGroup}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Kategori:</span>
                    <span className="ml-2 text-gray-700 font-medium capitalize">{book.category.replace('-', ' ')}</span>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">Kitap Hakkında</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{book.description}</p>
              <p className="text-gray-500 leading-relaxed">
                Bu kitap, {book.ageGroup} yaş grubundaki okurlar için {book.publisher} tarafından
                yayımlanmıştır. {book.author.name} tarafından kaleme alınan eser, çocuk edebiyatı
                severler tarafından büyük ilgi görmektedir.
              </p>

              {/* Tags */}
              <div className="mt-6 flex items-center gap-2 flex-wrap">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Card */}
              <div className="mt-8 bg-gray-50 rounded-xl p-5 flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={book.author.photo}
                    alt={book.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-gray-800">{book.author.name}</p>
                  <p className="text-xs text-gray-500 line-clamp-2">{book.author.bio}</p>
                  <Link
                    href={`/portreler/${book.author.slug}`}
                    className="text-primary text-xs font-bold mt-1 inline-block hover:underline"
                  >
                    Biyografisini Oku &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-72 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
