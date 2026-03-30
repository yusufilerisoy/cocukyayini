import Image from 'next/image';
import Link from 'next/link';
import { HiEmojiHappy } from 'react-icons/hi';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Sidebar from '@/components/shared/Sidebar';
import { articles, persons } from '@/data/mockData';

const okumaFali = [
  {
    text: 'Bu hafta seni bekleyen kitap, seni kahkahadan kırıp geçirecek. Sayfaları hızlı çevir, sürpriz sonda!',
    color: 'bg-orange-100 border-orange-300 text-orange-800',
  },
  {
    text: 'Yakında bir karakter seninle konuşmaya başlayacak. Merak etme, bu normal - iyi bir kitap okuyorsun demektir!',
    color: 'bg-yellow-100 border-yellow-300 text-yellow-800',
  },
  {
    text: 'Bugün bir kitap açarsan, tam 42. sayfada hayatını değiştirecek bir cümleyle karşılaşacaksın. Denemeye değer!',
    color: 'bg-amber-100 border-amber-300 text-amber-800',
  },
];

export default function MatraksiyonPage() {
  const author = persons[1]; // Behic Ak
  const matraksiyonArticles = articles.filter(
    (a) => a.articleType === 'kose-yazisi' && a.author.id === author.id
  );

  return (
    <div className="container mx-auto px-4">
      <Breadcrumb
        items={[
          { label: 'Köşe Yazıları', href: '/kose-yazilari' },
          { label: 'Matraksiyon' },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-8 pb-12">
        {/* Main Content */}
        <div className="flex-1">
          {/* Header with playful style */}
          <div className="flex items-center gap-3 mb-1">
            <HiEmojiHappy className="w-8 h-8 text-orange-500" />
            <h1 className="text-2xl font-extrabold text-gray-900">
              Matraksiyon
            </h1>
          </div>
          <p className="text-sm text-gray-500 mb-8 pl-11">
            Mizah ve ironi ile çocuk edebiyatına bakış
          </p>

          {/* Articles with orange accent style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
            {matraksiyonArticles.map((article) => (
              <Link
                key={article.id}
                href={`/haberler/${article.slug}`}
                className="block bg-white rounded-lg overflow-hidden shadow-sm border-2 border-orange-100 hover:border-orange-300 hover:shadow-md transition-all group"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-2 left-2 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-3 border-t-2 border-orange-200">
                  <h3 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-orange-600 transition-colors mb-1.5">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2 mb-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-[11px] text-gray-400">
                    <span className="font-medium text-orange-500">
                      {article.author.name}
                    </span>
                    <span>{article.publishDate}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {matraksiyonArticles.length === 0 && (
            <p className="text-sm text-gray-400 text-center py-12">
              Henüz bu köşede yayımlanmış yazı bulunmuyor.
            </p>
          )}

          {/* Okuma Fali Section */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl" role="img" aria-label="kristal küre">
                🔮
              </span>
              <h2 className="text-lg font-bold text-gray-800">Okuma Falı</h2>
            </div>
            <p className="text-xs text-gray-500 mb-5">
              Bugün sana ne çıkacak? Hadi bir falına bakalım!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {okumaFali.map((fal, i) => (
                <div
                  key={i}
                  className={`rounded-xl border-2 p-5 ${fal.color}`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg" role="img" aria-label="kurabiye">
                      🥠
                    </span>
                    <span className="text-xs font-bold">Fal #{i + 1}</span>
                  </div>
                  <p className="text-sm leading-relaxed italic">
                    &ldquo;{fal.text}&rdquo;
                  </p>
                </div>
              ))}
            </div>
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
