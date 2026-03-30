/**
 * Seed script for populating Contentful with mock data for cocukyayini.
 *
 * Usage:
 *   CONTENTFUL_MANAGEMENT_TOKEN=<token> CONTENTFUL_SPACE_ID=<space> node scripts/seed-contentful.cjs
 *
 * Environment variables:
 *   CONTENTFUL_MANAGEMENT_TOKEN  - Contentful Management API token (required)
 *   CONTENTFUL_SPACE_ID          - Contentful space ID (falls back to default)
 */

const contentful = require('contentful-management');

const client = contentful.createClient(
  { accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN },
  {
    type: 'plain',
    defaults: {
      spaceId: process.env.CONTENTFUL_SPACE_ID || 'ysx9d9kfylsx',
      environmentId: 'master',
    },
  }
);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function textToRichText(text) {
  if (!text) {
    return {
      nodeType: 'document',
      data: {},
      content: [
        {
          nodeType: 'paragraph',
          data: {},
          content: [
            {
              nodeType: 'text',
              value: 'İçerik yakında eklenecektir.',
              marks: [],
              data: {},
            },
          ],
        },
      ],
    };
  }
  const paragraphs = text.split('\n\n');
  return {
    nodeType: 'document',
    data: {},
    content: paragraphs.map((p) => ({
      nodeType: 'paragraph',
      data: {},
      content: [{ nodeType: 'text', value: p, marks: [], data: {} }],
    })),
  };
}

function entryLink(entryId) {
  return { sys: { type: 'Link', linkType: 'Entry', id: entryId } };
}

function loc(value) {
  return { 'en-US': value };
}

async function createAndPublish(contentTypeId, fields) {
  const entry = await client.entry.create(
    { contentTypeId },
    { fields }
  );
  console.log(`  Created ${contentTypeId}: ${entry.sys.id}`);
  await delay(300);

  await client.entry.publish(
    { entryId: entry.sys.id },
    { sys: { version: entry.sys.version } }
  );
  console.log(`  Published ${contentTypeId}: ${entry.sys.id}`);
  await delay(300);

  return entry;
}

// ---------------------------------------------------------------------------
// Data definitions
// ---------------------------------------------------------------------------

const personsData = [
  {
    key: 'p1',
    name: 'Fatih Erdoğan',
    slug: 'fatih-erdogan',
    role: ['yazar'],
    bio: "200'den fazla kitabıyla Türk çocuk edebiyatının en üretken ismi.",
  },
  {
    key: 'p2',
    name: 'Behiç Ak',
    slug: 'behic-ak',
    role: ['yazar', 'cizer'],
    bio: 'Yazar, çizer ve karikatürist. Çocuk edebiyatına mizahi bakış açısı kazandırdı.',
  },
  {
    key: 'p3',
    name: 'Mavisel Yener',
    slug: 'mavisel-yener',
    role: ['yazar'],
    bio: 'Sevilen çocuk ve gençlik edebiyatı yazarı, pek çok ödülün sahibi.',
  },
  {
    key: 'p4',
    name: 'Aytül Akal',
    slug: 'aytul-akal',
    role: ['yazar'],
    bio: 'Türk çocuk edebiyatının öncülerinden, okul öncesi ve ilkokul dönemine yönelik eserleriyle tanınır.',
  },
  {
    key: 'p5',
    name: 'Ayla Çınaroğlu',
    slug: 'ayla-cinaroglu',
    role: ['yazar'],
    bio: 'Çocuk ve gençlik romanları yazarı, doğa ve çevre temalı eserleriyle bilinir.',
  },
  {
    key: 'p6',
    name: 'Sevim Ak',
    slug: 'sevim-ak',
    role: ['yazar'],
    bio: 'Günlük yaşam hikayelerinden ilham alan, ödüllü çocuk kitabı yazarı.',
  },
  {
    key: 'p7',
    name: 'Gülten Dayıoğlu',
    slug: 'gulten-dayioglu',
    role: ['yazar'],
    bio: 'Türk çocuk edebiyatının efsanevi ismi, nesiller boyunca çocukları etkileyen eserlerin yazarı.',
  },
  {
    key: 'p8',
    name: 'Mustafa Ruhi Şirin',
    slug: 'mustafa-ruhi-sirin',
    role: ['yazar', 'akademisyen'],
    bio: 'Çocuk edebiyatı araştırmacısı, yazar ve editör.',
  },
];

const articleBodies = {
  a1: "İstanbul Çocuk Kitapları Fuarı bu yıl 15. kez kapılarını açtı. Haliç Kongre Merkezi'nde düzenlenen fuara yüzlerce yayınevi katılıyor. Fuar boyunca imza günleri, söyleşiler, atölyeler ve çocuklara yönelik pek çok etkinlik düzenlenecek.\n\n\"Bu yıl fuar rekor katılımla açıldı\" diyen organizasyon komitesi başkanı, fuar alanının genişletildiğini ve yeni bölümlerin eklendiğini belirtti. Çocuk edebiyatının en önemli buluşma noktalarından biri olan fuar, 5 Nisan'a kadar ziyarete açık olacak.\n\nFuarda özellikle \"İlk Kitabım\" köşesi büyük ilgi görüyor. 0-3 yaş grubuna yönelik kitapların sergilendiği bu bölüm, anne-babaların en çok ziyaret ettiği nokta oldu.",
  a2: "Fatih Erdoğan, 200'den fazla kitabıyla Türk çocuk edebiyatının en üretken isimlerinden biri. Kendisiyle İstanbul'daki çalışma ofisinde buluştuk. \"Çocuk edebiyatı, toplumun geleceğini şekillendiren en önemli alanlardan biri\" diyen Erdoğan, dijital çağda çocukların okuma alışkanlıklarının değiştiğini ama kitabın yerini hiçbir şeyin alamayacağını vurguladı.\n\n\"Tablet ve telefon ekranları çocukların dikkat süresini kısalttı, bu doğru. Ama iyi bir hikaye her zaman çocuğu yakalar\" diyen yazar, son yıllarda interaktif kitapların ve sesli kitapların yükselişine dikkat çekti. Erdoğan'a göre yazarların bu yeni formatlara uyum sağlaması, ancak kitabın büyüsünden ödün vermemesi gerekiyor.\n\nGelecek planlarını sorduğumuzda ise Erdoğan, uzun süredir üzerinde çalıştığı bir bilim kurgu serisinin ilk kitabını bu yaz okurlarıyla buluşturacağını müjdeledi. \"Çocuklara sadece masallar değil, bilimin hayal gücüyle birleştiği hikayeler de sunmalıyız. Yeni nesil meraklı, sorgulayan ve cesur karakterlere ihtiyaç duyuyor\" dedi.",
};

const articlesData = [
  {
    key: 'a1',
    title: 'İstanbul Çocuk Kitapları Fuarı Kapılarını Açtı',
    slug: 'istanbul-cocuk-kitaplari-fuari',
    articleType: 'haber',
    authorKey: 'p8',
    publishDate: '2026-03-28',
    category: 'Haberler',
    imageUrl: 'https://picsum.photos/seed/article0/800/450',
    excerpt: 'Bu yıl 15. kez düzenlenen İstanbul Çocuk Kitapları Fuarı, binlerce kitapseveri ağırlamaya başladı.',
    tags: ['fuar', 'istanbul', 'etkinlik'],
    isFeatured: true,
  },
  {
    key: 'a2',
    title: 'Fatih Erdoğan ile Çocuk Edebiyatının Geleceği Üzerine',
    slug: 'fatih-erdogan-soylesi',
    articleType: 'soylesi',
    authorKey: 'p1',
    publishDate: '2026-03-25',
    category: 'Söyleşiler',
    imageUrl: 'https://picsum.photos/seed/article1/800/450',
    excerpt: 'Usta yazar Fatih Erdoğan, çocuk edebiyatının bugünü ve yarını hakkında samimi açıklamalarda bulundu.',
    tags: ['soylesi', 'fatih-erdogan'],
    isFeatured: true,
  },
  {
    key: 'a3',
    title: 'En-Gerekli Köşe: Çocuklara Kitap Seçerken',
    slug: 'en-gerekli-kose-kitap-secerken',
    articleType: 'kose-yazisi',
    authorKey: 'p1',
    publishDate: '2026-03-22',
    category: 'Köşe Yazıları',
    imageUrl: 'https://picsum.photos/seed/article2/800/450',
    excerpt: 'Fatih Erdoğan, çocuklara doğru kitabı seçmenin inceliklerini anlatıyor.',
    tags: ['kose-yazisi', 'kitap-secimi'],
    isFeatured: false,
  },
  {
    key: 'a4',
    title: '2026 Yılının En Çok Okunan Çocuk Kitapları',
    slug: '2026-en-cok-okunan',
    articleType: 'haber',
    authorKey: 'p8',
    publishDate: '2026-03-20',
    category: 'Haberler',
    imageUrl: 'https://picsum.photos/seed/article3/800/450',
    excerpt: 'Yılın ilk çeyreğinde çocuk kitapları satış rekorları kırdı. İşte en çok okunan 10 kitap.',
    tags: ['liste', 'cok-okunan'],
    isFeatured: false,
  },
  {
    key: 'a5',
    title: 'Behiç Ak: Çizginin ve Sözün Ustası',
    slug: 'behic-ak-portre',
    articleType: 'portre',
    authorKey: 'p8',
    publishDate: '2026-03-18',
    category: 'Portreler',
    imageUrl: 'https://picsum.photos/seed/article4/800/450',
    excerpt: "Hem yazan hem çizen nadir yeteneklerden Behiç Ak'ın hayat hikayesi ve eserleri.",
    tags: ['portre', 'behic-ak'],
    isFeatured: false,
  },
  {
    key: 'a6',
    title: 'Okuma Alışkanlığını Kazandırmanın 10 Yolu',
    slug: 'okuma-aliskanligini-kazandirma',
    articleType: 'kose-yazisi',
    authorKey: 'p4',
    publishDate: '2026-03-15',
    category: 'Pusula',
    imageUrl: 'https://picsum.photos/seed/article5/800/450',
    excerpt: 'Çocuğunuza okuma sevgisi aşılamanın pratik ve eğlenceli yollarını keşfedin.',
    tags: ['okuma', 'aliskanlik', 'pusula'],
    isFeatured: false,
  },
  {
    key: 'a7',
    title: 'Dünya Çocuk Kitabı Günü Etkinlikleri',
    slug: 'dunya-cocuk-kitabi-gunu',
    articleType: 'haber',
    authorKey: 'p8',
    publishDate: '2026-03-12',
    category: 'Haberler',
    imageUrl: 'https://picsum.photos/seed/article6/800/450',
    excerpt: "2 Nisan Dünya Çocuk Kitabı Günü kapsamında Türkiye genelinde onlarca etkinlik düzenleniyor.",
    tags: ['etkinlik', 'dunya-cocuk-kitabi-gunu'],
    isFeatured: false,
  },
  {
    key: 'a8',
    title: 'Mavisel Yener ile Fantastik Edebiyat Söyleşisi',
    slug: 'mavisel-yener-soylesi',
    articleType: 'soylesi',
    authorKey: 'p3',
    publishDate: '2026-03-10',
    category: 'Söyleşiler',
    imageUrl: 'https://picsum.photos/seed/article7/800/450',
    excerpt: "Fantastik çocuk edebiyatının Türkiye'deki öncüsü Mavisel Yener ile keyifli bir sohbet.",
    tags: ['soylesi', 'mavisel-yener', 'fantastik'],
    isFeatured: false,
  },
  {
    key: 'a9',
    title: 'Çocuk Kütüphaneleri: Dünden Bugüne',
    slug: 'cocuk-kutuphaneleri-dosya',
    articleType: 'dosya',
    authorKey: 'p8',
    publishDate: '2026-03-08',
    category: 'Dosya/Gündem',
    imageUrl: 'https://picsum.photos/seed/article8/800/450',
    excerpt: "Türkiye'deki çocuk kütüphanelerinin tarihçesi ve günümüzdeki durumu hakkında kapsamlı bir dosya.",
    tags: ['kutuphane', 'dosya', 'tarih'],
    isFeatured: false,
  },
  {
    key: 'a10',
    title: 'İllüstrasyon Sanatı ve Çocuk Kitapları',
    slug: 'illustrasyon-sanati',
    articleType: 'haber',
    authorKey: 'p2',
    publishDate: '2026-03-05',
    category: 'Haberler',
    imageUrl: 'https://picsum.photos/seed/article9/800/450',
    excerpt: "Çocuk kitaplarında illüstrasyonun önemi ve Türk illüstratörlerin dünya sahnesindeki yeri.",
    tags: ['illustrasyon', 'sanat'],
    isFeatured: false,
  },
  {
    key: 'a11',
    title: 'Matraksiyon: Kitap Kurdu Olmanın Yan Etkileri',
    slug: 'matraksiyon-kitap-kurdu',
    articleType: 'kose-yazisi',
    authorKey: 'p2',
    publishDate: '2026-03-03',
    category: 'Köşe Yazıları',
    imageUrl: 'https://picsum.photos/seed/article10/800/450',
    excerpt: "Behiç Ak'ın kaleminden, kitap okuma tutkusunun komik ve sıra dışı halleri.",
    tags: ['matraksiyon', 'mizah'],
    isFeatured: false,
  },
  {
    key: 'a12',
    title: 'Anadolu\'dan Masallar: Unutulmaya Yüz Tutan Hikayeler',
    slug: 'anadolu-masallari',
    articleType: 'dosya',
    authorKey: 'p5',
    publishDate: '2026-03-01',
    category: 'Dosya/Gündem',
    imageUrl: 'https://picsum.photos/seed/article11/800/450',
    excerpt: "Anadolu'nun zengin masal geleneğinden derlenen ve yeniden yorumlanan hikayeler.",
    tags: ['masal', 'anadolu', 'kultur'],
    isFeatured: false,
  },
];

const booksData = [
  {
    key: 'b1',
    title: 'Pıtırcık Serisi - Yeni Maceralar',
    slug: 'pitircik-yeni-maceralar',
    authorKey: 'p1',
    publisher: 'Günışığı Kitaplığı',
    ageGroup: '6-8',
    category: 'yeni-cikan',
    coverUrl: 'https://picsum.photos/seed/book0/300/450',
    isFeatured: true,
    tags: ['macera', 'seri'],
  },
  {
    key: 'b2',
    title: 'Güneşe Yolculuk',
    slug: 'gunese-yolculuk',
    authorKey: 'p2',
    publisher: 'Can Çocuk',
    ageGroup: '8-12',
    category: 'basucu',
    coverUrl: 'https://picsum.photos/seed/book1/300/450',
    isFeatured: true,
    tags: ['bilim-kurgu', 'macera'],
  },
  {
    key: 'b3',
    title: 'Ormanın Şarkısı',
    slug: 'ormanin-sarkisi',
    authorKey: 'p3',
    publisher: 'Tudem',
    ageGroup: '8-12',
    category: 'yeni-cikan',
    coverUrl: 'https://picsum.photos/seed/book2/300/450',
    isFeatured: false,
    tags: ['doga', 'fantastik'],
  },
  {
    key: 'b4',
    title: 'Minik Bulut',
    slug: 'minik-bulut',
    authorKey: 'p4',
    publisher: 'Yapı Kredi Yayınları',
    ageGroup: '3-6',
    category: 'yeni-cikan',
    coverUrl: 'https://picsum.photos/seed/book3/300/450',
    isFeatured: false,
    tags: ['resimli', 'okul-oncesi'],
  },
  {
    key: 'b5',
    title: 'Kitap Kurdu Kerem',
    slug: 'kitap-kurdu-kerem',
    authorKey: 'p6',
    publisher: 'Günışığı Kitaplığı',
    ageGroup: '6-8',
    category: 'cok-satan',
    coverUrl: 'https://picsum.photos/seed/book4/300/450',
    isFeatured: true,
    tags: ['okuma', 'macera'],
  },
  {
    key: 'b6',
    title: 'Denizin Altındaki Sır',
    slug: 'denizin-altindaki-sir',
    authorKey: 'p5',
    publisher: 'Can Çocuk',
    ageGroup: '8-12',
    category: 'yeni-cikan',
    coverUrl: 'https://picsum.photos/seed/book5/300/450',
    isFeatured: false,
    tags: ['deniz', 'gizem'],
  },
  {
    key: 'b7',
    title: 'Uçan Fil',
    slug: 'ucan-fil',
    authorKey: 'p2',
    publisher: 'Tudem',
    ageGroup: '3-6',
    category: 'basucu',
    coverUrl: 'https://picsum.photos/seed/book6/300/450',
    isFeatured: false,
    tags: ['mizah', 'resimli'],
  },
  {
    key: 'b8',
    title: 'Zaman Kapsülü',
    slug: 'zaman-kapsulu',
    authorKey: 'p3',
    publisher: 'Yapı Kredi Yayınları',
    ageGroup: '13+',
    category: 'yeni-cikan',
    coverUrl: 'https://picsum.photos/seed/book7/300/450',
    isFeatured: false,
    tags: ['bilim-kurgu', 'genclik'],
  },
  {
    key: 'b9',
    title: 'Kelebek Çiftliği',
    slug: 'kelebek-ciftligi',
    authorKey: 'p4',
    publisher: 'Günışığı Kitaplığı',
    ageGroup: '6-8',
    category: 'cok-satan',
    coverUrl: 'https://picsum.photos/seed/book8/300/450',
    isFeatured: false,
    tags: ['doga', 'hayvanlar'],
  },
  {
    key: 'b10',
    title: 'Masalların Masalı',
    slug: 'masallarin-masali',
    authorKey: 'p7',
    publisher: 'Altın Kitaplar',
    ageGroup: '6-8',
    category: 'basucu',
    coverUrl: 'https://picsum.photos/seed/book9/300/450',
    isFeatured: false,
    tags: ['masal', 'klasik'],
  },
  {
    key: 'b11',
    title: 'Robot Arkadaşım',
    slug: 'robot-arkadasim',
    authorKey: 'p6',
    publisher: 'Can Çocuk',
    ageGroup: '8-12',
    category: 'yeni-cikan',
    coverUrl: 'https://picsum.photos/seed/book10/300/450',
    isFeatured: false,
    tags: ['teknoloji', 'bilim-kurgu'],
  },
  {
    key: 'b12',
    title: 'İlk Harfler',
    slug: 'ilk-harfler',
    authorKey: 'p5',
    publisher: 'Tudem',
    ageGroup: '1-3',
    category: 'yeni-cikan',
    coverUrl: 'https://picsum.photos/seed/book11/300/450',
    isFeatured: false,
    tags: ['alfabe', 'bebek'],
  },
];

const eventsData = [
  {
    key: 'e1',
    title: 'İstanbul Çocuk Kitapları Fuarı 2026',
    slug: 'istanbul-cocuk-kitaplari-fuari-2026',
    date: '28 Mart - 5 Nisan 2026',
    location: 'Haliç Kongre Merkezi',
    city: 'İstanbul',
    eventType: 'fuar',
    imageUrl: 'https://picsum.photos/seed/event0/800/400',
    description: "Türkiye'nin en büyük çocuk kitapları fuarı bu yıl da kapılarını açıyor.",
  },
  {
    key: 'e2',
    title: 'Fatih Erdoğan İmza Günü',
    slug: 'fatih-erdogan-imza-gunu',
    date: '30 Mart 2026',
    location: 'D&R Cevahir AVM',
    city: 'İstanbul',
    eventType: 'imza-gunu',
    imageUrl: 'https://picsum.photos/seed/event1/800/400',
    description: 'Usta yazar Fatih Erdoğan okurlarıyla buluşuyor.',
  },
  {
    key: 'e3',
    title: 'Yaratıcı Yazarlık Atölyesi - Çocuklar İçin',
    slug: 'yaratici-yazarlik-atolyesi',
    date: '2 Nisan 2026',
    location: 'Kadıköy Belediyesi Kültür Merkezi',
    city: 'İstanbul',
    eventType: 'atolye',
    imageUrl: 'https://picsum.photos/seed/event2/800/400',
    description: '7-12 yaş çocuklar için yaratıcı yazarlık atölyesi.',
  },
  {
    key: 'e4',
    title: 'Ankara Çocuk Edebiyatı Günleri',
    slug: 'ankara-cocuk-edebiyati-gunleri',
    date: '10-12 Nisan 2026',
    location: 'CerModern',
    city: 'Ankara',
    eventType: 'fuar',
    imageUrl: 'https://picsum.photos/seed/event3/800/400',
    description: "Ankara'da üç gün sürecek çocuk edebiyatı festivali.",
  },
  {
    key: 'e5',
    title: 'Masal Okuma Saati',
    slug: 'masal-okuma-saati',
    date: '5 Nisan 2026',
    location: 'Beyoğlu Çocuk Kütüphanesi',
    city: 'İstanbul',
    eventType: 'okuma',
    imageUrl: 'https://picsum.photos/seed/event4/800/400',
    description: 'Her Cumartesi çocuklar için masal okuma etkinliği.',
  },
  {
    key: 'e6',
    title: 'İzmir Kitap Fuarı - Çocuk Bölümü',
    slug: 'izmir-kitap-fuari-cocuk',
    date: '15-20 Nisan 2026',
    location: 'Fuar İzmir',
    city: 'İzmir',
    eventType: 'fuar',
    imageUrl: 'https://picsum.photos/seed/event5/800/400',
    description: "İzmir Kitap Fuarı'nın çocuklara özel bölümü.",
  },
];

const videosData = [
  {
    key: 'v1',
    title: 'Fatih Erdoğan ile Söyleşi - Tam Versiyon',
    slug: 'fatih-erdogan-soylesi-video',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/video0/640/360',
    category: 'Söyleşiler',
    publishDate: '2026-03-25',
    description: 'Fatih Erdoğan ile çocuk edebiyatı üzerine kapsamlı söyleşi.',
  },
  {
    key: 'v2',
    title: 'Çocuk Kitapları Fuarı 2026 - Gün 1',
    slug: 'fuar-2026-gun-1',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/video1/640/360',
    category: 'Etkinlikler',
    publishDate: '2026-03-28',
  },
  {
    key: 'v3',
    title: 'Evde Kitap Okuma Saati Nasıl Yapılır?',
    slug: 'evde-kitap-okuma',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/video2/640/360',
    category: 'Pusula',
    publishDate: '2026-03-20',
  },
  {
    key: 'v4',
    title: 'Behiç Ak Atölyesi - Çiz ve Yaz',
    slug: 'behic-ak-atolyesi',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/video3/640/360',
    category: 'Atölyeler',
    publishDate: '2026-03-15',
  },
  {
    key: 'v5',
    title: 'Yılın En İyi Çocuk Kitapları - 2025',
    slug: 'yilin-en-iyi-2025',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/video4/640/360',
    category: 'Listeler',
    publishDate: '2026-03-10',
  },
  {
    key: 'v6',
    title: 'Çocuklara Kitap Sevdirmenin Sırları',
    slug: 'kitap-sevdirmenin-sirlari',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnailUrl: 'https://picsum.photos/seed/video5/640/360',
    category: 'Pusula',
    publishDate: '2026-03-05',
  },
];

const heroBannersData = [
  {
    key: 'h1',
    title: 'İstanbul Çocuk Kitapları Fuarı Başladı!',
    subtitle: '28 Mart - 5 Nisan 2026 | Haliç Kongre Merkezi',
    linkUrl: '/etkinlikler',
    imageUrl: 'https://picsum.photos/seed/hero0/1200/500',
    order: 1,
    isActive: true,
  },
  {
    key: 'h2',
    title: 'Fatih Erdoğan ile Özel Söyleşi',
    subtitle: 'Çocuk edebiyatının geleceği hakkında samimi bir sohbet',
    linkUrl: '/soylesiler/fatih-erdogan-soylesi',
    imageUrl: 'https://picsum.photos/seed/hero1/1200/500',
    order: 2,
    isActive: true,
  },
  {
    key: 'h3',
    title: 'Ayın Kitabı: Pıtırcık Yeni Maceralar',
    subtitle: 'Sevilen serinin yeni kitabı raflardaki yerini aldı',
    linkUrl: '/kitaplar/pitircik-yeni-maceralar',
    imageUrl: 'https://picsum.photos/seed/hero2/1200/500',
    order: 3,
    isActive: true,
  },
  {
    key: 'h4',
    title: 'Okuma Oyunu: Eğlenerek Oku!',
    subtitle: 'Çocuklarınız için hazırladığımız okuma etkinlikleri',
    linkUrl: '/okuma-oyunu',
    imageUrl: 'https://picsum.photos/seed/hero3/1200/500',
    order: 4,
    isActive: true,
  },
  {
    key: 'h5',
    title: '2026 En Çok Okunan Çocuk Kitapları',
    subtitle: 'İlk çeyrekte en çok satan 10 çocuk kitabı',
    linkUrl: '/haberler/2026-en-cok-okunan',
    imageUrl: 'https://picsum.photos/seed/hero4/1200/500',
    order: 5,
    isActive: true,
  },
  {
    key: 'h6',
    title: 'Dünya Çocuk Kitabı Günü Etkinlikleri',
    subtitle: "2 Nisan'a özel etkinlik takvimini keşfedin",
    linkUrl: '/etkinlikler',
    imageUrl: 'https://picsum.photos/seed/hero5/1200/500',
    order: 6,
    isActive: true,
  },
];

const weeklyHighlightsData = [
  {
    key: 'wh1',
    type: 'kitap-onerisi',
    title: 'Güneşe Yolculuk',
    subtitle: 'Ayın Kitap Önerisi',
    description: "Behiç Ak'ın bilim ve hayal gücünü birleştiren muhteşem eseri.",
    imageUrl: 'https://picsum.photos/seed/book1/300/450',
    period: 'Mart 2026',
    isActive: true,
  },
  {
    key: 'wh2',
    type: 'yazar',
    title: 'Mavisel Yener',
    subtitle: 'Ayın Yazarı',
    description: "Fantastik çocuk edebiyatının Türkiye'deki öncüsü.",
    imageUrl: 'https://picsum.photos/seed/author2/400/400',
    period: 'Mart 2026',
    isActive: true,
  },
  {
    key: 'wh3',
    type: 'yayinevi',
    title: 'Günışığı Kitaplığı',
    subtitle: 'Ayın Yayınevi',
    description: 'Çocuk edebiyatına adanmış, ödüllü yayınevi.',
    imageUrl: 'https://picsum.photos/seed/publisher0/400/400',
    period: 'Mart 2026',
    isActive: true,
  },
  {
    key: 'wh4',
    type: 'dergi',
    title: 'Meraklı Minik',
    subtitle: 'Ayın Çocuk Dergisi',
    description: 'Çocukların merakını besleyen bilim ve keşif dergisi.',
    imageUrl: 'https://picsum.photos/seed/magazine0/400/400',
    period: 'Mart 2026',
    isActive: true,
  },
];

// ---------------------------------------------------------------------------
// Main seed routine
// ---------------------------------------------------------------------------

async function seed() {
  console.log('=== Contentful Seed Script ===\n');

  if (!process.env.CONTENTFUL_MANAGEMENT_TOKEN) {
    console.error('ERROR: CONTENTFUL_MANAGEMENT_TOKEN environment variable is required.');
    process.exit(1);
  }

  // ------ 1. Persons ------
  console.log('--- Creating Persons ---');
  const personIdMap = {}; // key -> sys.id

  for (const p of personsData) {
    const entry = await createAndPublish('person', {
      name: loc(p.name),
      slug: loc(p.slug),
      role: loc(p.role),
      bio: loc(p.bio),
    });
    personIdMap[p.key] = entry.sys.id;
  }

  console.log('\nPerson ID map:', personIdMap);
  console.log('');

  // ------ 2. Articles ------
  console.log('--- Creating Articles ---');

  for (const a of articlesData) {
    const bodyText = articleBodies[a.key] || 'Bu içerik yakında güncellenecektir.';
    const fields = {
      title: loc(a.title),
      slug: loc(a.slug),
      articleType: loc(a.articleType),
      author: loc(entryLink(personIdMap[a.authorKey])),
      publishDate: loc(a.publishDate),
      category: loc(a.category),
      imageUrl: loc(a.imageUrl),
      excerpt: loc(a.excerpt),
      body: loc(textToRichText(bodyText)),
      tags: loc(a.tags),
      isFeatured: loc(a.isFeatured),
    };

    await createAndPublish('article', fields);
  }
  console.log('');

  // ------ 3. Books ------
  console.log('--- Creating Books ---');

  for (const b of booksData) {
    const fields = {
      title: loc(b.title),
      slug: loc(b.slug),
      author: loc(entryLink(personIdMap[b.authorKey])),
      publisher: loc(b.publisher),
      ageGroup: loc(b.ageGroup),
      category: loc(b.category),
      coverUrl: loc(b.coverUrl),
      isFeatured: loc(b.isFeatured),
      tags: loc(b.tags),
    };

    await createAndPublish('book', fields);
  }
  console.log('');

  // ------ 4. Events ------
  console.log('--- Creating Events ---');

  for (const e of eventsData) {
    const fields = {
      title: loc(e.title),
      slug: loc(e.slug),
      date: loc(e.date),
      location: loc(e.location),
      city: loc(e.city),
      eventType: loc(e.eventType),
      imageUrl: loc(e.imageUrl),
      description: loc(e.description),
    };

    await createAndPublish('event', fields);
  }
  console.log('');

  // ------ 5. Videos ------
  console.log('--- Creating Videos ---');

  for (const v of videosData) {
    const fields = {
      title: loc(v.title),
      slug: loc(v.slug),
      videoUrl: loc(v.videoUrl),
      thumbnailUrl: loc(v.thumbnailUrl),
      category: loc(v.category),
      publishDate: loc(v.publishDate),
    };
    if (v.description) {
      fields.description = loc(v.description);
    }

    await createAndPublish('videoContent', fields);
  }
  console.log('');

  // ------ 6. Hero Banners ------
  console.log('--- Creating Hero Banners ---');

  for (const h of heroBannersData) {
    const fields = {
      title: loc(h.title),
      subtitle: loc(h.subtitle),
      linkUrl: loc(h.linkUrl),
      imageUrl: loc(h.imageUrl),
      order: loc(h.order),
      isActive: loc(h.isActive),
    };

    await createAndPublish('heroBanner', fields);
  }
  console.log('');

  // ------ 7. Weekly Highlights ------
  console.log('--- Creating Weekly Highlights ---');

  for (const wh of weeklyHighlightsData) {
    const fields = {
      type: loc(wh.type),
      title: loc(wh.title),
      subtitle: loc(wh.subtitle),
      description: loc(wh.description),
      imageUrl: loc(wh.imageUrl),
      period: loc(wh.period),
      isActive: loc(wh.isActive),
    };

    await createAndPublish('weeklyHighlight', fields);
  }
  console.log('');

  // ------ Summary ------
  console.log('=== Seed Complete ===');
  console.log(`  Persons:            ${personsData.length}`);
  console.log(`  Articles:           ${articlesData.length}`);
  console.log(`  Books:              ${booksData.length}`);
  console.log(`  Events:             ${eventsData.length}`);
  console.log(`  Videos:             ${videosData.length}`);
  console.log(`  Hero Banners:       ${heroBannersData.length}`);
  console.log(`  Weekly Highlights:  ${weeklyHighlightsData.length}`);
  console.log(`  Total:              ${
    personsData.length +
    articlesData.length +
    booksData.length +
    eventsData.length +
    videosData.length +
    heroBannersData.length +
    weeklyHighlightsData.length
  }`);
}

seed().catch((err) => {
  console.error('Seed failed:', err);
  process.exit(1);
});
