import { getBooks } from '@/lib/contentful';
import KitaplarClient from './KitaplarClient';

export default async function KitaplarPage() {
  const books = await getBooks();

  return <KitaplarClient books={books} />;
}
