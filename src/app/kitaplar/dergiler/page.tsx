import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';

const magazines = [
  {
    id: 'd1',
    title: 'Merakl\u0131 Minik',
    image: 'https://picsum.photos/seed/dergi1/300/400',
    description:
      'T\u00dcB\u0130TAK taraf\u0131ndan yay\u0131mlanan, okul \u00f6ncesi \u00e7ocuklara y\u00f6nelik bilim ve do\u011fa dergisi. E\u011flenceli deneyler, hikayeler ve boyama sayfalar\u0131yla dolu.',
  },
  {
    id: 'd2',
    title: 'Bilim \u00c7ocuk',
    image: 'https://picsum.photos/seed/dergi2/300/400',
    description:
      'T\u00dcB\u0130TAK\'\u0131n ilkokul \u00e7a\u011f\u0131ndaki \u00e7ocuklara y\u00f6nelik pop\u00fcler bilim dergisi. Bilimsel i\u00e7erikler, projeler ve yar\u0131\u015fmalar\u0131yla \u00e7ocuklar\u0131n bilime ilgisini art\u0131r\u0131yor.',
  },
  {
    id: 'd3',
    title: 'Atlas Junior',
    image: 'https://picsum.photos/seed/dergi3/300/400',
    description:
      'Do\u011fa, co\u011frafya ve k\u00fclt\u00fcr konular\u0131nda zengin i\u00e7erikleriyle \u00e7ocuklar\u0131n d\u00fcnyay\u0131 ke\u015ffetmesini sa\u011flayan pop\u00fcler dergi.',
  },
  {
    id: 'd4',
    title: 'TRT \u00c7ocuk Dergisi',
    image: 'https://picsum.photos/seed/dergi4/300/400',
    description:
      'TRT\'nin \u00e7ocuklara y\u00f6nelik e\u011fitici ve e\u011flendirici dergisi. \u00c7izgi kahramanlar, oyunlar ve e\u011fitici i\u00e7eriklerle dolu.',
  },
];

export default function DergilerPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Kitaplar', href: '/kitaplar' }, { label: 'Dergiler' }]} />

      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Dergiler</h1>
      <p className="text-sm text-gray-500 mb-8">
        T\u00fcrkiye&apos;de \u00e7ocuklara y\u00f6nelik yay\u0131mlanan dergiler, k\u00fc\u00e7\u00fck okurlar\u0131n bilim, do\u011fa ve
        edebiyat d\u00fcnyas\u0131na a\u00e7\u0131lan kap\u0131lar\u0131d\u0131r. D\u00fczenli olarak yay\u0131mlanan bu dergiler, \u00e7ocuklar\u0131n
        okuma al\u0131\u015fkanl\u0131\u011f\u0131n\u0131 geli\u015ftirirken e\u011fitici i\u00e7eriklerle de onlar\u0131n ufkunu geni\u015fletir.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-12">
        {magazines.map((mag) => (
          <div key={mag.id} className="group relative">
            <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-md mb-3">
              <Image
                src={mag.image}
                alt={mag.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                Yak\u0131nda
              </div>
            </div>
            <h4 className="text-sm font-bold text-gray-800 mb-1">{mag.title}</h4>
            <p className="text-xs text-gray-500 leading-relaxed">{mag.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
