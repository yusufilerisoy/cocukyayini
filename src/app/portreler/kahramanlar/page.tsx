import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';

const kahramanlar = [
  { name: 'Küçük Prens', origin: 'Antoine de Saint-Exupéry', image: 'https://picsum.photos/seed/kahraman1/400/400', desc: 'Güllerden, tilkilerden ve yıldızlardan öğrendiği derslerle tüm dünyayı etkileyen küçük gezgin.' },
  { name: 'Keloğlan', origin: 'Türk Halk Masalları', image: 'https://picsum.photos/seed/kahraman2/400/400', desc: 'Anadolu masallarının zeki, kurnaz ve sevimli kahramanı. Yüzyıllardır çocukların favorisi.' },
  { name: 'Pıtırcık', origin: 'Fatih Erdoğan', image: 'https://picsum.photos/seed/kahraman3/400/400', desc: 'Meraklı, cesur ve komik. Türk çocuk edebiyatının en sevilen modern kahramanlarından.' },
  { name: 'Nasreddin Hoca', origin: 'Türk Halk Edebiyatı', image: 'https://picsum.photos/seed/kahraman4/400/400', desc: 'Eşeğiyle ünlü, zekası ve nüktesiyle yüzyıllardır güldüren bilge kahraman.' },
  { name: 'Çarli', origin: 'Roald Dahl', image: 'https://picsum.photos/seed/kahraman5/400/400', desc: 'Çikolata Fabrikası\'nın şanslı ziyaretçisi. İyiliğin ve dürüstlüğün ödüllendirildiğinin sembolü.' },
  { name: 'Pollyanna', origin: 'Eleanor H. Porter', image: 'https://picsum.photos/seed/kahraman6/400/400', desc: '"Sevinç Oyunu" ile hayata her zaman olumlu bakan, iyimserliğin simgesi.' },
  { name: 'Pamuk Prenses', origin: 'Grimm Kardeşler', image: 'https://picsum.photos/seed/kahraman7/400/400', desc: 'Yedi cücelerin arkadaşı, masalların en tanınmış prensesi.' },
  { name: 'Matilda', origin: 'Roald Dahl', image: 'https://picsum.photos/seed/kahraman8/400/400', desc: 'Kitap tutkunu, süper zekalı küçük kız. Okuma sevgisinin gücünü kanıtlayan kahraman.' },
];

export default function KahramanlarPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Portreler', href: '/portreler' }, { label: 'Kitap Kahramanları' }]} />
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Kitap Kahramanları</h1>
      <p className="text-sm text-gray-500 mb-8">
        Çocuk edebiyatının yerli ve yabancı unutulmaz hayali kahramanları.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pb-12">
        {kahramanlar.map((k) => (
          <div key={k.name} className="text-center group">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-shadow mb-3 border-4 border-secondary">
              <Image src={k.image} alt={k.name} fill className="object-cover" />
            </div>
            <h3 className="font-bold text-gray-800 text-sm">{k.name}</h3>
            <p className="text-[10px] text-primary font-medium">{k.origin}</p>
            <p className="text-[11px] text-gray-400 mt-1 line-clamp-2">{k.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
