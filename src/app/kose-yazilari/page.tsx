import { getArticlesByType } from '@/lib/contentful';
import KoseYazilariClient from './KoseYazilariClient';

export default async function KoseYazilariPage() {
  const articles = await getArticlesByType('kose-yazisi');

  return <KoseYazilariClient articles={articles} />;
}
