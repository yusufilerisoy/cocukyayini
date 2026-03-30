'use client';

import Link from 'next/link';
import Image from 'next/image';
import { img } from '@/lib/utils';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const corporateLinks = [
  { label: 'Ana Sayfa', href: '/' },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Katkı Verenler', href: '/katki-verenler' },
  { label: 'Basında Biz', href: '/basinda-biz' },
  { label: 'İletişim', href: '/iletisim' },
  { label: 'Site Haritası', href: '/site-haritasi' },
  { label: 'Arşiv', href: '/arsiv' },
];

const sectionLinks = [
  { label: 'Haberler', href: '/haberler' },
  { label: 'Söyleşiler', href: '/soylesiler' },
  { label: 'Köşe Yazıları', href: '/kose-yazilari' },
  { label: 'Okuma Oyunu', href: '/okuma-oyunu' },
  { label: 'Tadımlık', href: '/tadimlik' },
  { label: 'Kitap Gezegeni', href: '/kitap-gezegeni' },
  { label: 'Portreler', href: '/portreler' },
];

const publishLinks = [
  { label: 'Yeni Çıkanlar', href: '/kitaplar/yeni-cikanlar' },
  { label: 'Çok Satanlar', href: '/kitaplar/cok-satanlar' },
  { label: 'Başucu Kitapları', href: '/kitaplar/basucu' },
  { label: 'Dergiler', href: '/kitaplar/dergiler' },
  { label: 'Kağıtsız Kitap', href: '/kitaplar/kagitsiz-kitap' },
];

const socialLinks = [
  { icon: FaFacebookF, href: '#', label: 'Facebook' },
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer>
      {/* Newsletter Section */}
      <div className="bg-accent-cyan">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="bg-white rounded-full p-3">
                <HiMail className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-800">E-Bülten</h3>
                <p className="text-sm text-gray-600">
                  Çocuk yayıncılığı dünyasından haberleri kaçırmayın!
                </p>
              </div>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="E-posta adresiniz"
                className="px-4 py-3 rounded-l-full bg-white text-sm outline-none flex-1 md:w-72 border border-r-0 border-gray-200 focus:border-primary"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-r-full text-sm font-bold hover:bg-primary/90 transition-colors whitespace-nowrap">
                Kayıt Ol
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Banner 03 */}
      <div className="bg-secondary py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="border-2 border-dashed border-yellow-600/30 rounded-lg py-3">
            <span className="text-xs text-yellow-700/50 font-medium">BANNER ALANI</span>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-dark text-gray-300">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <Image
                src={img('/images/logo-transparent.png')}
                alt="Çocuk Yayını"
                width={180}
                height={32}
                className="h-10 w-auto mb-4 invert brightness-0 invert"
              />
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Türkiye&apos;nin çocuk yayıncılığı ve edebiyatı platformu. Haberler,
                söyleşiler, kitap tanıtımları ve daha fazlası.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Kurumsal */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                Kurumsal
              </h4>
              <ul className="space-y-2">
                {corporateLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bölümler */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                Bölümler
              </h4>
              <ul className="space-y-2">
                {sectionLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Yayınlar */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
                Yayınlar
              </h4>
              <ul className="space-y-2">
                {publishLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} Saklambaç Ltd. Şti. Tüm hakları saklıdır.</p>
            <p className="mt-2 md:mt-0">cocukyayini.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
