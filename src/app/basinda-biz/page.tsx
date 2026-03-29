import Breadcrumb from '@/components/shared/Breadcrumb';
import { HiExternalLink, HiNewspaper } from 'react-icons/hi';

const pressItems = [
  {
    id: 'p1',
    title: 'Çocuk Edebiyatının Yeni Dijital Evi: cocukyayini.com',
    source: 'Hürriyet Kitap Eki',
    date: '15 Mart 2026',
    excerpt: 'Türkiye\'nin çocuk yayıncılığına odaklanan yeni platformu, sektörde büyük ilgi gördü.',
  },
  {
    id: 'p2',
    title: 'Çocuk Kitapları İçin Rehber Platform',
    source: 'Cumhuriyet Kitap',
    date: '10 Mart 2026',
    excerpt: 'Anne babalar için çocuk kitabı seçiminde güvenilir bir kaynak olmayı hedefleyen site, içerik zenginliğiyle dikkat çekiyor.',
  },
  {
    id: 'p3',
    title: 'Yayıncılar Yeni Platformu Destekliyor',
    source: 'Yayıncılar Birliği Bülteni',
    date: '5 Mart 2026',
    excerpt: 'Türkiye Yayıncılar Birliği, çocuk yayıncılığını destekleyen yeni platformu olumlu karşıladı.',
  },
  {
    id: 'p4',
    title: 'Dijital Çağda Çocuk Edebiyatı',
    source: 'NTV Radyo',
    date: '28 Şubat 2026',
    excerpt: 'cocukyayini.com kurucusu ile dijital çağda çocuk edebiyatının geleceği üzerine söyleşi.',
  },
  {
    id: 'p5',
    title: 'Okuma Kültürüne Yeni Bir Soluk',
    source: 'Milliyet Sanat',
    date: '20 Şubat 2026',
    excerpt: 'Çocuklarda okuma alışkanlığını teşvik eden platform, eğitimcilerden tam not aldı.',
  },
];

export default function BasindaBizPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Basında Biz' }]} />

      <div className="max-w-3xl pb-12">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Basında Biz</h1>
        <p className="text-sm text-gray-500 mb-8">
          cocukyayini.com hakkında basında çıkan haberler ve söyleşiler.
        </p>

        <div className="space-y-4">
          {pressItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <HiNewspaper className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 group-hover:text-primary transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-2">{item.excerpt}</p>
                  <div className="flex items-center gap-3 text-[11px] text-gray-400">
                    <span className="font-semibold text-primary">{item.source}</span>
                    <span>&middot;</span>
                    <span>{item.date}</span>
                    <HiExternalLink className="w-3.5 h-3.5 ml-auto text-gray-300 group-hover:text-primary" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
