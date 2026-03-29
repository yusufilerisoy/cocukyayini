import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Sidebar from '@/components/shared/Sidebar';
import { books } from '@/data/mockData';

const tadimlikBooks = books.slice(0, 4);

export default function TadimlikPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Tadımlık' }]} />

      <div className="flex flex-col lg:flex-row gap-8 pb-12">
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Tadımlık</h1>
          <p className="text-sm text-gray-500 mb-8">
            Yeni ve yakında çıkacak kitaplardan ilk okuyan siz olun! Yayınevlerinin özel izniyle
            sizin için hazırladığımız bölümler.
          </p>

          <div className="space-y-8">
            {tadimlikBooks.map((book, index) => (
              <div
                key={book.id}
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-48 aspect-[2/3] md:aspect-auto flex-shrink-0">
                    <Image src={book.coverImage} alt={book.title} fill className="object-cover" />
                    <span className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      Yeni
                    </span>
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-secondary text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        TADIMLIK
                      </span>
                      <span className="text-xs text-gray-400">{book.ageGroup} yaş</span>
                    </div>
                    <Link href={`/kitaplar/${book.slug}`}>
                      <h2 className="text-lg font-bold text-gray-900 hover:text-primary transition-colors mb-1">
                        {book.title}
                      </h2>
                    </Link>
                    <p className="text-sm text-gray-500 mb-3">
                      {book.author.name} &middot; {book.publisher}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {book.description}
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <p className="text-xs font-bold text-primary mb-2">Kitaptan bir bölüm:</p>
                      <p className="text-sm text-gray-600 italic leading-relaxed">
                        &ldquo;{index === 0
                          ? 'Sabahın ilk ışıkları pencereden süzülürken, küçük Elif kitaplığının önünde durdu. Bugün yepyeni bir macera başlayacaktı. Rafın en üst köşesinde duran, henüz açılmamış kitaba uzandı...'
                          : index === 1
                          ? 'Uzay gemisinin penceresinden Dünya\'yı izlerken, Güneş\'in ne kadar yakın göründüğüne şaşırdı Can. "Bir gün gerçekten gidebilir miyiz oraya?" diye sordu yanındaki robota...'
                          : index === 2
                          ? 'Ormanın derinliklerinden gelen ses, küçük Zeynep\'i meraklandırdı. Bu, daha önce hiç duymadığı bir melodiydi. Sanki ağaçlar şarkı söylüyordu...'
                          : 'Gökyüzünde süzülen minik bulut, aşağıdaki çocukları izliyordu. Onlar parkta oynarken, bulut da kendi oyununu oynuyordu: en güzel şekillere bürünmek...'
                        }&rdquo;
                      </p>
                    </div>
                    <Link
                      href={`/kitaplar/${book.slug}`}
                      className="text-primary font-bold text-sm hover:underline"
                    >
                      Devamını oku &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-72 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
