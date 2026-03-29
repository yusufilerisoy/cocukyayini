import Image from 'next/image';
import Link from 'next/link';

interface NewsItem {
  id: string;
  title: string;
  slug: string;
  featuredImage: string;
  excerpt: string;
  publishDate: string;
  category: string;
  author: { name: string };
}

interface NewsGridProps {
  articles: NewsItem[];
  title?: string;
}

export default function NewsGrid({ articles, title = 'Haberler' }: NewsGridProps) {
  return (
    <section>
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-extrabold text-gray-900">{title}</h2>
        <Link href="/haberler" className="text-primary text-sm font-semibold hover:underline">
          Tümü &rarr;
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/haberler/${article.slug}`}
            className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={article.featuredImage}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                {article.category}
              </span>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors mb-1.5">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2 mb-2">{article.excerpt}</p>
              <div className="flex items-center justify-between text-[11px] text-gray-400">
                <span>{article.author.name}</span>
                <span>{article.publishDate}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
