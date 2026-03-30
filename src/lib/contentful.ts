/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient, type EntryCollection } from 'contentful';

// ---------------------------------------------------------------------------
// Re-export interfaces (same shapes as mockData.ts)
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Contentful client
// ---------------------------------------------------------------------------

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID || 'ysx9d9kfylsx';
const ACCESS_TOKEN =
  process.env.CONTENTFUL_ACCESS_TOKEN ||
  'YcWzzQ2dNCke3oikvg6gwNm5rfW0fgJBRBfQlFUbUuw';

const client = createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Resolve asset URL, prepending "https:" when the URL starts with "//" */
function assetUrl(asset: any): string {
  const url: string | undefined = asset?.fields?.file?.url;
  if (!url) return '';
  return url.startsWith('//') ? `https:${url}` : url;
}

/**
 * Extract plain-text from a Contentful Rich Text document.
 * Paragraphs are joined with double newlines.
 */
function richTextToString(richText: any): string {
  if (!richText?.content) return '';
  return richText.content
    .filter((node: any) => node.nodeType === 'paragraph')
    .map((node: any) =>
      node.content
        ?.filter((c: any) => c.nodeType === 'text')
        .map((c: any) => c.value)
        .join('') || ''
    )
    .join('\n\n');
}

/** Safe string accessor that falls back to an empty string. */
function str(value: unknown, fallback = ''): string {
  return typeof value === 'string' ? value : fallback;
}

/** Safe boolean accessor. */
function bool(value: unknown): boolean {
  return value === true;
}

/** Safe string-array accessor. */
function strArr(value: unknown): string[] {
  if (Array.isArray(value)) return value.map(String);
  return [];
}

// ---------------------------------------------------------------------------
// Transformers
// ---------------------------------------------------------------------------

function transformPerson(entry: any): Person {
  const f = entry?.fields ?? {};
  return {
    id: entry?.sys?.id ?? '',
    name: str(f.name),
    slug: str(f.slug),
    photo: assetUrl(f.photo) || str(f.photoUrl) || `https://picsum.photos/seed/${str(f.slug) || 'default'}/400/400`,
    bio: typeof f.bio === 'object' ? richTextToString(f.bio) : str(f.bio),
    role: strArr(f.role),
  };
}

const UNKNOWN_PERSON: Person = {
  id: '',
  name: 'Bilinmeyen Yazar',
  slug: '',
  photo: '',
  bio: '',
  role: [],
};

function transformArticle(entry: any): Article {
  const f = entry?.fields ?? {};
  const author = f.author?.fields ? transformPerson(f.author) : UNKNOWN_PERSON;

  return {
    id: entry?.sys?.id ?? '',
    title: str(f.title),
    slug: str(f.slug),
    category: str(f.category),
    articleType: str(f.articleType, 'haber') as Article['articleType'],
    author,
    publishDate: str(f.publishDate),
    featuredImage: assetUrl(f.featuredImage) || str(f.imageUrl),
    excerpt: str(f.excerpt),
    body: typeof f.body === 'object' ? richTextToString(f.body) : str(f.body),
    tags: strArr(f.tags),
    isFeatured: bool(f.isFeatured),
  };
}

function transformBook(entry: any): Book {
  const f = entry?.fields ?? {};
  const author = f.author?.fields ? transformPerson(f.author) : UNKNOWN_PERSON;

  return {
    id: entry?.sys?.id ?? '',
    title: str(f.title),
    slug: str(f.slug),
    coverImage: assetUrl(f.coverImage) || str(f.coverUrl),
    author,
    publisher: str(f.publisher),
    ageGroup: str(f.ageGroup),
    category: str(f.category),
    description:
      typeof f.description === 'object'
        ? richTextToString(f.description)
        : str(f.description),
    tags: strArr(f.tags),
    isFeatured: bool(f.isFeatured),
    buyLinks:
      f.buyLinks && typeof f.buyLinks === 'object' ? f.buyLinks : {},
  };
}

function transformEvent(entry: any): Event {
  const f = entry?.fields ?? {};
  return {
    id: entry?.sys?.id ?? '',
    title: str(f.title),
    slug: str(f.slug),
    date: str(f.date),
    endDate: f.endDate ? str(f.endDate) : undefined,
    location: str(f.location),
    city: str(f.city),
    description:
      typeof f.description === 'object'
        ? richTextToString(f.description)
        : str(f.description),
    image: assetUrl(f.image) || str(f.imageUrl),
    eventType: str(f.eventType),
  };
}

function transformVideo(entry: any): Video {
  const f = entry?.fields ?? {};
  return {
    id: entry?.sys?.id ?? '',
    title: str(f.title),
    slug: str(f.slug),
    thumbnail: assetUrl(f.thumbnail) || str(f.thumbnailUrl),
    videoUrl: str(f.videoUrl),
    description:
      typeof f.description === 'object'
        ? richTextToString(f.description)
        : str(f.description),
    publishDate: str(f.publishDate),
    category: str(f.category),
  };
}

function transformHeroBanner(entry: any): HeroBanner {
  const f = entry?.fields ?? {};
  return {
    id: entry?.sys?.id ?? '',
    title: str(f.title),
    subtitle: str(f.subtitle),
    image: assetUrl(f.image) || str(f.imageUrl),
    linkUrl: str(f.linkUrl),
  };
}

function transformWeeklyHighlight(entry: any): WeeklyHighlightItem {
  const f = entry?.fields ?? {};
  return {
    id: entry?.sys?.id ?? '',
    type: str(f.type),
    title: str(f.title),
    description:
      typeof f.description === 'object'
        ? richTextToString(f.description)
        : str(f.description),
    image: assetUrl(f.image) || str(f.imageUrl),
    period: str(f.period),
  };
}

// ---------------------------------------------------------------------------
// Generic fetch helper
// ---------------------------------------------------------------------------

async function fetchEntries<T>(
  contentType: string,
  transform: (entry: any) => T,
  query: Record<string, unknown> = {},
): Promise<T[]> {
  const res: EntryCollection<any> = await client.getEntries({
    content_type: contentType,
    include: 2,
    ...query,
  });
  return res.items.map(transform);
}

async function fetchSingleEntry<T>(
  contentType: string,
  transform: (entry: any) => T,
  query: Record<string, unknown> = {},
): Promise<T | undefined> {
  const res: EntryCollection<any> = await client.getEntries({
    content_type: contentType,
    include: 2,
    limit: 1,
    ...query,
  });
  const item = res.items[0];
  return item ? transform(item) : undefined;
}

// ---------------------------------------------------------------------------
// Persons
// ---------------------------------------------------------------------------

export async function getPersons(): Promise<Person[]> {
  return fetchEntries('person', transformPerson);
}

export async function getPersonBySlug(
  slug: string,
): Promise<Person | undefined> {
  return fetchSingleEntry('person', transformPerson, {
    'fields.slug': slug,
  });
}

export async function getPersonsByRole(role: string): Promise<Person[]> {
  return fetchEntries('person', transformPerson, {
    'fields.role': role,
  });
}

// ---------------------------------------------------------------------------
// Articles
// ---------------------------------------------------------------------------

export async function getArticles(): Promise<Article[]> {
  return fetchEntries('article', transformArticle, {
    order: ['-fields.publishDate'],
  });
}

export async function getArticleBySlug(
  slug: string,
): Promise<Article | undefined> {
  return fetchSingleEntry('article', transformArticle, {
    'fields.slug': slug,
  });
}

export async function getArticlesByType(type: string): Promise<Article[]> {
  return fetchEntries('article', transformArticle, {
    'fields.articleType': type,
    order: ['-fields.publishDate'],
  });
}

export async function getFeaturedArticle(
  type?: string,
): Promise<Article | undefined> {
  const query: Record<string, unknown> = {
    'fields.isFeatured': true,
    order: ['-fields.publishDate'],
  };
  if (type) {
    query['fields.articleType'] = type;
  }
  return fetchSingleEntry('article', transformArticle, query);
}

// ---------------------------------------------------------------------------
// Books
// ---------------------------------------------------------------------------

export async function getBooks(): Promise<Book[]> {
  return fetchEntries('book', transformBook);
}

export async function getBookBySlug(
  slug: string,
): Promise<Book | undefined> {
  return fetchSingleEntry('book', transformBook, {
    'fields.slug': slug,
  });
}

export async function getBooksByCategory(
  category: string,
): Promise<Book[]> {
  return fetchEntries('book', transformBook, {
    'fields.category': category,
  });
}

// ---------------------------------------------------------------------------
// Events
// ---------------------------------------------------------------------------

export async function getEvents(): Promise<Event[]> {
  return fetchEntries('event', transformEvent, {
    order: ['fields.date'],
  });
}

// ---------------------------------------------------------------------------
// Videos
// ---------------------------------------------------------------------------

export async function getVideos(): Promise<Video[]> {
  return fetchEntries('videoContent', transformVideo, {
    order: ['-fields.publishDate'],
  });
}

// ---------------------------------------------------------------------------
// Hero Banners
// ---------------------------------------------------------------------------

export async function getHeroBanners(): Promise<HeroBanner[]> {
  return fetchEntries('heroBanner', transformHeroBanner);
}

// ---------------------------------------------------------------------------
// Weekly Highlights
// ---------------------------------------------------------------------------

export async function getWeeklyHighlights(): Promise<WeeklyHighlightItem[]> {
  return fetchEntries('weeklyHighlight', transformWeeklyHighlight);
}
