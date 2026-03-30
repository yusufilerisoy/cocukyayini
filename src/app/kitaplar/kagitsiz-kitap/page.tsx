import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { HiMicrophone, HiFilm, HiDeviceMobile, HiMusicNote } from 'react-icons/hi';

const items = [
  { title: 'Masal Dinle', type: 'Sesli Kitap', icon: HiMusicNote, color: 'bg-purple-500', image: 'https://picsum.photos/seed/kagitsiz1/600/400', desc: 'Ünlü yazarların seslendirdiği Türk masalları ve çocuk hikayeleri. Her yaş grubuna uygun sesli içerikler.' },
  { title: 'Kitap Ekranı', type: 'E-Kitap', icon: HiDeviceMobile, color: 'bg-blue-500', image: 'https://picsum.photos/seed/kagitsiz2/600/400', desc: 'Tablet ve telefon için interaktif çocuk kitapları. Dokunmatik sayfalar, animasyonlar ve ses efektleri.' },
  { title: 'Sinemada Kitap', type: 'Film/Dizi', icon: HiFilm, color: 'bg-red-500', image: 'https://picsum.photos/seed/kagitsiz3/600/400', desc: 'Çocuk kitaplarından uyarlanan filmler ve diziler. Kitaptan perdeye uzanan hikayeler.' },
  { title: 'Podcast Köşesi', type: 'Podcast', icon: HiMicrophone, color: 'bg-teal-500', image: 'https://picsum.photos/seed/kagitsiz4/600/400', desc: 'Çocuk edebiyatı üzerine podcast önerileri. Yazarlarla söyleşiler, kitap incelemeleri ve hikaye anlatımları.' },
];

export default function KagitsizKitapPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Kitaplar', href: '/kitaplar' }, { label: 'Kağıtsız Kitap' }]} />
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Kağıtsız Kitap</h1>
      <p className="text-sm text-gray-500 mb-8">Sesli kitaplar, e-kitaplar, podcast&apos;ler, sinema uyarlamaları ve mobil uygulamalar.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-12">
        {items.map((item) => (
          <div key={item.title} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">{item.title}</h3>
                  <span className="text-white/70 text-[10px]">{item.type}</span>
                </div>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
