import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { getVideos } from '@/lib/contentful';
import { HiPlay } from 'react-icons/hi';

export default async function VideoArsivPage() {
  const videos = await getVideos();
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Video Arşiv' }]} />

      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Video Arşiv</h1>
      <p className="text-sm text-gray-500 mb-8">
        Röportajlar, etkinlikler, atölyeler ve daha fazlası.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <HiPlay className="w-7 h-7 text-accent-red ml-1" />
                </div>
              </div>
              <span className="absolute top-3 left-3 bg-accent-red text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                {video.category}
              </span>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-gray-800 text-sm mb-1 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-2 mb-2">{video.description}</p>
              <p className="text-[11px] text-gray-400">{video.publishDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
