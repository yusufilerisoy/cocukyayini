import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Sidebar from '@/components/shared/Sidebar';
import { getArticles, getArticleBySlug } from '@/lib/contentful';

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

const categoryPaths: Record<string, string> = {
  'Haberler': '/haberler',
  'Söyleşiler': '/soylesiler',
  'Köşe Yazıları': '/kose-yazilari',
  'Portreler': '/portreler',
  'Pusula': '/kose-yazilari/pusula',
  'Dosya/Gündem': '/haberler/dosya-gundem',
  'Matraksiyon': '/kose-yazilari/matraksiyon',
};

export default async function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const articles = await getArticles();
  const article = (await getArticleBySlug(params.slug)) || articles[0];
  const categoryHref = categoryPaths[article.category] || '/haberler';

  return (
    <div className="container mx-auto px-4">
      <Breadcrumb
        items={[
          { label: article.category, href: categoryHref },
          { label: article.title },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-8 pb-12">
        {/* Main Content */}
        <article className="flex-1">
          <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
            {article.category}
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
            {article.title}
          </h1>

          {/* Author & Date */}
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
              <Image
                src={article.author.photo}
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="font-bold text-gray-800">{article.author.name}</p>
              <p className="text-sm text-gray-400">{article.publishDate}</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image
              src={article.featuredImage}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Body */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed text-base font-medium">{article.excerpt}</p>
            {article.body ? (
              article.body.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-gray-600 leading-relaxed mt-4">{paragraph}</p>
              ))
            ) : (
              <p className="text-gray-600 leading-relaxed mt-4">
                Bu içerik yakında eklenecektir.
              </p>
            )}
            {/* Spot Text */}
            <blockquote className="border-l-4 border-primary bg-primary/5 p-4 my-6 rounded-r-lg">
              <p className="text-primary font-bold italic text-lg">
                &ldquo;Çocuklara okuma alışkanlığı kazandırmanın en etkili yolu, onlara doğru kitabı
                doğru zamanda vermektir.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-bold text-gray-600">Etiketler:</span>
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full hover:bg-primary/10 hover:text-primary cursor-pointer transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-sm font-bold text-gray-600">Paylaş:</span>
            {['Twitter', 'Facebook', 'WhatsApp'].map((platform) => (
              <button
                key={platform}
                className="bg-gray-100 text-gray-500 text-xs px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                {platform}
              </button>
            ))}
          </div>
        </article>

        {/* Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
