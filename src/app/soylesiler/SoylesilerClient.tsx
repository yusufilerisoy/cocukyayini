'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ArticleCard from '@/components/shared/ArticleCard';
import Sidebar from '@/components/shared/Sidebar';
import Pagination from '@/components/shared/Pagination';
import type { Article } from '@/lib/contentful';

export default function SoylesilerClient({ articles }: { articles: Article[] }) {
  const [page, setPage] = useState(1);

  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Söyleşiler' }]} />
      <div className="flex flex-col lg:flex-row gap-8 pb-12">
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-gray-900 mb-6">Söyleşiler</h1>
          <p className="text-sm text-gray-500 mb-6">
            Yerli ve yabancı yazarlar, çizerler ve yayıncılarla derinlemesine söyleşiler.
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
          <Pagination currentPage={page} totalPages={2} onPageChange={setPage} />
        </div>
        <div className="w-full lg:w-80 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
