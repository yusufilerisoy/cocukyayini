import { getVideos } from '@/lib/contentful';
import Breadcrumb from '@/components/shared/Breadcrumb';
import VideoArsivClient from './VideoArsivClient';

export default async function VideoArsivPage() {
  const videos = await getVideos();
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Video Arşiv' }]} />

      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Video Arşiv</h1>
      <p className="text-sm text-gray-500 mb-8">
        Röportajlar, etkinlikler, atölyeler ve daha fazlası.
      </p>

      <VideoArsivClient videos={videos} />
    </div>
  );
}
