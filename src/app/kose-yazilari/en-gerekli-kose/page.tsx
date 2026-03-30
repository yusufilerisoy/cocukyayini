import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ArticleCard from '@/components/shared/ArticleCard';
import Sidebar from '@/components/shared/Sidebar';
import { articles, persons } from '@/data/mockData';

export default function EnGerekliKosePage() {
  const author = persons[0]; // Fatih Erdogan
  const authorArticles = articles.filter(
    (a) => a.articleType === 'kose-yazisi' && a.author.id === author.id
  );

  return (
    <div className="container mx-auto px-4">
      <Breadcrumb
        items={[
          { label: 'Köşe Yazıları', href: '/kose-yazilari' },
          { label: 'En-Gerekli Köşe' },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-8 pb-12">
        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-1">
            En-Gerekli Köşe
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Fatih Erdoğan&apos;ın köşe yazıları
          </p>

          {/* Author Card */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-white rounded-xl border border-gray-100 shadow-sm p-5 mb-8">
            <div className="relative w-28 h-28 flex-shrink-0 rounded-full overflow-hidden ring-4 ring-primary/20">
              <Image
                src="https://picsum.photos/seed/author0/400/400"
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-lg font-bold text-gray-900 mb-1">
                {author.name}
              </h2>
              <span className="inline-block text-[11px] font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full mb-2">
                Köşe Yazarı
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">
                {author.bio}
              </p>
            </div>
          </div>

          {/* Articles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {authorArticles.map((article) => (
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

          {authorArticles.length === 0 && (
            <p className="text-sm text-gray-400 text-center py-12">
              Henüz bu köşede yayımlanmış yazı bulunmuyor.
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
