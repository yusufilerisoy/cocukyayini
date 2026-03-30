import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Sidebar from '@/components/shared/Sidebar';
import { HiPencilAlt } from 'react-icons/hi';

const placeholderCards = [
  {
    id: 'cizgi1',
    title: 'Kitap Kurdu',
    image: 'https://picsum.photos/seed/cizgi1/600/400',
  },
  {
    id: 'cizgi2',
    title: 'Okuma Serüveni',
    image: 'https://picsum.photos/seed/cizgi2/600/400',
  },
  {
    id: 'cizgi3',
    title: 'Harfler Diyarı',
    image: 'https://picsum.photos/seed/cizgi3/600/400',
  },
];

export default function CizgiylePage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb
        items={[
          { label: 'Haberler', href: '/haberler' },
          { label: 'Çizgiyle' },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-8 pb-12">
        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-6">
            Çizgiyle
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Kitapla ilgili karikatür, çizgi bant ve illüstrasyonlar.
          </p>

          {/* Coming Soon Message */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <HiPencilAlt className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              Çok Yakında
            </h2>
            <p className="text-sm text-gray-500 max-w-md mx-auto">
              Çizgiyle bölümünde karikatürler, çizgi bantlar ve illüstrasyonlar çok yakında
              sizlerle buluşacak. Takipte kalın!
            </p>
          </div>

          {/* Placeholder Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {placeholderCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-sm font-bold text-gray-800">{card.title}</h3>
                  <p className="text-xs text-gray-400 mt-1">Yakında</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
