import Breadcrumb from '@/components/shared/Breadcrumb';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';

export default function IletisimPage() {
  return (
    <div className="container mx-auto px-4">
      <Breadcrumb items={[{ label: 'İletişim' }]} />

      <div className="max-w-3xl pb-12">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-6">İletişim</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Bize Ulaşın</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HiMail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-800">E-posta</p>
                  <a href="mailto:info@cocukyayini.com" className="text-sm text-primary hover:underline">
                    info@cocukyayini.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiPhone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-800">Telefon</p>
                  <p className="text-sm text-gray-600">+90 (212) 555 00 00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <HiLocationMarker className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-gray-800">Adres</p>
                  <p className="text-sm text-gray-600">
                    Saklambaç Ltd. Şti.<br />
                    İstanbul, Türkiye
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Mesaj Gönderin</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Adınız"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-primary"
              />
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-primary"
              />
              <textarea
                placeholder="Mesajınız"
                rows={5}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm outline-none focus:border-primary resize-none"
              />
              <button
                type="submit"
                className="bg-primary text-white font-bold text-sm px-6 py-2.5 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
