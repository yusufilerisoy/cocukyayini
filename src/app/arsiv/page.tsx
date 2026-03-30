import Link from 'next/link';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { articles, books } from '@/data/mockData';
import { HiCalendar, HiBookOpen, HiNewspaper } from 'react-icons/hi';

const months = [
  { label: 'Mart 2026', articleCount: 12, bookCount: 12 },
  { label: 'Şubat 2026', articleCount: 8, bookCount: 6 },
  { label: 'Ocak 2026', articleCount: 10, bookCount: 8 },
  { label: 'Aralık 2025', articleCount: 7, bookCount: 5 },
  { label: 'Kasım 2025', articleCount: 9, bookCount: 7 },
  { label: 'Ekim 2025', articleCount: 11, bookCount: 9 },
];

const categories = [
  { label: 'Haberler', count: articles.filter(a => a.articleType === 'haber').length, href: '/haberler', icon: HiNewspaper },
  { label: 'Söyleşiler', count: articles.filter(a => a.articleType === 'soylesi').length, href: '/soyleşiler', icon: HiNewspaper },
  { label: 'Köşe Yazıları', count: articles.filter(a => a.articleType === 'kose-yazisi').length, href: '/kose-yazilari', icon: HiNewspaper },
  { label: 'Portreler', count: articles.filter(a => a.articleType === 'portre').length, href: '/portreler', icon: HiNewspaper },
  { label: 'Dosya/Gündem', count: articles.filter(a => a.articleType === 'dosya').length, href: '/haberler/dosya-gundem', icon: HiNewspaper },
  { label: 'Kitaplar', count: books.length, href: '/kitaplar', icon: HiBookOpen },
];

export default function ArsivPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Arşiv' }]} />
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Arşiv</h1>
      <p className="text-sm text-gray-500 mb-8">Tüm içeriklere tarihe ve kategoriye göre ulaşın.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
        {/* Aylara Göre */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <HiCalendar className="w-5 h-5 text-primary" /> Aylara Göre
          </h2>
          <div className="space-y-2">
            {months.map((m) => (
              <div key={m.label} className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                <span className="font-semibold text-gray-800 text-sm">{m.label}</span>
                <div className="flex gap-3 text-[11px] text-gray-400">
                  <span>{m.articleCount} yazı</span>
                  <span>{m.bookCount} kitap</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kategorilere Göre */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <HiBookOpen className="w-5 h-5 text-primary" /> Kategorilere Göre
          </h2>
          <div className="space-y-2">
            {categories.map((c) => (
              <Link key={c.label} href={c.href} className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <c.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="font-semibold text-gray-800 text-sm group-hover:text-primary transition-colors">{c.label}</span>
                </div>
                <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2.5 py-1 rounded-full">{c.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
