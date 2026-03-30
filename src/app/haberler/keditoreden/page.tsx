import { getArticles } from '@/lib/contentful';
import KeditoredenClient from './KeditoredenClient';

export default async function KeditoredenPage() {
  const allArticles = await getArticles();
  // Original page used articles.slice(0, 6) — editor picks are the first 6 articles
  const articles = allArticles.slice(0, 6);

  return <KeditoredenClient articles={articles} />;
}
