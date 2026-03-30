import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { getBooks } from '@/lib/contentful';

const readingTips = [
  {
    title: 'Her g\u00fcn 20 dakika birlikte okuyun',
    description:
      '\u00c7ocu\u011funuzla birlikte okuma zaman\u0131 ge\u00e7irmek, hem ba\u011flanman\u0131z\u0131 g\u00fc\u00e7lendirir hem de okuma sevgisini a\u015f\u0131lar.',
  },
  {
    title: 'Ya\u015f grubuna uygun kitaplar se\u00e7in',
    description:
      '\u00c7ocu\u011funuzun geli\u015fim d\u00fczeyine uygun kitaplar, okumay\u0131 kolayla\u015ft\u0131r\u0131r ve ilgiyi canl\u0131 tutar.',
  },
  {
    title: 'Kitap hakk\u0131nda konu\u015fun',
    description:
      'Okudu\u011funuz kitaplar hakk\u0131nda sorular sorun ve tart\u0131\u015fma ortam\u0131 yarat\u0131n. Bu, ele\u015ftirel d\u00fc\u015f\u00fcnme becerisini geli\u015ftirir.',
  },
  {
    title: 'Evde bir okuma k\u00f6\u015fesi olu\u015fturun',
    description:
      'Rahat ve iyi ayd\u0131nlat\u0131lm\u0131\u015f bir okuma k\u00f6\u015fesi, \u00e7ocu\u011funuzun kitaplarla ba\u015f ba\u015fa kalmas\u0131n\u0131 te\u015fvik eder.',
  },
  {
    title: '\u00d6rnek olun',
    description:
      '\u00c7ocuklar sizi okurken g\u00f6rs\u00fcn. Ebeveynlerin okuma al\u0131\u015fkanl\u0131\u011f\u0131, \u00e7ocuklar\u0131n okumaya bak\u0131\u015f\u0131n\u0131 do\u011frudan etkiler.',
  },
  {
    title: 'K\u00fct\u00fcphaneleri ve kitap fuarlar\u0131n\u0131 ziyaret edin',
    description:
      '\u00c7ocu\u011funuzu kitap d\u00fcnyas\u0131yla tan\u0131\u015ft\u0131rman\u0131n en g\u00fczel yollar\u0131ndan biri de k\u00fct\u00fcphaneler ve fuarlard\u0131r.',
  },
];

export default async function AileKitapligiPage() {
  const books = await getBooks();
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Kitaplar', href: '/kitaplar' }, { label: 'Aile Kitapl\u0131\u011f\u0131' }]} />

      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Aile Kitapl\u0131\u011f\u0131</h1>
      <p className="text-sm text-gray-500 mb-8">
        Anne-babalar ve e\u011fitimciler i\u00e7in \u00e7ocuk edebiyat\u0131 rehberi.
      </p>

      {/* Ebeveynler \u0130\u00e7in \u00d6neriler */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-primary/20 pb-2">
          Ebeveynler \u0130\u00e7in \u00d6neriler
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {books.map((book) => (
            <Link key={book.id} href={`/kitaplar/${book.slug}`} className="group">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow mb-2">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-primary/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {book.ageGroup}
                </div>
              </div>
              <h4 className="text-xs font-bold text-gray-800 line-clamp-2 group-hover:text-primary transition-colors">
                {book.title}
              </h4>
              <p className="text-[11px] text-gray-500">{book.author.name}</p>
              <p className="text-[10px] text-gray-400">{book.publisher}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Aileler \u0130\u00e7in Okuma \u0130pu\u00e7lar\u0131 */}
      <section className="mb-12">
        <h2 className="text-lg font-bold text-gray-800 mb-4 border-b-2 border-primary/20 pb-2">
          Aileler \u0130\u00e7in Okuma \u0130pu\u00e7lar\u0131
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {readingTips.map((tip, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-5 border border-primary/10"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <h3 className="text-sm font-bold text-gray-800">{tip.title}</h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed pl-11">{tip.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="pb-12" />
    </div>
  );
}
