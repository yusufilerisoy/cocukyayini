import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { getPersons } from '@/lib/contentful';

export default async function KatkiVerenlerPage() {
  const persons = await getPersons();

  const editors = [
    { name: 'Fatih Erdoğan', role: 'Köşe Yazarı - En-Gerekli Köşe', photo: persons[0]?.photo || '' },
    { name: 'Mustafa Ruhi Şirin', role: 'Genel Yayın Yönetmeni', photo: persons[7]?.photo || '' },
  ];

  const contributors = [
    { name: 'Behiç Ak', role: 'Köşe Yazarı - Matraksiyon', photo: persons[1]?.photo || '' },
    { name: 'Mavisel Yener', role: 'Yazar / Söyleşi', photo: persons[2]?.photo || '' },
    { name: 'Aytül Akal', role: 'Pusula Bölümü', photo: persons[3]?.photo || '' },
    { name: 'Ayla Çınaroğlu', role: 'Yazar / Söyleşi', photo: persons[4]?.photo || '' },
    { name: 'Sevim Ak', role: 'Yazar / Söyleşi', photo: persons[5]?.photo || '' },
    { name: 'Gülten Dayıoğlu', role: 'Yazar / Söyleşi', photo: persons[6]?.photo || '' },
  ];
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Katkı Verenler' }]} />

      <div className="max-w-4xl pb-12">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Katkı Verenler</h1>
        <p className="text-sm text-gray-500 mb-8">
          cocukyayini.com&apos;a emek veren değerli isimler.
        </p>

        <h2 className="text-lg font-bold text-gray-900 mb-4">Editörler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          {editors.map((person) => (
            <div
              key={person.name}
              className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
            >
              <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image src={person.photo} alt={person.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{person.name}</h3>
                <p className="text-xs text-primary font-medium">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-bold text-gray-900 mb-4">Yazarlar & Katkıda Bulunanlar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {contributors.map((person) => (
            <div
              key={person.name}
              className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100"
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <Image src={person.photo} alt={person.name} fill className="object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-gray-800 text-sm">{person.name}</h3>
                <p className="text-[11px] text-gray-500">{person.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-accent-cyan rounded-xl p-6">
          <h3 className="font-bold text-gray-800 mb-2">Katkıda bulunmak ister misiniz?</h3>
          <p className="text-sm text-gray-600">
            Çocuk edebiyatı alanında yazı, söyleşi veya içerik katkısında bulunmak istiyorsanız
            bize{' '}
            <a href="mailto:info@cocukyayini.com" className="text-primary font-bold hover:underline">
              info@cocukyayini.com
            </a>{' '}
            adresinden ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
