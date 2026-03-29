// Mock data for cocukyayini.com

export interface Person {
  id: string;
  name: string;
  slug: string;
  photo: string;
  bio: string;
  role: string[];
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: string;
  author: Person;
  publishDate: string;
  featuredImage: string;
  excerpt: string;
  body: string;
  tags: string[];
  isFeatured: boolean;
  articleType: 'haber' | 'soylesi' | 'kose-yazisi' | 'dosya' | 'portre';
}

export interface Book {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  author: Person;
  publisher: string;
  ageGroup: string;
  category: string;
  description: string;
  tags: string[];
  isFeatured: boolean;
  buyLinks: Record<string, string>;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  date: string;
  endDate?: string;
  location: string;
  city: string;
  description: string;
  image: string;
  eventType: string;
}

export interface Video {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
  publishDate: string;
  category: string;
}

export interface HeroBanner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  linkUrl: string;
}

export interface WeeklyHighlightItem {
  id: string;
  type: string;
  title: string;
  description: string;
  image: string;
  period: string;
}

// --- PERSONS ---
export const persons: Person[] = [
  {
    id: 'p1', name: 'Fatih Erdoğan', slug: 'fatih-erdogan',
    photo: '/images/placeholders/author-1.jpg.svg',
    bio: 'Türkiye\'nin en tanınmış çocuk kitabı yazarlarından. 200\'den fazla kitabı yayımlandı.',
    role: ['yazar'],
  },
  {
    id: 'p2', name: 'Behiç Ak', slug: 'behic-ak',
    photo: '/images/placeholders/author-2.jpg.svg',
    bio: 'Yazar, çizer ve karikatürist. Çocuk edebiyatına mizahi bakış açısıyla katkıda bulunuyor.',
    role: ['yazar', 'cizer'],
  },
  {
    id: 'p3', name: 'Mavisel Yener', slug: 'mavisel-yener',
    photo: '/images/placeholders/author-3.jpg.svg',
    bio: 'Çocuk ve gençlik edebiyatının sevilen ismi. Birçok ödüle sahip.',
    role: ['yazar'],
  },
  {
    id: 'p4', name: 'Aytül Akal', slug: 'aytul-akal',
    photo: '/images/placeholders/author-4.jpg.svg',
    bio: 'Türk çocuk edebiyatının öncü isimlerinden. Okul öncesi ve ilkokul yaş grubuna yönelik eserleriyle tanınır.',
    role: ['yazar'],
  },
  {
    id: 'p5', name: 'Ayla Çınaroğlu', slug: 'ayla-cinaroglu',
    photo: '/images/placeholders/author-5.jpg.svg',
    bio: 'Çocuk kitapları ve gençlik romanları yazarı. Doğa ve çevre temalı eserleriyle bilinir.',
    role: ['yazar'],
  },
  {
    id: 'p6', name: 'Sevim Ak', slug: 'sevim-ak',
    photo: '/images/placeholders/author-6.jpg.svg',
    bio: 'Çocuk edebiyatının ödüllü kalemi. Günlük yaşamdan ilham alan hikayeleriyle sevilen yazar.',
    role: ['yazar'],
  },
  {
    id: 'p7', name: 'Gülten Dayıoğlu', slug: 'gulten-dayioglu',
    photo: '/images/placeholders/author-7.jpg.svg',
    bio: 'Türk çocuk edebiyatının duayen ismi. Fadiş ve diğer eserleriyle nesilleri etkiledi.',
    role: ['yazar'],
  },
  {
    id: 'p8', name: 'Mustafa Ruhi Şirin', slug: 'mustafa-ruhi-sirin',
    photo: '/images/placeholders/author-8.jpg.svg',
    bio: 'Çocuk edebiyatı araştırmacısı, yazar ve editör. Çocuk yayıncılığının akademik çalışmalarıyla tanınır.',
    role: ['yazar', 'akademisyen'],
  },
];

// --- ARTICLES ---
export const articles: Article[] = [
  {
    id: 'a1', title: 'İstanbul Çocuk Kitapları Fuarı Kapılarını Açtı',
    slug: 'istanbul-cocuk-kitaplari-fuari', category: 'Haberler',
    author: persons[7], publishDate: '28 Mart 2026',
    featuredImage: '/images/placeholders/article-1.jpg.svg',
    excerpt: 'Bu yıl 15. kez düzenlenen İstanbul Çocuk Kitapları Fuarı, binlerce kitapseveri ağırlamaya başladı.',
    body: '', tags: ['fuar', 'istanbul', 'etkinlik'], isFeatured: true, articleType: 'haber',
  },
  {
    id: 'a2', title: 'Fatih Erdoğan ile Çocuk Edebiyatının Geleceği Üzerine',
    slug: 'fatih-erdogan-soylesi', category: 'Söyleşiler',
    author: persons[0], publishDate: '25 Mart 2026',
    featuredImage: '/images/placeholders/article-2.jpg.svg',
    excerpt: 'Usta yazar Fatih Erdoğan, çocuk edebiyatının bugünü ve yarını hakkında samimi açıklamalarda bulundu.',
    body: '', tags: ['soylesi', 'fatih-erdogan'], isFeatured: true, articleType: 'soylesi',
  },
  {
    id: 'a3', title: 'En-Gerekli Köşe: Çocuklara Kitap Seçerken',
    slug: 'en-gerekli-kose-kitap-secerken', category: 'Köşe Yazıları',
    author: persons[0], publishDate: '22 Mart 2026',
    featuredImage: '/images/placeholders/article-3.jpg.svg',
    excerpt: 'Doğru kitabı doğru yaşta çocuğa vermek, okuma alışkanlığının temelini oluşturur.',
    body: '', tags: ['kose-yazisi', 'kitap-secimi'], isFeatured: false, articleType: 'kose-yazisi',
  },
  {
    id: 'a4', title: '2026 Yılının En Çok Okunan Çocuk Kitapları',
    slug: '2026-en-cok-okunan', category: 'Haberler',
    author: persons[7], publishDate: '20 Mart 2026',
    featuredImage: '/images/placeholders/article-4.jpg.svg',
    excerpt: 'Yılın ilk çeyreğinde çocuk kitapları satış rekorları kırdı. İşte en çok okunan 10 kitap.',
    body: '', tags: ['liste', 'cok-satanlar'], isFeatured: false, articleType: 'haber',
  },
  {
    id: 'a5', title: 'Behiç Ak: Çizginin ve Sözün Ustası',
    slug: 'behic-ak-portre', category: 'Portreler',
    author: persons[7], publishDate: '18 Mart 2026',
    featuredImage: '/images/placeholders/article-5.jpg.svg',
    excerpt: 'Hem yazan hem çizen nadir yeteneklerden Behiç Ak\'ın hayat hikayesi ve eserleri.',
    body: '', tags: ['portre', 'behic-ak'], isFeatured: false, articleType: 'portre',
  },
  {
    id: 'a6', title: 'Okuma Alışkanlığını Kazandırmanın 10 Yolu',
    slug: 'okuma-aliskanligini-kazandirma', category: 'Pusula',
    author: persons[3], publishDate: '15 Mart 2026',
    featuredImage: '/images/placeholders/article-6.jpg.svg',
    excerpt: 'Çocuğunuza okuma sevgisi aşılamanın pratik ve eğlenceli yollarını keşfedin.',
    body: '', tags: ['pusula', 'okuma-aliskanlik'], isFeatured: false, articleType: 'kose-yazisi',
  },
  {
    id: 'a7', title: 'Dünya Çocuk Kitabı Günü Etkinlikleri',
    slug: 'dunya-cocuk-kitabi-gunu', category: 'Haberler',
    author: persons[7], publishDate: '12 Mart 2026',
    featuredImage: '/images/placeholders/article-7.jpg.svg',
    excerpt: '2 Nisan Dünya Çocuk Kitabı Günü kapsamında Türkiye genelinde onlarca etkinlik düzenleniyor.',
    body: '', tags: ['etkinlik', 'dunya-cocuk-kitabi-gunu'], isFeatured: false, articleType: 'haber',
  },
  {
    id: 'a8', title: 'Mavisel Yener ile Fantastik Edebiyat Söyleşisi',
    slug: 'mavisel-yener-soylesi', category: 'Söyleşiler',
    author: persons[2], publishDate: '10 Mart 2026',
    featuredImage: '/images/placeholders/article-8.jpg.svg',
    excerpt: 'Fantastik çocuk edebiyatının Türkiye\'deki öncüsü Mavisel Yener ile keyifli bir sohbet.',
    body: '', tags: ['soylesi', 'fantastik'], isFeatured: false, articleType: 'soylesi',
  },
  {
    id: 'a9', title: 'Çocuk Kütüphaneleri: Dünden Bugüne',
    slug: 'cocuk-kutuphaneleri-dosya', category: 'Dosya/Gündem',
    author: persons[7], publishDate: '8 Mart 2026',
    featuredImage: '/images/placeholders/article-9.jpg.svg',
    excerpt: 'Türkiye\'deki çocuk kütüphanelerinin tarihçesi ve günümüzdeki durumu hakkında kapsamlı bir dosya.',
    body: '', tags: ['dosya', 'kutuphane'], isFeatured: false, articleType: 'dosya',
  },
  {
    id: 'a10', title: 'İllüstrasyon Sanatı ve Çocuk Kitapları',
    slug: 'illustrasyon-sanati', category: 'Haberler',
    author: persons[1], publishDate: '5 Mart 2026',
    featuredImage: '/images/placeholders/article-10.jpg.svg',
    excerpt: 'Çocuk kitaplarında illüstrasyonun önemi ve Türk illüstratörlerin dünya sahnesindeki yeri.',
    body: '', tags: ['illustrasyon', 'sanat'], isFeatured: false, articleType: 'haber',
  },
  {
    id: 'a11', title: 'Matraksiyon: Kitap Kurdu Olmanın Yan Etkileri',
    slug: 'matraksiyon-kitap-kurdu', category: 'Köşe Yazıları',
    author: persons[1], publishDate: '3 Mart 2026',
    featuredImage: '/images/placeholders/article-11.jpg.svg',
    excerpt: 'Kitap okumayı çok sevenler için mizahi bir bakış açısı. Dikkat: Kitap bağımlılığı bulaşıcıdır!',
    body: '', tags: ['mizah', 'matraksiyon'], isFeatured: false, articleType: 'kose-yazisi',
  },
  {
    id: 'a12', title: 'Anadolu\'dan Masallar: Unutulmaya Yüz Tutan Hikayeler',
    slug: 'anadolu-masallari', category: 'Dosya/Gündem',
    author: persons[4], publishDate: '1 Mart 2026',
    featuredImage: '/images/placeholders/article-12.jpg.svg',
    excerpt: 'Anadolu\'nun zengin masal geleneğinden derlenen ve yeniden yorumlanan hikayeler.',
    body: '', tags: ['masal', 'anadolu', 'kultur'], isFeatured: false, articleType: 'dosya',
  },
];

// --- BOOKS ---
export const books: Book[] = [
  {
    id: 'b1', title: 'Pıtırcık Serisi - Yeni Maceralar', slug: 'pitircik-yeni-maceralar',
    coverImage: '/images/placeholders/book-1.jpg.svg', author: persons[0],
    publisher: 'Günışığı Kitaplığı', ageGroup: '6-8', category: 'yeni-cikan',
    description: 'Sevilen karakter Pıtırcık yeni maceralarla geri döndü!',
    tags: ['macera', 'seri'], isFeatured: true,
    buyLinks: { kitapyurdu: '#', bkmkitap: '#', idefix: '#' },
  },
  {
    id: 'b2', title: 'Güneşe Yolculuk', slug: 'gunese-yolculuk',
    coverImage: '/images/placeholders/book-2.jpg.svg', author: persons[1],
    publisher: 'Can Çocuk', ageGroup: '8-12', category: 'basucu',
    description: 'Bilim ve hayal gücünü birleştiren muhteşem bir uzay macerası.',
    tags: ['bilim-kurgu', 'uzay'], isFeatured: true,
    buyLinks: { kitapyurdu: '#', bkmkitap: '#' },
  },
  {
    id: 'b3', title: 'Ormanın Şarkısı', slug: 'ormanin-sarkisi',
    coverImage: '/images/placeholders/book-3.jpg.svg', author: persons[2],
    publisher: 'Tudem', ageGroup: '8-12', category: 'yeni-cikan',
    description: 'Doğanın sırlarını keşfeden bir çocuğun büyüleyici hikayesi.',
    tags: ['doga', 'macera'], isFeatured: false,
    buyLinks: { kitapyurdu: '#' },
  },
  {
    id: 'b4', title: 'Minik Bulut', slug: 'minik-bulut',
    coverImage: '/images/placeholders/book-4.jpg.svg', author: persons[3],
    publisher: 'Yapı Kredi Yayınları', ageGroup: '3-6', category: 'yeni-cikan',
    description: 'Gökyüzünde maceraya çıkan minik bir bulutun sevimli hikayesi.',
    tags: ['resimli', 'okul-oncesi'], isFeatured: false,
    buyLinks: { kitapyurdu: '#', idefix: '#' },
  },
  {
    id: 'b5', title: 'Kitap Kurdu Kerem', slug: 'kitap-kurdu-kerem',
    coverImage: '/images/placeholders/book-5.jpg.svg', author: persons[5],
    publisher: 'Günışığı Kitaplığı', ageGroup: '6-8', category: 'cok-satan',
    description: 'Okumayı seven bir çocuğun kitaplarla dolu dünyası.',
    tags: ['okuma', 'gunluk-yasam'], isFeatured: true,
    buyLinks: { kitapyurdu: '#', bkmkitap: '#', hepsiburada: '#' },
  },
  {
    id: 'b6', title: 'Denizin Altındaki Sır', slug: 'denizin-altindaki-sir',
    coverImage: '/images/placeholders/book-6.jpg.svg', author: persons[4],
    publisher: 'Can Çocuk', ageGroup: '8-12', category: 'yeni-cikan',
    description: 'Ege kıyılarında geçen gizemli bir yaz macerası.',
    tags: ['gizem', 'macera', 'deniz'], isFeatured: false,
    buyLinks: { kitapyurdu: '#' },
  },
  {
    id: 'b7', title: 'Uçan Fil', slug: 'ucan-fil',
    coverImage: '/images/placeholders/book-7.jpg.svg', author: persons[1],
    publisher: 'Tudem', ageGroup: '3-6', category: 'basucu',
    description: 'Uçmayı hayal eden bir filin komik ve düşündürücü hikayesi.',
    tags: ['mizah', 'hayvanlar'], isFeatured: false,
    buyLinks: { kitapyurdu: '#', bkmkitap: '#' },
  },
  {
    id: 'b8', title: 'Zaman Kapsülü', slug: 'zaman-kapsulu',
    coverImage: '/images/placeholders/book-8.jpg.svg', author: persons[2],
    publisher: 'Yapı Kredi Yayınları', ageGroup: '13+', category: 'yeni-cikan',
    description: 'Geçmiş ve gelecek arasında sıkışan bir gencin heyecanlı hikayesi.',
    tags: ['bilim-kurgu', 'genclik'], isFeatured: false,
    buyLinks: { kitapyurdu: '#' },
  },
  {
    id: 'b9', title: 'Kelebek Çiftliği', slug: 'kelebek-ciftligi',
    coverImage: '/images/placeholders/book-9.jpg.svg', author: persons[3],
    publisher: 'Günışığı Kitaplığı', ageGroup: '6-8', category: 'cok-satan',
    description: 'Doğayı ve kelebekleri keşfeden bir çocuğun hikayesi.',
    tags: ['doga', 'bilim'], isFeatured: false,
    buyLinks: { kitapyurdu: '#', idefix: '#' },
  },
  {
    id: 'b10', title: 'Masalların Masalı', slug: 'masallarin-masali',
    coverImage: '/images/placeholders/book-10.jpg.svg', author: persons[6],
    publisher: 'Altın Kitaplar', ageGroup: '6-8', category: 'basucu',
    description: 'Anadolu masallarının modern yorumlarla yeniden anlatılması.',
    tags: ['masal', 'kultur'], isFeatured: false,
    buyLinks: { kitapyurdu: '#', bkmkitap: '#' },
  },
  {
    id: 'b11', title: 'Robot Arkadaşım', slug: 'robot-arkadasim',
    coverImage: '/images/placeholders/book-11.jpg.svg', author: persons[5],
    publisher: 'Can Çocuk', ageGroup: '8-12', category: 'yeni-cikan',
    description: 'Yapay zeka ve dostluk üzerine düşündürücü bir hikaye.',
    tags: ['bilim-kurgu', 'teknoloji'], isFeatured: false,
    buyLinks: { kitapyurdu: '#' },
  },
  {
    id: 'b12', title: 'İlk Harfler', slug: 'ilk-harfler',
    coverImage: '/images/placeholders/book-12.jpg.svg', author: persons[4],
    publisher: 'Tudem', ageGroup: '1-3', category: 'yeni-cikan',
    description: 'Bebeklere yönelik renkli ve etkileşimli bir alfabe kitabı.',
    tags: ['alfabe', 'bebek'], isFeatured: false,
    buyLinks: { kitapyurdu: '#', bkmkitap: '#' },
  },
];

// --- EVENTS ---
export const events: Event[] = [
  {
    id: 'e1', title: 'İstanbul Çocuk Kitapları Fuarı 2026',
    slug: 'istanbul-cocuk-kitaplari-fuari-2026', date: '28 Mart 2026', endDate: '5 Nisan 2026',
    location: 'Haliç Kongre Merkezi', city: 'İstanbul',
    description: 'Türkiye\'nin en büyük çocuk kitapları fuarı bu yıl 15. kez kapılarını açıyor.',
    image: '/images/placeholders/event-1.jpg.svg', eventType: 'fuar',
  },
  {
    id: 'e2', title: 'Fatih Erdoğan İmza Günü',
    slug: 'fatih-erdogan-imza-gunu', date: '30 Mart 2026',
    location: 'D&R Cevahir AVM', city: 'İstanbul',
    description: 'Sevilen yazar Fatih Erdoğan okurlarıyla buluşuyor.',
    image: '/images/placeholders/event-2.jpg.svg', eventType: 'imza-gunu',
  },
  {
    id: 'e3', title: 'Yaratıcı Yazarlık Atölyesi - Çocuklar İçin',
    slug: 'yaratici-yazarlik-atolyesi', date: '2 Nisan 2026',
    location: 'Kadıköy Belediyesi Kültür Merkezi', city: 'İstanbul',
    description: '8-12 yaş arası çocuklar için yaratıcı yazarlık atölyesi.',
    image: '/images/placeholders/event-3.jpg.svg', eventType: 'atolye',
  },
  {
    id: 'e4', title: 'Ankara Çocuk Edebiyatı Günleri',
    slug: 'ankara-cocuk-edebiyati-gunleri', date: '10 Nisan 2026', endDate: '12 Nisan 2026',
    location: 'CerModern', city: 'Ankara',
    description: 'Ankara\'da üç gün sürecek çocuk edebiyatı etkinlikleri.',
    image: '/images/placeholders/event-4.jpg.svg', eventType: 'festival',
  },
  {
    id: 'e5', title: 'Masal Okuma Saati',
    slug: 'masal-okuma-saati', date: '5 Nisan 2026',
    location: 'Beyoğlu Çocuk Kütüphanesi', city: 'İstanbul',
    description: 'Her hafta cumartesi günleri düzenlenen masal okuma etkinliği.',
    image: '/images/placeholders/event-5.jpg.svg', eventType: 'okuma',
  },
  {
    id: 'e6', title: 'İzmir Kitap Fuarı - Çocuk Bölümü',
    slug: 'izmir-kitap-fuari-cocuk', date: '15 Nisan 2026', endDate: '20 Nisan 2026',
    location: 'Fuar İzmir', city: 'İzmir',
    description: 'İzmir Kitap Fuarı\'nın çocuk edebiyatına ayrılmış özel bölümü.',
    image: '/images/placeholders/event-6.jpg.svg', eventType: 'fuar',
  },
];

// --- VIDEOS ---
export const videos: Video[] = [
  {
    id: 'v1', title: 'Fatih Erdoğan ile Söyleşi - Tam Versiyon',
    slug: 'fatih-erdogan-soylesi-video', thumbnail: '/images/placeholders/video-1.jpg.svg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Usta yazarla derinlemesine bir sohbet.', publishDate: '25 Mart 2026', category: 'Söyleşiler',
  },
  {
    id: 'v2', title: 'Çocuk Kitapları Fuarı 2026 - Gün 1',
    slug: 'fuar-2026-gun-1', thumbnail: '/images/placeholders/video-2.jpg.svg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Fuarın açılış gününden izlenimler.', publishDate: '28 Mart 2026', category: 'Etkinlikler',
  },
  {
    id: 'v3', title: 'Evde Kitap Okuma Saati Nasıl Yapılır?',
    slug: 'evde-kitap-okuma', thumbnail: '/images/placeholders/video-3.jpg.svg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Ailelere yönelik pratik öneriler.', publishDate: '20 Mart 2026', category: 'Pusula',
  },
  {
    id: 'v4', title: 'Behiç Ak Atölyesi - Çiz ve Yaz',
    slug: 'behic-ak-atolyesi', thumbnail: '/images/placeholders/video-4.jpg.svg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Çizim ve yazarlık atölyesinden kareler.', publishDate: '15 Mart 2026', category: 'Atölyeler',
  },
  {
    id: 'v5', title: 'Yılın En İyi Çocuk Kitapları - 2025',
    slug: 'yilin-en-iyi-2025', thumbnail: '/images/placeholders/video-5.jpg.svg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: '2025 yılının en beğenilen çocuk kitapları.', publishDate: '10 Mart 2026', category: 'Listeler',
  },
  {
    id: 'v6', title: 'Çocuklara Kitap Sevdirmenin Sırları',
    slug: 'kitap-sevdirmenin-sirlari', thumbnail: '/images/placeholders/video-6.jpg.svg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Pedagog ve yazarlardan tavsiyeler.', publishDate: '5 Mart 2026', category: 'Pusula',
  },
];

// --- HERO BANNERS ---
export const heroBanners: HeroBanner[] = [
  {
    id: 'h1', title: 'İstanbul Çocuk Kitapları Fuarı Başladı!',
    subtitle: '28 Mart - 5 Nisan 2026 | Haliç Kongre Merkezi',
    image: '/images/placeholders/hero-1.jpg.svg', linkUrl: '/etkinlikler',
  },
  {
    id: 'h2', title: 'Fatih Erdoğan ile Özel Söyleşi',
    subtitle: 'Çocuk edebiyatının geleceği hakkında samimi bir sohbet',
    image: '/images/placeholders/hero-2.jpg.svg', linkUrl: '/soyleşiler/fatih-erdogan-soylesi',
  },
  {
    id: 'h3', title: 'Ayın Kitabı: Pıtırcık Yeni Maceralar',
    subtitle: 'Sevilen serinin yeni kitabı raflardaki yerini aldı',
    image: '/images/placeholders/hero-3.jpg.svg', linkUrl: '/kitaplar/pitircik-yeni-maceralar',
  },
  {
    id: 'h4', title: 'Okuma Oyunu: Eğlenerek Oku!',
    subtitle: 'Çocuklarınız için hazırladığımız okuma etkinlikleri',
    image: '/images/placeholders/hero-4.jpg.svg', linkUrl: '/okuma-oyunu',
  },
  {
    id: 'h5', title: '2026 En Çok Okunan Çocuk Kitapları',
    subtitle: 'İlk çeyrekte en çok satan 10 çocuk kitabı',
    image: '/images/placeholders/hero-5.jpg.svg', linkUrl: '/haberler/2026-en-cok-okunan',
  },
  {
    id: 'h6', title: 'Dünya Çocuk Kitabı Günü Etkinlikleri',
    subtitle: '2 Nisan\'a özel etkinlik takvimini keşfedin',
    image: '/images/placeholders/hero-6.jpg.svg', linkUrl: '/etkinlikler',
  },
];

// --- WEEKLY HIGHLIGHTS ---
export const weeklyHighlights: WeeklyHighlightItem[] = [
  {
    id: 'wh1', type: 'kitap-onerisi', title: 'Güneşe Yolculuk',
    description: 'Behiç Ak\'ın bilim ve hayal gücünü birleştiren muhteşem eseri.',
    image: '/images/placeholders/book-2.jpg.svg', period: 'Mart 2026',
  },
  {
    id: 'wh2', type: 'yazar', title: 'Mavisel Yener',
    description: 'Fantastik çocuk edebiyatının Türkiye\'deki öncüsü.',
    image: '/images/placeholders/author-3.jpg.svg', period: 'Mart 2026',
  },
  {
    id: 'wh3', type: 'yayinevi', title: 'Günışığı Kitaplığı',
    description: 'Çocuk edebiyatına adanmış, ödüllü yayınevi.',
    image: '/images/placeholders/book-1.jpg.svg', period: 'Mart 2026',
  },
  {
    id: 'wh4', type: 'dergi', title: 'Meraklı Minik',
    description: 'Çocukların merakını besleyen bilim ve keşif dergisi.',
    image: '/images/placeholders/book-9.jpg.svg', period: 'Mart 2026',
  },
];
