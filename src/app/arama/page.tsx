import { getArticles, getBooks } from '@/lib/contentful';
import AramaClient from './AramaClient';

export default async function AramaPage() {
  const [articles, books] = await Promise.all([getArticles(), getBooks()]);
  return <AramaClient articles={articles} books={books} />;
}
