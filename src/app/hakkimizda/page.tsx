import Breadcrumb from '@/components/shared/Breadcrumb';

export default function HakkimızdaPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Hakkımızda' }]} />

      <div className="max-w-3xl pb-12">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-6">Hakkımızda</h1>

        <div className="prose max-w-none">
          <p className="text-gray-600 leading-relaxed text-base mb-4">
            <strong>cocukyayini.com</strong>, Türkiye&apos;nin çocuk yayıncılığı ve edebiyatına odaklanan
            bağımsız bir web platformudur. Amacımız, çocuk kitapları, yazarları, çizerleri ve
            yayınevleri hakkında güncel haberleri, derinlemesine söyleşileri ve nitelikli içerikleri
            okuyucularımızla buluşturmaktır.
          </p>
          <p className="text-gray-600 leading-relaxed text-base mb-4">
            Platformumuz; anne-babalar, eğitimciler, kütüphaneciler, yayıncılar ve çocuk edebiyatı
            severler için bir buluşma noktasıdır. Haberler, söyleşiler, köşe yazıları, kitap
            tanıtımları, etkinlik takvimleri ve daha pek çok içerikle çocuk okuma kültürünün
            gelişmesine katkıda bulunmayı hedefliyoruz.
          </p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">Misyonumuz</h2>
          <p className="text-gray-600 leading-relaxed text-base mb-4">
            Çocukların kitapla buluşmasını kolaylaştırmak, okuma alışkanlığını teşvik etmek ve
            çocuk yayıncılığı ekosistemini güçlendirmek.
          </p>

          <h2 className="text-lg font-bold text-gray-900 mt-8 mb-4">İletişim</h2>
          <p className="text-gray-600 leading-relaxed text-base">
            Sorularınız, önerileriniz veya işbirliği talepleriniz için{' '}
            <a href="mailto:info@cocukyayini.com" className="text-primary font-bold hover:underline">
              info@cocukyayini.com
            </a>{' '}
            adresinden bize ulaşabilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
