// Seed only remaining entries (videos, heroBanners, weeklyHighlights)
const contentful = require('contentful-management');

const client = contentful.createClient(
  { accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN },
  { type: 'plain', defaults: { spaceId: process.env.CONTENTFUL_SPACE_ID || 'ysx9d9kfylsx', environmentId: 'master' } }
);

function delay(ms) { return new Promise(r => setTimeout(r, ms)); }
function loc(v) { return { 'en-US': v }; }

async function createAndPublish(contentTypeId, fields) {
  const entry = await client.entry.create({ contentTypeId }, { fields });
  console.log(`  Created ${contentTypeId}: ${entry.sys.id}`);
  await delay(300);
  await client.entry.publish({ entryId: entry.sys.id }, { sys: { version: entry.sys.version } });
  console.log(`  Published ${contentTypeId}: ${entry.sys.id}`);
  await delay(300);
}

async function run() {
  console.log('--- Creating Videos ---');
  const videos = [
    { title: 'Fatih Erdoğan ile Söyleşi - Tam Versiyon', slug: 'fatih-erdogan-soylesi-video', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnailUrl: 'https://picsum.photos/seed/video0/640/360', category: 'Söyleşiler', publishDate: '25 Mart 2026', description: 'Fatih Erdoğan ile çocuk edebiyatı üzerine kapsamlı söyleşi.' },
    { title: 'Çocuk Kitapları Fuarı 2026 - Gün 1', slug: 'fuar-2026-gun-1', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnailUrl: 'https://picsum.photos/seed/video1/640/360', category: 'Etkinlikler', publishDate: '28 Mart 2026', description: 'Fuar ilk gün izlenimleri.' },
    { title: 'Evde Kitap Okuma Saati Nasıl Yapılır?', slug: 'evde-kitap-okuma', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnailUrl: 'https://picsum.photos/seed/video2/640/360', category: 'Pusula', publishDate: '20 Mart 2026', description: 'Evde çocuklarla kitap okuma rehberi.' },
    { title: 'Behiç Ak Atölyesi - Çiz ve Yaz', slug: 'behic-ak-atolyesi', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnailUrl: 'https://picsum.photos/seed/video3/640/360', category: 'Atölyeler', publishDate: '15 Mart 2026', description: 'Behiç Ak ile çizim ve yazarlık atölyesi.' },
    { title: 'Yılın En İyi Çocuk Kitapları - 2025', slug: 'yilin-en-iyi-2025', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnailUrl: 'https://picsum.photos/seed/video4/640/360', category: 'Listeler', publishDate: '10 Mart 2026', description: '2025 yılının en iyi çocuk kitapları listesi.' },
    { title: 'Çocuklara Kitap Sevdirmenin Sırları', slug: 'kitap-sevdirmenin-sirlari', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', thumbnailUrl: 'https://picsum.photos/seed/video5/640/360', category: 'Pusula', publishDate: '5 Mart 2026', description: 'Pedagog ve yazarlardan tavsiyeler.' },
  ];
  for (const v of videos) {
    await createAndPublish('videoContent', {
      title: loc(v.title), slug: loc(v.slug), videoUrl: loc(v.videoUrl),
      thumbnailUrl: loc(v.thumbnailUrl), category: loc(v.category),
      publishDate: loc(v.publishDate), description: loc(v.description),
    });
  }

  console.log('--- Creating Hero Banners ---');
  const banners = [
    { title: 'İstanbul Çocuk Kitapları Fuarı Başladı!', subtitle: '28 Mart - 5 Nisan 2026 | Haliç Kongre Merkezi', linkUrl: '/etkinlikler', imageUrl: 'https://picsum.photos/seed/hero0/1200/500', order: 1 },
    { title: 'Fatih Erdoğan ile Özel Söyleşi', subtitle: 'Çocuk edebiyatının geleceği hakkında samimi bir sohbet', linkUrl: '/soylesiler/fatih-erdogan-soylesi', imageUrl: 'https://picsum.photos/seed/hero1/1200/500', order: 2 },
    { title: 'Ayın Kitabı: Pıtırcık Yeni Maceralar', subtitle: 'Sevilen serinin yeni kitabı raflardaki yerini aldı', linkUrl: '/kitaplar/pitircik-yeni-maceralar', imageUrl: 'https://picsum.photos/seed/hero2/1200/500', order: 3 },
    { title: 'Okuma Oyunu: Eğlenerek Oku!', subtitle: 'Çocuklarınız için hazırladığımız okuma etkinlikleri', linkUrl: '/okuma-oyunu', imageUrl: 'https://picsum.photos/seed/hero3/1200/500', order: 4 },
    { title: '2026 En Çok Okunan Çocuk Kitapları', subtitle: 'İlk çeyrekte en çok satan 10 çocuk kitabı', linkUrl: '/haberler/2026-en-cok-okunan', imageUrl: 'https://picsum.photos/seed/hero4/1200/500', order: 5 },
    { title: 'Dünya Çocuk Kitabı Günü Etkinlikleri', subtitle: '2 Nisan\'a özel etkinlik takvimini keşfedin', linkUrl: '/etkinlikler', imageUrl: 'https://picsum.photos/seed/hero5/1200/500', order: 6 },
  ];
  for (const h of banners) {
    await createAndPublish('heroBanner', {
      title: loc(h.title), subtitle: loc(h.subtitle), linkUrl: loc(h.linkUrl),
      imageUrl: loc(h.imageUrl), order: loc(h.order), isActive: loc(true),
    });
  }

  console.log('--- Creating Weekly Highlights ---');
  const highlights = [
    { type: 'kitap-onerisi', title: 'Güneşe Yolculuk', subtitle: 'Ayın Kitap Önerisi', description: 'Behiç Ak\'ın bilim ve hayal gücünü birleştiren muhteşem eseri.', imageUrl: 'https://picsum.photos/seed/book1/300/450', period: 'Mart 2026' },
    { type: 'yazar', title: 'Mavisel Yener', subtitle: 'Ayın Yazarı', description: 'Fantastik çocuk edebiyatının Türkiye\'deki öncüsü.', imageUrl: 'https://picsum.photos/seed/author2/400/400', period: 'Mart 2026' },
    { type: 'yayinevi', title: 'Günışığı Kitaplığı', subtitle: 'Ayın Yayınevi', description: 'Çocuk edebiyatına adanmış, ödüllü yayınevi.', imageUrl: 'https://picsum.photos/seed/publisher0/400/400', period: 'Mart 2026' },
    { type: 'dergi', title: 'Meraklı Minik', subtitle: 'Ayın Çocuk Dergisi', description: 'Çocukların merakını besleyen bilim ve keşif dergisi.', imageUrl: 'https://picsum.photos/seed/magazine0/400/400', period: 'Mart 2026' },
  ];
  for (const wh of highlights) {
    await createAndPublish('weeklyHighlight', {
      type: loc(wh.type), title: loc(wh.title), subtitle: loc(wh.subtitle),
      description: loc(wh.description), imageUrl: loc(wh.imageUrl),
      period: loc(wh.period), isActive: loc(true),
    });
  }

  console.log('\n=== Remaining entries seeded! ===');
}

run().catch(err => { console.error('Failed:', err.message || err); process.exit(1); });
