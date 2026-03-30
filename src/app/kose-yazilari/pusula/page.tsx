import { HiBookOpen, HiClock, HiHeart } from 'react-icons/hi';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ArticleCard from '@/components/shared/ArticleCard';
import Sidebar from '@/components/shared/Sidebar';
import { articles } from '@/data/mockData';

const tips = [
  {
    icon: HiBookOpen,
    title: 'Yaşa Göre Kitap Seçimi',
    description:
      'Her yaş grubunun ilgi alanları ve okuma kapasitesi farklıdır. Çocuğunuzun gelişim dönemine uygun kitaplar seçerek okuma sevgisini destekleyin.',
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    iconColor: 'text-blue-500',
  },
  {
    icon: HiClock,
    title: 'Okuma Rutini Oluşturma',
    description:
      'Her gün belirli bir saatte birlikte okuma yaparak alışkanlık oluşturun. Yatmadan önce 15-20 dakikalık okuma ritüeli harika bir başlangıçtır.',
    color: 'bg-amber-50 border-amber-200 text-amber-700',
    iconColor: 'text-amber-500',
  },
  {
    icon: HiHeart,
    title: 'Kitapla Bağ Kurma',
    description:
      'Okuduğunuz kitapları birlikte konuşun, karakterler hakkında sorular sorun. Kitap, çocukla aranızda güçlü bir bağ kurma aracı olabilir.',
    color: 'bg-rose-50 border-rose-200 text-rose-700',
    iconColor: 'text-rose-500',
  },
];

export default function PusulaPage() {
  const pusulaArticles = articles.filter((a) => a.category === 'Pusula');

  return (
    <div className="container mx-auto px-4">
      <Breadcrumb
        items={[
          { label: 'Köşe Yazıları', href: '/kose-yazilari' },
          { label: 'Pusula' },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-8 pb-12">
        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-1">
            Pusula
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Okuma alışkanlığını kazandırma önerileri. Anne-baba, eğitimci ve
            pedagoglar için çocuk kitabı rehberi.
          </p>

          {/* Tip Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {tips.map((tip) => (
              <div
                key={tip.title}
                className={`rounded-xl border p-5 ${tip.color}`}
              >
                <tip.icon className={`w-8 h-8 mb-3 ${tip.iconColor}`} />
                <h3 className="text-sm font-bold mb-1.5">{tip.title}</h3>
                <p className="text-xs leading-relaxed opacity-80">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>

          {/* Articles */}
          <h2 className="text-lg font-bold text-gray-800 mb-4">Yazılar</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {pusulaArticles.map((article) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                slug={article.slug}
                featuredImage={article.featuredImage}
                excerpt={article.excerpt}
                publishDate={article.publishDate}
                category={article.category}
                author={{ name: article.author.name, photo: article.author.photo }}
              />
            ))}
          </div>

          {pusulaArticles.length === 0 && (
            <p className="text-sm text-gray-400 text-center py-12">
              Henüz bu kategoride yayımlanmış yazı bulunmuyor.
            </p>
          )}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
