import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
  title: string;
  slug: string;
  featuredImage: string;
  excerpt: string;
  publishDate: string;
  category: string;
  author: { name: string; photo: string };
  variant?: 'horizontal' | 'vertical';
}

export default function ArticleCard({
  title,
  slug,
  featuredImage,
  excerpt,
  publishDate,
  category,
  author,
  variant = 'vertical',
}: ArticleCardProps) {
  if (variant === 'horizontal') {
    return (
      <Link
        href={`/haberler/${slug}`}
        className="flex gap-4 bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
      >
        <div className="relative w-40 md:w-52 flex-shrink-0 overflow-hidden">
          <Image
            src={featuredImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            {category}
          </span>
        </div>
        <div className="py-3 pr-4 flex flex-col justify-center">
          <h3 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors mb-1.5">
            {title}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-2 mb-2">{excerpt}</p>
          <div className="flex items-center gap-2 text-[11px] text-gray-400">
            <span>{author.name}</span>
            <span>&middot;</span>
            <span>{publishDate}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/haberler/${slug}`}
      className="block bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={featuredImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          {category}
        </span>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-bold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors mb-1.5">
          {title}
        </h3>
        <p className="text-xs text-gray-500 line-clamp-2 mb-2">{excerpt}</p>
        <div className="flex items-center justify-between text-[11px] text-gray-400">
          <span>{author.name}</span>
          <span>{publishDate}</span>
        </div>
      </div>
    </Link>
  );
}
