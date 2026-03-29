import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Sidebar from '@/components/shared/Sidebar';
import { HiLocationMarker, HiGlobe } from 'react-icons/hi';

const mekanlar = [
  {
    id: 'm1', title: 'Robinson Crusoe 389 Çocuk Kitabevi',
    location: 'Beyoğlu, İstanbul', type: 'Kitapçı',
    description: 'İstiklal Caddesi\'nin simge kitapçısının çocuk bölümü. Geniş seçkisi ve etkinlikleriyle çocukların favorisi.',
    image: 'https://picsum.photos/seed/mekan1/600/400',
  },
  {
    id: 'm2', title: 'Beyoğlu Çocuk Kütüphanesi',
    location: 'Beyoğlu, İstanbul', type: 'Kütüphane',
    description: 'Tarihi binasında çocuklara özel tasarlanmış alanlar, okuma köşeleri ve düzenli etkinliklerle dolu bir mekan.',
    image: 'https://picsum.photos/seed/mekan2/600/400',
  },
  {
    id: 'm3', title: 'SALT Galata Çocuk Atölyesi',
    location: 'Karaköy, İstanbul', type: 'Kültür Merkezi',
    description: 'Çocuklara yönelik yaratıcı atölyeler, kitap okuma etkinlikleri ve sergiler düzenleyen kültür merkezi.',
    image: 'https://picsum.photos/seed/mekan3/600/400',
  },
  {
    id: 'm4', title: 'Ankara Çocuk Kitaplığı',
    location: 'Çankaya, Ankara', type: 'Kütüphane',
    description: 'Türkiye\'nin en büyük çocuk kitaplıklarından biri. 50.000\'den fazla çocuk kitabı barındırıyor.',
    image: 'https://picsum.photos/seed/mekan4/600/400',
  },
];

const dunyadan = [
  {
    id: 'd1', title: 'Londra Çocuk Kitap Festivali',
    country: 'İngiltere',
    description: 'Her yıl Mart ayında düzenlenen festival, dünya çapında yüzlerce çocuk kitabı yazarını bir araya getiriyor.',
    image: 'https://picsum.photos/seed/dunya1/600/400',
  },
  {
    id: 'd2', title: 'Bologna Çocuk Kitapları Fuarı',
    country: 'İtalya',
    description: 'Dünyanın en büyük çocuk kitapları fuarı. Her yıl 1.500\'den fazla yayıncı katılıyor.',
    image: 'https://picsum.photos/seed/dunya2/600/400',
  },
  {
    id: 'd3', title: 'Tokyo Çocuk Kütüphanesi',
    country: 'Japonya',
    description: 'Ueno Parkı\'ndaki bu muhteşem kütüphane, dünyanın en güzel çocuk kütüphanelerinden biri olarak kabul ediliyor.',
    image: 'https://picsum.photos/seed/dunya3/600/400',
  },
  {
    id: 'd4', title: 'IBBY - Uluslararası Çocuk Kitapları Konseyi',
    country: 'Uluslararası',
    description: 'Çocuk edebiyatının dünya çapında gelişimi için çalışan uluslararası kuruluş. Hans Christian Andersen Ödülü\'nü veren kurum.',
    image: 'https://picsum.photos/seed/dunya4/600/400',
  },
];

export default function KitapGezegeniPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Kitap Gezegeni' }]} />

      <div className="flex flex-col lg:flex-row gap-8 pb-12">
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Kitap Gezegeni</h1>
          <p className="text-sm text-gray-500 mb-8">
            Çocuk kütüphaneleri, kitapçılar, etkinlik noktaları ve dünyadan kitap okuma uygulamaları.
          </p>

          {/* Mekanlar */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-5">
              <HiLocationMarker className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-extrabold text-gray-900">Mekanlar</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {mekanlar.map((mekan) => (
                <div
                  key={mekan.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image src={mekan.image} alt={mekan.title} fill className="object-cover" />
                    <span className="absolute top-3 left-3 bg-teal-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {mekan.type}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 text-sm mb-1">{mekan.title}</h3>
                    <p className="text-xs text-primary font-medium mb-2 flex items-center gap-1">
                      <HiLocationMarker className="w-3.5 h-3.5" />
                      {mekan.location}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-3">{mekan.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dünyadan */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <HiGlobe className="w-5 h-5 text-primary" />
              <h2 className="text-lg font-extrabold text-gray-900">Dünyadan Kitap</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {dunyadan.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                    <span className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {item.country}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-500 line-clamp-3">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:w-72 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
