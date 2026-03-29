// External placeholder images for realistic preview
const ph = {
  // Authors - portrait photos
  authors: [
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=400&h=400&fit=crop&crop=face',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  ],
  // Articles - children, books, education
  articles: [
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1491841573634-28140fc7eedc?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1526243741027-444d633d7365?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=800&h=450&fit=crop',
    'https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=800&h=450&fit=crop',
  ],
  // Books - colorful book covers
  books: [
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1553729459-afe8f2e2882d?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1509266272358-7701da638078?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop',
  ],
  // Heroes - wide cinematic images
  heroes: [
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&h=500&fit=crop',
    'https://images.unsplash.com/photo-1529473814998-077b4fec6770?w=1200&h=500&fit=crop',
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=1200&h=500&fit=crop',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=500&fit=crop',
    'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1200&h=500&fit=crop',
    'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=1200&h=500&fit=crop',
  ],
  // Events
  events: [
    'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=400&fit=crop',
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop',
  ],
  // Videos
  videos: [
    'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=640&h=360&fit=crop',
    'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=640&h=360&fit=crop',
    'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=640&h=360&fit=crop',
    'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=640&h=360&fit=crop',
    'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=640&h=360&fit=crop',
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=640&h=360&fit=crop',
  ],
};

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
    photo: ph.authors[0],
    bio: 'Türkiye\'nin en tanınmış çocuk kitabı yazarlarından. 200\'den fazla kitabı yayımlandı.',
    role: ['yazar'],
  },
  {
    id: 'p2', name: 'Behiç Ak', slug: 'behic-ak',
    photo: ph.authors[1],
    bio: 'Yazar, çizer ve karikatürist. Çocuk edebiyatına mizahi bakış açısıyla katkıda bulunuyor.',
    role: ['yazar', 'cizer'],
  },
  {
    id: 'p3', name: 'Mavisel Yener', slug: 'mavisel-yener',
    photo: ph.authors[2],
    bio: 'Çocuk ve gençlik edebiyatının sevilen ismi. Birçok ödüle sahip.',
    role: ['yazar'],
  },
  {
    id: 'p4', name: 'Aytül Akal', slug: 'aytul-akal',
    photo: ph.authors[3],
    bio: 'Türk çocuk edebiyatının öncü isimlerinden. Okul öncesi ve ilkokul yaş grubuna yönelik eserleriyle tanınır.',
    role: ['yazar'],
  },
  {
    id: 'p5', name: 'Ayla Çınaroğlu', slug: 'ayla-cinaroglu',
    photo: ph.authors[4],
    bio: 'Çocuk kitapları ve gençlik romanları yazarı. Doğa ve çevre temalı eserleriyle bilinir.',
    role: ['yazar'],
  },
  {
    id: 'p6', name: 'Sevim Ak', slug: 'sevim-ak',
    photo: ph.authors[5],
    bio: 'Çocuk edebiyatının ödüllü kalemi. Günlük yaşamdan ilham alan hikayeleriyle sevilen yazar.',
    role: ['yazar'],
  },
  {
    id: 'p7', name: 'Gülten Dayıoğlu', slug: 'gulten-dayioglu',
    photo: ph.authors[6],
    bio: 'Türk çocuk edebiyatının duayen ismi. Fadiş ve diğer eserleriyle nesilleri etkiledi.',
    role: ['yazar'],
  },
  {
    id: 'p8', name: 'Mustafa Ruhi Şirin', slug: 'mustafa-ruhi-sirin',
    photo: ph.authors[7],
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
    featuredImage: ph.articles[0],
    excerpt: 'Bu yıl 15. kez düzenlenen İstanbul Çocuk Kitapları Fuarı, binlerce kitapseveri ağırlamaya başladı.',
    body: '', tags: ['fuar', 'istanbul', 'etkinlik'], isFeatured: true, articleType: 'haber',
  },
  {
    id: 'a2', title: 'Fatih Erdoğan ile Çocuk Edebiyatının Geleceği Üzerine',
    slug: 'fatih-erdogan-soylesi', category: 'Söyleşiler',
    author: persons[0], publishDate: '25 Mart 2026',
    featuredImage: ph.articles[1],
    excerpt: 'Usta yazar Fatih Erdoğan, çocuk edebiyatının bugünü ve yarını hakkında samimi açıklamalarda bulundu.',
    body: '', tags: ['soylesi', 'fatih-erdogan'], isFeatured: true, articleType: 'soylesi',
  },
  {
    id: 'a3', title: 'En-Gerekli Köşe: Çocuklara Kitap Seçerken',
    slug: 'en-gerekli-kose-kitap-secerken', category: 'Köşe Yazıları',
    author: persons[0], publishDate: '22 Mart 2026',
    featuredImage: ph.articles[2],
    excerpt: 'Doğru kitabı doğru yaşta çocuğa vermek, okuma alışkanlığının temelini oluşturur.',
    body: '', tags: ['kose-yazisi', 'kitap-secimi'], isFeatured: false, articleType: 'kose-yazisi',
  },
  {
    id: 'a4', title: '2026 Yılının En Çok Okunan Çocuk Kitapları',
    slug: '2026-en-cok-okunan', category: 'Haberler',
    author: persons[7], publishDate: '20 Mart 2026',
    featuredImage: ph.articles[3],
    excerpt: 'Yılın ilk çeyreğinde çocuk kitapları satış rekorları kırdı. İşte en çok okunan 10 kitap.',
    body: '', tags: ['liste', 'cok-satanlar'], isFeatured: false, articleType: 'haber',
  },
  {
    id: 'a5', title: 'Behiç Ak: Çizginin ve Sözün Ustası',
    slug: 'behic-ak-portre', category: 'Portreler',
    author: persons[7], publishDate: '18 Mart 2026',
    featuredImage: ph.articles[4],
    excerpt: 'Hem yazan hem çizen nadir yeteneklerden Behiç Ak\'ın hayat hikayesi ve eserleri.',
    body: '', tags: ['portre', 'behic-ak'], isFeatured: false, articleType: 'portre',
  },
  {
    id: 'a6', title: 'Okuma Alışkanlığını Kazandırmanın 10 Yolu',
    slug: 'okuma-aliskanligini-kazandirma', category: 'Pusula',
    author: persons[3], publishDate: '15 Mart 2026',
    featuredImage: ph.articles[5],
    excerpt: 'Çocuğunuza okuma sevgisi aşılamanın pratik ve eğlenceli yollarını keşfedin.',
    body: '', tags: ['pusula', 'okuma-aliskanlik'], isFeatured: false, articleType: 'kose-yazisi',
  },
  {
    id: 'a7', title: 'Dünya Çocuk Kitabı Günü Etkinlikleri',
    slug: 'dunya-cocuk-kitabi-gunu', category: 'Haberler',
    author: persons[7], publishDate: '12 Mart 2026',
    featuredImage: ph.articles[6],
    excerpt: '2 Nisan Dünya Çocuk Kitabı Günü kapsamında Türkiye genelinde onlarca etkinlik düzenleniyor.',
    body: '', tags: ['etkinlik', 'dunya-cocuk-kitabi-gunu'], isFeatured: false, articleType: 'haber',
  },
  {
    id: 'a8', title: 'Mavisel Yener ile Fantastik Edebiyat Söyleşisi',
    slug: 'mavisel-yener-soylesi', category: 'Söyleşiler',
    author: persons[2], publishDate: '10 Mart 2026',
    featuredImage: ph.articles[7],
    excerpt: 'Fantastik çocuk edebiyatının Türkiye\'deki öncüsü Mavisel Yener ile keyifli bir sohbet.',
    body: '', tags: ['soylesi', 'fantastik'], isFeatured: false, articleType: 'soylesi',
  },
  {
    id: 'a9', title: 'Çocuk Kütüphaneleri: Dünden Bugüne',
    slug: 'cocuk-kutuphaneleri-dosya', category: 'Dosya/Gündem',
    author: persons[7], publishDate: '8 Mart 2026',
    featuredImage: ph.articles[8],
    excerpt: 'Türkiye\'deki çocuk kütüphanelerinin tarihçesi ve günümüzdeki durumu hakkında kapsamlı bir dosya.',
    body: '', tags: ['dosya', 'kutuphane'], isFeatured: false, articleType: 'dosya',
  },
  {
    id: 'a10', title: 'İllüstrasyon Sanatı ve Çocuk Kitapları',
    slug: 'illustrasyon-sanati', category: 'Haberler',
    author: persons[1], publishDate: '5 Mart 2026',
    featuredImage: ph.articles[9],
    excerpt: 'Çocuk kitaplarında illüstrasyonun önemi ve Türk illüstratörlerin dünya sahnesindeki yeri.',
    body: '', tags: ['illustrasyon', 'sanat'], isFeatured: false, articleType: 'haber',
  },
  {
    id: 'a11', title: 'Matraksiyon: Kitap Kurdu Olmanın Yan Etkileri',
    slug: 'matraksiyon-kitap-kurdu', category: 'Köşe Yazıları',
    author: persons[1], publishDate: '3 Mart 2026',
    featuredImage: ph.articles[10],
    excerpt: 'Kitap okumayı çok sevenler için mizahi bir bakış açısı. Dikkat: Kitap bağımlılığı bulaşıcıdır!',
    body: '', tags: ['mizah', 'matraksiyon'], isFeatured: false, articleType: 'kose-yazisi',
  },
  {
    id: 'a12', title: 'Anadolu\'dan Masallar: Unutulmaya Yüz Tutan Hikayeler',
    slug: 'anadolu-masallari', category: 'Dosya/Gündem',
    author: persons[4], publishDate: '1 Mart 2026',
    featuredImage: ph.articles[11],
    excerpt: 'Anadolu\'nun zengin masal geleneğinden derlenen ve yeniden yorumlanan hikayeler.',
    body: '', tags: ['masal', 'anadolu', 'kultur'], isFeatured: false, articleType: 'dosya',
  },
];

// --- BOOKS ---
export const books: Book[] = [
  {
    id: 'b1', title: 'Pıtırcık Serisi - Yeni Maceralar', slug: 'pitircik-yeni-maceralar',
    coverImage: ph.books[0], author: persons[0],
    publisher: 'Günışığı Kitaplığı', ageGroup: '6-8', category: 'yeni-cikan',
    description: 'Sevilen karakter Pıtırcık yeni maceralarla geri döndü!',
    tags: ['macera', 'seri'], isFeatured: true,
    buyLinks: { kitapyurdu: '#', bkmkitap: '#', idefix: '#' },
  },
  {
    id: 'b2', title: 'Güneşe Yolculuk', slug: 'gunese-yolculuk',
    coverImage: ph.books[1], author: persons[1],
    publisher: 'Can Çocuk', ageGroup: '8-12', category: 'basucu',
    description: 'Bilim ve hayal gücünü birleştiren muhteşem bir uzay macerası.',
    tags: ['bilim-kurgu', 'uzay'], isFeatured: true,
    buyLinks: { kitapyurdu: '#', bkmkitap: '#' },
  },
  {
    id: 'b3', title: 'Ormanın Şarkısı', slug: 'ormanin-sarkisi',
    coverImage: ph.books[2], author: persons[2],
    publisher: 'Tudem', ageGroup: '8-12', category: 'yeni-cikan',
    description: 'Doğanın sırlarını keşfeden bir çocuğun büyüleyici hikayesi.',
    tags: ['doga', 'macera'], isFeatured: false,
    buyLinks: { kitapyurdu: '#' },
  },
  {
    id: 'b4', title: 'Minik Bulut', slug: 'minik-bulut',
    coverImage: ph.books[3], author: persons[3],
    publisher: 'Yapı Kredi Yayınları', ageGroup: '3-6', category: 'yeni-cikan',
    description: 'Gökyüzünde maceraya çıkan minik bir bulutun sevimli hikayesi.',
    tags: ['resimli', 'okul-oncesi'], isFeatured: false,
    buyLinks: { kitapyurdu: '#', idefix: '#' },
  },
  {
    id: 'b5', title: 'Kitap Kurdu Kerem', slug: 'kitap-kurdu-kerem',
    coverImage: ph.books[4], author: persons[5],
    publisher: 'Günışığı Kitaplığı', ageGroup: '6-8', category: 'cok-satan',
    description: 'Okumayı seven bir çocuğun kitaplarla dolu dünyası.',
    tags: ['okuma', 'gunluk-yasam'], isFeatured: true,
    buyLinks: { kitapyurdu: '#', bkmkitap: '#', hepsiburada: '#' },
  },
  {
    id: 'b6', title: 'Denizin Altındaki Sır', slug: 'denizin-altindaki-sir',
    coverImage: ph.books[5], author: persons[4],
    publisher: 'Can Çocuk', ageGroup: '8-12', category: 'yeni-cikan',
    description: 'Ege kıyılarında geçen gizemli bir yaz macerası.',
    tags: ['gizem', 'macera', 'deniz'], isFeatured: false,
    buyLinks: { kitapyurdu: '#' },
  },
  {
    id: 'b7', title: 'Uçan Fil', slug: 'ucan-fil',
    coverImage: ph.books[6], author: persons[1],
    publisher: 'Tudem', ageGroup: '3-6', category: 'basucu',
    description: 'Uçmayı hayal eden bir filin komik ve düşündürücü hikayesi.',
    tags: ['mizah', 'hayvanlar'], isFeatured: false,
    buyLinks: { kitapyurdu: '#', bkmkitap: '#' },
  },
  {
    id: 'b8', title: 'Zaman Kapsülü', slug: 'zaman-kapsulu',
    coverImage: ph.books[7], author: persons[2],
    publisher: 'Yapı Kredi Yayınları', ageGroup: '13+', category: 'yeni-cikan',
    description: 'Geçmiş ve gelecek arasında sıkışan bir gencin heyecanlı hikayesi.',
    tags: ['bilim-kurgu', 'genclik'], isFeatured: false,
    buyLinks: { kitapyurdu: '#' },
  },
  {
    id: 'b9', title: 'Kelebek Çiftliği', slug: 'kelebek-ciftligi',
    coverImage: ph.books[8], author: persons[3],
    publisher: 'Günışığı Kitaplığı', ageGroup: '6-8', category: 'cok-satan',
    description: 'Doğayı ve kelebekleri keşfeden bir çocuğun hikayesi.',
    tags: ['doga', 'bilim'], isFeatured: false,
    buyLinks: { kitapyurdu: '#', idefix: '#' },
  },
  {
    id: 'b10', title: 'Masalların Masalı', slug: 'masallarin-masali',
    coverImage: ph.books[9], author: persons[6],
    publisher: 'Altın Kitaplar', ageGroup: '6-8', category: 'basucu',
    description: 'Anadolu masallarının modern yorumlarla yeniden anlatılması.',
    tags: ['masal', 'kultur'], isFeatured: false,
    buyLinks: { kitapyurdu: '#', bkmkitap: '#' },
  },
  {
    id: 'b11', title: 'Robot Arkadaşım', slug: 'robot-arkadasim',
    coverImage: ph.books[10], author: persons[5],
    publisher: 'Can Çocuk', ageGroup: '8-12', category: 'yeni-cikan',
    description: 'Yapay zeka ve dostluk üzerine düşündürücü bir hikaye.',
    tags: ['bilim-kurgu', 'teknoloji'], isFeatured: false,
    buyLinks: { kitapyurdu: '#' },
  },
  {
    id: 'b12', title: 'İlk Harfler', slug: 'ilk-harfler',
    coverImage: ph.books[11], author: persons[4],
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
    image: ph.events[0], eventType: 'fuar',
  },
  {
    id: 'e2', title: 'Fatih Erdoğan İmza Günü',
    slug: 'fatih-erdogan-imza-gunu', date: '30 Mart 2026',
    location: 'D&R Cevahir AVM', city: 'İstanbul',
    description: 'Sevilen yazar Fatih Erdoğan okurlarıyla buluşuyor.',
    image: ph.events[1], eventType: 'imza-gunu',
  },
  {
    id: 'e3', title: 'Yaratıcı Yazarlık Atölyesi - Çocuklar İçin',
    slug: 'yaratici-yazarlik-atolyesi', date: '2 Nisan 2026',
    location: 'Kadıköy Belediyesi Kültür Merkezi', city: 'İstanbul',
    description: '8-12 yaş arası çocuklar için yaratıcı yazarlık atölyesi.',
    image: ph.events[2], eventType: 'atolye',
  },
  {
    id: 'e4', title: 'Ankara Çocuk Edebiyatı Günleri',
    slug: 'ankara-cocuk-edebiyati-gunleri', date: '10 Nisan 2026', endDate: '12 Nisan 2026',
    location: 'CerModern', city: 'Ankara',
    description: 'Ankara\'da üç gün sürecek çocuk edebiyatı etkinlikleri.',
    image: ph.events[3], eventType: 'festival',
  },
  {
    id: 'e5', title: 'Masal Okuma Saati',
    slug: 'masal-okuma-saati', date: '5 Nisan 2026',
    location: 'Beyoğlu Çocuk Kütüphanesi', city: 'İstanbul',
    description: 'Her hafta cumartesi günleri düzenlenen masal okuma etkinliği.',
    image: ph.events[4], eventType: 'okuma',
  },
  {
    id: 'e6', title: 'İzmir Kitap Fuarı - Çocuk Bölümü',
    slug: 'izmir-kitap-fuari-cocuk', date: '15 Nisan 2026', endDate: '20 Nisan 2026',
    location: 'Fuar İzmir', city: 'İzmir',
    description: 'İzmir Kitap Fuarı\'nın çocuk edebiyatına ayrılmış özel bölümü.',
    image: ph.events[5], eventType: 'fuar',
  },
];

// --- VIDEOS ---
export const videos: Video[] = [
  {
    id: 'v1', title: 'Fatih Erdoğan ile Söyleşi - Tam Versiyon',
    slug: 'fatih-erdogan-soylesi-video', thumbnail: ph.videos[0],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Usta yazarla derinlemesine bir sohbet.', publishDate: '25 Mart 2026', category: 'Söyleşiler',
  },
  {
    id: 'v2', title: 'Çocuk Kitapları Fuarı 2026 - Gün 1',
    slug: 'fuar-2026-gun-1', thumbnail: ph.videos[1],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Fuarın açılış gününden izlenimler.', publishDate: '28 Mart 2026', category: 'Etkinlikler',
  },
  {
    id: 'v3', title: 'Evde Kitap Okuma Saati Nasıl Yapılır?',
    slug: 'evde-kitap-okuma', thumbnail: ph.videos[2],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Ailelere yönelik pratik öneriler.', publishDate: '20 Mart 2026', category: 'Pusula',
  },
  {
    id: 'v4', title: 'Behiç Ak Atölyesi - Çiz ve Yaz',
    slug: 'behic-ak-atolyesi', thumbnail: ph.videos[3],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Çizim ve yazarlık atölyesinden kareler.', publishDate: '15 Mart 2026', category: 'Atölyeler',
  },
  {
    id: 'v5', title: 'Yılın En İyi Çocuk Kitapları - 2025',
    slug: 'yilin-en-iyi-2025', thumbnail: ph.videos[4],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: '2025 yılının en beğenilen çocuk kitapları.', publishDate: '10 Mart 2026', category: 'Listeler',
  },
  {
    id: 'v6', title: 'Çocuklara Kitap Sevdirmenin Sırları',
    slug: 'kitap-sevdirmenin-sirlari', thumbnail: ph.videos[5],
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Pedagog ve yazarlardan tavsiyeler.', publishDate: '5 Mart 2026', category: 'Pusula',
  },
];

// --- HERO BANNERS ---
export const heroBanners: HeroBanner[] = [
  {
    id: 'h1', title: 'İstanbul Çocuk Kitapları Fuarı Başladı!',
    subtitle: '28 Mart - 5 Nisan 2026 | Haliç Kongre Merkezi',
    image: ph.heroes[0], linkUrl: '/etkinlikler',
  },
  {
    id: 'h2', title: 'Fatih Erdoğan ile Özel Söyleşi',
    subtitle: 'Çocuk edebiyatının geleceği hakkında samimi bir sohbet',
    image: ph.heroes[1], linkUrl: '/soyleşiler/fatih-erdogan-soylesi',
  },
  {
    id: 'h3', title: 'Ayın Kitabı: Pıtırcık Yeni Maceralar',
    subtitle: 'Sevilen serinin yeni kitabı raflardaki yerini aldı',
    image: ph.heroes[2], linkUrl: '/kitaplar/pitircik-yeni-maceralar',
  },
  {
    id: 'h4', title: 'Okuma Oyunu: Eğlenerek Oku!',
    subtitle: 'Çocuklarınız için hazırladığımız okuma etkinlikleri',
    image: ph.heroes[3], linkUrl: '/okuma-oyunu',
  },
  {
    id: 'h5', title: '2026 En Çok Okunan Çocuk Kitapları',
    subtitle: 'İlk çeyrekte en çok satan 10 çocuk kitabı',
    image: ph.heroes[4], linkUrl: '/haberler/2026-en-cok-okunan',
  },
  {
    id: 'h6', title: 'Dünya Çocuk Kitabı Günü Etkinlikleri',
    subtitle: '2 Nisan\'a özel etkinlik takvimini keşfedin',
    image: ph.heroes[5], linkUrl: '/etkinlikler',
  },
];

// --- WEEKLY HIGHLIGHTS ---
export const weeklyHighlights: WeeklyHighlightItem[] = [
  {
    id: 'wh1', type: 'kitap-onerisi', title: 'Güneşe Yolculuk',
    description: 'Behiç Ak\'ın bilim ve hayal gücünü birleştiren muhteşem eseri.',
    image: ph.books[1], period: 'Mart 2026',
  },
  {
    id: 'wh2', type: 'yazar', title: 'Mavisel Yener',
    description: 'Fantastik çocuk edebiyatının Türkiye\'deki öncüsü.',
    image: ph.authors[2], period: 'Mart 2026',
  },
  {
    id: 'wh3', type: 'yayinevi', title: 'Günışığı Kitaplığı',
    description: 'Çocuk edebiyatına adanmış, ödüllü yayınevi.',
    image: ph.books[0], period: 'Mart 2026',
  },
  {
    id: 'wh4', type: 'dergi', title: 'Meraklı Minik',
    description: 'Çocukların merakını besleyen bilim ve keşif dergisi.',
    image: ph.books[8], period: 'Mart 2026',
  },
];
