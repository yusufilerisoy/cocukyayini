import Image from 'next/image';
import Link from 'next/link';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { persons } from '@/data/mockData';

const cizerler = persons.filter((p) => p.role.includes('cizer'));

const ekstraCizerler = [
  { name: 'Feridun Oral', slug: '#', photo: 'https://picsum.photos/seed/cizer1/400/400', desc: 'Uluslararası ödüllü illüstratör. Bologna Çocuk Kitapları Fuarı\'nda Türkiye\'yi temsil etti.' },
  { name: 'Mustafa Delioğlu', slug: '#', photo: 'https://picsum.photos/seed/cizer2/400/400', desc: 'Çocuk kitapları illüstratörü ve seramik sanatçısı. Özgün çizim tarzıyla tanınır.' },
  { name: 'Serap Deliorman', slug: '#', photo: 'https://picsum.photos/seed/cizer3/400/400', desc: 'Renkli ve neşeli illüstrasyonlarıyla çocuk kitaplarına hayat veriyor.' },
];

export default function CizerlerPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Portreler', href: '/portreler' }, { label: 'Çizerler' }]} />
      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Çizerler</h1>
      <p className="text-sm text-gray-500 mb-8">
        Çocuk kitaplarına hayat veren illüstratörler ve çizerler.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pb-12">
        {cizerler.map((person) => (
          <Link key={person.id} href={`/portreler/${person.slug}`} className="group text-center">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md group-hover:shadow-xl transition-shadow mb-3">
              <Image src={person.photo} alt={person.name} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="font-bold text-gray-800 text-sm group-hover:text-primary transition-colors">{person.name}</h3>
            <p className="text-[11px] text-gray-400 capitalize">{person.role.join(', ')}</p>
          </Link>
        ))}
        {ekstraCizerler.map((person) => (
          <div key={person.name} className="text-center">
            <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md mb-3">
              <Image src={person.photo} alt={person.name} fill className="object-cover" />
            </div>
            <h3 className="font-bold text-gray-800 text-sm">{person.name}</h3>
            <p className="text-[11px] text-gray-400">{person.desc.substring(0, 60)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}
