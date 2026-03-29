import Link from 'next/link';
import { HiPlay, HiPuzzle } from 'react-icons/hi';

export function VideoArchiveWidget() {
  return (
    <Link
      href="/video-arsiv"
      className="block bg-accent-red rounded-xl p-6 text-white hover:bg-red-700 transition-colors group"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
          <HiPlay className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-extrabold text-lg">Video Arşiv</h3>
          <p className="text-white/80 text-xs">Röportajlar, etkinlikler ve daha fazlası</p>
        </div>
      </div>
      <p className="text-white/70 text-sm mt-2">
        Çocuk edebiyatı dünyasından video içerikleri izleyin &rarr;
      </p>
    </Link>
  );
}

export function OkumaOyunuWidget() {
  return (
    <Link
      href="/okuma-oyunu"
      className="block bg-accent-red rounded-xl p-6 text-white hover:bg-red-700 transition-colors group"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
          <HiPuzzle className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-extrabold text-lg">Okuma Oyunu</h3>
          <p className="text-white/80 text-xs">Okumayı sevdiren etkinlikler</p>
        </div>
      </div>
      <p className="text-white/70 text-sm mt-2">
        Eğlenceli okuma etkinlikleriyle tanışın &rarr;
      </p>
    </Link>
  );
}
