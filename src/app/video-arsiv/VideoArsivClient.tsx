'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HiPlay, HiX } from 'react-icons/hi';
import type { Video } from '@/lib/contentful';

export default function VideoArsivClient({ videos }: { videos: Video[] }) {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setActiveVideo(video)}
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

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="bg-white rounded-xl overflow-hidden w-full max-w-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="font-bold text-gray-800 text-sm">{activeVideo.title}</h3>
              <button onClick={() => setActiveVideo(null)} className="text-gray-400 hover:text-gray-600">
                <HiX className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video">
              <iframe
                src={activeVideo.videoUrl}
                title={activeVideo.title}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
