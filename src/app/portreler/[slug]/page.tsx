import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';
import Sidebar from '@/components/shared/Sidebar';
import { getPersons, getPersonBySlug, getBooks } from '@/lib/contentful';

export async function generateStaticParams() {
  const persons = await getPersons();
  return persons.map((p) => ({ slug: p.slug }));
}

export default async function PersonDetailPage({ params }: { params: { slug: string } }) {
  const [persons, books] = await Promise.all([getPersons(), getBooks()]);
  const person = (await getPersonBySlug(params.slug)) || persons[0];
  const personBooks = books.filter((b) => b.author.id === person.id);

  return (
    <div className="container mx-auto px-4">
      <Breadcrumb
        items={[
          { label: 'Portreler', href: '/portreler' },
          { label: person.name },
        ]}
      />

      <div className="flex flex-col lg:flex-row gap-8 pb-12">
        <div className="flex-1">
          <div className="flex flex-col md:flex-row gap-6 mb-8">
            <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg flex-shrink-0 mx-auto md:mx-0">
              <Image src={person.photo} alt={person.name} fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                {person.name}
              </h1>
              <div className="flex gap-2 mb-4">
                {person.role.map((r) => (
                  <span
                    key={r}
                    className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full capitalize"
                  >
                    {r}
                  </span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed">{person.bio}</p>
            </div>
          </div>

          {personBooks.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Kitapları</h2>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
                {personBooks.map((book) => (
                  <a key={book.id} href={`/kitaplar/${book.slug}`} className="group">
                    <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-md group-hover:shadow-xl transition-shadow mb-1.5">
                      <Image
                        src={book.coverImage}
                        alt={book.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[11px] font-bold text-gray-700 line-clamp-2 group-hover:text-primary transition-colors">
                      {book.title}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="w-full lg:w-72 flex-shrink-0">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
