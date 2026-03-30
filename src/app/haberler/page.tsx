import { getArticlesByType } from '@/lib/contentful';
import HaberlerClient from './HaberlerClient';

export default async function HaberlerPage() {
  const [haberler, dosyalar] = await Promise.all([
    getArticlesByType('haber'),
    getArticlesByType('dosya'),
  ]);
  const articles = [...haberler, ...dosyalar].sort(
    (a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );

  return <HaberlerClient articles={articles} />;
}
