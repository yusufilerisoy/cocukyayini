import Image from 'next/image';

interface Highlight {
  id: string;
  type: string;
  title: string;
  description: string;
  image: string;
  period: string;
}

interface WeeklyHighlightProps {
  highlights: Highlight[];
}

const typeLabels: Record<string, string> = {
  'kitap-onerisi': 'Ayın Kitap Önerisi',
  'yazar': 'Ayın Yazarı',
  'cizer': 'Ayın Çizeri',
  'yayinevi': 'Ayın Yayınevi',
  'dergi': 'Ayın Çocuk Dergisi',
  'sm-hesabi': 'Ayın SM Hesabı',
};

const typeColors: Record<string, string> = {
  'kitap-onerisi': 'bg-primary',
  'yazar': 'bg-purple-600',
  'cizer': 'bg-orange-500',
  'yayinevi': 'bg-teal-600',
  'dergi': 'bg-blue-600',
  'sm-hesabi': 'bg-pink-500',
};

export default function WeeklyHighlight({ highlights }: WeeklyHighlightProps) {
  return (
    <section>
      <h2 className="text-xl font-extrabold text-gray-900 mb-5">Bu Ay</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image src={item.image} alt={item.title} fill className="object-cover" />
              <span
                className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-full ${
                  typeColors[item.type] || 'bg-gray-700'
                }`}
              >
                {typeLabels[item.type] || item.type}
              </span>
            </div>
            <div className="p-4">
              <h4 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h4>
              <p className="text-xs text-gray-500 line-clamp-2">{item.description}</p>
              <p className="text-[10px] text-gray-400 mt-2">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
