// Placeholder images via picsum.photos (no CORS issues)
const ph = {
  authors: Array.from({length: 8}, (_, i) => `https://picsum.photos/seed/author${i}/400/400`),
  articles: Array.from({length: 12}, (_, i) => `https://picsum.photos/seed/article${i}/800/450`),
  books: Array.from({length: 12}, (_, i) => `https://picsum.photos/seed/book${i}/300/450`),
  heroes: Array.from({length: 6}, (_, i) => `https://picsum.photos/seed/hero${i}/1200/500`),
  events: Array.from({length: 6}, (_, i) => `https://picsum.photos/seed/event${i}/800/400`),
  videos: Array.from({length: 6}, (_, i) => `https://picsum.photos/seed/video${i}/640/360`),
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
    body: 'İstanbul Çocuk Kitapları Fuarı bu yıl 15. kez kapılarını kitapseverlere açtı. Haliç Kongre Merkezi\'nde 28 Mart - 5 Nisan tarihleri arasında gerçekleşecek fuara 120\'den fazla yayınevi katılıyor. Açılış töreninde konuşan organizasyon komitesi başkanı, fuarın her yıl büyüyerek Türkiye\'nin en kapsamlı çocuk kitapları etkinliğine dönüştüğünü vurguladı.\n\nFuar boyunca 200\'den fazla yazar ve çizerle imza günleri, atölye çalışmaları ve söyleşiler düzenlenecek. Özellikle hafta sonu programında yer alan masal anlatıcıları ve tiyatro gösterileri küçük ziyaretçiler için büyük heyecan yaratması bekleniyor. Geçen yıl 150 bin kişiyi ağırlayan fuarın bu yıl 200 bin ziyaretçi hedeflediği açıklandı.\n\nFuarın bu yılki teması "Hayallerin Gücü" olarak belirlendi. Tema kapsamında çocukların hayal dünyasını zenginleştiren kitaplar ön plana çıkarılırken, yerli ve yabancı illüstratörlerin eserlerinden oluşan özel bir sergi de ziyaretçilerin beğenisine sunulacak. Biletler fuarın resmi web sitesinden ve gişeden temin edilebilir.', tags: ['fuar', 'istanbul', 'etkinlik'], isFeatured: true, articleType: 'haber',
  },
  {
    id: 'a2', title: 'Fatih Erdoğan ile Çocuk Edebiyatının Geleceği Üzerine',
    slug: 'fatih-erdogan-soylesi', category: 'Söyleşiler',
    author: persons[0], publishDate: '25 Mart 2026',
    featuredImage: ph.articles[1],
    excerpt: 'Usta yazar Fatih Erdoğan, çocuk edebiyatının bugünü ve yarını hakkında samimi açıklamalarda bulundu.',
    body: 'Fatih Erdoğan, 200\'den fazla kitabıyla Türk çocuk edebiyatının en üretken isimlerinden biri. Kendisiyle İstanbul\'daki çalışma ofisinde buluştuk. "Çocuk edebiyatı, toplumun geleceğini şekillendiren en önemli alanlardan biri" diyen Erdoğan, dijital çağda çocukların okuma alışkanlıklarının değiştiğini ama kitabın yerini hiçbir şeyin alamayacağını vurguladı.\n\n"Tablet ve telefon ekranları çocukların dikkat süresini kısalttı, bu doğru. Ama iyi bir hikaye her zaman çocuğu yakalar" diyen yazar, son yıllarda interaktif kitapların ve sesli kitapların yükselişine dikkat çekti. Erdoğan\'a göre yazarların bu yeni formatlara uyum sağlaması, ancak kitabın büyüsünden ödün vermemesi gerekiyor.\n\nGelecek planlarını sorduğumuzda ise Erdoğan, uzun süredir üzerinde çalıştığı bir bilim kurgu serisinin ilk kitabını bu yaz okurlarıyla buluşturacağını müjdeledi. "Çocuklara sadece masallar değil, bilimin hayal gücüyle birleştiği hikayeler de sunmalıyız. Yeni nesil meraklı, sorgulayan ve cesur karakterlere ihtiyaç duyuyor" dedi.', tags: ['soylesi', 'fatih-erdogan'], isFeatured: true, articleType: 'soylesi',
  },
  {
    id: 'a3', title: 'En-Gerekli Köşe: Çocuklara Kitap Seçerken',
    slug: 'en-gerekli-kose-kitap-secerken', category: 'Köşe Yazıları',
    author: persons[0], publishDate: '22 Mart 2026',
    featuredImage: ph.articles[2],
    excerpt: 'Doğru kitabı doğru yaşta çocuğa vermek, okuma alışkanlığının temelini oluşturur.',
    body: 'Çocuklara kitap seçmek, göründüğü kadar basit bir iş değil. Yaş grubuna uygun olmayan bir kitap, çocuğun okuma isteğini köreltebilir ya da tam tersine, potansiyelinin altında kalabilir. 0-3 yaş grubunda dokunmatik, sert karton sayfalı ve büyük görselli kitaplar tercih edilmeli. 3-6 yaş arası için bol resimli, kısa cümleli ve tekrar içeren hikayeler idealdir. Bu dönemde hayvan karakterli masallar ve günlük yaşamdan kesitler sunan kitaplar çocuğun dünyasına en iyi hitap eden türlerdir.\n\n6-8 yaş grubu, okuma öğrenme sürecinde olduğu için büyük puntolu, kısa bölümlerden oluşan kitaplar öne çıkar. Bu yaş grubunda çocuğun kendi başına okuyabileceği düzeyde ama yine de eğlenceli hikayeler sunmak önemlidir. 8-12 yaş arası ise çocuk edebiyatının en verimli dönemidir: macera, gizem, fantastik ve bilim kurgu türleri bu yaş grubunun favorileridir.\n\nKitap seçerken çocuğun ilgi alanlarını gözetmek de en az yaş kadar önemlidir. Hayvanları seven bir çocuğa doğa kitapları, uzay meraklısına bilim kurgu, hayal gücü geniş olana fantastik edebiyat sunmak okuma isteğini artıracaktır. Unutmayalım ki her çocuk farklıdır ve en iyi kitap, çocuğun gözlerini parlatan kitaptır.', tags: ['kose-yazisi', 'kitap-secimi'], isFeatured: false, articleType: 'kose-yazisi',
  },
  {
    id: 'a4', title: '2026 Yılının En Çok Okunan Çocuk Kitapları',
    slug: '2026-en-cok-okunan', category: 'Haberler',
    author: persons[7], publishDate: '20 Mart 2026',
    featuredImage: ph.articles[3],
    excerpt: 'Yılın ilk çeyreğinde çocuk kitapları satış rekorları kırdı. İşte en çok okunan 10 kitap.',
    body: '2026 yılının ilk çeyreğinde çocuk kitapları satış rakamları geçen yılın aynı dönemine göre yüzde 25 artış gösterdi. Kitapçılar ve online platformlardan derlediğimiz verilere göre en çok satan çocuk kitapları listesinin başında Fatih Erdoğan\'ın "Pıtırcık Serisi - Yeni Maceralar" yer alıyor. Listeyi sırasıyla Behiç Ak\'ın "Güneşe Yolculuk", Mavisel Yener\'in "Ormanın Şarkısı" ve Sevim Ak\'ın "Kitap Kurdu Kerem" takip ediyor.\n\nListenin dikkat çekici özelliklerinden biri, yerli yazarların ilk 10\'da sekiz sırayı kaplaması. Bu durum Türk çocuk edebiyatının giderek güçlendiğinin en somut göstergesi. Özellikle 8-12 yaş grubuna yönelik macera ve fantastik türündeki kitaplar büyük ilgi görürken, okul öncesi yaş grubunda resimli kitaplar satış rekorları kırıyor.\n\nYayıncılar, bu artışın arkasında sosyal medyada büyüyen kitap öneri hesaplarının ve okullardaki okuma kampanyalarının etkisi olduğunu belirtiyor. Günışığı Kitaplığı, Can Çocuk ve Tudem en çok satan yayınevleri arasında öne çıkıyor. Listenin tamamına ve detaylı satış verilerine her ay güncellenen "Çok Satanlar" sayfamızdan ulaşabilirsiniz.', tags: ['liste', 'cok-satanlar'], isFeatured: false, articleType: 'haber',
  },
  {
    id: 'a5', title: 'Behiç Ak: Çizginin ve Sözün Ustası',
    slug: 'behic-ak-portre', category: 'Portreler',
    author: persons[7], publishDate: '18 Mart 2026',
    featuredImage: ph.articles[4],
    excerpt: 'Hem yazan hem çizen nadir yeteneklerden Behiç Ak\'ın hayat hikayesi ve eserleri.',
    body: 'Behiç Ak, 1956 yılında İstanbul\'da doğdu. Mimarlık eğitimi alan Ak, mesleğini çok kısa süre icra ettikten sonra kendini tamamen yazarlığa ve çizime adadı. Karikatürist olarak başladığı sanat yolculuğu, onu zamanla Türk çocuk edebiyatının en özgün isimlerinden biri haline getirdi. Hem yazan hem çizen nadir yeteneklerden olan Ak, eserlerinde mizahı felsefeyle, gündelik gözlemleri derin düşüncelerle harmanlıyor.\n\nAk\'ın çocuk kitapları arasında "Gülümseten Öyküler" serisi, "Alaaddin\'in Geveze Su Boruları" ve "Galata\'nın Tembel Martısı" öne çıkıyor. Bu eserlerde hem çocuklara hem yetişkinlere seslenen çok katmanlı bir anlatım söz konusu. Karikatürleri ise yıllarca Cumhuriyet gazetesinde yayımlandı. Tiyatro oyunları da yazan Ak, sanatın birçok dalında üretken bir isim olarak tanınıyor.\n\nBirçok ulusal ve uluslararası ödülün sahibi olan Behiç Ak, çocuk edebiyatına bakışını şöyle özetliyor: "Çocuklar için yazmak, en dürüst okurlar için yazmaktır. Onları kandıramazsınız. Eğer bir hikaye gerçekten iyi değilse, çocuk kitabı yarıda bırakır ve başka bir şey yapmaya başlar." Bu samimi yaklaşım, onun eserlerinin nesiller boyu sevilmesinin en büyük nedeni.', tags: ['portre', 'behic-ak'], isFeatured: false, articleType: 'portre',
  },
  {
    id: 'a6', title: 'Okuma Alışkanlığını Kazandırmanın 10 Yolu',
    slug: 'okuma-aliskanligini-kazandirma', category: 'Pusula',
    author: persons[3], publishDate: '15 Mart 2026',
    featuredImage: ph.articles[5],
    excerpt: 'Çocuğunuza okuma sevgisi aşılamanın pratik ve eğlenceli yollarını keşfedin.',
    body: 'Okuma alışkanlığı, çocukluk döneminde kazanıldığında ömür boyu süren bir hazinedir. Ancak birçok ebeveyn çocuğuna nasıl okuma sevgisi aşılayacağını bilemiyor. İşte uzmanların önerdiği 10 etkili yöntem: Birincisi, evde bir okuma köşesi oluşturun. Rahat bir koltuk, iyi bir aydınlatma ve ulaşılabilir raf düzeni çocuğun kitapla buluşmasını kolaylaştırır. İkincisi, kendiniz de okuyun. Çocuklar taklit ederek öğrenir; ebeveynini kitap okurken gören çocuk, bunu doğal bir etkinlik olarak benimser.\n\nÜçüncüsü, her gece yatmadan önce birlikte okuma ritüeli oluşturun. Bu hem bağ kurar hem alışkanlık kazandırır. Dördüncüsü, çocuğun kitap seçimine saygı gösterin; ilgi alanına göre seçim yapmasına izin verin. Beşincisi, kitapları ödül olarak kullanın. Altıncısı, kütüphane ziyaretlerini düzenli hale getirin. Yedincisi, okuduğunuz kitapları birlikte konuşun ve tartışın.\n\nSekizincisi, kitap kulüpleri veya okuma gruplarına katılın. Dokuzuncusu, dijital ekranlarla geçirilen süreyi sınırlandırarak kitaba zaman ayırın. Ve onuncusu, sabırlı olun. Her çocuğun okumaya ısınma süreci farklıdır. Zorlamak yerine teşvik etmek, kitapla kurulan ilişkiyi olumlu tutar. Unutmayın, bir çocuğa verebileceğiniz en değerli hediye, okuma sevgisidir.', tags: ['pusula', 'okuma-aliskanlik'], isFeatured: false, articleType: 'kose-yazisi',
  },
  {
    id: 'a7', title: 'Dünya Çocuk Kitabı Günü Etkinlikleri',
    slug: 'dunya-cocuk-kitabi-gunu', category: 'Haberler',
    author: persons[7], publishDate: '12 Mart 2026',
    featuredImage: ph.articles[6],
    excerpt: '2 Nisan Dünya Çocuk Kitabı Günü kapsamında Türkiye genelinde onlarca etkinlik düzenleniyor.',
    body: '2 Nisan Dünya Çocuk Kitabı Günü yaklaşırken, Türkiye genelinde çocuk edebiyatını kutlamak için kapsamlı bir etkinlik programı hazırlandı. IBBY (Uluslararası Çocuk Kitapları Kurulu) Türkiye Şubesi koordinasyonunda 81 ilde eş zamanlı etkinlikler düzenlenecek. İstanbul\'da Beyoğlu Çocuk Kütüphanesi\'nde tüm gün sürecek masal okuma maratonu, Ankara\'da CerModern\'de çocuk yazarlarıyla buluşma etkinlikleri programın öne çıkan başlıkları arasında.\n\nBu yılın teması "Kitaplarla Köprüler Kurmak" olarak belirlendi. Tema kapsamında farklı kültürlerden çocuk kitaplarının Türkçe çevirilerinden oluşan özel bir koleksiyon tanıtılacak. Ayrıca 50\'den fazla okulda yazar söyleşileri, kitap bağışı kampanyaları ve yaratıcı yazarlık atölyeleri gerçekleştirilecek. İzmir, Antalya, Bursa, Gaziantep ve Trabzon\'da da yerel kütüphaneler ve belediyeler iş birliğiyle çeşitli etkinlikler planlanıyor.\n\nEtkinlikler kapsamında ayrıca bir online program da hazırlandı. Sosyal medya üzerinden canlı yayınlanacak yazar söyleşileri, çocuklar için interaktif hikaye anlatımı ve "Ailece Okuyoruz" kampanyası dijital platformlarda yer alacak. Tüm etkinlik takvimi ve detaylı program bilgisi cocukyayini.com üzerinden takip edilebilir.', tags: ['etkinlik', 'dunya-cocuk-kitabi-gunu'], isFeatured: false, articleType: 'haber',
  },
  {
    id: 'a8', title: 'Mavisel Yener ile Fantastik Edebiyat Söyleşisi',
    slug: 'mavisel-yener-soylesi', category: 'Söyleşiler',
    author: persons[2], publishDate: '10 Mart 2026',
    featuredImage: ph.articles[7],
    excerpt: 'Fantastik çocuk edebiyatının Türkiye\'deki öncüsü Mavisel Yener ile keyifli bir sohbet.',
    body: 'Mavisel Yener, Türkiye\'de fantastik çocuk edebiyatının öncülerinden biri. Yıllardır büyülü dünyalar, gizemli karakterler ve olağanüstü maceralar kaleme alan Yener ile fantastik edebiyatın çocuklar üzerindeki etkisini konuştuk. "Fantastik edebiyat, çocuğun hayal gücünü sınırsız bir evrene taşır" diyen Yener, bu türün sadece eğlence değil, aynı zamanda eleştirel düşünme ve empati geliştirme aracı olduğunu vurguladı.\n\nYener\'e göre Türkiye\'de fantastik çocuk edebiyatı son 20 yılda büyük bir gelişme gösterdi. "Eskiden bu tür kitaplar \'gerçekçi değil\' diye eleştirilirdi. Oysa dünya edebiyatının en büyük eserleri fantastik unsurlar taşır. Mitolojimiz, masallarımız zaten fantastik anlatının ta kendisidir" dedi. Anadolu mitolojisinden esinlenerek yazdığı son kitabında Hitit tanrıçalarını modern bir maceraya taşıdığını anlattı.\n\nSöyleşinin sonunda genç yazarlara tavsiyelerde bulunan Yener, "Çok okuyun, çok hayal kurun ve yazmaktan asla korkmayın. Fantastik edebiyat cesaret ister; alışılmışın dışına çıkmak, yeni dünyalar yaratmak ve okuru oraya inandırıcı bir şekilde taşımak gerekir. Ama bunu başardığınızda, hem çocukların hem yetişkinlerin gözlerindeki ışığı göreceksiniz" diye sözlerini tamamladı.', tags: ['soylesi', 'fantastik'], isFeatured: false, articleType: 'soylesi',
  },
  {
    id: 'a9', title: 'Çocuk Kütüphaneleri: Dünden Bugüne',
    slug: 'cocuk-kutuphaneleri-dosya', category: 'Dosya/Gündem',
    author: persons[7], publishDate: '8 Mart 2026',
    featuredImage: ph.articles[8],
    excerpt: 'Türkiye\'deki çocuk kütüphanelerinin tarihçesi ve günümüzdeki durumu hakkında kapsamlı bir dosya.',
    body: 'Türkiye\'de çocuk kütüphanelerinin tarihi Cumhuriyet\'in ilk yıllarına kadar uzanır. 1925 yılında Ankara\'da açılan ilk çocuk kütüphanesi, genç Cumhuriyet\'in okuma kültürüne verdiği önemin simgesi olmuştu. Yıllar içinde büyükşehirlerde çocuklara özel kütüphaneler yaygınlaştı, ancak kırsal bölgelerde erişim hep sınırlı kaldı. Bugün Türkiye genelinde 1.200\'den fazla halk kütüphanesinde çocuk bölümü bulunuyor, ancak bağımsız çocuk kütüphanesi sayısı yalnızca 85 civarında.\n\nSon yıllarda belediyelerin ve sivil toplum kuruluşlarının öncülüğünde çocuk kütüphaneleri yeni bir ivme kazandı. İstanbul\'da Beyoğlu Çocuk Kütüphanesi, Ankara\'da Çankaya Çocuk Kütüphanesi ve İzmir\'de Bornova Çocuk Kütüphanesi modern tasarımları ve zengin koleksiyonlarıyla örnek mekanlar haline geldi. Bu kütüphaneler artık sadece kitap ödünç verilen yerler değil; masal saatleri, kodlama atölyeleri, sanat etkinlikleri ve yazar buluşmalarıyla çocukların sosyal ve kültürel gelişimine katkı sağlayan yaşam alanlarına dönüştü.\n\nAncak zorluklar da devam ediyor. Bütçe kısıtlamaları, nitelikli personel eksikliği ve dijitalleşme sürecine uyum sağlama gibi sorunlar çocuk kütüphanelerinin önündeki en büyük engeller. Uzmanlar, çocuk kütüphanelerinin geleceğinin dijital ve fiziksel deneyimi birleştiren hibrit modellerde yattığını belirtiyor. Sesli kitap köşeleri, e-kitap platformları ve interaktif okuma alanları geleceğin çocuk kütüphanelerinin vazgeçilmez unsurları olacak.', tags: ['dosya', 'kutuphane'], isFeatured: false, articleType: 'dosya',
  },
  {
    id: 'a10', title: 'İllüstrasyon Sanatı ve Çocuk Kitapları',
    slug: 'illustrasyon-sanati', category: 'Haberler',
    author: persons[1], publishDate: '5 Mart 2026',
    featuredImage: ph.articles[9],
    excerpt: 'Çocuk kitaplarında illüstrasyonun önemi ve Türk illüstratörlerin dünya sahnesindeki yeri.',
    body: 'Çocuk kitaplarında illüstrasyon, metnin ayrılmaz bir parçasıdır. Özellikle okuma öncesi ve erken okuma dönemindeki çocuklar için görseller, hikayeyi anlamanın ve kitapla bağ kurmanın temel aracıdır. İyi bir illüstrasyon sadece metni resimlendirmekle kalmaz, hikayeye yeni katmanlar ekler, çocuğun hayal gücünü besler ve görsel okur-yazarlığını geliştirir. Türkiye\'de çocuk kitabı illüstrasyonu son yıllarda uluslararası düzeyde büyük bir sıçrama yaşıyor.\n\nBologna Çocuk Kitapları Fuarı\'nda son beş yılda Türk illüstratörler düzenli olarak sergilere katılıyor ve ödüller kazanıyor. Feridun Oral, Sedat Girgin, Mustafa Delioğlu ve Gözde Bitir gibi isimler uluslararası yayınevleriyle çalışarak Türk illüstrasyon sanatını dünyaya tanıtıyor. Bu başarıların arkasında hem geleneksel Türk sanatından beslenen zengin bir görsel miras hem de çağdaş tekniklere açık yenilikçi bir yaklaşım var.\n\nİllüstrasyon eğitimi de gelişiyor. Üniversitelerin grafik tasarım ve güzel sanatlar bölümlerinde çocuk kitabı illüstrasyonuna özel dersler ve atölyeler açılıyor. Ayrıca bağımsız illüstratörlerin kendi kitaplarını yazıp çizdikleri "yazar-çizer" modeli Türkiye\'de giderek yaygınlaşıyor. Uzmanlar, dijital çizim tekniklerinin geleneksel yöntemlerle harmanlandığı yeni bir dönemin başladığını ve Türk illüstrasyonunun altın çağını yaşadığını söylüyor.', tags: ['illustrasyon', 'sanat'], isFeatured: false, articleType: 'haber',
  },
  {
    id: 'a11', title: 'Matraksiyon: Kitap Kurdu Olmanın Yan Etkileri',
    slug: 'matraksiyon-kitap-kurdu', category: 'Köşe Yazıları',
    author: persons[1], publishDate: '3 Mart 2026',
    featuredImage: ph.articles[10],
    excerpt: 'Kitap okumayı çok sevenler için mizahi bir bakış açısı. Dikkat: Kitap bağımlılığı bulaşıcıdır!',
    body: 'Kitap kurdu olmak kolay iş değildir. Öncelikle evinizin her köşesinde, çantanızın her cebinde, hatta banyoda bile kitap bulundurmak zorundasınız. Bir kitap kurdunun hayatı şöyle başlar: Sabah uyanırsınız, gece yarısına kadar okuduğunuz kitabın son sayfasını hatırlamaya çalışırsınız. Kahvaltıda bir elinizde çay bardağı, diğerinde kitap. Okula ya da işe giderken otobüste okursunuz, durakları kaçırırsınız. Bunlar meslek hastalığıdır, tedavisi yoktur.\n\nKitap kurdunun en büyük sorunu ise raf alanıdır. Kitaplarınız yatağınızın altına, buzdolabının üstüne, ayakkabılığın içine kadar yayılır. Aileniz "Bu eve bir kitap daha girmeyecek!" der, siz de ertesi gün kitapçıdan üç kitapla dönersiniz. Çünkü kitapçıya "sadece bakmak için" girmek, pastaneye "sadece koklamak için" girmek kadar imkansızdır.\n\nAma kitap kurdu olmanın en güzel yanı, hiç yalnız hissetmemenizdir. Elinizde bir kitap varsa, yanınızda yüzlerce karakter, düzinelerce dünya ve sonsuz macera var demektir. Kitap bağımlılığı bulaşıcıdır derler; bu tamamen doğru. Eğer çocuğunuz kitap kurdu olduysa, tebrikler, en güzel hastalığa yakalanmış demektir. Reçetesi basit: Daha çok kitap!', tags: ['mizah', 'matraksiyon'], isFeatured: false, articleType: 'kose-yazisi',
  },
  {
    id: 'a12', title: 'Anadolu\'dan Masallar: Unutulmaya Yüz Tutan Hikayeler',
    slug: 'anadolu-masallari', category: 'Dosya/Gündem',
    author: persons[4], publishDate: '1 Mart 2026',
    featuredImage: ph.articles[11],
    excerpt: 'Anadolu\'nun zengin masal geleneğinden derlenen ve yeniden yorumlanan hikayeler.',
    body: 'Anadolu, binlerce yıllık tarihiyle dünyanın en zengin masal geleneklerinden birine ev sahipliği yapıyor. Hitit tabletlerinden Selçuklu minyatürlerine, Osmanlı meddah geleneğinden köy odalarındaki ninelerin anlattığı hikayelere kadar uzanan bu gelenek, ne yazık ki modernleşme sürecinde büyük ölçüde unutulmaya yüz tuttu. Oysa bu masallar sadece eğlence aracı değil, toplumsal hafızanın, değerler sisteminin ve kültürel kimliğin taşıyıcılarıdır.\n\nAnadolu masallarının en dikkat çekici özelliklerinden biri, bölgeden bölgeye değişen zengin çeşitlilikleridir. Karadeniz\'in "Keloğlan" anlatıları ile Güneydoğu\'nun "Mem û Zîn" geleneği, Ege\'nin Yunan mitolojisiyle iç içe geçmiş hikayeleri ile İç Anadolu\'nun bozkır destanları birbirinden farklı ama hepsi eşsiz değerdedir. Araştırmacılar son yıllarda köylerde yaşayan son masal anlatıcılarıyla görüşerek bu hikayeleri kayıt altına almaya çalışıyor.\n\nGünümüzde bazı yazarlar ve yayınevleri bu unutulan masalları çocuklar için yeniden yorumluyor. Modern illüstrasyonlarla bezenen, günümüz Türkçesiyle sadeleştirilen bu masallar, çocuklara hem kültürel kökleriyle bağ kurma imkanı sunuyor hem de evrensel değerleri aktarıyor. Adalet, cesaret, paylaşma ve doğaya saygı gibi temalar, yüzyıllar önce anlatılan bu hikayelerin özünde zaten var. Anadolu masalları projesi kapsamında şimdiye kadar 300\'den fazla masal derlendi ve bunların 50\'si çocuk kitabı olarak yayımlandı.', tags: ['masal', 'anadolu', 'kultur'], isFeatured: false, articleType: 'dosya',
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
