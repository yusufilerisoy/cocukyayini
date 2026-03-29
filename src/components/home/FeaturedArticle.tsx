import Image from 'next/image';
import Link from 'next/link';

interface FeaturedArticleProps {
  title: string;
  excerpt: string;
  image: string;
  author: { name: string; photo: string };
  slug: string;
  category: string;
  publishDate: string;
}

export default function FeaturedArticle({
  title,
  excerpt,
  image,
  author,
  slug,
  category,
  publishDate,
}: FeaturedArticleProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <Link href={`/haberler/${slug}`} className="relative aspect-[4/3] md:aspect-auto overflow-hidden group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
          {category}
        </span>
      </Link>
      <div className="p-6 flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-3">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200">
            <Image src={author.photo} alt={author.name} fill className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">{author.name}</p>
            <p className="text-xs text-gray-400">{publishDate}</p>
          </div>
        </div>
        <Link href={`/haberler/${slug}`}>
          <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3 hover:text-primary transition-colors leading-tight">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
        <Link
          href={`/haberler/${slug}`}
          className="text-primary font-bold text-sm hover:underline inline-flex items-center gap-1"
        >
          Devamını Oku &rarr;
        </Link>
      </div>
    </div>
  );
}
