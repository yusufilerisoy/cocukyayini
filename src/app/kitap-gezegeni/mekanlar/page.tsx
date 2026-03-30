import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { HiLocationMarker } from 'react-icons/hi';

const mekanlar = [
  { id: 'm1', title: 'Robinson Crusoe 389 Çocuk Kitabevi', location: 'Beyoğlu, İstanbul', type: 'Kitapçı', desc: 'İstiklal Caddesi\'nin simge kitapçısının çocuk bölümü. Geniş seçkisi ve etkinlikleriyle çocukların favorisi.', image: 'https://picsum.photos/seed/mekan1/600/400' },
  { id: 'm2', title: 'Beyoğlu Çocuk Kütüphanesi', location: 'Beyoğlu, İstanbul', type: 'Kütüphane', desc: 'Tarihi binasında çocuklara özel tasarlanmış alanlar ve okuma köşeleri.', image: 'https://picsum.photos/seed/mekan2/600/400' },
  { id: 'm3', title: 'SALT Galata Çocuk Atölyesi', location: 'Karaköy, İstanbul', type: 'Kültür Merkezi', desc: 'Çocuklara yönelik yaratıcı atölyeler, kitap okuma etkinlikleri ve sergiler.', image: 'https://picsum.photos/seed/mekan3/600/400' },
  { id: 'm4', title: 'Ankara Çocuk Kitaplığı', location: 'Çankaya, Ankara', type: 'Kütüphane', desc: 'Türkiye\'nin en büyük çocuk kitaplıklarından. 50.000\'den fazla çocuk kitabı.', image: 'https://picsum.photos/seed/mekan4/600/400' },
  { id: 'm5', title: 'Kadıköy Sahaf Çarşısı', location: 'Kadıköy, İstanbul', type: 'Kitapçı', desc: 'Nadir çocuk kitapları ve ilk baskılar için sahafların buluşma noktası.', image: 'https://picsum.photos/seed/mekan5/600/400' },
  { id: 'm6', title: 'İzmir Çocuk Kitapları Müzesi', location: 'Konak, İzmir', type: 'Müze', desc: 'Türkiye\'nin ilk çocuk kitapları müzesi. Osmanlı döneminden günümüze eserler.', image: 'https://picsum.photos/seed/mekan6/600/400' },
];

export default function MekanlarPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Kitap Gezegeni', href: '/kitap-gezegeni' }, { label: 'Mekanlar' }]} />
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Mekanlar</h1>
      <p className="text-sm text-gray-500 mb-8">Çocuk kütüphaneleri, kitapçılar, etkinlik noktaları ve çocuk müzeleri.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {mekanlar.map((m) => (
          <div key={m.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image src={m.image} alt={m.title} fill className="object-cover" />
              <span className="absolute top-3 left-3 bg-teal-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">{m.type}</span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 text-sm mb-1">{m.title}</h3>
              <p className="text-xs text-primary font-medium mb-2 flex items-center gap-1"><HiLocationMarker className="w-3.5 h-3.5" />{m.location}</p>
              <p className="text-xs text-gray-500">{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
