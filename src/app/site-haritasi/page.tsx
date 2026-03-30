import Link from 'next/link';
import Breadcrumb from '@/components/shared/Breadcrumb';

const sections = [
  { title: 'Ana Sayfa', links: [{ label: 'Ana Sayfa', href: '/' }] },
  { title: 'Haberler', links: [
    { label: 'Haberler', href: '/haberler' },
    { label: "kEditör'den", href: '/haberler/keditoreden' },
    { label: 'Dosya / Gündem', href: '/haberler/dosya-gundem' },
    { label: 'Çizgiyle', href: '/haberler/cizgiyle' },
    { label: 'Etkinlik Takvimi', href: '/etkinlikler' },
  ]},
  { title: 'Söyleşiler', links: [{ label: 'Söyleşiler', href: '/soylesiler' }] },
  { title: 'Kitaplar & Yayınlar', links: [
    { label: 'Tüm Kitaplar', href: '/kitaplar' },
    { label: 'Yeni Çıkanlar', href: '/kitaplar/yeni-cikanlar' },
    { label: 'Çok Satanlar', href: '/kitaplar/cok-satanlar' },
    { label: 'Başucu Kitapları', href: '/kitaplar/basucu' },
    { label: 'Yaş Grupları', href: '/kitaplar/yas-gruplari' },
    { label: 'Dergiler', href: '/kitaplar/dergiler' },
    { label: 'Aile Kitaplığı', href: '/kitaplar/aile-kitapligi' },
    { label: 'Kağıtsız Kitap', href: '/kitaplar/kagitsiz-kitap' },
  ]},
  { title: 'Köşe Yazıları', links: [
    { label: 'Köşe Yazıları', href: '/kose-yazilari' },
    { label: 'En-Gerekli Köşe', href: '/kose-yazilari/en-gerekli-kose' },
    { label: 'Pusula', href: '/kose-yazilari/pusula' },
    { label: 'Matraksiyon', href: '/kose-yazilari/matraksiyon' },
  ]},
  { title: 'Kitap Gezegeni', links: [
    { label: 'Kitap Gezegeni', href: '/kitap-gezegeni' },
    { label: 'Mekanlar', href: '/kitap-gezegeni/mekanlar' },
    { label: 'Dünyadan Kitap', href: '/kitap-gezegeni/dunyadan' },
  ]},
  { title: 'Diğer Bölümler', links: [
    { label: 'Okuma Oyunu', href: '/okuma-oyunu' },
    { label: 'Tadımlık', href: '/tadimlik' },
    { label: 'Video Arşiv', href: '/video-arsiv' },
  ]},
  { title: 'Portreler', links: [
    { label: 'Portreler', href: '/portreler' },
    { label: 'Yazarlar', href: '/portreler/yazarlar' },
    { label: 'Çizerler', href: '/portreler/cizerler' },
    { label: 'Yayıncılar', href: '/portreler/yayincilar' },
    { label: 'Kitap Kahramanları', href: '/portreler/kahramanlar' },
  ]},
  { title: 'Kurumsal', links: [
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Katkı Verenler', href: '/katki-verenler' },
    { label: 'Basında Biz', href: '/basinda-biz' },
    { label: 'İletişim', href: '/iletisim' },
    { label: 'Arşiv', href: '/arsiv' },
  ]},
];

export default function SiteHaritasiPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Site Haritası' }]} />
      <h1 className="text-2xl font-extrabold text-gray-900 mb-8">Site Haritası</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wider border-b border-primary/20 pb-2">{section.title}</h2>
            <ul className="space-y-1.5">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
