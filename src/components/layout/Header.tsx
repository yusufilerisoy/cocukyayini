'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaRss } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { MdLanguage } from 'react-icons/md';
import { useState } from 'react';

const topLinks = [
  { label: 'Ana Sayfa', href: '/', icon: HiHome },
  { label: 'Hakkımızda', href: '/hakkimizda' },
  { label: 'Katkı Verenler', href: '/katki-verenler' },
  { label: 'İletişim', href: '/iletisim' },
];

const socialLinks = [
  { icon: FaFacebookF, href: '#', color: 'hover:text-blue-600', label: 'Facebook' },
  { icon: FaTwitter, href: '#', color: 'hover:text-sky-500', label: 'Twitter' },
  { icon: FaInstagram, href: '#', color: 'hover:text-pink-500', label: 'Instagram' },
  { icon: FaYoutube, href: '#', color: 'hover:text-red-600', label: 'YouTube' },
  { icon: FaRss, href: '#', color: 'hover:text-orange-500', label: 'RSS' },
];

export default function Header() {
  const [lang, setLang] = useState<'tr' | 'en'>('tr');

  return (
    <header className="bg-white border-b border-gray-100">
      {/* Top bar */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4 flex items-center justify-between py-1.5 text-xs text-gray-500">
          <nav className="flex items-center gap-4">
            {topLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                {link.icon && <link.icon className="w-3.5 h-3.5" />}
                <span>{link.label}</span>
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
            <div className="border-l border-gray-300 pl-3">
              <button
                onClick={() => setLang(lang === 'tr' ? 'en' : 'tr')}
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <MdLanguage className="w-4 h-4" />
                <span className="font-medium">{lang === 'tr' ? 'EN' : 'TR'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Logo + Banner area */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Çocuk Yayını"
            width={280}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>
        {/* Banner 01 - Logo yanı */}
        <div className="hidden md:block">
          <div className="bg-secondary/20 border-2 border-dashed border-secondary rounded-lg px-8 py-3 text-center">
            <span className="text-xs text-gray-400 font-medium">BANNER ALANI</span>
          </div>
        </div>
      </div>
    </header>
  );
}
