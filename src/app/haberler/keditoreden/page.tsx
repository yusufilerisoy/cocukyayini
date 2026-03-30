'use client';

import Breadcrumb from '@/components/shared/Breadcrumb';
import ArticleCard from '@/components/shared/ArticleCard';
import Sidebar from '@/components/shared/Sidebar';
import { articles } from '@/data/mockData';

export default function KEditordenPage() {
  const editorPicks = articles.slice(0, 6);

  return (
    <div className="container mx-auto px-4">
      <Breadcrumb
        items={[
          { label: 'Haberler', href: '/haberler' },
          { label: "kEditör'den" },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-8 pb-12">
        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-6">
            kEditör&apos;den
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            Editörümüzün kaleminden çocuk edebiyatı dünyasına bakış.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {editorPicks.map((article) => (
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
