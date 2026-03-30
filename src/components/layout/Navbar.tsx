'use client';

import Link from 'next/link';
import { useState } from 'react';
import { HiChevronDown, HiMenu, HiX, HiSearch } from 'react-icons/hi';

interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: 'Haberler',
    href: '/haberler',
    children: [
      { label: "kEditör'den", href: '/haberler/keditoreden' },
      { label: 'Etkinlik Takvimi', href: '/etkinlikler' },
      { label: 'Dosya / Gündem', href: '/haberler/dosya-gundem' },
      { label: 'Çizgiyle', href: '/haberler/cizgiyle' },
    ],
  },
  { label: 'Söyleşiler', href: '/soylesiler' },
  {
    label: 'Kitaplar & Yayınlar',
    href: '/kitaplar',
    children: [
      { label: 'Yeni Çıkanlar', href: '/kitaplar/yeni-cikanlar' },
      { label: 'Çok Satanlar', href: '/kitaplar/cok-satanlar' },
      { label: 'Başucu Kitapları', href: '/kitaplar/basucu' },
      { label: 'Yaş Grupları', href: '/kitaplar/yas-gruplari' },
      { label: 'Dergiler', href: '/kitaplar/dergiler' },
      { label: 'Aile Kitaplığı', href: '/kitaplar/aile-kitapligi' },
    ],
  },
  {
    label: 'Köşe Yazıları',
    href: '/kose-yazilari',
    children: [
      { label: 'En-Gerekli Köşe', href: '/kose-yazilari/en-gerekli-kose' },
      { label: 'Pusula', href: '/kose-yazilari/pusula' },
      { label: 'Matraksiyon', href: '/kose-yazilari/matraksiyon' },
    ],
  },
  {
    label: 'Kitap Gezegeni',
    href: '/kitap-gezegeni',
    children: [
      { label: 'Mekanlar', href: '/kitap-gezegeni/mekanlar' },
      { label: 'Dünyadan Kitap', href: '/kitap-gezegeni/dunyadan' },
    ],
  },
  { label: 'Okuma Oyunu', href: '/okuma-oyunu' },
  { label: 'Tadımlık', href: '/tadimlik' },
  {
    label: 'Portreler',
    href: '/portreler',
    children: [
      { label: 'Yazarlar', href: '/portreler/yazarlar' },
      { label: 'Çizerler', href: '/portreler/cizerler' },
      { label: 'Yayıncılar', href: '/portreler/yayincilar' },
      { label: 'Kitap Kahramanları', href: '/portreler/kahramanlar' },
    ],
  },
  { label: 'Video Arşiv', href: '/video-arsiv' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-primary sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <li
                key={item.href}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-3 text-white text-sm font-semibold hover:bg-white/20 transition-colors whitespace-nowrap"
                >
                  {item.label}
                  {item.children && <HiChevronDown className="w-3.5 h-3.5" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white shadow-xl rounded-b-lg min-w-[200px] py-2 z-50 border-t-2 border-primary">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Search */}
          <div className="hidden lg:flex items-center">
            {searchOpen ? (
              <div className="flex items-center bg-white/20 rounded-full px-3 py-1.5">
                <input
                  type="text"
                  placeholder="Ara..."
                  className="bg-transparent text-white placeholder-white/70 text-sm outline-none w-40"
                  autoFocus
                  onBlur={() => setSearchOpen(false)}
                />
                <HiSearch className="w-4 h-4 text-white/70" />
              </div>
            ) : (
              <button
                onClick={() => setSearchOpen(true)}
                className="p-3 text-white hover:bg-white/20 transition-colors"
                aria-label="Ara"
              >
                <HiSearch className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Mobile toggle */}
          <div className="flex lg:hidden items-center justify-between w-full py-2">
            <span className="text-white font-bold text-sm">MENU</span>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-white"
              aria-label="Menü"
            >
              {mobileOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t-2 border-primary shadow-xl max-h-[80vh] overflow-y-auto">
          {/* Mobile Search */}
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <HiSearch className="w-5 h-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Ara..."
                className="bg-transparent text-sm outline-none flex-1"
              />
            </div>
          </div>
          {navItems.map((item) => (
            <div key={item.href} className="border-b border-gray-50">
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-sm font-semibold text-gray-800 hover:text-primary flex-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className="px-4 py-3 text-gray-400"
                  >
                    <HiChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                )}
              </div>
              {item.children && openDropdown === item.label && (
                <div className="bg-gray-50 pb-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-8 py-2 text-sm text-gray-600 hover:text-primary"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
