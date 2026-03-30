const contentful = require('contentful-management');

const CMA_TOKEN = process.env.CONTENTFUL_MANAGEMENT_TOKEN;
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID || 'ysx9d9kfylsx';
const ENV_ID = 'master';

if (!CMA_TOKEN) {
  console.error('Error: Set CONTENTFUL_MANAGEMENT_TOKEN env variable');
  process.exit(1);
}

const client = contentful.createClient(
  { accessToken: CMA_TOKEN },
  { type: 'plain', defaults: { spaceId: SPACE_ID, environmentId: ENV_ID } }
);

const contentTypes = [
  {
    id: 'person',
    name: 'Person',
    description: 'Yazar, çizer, yayıncı',
    displayField: 'name',
    fields: [
      { id: 'name', name: 'Ad Soyad', type: 'Symbol', required: true },
      { id: 'slug', name: 'Slug', type: 'Symbol', required: true, validations: [{ unique: true }] },
      { id: 'photo', name: 'Fotoğraf', type: 'Link', linkType: 'Asset' },
      { id: 'bio', name: 'Biyografi', type: 'Text' },
      { id: 'role', name: 'Rol', type: 'Array', items: { type: 'Symbol', validations: [{ in: ['yazar', 'cizer', 'yayinci', 'akademisyen', 'diger'] }] } },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    description: 'Kategori / Bölüm',
    displayField: 'name',
    fields: [
      { id: 'name', name: 'Kategori Adı', type: 'Symbol', required: true },
      { id: 'slug', name: 'Slug', type: 'Symbol', required: true },
      { id: 'description', name: 'Açıklama', type: 'Text' },
      { id: 'order', name: 'Sıralama', type: 'Integer' },
      { id: 'parentCategory', name: 'Üst Kategori', type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['category'] }] },
    ],
  },
  {
    id: 'publisher',
    name: 'Publisher',
    description: 'Yayınevi',
    displayField: 'name',
    fields: [
      { id: 'name', name: 'Yayınevi Adı', type: 'Symbol', required: true },
      { id: 'slug', name: 'Slug', type: 'Symbol', required: true },
      { id: 'logo', name: 'Logo', type: 'Link', linkType: 'Asset' },
      { id: 'website', name: 'Web Sitesi', type: 'Symbol' },
      { id: 'description', name: 'Tanıtım', type: 'Text' },
    ],
  },
  {
    id: 'article',
    name: 'Article',
    description: 'Haber, söyleşi, köşe yazısı, dosya, portre',
    displayField: 'title',
    fields: [
      { id: 'title', name: 'Başlık', type: 'Symbol', required: true },
      { id: 'slug', name: 'Slug', type: 'Symbol', required: true, validations: [{ unique: true }] },
      { id: 'category', name: 'Kategori', type: 'Symbol' },
      { id: 'articleType', name: 'Makale Tipi', type: 'Symbol', validations: [{ in: ['haber', 'soylesi', 'kose-yazisi', 'dosya', 'portre'] }] },
      { id: 'author', name: 'Yazar', type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['person'] }] },
      { id: 'publishDate', name: 'Yayın Tarihi', type: 'Symbol' },
      { id: 'featuredImage', name: 'Kapak Görseli', type: 'Link', linkType: 'Asset' },
      { id: 'imageUrl', name: 'Görsel URL (fallback)', type: 'Symbol' },
      { id: 'excerpt', name: 'Özet', type: 'Text' },
      { id: 'body', name: 'İçerik', type: 'RichText' },
      { id: 'tags', name: 'Etiketler', type: 'Array', items: { type: 'Symbol' } },
      { id: 'isFeatured', name: 'Öne Çıkan', type: 'Boolean' },
    ],
  },
  {
    id: 'book',
    name: 'Book',
    description: 'Kitap',
    displayField: 'title',
    fields: [
      { id: 'title', name: 'Kitap Adı', type: 'Symbol', required: true },
      { id: 'slug', name: 'Slug', type: 'Symbol', required: true, validations: [{ unique: true }] },
      { id: 'coverImage', name: 'Kapak Görseli', type: 'Link', linkType: 'Asset' },
      { id: 'coverUrl', name: 'Kapak URL (fallback)', type: 'Symbol' },
      { id: 'author', name: 'Yazar', type: 'Link', linkType: 'Entry', validations: [{ linkContentType: ['person'] }] },
      { id: 'publisher', name: 'Yayınevi', type: 'Symbol' },
      { id: 'ageGroup', name: 'Yaş Grubu', type: 'Symbol', validations: [{ in: ['1-3', '3-6', '6-8', '8-12', '13+', 'aile', 'uzman'] }] },
      { id: 'category', name: 'Kategori', type: 'Symbol' },
      { id: 'description', name: 'Tanıtım', type: 'Text' },
      { id: 'tags', name: 'Etiketler', type: 'Array', items: { type: 'Symbol' } },
      { id: 'isFeatured', name: 'Öne Çıkan', type: 'Boolean' },
      { id: 'pageCount', name: 'Sayfa Sayısı', type: 'Integer' },
      { id: 'publishYear', name: 'Basım Yılı', type: 'Integer' },
      { id: 'isbn', name: 'ISBN', type: 'Symbol' },
    ],
  },
  {
    id: 'event',
    name: 'Event',
    description: 'Etkinlik',
    displayField: 'title',
    fields: [
      { id: 'title', name: 'Etkinlik Adı', type: 'Symbol', required: true },
      { id: 'slug', name: 'Slug', type: 'Symbol', required: true },
      { id: 'date', name: 'Tarih', type: 'Symbol' },
      { id: 'endDate', name: 'Bitiş Tarihi', type: 'Symbol' },
      { id: 'location', name: 'Mekan', type: 'Symbol' },
      { id: 'city', name: 'Şehir', type: 'Symbol' },
      { id: 'description', name: 'Açıklama', type: 'Text' },
      { id: 'image', name: 'Görsel', type: 'Link', linkType: 'Asset' },
      { id: 'imageUrl', name: 'Görsel URL (fallback)', type: 'Symbol' },
      { id: 'eventType', name: 'Etkinlik Tipi', type: 'Symbol', validations: [{ in: ['fuar', 'imza-gunu', 'soylesi', 'okuma', 'atolye', 'diger'] }] },
    ],
  },
  {
    id: 'videoContent',
    name: 'Video Content',
    description: 'Video İçerik',
    displayField: 'title',
    fields: [
      { id: 'title', name: 'Başlık', type: 'Symbol', required: true },
      { id: 'slug', name: 'Slug', type: 'Symbol', required: true },
      { id: 'videoUrl', name: 'Video URL', type: 'Symbol' },
      { id: 'thumbnail', name: 'Küçük Resim', type: 'Link', linkType: 'Asset' },
      { id: 'thumbnailUrl', name: 'Thumbnail URL (fallback)', type: 'Symbol' },
      { id: 'description', name: 'Açıklama', type: 'Text' },
      { id: 'category', name: 'Kategori', type: 'Symbol' },
      { id: 'publishDate', name: 'Tarih', type: 'Symbol' },
    ],
  },
  {
    id: 'heroBanner',
    name: 'Hero Banner',
    description: 'Ana Sayfa Slide Banner',
    displayField: 'title',
    fields: [
      { id: 'title', name: 'Başlık', type: 'Symbol', required: true },
      { id: 'subtitle', name: 'Alt Başlık', type: 'Symbol' },
      { id: 'image', name: 'Görsel', type: 'Link', linkType: 'Asset' },
      { id: 'imageUrl', name: 'Görsel URL (fallback)', type: 'Symbol' },
      { id: 'linkUrl', name: 'Hedef URL', type: 'Symbol' },
      { id: 'order', name: 'Sıralama', type: 'Integer' },
      { id: 'isActive', name: 'Aktif', type: 'Boolean' },
    ],
  },
  {
    id: 'advertisement',
    name: 'Advertisement',
    description: 'Reklam / Banner',
    displayField: 'name',
    fields: [
      { id: 'name', name: 'Banner Adı', type: 'Symbol', required: true },
      { id: 'position', name: 'Pozisyon', type: 'Symbol', validations: [{ in: ['logo-yani', 'orta', 'footer-ustu', 'sidebar', 'metin-sol'] }] },
      { id: 'image', name: 'Görsel', type: 'Link', linkType: 'Asset' },
      { id: 'imageUrl', name: 'Görsel URL (fallback)', type: 'Symbol' },
      { id: 'linkUrl', name: 'Hedef URL', type: 'Symbol' },
      { id: 'isActive', name: 'Aktif', type: 'Boolean' },
    ],
  },
  {
    id: 'weeklyHighlight',
    name: 'Weekly Highlight',
    description: 'Hafta/Ay Öne Çıkan',
    displayField: 'title',
    fields: [
      { id: 'type', name: 'Tip', type: 'Symbol', validations: [{ in: ['kitap-onerisi', 'yazar', 'cizer', 'yayinevi', 'dergi', 'sm-hesabi', 'unluve-kitap'] }] },
      { id: 'title', name: 'Başlık', type: 'Symbol', required: true },
      { id: 'subtitle', name: 'Alt Başlık', type: 'Symbol' },
      { id: 'description', name: 'Açıklama', type: 'Text' },
      { id: 'image', name: 'Görsel', type: 'Link', linkType: 'Asset' },
      { id: 'imageUrl', name: 'Görsel URL (fallback)', type: 'Symbol' },
      { id: 'period', name: 'Dönem', type: 'Symbol' },
      { id: 'isActive', name: 'Aktif', type: 'Boolean' },
    ],
  },
];

function buildFields(fields) {
  return fields.map((f) => {
    const field = { id: f.id, name: f.name, type: f.type, required: f.required || false, localized: false };
    if (f.type === 'Link') {
      field.linkType = f.linkType;
      if (f.validations) field.validations = f.validations;
    }
    if (f.type === 'Array') {
      field.items = f.items;
    }
    if (f.type === 'Symbol' && f.validations) {
      field.validations = f.validations;
    }
    return field;
  });
}

async function main() {
  console.log('Connected to Contentful space:', SPACE_ID);

  for (const ct of contentTypes) {
    try {
      console.log(`Creating content type: ${ct.id}...`);
      await client.contentType.createWithId(
        { contentTypeId: ct.id },
        {
          name: ct.name,
          description: ct.description,
          displayField: ct.displayField,
          fields: buildFields(ct.fields),
        }
      );
      await client.contentType.publish({ contentTypeId: ct.id }, { sys: { version: 1 } });
      console.log(`  ✓ ${ct.id} created and published`);
    } catch (err) {
      const msg = err?.message || JSON.stringify(err);
      if (msg.includes('exist') || msg.includes('Exist')) {
        console.log(`  ⚠ ${ct.id} already exists, skipping`);
      } else {
        console.error(`  ✗ ${ct.id} error:`, msg);
      }
    }
    await new Promise((r) => setTimeout(r, 300));
  }

  console.log('\nDone! All content types created.');
}

main().catch(console.error);
