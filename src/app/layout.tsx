import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Çocuk Yayını | Türkiye'nin Çocuk Edebiyatı Platformu",
  description:
    "Çocuk yayıncılığı ve edebiyatı hakkında haberler, söyleşiler, kitap tanıtımları, etkinlikler ve daha fazlası.",
  keywords: "çocuk kitapları, çocuk edebiyatı, çocuk yayıncılığı, kitap önerileri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="font-nunito antialiased bg-white text-text min-h-screen flex flex-col">
        <Header />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
