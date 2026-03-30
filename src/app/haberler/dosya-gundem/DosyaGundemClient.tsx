'use client';

import Breadcrumb from '@/components/shared/Breadcrumb';
import ArticleCard from '@/components/shared/ArticleCard';
import Sidebar from '@/components/shared/Sidebar';
import type { Article } from '@/lib/contentful';

export default function DosyaGundemClient({ articles }: { articles: Article[] }) {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb
        items={[
          { label: 'Haberler', href: '/haberler' },
          { label: 'Dosya / Gündem' },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-8 pb-12">
        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-6">
            Dosya / Gündem
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Çocuk edebiyatı ve yayıncılığı üzerine kapsamlı dosyalar ve gündem yazıları.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {articles.map((article) => (
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
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
