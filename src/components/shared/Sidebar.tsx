import { VideoArchiveWidget, OkumaOyunuWidget } from '../home/WidgetBoxes';

interface SidebarProps {
  showBanner?: boolean;
  showVideo?: boolean;
  showOkuma?: boolean;
}

export default function Sidebar({
  showBanner = true,
  showVideo = true,
  showOkuma = true,
}: SidebarProps) {
  return (
    <aside className="space-y-5">
      {showBanner && (
        <div className="bg-secondary/20 border-2 border-dashed border-secondary rounded-xl p-6 text-center">
          <span className="text-xs text-gray-400 font-medium">BANNER ALANI</span>
        </div>
      )}
      {showOkuma && <OkumaOyunuWidget />}
      {showVideo && <VideoArchiveWidget />}
    </aside>
  );
}
