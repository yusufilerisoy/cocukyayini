import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { getPersons } from '@/lib/contentful';

export default async function PortrelerPage() {
  const persons = await getPersons();
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Portreler' }]} />

      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Portreler</h1>
      <p className="text-sm text-gray-500 mb-8">
        Yazarlar, çizerler ve yayıncıların hayat hikayeleri.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pb-12">
        {persons.map((person) => (
          <Link
            key={person.id}
            href={`/portreler/${person.slug}`}
            className="group text-center"
          >
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-shadow mb-3">
              <Image
                src={person.photo}
                alt={person.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <h3 className="font-bold text-gray-800 text-sm group-hover:text-primary transition-colors">
              {person.name}
            </h3>
            <p className="text-[11px] text-gray-400 capitalize">{person.role.join(', ')}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
