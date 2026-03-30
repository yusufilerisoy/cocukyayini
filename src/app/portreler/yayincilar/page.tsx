import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';

const yayincilar = [
  { name: 'Günışığı Kitaplığı', logo: 'https://picsum.photos/seed/yayinevi1/400/400', desc: 'Çocuk edebiyatına adanmış, ödüllü yayınevi. Türkiye\'nin en köklü çocuk kitabı yayınevlerinden.', founded: '1996' },
  { name: 'Can Çocuk', logo: 'https://picsum.photos/seed/yayinevi2/400/400', desc: 'Can Yayınları\'nın çocuk ve gençlik edebiyatı markası. Yerli ve çeviri eserleriyle geniş bir katalog.', founded: '2005' },
  { name: 'Tudem Yayınları', logo: 'https://picsum.photos/seed/yayinevi3/400/400', desc: 'Çocuk ve gençlik kitapları alanında öncü yayınevi. Tudem Edebiyat Ödülleri ile tanınır.', founded: '2002' },
  { name: 'Yapı Kredi Yayınları', logo: 'https://picsum.photos/seed/yayinevi4/400/400', desc: 'Türkiye\'nin en köklü yayınevlerinden. Çocuk kitapları bölümü kaliteli seçkisiyle dikkat çeker.', founded: '1992' },
  { name: 'Altın Kitaplar', logo: 'https://picsum.photos/seed/yayinevi5/400/400', desc: 'Nesiller boyu çocuklara kitap sevdiren yayınevi. Geniş dağıtım ağıyla Türkiye genelinde erişilebilir.', founded: '1967' },
  { name: 'İş Bankası Kültür Yayınları', logo: 'https://picsum.photos/seed/yayinevi6/400/400', desc: 'Hasan Âli Yücel Klasikleri ve çocuk edebiyatı serileriyle tanınan köklü kurum.', founded: '1938' },
];

export default function YayincilarPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Portreler', href: '/portreler' }, { label: 'Yayıncılar' }]} />
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Yayıncılar</h1>
      <p className="text-sm text-gray-500 mb-8">
        Türkiye&apos;nin önde gelen çocuk kitabı yayınevleri.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {yayincilar.map((y) => (
          <div key={y.name} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="relative aspect-square overflow-hidden">
              <Image src={y.logo} alt={y.name} fill className="object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 mb-1">{y.name}</h3>
              <p className="text-[11px] text-primary font-medium mb-2">Kuruluş: {y.founded}</p>
              <p className="text-xs text-gray-500">{y.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
