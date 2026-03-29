import Breadcrumb from '@/components/shared/Breadcrumb';
import { HiPuzzle, HiBookOpen, HiStar, HiLightBulb } from 'react-icons/hi';

const activities = [
  {
    icon: HiBookOpen,
    title: 'Hikaye Tamamlama',
    description: 'Yarım kalan hikayeyi sen tamamla! Hayal gücünü kullanarak hikayeye son ver.',
    color: 'bg-primary',
  },
  {
    icon: HiPuzzle,
    title: 'Karakter Bulmacası',
    description: 'Kitap kahramanlarını tanı! İpuçlarından karakterin kim olduğunu bul.',
    color: 'bg-purple-500',
  },
  {
    icon: HiStar,
    title: 'Kitap Yıldızları',
    description: 'Okuduğun kitapları puanla ve arkadaşlarınla paylaş.',
    color: 'bg-orange-500',
  },
  {
    icon: HiLightBulb,
    title: 'Okuma Maratonu',
    description: 'Bu ayki okuma hedefine ulaş! Her kitap seni bir adım öteye taşır.',
    color: 'bg-teal-500',
  },
];

export default function OkumaOyunuPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Okuma Oyunu' }]} />

      <div className="max-w-4xl pb-12">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-accent-red rounded-full flex items-center justify-center mx-auto mb-4">
            <HiPuzzle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Okuma Oyunu</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Okumayı sevdiren eğlenceli etkinlikler! Çocuklarınız kitaplarla oyun oynayarak okuma
            alışkanlığı kazansın.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group"
            >
              <div
                className={`w-12 h-12 ${activity.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <activity.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{activity.title}</h3>
              <p className="text-sm text-gray-500">{activity.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-accent-cyan rounded-xl p-8 text-center">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Yakında Daha Fazlası!</h2>
          <p className="text-sm text-gray-600">
            Yeni okuma oyunları ve etkinlikler hazırlanıyor. E-bültenimize kayıt olarak ilk siz
            haberdar olun.
          </p>
        </div>
      </div>
    </div>
  );
}
