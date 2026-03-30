import { getArticlesByType } from '@/lib/contentful';
import DosyaGundemClient from './DosyaGundemClient';

export default async function DosyaGundemPage() {
  const articles = await getArticlesByType('dosya');

  return <DosyaGundemClient articles={articles} />;
}
