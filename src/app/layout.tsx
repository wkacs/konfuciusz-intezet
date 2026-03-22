import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ELTE Konfuciusz Intézet, Budapest",
  description: "Hiteles kínai nyelvoktatás, kínai nyelvtanfolyamok mindenkinek. Az ELTE Konfuciusz Intézet 2006 óta kínál magas színvonalú kínai nyelvtanfolyamokat és kulturális programokat.",
  keywords: "kínai nyelvtanfolyam, HSK vizsga, kínai nyelv, Konfuciusz Intézet, ELTE, Budapest, kínai kultúra",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hu" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
