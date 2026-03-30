import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { HiGlobe } from 'react-icons/hi';

const items = [
  { id: 'd1', title: 'Bologna Çocuk Kitapları Fuarı', country: 'İtalya', desc: 'Dünyanın en büyük çocuk kitapları fuarı. Her yıl 1.500\'den fazla yayıncı katılıyor. İllüstratörler için özel sergi alanları ve ödül törenleri düzenleniyor.', image: 'https://picsum.photos/seed/dunya1/600/400' },
  { id: 'd2', title: 'Londra Çocuk Kitap Festivali', country: 'İngiltere', desc: 'Her yıl Mart ayında düzenlenen festival, dünya çapında yüzlerce çocuk kitabı yazarını bir araya getiriyor. Atölyeler, imza günleri ve panel tartışmaları ile dolu.', image: 'https://picsum.photos/seed/dunya2/600/400' },
  { id: 'd3', title: 'Tokyo Uluslararası Çocuk Kütüphanesi', country: 'Japonya', desc: 'Ueno Parkı\'ndaki bu muhteşem kütüphane, dünyanın en güzel çocuk kütüphanelerinden biri. 400.000\'den fazla çocuk kitabı barındırıyor.', image: 'https://picsum.photos/seed/dunya3/600/400' },
  { id: 'd4', title: 'IBBY - Uluslararası Çocuk Kitapları Konseyi', country: 'İsviçre', desc: 'Hans Christian Andersen Ödülü\'nü veren kurum. Çocuk edebiyatının dünya çapında gelişimi için çalışıyor.', image: 'https://picsum.photos/seed/dunya4/600/400' },
  { id: 'd5', title: 'New York Halk Kütüphanesi Çocuk Bölümü', country: 'ABD', desc: 'Dünyanın en ünlü kütüphanelerinden birinin çocuklara ayrılmış bölümü. Winnie-the-Pooh\'nun orijinal oyuncakları burada sergileniyor.', image: 'https://picsum.photos/seed/dunya5/600/400' },
  { id: 'd6', title: 'Bratislava İllüstrasyon Bienali', country: 'Slovakya', desc: 'Dünya çapında çocuk kitabı illüstrasyonlarının en prestijli yarışması. İki yılda bir düzenleniyor.', image: 'https://picsum.photos/seed/dunya6/600/400' },
];

export default function DunyadanPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Kitap Gezegeni', href: '/kitap-gezegeni' }, { label: 'Dünyadan Kitap' }]} />
      <div className="flex items-center gap-2 mb-2">
        <HiGlobe className="w-6 h-6 text-primary" />
        <h1 className="text-2xl font-extrabold text-gray-900">Dünyadan Kitap</h1>
      </div>
      <p className="text-sm text-gray-500 mb-8">Dünyadan örnek kitap okuma uygulamaları, çocuk kütüphaneleri ve uluslararası etkinlikler.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
              <span className="absolute top-3 right-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">{item.country}</span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
