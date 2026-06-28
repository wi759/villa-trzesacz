import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Baltic Prestige Trzęsacz | Exklusive Küstenimmobilie",
  description: "Exklusive Ferienvilla in Trzęsacz (Polen) in unmittelbarer Strandnähe (100m). Ruhige Premiumlage, hervorragende Kapitalanlage. Ekskluzywny dom nad morzem w Trzęsaczu.",
  keywords: [
    "Immobilie Trzęsacz",
    "Haus an der Ostsee Polen",
    "Ferienhaus Ostsee Polen",
    "Immobilien Polen Ostsee",
    "Dom nad morzem Trzęsacz",
    "Nieruchomość nad Bałtykiem",
    "Villa Letniskowa 4a"
  ],
  authors: [{ name: "Baltic Prestige" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`} style={{ scrollBehavior: 'smooth' }}>
      <body>{children}</body>
    </html>
  );
}
