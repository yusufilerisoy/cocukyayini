import { getArticlesByType } from '@/lib/contentful';
import SoylesilerClient from './SoylesilerClient';

export default async function SoylesilerPage() {
  const articles = await getArticlesByType('soylesi');

  return <SoylesilerClient articles={articles} />;
}
