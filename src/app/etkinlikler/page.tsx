import Image from 'next/image';
import Breadcrumb from '@/components/shared/Breadcrumb';
import { events } from '@/data/mockData';
import { HiCalendar, HiLocationMarker } from 'react-icons/hi';

const eventTypeLabels: Record<string, string> = {
  fuar: 'Fuar',
  'imza-gunu': 'İmza Günü',
  atolye: 'Atölye',
  festival: 'Festival',
  okuma: 'Okuma Etkinliği',
  soylesi: 'Söyleşi',
};

const eventTypeColors: Record<string, string> = {
  fuar: 'bg-blue-500',
  'imza-gunu': 'bg-purple-500',
  atolye: 'bg-green-500',
  festival: 'bg-orange-500',
  okuma: 'bg-teal-500',
  soylesi: 'bg-primary',
};

export default function EtkinliklerPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'Etkinlik Takvimi' }]} />

      <h1 className="text-2xl font-extrabold text-gray-900 mb-2">Etkinlik Takvimi</h1>
      <p className="text-sm text-gray-500 mb-8">
        Çocuk edebiyatı dünyasından etkinlikler, fuarlar, imza günleri ve atölyeler.
      </p>

      <div className="space-y-5 pb-12">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col md:flex-row gap-5 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="relative w-full md:w-64 aspect-[16/10] md:aspect-auto flex-shrink-0 overflow-hidden">
              <Image src={event.image} alt={event.title} fill className="object-cover" />
              <span
                className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-full ${
                  eventTypeColors[event.eventType] || 'bg-gray-600'
                }`}
              >
                {eventTypeLabels[event.eventType] || event.eventType}
              </span>
            </div>
            <div className="p-5 flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-500 mb-3">{event.description}</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <HiCalendar className="w-4 h-4 text-primary" />
                  {event.date}
                  {event.endDate && ` - ${event.endDate}`}
                </span>
                <span className="flex items-center gap-1.5">
                  <HiLocationMarker className="w-4 h-4 text-primary" />
                  {event.location}, {event.city}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
