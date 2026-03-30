import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedArticle from "@/components/home/FeaturedArticle";
import BookGrid from "@/components/home/BookGrid";
import NewsGrid from "@/components/home/NewsGrid";
import WeeklyHighlight from "@/components/home/WeeklyHighlight";
import { VideoArchiveWidget, OkumaOyunuWidget } from "@/components/home/WidgetBoxes";
import { getHeroBanners, getArticles, getBooks, getWeeklyHighlights } from "@/lib/contentful";

export default async function Home() {
  const [heroBanners, articles, books, weeklyHighlights] = await Promise.all([
    getHeroBanners(),
    getArticles(),
    getBooks(),
    getWeeklyHighlights(),
  ]);

  const featuredArticle = articles.find((a) => a.isFeatured && a.articleType === "soylesi");
  const newsArticles = articles.filter((a) => a.articleType === "haber").slice(0, 4);
  const allArticles = articles.slice(0, 8);

  return (
    <div>
      {/* Hero Carousel */}
      <section className="container mx-auto px-4 pt-6">
        <HeroCarousel banners={heroBanners} />
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="container mx-auto px-4 py-8">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">Öne Çıkan Söyleşi</h2>
          <FeaturedArticle
            title={featuredArticle.title}
            excerpt={featuredArticle.excerpt}
            image={featuredArticle.featuredImage}
            author={{
              name: featuredArticle.author.name,
              photo: featuredArticle.author.photo,
            }}
            slug={featuredArticle.slug}
            category={featuredArticle.category}
            publishDate={featuredArticle.publishDate}
          />
        </section>
      )}

      {/* Book Grid */}
      <section className="container mx-auto px-4 py-6">
        <BookGrid books={books} title="Kitaplar" />
      </section>

      {/* Banner 02 */}
      <section className="bg-secondary py-4 my-6">
        <div className="container mx-auto px-4 text-center">
          <div className="border-2 border-dashed border-yellow-600/30 rounded-lg py-3">
            <span className="text-xs text-yellow-700/50 font-medium">BANNER ALANI</span>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="container mx-auto px-4 py-6">
        <NewsGrid articles={newsArticles} title="Son Haberler" />
      </section>

      {/* More Articles */}
      <section className="container mx-auto px-4 py-6">
        <NewsGrid articles={allArticles.slice(4, 8)} title="Yazılar & Söyleşiler" />
      </section>

      {/* Video Archive & Okuma Oyunu Widgets */}
      <section className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <VideoArchiveWidget />
          <OkumaOyunuWidget />
        </div>
      </section>

      {/* Weekly Highlights */}
      <section className="container mx-auto px-4 py-6">
        <WeeklyHighlight highlights={weeklyHighlights} />
      </section>
    </div>
  );
}
