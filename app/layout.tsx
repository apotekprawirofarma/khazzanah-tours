import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { structuredData } from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Khazanah Tours Jakarta - Paket Wisata Terbaik di Jakarta",
  description:
    "Khazanah Tours Jakarta menyediakan paket wisata terbaik di Jakarta dan sekitarnya. Nikmati pengalaman wisata yang tak terlupakan dengan layanan profesional dan harga terjangkau.",
  keywords: [
    "wisata jakarta",
    "tour jakarta",
    "paket wisata",
    "travel jakarta",
    "wisata murah",
    "khazanah tours",
  ],
  authors: [{ name: "Khazanah Tours Jakarta" }],
  creator: "Khazanah Tours Jakarta",
  publisher: "Khazanah Tours Jakarta",
  metadataBase: new URL("https://khazzanahtoursjakarta.com"),
  alternates: {
    canonical: "https://khazzanahtoursjakarta.com",
  },
  openGraph: {
    title: "Khazanah Tours Jakarta - Paket Wisata Terbaik di Jakarta",
    description:
      "Khazanah Tours Jakarta menyediakan paket wisata terbaik di Jakarta dan sekitarnya. Nikmati pengalaman wisata yang tak terlupakan dengan layanan profesional dan harga terjangkau.",
    url: "https://khazzanahtoursjakarta.com",
    siteName: "Khazanah Tours Jakarta",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khazanah Tours Jakarta",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Khazanah Tours Jakarta - Paket Wisata Terbaik di Jakarta",
    description:
      "Khazanah Tours Jakarta menyediakan paket wisata terbaik di Jakarta dan sekitarnya. Nikmati pengalaman wisata yang tak terlupakan dengan layanan profesional dan harga terjangkau.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
